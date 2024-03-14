// import { User } from "../models/user.model.js";
// import { ApiError } from "../utils/apiError.js";
// import { asyncHandler } from "../utils/asyncHandler.js";
// import  jwt  from "jsonwebtoken";

// export const verifyJWT = asyncHandler(async (req, _, next)=> {
// try {
//         console.log(req.cookies);
        
//         const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
//         console.log(token);
//         if (!token) {
//             console.log("Token not found");
//             throw new ApiError(401, "Unauthorized request")
//         }
    
//         const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
//         const user = await User.findById(decoded?._id).select("-password -refreshToken")
    
//         if (!user) {
//             throw new ApiError(401, "Invalid access token")
//         }
    
//         req.user = user
//         next()
// } catch (error) {
//     throw new ApiError(500, error?.message || "Invalid access token")
// }
// })

import jwt from 'jsonwebtoken';
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const verifyJWT = asyncHandler(async (req, _, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            throw new ApiError(401, "Unauthorized request");
        }

        let decoded;
        try {
            decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        } catch (err) {
            if (err instanceof jwt.TokenExpiredError) {
                throw new ApiError(401, "Access token expired");
            } else {
                throw new ApiError(500, err?.message || "Invalid access token");
            }
        }

        const user = await User.findById(decoded?._id).select("-password -refreshToken");
        if (!user) {
            throw new ApiError(401, "Invalid access token");
        }

        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(500, error?.message || "Invalid access token");
    }
});