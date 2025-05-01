import { appointmentCancel, appointmentsDoctor, getAppointmentsBySlotId, getDoctorList, getDoctorProfileById, getScheduleDoctorPagination, loginDoctor, updateDoctorSchedule, updateSlotStatus, updateStatus } from '../controllers/doctorController.js';
import authDoctor from '../middlewares/authDoctor.js';
import express from 'express';

const doctorRouter = express.Router();

doctorRouter.post("/login", loginDoctor)
doctorRouter.post("/change-availability", authDoctor, updateStatus)
doctorRouter.get("/list", getDoctorList)
doctorRouter.get("/appointments", authDoctor, appointmentsDoctor)
doctorRouter.post("/profile", authDoctor, getDoctorProfileById)
doctorRouter.post("/change-status-appointment", authDoctor, updateSlotStatus)
doctorRouter.get("/get-appointment-by-slotId", authDoctor, getAppointmentsBySlotId)
doctorRouter.post("/cancel-appointment",authDoctor,appointmentCancel)
doctorRouter.post("/update-schedule",authDoctor,updateDoctorSchedule)
doctorRouter.post("/get-schedule",authDoctor,getScheduleDoctorPagination)
export default doctorRouter;