import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    specialization: String,
    experience: Number,
    degree: String,
    address: String,
    schedule: [{ day: String, startTime: String, endTime: String }],
    fee: Number,
    rating: { type: Number, default: 0 },
    profileImage: String,
    notes: String,
    about: String,
    patients: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }] // Mảng bệnh nhân mà bác sĩ quản lý
}, { timestamps: true });

const doctorModel = mongoose.models.Doctor || mongoose.model("Doctor", doctorSchema);
export default doctorModel;
