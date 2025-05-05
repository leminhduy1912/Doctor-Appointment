import express from 'express'
import authUser from '../middlewares/authUser.js';
import authDoctor from '../middlewares/authDoctor.js'
import { doctorConfirmCompletion, updateLinkMeet, userConfirmCompletion } from '../controllers/appointmentController.js';

const appointmentRouter = express.Router();
appointmentRouter.post("/add-link-meet",authUser,updateLinkMeet)
appointmentRouter.put("/:id/confirm-doctor",authDoctor, doctorConfirmCompletion);
appointmentRouter.put("/:id/confirm-user",authUser, userConfirmCompletion);
export default appointmentRouter