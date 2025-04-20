import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  slotId: { type: mongoose.Schema.Types.ObjectId, ref: "Slot", required: true }, // 👈 Thêm slotId
  amount: Number,
  paymentMethod: { type: String, default: "VNPAY" },
  status: { type: String, default: "completed" },
  date: { type: Date, default: Date.now },
  invoiceNumber: { type: String, required: true, unique: true } // 👈 Thêm số hóa đơn
}, { timestamps: true });

const paymentModel = mongoose.models.payment || mongoose.model("Payment", paymentSchema);
export default paymentModel;
