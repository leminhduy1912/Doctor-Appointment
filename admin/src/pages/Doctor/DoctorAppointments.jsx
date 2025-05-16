


import React, { useContext, useEffect, useState } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import Loading from '../../components/Loader';
import { ToastContainer, toast } from 'react-toastify';
import { Menu, Transition } from '@headlessui/react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { Fragment } from 'react';
import PrescriptionModal from './modal/PrescriptionModal'; // Import component mới
import { MdAdd } from "react-icons/md";

const DoctorAppointments = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { dToken } = useContext(DoctorContext);
  const { currency } = useContext(AppContext);
  
  // State management
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  // Appointment actions state
  const [selectedAction, setSelectedAction] = useState(null);
  const [cancelReason, setCancelReason] = useState('');
  
  // Modals state
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Prescription modal state
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Fetch appointments
    const fetchAppointments = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${backendUrl}/api/doctor/appointments`, {
          params: { page: currentPage, status: filterStatus },
          headers: { dToken },
        });
        setAppointments(response.data.appointments);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        toast.error('Failed to load appointments!');
      } finally {
        setLoading(false);
      }
    };
  useEffect(() => {
    if (!dToken) return;
  
    fetchAppointments();
  }, [currentPage, filterStatus, dToken]);

  // Helper functions
  const updateStatusSlot = async (doctorId, slotId, newStatus) => {
    const payload = { doctorId, slotId, newStatus };
    console.log("1")
    if (newStatus === 'waiting for payment') payload.isConfirm = true;
    await axios.post(`${backendUrl}/api/doctor/change-status-appointment`, payload, {
      headers: { dToken },
    });
  };

  const handleRequestConfirmation = async (appointmentId) => {
    try {
      setLoading(true);
      const res = await axios.put(
        `${backendUrl}/api/appointment/${appointmentId}/confirm-doctor`,
        {},
        { headers: { dToken } }
      );
      toast.success('Request sent successfully !');
      fetchAppointments()
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Failed to send request');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = async () => {
    if (!selectedAction) return;

    const currentId = selectedAction.id;
    setSelectedAction(null);

    const appointment = appointments?.find(a => a._id === currentId);
    if (!appointment) {
      toast.error('Appointment not found!');
      return;
    }

    try {
      setLoading(true);
      if (selectedAction.type === 'cancel') {
        await axios.post(
          `${backendUrl}/api/doctor/cancel-appointment`,
          { appointmentId: currentId, reason: cancelReason.trim() },
          { headers: { dToken } }
        );
        toast.success('Appointment cancelled');
        fetchAppointments()
      } else if (selectedAction.type === 'complete') {
        await updateStatusSlot(appointment.docData._id, appointment.slotId, 'waiting for payment');
        toast.success('Appointment confirmed. Awaiting payment.');
      }
    } catch (error) {
      toast.error('Operation failed');
    } finally {
      setLoading(false);
      setCancelReason('');
    }
  };


  const openModal = React.useCallback((type, item) => {
    setModalType(type);
    setSelectedItem(item);
    setModalVisible(true);
  }, []);

  const handleOpenPrescriptionModal = (appointment) => {
    setSelectedAppointment(appointment);
    setShowPrescriptionModal(true);
  };

  const handleConfirmBookedJoinOrSendRequest = () => {
    if (!selectedItem) return;

    if (modalType === "join") {
      console.log("link",selectedItem.linkMeet)
      window.open(selectedItem.linkMeet, "_blank");
    } else if (modalType === "request") {
      console.log("request",selectedItem._id)
      handleRequestConfirmation(selectedItem._id);
    }

    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setSelectedItem(null);
    setModalType("");
  };

  // Status renderer
  const renderStatus = (item) => {
    const status = (item.status || '').toLowerCase();
    switch (status) {
      case 'cancelled': return <span className='text-red-500 text-xs font-semibold'>Cancelled</span>;
      case 'booked': return <span className='text-green-600 text-xs font-semibold'>Booked</span>;
      case 'completed': return <span className='text-green-800 text-xs font-semibold'>Completed</span>;
      case 'waiting for payment': return <span className='text-orange-800 text-xs font-semibold'>Waiting for payment</span>;
      case 'pending': return <span className='text-yellow-600 text-xs font-semibold'>Pending</span>;
      case 'available': return <span className='text-lime-600 text-xs font-semibold'>Available</span>;
      default: return <span className='text-gray-400 text-xs font-semibold'>Unknown</span>;
    }
  };

  if (loading) return <Loading />;

  return (
    <>
      <ToastContainer />
      <div className='w-full max-w-6xl m-5 relative'>
        <p className='mb-3 text-lg font-semibold text-gray-800'>All Appointments</p>

        {/* Filter */}
        <div className='flex gap-2 mb-4 text-sm font-medium'>
          {['all', 'pending', 'waiting for payment', 'cancelled', 'booked', 'completed'].map(status => (
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

        {/* Table */}
        <div className='bg-white border rounded shadow text-sm max-h-[70vh] overflow-y-auto'>
          <div className='hidden sm:grid grid-cols-[40px_1fr_1fr_1fr_1fr_1fr_1fr] gap-4 py-3 px-4 border-b font-semibold text-gray-600 bg-gray-50 sticky top-0 z-10'>
            <p className='text-center'>#</p>
            <p className='text-center'>Patient</p>
            <p className='text-center'>Email</p>
            <p className='text-center'>Date</p>
            <p className='text-center'>Time</p>
            <p className='text-center'>Status</p>
            {filterStatus === 'pending' && <p className='text-center'>Action</p>}
          </div>

          {appointments.length === 0 ? (
            <div className="text-center py-4 text-gray-600">No data found</div>
          ) : (
            appointments.map((item, index) => (
              <div key={item._id} className='grid sm:grid-cols-[40px_1fr_1fr_1fr_1fr_1fr_1fr] grid-cols-1 gap-4 items-center py-4 px-4 border-b hover:bg-gray-50 transition-all'>
                <p className='hidden sm:block text-center font-medium'>{index + 1}</p>
                <p className='sm:block hidden text-center truncate'>{item.userData?.name || 'Unknown'}</p>
                <p className='sm:block hidden text-center truncate sm:max-w-[160px]' title={item.userData?.email}>{item.userData?.email}</p>
                <p className='sm:block hidden text-center whitespace-nowrap'>{item.slotDate}</p>
                <p className='sm:block hidden text-center whitespace-nowrap'>{item.slotTime}</p>
                <div className='sm:flex hidden justify-center items-center gap-2'>
                  {renderStatus(item)}
                </div>

                {/* Action buttons */}
                {filterStatus === 'pending' && item.status === "pending" && (
                  <div className="sm:flex hidden justify-center items-center gap-2">
                    <img
                      onClick={() => setSelectedAction({ type: 'cancel', id: item._id })}
                      src={assets.cancel_icon}
                      className="w-6 h-6 cursor-pointer hover:scale-110 transition"
                      alt="cancel"
                    />
                    <img
                      onClick={() => setSelectedAction({ type: 'complete', id: item._id })}
                      src={assets.tick_icon}
                      className="w-6 h-6 cursor-pointer hover:scale-110 transition"
                      alt="complete"
                    />
                  </div>
                )}

                {filterStatus === "booked" && item.status === "booked" && (
                  <div className="flex justify-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal("join", item);
                    }}
                    className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="hidden sm:inline">Join</span>
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal("request", item);
                    }}
                    className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="hidden sm:inline">Confirm</span>
                  </button>
                </div>
  
)}

         



              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        {totalPages >= 1 && (
          <div className="flex justify-center mt-6 gap-2 items-center text-sm font-medium text-gray-600">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
            >
              Previous
            </button>
            <button className={`px-3 py-1 border rounded bg-blue-600 text-white`}>
              {currentPage}
            </button>
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

      {/* Prescription Modal */}
      <PrescriptionModal
        isOpen={showPrescriptionModal}
        onClose={() => setShowPrescriptionModal(false)}
        appointment={selectedAppointment}
        dToken={dToken}
        backendUrl={backendUrl}
      />

      {/* Confirmation Modal */}
      <AnimatePresence>
        {selectedAction && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-700 bg-opacity-50 z-50"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white p-6 rounded-md shadow-lg w-96"
            >
              <h2 className="text-lg font-semibold text-center mb-4">Confirm this appointment</h2>
              {selectedAction.type === 'cancel' && (
                <textarea
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                  placeholder="Enter cancellation reason"
                  className="w-full p-2 border rounded mb-4"
                  required={true}
                />
              )}
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSelectedAction(null)}
                  className="px-4 py-1 border rounded text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Join/Request Modal */}
      {modalVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white rounded-lg shadow-xl w-80 p-6">
            <h3 className="text-lg font-semibold mb-4">
              {modalType === "join" ? "Join room?" : "Send confirmation request to user ?"}
            </h3>
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleCancel}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmBookedJoinOrSendRequest}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorAppointments;
