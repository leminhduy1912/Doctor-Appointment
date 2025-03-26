import mongoose from "mongoose";
const AppointmentSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
    appointmentDate: { type: Date, required: true },
    timeSlot: String,
    status: { type: String, enum: ["pending", "confirmed", "completed", "cancelled"], default: "pending" },
    reason: String,
  }, { timestamps: true });
  const Appointment = mongoose.model("Appointment", AppointmentSchema);
  export default Appointment;