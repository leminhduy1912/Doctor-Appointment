import express from 'express'
import { addDoctor, adminDashboard, allDoctors, appointmentCancel, appointmentsAdmin, loginAdmin } from '../controllers/adminController.js'
import authAdmin from '../middlewares/authAdmin.js'
import { updateStatus } from '../controllers/doctorController.js'

const adminRouter = express.Router();
adminRouter.post("/login", loginAdmin)
adminRouter.post("/add-doctor", authAdmin, addDoctor)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-doctors", authAdmin, allDoctors)
adminRouter.post("/change-availability", authAdmin, updateStatus)
adminRouter.get("/dashboard", authAdmin, adminDashboard)

export default adminRouter;