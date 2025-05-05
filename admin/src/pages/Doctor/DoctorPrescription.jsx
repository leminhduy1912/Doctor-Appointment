



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
import ViewPrescriptionModal from './modal/ViewPrescriptionModal';

const DoctorPrescription = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { dToken } = useContext(DoctorContext);

  
  // State management
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState('completed');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  
  
  // Prescription modal state
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const [showViewPrescriptionModal, setShowViewPrescriptionModal] = useState(false);


  // Fetch appointments
  useEffect(() => {
    if (!dToken) return;
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
    fetchAppointments();
  }, [currentPage, filterStatus, dToken]);



  const handleOpenPrescriptionModal = (appointment) => {
    console.log("appt",appointment)

    setSelectedAppointment(appointment);
    setShowPrescriptionModal(true);
  };


  const handleOpenViewPrescriptionModal = (appointment) => {
    console.log("appt",appointment)

    setSelectedAppointment(appointment);
    setShowViewPrescriptionModal(true);
  };





  // Status renderer
  const renderStatus = (item) => {
    const status = (item.status || '').toLowerCase();
    switch (status) {
    
      case 'completed': return <span className='text-green-800 text-xs font-semibold'>Completed</span>;
     
      default: return <span className='text-gray-400 text-xs font-semibold'>Unknown</span>;
    }
  };

  if (loading) return <Loading />;

  return (
    <>
      <ToastContainer />
      <div className='w-full max-w-6xl m-5 relative'>
        <p className='mb-3 text-lg font-semibold text-gray-800'>All Doctor Prescription</p>

        {/* Filter */}
        <div className='flex gap-2 mb-4 text-sm font-medium'>
          {['completed'].map(status => (
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
             

               

                {filterStatus === "completed" && item.status === "completed" &&
  item.isDoctorConfirmedComplete && item.isUserConfirmedComplete && !item.prescriptionPrescribed && (
    <div className="relative inline-block text-left">
      <button onClick={() => handleOpenPrescriptionModal(item)}>Add Prescription</button>
    </div>
)}

{filterStatus === "completed" && item.status === "completed" &&
  item.prescriptionPrescribed && (
    <div className="relative inline-block text-left">
      <button onClick={() => handleOpenViewPrescriptionModal(item)}>View Prescription</button>
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
      {showPrescriptionModal && (
 <PrescriptionModal
 isOpen={showPrescriptionModal}
 onClose={() => setShowPrescriptionModal(false)}
 appointment={selectedAppointment}
 dToken={dToken}
 backendUrl={backendUrl}
/>




      )}

      {/* View Prescription Modal */}
      {showViewPrescriptionModal && (
 <ViewPrescriptionModal
 isOpen={showViewPrescriptionModal}
 onClose={() => setShowViewPrescriptionModal(false)}
 appointmentId={selectedAppointment._id}
 dToken={dToken}
 backendUrl={backendUrl}
/>




      )}
     

   
    </>
  );
};

export default DoctorPrescription;
