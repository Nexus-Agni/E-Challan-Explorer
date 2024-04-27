import { Router } from "express";
import { loginUser, registerUser, logoutUser, getAllUsers } from "./../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const userRouter = Router()

userRouter.route('/register').post(registerUser)
userRouter.route('/login').post(loginUser)
userRouter.route('/logout').post(verifyJWT,logoutUser)
userRouter.route('/getAllUsers').post(getAllUsers)

export default userRouter;