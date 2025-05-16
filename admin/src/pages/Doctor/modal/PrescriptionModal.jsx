




import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const PrescriptionModal = ({ 
  isOpen, 
  onClose, 
  appointment,
  dToken,
  backendUrl,
  fetchAppointment
}) => {
  const [form, setForm] = useState({
    diagnosis: "",
    notes: "",
    medicalHistory: "",
    allergies: "",
    prescriptions: [{ medicine: "", dosage: "", frequency: "" }],
  });
  const [loading, setLoading] = useState(false);
  console.log("typeof fetchAppointment", typeof fetchAppointment); 
  const handleGeneralFieldChange = (field, value) => {
    setForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePrescriptionChange = (index, field, value) => {
    const newPrescriptions = [...form.prescriptions];
    newPrescriptions[index][field] = value;
    setForm(prev => ({
      ...prev,
      prescriptions: newPrescriptions
    }));
  };

  const addPrescriptionRow = () => {
    setForm(prev => ({
      ...prev,
      prescriptions: [
        ...prev.prescriptions, 
        { medicine: "", dosage: "", frequency: "" }
      ]
    }));
  };

  const removePrescriptionRow = (index) => {
    const newPrescriptions = form.prescriptions.filter((_, i) => i !== index);
    setForm(prev => ({
      ...prev,
      prescriptions: newPrescriptions
    }));
  };

  const submitPrescription = async () => {
    if (!appointment) return;
    
    try {
      setLoading(true);
      await axios.post(
        `${backendUrl}/api/prescription`,
        {
          ...form,
          doctorId: appointment.docData._id,
          patientId: appointment.userData._id,
          appointmentId: appointment._id,
        },
        { headers: { dToken } }
      );
      
   
      onClose();
      toast.success("Prescription created successfully!");
      fetchAppointment()
    } catch (err) {
      console.error(err);
      toast.error("Error while creating prescription");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Create Prescription</h2>

        {/* Scrollable form area */}
        <div className="flex-1 overflow-y-auto pr-2">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Diagnosis</label>
              <input
                type="text"
                placeholder="Diagnosis"
                className="w-full p-2 border rounded"
                value={form.diagnosis}
                onChange={(e) => handleGeneralFieldChange("diagnosis", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
              <textarea
                placeholder="Notes"
                className="w-full p-2 border rounded"
                value={form.notes}
                onChange={(e) => handleGeneralFieldChange("notes", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Medical History</label>
              <input
                type="text"
                placeholder="Medical history"
                className="w-full p-2 border rounded"
                value={form.medicalHistory}
                onChange={(e) => handleGeneralFieldChange("medicalHistory", e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Allergies</label>
              <input
                type="text"
                placeholder="Allergies"
                className="w-full p-2 border rounded"
                value={form.allergies}
                onChange={(e) => handleGeneralFieldChange("allergies", e.target.value)}
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">Medications</h3>
                <button
                  onClick={addPrescriptionRow}
                  className="text-blue-600 underline text-sm"
                >
                  + Add medicine
                </button>
              </div>
              
              <div className="space-y-3">
                {form.prescriptions.map((item, index) => (
                  <div key={index} className="flex gap-2 items-end bg-gray-50 p-2 rounded">
                    <div className="flex-1">
                      <label className="block text-xs text-gray-500 mb-1">Medicine</label>
                      <input
                        type="text"
                        placeholder="Medicine name"
                        className="w-full p-2 border rounded text-sm"
                        value={item.medicine}
                        onChange={(e) => handlePrescriptionChange(index, "medicine", e.target.value)}
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs text-gray-500 mb-1">Dosage</label>
                      <input
                        type="text"
                        placeholder="Dosage"
                        className="w-full p-2 border rounded text-sm"
                        value={item.dosage}
                        onChange={(e) => handlePrescriptionChange(index, "dosage", e.target.value)}
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs text-gray-500 mb-1">Frequency</label>
                      <input
                        type="text"
                        placeholder="Times per day"
                        className="w-full p-2 border rounded text-sm"
                        value={item.frequency}
                        onChange={(e) => handlePrescriptionChange(index, "frequency", e.target.value)}
                      />
                    </div>
                    <button
                      onClick={() => removePrescriptionRow(index)}
                      className="text-red-500 p-2 hover:text-red-700"
                      title="Remove"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer buttons */}
        <div className="mt-4 pt-4 border-t flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            onClick={submitPrescription}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Save Prescription"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionModal;
