
// import React, { useContext, useEffect, useState } from 'react';
// import { DoctorContext } from '../../context/DoctorContext';
// import { AppContext } from '../../context/AppContext';
// import { assets } from '../../assets/assets';
// import { motion, AnimatePresence } from 'framer-motion';
// import ClipLoader from 'react-spinners/ClipLoader';
// import axios from 'axios';
// import Loading from '../../components/Loader';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const DoctorAppointments = () => {
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;
//   const { dToken } = useContext(DoctorContext);
//   const [appointments,setAppointments]= useState([])
//   const { currency } = useContext(AppContext);

//   const [selectedAction, setSelectedAction] = useState(null);
//   const [loadingId, setLoadingId] = useState(null);
//   const [cancelReason, setCancelReason] = useState('');
//   const [filterStatus, setFilterStatus] = useState('available');
//   const [currentPage, setCurrentPage] = useState(1);
//    const [totalPages, setTotalPages] = useState(1);
  

//   // Fetch appointments when the current page or filter status changes
//   useEffect(() => {
//     if (!dToken) return;
//     const fetchAppointments = async () => {
//       try {
//         const response = await axios.get(`${backendUrl}/api/doctor/appointments`, {
//           params: {
//             page: currentPage,
//             status: filterStatus,
//           },
//           headers: { dToken },
//         });
//         console.log(appointments)
//         setTotalPages(response.data.totalPages);
//         setAppointments(response.data.appointments);  // Assuming the API returns an object with 'appointments'
//       } catch (error) {
//         console.error('Failed to fetch appointments:', error);
//         toast.error('Failed to load appointments');
//       }
//     };
// console.log(currentPage)
//     fetchAppointments();
//   }, [currentPage, filterStatus, dToken]);

//   const updateStatusSlot = async (doctorId, slotId, newStatus) => {
//     const payload = { doctorId, slotId, newStatus };
//     if (newStatus === 'waiting for payment') payload.isConfirm = true;
//     await axios.post(`${backendUrl}/api/doctor/change-status-appointment`, payload, {
//       headers: { dToken },
//     });
//   };

//   const handleConfirm = async () => {
//     if (!selectedAction) return;
//     setLoadingId(selectedAction.id);

//     const appointment = appointments?.find(a => a._id === selectedAction.id);
//     if (!appointment) {
//       toast.error('Appointment not found!');
//       setLoadingId(null);
//       return;
//     }

//     try {
//       if (selectedAction.type === 'cancel') {
//         await axios.post(
//           `${backendUrl}/api/doctor/cancel-appointment`,
//           {
//             appointmentId: selectedAction.id,
//             reason: cancelReason.trim(),
//           },
//           { headers: { dToken } }
//         );
//         toast.success('Appointment cancelled');
//       } else if (selectedAction.type === 'complete') {
//         await updateStatusSlot(appointment.docData._id, appointment.slotId, 'waiting for payment');
//         toast.success('Appointment confirmed. Awaiting payment.');
//       }
//     } catch (error) {
//       console.error('Failed:', error);
//       toast.error('Operation failed');
//     }

//     setLoadingId(null);
//     setSelectedAction(null);
//     setCancelReason('');
//   };

//   const renderStatus = (item) => {
//     const status = (item.status || '').toLowerCase();
//     switch (status) {
//       case 'cancelled':
//         return <span className='text-red-500 text-xs font-semibold'>Cancelled</span>;
//       case 'booked':
//         return <span className='text-green-600 text-xs font-semibold'>Booked</span>;
//       case 'waiting for payment':
//         return <span className='text-yellow-600 text-xs font-semibold'>Waiting for payment</span>;
//       case 'available':
//         return <span className='text-lime-600 text-xs font-semibold'>Available</span>;
//       case 'pending':
//         return loadingId === item._id ? (
//           <ClipLoader size={24} color="#4A90E2" />
//         ) : (
//           <>
//             <img
//               onClick={() => setSelectedAction({ type: 'cancel', id: item._id })}
//               src={assets.cancel_icon}
//               className='w-6 h-6 cursor-pointer hover:scale-110 transition'
//               alt='cancel'
//             />
//             <img
//               onClick={() => setSelectedAction({ type: 'complete', id: item._id })}
//               src={assets.tick_icon}
//               className='w-6 h-6 cursor-pointer hover:scale-110 transition'
//               alt='complete'
//             />
//           </>
//         );
//       default:
//         return <span className='text-gray-400 text-xs font-semibold'>Unknown</span>;
//     }
//   };


//   return (
//     <>
//       {!appointments ? (
//         <Loading />
//       ) : (
//         <div className='w-full max-w-6xl m-5 relative'>
//           <p className='mb-3 text-lg font-semibold text-gray-800'>All Appointments</p>

//           {/* Filter by status */}
//           <div className='flex gap-2 mb-4 text-sm font-medium'>
//             {['all', 'pending', 'waiting for payment', 'cancelled', 'booked'].map(status => (
//               <button
//                 key={status}
//                 onClick={() => {
//                   setFilterStatus(status);
//                   setCurrentPage(1);
//                 }}
//                 className={`px-3 py-1 border rounded ${filterStatus === status ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 text-gray-600'} capitalize`}
//               >
//                 {status}
//               </button>
//             ))}
//           </div>

//           <div className='bg-white border rounded shadow text-sm max-h-[70vh] overflow-y-auto'>
//             {/* The table headers */}
//             <div className='hidden sm:grid grid-cols-[40px_1fr_1fr_1fr_1fr_1fr_1fr] gap-4 py-3 px-4 border-b font-semibold text-gray-600 bg-gray-50 sticky top-0 z-10'>
//               <p className='text-center'>#</p>
//               <p className='text-center'>Patient</p>
//               <p className='text-center'>Email</p>
//               <p className='text-center'>Date</p>
//               <p className='text-center'>Time</p>
//               <p className='text-center'>Fees</p>
//               <p className='text-center'>Action</p>
//             </div>

//             {/* Display No Data Message */}
//             {appointments.length === 0 ? (
//               <div className="text-center py-4 text-gray-600">No data found</div>
//             ) : (
//               appointments.map((item, index) => (
//                 <div key={item._id} className='grid sm:grid-cols-[40px_1fr_1fr_1fr_1fr_1fr_1fr] grid-cols-1 gap-4 items-center py-4 px-4 border-b hover:bg-gray-50 transition-all'>
//                   <p className='hidden sm:block text-center font-medium'>{ index + 1}</p>
//                   <p className='sm:block hidden text-center truncate'>{item.userData?.name || 'Unknown'}</p>
//                   <p className='sm:block hidden text-center truncate sm:max-w-[160px]' title={item.userData?.email}>{item.userData?.email}</p>
//                   <p className='sm:block hidden text-center whitespace-nowrap'>{item.slotDate}</p>
//                   <p className='sm:block hidden text-center whitespace-nowrap'>{item.slotTime}</p>
//                   <p className='sm:block hidden text-center'>{currency}{item.amount}</p>
//                   <div className='sm:flex hidden justify-center items-center gap-2'>
//                     {renderStatus(item)}
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Pagination */}
//           {totalPages >= 1 && (
//             <div className="flex justify-center mt-6 gap-2 items-center text-sm font-medium text-gray-600">
//               <button
//                 onClick={() => setCurrentPage(currentPage-1)}
//                 disabled={currentPage === 1}
//                 className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
//               >
//                 Previous
//               </button>

//               {
//                 <button
                
//                   className={`px-3 py-1 border rounded bg-blue-600 text-white `}
//                 >
//                   {currentPage}
//                 </button>
//               }

//               <button
//                 onClick={() => setCurrentPage(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </div>
//       )}

//       {/* Confirmation Modal */}
//       <AnimatePresence>
//         {selectedAction && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-700 bg-opacity-50 z-50"
//           >
//             <div className="bg-white p-6 rounded-md shadow-lg w-96">
//               <h2 className="text-lg font-semibold text-center mb-4">Confirm this appointment </h2>
//               {selectedAction.type === 'cancel' && (
//                 <>
//                   <textarea
//                     value={cancelReason}
//                     onChange={(e) => setCancelReason(e.target.value)}
//                     placeholder="Enter cancellation reason"
//                     className="w-full p-2 border rounded mb-4"
//                   />
//                   <button
//                     onClick={handleConfirm}
//                     className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600"
//                   >
//                     Confirm Cancellation
//                   </button>
//                 </>
//               )}
//               {selectedAction.type === 'complete' && (
//                 <button
//                   onClick={handleConfirm}
//                   className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
//                 >
//                   Confirm Completion
//                 </button>
//               )}
//               <button
//                 onClick={() => setSelectedAction(null)}
//                 className="w-full py-2 mt-4 border rounded text-gray-700"
//               >
//                 Cancel
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <ToastContainer />
//     </>
//   );
// };

// export default DoctorAppointments;
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
  const { dToken } = useContext(DoctorContext);
  const [appointments, setAppointments] = useState([]);
  const { currency } = useContext(AppContext);

  const [selectedAction, setSelectedAction] = useState(null);
  const [loadingId, setLoadingId] = useState(null);
  const [cancelReason, setCancelReason] = useState('');
  const [filterStatus, setFilterStatus] = useState('available');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!dToken) return;
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/doctor/appointments`, {
          params: { page: currentPage, status: filterStatus },
          headers: { dToken },
        });
        setTotalPages(response.data.totalPages);
        setAppointments(response.data.appointments);
      } catch (error) {
        toast.error('Failed to load appointments');
      }
    };
    fetchAppointments();
  }, [currentPage, filterStatus, dToken]);

  const updateStatusSlot = async (doctorId, slotId, newStatus) => {
    const payload = { doctorId, slotId, newStatus };
    if (newStatus === 'waiting for payment') payload.isConfirm = true;
    await axios.post(`${backendUrl}/api/doctor/change-status-appointment`, payload, {
      headers: { dToken },
    });
  };

  const handleConfirm = async () => {
    if (!selectedAction) return;

    const currentId = selectedAction.id;
    setLoadingId(currentId);
    setSelectedAction(null); // Close modal immediately

    const appointment = appointments?.find(a => a._id === currentId);
    if (!appointment) {
      toast.error('Appointment not found!');
      setLoadingId(null);
      return;
    }

    try {
      if (selectedAction.type === 'cancel') {
        await axios.post(
          `${backendUrl}/api/doctor/cancel-appointment`,
          { appointmentId: currentId, reason: cancelReason.trim() },
          { headers: { dToken } }
        );
        toast.success('Appointment cancelled');
      } else if (selectedAction.type === 'complete') {
        await updateStatusSlot(appointment.docData._id, appointment.slotId, 'waiting for payment');
        toast.success('Appointment confirmed. Awaiting payment.');
      }
    } catch (error) {
      toast.error('Operation failed');
    }

    setCancelReason('');
    setLoadingId(null);
  };

  const renderStatus = (item) => {
    const status = (item.status || '').toLowerCase();
    switch (status) {
      case 'cancelled':
        return <span className='text-red-500 text-xs font-semibold'>Cancelled</span>;
      case 'booked':
        return <span className='text-green-600 text-xs font-semibold'>Booked</span>;
      case 'waiting for payment':
        return <span className='text-yellow-600 text-xs font-semibold'>Waiting for payment</span>;
      case 'available':
        return <span className='text-lime-600 text-xs font-semibold'>Available</span>;
      case 'pending':
        return loadingId === item._id ? (
          <ClipLoader size={24} color="#4A90E2" />
        ) : (
          <>
            <img
              onClick={() => setSelectedAction({ type: 'cancel', id: item._id })}
              src={assets.cancel_icon}
              className='w-6 h-6 cursor-pointer hover:scale-110 transition'
              alt='cancel'
            />
            <img
              onClick={() => setSelectedAction({ type: 'complete', id: item._id })}
              src={assets.tick_icon}
              className='w-6 h-6 cursor-pointer hover:scale-110 transition'
              alt='complete'
            />
          </>
        );
      default:
        return <span className='text-gray-400 text-xs font-semibold'>Unknown</span>;
    }
  };

  return (
    <>
      <ToastContainer />
      {!appointments ? (
        <Loading />
      ) : (
        <div className='w-full max-w-6xl m-5 relative'>
          <p className='mb-3 text-lg font-semibold text-gray-800'>All Appointments</p>

          {/* Filter */}
          <div className='flex gap-2 mb-4 text-sm font-medium'>
            {['all', 'pending', 'waiting for payment', 'cancelled', 'booked'].map(status => (
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
              <p className='text-center'>Fees</p>
              <p className='text-center'>Action</p>
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
                  <p className='sm:block hidden text-center'>{currency}{item.amount}</p>
                  <div className='sm:flex hidden justify-center items-center gap-2'>
                    {renderStatus(item)}
                  </div>
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
      )}

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
              <h2 className="text-lg font-semibold text-center mb-4">Confirm cancel this appointment</h2>
              {selectedAction.type === 'cancel' && (
                <textarea
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                  placeholder="Enter cancellation reason"
                  className="w-full p-2 border rounded mb-4"
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
                  className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DoctorAppointments;
