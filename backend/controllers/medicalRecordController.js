import medicalRecordModel from "../models/medicalRecord.model.js";
import appointmentModel from "../models/appointment.model.js";

export const createMedicalRecord = async (req, res) => {
  try {
    const {
      patientId,
      doctorId,
      appointmentId,
      diagnosis,
      prescriptions,
      notes,
      medicalHistory,
      allergies,
    } = req.body;

    const newMedicalRecord = new medicalRecordModel({
      patientId,
      doctorId,
      appointmentId,
      diagnosis,
      prescriptions,
      notes,
      medicalHistory,
      allergies,
    });

    const savedRecord = await newMedicalRecord.save();

    // Cập nhật appointment -> prescriptionPrescribed = true
    if (appointmentId) {
      await appointmentModel.findByIdAndUpdate(
        appointmentId,
        { prescriptionPrescribed: true },
        { new: true }
      );
    }

    res.status(201).json({
      message: "Medical record created successfully",
      medicalRecord: savedRecord,
    });
  } catch (error) {
    console.error("Error creating medical record:", error);
    res.status(500).json({ message: "Server error while creating medical record" });
  }
};
export const findMedicalRecordByAppointmentId = async (req, res) => {
  try {
    const { appointmentId } = req.params;

    if (!appointmentId) {
      return res.status(400).json({ message: "Appointment ID is required" });
    }

    const medicalRecord = await medicalRecordModel.findOne({ appointmentId })
      .populate("patientId", "name email") // Populate if needed
      .populate("doctorId", "name email");

    if (!medicalRecord) {
      return res.status(404).json({ message: "Medical record not found" });
    }

    res.status(200).json(medicalRecord);
  } catch (error) {
    console.error("Error fetching medical record:", error);
    res.status(500).json({ message: "Server error while fetching medical record" });
  }
};