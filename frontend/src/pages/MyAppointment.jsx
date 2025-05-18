





import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';
import Loading from '../components/Loading';
import ViewPrescriptionModal from '../modal/ViewPrescriptionModal';

const MyAppointments = () => {
  const { backendUrl, token } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [statusFilter, setStatusFilter] = useState('all'); // Mặc định là 'all'
  const [confirmModal, setConfirmModal] = useState({ open: false, id: null, doctorId: null });
  const [cancelReason, setCancelReason] = useState('');
  const [vnpayModal, setVnpayModal] = useState({ open: false, appointmentId: null });
  const [joinModal, setJoinModal] = useState({ open: false, link: null });
const [showViewPrescriptionModal,setShowViewPrescriptionModal] = useState(false)
const [selectedPrescription, setSelectedPrescription] = useState(null);
const [showSendRequestConfirmationModal, setSendRequestShowConfirmationModal] = useState(false);
const [selectedItemToSendConfirmToDoctor,setSelectedItemToSendConfirmToDoctor] = useState(null)
  const getUserAppointments = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${backendUrl}/api/user/appointments`, {
        params: {
          status: statusFilter,
          page: currentPage
        },
        headers: { token }
      });
      setAppointments(data.appointments);
      setTotalPages(data.totalPages);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Gọi API khi component mount và khi statusFilter hoặc currentPage thay đổi
  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token, statusFilter, currentPage]);

  const cancelAppointment = async (appointmentId, doctorId, reason) => {
    setConfirmModal({ open: false, id: null, doctorId: null });
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/cancel-appointment`,
        { doctorId, appointmentId, reason },
        { headers: { token } }
      );
      if (data.success) {
        toast.success("Cancelled successfully");
        setCancelReason('');
        getUserAppointments(); // Refresh data after cancellation
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVNPAYPayment = async () => {
    try {
      const fee = localStorage.getItem("fee");
      const payload = { amount: fee, bankCode: 'NCB', language: 'vn' };
      const { data } = await axios.post(`${backendUrl}/order/create_payment_url`, payload);
      if (data?.url) window.location.href = data.url;
      else toast.error('Failed to initiate payment.');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const renderStatusBadge = (status) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-700 border-yellow-400',
      'waiting for payment': 'bg-blue-100 text-blue-700 border-blue-400',
      booked: 'bg-purple-100 text-purple-700 border-purple-400',
      done: 'bg-green-100 text-green-700 border-green-400',
      cancelled: 'bg-red-100 text-red-700 border-red-400'
    };
    return (
      <span className={`inline-block px-2 py-1 text-xs font-semibold border rounded ${styles[status.toLowerCase()] || 'bg-gray-100 text-gray-600 border-gray-300'}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const handleJoinRoom = (link) => {
    setJoinModal({ open: true, link });
  };

  const confirmJoinRoom = () => {
    if (joinModal.link) window.open(joinModal.link, '_blank');
    setJoinModal({ open: false, link: null });
  };

  const statusOptions = ['all', 'pending', 'waiting for payment', 'booked', 'completed','cancelled'];

const handleViewPrescription = (item) => {
  setSelectedPrescription(item);
  
  setShowViewPrescriptionModal(true);
};


const handleSendConfirmationRequestToDoctor =(item)=>{
  setSendRequestShowConfirmationModal(true)
  setSelectedItemToSendConfirmToDoctor(item)
}

const handleCallApiConfirmationRequestToDoctor = async ()=>{
  setIsLoading(true)
  try {
    setIsLoading(true);
    const response = await axios.put(
      `${backendUrl}/api/appointment/${selectedItemToSendConfirmToDoctor._id}/confirm-user`,
      {},
      { headers: { token } }
    );
    
    toast.success(response.data.message || 'Confirmation sent successfully!');
    setSendRequestShowConfirmationModal(false);
    getUserAppointments();
  } catch (error) {
    toast.error(error.response?.data?.message || 'Failed to send confirmation');
  } finally {
    setIsLoading(false);
  }
}
  return (
    <div>
      {isLoading && <Loading />}
      <p className='pb-3 mt-12 text-lg font-medium text-gray-600 border-b'>My appointments</p>

      {/* Status Tabs */}
      <div className="flex gap-3 py-4 overflow-x-auto">
        {statusOptions.map(status => (
          <button
            key={status}
            onClick={() => {
              setStatusFilter(status);
              setCurrentPage(1); // Reset về trang 1 khi chuyển tab
            }}
            className={`px-4 py-2 rounded border whitespace-nowrap ${
              statusFilter === status 
                ? 'bg-primary text-white' 
                : 'text-gray-600 bg-white hover:bg-gray-100'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Appointments List */}
      {appointments.length === 0 ? (
        <p className="py-4 text-center text-gray-500">No appointments found</p>
      ) : (
        <>
          {appointments.map((item, index) => (
            <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b'>
              <img className='w-36 bg-[#EAEFFF]' src={item.docData.image} alt="" />
              <div className='flex-1 text-sm text-[#5E5E5E]'>
                <p className='text-[#262626] text-base font-semibold'>{item.docData.name}</p>
                <p>{item.docData.speciality}</p>
                <p className='mt-1'><span className='font-medium text-[#3C3C3C]'>Date & Time:</span> {item.slotDate} | {item.slotTime}</p>
                <p className='mt-1'><span className='font-medium text-[#3C3C3C]'>Status:</span> {renderStatusBadge(item.status)}</p>
              </div>
            
              <div className='flex flex-col gap-2 justify-end text-sm text-center'>
  {item.status === "waiting for payment" && (
    <button
      onClick={() => {
        localStorage.setItem("slotId", item.slotId);
        localStorage.setItem("docId", item.docData._id);
        localStorage.setItem("fee", item.amount);
        setVnpayModal({ open: true, appointmentId: item._id });
      }}
      className="sm:min-w-48 py-2 border rounded text-[#696969] hover:bg-primary hover:text-white transition-all duration-300"
    >
      Pay Online
    </button>
  )}
  
  {item.status === "booked" && (
    <>
      <button
        onClick={() => handleJoinRoom(item.linkMeet)}
        className='sm:min-w-48 py-2 border rounded text-[#696969] hover:bg-blue-600 hover:text-white transition-all duration-300'
      >
        Join Room
      </button>
      {item.isDoctorConfirmedComplete == true &&(
 <button
 onClick={() => handleSendConfirmationRequestToDoctor(item) }
 className='sm:min-w-48 py-2 border rounded text-[#696969] hover:bg-green-600 hover:text-white transition-all duration-300'
>
 Send done confirmation
</button>
      )}
     
    </>
  )}
{item.status === "completed" && item.prescriptionPrescribed === true && (
  <button
    className='sm:min-w-48 py-2 border rounded text-[#696969] hover:bg-blue-600 hover:text-white transition-all duration-300'
    onClick={() => handleViewPrescription(item)}
  >
    View prescription
  </button>
)}
{item.status === "completed" && item.prescriptionPrescribed === false && (
  <p
    className='sm:min-w-48 py-2 border rounded text-[#696969] bg-blue-600 text-white transition-all duration-300'
    //onClick={() => handleViewPrescription(item)}
  >
    Pending prescription
  </p>
)}






{!["cancelled", "booked", "completed"].includes(item.status) && (
  <button
    onClick={() => setConfirmModal({ open: true, id: item._id, doctorId: item.docData._id })}
    className='sm:min-w-48 py-2 border rounded text-[#696969] hover:bg-red-600 hover:text-white transition-all duration-300'
  >
    Cancel appointment
  </button>
)}


  {item.reason && (
    <div className='sm:min-w-48 py-2 border rounded bg-[#EAEFFF] text-[#696969]'>
      <span className="font-semibold">Reason:</span> {item.reason}
    </div>
  )}
</div>

            </div>
          ))}
        </>
        
      )}

      {/* Pagination */}
      {totalPages >= 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? 'bg-primary text-white' : 'text-gray-700'
              }`}
            >
              {i + 1}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      
{showViewPrescriptionModal && (
  <ViewPrescriptionModal
    isOpen={showViewPrescriptionModal}
    onClose={() => setShowViewPrescriptionModal(false)}
    token={token}
    backendUrl={backendUrl}
    appointmentId={selectedPrescription._id}
  />
)}


      {/* Modals */}
      <AnimatePresence>
        {vnpayModal.open && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="bg-white p-6 rounded-xl w-[90%] max-w-sm text-center space-y-4"
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}>
              <h2 className="text-xl font-semibold text-gray-800">Confirm Payment</h2>
              <p>Do you want to proceed with the payment via VNPAY?</p>
              <div className="flex justify-center gap-4 pt-4">
                <button
                  onClick={handleVNPAYPayment}
                  className="px-4 py-2 rounded bg-primary text-white hover:bg-blue-600 transition">
                  Pay Now
                </button>
                <button
                  onClick={() => setVnpayModal({ open: false, appointmentId: null })}
                  className="px-4 py-2 rounded border text-gray-600 hover:bg-gray-100 transition">
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {confirmModal.open && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full"
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <h2 className="text-lg font-semibold mb-4">Are you sure you want to cancel this appointment?</h2>
              <input
                type="text"
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
                placeholder="Enter your reason..."
                className="w-full px-4 py-2 mt-4 border rounded"
                required
              />
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={() => {
                    setConfirmModal({ open: false, id: null, doctorId: null });
                    setCancelReason('');
                  }}
                  className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100">
                  No
                </button>
                <button
                  onClick={() => {
                    if (cancelReason.trim() === '') {
                      toast.error('Please enter a reason.');
                    } else {
                      cancelAppointment(confirmModal.id, confirmModal.doctorId, cancelReason);
                    }
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                  Yes, cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {joinModal.open && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full"
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <h2 className="text-lg font-semibold mb-4">Join Appointment Room</h2>
              <p className='text-sm text-gray-600 mb-4'>Click confirm to open the video call room in a new tab.</p>
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={() => setJoinModal({ open: false, link: null })}
                  className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100">
                  Cancel
                </button>
                <button
                  onClick={confirmJoinRoom}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                  Confirm
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

       {/* Confirmation Modal */}
       {showSendRequestConfirmationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Confirm Action</h3>
            <p className="mb-6">Are you sure you want to send the completion confirmation ?</p>
            
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSendRequestShowConfirmationModal(false)}
                className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100 transition-colors"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                onClick={handleCallApiConfirmationRequestToDoctor}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAppointments;
