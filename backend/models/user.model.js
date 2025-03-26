import mongoose from "mongoose"
const UserSchema = new mongoose.Schema({
    fullName: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["patient", "doctor", "admin"], required: true },
    phoneNumber: String,
    gender: { type: String, enum: ["male", "female", "other"] },
    dateOfBirth: Date,
    address: String,
    profileImage: String,
    refreshToken: String,
  }, { timestamps: true });
  const User = mongoose.model("User", UserSchema);
export default User;