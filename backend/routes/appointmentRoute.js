import express from 'express'
import authUser from '../middlewares/authUser.js';
import { updateLinkMeet } from '../controllers/appointmentController.js';

const appointmentRouter = express.Router();
appointmentRouter.post("/add-link-meet",authUser,updateLinkMeet)
export default appointmentRouter