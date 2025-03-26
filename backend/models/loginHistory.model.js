import mongoose from "mongoose";
const LoginHistorySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    loginTime: { type: Date, default: Date.now },
    ipAddress: String,
  }, { timestamps: true });
  const LoginHistory = mongoose.model("LoginHistory", LoginHistorySchema);
  export default LoginHistory;