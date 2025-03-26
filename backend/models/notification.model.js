import mongoose from "mongoose";
const notificationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, enum: ["appointment", "payment", "general"], required: true },
    message: String,
    isRead: { type: Boolean, default: false }
  }, { timestamps: true });
  const notificationModel = mongoose.models.notifications||mongoose.model("Notification", notificationSchema);
  export default notificationModel;