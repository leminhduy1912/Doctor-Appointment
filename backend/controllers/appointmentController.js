import { sendRequestConfirmationOfOnlineMedicalExamination } from "../config/mailer.js";
import appointmentModel from "../models/appointment.model.js";


const generateRandomString = (length = 10) => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const updateLinkMeet = async (req, res) => {
  const { slotId } = req.body;

  if (!slotId) {
    return res.status(400).json({ success: false, message: 'slotId is required' });
  }

  const randomString = generateRandomString(10);
  const linkMeet = `${process.env.VIDEO_CALL_SERVER}/` + randomString;

  try {
    const appointment = await appointmentModel.findOneAndUpdate(
      { slotId },
      { linkMeet },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({ success: false, message: 'Appointment not found' });
    }

    return res.status(200).json({
      success: true,
      message: 'Meeting link updated successfully',
      appointment,
    });
  } catch (error) {
    console.error("Error updating linkMeet:", error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
};




const updateAppointmentCompletion = async (appointmentId, role) => {
  const appointment = await appointmentModel.findById(appointmentId);
  if (!appointment) throw new Error("Appointment not found");

  if (role === "doctor") appointment.isDoctorConfirmedComplete = true;
  else if (role === "user") appointment.isUserConfirmedComplete = true;

  // Auto complete if both confirmed
  if (appointment.isDoctorConfirmedComplete && appointment.isUserConfirmedComplete) {
    appointment.status = "completed";
  }

  await appointment.save();
  return appointment;
};



export const doctorConfirmCompletion = async (req, res) => {
  try {
    const updatedAppointment = await updateAppointmentCompletion(req.params.id, "doctor");

    // Extract necessary details
    const {
      slotDate: date,
      slotTime: time,
      slotId,
      docData: { name: docName, email: emailDoc },
      userData: { name: patientName, email: to }
    } = updatedAppointment;

    // Send confirmation email to patient
    sendRequestConfirmationOfOnlineMedicalExamination(
      to,
      date,
      time,
      docName,
      emailDoc,
      slotId,
      patientName
    );

    res.status(200).json({ success: true, message: "Doctor confirmation saved", appointment: updatedAppointment });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


export const userConfirmCompletion = async (req, res) => {
  try {
    const updatedAppointment = await updateAppointmentCompletion(req.params.id, "user");
    res.status(200).json({ success: true, message: "User confirmation saved", appointment: updatedAppointment });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};




export const getAllAppointments= async (req, res) => {
  try {
    const { status = "all", page = 1, limit = 10 } = req.query;

    const query = status === "all" ? {} : { status };

    const skip = (page - 1) * limit;

    const [appointments, total] = await Promise.all([
      appointmentModel.find(query).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
      appointmentModel.countDocuments(query),
    ]);

    res.status(200).json({
      data: appointments,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server khi lấy danh sách cuộc hẹn", error });
  }
}
