import mongoose from "mongoose";
const PaymentSchema = new mongoose.Schema({
    appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment", required: true },
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
    amount: Number,
    paymentMethod: { type: String, enum: ["credit_card", "momo", "bank_transfer"] },
    status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" }
  }, { timestamps: true });
  const Payment = mongoose.model("Payment", PaymentSchema);
  export default Payment;