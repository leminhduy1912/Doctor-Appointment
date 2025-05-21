import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    speciality: String,
    phoneNumber:String,
    experience: Number,
    degree: String,
    address: String,
    fees:String,
    available: { type: Boolean, default: true },
    schedule: [{ day: String,date:String, startTime: String, endTime: String, status: { type: String, default: "available" }}],
    rating: { type: Number, default: 0 },
    image: { type: String, default: 'https://res.cloudinary.com/dolaccvrd/image/upload/v1744611708/v8i0ktcadocx6khckgp1.jpg' },
about: String,

}, { timestamps: true });

const doctorModel = mongoose.models.Doctor || mongoose.model("Doctor", doctorSchema);
export default doctorModel;
