import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String, default: 'https://res.cloudinary.com/dolaccvrd/image/upload/v1744611708/v8i0ktcadocx6khckgp1.jpg' },
  phone: { type: String, default: '000000000' },
  address: { type: Object, default: { line1: '', line2: '' } },
  gender: { type: String, default: 'Not Selected' },
  dob: { type: String, default: 'Not Selected' },
  password: { type: String, required: true },
  available: { type: Boolean, default: true },

}
);
  const userModel = mongoose.models.user|| mongoose.model("User", userSchema);
export default userModel;