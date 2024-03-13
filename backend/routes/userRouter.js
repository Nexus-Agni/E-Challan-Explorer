import { Router } from "express";
import { loginUser, registerUser, logoutUser } from "./../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const userRouter = Router()

userRouter.route('/register').post(registerUser)
userRouter.route('/login').get(loginUser)
userRouter.route('/logout').get(verifyJWT,logoutUser)

export default userRouter;