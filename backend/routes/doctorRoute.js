import { appointmentsDoctor, getDoctorList, getDoctorProfileById, loginDoctor, updateSlotStatus, updateStatus } from '../controllers/doctorController.js';
import authDoctor from '../middlewares/authDoctor.js';
import express from 'express';

const doctorRouter = express.Router();

doctorRouter.post("/login", loginDoctor)
doctorRouter.post("/change-availability", authDoctor, updateStatus)
doctorRouter.get("/list", getDoctorList)
doctorRouter.get("/appointments", authDoctor, appointmentsDoctor)
doctorRouter.get("/profile", authDoctor, getDoctorProfileById)
doctorRouter.post("/change-status-appointment", authDoctor, updateSlotStatus)

export default doctorRouter;