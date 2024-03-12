// require('dotenv').config({ path: './.env'})
import dotenv from "dotenv";
import connectDB from "./db/index.db.js";
import app from "./app.js";
dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.listen (process.env.PORT, ()=>{
        console.log(`Server is listening at : http://localhost:${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("Database connection error : ", error);
})