import mongoose from "mongoose";
const DoctorSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    specialization: String,
    experience: Number,
    education: String,
    workplace: String,
    schedule: [{ day: String, startTime: String, endTime: String }],
    consultationFee: Number,
    rating: { type: Number, default: 0 },
    status: { type: String, enum: ["approved", "pending", "rejected"], default: "pending" },
    profileImage: String,
    notes: String,
  }, { timestamps: true });
  const Doctor = mongoose.model("Doctor", DoctorSchema);
  export default Doctor;