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
// import { sendEmail } from './config/mailer.js';
import emailRouter from './routes/emailRoute.js';
dotenv.config();
//app config
const app = express();
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()
// sendEmail()
//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:5173',
  'http://localhost:5174',
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin like mobile apps or curl
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'token', 'aToken', 'dToken'],
}));

// app.use(cors({
//     origin: process.env.CLIENT_URL || 'http://localhost:5173', // URL của frontend
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
//     allowedHeaders: ['Content-Type', 'Authorization', 'token'], 
//   }))
//api endpoint
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor",doctorRouter)
app.use('/order', router)
app.use("/api/email",emailRouter)
app.get("/",(req,res)=>{
    res.send("api working")
})
app.listen(port,()=>{console.log("server started",port);
})