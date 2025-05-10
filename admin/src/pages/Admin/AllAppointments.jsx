import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../context/AdminContext';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../../components/Loader';
import { assets } from '../../assets/assets';
import { AnimatePresence, motion } from 'framer-motion';

const AllAppointments = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const { aToken } = useContext(AdminContext);
        // State management
        const [appointments, setAppointments] = useState([]);
        const [loading, setLoading] = useState(false);
        const [filterStatus, setFilterStatus] = useState('all');
        const [currentPage, setCurrentPage] = useState(1);
        const [totalPages, setTotalPages] = useState(1);


        // Appointment actions state
          const [selectedAction, setSelectedAction] = useState(null);
          const [cancelReason, setCancelReason] = useState('');

         // Fetch appointments
         const fetchAppointments = async () => {
          try {
            setLoading(true);
            const response = await axios.get(`${backendUrl}/api/admin/appointments`, {
              params: { page: currentPage, status: filterStatus },
              headers: { aToken },
            });
            console.log(response.data.data)
            setAppointments(response.data.data);
            setTotalPages(response.data.totalPages);
          } catch (error) {
            toast.error('Failed to load appointments!');
          } finally {
            setLoading(false);
          }
        };
  useEffect(() => {
    if (!aToken) return;
   
    fetchAppointments();
  }, [currentPage, filterStatus, aToken]);
  const handleConfirmCancel = async () => {
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
      
        await axios.put(
          `${backendUrl}/api/admin/cancel-appointment`,
          { appointmentId: currentId, reason: cancelReason.trim() },
          { headers: { aToken } }
        );
        toast.success('Appointment cancelled');
        fetchAppointments();
      
    } catch (error) {
      toast.error('Operation failed');
    } finally {
      setLoading(false);
      setCancelReason('');
    }
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
          <p className='text-center'>Email doctor</p>
          <p className='text-center'>Email patient</p>
          <p className='text-center'>Date</p>
          <p className='text-center'>Time</p>
          <p className='text-center'>Status</p>
          {filterStatus !== 'all' && filterStatus !== 'booked' && filterStatus !== 'completed' && filterStatus !== 'cancelled' && <p className='text-center'>Action</p>}
        </div>

        {appointments.length === 0 ? (
          <div className="text-center py-4 text-gray-600">No data found</div>
        ) : (
          appointments.map((item, index) => (
            <div key={item._id} className='grid sm:grid-cols-[40px_1fr_1fr_1fr_1fr_1fr_1fr] grid-cols-1 gap-4 items-center py-4 px-4 border-b hover:bg-gray-50 transition-all'>
              <p className='hidden sm:block text-center font-medium'>{index + 1}</p>
              <p className='sm:block hidden text-center truncate sm:max-w-[160px]' title={item.docData?.email}>{item.docData?.email}</p>
              <p className='sm:block hidden text-center truncate sm:max-w-[160px]' title={item.userData?.email}>{item.userData?.email}</p>
              <p className='sm:block hidden text-center whitespace-nowrap'>{item.slotDate}</p>
              <p className='sm:block hidden text-center whitespace-nowrap'>{item.slotTime}</p>
              <div className='sm:flex hidden justify-center items-center gap-2'>
                {renderStatus(item)}
              </div>
              {/* {item.status !=='cancel' && (
 <div className="sm:flex hidden justify-center items-center gap-2">
 <img
   onClick={() => setSelectedAction({ type: 'cancel', id: item._id })}
   src={assets.cancel_icon}
   className="w-6 h-6 cursor-pointer hover:scale-110 transition"
   alt="cancel"
 />

</div>
              )} */}
              {filterStatus !== 'all' &&
  ['pending', 'waiting for payment'].includes(item.status?.toLowerCase()) && (
    <div className="sm:flex hidden justify-center items-center gap-2">
      <img
        onClick={() => setSelectedAction({ type: 'cancel', id: item._id })}
        src={assets.cancel_icon}
        className="w-6 h-6 cursor-pointer hover:scale-110 transition"
        alt="cancel"
      />
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
            <h2 className="text-lg font-semibold text-center mb-4">Cancel this appointment</h2>
            
              <textarea
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
                placeholder="Enter cancellation reason"
                className="w-full p-2 border rounded mb-4"
                required={true}
              />
            
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedAction(null)}
                className="px-4 py-1 border rounded text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmCancel}
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
  )
}

export default AllAppointments