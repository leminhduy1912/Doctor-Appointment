import express from "express";
import { createMedicalRecord, findMedicalRecordByAppointmentId } from "../controllers/medicalRecordController.js";
import authDoctor from "../middlewares/authDoctor.js";

const medicalRecordRouter = express.Router();

medicalRecordRouter.post("/",authDoctor, createMedicalRecord);
medicalRecordRouter.get("/:appointmentId",authDoctor, findMedicalRecordByAppointmentId);


export default medicalRecordRouter;
