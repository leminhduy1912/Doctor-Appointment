import express from 'express'
import { addDoctor, appointmentCancel, appointmentsAdmin, createAdmin, getAllPayments, getDoctorList, getUserList, loginAdmin, updateStatusDoctor, updateStatusPatient } from '../controllers/adminController.js'
import authAdmin from '../middlewares/authAdmin.js'
import { updateStatus } from '../controllers/doctorController.js'
import { getAllAppointments } from '../controllers/appointmentController.js';
import upload from '../middlewares/multer.js';

const adminRouter = express.Router();
adminRouter.post("/login", loginAdmin)
adminRouter.post("/register", createAdmin);  
adminRouter.post("/add-doctor",upload.single("image"), authAdmin, addDoctor)

adminRouter.get("/appointments", authAdmin, getAllAppointments)
adminRouter.put("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-doctors", authAdmin, getDoctorList)
adminRouter.get("/all-patients", authAdmin, getUserList)


adminRouter.post("/change-availability", authAdmin, updateStatusDoctor)
adminRouter.post("/change-availability-patient", authAdmin, updateStatusPatient)
adminRouter.get("/payments",authAdmin,getAllPayments)
export default adminRouter;