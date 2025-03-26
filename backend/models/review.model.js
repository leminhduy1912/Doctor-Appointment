import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    review: String,
  }, { timestamps: true });
  const reviewModel = mongoose.models.review|| mongoose.model("Review", reviewSchema);
  export default reviewModel;
  