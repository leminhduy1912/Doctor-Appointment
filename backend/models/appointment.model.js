
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  docId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
  userData: {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    image: String,
  },
  docData: {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    speciality: String,
    image: String,
  },
  linkMeet: String,
  amount: { type: Number, required: true },
  slotId: { type: String, required: true },
  slotTime: { type: String, required: true },
  slotDate: { type: String, required: true },
  bookingDate: { type: Date, default: Date.now },
  prescriptionPrescribed:{ type: Boolean, default:false },
  reason: String,
  status: {
    type: String,
    enum: ["pending", "confirmed", "completed", "cancelled","booked","done","waitinng for payment"],
    default: "pending",
  },
  isDoctorConfirmedComplete: {
    type: Boolean,
    default: false,
  },
  isUserConfirmedComplete: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

// Automatically set status to "completed" when both parties confirm
appointmentSchema.pre("save", function (next) {
  if (this.isDoctorConfirmedComplete && this.isUserConfirmedComplete) {
    this.status = "completed";
  }
  next();
});

const appointmentModel = mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);
export default appointmentModel;
