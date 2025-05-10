
// // // import React, { useContext, useEffect, useState } from 'react';
// // // import { DoctorContext } from '../../context/DoctorContext';
// // // import { AppContext } from '../../context/AppContext';
// // // import { assets } from '../../assets/assets';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import ClipLoader from 'react-spinners/ClipLoader';
// // // import axios from 'axios';
// // // import Loading from '../../components/Loader';
// // // import { ToastContainer, toast } from 'react-toastify';
// // // import { Menu, Transition } from '@headlessui/react'
// // // import { HiOutlineDotsVertical } from 'react-icons/hi'
// // // import { Fragment } from 'react'

// // // const DoctorAppointments = () => {
// // //   const backendUrl = import.meta.env.VITE_BACKEND_URL;
// // //   const { dToken } = useContext(DoctorContext);
// // //   const [appointments, setAppointments] = useState([]);
// // //   const { currency } = useContext(AppContext);

// // //   const [selectedAction, setSelectedAction] = useState(null);
// // //   const [loadingId, setLoadingId] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [cancelReason, setCancelReason] = useState('');
// // //   const [filterStatus, setFilterStatus] = useState('all');
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const [totalPages, setTotalPages] = useState(1);



// // //   const [modalVisible, setModalVisible] = useState(false);
// // // const [modalType, setModalType] = useState(""); // "join" hoặc "request"
// // // const [selectedItem, setSelectedItem] = useState(null);
// // // const [prescriptionModal, setPrescriptionModal] = useState({
// // //   isOpen: false,
// // //   appointmentId: "",
// // //   doctorId: "",
// // //   patientId: "",
// // //   form: {
// // //     diagnosis: "",
// // //     notes: "",
// // //     medicalHistory: "",
// // //     allergies: "",
// // //     prescriptions: [{ medicine: "", dosage: "", frequency: "" }],
// // //   },
// // // });
// // // const openPrescriptionModal = (appointment) => {
// // //   setPrescriptionModal({
// // //     isOpen: true,
// // //     appointmentId: appointment._id,
// // //     doctorId: appointment.docData._id,
// // //     patientId: appointment.userData._id,
// // //     form: {
// // //       diagnosis: "",
// // //       notes: "",
// // //       medicalHistory: "",
// // //       allergies: "",
// // //       prescriptions: [{ medicine: "", dosage: "", frequency: "" }],
// // //     },
// // //   });
// // // };
// // // const handlePrescriptionFormChange = (index, field, value) => {
// // //   const newPrescriptions = [...prescriptionModal.form.prescriptions];
// // //   newPrescriptions[index][field] = value;
// // //   setPrescriptionModal((prev) => ({
// // //     ...prev,
// // //     form: {
// // //       ...prev.form,
// // //       prescriptions: newPrescriptions,
// // //     },
// // //   }));
// // // };

// // // const handleGeneralFieldChange = (field, value) => {
// // //   setPrescriptionModal((prev) => ({
// // //     ...prev,
// // //     form: {
// // //       ...prev.form,
// // //       [field]: value,
// // //     },
// // //   }));
// // // };

// // // const addPrescriptionRow = () => {
// // //   setPrescriptionModal((prev) => ({
// // //     ...prev,
// // //     form: {
// // //       ...prev.form,
// // //       prescriptions: [...prev.form.prescriptions, { medicine: "", dosage: "", frequency: "" }],
// // //     },
// // //   }));
// // // };

// // // const removePrescriptionRow = (index) => {
// // //   const newPrescriptions = prescriptionModal.form.prescriptions.filter((_, i) => i !== index);
// // //   setPrescriptionModal((prev) => ({
// // //     ...prev,
// // //     form: {
// // //       ...prev.form,
// // //       prescriptions: newPrescriptions,
// // //     },
// // //   }));
// // // };


// // // const submitPrescription = async () => {
// // //   try {
// // //     await axios.post("/api/prescriptions", {
// // //       ...prescriptionModal.form,
// // //       doctorId: prescriptionModal.doctorId,
// // //       patientId: prescriptionModal.patientId,
// // //       appointmentId: prescriptionModal.appointmentId,
// // //     });
// // //     toast.success("Tạo đơn thuốc thành công!");
// // //     setPrescriptionModal((prev) => ({ ...prev, isOpen: false }));
// // //   } catch (err) {
// // //     console.error(err);
// // //     toast.error("Lỗi khi tạo đơn thuốc.");
// // //   }
// // // };


// // // const openModal = (type, item) => {
// // //   setModalType(type);
// // //   setSelectedItem(item);
// // //   setModalVisible(true);
// // // };

// // // const handleConfirmBookedJoinOrSendRequest = () => {
// // //   if (!selectedItem) return;
// // // console.log(selectedItem)
// // //   if (modalType === "join") {
// // //     window.open(selectedItem.linkMeet, "_blank");
// // //   } else if (modalType === "request") {
// // //     handleRequestConfirmation(selectedItem._id);
// // //   }

// // //   setModalVisible(false);
// // // };

// // // const handleCancel = () => {
// // //   setModalVisible(false);
// // //   setSelectedItem(null);
// // //   setModalType("");
// // // };

// // //   useEffect(() => {
// // //     if (!dToken) return;
// // //     const fetchAppointments = async () => {
// // //       try {
// // //         setLoading(true)
// // //         const response = await axios.get(`${backendUrl}/api/doctor/appointments`, {
// // //           params: { page: currentPage, status: filterStatus },
// // //           headers: { dToken },
// // //         });
// // //         if (response) setLoading(false)
// // //         setTotalPages(response.data.totalPages);
// // //         setAppointments(response.data.appointments);
// // //       } catch (error) {
// // //         setLoading(false)
// // //         toast.error('Failed to load appointments !');
// // //       }
// // //     };
// // //     fetchAppointments();
// // //   }, [currentPage, filterStatus, dToken]);

// // //   const updateStatusSlot = async (doctorId, slotId, newStatus) => {
// // //     const payload = { doctorId, slotId, newStatus };
// // //     if (newStatus === 'waiting for payment') payload.isConfirm = true;
// // //     await axios.post(`${backendUrl}/api/doctor/change-status-appointment`, payload, {
// // //       headers: { dToken },
// // //     });
// // //   };
// // //   const handleRequestConfirmation = async (appointmentId) => {
// // //     try {
// // //       setLoading(true)
// // //       const res = await axios.put(`${backendUrl}/api/appointment/${appointmentId}/confirm-doctor`,{}, { headers: { dToken } });
// // //       setLoading(false)
// // //       toast.success(res.data.message || 'Request sent successfully!');
// // //       //refetch();
// // //     } catch (error) {
// // //       toast.error(error?.response?.data?.message || 'Failed to send request');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };
  
// // //   const handleConfirm = async () => {
// // //     if (!selectedAction) return;

// // //      const currentId = selectedAction.id;
// // //     // setLoadingId(currentId);
// // //     setSelectedAction(null); // Close modal immediately

// // //     const appointment = appointments?.find(a => a._id === currentId);
// // //     if (!appointment) {
// // //       toast.error('Appointment not found!');
// // //       setLoading(false);
// // //       return;
// // //     }

// // //     try {
// // //       if (selectedAction.type === 'cancel') {
// // //         setLoading(true);
// // //         await axios.post(
// // //           `${backendUrl}/api/doctor/cancel-appointment`,
// // //           { appointmentId: currentId, reason: cancelReason.trim() },
// // //           { headers: { dToken } }
// // //         );
// // //         setLoading(false);
// // //         toast.success('Appointment cancelled');
// // //       } else if (selectedAction.type === 'complete') {
// // //         setLoading(true);
// // //         await updateStatusSlot(appointment.docData._id, appointment.slotId, 'waiting for payment');
// // //         setLoading(false);
// // //         toast.success('Appointment confirmed. Awaiting payment.');
// // //       }
// // //     } catch (error) {
// // //       toast.error('Operation failed');
// // //       setLoading(false);
// // //     }

// // //     setCancelReason('');
// // //     setLoadingId(null);
// // //   };

// // //   const renderStatus = (item) => {
// // //     const status = (item.status || '').toLowerCase();
// // //     switch (status) {
// // //       case 'cancelled':
// // //         return <span className='text-red-500 text-xs font-semibold'>Cancelled</span>;
// // //       case 'booked':
// // //         return <span className='text-green-600 text-xs font-semibold'>Booked</span>;
// // //       case 'completed':
// // //         return <span className='text-green-800 text-xs font-semibold'>Completed</span>;
// // //       case 'waiting for payment':
// // //         return <span className='text-orange-800 text-xs font-semibold'>Waiting for payment</span>;
// // //       case 'pending':
// // //         return <span className='text-yellow-600 text-xs font-semibold'>Pending</span>;
// // //       case 'available':
// // //         return <span className='text-lime-600 text-xs font-semibold'>Available</span>;
   
// // //       default:
// // //         return <span className='text-gray-400 text-xs font-semibold'>Unknown</span>;
// // //     }
// // //   };
// // //    if (loading) return <Loading/>
// // //   return (
// // //     <>
// // //     {loading && <Loading/>}
// // //       <ToastContainer />
// // //       {!appointments ? (
// // //         <Loading />
// // //       ) : (
// // //         <div className='w-full max-w-6xl m-5 relative'>
// // //           <p className='mb-3 text-lg font-semibold text-gray-800'>All Appointments</p>

// // //           {/* Filter */}
// // //           <div className='flex gap-2 mb-4 text-sm font-medium'>
// // //             {['all', 'pending', 'waiting for payment', 'cancelled', 'booked','completed'].map(status => (
// // //               <button
// // //                 key={status}
// // //                 onClick={() => {
// // //                   setFilterStatus(status);
// // //                   setCurrentPage(1);
// // //                 }}
// // //                 className={`px-3 py-1 border rounded ${filterStatus === status ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 text-gray-600'} capitalize`}
// // //               >
// // //                 {status}
// // //               </button>
// // //             ))}
// // //           </div>

// // //           {/* Table */}
// // //           <div className='bg-white border rounded shadow text-sm max-h-[70vh] overflow-y-auto'>
// // //             <div className='hidden sm:grid grid-cols-[40px_1fr_1fr_1fr_1fr_1fr_1fr] gap-4 py-3 px-4 border-b font-semibold text-gray-600 bg-gray-50 sticky top-0 z-10'>
// // //               <p className='text-center'>#</p>
// // //               <p className='text-center'>Patient</p>
// // //               <p className='text-center'>Email</p>
// // //               <p className='text-center'>Date</p>
// // //               <p className='text-center'>Time</p>
            
// // //               <p className='text-center'>Status</p>
// // //               {filterStatus === 'pending' &&<p className='text-center'>Action</p> }
              
// // //             </div>

// // //             {appointments.length === 0 ? (
// // //               <div className="text-center py-4 text-gray-600">No data found</div>
// // //             ) : (
// // //               appointments.map((item, index) => (
// // //                 <div key={item._id} className='grid sm:grid-cols-[40px_1fr_1fr_1fr_1fr_1fr_1fr] grid-cols-1 gap-4 items-center py-4 px-4 border-b hover:bg-gray-50 transition-all'>
// // //                   <p className='hidden sm:block text-center font-medium'>{index + 1}</p>
// // //                   <p className='sm:block hidden text-center truncate'>{item.userData?.name || 'Unknown'}</p>
// // //                   <p className='sm:block hidden text-center truncate sm:max-w-[160px]' title={item.userData?.email}>{item.userData?.email}</p>
// // //                   <p className='sm:block hidden text-center whitespace-nowrap'>{item.slotDate}</p>
// // //                   <p className='sm:block hidden text-center whitespace-nowrap'>{item.slotTime}</p>
// // //                   <div className='sm:flex hidden justify-center items-center gap-2'>
// // //                     {renderStatus(item)}
// // //                   </div>
                 

// // // {filterStatus === 'pending' && item.status === "pending" && (
// // //   <div className="sm:flex hidden justify-center items-center gap-2">
// // //     <img
// // //       onClick={() => setSelectedAction({ type: 'cancel', id: item._id })}
// // //       src={assets.cancel_icon}
// // //       className="w-6 h-6 cursor-pointer hover:scale-110 transition"
// // //       alt="cancel"
// // //     />
// // //     <img
// // //       onClick={() => setSelectedAction({ type: 'complete', id: item._id })}
// // //       src={assets.tick_icon}
// // //       className="w-6 h-6 cursor-pointer hover:scale-110 transition"
// // //       alt="complete"
// // //     />
// // //   </div>
// // // ) }



// // // {filterStatus === "booked" && item.status === "booked" && (
// // //   <div className="relative inline-block text-left">
// // //     <Menu as="div" className="relative inline-block text-left">
// // //       <Menu.Button className="p-1 rounded hover:bg-gray-100">
// // //         <HiOutlineDotsVertical className="w-5 h-5 text-gray-600" />
// // //       </Menu.Button>

// // //       <Transition
// // //         as={Fragment}
// // //         enter="transition ease-out duration-100"
// // //         enterFrom="transform opacity-0 scale-95"
// // //         enterTo="transform opacity-100 scale-100"
// // //         leave="transition ease-in duration-75"
// // //         leaveFrom="transform opacity-100 scale-100"
// // //         leaveTo="transform opacity-0 scale-95"
// // //       >
// // //         <Menu.Items className="absolute right-0 top-0 z-50 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
// // //           <div className="py-1">
// // //             <Menu.Item>
// // //               {({ active }) => (
// // //                 <button
// // //                   onClick={() => openModal("join", item)}
// // //                   className={`${
// // //                     active ? "bg-gray-100" : ""
// // //                   } text-gray-900 block w-full text-left px-4 py-2 text-sm`}
// // //                 >
// // //                   Join Room
// // //                 </button>
// // //               )}
// // //             </Menu.Item>
           
            
// // //             <Menu.Item>
// // //               {({ active }) => (
// // //                 <button
// // //                   onClick={() => openModal("request", item)}
// // //                   className={`${
// // //                     active ? "bg-gray-100" : ""
// // //                   } text-gray-900 block w-full text-left px-4 py-2 text-sm`}
// // //                 >
// // //                   Request Confirmation
// // //                 </button>
// // //               )}
// // //             </Menu.Item>
// // //           </div>
// // //         </Menu.Items>
// // //       </Transition>
// // //     </Menu>
// // //   </div>
// // // )}

// // // {filterStatus === "completed" && item.status === "completed" && (
// // //   <div className="relative inline-block text-left">
// // //     <Menu as="div" className="relative inline-block text-left">
// // //       <Menu.Button className="p-1 rounded hover:bg-gray-100">
// // //         <HiOutlineDotsVertical className="w-5 h-5 text-gray-600" />
// // //       </Menu.Button>

// // //       <Transition
// // //         as={Fragment}
// // //         enter="transition ease-out duration-100"
// // //         enterFrom="transform opacity-0 scale-95"
// // //         enterTo="transform opacity-100 scale-100"
// // //         leave="transition ease-in duration-75"
// // //         leaveFrom="transform opacity-100 scale-100"
// // //         leaveTo="transform opacity-0 scale-95"
// // //       >
// // //         <Menu.Items className="absolute right-0 top-0 z-50 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
// // //           <div className="py-1">
// // //             <Menu.Item>
// // //               {({ active }) => (
// // //                 <button
// // //                   onClick={() => openModal("prescription", item)}
// // //                   className={`${
// // //                     active ? "bg-gray-100" : ""
// // //                   } text-gray-900 block w-full text-left px-4 py-2 text-sm`}
// // //                 >
// // //                   Create a prescription
// // //                 </button>
// // //               )}
// // //             </Menu.Item>
           
            
       
// // //           </div>
// // //         </Menu.Items>
// // //       </Transition>
// // //     </Menu>
// // //   </div>
// // // )}
// // // {prescriptionModal.isOpen && (
// // //   <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
// // //     <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl">
// // //       <h2 className="text-xl font-semibold mb-4">Create a Prescription</h2>

// // //       <div className="space-y-3">
// // //         <input type="text" placeholder="Diagnosis" className="input" value={prescriptionModal.form.diagnosis}
// // //           onChange={(e) => handleGeneralFieldChange("diagnosis", e.target.value)} />

// // //         <textarea placeholder="Notes" className="input" value={prescriptionModal.form.notes}
// // //           onChange={(e) => handleGeneralFieldChange("notes", e.target.value)} />

// // //         <input type="text" placeholder="Medical History" className="input" value={prescriptionModal.form.medicalHistory}
// // //           onChange={(e) => handleGeneralFieldChange("medicalHistory", e.target.value)} />

// // //         <input type="text" placeholder="Allergies" className="input" value={prescriptionModal.form.allergies}
// // //           onChange={(e) => handleGeneralFieldChange("allergies", e.target.value)} />

// // //         <h3 className="font-semibold mt-4">Prescriptions</h3>
// // //         {prescriptionModal.form.prescriptions.map((item, index) => (
// // //           <div key={index} className="flex gap-2 mb-2">
// // //             <input type="text" placeholder="Medicine" className="input"
// // //               value={item.medicine}
// // //               onChange={(e) => handlePrescriptionFormChange(index, "medicine", e.target.value)} />
// // //             <input type="text" placeholder="Dosage" className="input"
// // //               value={item.dosage}
// // //               onChange={(e) => handlePrescriptionFormChange(index, "dosage", e.target.value)} />
// // //             <input type="text" placeholder="Frequency" className="input"
// // //               value={item.frequency}
// // //               onChange={(e) => handlePrescriptionFormChange(index, "frequency", e.target.value)} />
// // //             <button onClick={() => removePrescriptionRow(index)} className="text-red-500">✕</button>
// // //           </div>
// // //         ))}
// // //         <button onClick={addPrescriptionRow} className="text-blue-600 underline">+ Add Medicine</button>
// // //       </div>

// // //       <div className="mt-4 flex justify-end gap-2">
// // //         <button onClick={() => setPrescriptionModal((prev) => ({ ...prev, isOpen: false }))} className="btn-secondary">Cancel</button>
// // //         <button onClick={submitPrescription} className="btn-primary">Submit</button>
// // //       </div>
// // //     </div>
// // //   </div>
// // // )}

// // // {modalVisible && (
// // //   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
// // //     <div className="bg-white rounded-lg shadow-xl w-80 p-6">
// // //       <h3 className="text-lg font-semibold mb-4">
// // //         {modalType === "join" ? "Join room ? " : "Send confirmation request to user ?"}
// // //       </h3>
// // //       <div className="flex justify-end space-x-2">
// // //         <button
// // //           onClick={handleCancel}
// // //           className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
// // //         >
// // //           Cancel
// // //         </button>
// // //         <button
// // //           onClick={handleConfirmBookedJoinOrSendRequest}
// // //           className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
// // //         >
// // //           Confirm
// // //         </button>
// // //       </div>
// // //     </div>
// // //   </div>
// // // )}




                 
// // //                 </div>
// // //               ))
// // //             )}
// // //           </div>

// // //           {/* Pagination */}
// // //           {totalPages >= 1 && (
// // //             <div className="flex justify-center mt-6 gap-2 items-center text-sm font-medium text-gray-600">
// // //               <button
// // //                 onClick={() => setCurrentPage(currentPage - 1)}
// // //                 disabled={currentPage === 1}
// // //                 className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
// // //               >
// // //                 Previous
// // //               </button>

// // //               <button className={`px-3 py-1 border rounded bg-blue-600 text-white`}>
// // //                 {currentPage}
// // //               </button>

// // //               <button
// // //                 onClick={() => setCurrentPage(currentPage + 1)}
// // //                 disabled={currentPage === totalPages}
// // //                 className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
// // //               >
// // //                 Next
// // //               </button>
// // //             </div>
// // //           )}
// // //         </div>
// // //       )}

// // //       {/* Confirmation Modal */}
// // //       <AnimatePresence>
// // //         {selectedAction && (
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-700 bg-opacity-50 z-50"
// // //           >
// // //             <motion.div
// // //               initial={{ scale: 0.9 }}
// // //               animate={{ scale: 1 }}
// // //               exit={{ scale: 0.9 }}
// // //               className="bg-white p-6 rounded-md shadow-lg w-96"
// // //             >
// // //               <h2 className="text-lg font-semibold text-center mb-4">Confirm this appointment</h2>
// // //               {selectedAction.type === 'cancel' && (
// // //                 <textarea
// // //                   value={cancelReason}
// // //                   onChange={(e) => setCancelReason(e.target.value)}
// // //                   placeholder="Enter cancellation reason"
// // //                   className="w-full p-2 border rounded mb-4"
// // //                   required={true}
// // //                 />
// // //               )}
// // //               <div className="flex justify-end gap-3">
// // //                 <button
// // //                   onClick={() => setSelectedAction(null)}
// // //                   className="px-4 py-1 border rounded text-gray-600 hover:bg-gray-100"
// // //                 >
// // //                   Cancel
// // //                 </button>
// // //                 <button
// // //                   onClick={handleConfirm}
// // //                   className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
// // //                 >
// // //                   Confirm
// // //                 </button>
// // //               </div>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </>
// // //   );
// // // };

// // // export default DoctorAppointments;



// import React, { useContext, useEffect, useState } from 'react';
// import { DoctorContext } from '../../context/DoctorContext';
// import { AppContext } from '../../context/AppContext';
// import { assets } from '../../assets/assets';
// import { motion, AnimatePresence } from 'framer-motion';
// import ClipLoader from 'react-spinners/ClipLoader';
// import axios from 'axios';
// import Loading from '../../components/Loader';
// import { ToastContainer, toast } from 'react-toastify';
// import { Menu, Transition } from '@headlessui/react';
// import { HiOutlineDotsVertical } from 'react-icons/hi';
// import { Fragment } from 'react';

// const DoctorAppointments = () => {
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;
//   const { dToken } = useContext(DoctorContext);
//   const { currency } = useContext(AppContext);
  
//   // State management
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [filterStatus, setFilterStatus] = useState('all');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
  
//   // Appointment actions state
//   const [selectedAction, setSelectedAction] = useState(null);
//   const [loadingId, setLoadingId] = useState(null);
//   const [cancelReason, setCancelReason] = useState('');
  
//   // Modals state
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalType, setModalType] = useState("");
//   const [selectedItem, setSelectedItem] = useState(null);
  
//   // Prescription state
//   const [prescriptionModal, setPrescriptionModal] = useState({
//     isOpen: false,
//     appointmentId: "",
//     doctorId: "",
//     patientId: "",
//     form: {
//       diagnosis: "",
//       notes: "",
//       medicalHistory: "",
//       allergies: "",
//       prescriptions: [{ medicine: "", dosage: "", frequency: "" }],
//     },
//   });

//   // Fetch appointments
//   useEffect(() => {
//     if (!dToken) return;
//     const fetchAppointments = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`${backendUrl}/api/doctor/appointments`, {
//           params: { page: currentPage, status: filterStatus },
//           headers: { dToken },
//         });
//         setLoading(false);
//         setTotalPages(response.data.totalPages);
//         setAppointments(response.data.appointments);
//       } catch (error) {
//         setLoading(false);
//         toast.error('Failed to load appointments!');
//       }
//     };
//     fetchAppointments();
//   }, [currentPage, filterStatus, dToken]);

//   // Helper functions
//   const updateStatusSlot = async (doctorId, slotId, newStatus) => {
//     const payload = { doctorId, slotId, newStatus };
//     if (newStatus === 'waiting for payment') payload.isConfirm = true;
//     await axios.post(`${backendUrl}/api/doctor/change-status-appointment`, payload, {
//       headers: { dToken },
//     });
//   };

//   const handleRequestConfirmation = async (appointmentId) => {
//     try {
//       setLoading(true);
//       const res = await axios.put(
//         `${backendUrl}/api/appointment/${appointmentId}/confirm-doctor`,
//         {},
//         { headers: { dToken } }
//       );
//       setLoading(false);
//       toast.success(res.data.message || 'Request sent successfully!');
//     } catch (error) {
//       toast.error(error?.response?.data?.message || 'Failed to send request');
//       setLoading(false);
//     }
//   };

//   const handleConfirm = async () => {
//     if (!selectedAction) return;

//     const currentId = selectedAction.id;
//     setSelectedAction(null);

//     const appointment = appointments?.find(a => a._id === currentId);
//     if (!appointment) {
//       toast.error('Appointment not found!');
//       setLoading(false);
//       return;
//     }

//     try {
//       if (selectedAction.type === 'cancel') {
//         setLoading(true);
//         await axios.post(
//           `${backendUrl}/api/doctor/cancel-appointment`,
//           { appointmentId: currentId, reason: cancelReason.trim() },
//           { headers: { dToken } }
//         );
//         setLoading(false);
//         toast.success('Appointment cancelled');
//       } else if (selectedAction.type === 'complete') {
//         setLoading(true);
//         await updateStatusSlot(appointment.docData._id, appointment.slotId, 'waiting for payment');
//         setLoading(false);
//         toast.success('Appointment confirmed. Awaiting payment.');
//       }
//     } catch (error) {
//       toast.error('Operation failed');
//       setLoading(false);
//     }

//     setCancelReason('');
//     setLoadingId(null);
//   };

//   // Prescription handlers
//   const handleOpenPrescriptionModal = (appointment) => {
//     console.log("Opening prescription modal for:", appointment._id);
//     setPrescriptionModal({
//       isOpen: true,  // <-- Đảm bảo đặt isOpen: true
//       appointmentId: appointment._id,
//       doctorId: appointment.docData._id,
//       patientId: appointment.userData._id,
//       form: {
//         diagnosis: "",
//         notes: "",
//         medicalHistory: "",
//         allergies: "",
//         prescriptions: [{ medicine: "", dosage: "", frequency: "" }],
//       },
//     });
//   };

//   const handlePrescriptionFormChange = React.useCallback((index, field, value) => {
//     console.log(value)
//     // setPrescriptionModal(prev => {
//     //   const newPrescriptions = [...prev.form.prescriptions];
//     //   newPrescriptions[index] = {
//     //     ...newPrescriptions[index],
//     //     [field]: value
//     //   };
//     //   return {
//     //     ...prev,
//     //     form: {
//     //       ...prev.form,
//     //       prescriptions: newPrescriptions
//     //     }
//     //   };
//     // });
//   }, []);
  
//   // const handleGeneralFieldChange = React.useCallback((field, value) => {
//   //   setPrescriptionModal(prev => ({
//   //     ...prev,
//   //     form: {
//   //       ...prev.form,
//   //       [field]: value
//   //     }
//   //   }));
//   // }, []);

//   // const addPrescriptionRow = () => {
//   //   setPrescriptionModal(prev => ({
//   //     ...prev,
//   //     form: {
//   //       ...prev.form,
//   //       prescriptions: [...prev.form.prescriptions, { medicine: "", dosage: "", frequency: "" }],
//   //     },
//   //   }));
//   // };

//   // const removePrescriptionRow = (index) => {
//   //   const newPrescriptions = prescriptionModal.form.prescriptions.filter((_, i) => i !== index);
//   //   setPrescriptionModal(prev => ({
//   //     ...prev,
//   //     form: {
//   //       ...prev.form,
//   //       prescriptions: newPrescriptions,
//   //     },
//   //   }));
//   // };

//   // const submitPrescription = async () => {
//   //   try {
//   //     setLoading(true);
//   //     await axios.post(`${backendUrl}/api/prescription`, {
//   //       ...prescriptionModal.form,
//   //       doctorId: prescriptionModal.doctorId,
//   //       patientId: prescriptionModal.patientId,
//   //       appointmentId: prescriptionModal.appointmentId,
//   //     }, { headers: { dToken } });
      
//   //     toast.success("Prescription created successfully!");
//   //     setPrescriptionModal(prev => ({ ...prev, isOpen: false }));
//   //   } catch (err) {
//   //     console.error(err);
//   //     toast.error("Failed to create prescription.");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   // Modal handlers
//   const openModal = (type, item) => {
//     setModalType(type);
//     setSelectedItem(item);
//     setModalVisible(true);
//   };

//   const handleConfirmBookedJoinOrSendRequest = () => {
//     if (!selectedItem) return;

//     if (modalType === "join") {
//       window.open(selectedItem.linkMeet, "_blank");
//     } else if (modalType === "request") {
//       handleRequestConfirmation(selectedItem._id);
//     }

//     setModalVisible(false);
//   };

//   const handleCancel = () => {
//     setModalVisible(false);
//     setSelectedItem(null);
//     setModalType("");
//   };
//  console.log(prescriptionModal)
//   // Status renderer
//   const renderStatus = (item) => {
//     const status = (item.status || '').toLowerCase();
//     switch (status) {
//       case 'cancelled':
//         return <span className='text-red-500 text-xs font-semibold'>Cancelled</span>;
//       case 'booked':
//         return <span className='text-green-600 text-xs font-semibold'>Booked</span>;
//       case 'completed':
//         return <span className='text-green-800 text-xs font-semibold'>Completed</span>;
//       case 'waiting for payment':
//         return <span className='text-orange-800 text-xs font-semibold'>Waiting for payment</span>;
//       case 'pending':
//         return <span className='text-yellow-600 text-xs font-semibold'>Pending</span>;
//       case 'available':
//         return <span className='text-lime-600 text-xs font-semibold'>Available</span>;
//       default:
//         return <span className='text-gray-400 text-xs font-semibold'>Unknown</span>;
//     }
//   };

//   if (loading) return <Loading />;

//   return (
//     <>
//       <ToastContainer />
//       {!appointments ? (
//         <Loading />
//       ) : (
//         <div className='w-full max-w-6xl m-5 relative'>
//           <p className='mb-3 text-lg font-semibold text-gray-800'>All Appointments</p>

//           {/* Filter */}
//           <div className='flex gap-2 mb-4 text-sm font-medium'>
//             {['all', 'pending', 'waiting for payment', 'cancelled', 'booked', 'completed'].map(status => (
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

//           {/* Table */}
//           <div className='bg-white border rounded shadow text-sm max-h-[70vh] overflow-y-auto'>
//             <div className='hidden sm:grid grid-cols-[40px_1fr_1fr_1fr_1fr_1fr_1fr] gap-4 py-3 px-4 border-b font-semibold text-gray-600 bg-gray-50 sticky top-0 z-10'>
//               <p className='text-center'>#</p>
//               <p className='text-center'>Patient</p>
//               <p className='text-center'>Email</p>
//               <p className='text-center'>Date</p>
//               <p className='text-center'>Time</p>
//               <p className='text-center'>Status</p>
//               {filterStatus === 'pending' && <p className='text-center'>Action</p>}
//             </div>

//             {appointments.length === 0 ? (
//               <div className="text-center py-4 text-gray-600">No data found</div>
//             ) : (
//               appointments.map((item, index) => (
//                 <div key={item._id} className='grid sm:grid-cols-[40px_1fr_1fr_1fr_1fr_1fr_1fr] grid-cols-1 gap-4 items-center py-4 px-4 border-b hover:bg-gray-50 transition-all'>
//                   <p className='hidden sm:block text-center font-medium'>{index + 1}</p>
//                   <p className='sm:block hidden text-center truncate'>{item.userData?.name || 'Unknown'}</p>
//                   <p className='sm:block hidden text-center truncate sm:max-w-[160px]' title={item.userData?.email}>{item.userData?.email}</p>
//                   <p className='sm:block hidden text-center whitespace-nowrap'>{item.slotDate}</p>
//                   <p className='sm:block hidden text-center whitespace-nowrap'>{item.slotTime}</p>
//                   <div className='sm:flex hidden justify-center items-center gap-2'>
//                     {renderStatus(item)}
//                   </div>

//                   {/* Action buttons based on status */}
//                   {filterStatus === 'pending' && item.status === "pending" && (
//                     <div className="sm:flex hidden justify-center items-center gap-2">
//                       <img
//                         onClick={() => setSelectedAction({ type: 'cancel', id: item._id })}
//                         src={assets.cancel_icon}
//                         className="w-6 h-6 cursor-pointer hover:scale-110 transition"
//                         alt="cancel"
//                       />
//                       <img
//                         onClick={() => setSelectedAction({ type: 'complete', id: item._id })}
//                         src={assets.tick_icon}
//                         className="w-6 h-6 cursor-pointer hover:scale-110 transition"
//                         alt="complete"
//                       />
//                     </div>
//                   )}

//                   {filterStatus === "booked" && item.status === "booked" && (
//                     <div className="relative inline-block text-left">
//                       <Menu as="div" className="relative inline-block text-left">
//                         <Menu.Button className="p-1 rounded hover:bg-gray-100">
//                           <HiOutlineDotsVertical className="w-5 h-5 text-gray-600" />
//                         </Menu.Button>
//                         <Transition
//                           as={Fragment}
//                           enter="transition ease-out duration-100"
//                           enterFrom="transform opacity-0 scale-95"
//                           enterTo="transform opacity-100 scale-100"
//                           leave="transition ease-in duration-75"
//                           leaveFrom="transform opacity-100 scale-100"
//                           leaveTo="transform opacity-0 scale-95"
//                         >
//                           <Menu.Items className="absolute right-0 top-0 z-50 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                             <div className="py-1">
//                               <Menu.Item>
//                                 {({ active }) => (
//                                   <button
//                                     onClick={() => openModal("join", item)}
//                                     className={`${active ? "bg-gray-100" : ""} text-gray-900 block w-full text-left px-4 py-2 text-sm`}
//                                   >
//                                     Join Room
//                                   </button>
//                                 )}
//                               </Menu.Item>
//                               <Menu.Item>
//                                 {({ active }) => (
//                                   <button
//                                     onClick={() => openModal("request", item)}
//                                     className={`${active ? "bg-gray-100" : ""} text-gray-900 block w-full text-left px-4 py-2 text-sm`}
//                                   >
//                                     Request Confirmation
//                                   </button>
//                                 )}
//                               </Menu.Item>
//                             </div>
//                           </Menu.Items>
//                         </Transition>
//                       </Menu>
//                     </div>
//                   )}

// {filterStatus === "completed" && item.status === "completed" && (
//   <div className="relative inline-block text-left">
//     <Menu as="div" className="relative inline-block text-left">
//       <Menu.Button 
//         onClick={(e) => {
//           e.preventDefault();
//           e.stopPropagation();
//         }}
//         className="p-1 rounded hover:bg-gray-100"
//       >
//         <HiOutlineDotsVertical className="w-5 h-5 text-gray-600" />
//       </Menu.Button>
      
//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="py-1">
//             <Menu.Item>
//               {({ active }) => (
//                 <button
//                   onClick={() => {
                 
//                     handleOpenPrescriptionModal(item);
//                   }}
//                   className={`${
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
//                   } block w-full px-4 py-2 text-left text-sm`}
//                 >
//                   Create a prescription
//                 </button>
//               )}
//             </Menu.Item>
//           </div>
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   </div>
// )}
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Pagination */}
//           {totalPages >= 1 && (
//             <div className="flex justify-center mt-6 gap-2 items-center text-sm font-medium text-gray-600">
//               <button
//                 onClick={() => setCurrentPage(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
//               >
//                 Previous
//               </button>
//               <button className={`px-3 py-1 border rounded bg-blue-600 text-white`}>
//                 {currentPage}
//               </button>
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

//       {/* Prescription Modal */}
//       {prescriptionModal.isOpen && (
//   <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//     <div className="bg-white rounded-lg p-6 w-full max-w-md">
//       <h2 className="text-xl font-semibold mb-4">Create a Prescription</h2>

//       <div className="space-y-4">
//         {/* Diagnosis */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Diagnosis</label>
//           <input
//             type="text"
//             placeholder="Diagnosis"
//             className="w-full p-2 border rounded"
//             //value={prescriptionModal.form.diagnosis}
//             //onChange={(e) => handleGeneralFieldChange("diagnosis", e.target.value)}
//           />
//         </div>

//         {/* Notes */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
//           <textarea
//             placeholder="Notes"
//             className="w-full p-2 border rounded"
//             //value={prescriptionModal.form.notes}
//             //onChange={(e) => handleGeneralFieldChange("notes", e.target.value)}
//           />
//         </div>

//         {/* Medical History */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Medical History</label>
//           <input
//             type="text"
//             placeholder="Medical History"
//             className="w-full p-2 border rounded"
//             //value={prescriptionModal.form.medicalHistory}
//             //onChange={(e) => handleGeneralFieldChange("medicalHistory", e.target.value)}
//           />
//         </div>

//         {/* Allergies */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Allergies</label>
//           <input
//             type="text"
//             placeholder="Allergies"
//             className="w-full p-2 border rounded"
//            // value={prescriptionModal.form.allergies}
//            // onChange={(e) => handleGeneralFieldChange("allergies", e.target.value)}
//           />
//         </div>

//         {/* Prescriptions Array */}
//         <div>
//           <h3 className="font-semibold mb-2">Prescriptions</h3>
//           {/* {prescriptionModal.form.prescriptions.map((item, index) => (
//             <div key={index} className="flex gap-2 mb-3 items-end">
//               <div className="flex-1">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Medicine</label>
//                 <input
//                   type="text"
//                   placeholder="Medicine"
//                   className="w-full p-2 border rounded"
//                   value={item.medicine}
//                   onChange={(e) =>
//                     handlePrescriptionFormChange(index, "medicine", e.target.value)
//                   }
//                 />
//               </div>
//               <div className="flex-1">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Dosage</label>
//                 <input
//                   type="text"
//                   placeholder="Dosage"
//                   className="w-full p-2 border rounded"
//                   value={item.dosage}
//                   onChange={(e) =>
//                     handlePrescriptionFormChange(index, "dosage", e.target.value)
//                   }
//                 />
//               </div>
//               <div className="flex-1">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
//                 <input
//                   type="text"
//                   placeholder="Frequency"
//                   className="w-full p-2 border rounded"
//                   value={item.frequency}
//                   onChange={(e) =>
//                     handlePrescriptionFormChange(index, "frequency", e.target.value)
//                   }
//                 />
//               </div>
//               <button
//                 onClick={() => removePrescriptionRow(index)}
//                 className="text-red-500 p-2"
//                 title="Remove"
//               >
//                 ✕
//               </button>
//             </div>
//           ))} */}
//           <button
//             //onClick={addPrescriptionRow}
//             className="text-blue-600 underline text-sm"
//           >
//             + Add Medicine
//           </button>
//         </div>
//       </div>

//       {/* Modal Footer */}
//       <div className="mt-6 flex justify-end gap-3">
//         <button
//           // onClick={() =>
//           //   //setPrescriptionModal((prev) => ({ ...prev, isOpen: false }))
//           // }
//           className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
//         >
//           Cancel
//         </button>
//         <button
//           //onClick={submitPrescription}
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           disabled={loading}
//         >
//           {loading ? "Submitting..." : "Submit Prescription"}
//         </button>
//       </div>
//     </div>
//   </div>
// )}

//       {/* Confirmation Modal */}
//       <AnimatePresence>
//         {selectedAction && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-700 bg-opacity-50 z-50"
//           >
//             <motion.div
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.9 }}
//               className="bg-white p-6 rounded-md shadow-lg w-96"
//             >
//               <h2 className="text-lg font-semibold text-center mb-4">Confirm this appointment</h2>
//               {selectedAction.type === 'cancel' && (
//                 <textarea
//                   value={cancelReason}
//                   onChange={(e) => setCancelReason(e.target.value)}
//                   placeholder="Enter cancellation reason"
//                   className="w-full p-2 border rounded mb-4"
//                   required={true}
//                 />
//               )}
//               <div className="flex justify-end gap-3">
//                 <button
//                   onClick={() => setSelectedAction(null)}
//                   className="px-4 py-1 border rounded text-gray-600 hover:bg-gray-100"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleConfirm}
//                   className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 >
//                   Confirm
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Join/Request Modal */}
//       {modalVisible && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
//           <div className="bg-white rounded-lg shadow-xl w-80 p-6">
//             <h3 className="text-lg font-semibold mb-4">
//               {modalType === "join" ? "Join room?" : "Send confirmation request to user?"}
//             </h3>
//             <div className="flex justify-end space-x-2">
//               <button
//                 onClick={handleCancel}
//                 className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleConfirmBookedJoinOrSendRequest}
//                 className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default DoctorAppointments;



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

  // Helper functions
  const updateStatusSlot = async (doctorId, slotId, newStatus) => {
    const payload = { doctorId, slotId, newStatus };
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
      toast.success(res.data.message || 'Request sent successfully!');
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

                {filterStatus === "completed" && item.status === "completed" && (
                  <div className="relative inline-block text-left">
                    <Menu as="div" className="relative inline-block text-left">
                      <Menu.Button className="p-1 rounded hover:bg-gray-100">
                        <HiOutlineDotsVertical className="w-5 h-5 text-gray-600" />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => handleOpenPrescriptionModal(item)}
                                  className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block w-full px-4 py-2 text-left text-sm`}
                                >
                                  Create a prescription
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
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
              {modalType === "join" ? "Join room?" : "Send confirmation request to user?"}
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
