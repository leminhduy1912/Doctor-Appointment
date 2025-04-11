import express from 'express'
import { bookAppointment, getAllAppointments, getProfileById, isUserExist, loginUser, registerUser, updateProfile } from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js';

const userRouter = express.Router();
userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)

userRouter.post("/is-exist",isUserExist)
userRouter.post("/book-appointment", authUser, bookAppointment)
userRouter.get("/get-profile", authUser, getProfileById)
userRouter.post("/update-profile", authUser, updateProfile)
userRouter.get("/appointments", authUser, getAllAppointments)
// userRouter.post("/book-appointment", authUser, bookAppointment)

export default userRouter