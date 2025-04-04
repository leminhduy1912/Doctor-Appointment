import express from 'express'
import cors from 'cors'
//import 'dotenv/config'
import { v2 as cloudinary } from "cloudinary";
import connectDB from "./config/mongodb.js"
import userRouter from './routes/userRoute.js';
import adminRouter from './routes/adminRoute.js';

import doctorRouter from './routes/doctorRoute.js';
import dotenv from 'dotenv';
import connectCloudinary from './config/cloudinary.js';
import router from './routes/payment.js';
dotenv.config();
//app config
const app = express();

const port = process.env.PORT || 4000
connectDB()
connectCloudinary()
//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
//api endpoint
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor",doctorRouter)
app.use('/order', router);
app.get("/",(req,res)=>{
    res.send("api working")
})
app.listen(port,()=>{console.log("server started",port);
})