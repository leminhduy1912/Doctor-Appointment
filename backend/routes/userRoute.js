import express from 'express'
import { appointmentCancel, bookAppointment, getAllAppointments, getProfileById, isUserExist, loginUser, registerUser, sendBookingConfirmToUserAndDoctor, updateProfile, updateSlotStatus } from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js';
import { findMedicalRecordByAppointmentId } from '../controllers/medicalRecordController.js';

const userRouter = express.Router();
userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)

userRouter.post("/is-exist",isUserExist)
userRouter.post("/book-appointment", authUser, bookAppointment)
userRouter.get("/get-profile", authUser, getProfileById)
userRouter.post("/update-profile", authUser, updateProfile)
userRouter.get("/appointments", authUser, getAllAppointments)
userRouter.post("/change-status-appointment",authUser,updateSlotStatus)
userRouter.post("/send-booking-confirm-to-doctor-and-user",authUser,sendBookingConfirmToUserAndDoctor)
userRouter.post("/cancel-appointment",authUser,appointmentCancel)
userRouter.get("/prescription/:appointmentId",authUser, findMedicalRecordByAppointmentId);

export default userRouter