import { appointmentCancel, appointmentsDoctor, getAllPayments, getAppointmentsBySlotId, getDoctorList, getDoctorProfileById, getScheduleDoctorPagination, loginDoctor, updateDoctorProfile, updateDoctorSchedule, updateSlotStatus, updateStatus } from '../controllers/doctorController.js';
import authDoctor from '../middlewares/authDoctor.js';
import express from 'express';
import upload from '../middlewares/multer.js';

const doctorRouter = express.Router();

doctorRouter.post("/login", loginDoctor)
doctorRouter.post("/change-availability", authDoctor, updateStatus)
doctorRouter.get("/list", getDoctorList)
doctorRouter.get("/appointments", authDoctor, appointmentsDoctor)
doctorRouter.get("/profile", authDoctor, getDoctorProfileById)
doctorRouter.put("/profile", upload.single("image"),authDoctor, updateDoctorProfile)
doctorRouter.post("/change-status-appointment", authDoctor, updateSlotStatus)
doctorRouter.get("/get-appointment-by-slotId", authDoctor, getAppointmentsBySlotId)
doctorRouter.post("/cancel-appointment",authDoctor,appointmentCancel)
doctorRouter.post("/update-schedule",authDoctor,updateDoctorSchedule)
doctorRouter.post("/get-schedule",authDoctor,getScheduleDoctorPagination)
doctorRouter.get("/receipts",authDoctor,getAllPayments)
export default doctorRouter;