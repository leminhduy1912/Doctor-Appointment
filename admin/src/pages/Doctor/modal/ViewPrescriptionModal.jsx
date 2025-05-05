import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ViewPrescriptionModal = ({ 
  isOpen, 
  onClose, 
  appointmentId,
  dToken,
  backendUrl
}) => {
  const [prescription, setPrescription] = useState(null);
  const [loading, setLoading] = useState(false);
console.log("prop view",appointmentId,isOpen,backendUrl)
  // Fetch prescription data
  useEffect(() => {
    if (!isOpen || !appointmentId) return;

    const fetchPrescription = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${backendUrl}/api/prescription/${appointmentId}`,
          { headers: { dToken } }
        );
        setPrescription(response.data);
      } catch (error) {
        console.error('Error fetching prescription:', error);
        toast.error('Failed to load prescription');
      } finally {
        setLoading(false);
      }
    };

    fetchPrescription();
  }, [isOpen, appointmentId, dToken, backendUrl]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Prescription</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {loading ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : prescription ? (
          <div className="flex-1 overflow-y-auto pr-2 space-y-4">
            {/* Basic Information */}
            <div className="space-y-2">
              <div>
                <h3 className="font-medium text-gray-700">Diagnosis:</h3>
                <p className="text-gray-900">{prescription.diagnosis || 'No information'}</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-700">Notes:</h3>
                <p className="text-gray-900 whitespace-pre-line">
                  {prescription.notes || 'No notes available'}
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-700">Medical History:</h3>
                <p className="text-gray-900">{prescription.medicalHistory || 'No information'}</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-700">Allergies:</h3>
                <p className="text-gray-900">{prescription.allergies || 'No known allergies'}</p>
              </div>
            </div>

            {/* Medication List */}
            <div>
              <h3 className="font-semibold text-lg mb-2">Prescribed Medicines</h3>
              <div className="space-y-3">
                {prescription.prescriptions?.length > 0 ? (
                  prescription.prescriptions.map((medicine, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded">
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <h4 className="text-xs text-gray-500">Medicine Name</h4>
                          <p className="font-medium">{medicine.medicine}</p>
                        </div>
                        <div>
                          <h4 className="text-xs text-gray-500">Dosage</h4>
                          <p className="font-medium">{medicine.dosage}</p>
                        </div>
                        <div>
                          <h4 className="text-xs text-gray-500">Frequency</h4>
                          <p className="font-medium">{medicine.frequency}</p>
                        </div>
                      </div>
                      {medicine.note && (
                        <div className="mt-2">
                          <h4 className="text-xs text-gray-500">Note</h4>
                          <p className="text-sm">{medicine.note}</p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No medicines prescribed</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-500">No prescription found</p>
          </div>
        )}

        {/* Close Button */}
        <div className="mt-4 pt-4 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewPrescriptionModal;
