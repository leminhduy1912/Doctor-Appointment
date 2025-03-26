import mongoose from "mongoose";
const medicalRecordSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
    appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
    diagnosis: String,
    prescriptions: [{ medicine: String, dosage: String, frequency: String }],
    notes: String,
    medicalHistory: String,
    allergies: String,
  }, { timestamps: true });
  const medicalRecordModel = mongoose.models.MedicalRecord ||mongoose.model("MedicalRecord", medicalRecordSchema);
  export default medicalRecordModel;