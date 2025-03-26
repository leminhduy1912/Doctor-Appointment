import mongoose from "mongoose";
const emailReminderSchema = new mongoose.Schema({
    appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment", required: true },
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
    email: { type: String, required: true },
    reminderSent: { type: Boolean, default: false },
    reminderTime: Date
  }, { timestamps: true });
  const emailReminderModel = mongoose.models.emailReminder ||mongoose.model("EmailReminder", emailReminderSchema);
  export default emailReminderModel;