import mongoose from "mongoose";
const loginHistorySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    loginTime: { type: Date, default: Date.now },
    ipAddress: String,
  }, { timestamps: true });
  const loginHistoryModel = mongoose.models.loginHistory || mongoose.model("LoginHistory", loginHistorySchema);
  export default loginHistoryModel;