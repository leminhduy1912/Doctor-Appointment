
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../../components/Loader';
import { AnimatePresence, motion } from 'framer-motion';

const PatientList = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const aToken = localStorage.getItem("aToken");

  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [showModalUnactivePatientAccount, setShowModalUnactivePatientAccount] = useState(false);
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const [selectedPatientAvailable, setSelectedPatientAvailable] = useState(null);
  const [reason, setReason] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAvailabilityToggle = (docId, available) => {
    setSelectedPatientId(docId);
    setSelectedPatientAvailable(available);
    setShowModalUnactivePatientAccount(true);
  };

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoading(true);
        let url = `${backendUrl}/api/admin/all-patients?page=${currentPage}`;
        if (filterStatus === 'Available') url += `&available=true`;
        else if (filterStatus === 'Unavailable') url += `&available=false`;

        const { data } = await axios.get(url, {
          headers: { aToken }
        });

        if (data.users) {
          setPatients(data.users);
          setTotalPages(data.totalPages || 1);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (aToken) fetchPatients();
  }, [aToken, filterStatus, currentPage]);

  const handleConfirm = async () => {
    if (!selectedPatientId) return;

    try {
      setIsLoading(true);
      const payload = selectedPatientAvailable
        ? { patientId: selectedPatientId, reason }
        : { patientId: selectedPatientId };

      const { data } = await axios.post(
        `${backendUrl}/api/admin/change-availability-patient`,
        payload,
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);

        // Refetch after change
        let url = `${backendUrl}/api/admin/all-patients?page=${currentPage}`;
        if (filterStatus === 'Available') url += `&available=true`;
        else if (filterStatus === 'Unavailable') url += `&available=false`;

        const { data: newData } = await axios.get(url, {
          headers: { aToken }
        });

        setPatients(newData.users);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
      setShowModalUnactivePatientAccount(false);
      setSelectedPatientId(null);
      setSelectedPatientAvailable(null);
      setReason('');
    }
  };

  if (loading) return <Loading />;

  return (
    <>
      {isLoading && <Loading />}
      <div className='w-full max-w-6xl m-5 relative'>
        <p className='mb-3 text-lg font-semibold text-gray-800'>All Patients</p>

        {/* Filter */}
        <div className='flex gap-2 mb-4 text-sm font-medium'>
          {['All', 'Available', 'Unavailable'].map(status => (
            <button
              key={status}
              onClick={() => {
                setFilterStatus(status);
                setCurrentPage(1);
              }}
              className={`px-3 py-1 border rounded ${filterStatus === status ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 text-gray-600'} capitalize`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="m-5 max-h-[80vh] overflow-y-auto">
          <h1 className="text-lg font-medium">All Patients</h1>
          <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
            {patients.length > 0 ? (
              patients.map((item, index) => (
                <div
                  className="border border-[#C9D8FF] rounded-xl max-w-56 overflow-hidden cursor-pointer group"
                  key={index}
                >
                  <img
                    className="bg-[#EAEFFF] group-hover:bg-primary transition-all duration-500 w-full h-32 object-cover"
                    src={item.image}
                    alt=""
                  />
                  <div className="p-4">
                    <p className="text-[#262626] text-lg font-medium">{item.name}</p>
                    <div className="mt-2 flex items-center gap-1 text-sm">
                      <input
                        type="checkbox"
                        checked={item.available}
                        onChange={() => handleAvailabilityToggle(item._id, item.available)}
                      />
                      <p>Available</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600 mt-4">No Patient found.</p>
            )}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 gap-2 items-center text-sm font-medium text-gray-600">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
            >
              Previous
            </button>
            <button className="px-3 py-1 border rounded bg-blue-600 text-white">{currentPage}</button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showModalUnactivePatientAccount && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-md rounded-xl shadow-lg p-6"
            >
              <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {selectedPatientAvailable
                  ? 'Deactivate Patient Account'
                  : 'Activate Patient Account'}
              </h2>
              <p className="text-sm text-gray-600 text-center mb-4">
                {selectedPatientAvailable
                  ? 'Please confirm and provide a reason for deactivating this account.'
                  : 'Are you sure you want to activate this doctor account?'}
              </p>

              {selectedPatientAvailable && (
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="E.g. Patient is inactive, violation of policies, etc."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mb-5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows={4}
                />
              )}

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    setShowModalUnactivePatientAccount(false);
                    setSelectedPatientId(null);
                    setSelectedPatientAvailable(null);
                    setReason('');
                  }}
                  className="px-4 py-2 rounded-md border text-gray-600 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={isLoading}
                  className={`px-4 py-2 rounded-md text-white transition ${
                    isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {isLoading ? 'Processing...' : 'Confirm'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PatientList;
