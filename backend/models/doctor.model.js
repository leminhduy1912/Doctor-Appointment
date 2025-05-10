import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    speciality: String,
    phoneNumber:String,
    experience: Number,
    degree: String,
    address: { type: Object, required: true },
    available: { type: Boolean, default: true },
    schedule: [{ day: String,date:String,fees:String, startTime: String, endTime: String, status: { type: String, default: "available" }}],
    rating: { type: Number, default: 0 },
    image: { type: String, default: 'https://res.cloudinary.com/dolaccvrd/image/upload/v1744611708/v8i0ktcadocx6khckgp1.jpg' },
about: String,
    patients: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }] 
}, { timestamps: true });

const doctorModel = mongoose.models.Doctor || mongoose.model("Doctor", doctorSchema);
export default doctorModel;
