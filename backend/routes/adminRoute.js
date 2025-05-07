import express from 'express'
import { addDoctor, adminDashboard, appointmentCancel, appointmentsAdmin, getDoctorList, loginAdmin, updateStatusDoctor } from '../controllers/adminController.js'
import authAdmin from '../middlewares/authAdmin.js'
import { updateStatus } from '../controllers/doctorController.js'

const adminRouter = express.Router();
adminRouter.post("/login", loginAdmin)
adminRouter.post("/add-doctor", authAdmin, addDoctor)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-doctors", authAdmin, getDoctorList)
adminRouter.post("/change-availability", authAdmin, updateStatusDoctor)
adminRouter.get("/dashboard", authAdmin, adminDashboard)

export default adminRouter;