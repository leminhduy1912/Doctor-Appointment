import React, { useContext, useEffect, useState } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';
import { motion, AnimatePresence } from 'framer-motion';
import ClipLoader from 'react-spinners/ClipLoader';
import axios from 'axios';
import Loading from '../../components/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DoctorAppointments = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const { dToken, appointments, getAppointments } = useContext(DoctorContext);
  const { currency } = useContext(AppContext);

  const [selectedAction, setSelectedAction] = useState(null); // { type, id }
  const [loadingId, setLoadingId] = useState(null);

  useEffect(() => {
    if (dToken) {
      getAppointments();
    }
  }, [dToken]);

  const updateStatusSlot = async (doctorId, slotId, newStatus) => {
    try {
      const payload = {
        doctorId,
        slotId,
        newStatus,
      };
  
      // Nếu trạng thái là "waiting for payment", thêm trường isConfirm
      if (newStatus === 'Waiting for payment') {
        payload.isConfirm = true;
      }
  
      await axios.post(
        `${backendUrl}/api/doctor/change-status-appointment`,
        payload,
        {
          headers: {
            dToken: dToken,
          },
        }
      );
    } catch (err) {
      console.error('Failed to update slot status:', err);
      throw err;
    }
  };
  

  const handleConfirm = async () => {
    if (!selectedAction) return;
    setLoadingId(selectedAction.id);

    const appointment = appointments?.find(a => a._id === selectedAction.id);
    if (!appointment) {
      toast.error("Appointment not found!");
      setLoadingId(null);
      return;
    }

    const doctor = appointment.docData;
    const slotId = appointment.slotId;

    try {
      if (selectedAction.type === 'cancel') {
        await updateStatusSlot(doctor._id, slotId, 'Available');
        toast.success('Appointment cancelled');
      } else if (selectedAction.type === 'complete') {
        await updateStatusSlot(doctor._id, slotId, 'Waiting for payment');
     //   toast.success('Appointment confirmed. Awaiting patient payment.');
      }
    } catch (error) {
      toast.error('Failed to update appointment');
    }

    setLoadingId(null);
    setSelectedAction(null);
    getAppointments();
  };

  return (
    <>
      {!appointments ? (
        <Loading />
      ) : (
        <div className='w-full max-w-6xl m-5 relative'>
          <p className='mb-3 text-lg font-semibold text-gray-800'>All Appointments</p>

          <div className='bg-white border rounded shadow text-sm max-h-[80vh] overflow-y-auto'>
            <div className='hidden sm:grid grid-cols-[40px_1fr_1fr_1fr_1fr_1fr_1fr] gap-4 py-3 px-4 border-b font-semibold text-gray-600 bg-gray-50 sticky top-0 z-10'>
              <p className='text-center'>#</p>
              <p className='text-center'>Patient</p>
              <p className='text-center'>Email</p>
              <p className='text-center'>Date</p>
              <p className='text-center'>Time</p>
              <p className='text-center'>Fees</p>
              <p className='text-center'>Action</p>
            </div>

            {appointments.map((item, index) => (
              <div key={item._id} className='grid sm:grid-cols-[40px_1fr_1fr_1fr_1fr_1fr_1fr] grid-cols-1 gap-4 items-center py-4 px-4 border-b hover:bg-gray-50 transition-all'>
                <p className='hidden sm:block text-center font-medium'>{index + 1}</p>
                <p className='sm:block hidden text-center truncate'>{item.userData?.name || 'Unknown'}</p>
                <p className='sm:block hidden text-center truncate sm:max-w-[160px]' title={item.userData?.email}>{item.userData?.email}</p>
                <p className='sm:block hidden text-center whitespace-nowrap'>{item.slotDate}</p>
                <p className='sm:block hidden text-center whitespace-nowrap'>{item.slotTime}</p>
                <p className='sm:block hidden text-center'>{currency}{item.amount}</p>

                {/* Desktop Action */}
                <div className='sm:flex hidden justify-center items-center gap-2'>
                {item.status === 'cancelled' ? (
  <span className='text-red-500 text-xs font-semibold'>Cancelled</span>
) : item.status === 'Booked' ? (
  <span className='text-green-600 text-xs font-semibold'>Booked</span>
) : item.status === 'waiting for payment' ? (
  <span className='text-yellow-600 text-xs font-semibold'>Waiting for payment</span>
) : item.status === 'Confirmed' ? (
  <span className='text-lime-600 text-xs font-semibold'>Confirmed</span>
) : item.status === 'pending' ? (
  loadingId === item._id ? (
    <ClipLoader size={24} color="#4A90E2" />
  ) : (
    <>
      <img onClick={() => setSelectedAction({ type: 'cancel', id: item._id })} src={assets.cancel_icon} className='w-6 h-6 cursor-pointer hover:scale-110 transition' alt='cancel' />
      <img onClick={() => setSelectedAction({ type: 'complete', id: item._id })} src={assets.tick_icon} className='w-6 h-6 cursor-pointer hover:scale-110 transition' alt='complete' />
    </>
  )
) : (
  <span className='text-gray-400 text-xs font-semibold'>Unknown</span>
)}
                </div>
                {/* Mobile View */}
                <div className='sm:hidden'>
                  <p><strong>Patient:</strong> {item.userData?.name}</p>
                  <p><strong>Email:</strong> {item.userData?.email}</p>
                  <p><strong>Date:</strong> {item.slotDate}</p>
                  <p><strong>Time:</strong> {item.slotTime}</p>
                  <p><strong>Fees:</strong> {currency}{item.amount}</p>
                  <div className='flex gap-2 mt-1'>
                    {item.cancelled ? (
                      <span className='text-red-700 text-xs font-semibold'>Cancelled</span>
                    ) : item.isCompleted ? (
                      <span className='text-green-700 text-xs font-semibold'>Completed</span>
                    ) : item.status === 'Confirmed' ? (
                      <span className='text-lime-600 text-xs font-semibold'>Confirmed</span>
                    ) : loadingId === item._id ? (
                      <ClipLoader size={20} color="#4A90E2" />
                    ) : (
                      <>
                        <img onClick={() => setSelectedAction({ type: 'cancel', id: item._id })} src={assets.cancel_icon} className='w-6 h-6 cursor-pointer hover:scale-110 transition' alt='cancel' />
                        <img onClick={() => setSelectedAction({ type: 'complete', id: item._id })} src={assets.tick_icon} className='w-6 h-6 cursor-pointer hover:scale-110 transition' alt='complete' />
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Confirmation Modal */}
          <AnimatePresence>
            {selectedAction && (
              <motion.div className='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50'
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <motion.div className='bg-white rounded-xl p-6 shadow-lg w-80'
                  initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}>
                  <p className='text-lg font-semibold text-gray-700 mb-4'>
                    {selectedAction.type === 'cancel' ? 'Cancel this appointment?' : 'Do you want to confirm this appointment ?'}
                  </p>
                  <div className='flex justify-end gap-3'>
                    <button
                      onClick={() => setSelectedAction(null)}
                      className='px-4 py-1 border rounded text-gray-500 hover:bg-gray-100 disabled:opacity-50'
                      disabled={loadingId === selectedAction.id}
                    >
                      No
                    </button>
                    <button
                      onClick={handleConfirm}
                      className='px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center justify-center min-w-[60px]'
                      disabled={loadingId === selectedAction.id}
                    >
                      {loadingId === selectedAction.id ? <ClipLoader size={20} color="#fff" /> : 'Yes'}
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        </div>
      )}
    </>
  );
};

export default DoctorAppointments;
