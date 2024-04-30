import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getAccessToken = async (userId)=> {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        // const refreshToken = user.generateRefreshToken()
    
        // user.refreshToken = refreshToken
        await user.save({validateBeforeSave : false})
    
        return {
            accessToken,
            // refreshToken
        }
    } catch (error) {
        console.log(error);
        throw new ApiError(500, "Something went wrong during generating access and refresh tokens")
    }
}

//register new user
const registerUser = asyncHandler(async(req, res, next)=>{
    const {username, password, fullname, vehicleNumbers, adminAccess } = req.body;
    if (username === "" || password === "" || fullname === "") {
        return next(new ApiError(400, "Please fill all the fields"));
    }
    // checking for valid password
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/gm
    if (!passwordRegex.test(password)) {
        throw new ApiError(500, "Password should contain Uppercase, lowercase, numbers, special charecterrs and should be at least 8 char long")
    }
    // checking for valid vehicle number according to Indian standards
    const vehicleNumberRegex = /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/;
    vehicleNumbers.forEach(vehicle => {
        if (!vehicleNumberRegex.test(vehicle.vehicleNumber)) {
            throw new ApiError(500, "One or more vehicle numbers are not valid");
        }
    });
     //checking if user already exists
    const existedUser = await User.findOne({
        $or : [
            {username: username}, 
            {vehicleNumbers: {$in: vehicleNumbers}}
        ]
    })
    if (existedUser) {
        throw new ApiError(509, "User already exists")
    }

    //creating a user
    const user = await User.create({
        username,
        password,
        fullname,
        vehicleNumbers,
        adminAccess
    })

    const createdUser = await User.findOne(user._id).select(
        "-password -refreshToken"
    )

    return res
    .status(201)
    .json(new ApiResponse(201, {createdUser}, "User created successfully"))
})

//register new user

//Login user
const loginUser = asyncHandler (async (req, res, next)=> {
    const {username, password} = req.body
    if (username === "" || password === "") {
        throw new ApiError(400, "Please fill all the fields");
    }
    const user = await User.findOne({username})
    if (!user) {
        throw new ApiError(404, "User not found")
    }
    const isPasswordValid = await user.isPasswordCorrect(password)
    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid login credentials")
    }

    const {accessToken } = await getAccessToken(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -accessToken ")
    
    const options = {
        httpOnly : true,
        secure : true
    }
    
    return res
    .status(200)
    // .cookie("refreshToken", refreshToken, options)
    .cookie("accessToken", accessToken, options)
    .json(
        new ApiResponse(
            200,
            {
                user : loggedInUser, accessToken
            },
            "Successfully logged In "
        )
    )
})

//logout user 
const logoutUser = asyncHandler(async (req, res, next)=> {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset : {
                refreshToken : 1
            }
        },
        {
            new : true
        }
    )

    const options = {
        httpOnly : true,
        secure : true
    }

    res.status(200)
    .clearCookie("refreshToken", options)
    .clearCookie("accessToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully"))
})

//refreshAccessToken 
// const refreshAccessToken = asyncHandler(async (req, res, next)=>{
//     const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

//     if (!incomingRefreshToken) {
//         throw new ApiError(401, "Unauthorized request")
//     }

// try {
//         const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET)
    
//         const user = await User.findById(decodedToken?._id)
    
//         if (!user) {
//             throw new ApiError(401, "Invalid refresh token")
//         }
    
//         //matching incoming refresh token with token of database
//         if (decodedToken !== user?.refreshToken) {
//             throw new ApiError(401, "Refresh token is expired or used")
//         }
    
//         const options = {
//             httpOnly : true,
//             secure : true
//         }
    
//         const {accessToken, newRefreshToken} = await getRefreshAndAccessToken(user._id)
    
//         res
//         .status(200)
//         .cookie("accessToken", accessToken, options)
//         .cookie("refreshToken", newRefreshToken, options)
//         .json(
//             200,
//             {accessToken, refreshToken : newRefreshToken},
//             "Access Token refreshed successfully"
//         )
// } catch (error) {
//     throw new ApiError(401, error?.message || "Invalid refresh token")
// }

// })

//get list of all users
const getAllUsers = asyncHandler(async (req, res, next)=>{
    //check if the request is only from admin
    // if (!req.user.adminAccess) {
    //     throw new ApiError(403, "You are not authorized to access this route")
    // }
    const users = await User.find().select("-password -refreshToken")
    res.status(200).json(new ApiResponse(
        200,
        {users}, 
        "List of all users"
    ))
})

export {
    registerUser,
    loginUser,
    logoutUser,
    getAllUsers,
    // refreshAccessToken
}