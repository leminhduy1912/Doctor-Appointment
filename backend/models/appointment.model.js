


// import mongoose from "mongoose";

// const appointmentSchema = new mongoose.Schema({
//   patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
//   appointmentDate: { type: Date, required: true }, 
//   timeSlot: {
//     startTime: { type: String, required: true }, 
//     endTime: { type: String, required: true }     
//   },
//   status: {
//     type: String,
//     enum: ["pending", "confirmed", "completed", "cancelled"],
//     default: "pending"
//   },
//   reason: String,
//   amount: Number
// }, { timestamps: true });

// const appointmentModel = mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);
// export default appointmentModel;
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  docId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Doctor", 
    required: true 
  },
  userData: {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    image:String
  },
  docData: {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    speciality: String,
    image: String
  },
  amount: { type: Number, required: true },
  slotId: { type: String, required: true }, 
  slotTime: { type: String, required: true },     // e.g. "08:00 - 12:00"
  slotDate: { type: String, required: true },     // e.g. "2025-04-16"
  date: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["pending", "confirmed", "completed", "cancelled"],
    default: "pending"
  }
}, { timestamps: true });

const appointmentModel = mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);
export default appointmentModel;
