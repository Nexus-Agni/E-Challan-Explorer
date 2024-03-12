import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async ()=>{
    try {
        const connectionInstance =  await mongoose.connect(process.env.MONGO_URI);
        console.log(` \n MONGODB connected !!! DB Host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Error : ", error);
        process.exit(1);
    }
}

export default connectDB;