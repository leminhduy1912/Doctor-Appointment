// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';
// import { assets } from '../assets/assets';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import Loading from '../components/Loader';
// import { motion, AnimatePresence } from 'framer-motion';

// const Appointment = () => {
//   const { docId } = useParams();
//   const { doctors, currencySymbol, backendUrl, token, getDoctosData } = useContext(AppContext);
//   const [docInfo, setDocInfo] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [filteredSlots, setFilteredSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (doctors.length > 0) {
//       const doc = doctors.find((d) => d._id === docId);
//       setDocInfo(doc);
//     }
//   }, [doctors, docId]);

//   useEffect(() => {
//     if (docInfo && selectedDate) {
//       const slots = docInfo.schedule.filter((slot) => slot.date === selectedDate);
//       setFilteredSlots(slots);
//       setSelectedSlot(null);
//     }
//   }, [docInfo, selectedDate]);

//   const handleBooking = () => {
//     if (!token) {
//       toast.warning('Please login to book an appointment');
//       return navigate('/login');
//     }

//     if (!selectedSlot) {
//       toast.warning('Please select a time slot');
//       return;
//     }

//     setShowConfirmation(true);
//   };

//   const handleConfirmBooking = async () => {
//     setShowConfirmation(false);
//     setIsLoading(true);
//     try {
//       const { data } = await axios.post(
//         `${backendUrl}/api/user/book-appointment`,
//         {
//           doctorId: docId,
//           slotId: selectedSlot._id
//         },
//         {
//           headers: { token },
//         }
//       );

//       if (data.success) {
//         toast.success(data.message);
//         getDoctosData();
//         navigate('/my-appointments');
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const getUniqueDates = () => {
//     const dates = docInfo?.schedule.map((slot) => slot.date);
//     return [...new Set(dates)];
//   };

//   const formatDateLabel = (date) => {
//     const [day, month, year] = date.split('-');
//     const dateObj = new Date(`${year}-${month}-${day}`);
//     if (isNaN(dateObj)) return date;
//     return dateObj.toLocaleDateString('en-US', {
//       weekday: 'short',
//       day: 'numeric',
//       month: 'short',
//     });
//   };

//   return (
//     <>
//       {isLoading && <Loading />}
//       <AnimatePresence>
//         {showConfirmation && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full"
//             >
//               <h3 className="text-lg font-semibold mb-4 text-gray-800">Confirm Booking</h3>
//               <p className="text-sm text-gray-600 mb-6">
//                 Are you sure you want to book this appointment?
//               </p>
//               <div className="flex justify-end gap-4">
//                 <button
//                   onClick={() => setShowConfirmation(false)}
//                   className="px-4 py-2 rounded-full text-sm border border-gray-400 text-gray-600 hover:bg-gray-100"
//                 >
//                   No
//                 </button>
//                 <button
//                   onClick={handleConfirmBooking}
//                   className="px-4 py-2 rounded-full text-sm bg-primary text-white hover:bg-opacity-90"
//                 >
//                   Yes, Book It
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {docInfo ? (
//         <div className="p-4">
//           <div className="flex flex-col sm:flex-row gap-4">
//             <img className="w-full sm:max-w-72 rounded-lg" src={docInfo.image} alt="Doctor" />
//             <div className="flex-1 border rounded-lg p-8 bg-white">
//               <h2 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
//                 {docInfo.name}
//                 <img className="w-5" src={assets.verified_icon} alt="Verified" />
//               </h2>
//               <p className="mt-2 text-gray-600">{docInfo.degree} - {docInfo.speciality}</p>
//               <p className="mt-2 text-sm text-gray-600">{docInfo.about}</p>
//               {/* <p className="mt-2 text-gray-700 font-medium">
//                 Appointment fee: {currencySymbol}{docInfo.fees}
//               </p> */}
//             </div>
//           </div>

//           <div className="mt-8">
//             <h3 className="text-lg font-medium text-gray-700 mb-2">Select a date</h3>
//             <div className="flex gap-3 overflow-x-auto">
//               {getUniqueDates().map((date, idx) => (
//                 <div
//                   key={idx}
//                   onClick={() => setSelectedDate(date)}
//                   className={`px-4 py-3 text-center rounded-full cursor-pointer min-w-24 ${
//                     selectedDate === date ? 'bg-primary text-white' : 'border border-gray-300 text-gray-700'
//                   }`}
//                 >
//                   <p>{formatDateLabel(date)}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {filteredSlots.length > 0 && (
//             <div className="mt-6">
//               <h3 className="text-lg font-medium text-gray-700 mb-2">Select a time slot</h3>
//               <div className="flex flex-wrap gap-4">
//               {filteredSlots.map((slot, idx) => (
//   <div
//     key={idx}
//     onClick={() => setSelectedSlot(slot)}
//     className={`flex flex-col items-center justify-center px-5 py-3 rounded-xl text-sm cursor-pointer transition-all duration-200 shadow-sm min-w-[120px]
//       ${selectedSlot?._id === slot._id
//         ? 'bg-primary text-white scale-105'
//         : 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50'}`}
//   >
//     <p className="font-medium">{slot.startTime} - {slot.endTime}</p>
//     <p className="text-xs mt-1">
//       {currencySymbol}{slot.fees}
//     </p>
//   </div>
// ))}

//               </div>
//             </div>
//           )}

//           <div className="mt-8">
//             <button
//               onClick={handleBooking}
//               className="bg-primary text-white px-8 py-3 rounded-full text-sm hover:bg-opacity-90"
//             >
//               Book Appointment
//             </button>
//           </div>
//         </div>
//       ) : null}
//     </>
//   );
// };

// export default Appointment;
// import { useEffect, useState, Fragment, useContext } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Button, Dialog, Transition } from '@headlessui/react';
// import { AppContext } from '../context/AppContext';

// export default function Appointment() {
//   //const {backendUrl,currencySymbol} = useContext(AppContext)
//   const { docId } = useParams();
//   const navigate = useNavigate();
//   //const token = localStorage.getItem('token');

//   const [docInfo, setDocInfo] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [filteredSlots, setFilteredSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//    const { doctors, currencySymbol, backendUrl, token, getDoctosData } = useContext(AppContext);


//   useEffect(() => {
//     if (doctors.length > 0) {
//       const doc = doctors.find((d) => d._id === docId);
//       setDocInfo(doc);
//     }
//   }, [doctors, docId]);


//   // Filter slots by selected date
//   useEffect(() => {
//     if (docInfo && selectedDate) {
//       const available = docInfo.schedule.filter(
//         (s) => s.date === selectedDate && s.status === 'available'
//       );
//       setFilteredSlots(available);
//       setSelectedSlot(null);
//     }
//   }, [docInfo, selectedDate]);

//   const uniqueDates = () => {
//     return [...new Set(
//       docInfo?.schedule
//         .filter((s) => s.status === 'available')
//         .map((s) => s.date)
//     )];
//   };

//   const handleBooking = async () => {
//     setShowModal(false);
//     setIsLoading(true);
//     try {
//       const { data } = await axios.post(`${backendUrl}/api/user/book-appointment`, {
//         doctorId: docId,
//         slotId: selectedSlot._id
//       }, {
//         headers: { token }
//       });

//       if (data.success) {
//         toast.success(data.message);
//         fetchDoctorInfo();
//         navigate('/my-appointments');
//       } else {
//         toast.error(data.message);
//       }
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Booking failed');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-5xl mx-auto px-6 py-10">
//       <h1 className="text-3xl font-semibold mb-8 text-gray-800">Book Appointment</h1>

//       {/* Date selection */}
//       <div className="mb-6">
//         <h2 className="text-lg font-medium text-gray-700 mb-2">Select a Date</h2>
//         <div className="flex flex-wrap gap-3">
//           {uniqueDates().map((date) => (
//             <div
//               key={date}
//               onClick={() => setSelectedDate(date)}
//               className={`px-4 py-2 rounded-lg cursor-pointer text-sm border transition-all
//                 ${selectedDate === date
//                   ? 'bg-blue-600 text-white shadow-lg'
//                   : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'}`}
//             >
//               {date}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Slot selection */}
//       {selectedDate && (
//         <div className="mb-8">
//           <h2 className="text-lg font-medium text-gray-700 mb-2">Select a Time Slot</h2>
//           {filteredSlots.length ? (
//             <div className="flex flex-wrap gap-4">
//               {filteredSlots.map((slot) => (
//                 <div
//                   key={slot._id}
//                   onClick={() => setSelectedSlot(slot)}
//                   className={`min-w-[130px] p-3 rounded-lg text-center border cursor-pointer transition-all
//                     ${selectedSlot?._id === slot._id
//                       ? 'bg-green-600 text-white scale-105 shadow-lg'
//                       : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'}`}
//                 >
//                   <p className="font-semibold">{slot.startTime} - {slot.endTime}</p>
//                   <p className="text-sm mt-1">{currencySymbol}{slot.fees}</p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-red-500 text-sm">No available slots for {selectedDate}</p>
//           )}
//         </div>
//       )}

//       {/* Confirm button */}
//       {selectedSlot && (
//         <div>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
//            onClick={() => setShowModal(true)} disabled={isLoading}>
//             Confirm Appointment
//           </button>

//         </div>
//       )}

//       {/* Modal confirm */}
//       <Transition appear show={showModal} as={Fragment}>
//         <Dialog as="div" className="relative z-30" onClose={() => setShowModal(false)}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-200"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black/30" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto flex items-center justify-center p-4">
//             <Dialog.Panel className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
//               <Dialog.Title className="text-lg font-semibold mb-4">Confirm Appointment</Dialog.Title>
//               <div className="space-y-2 text-gray-700">
//                 <p><strong>Doctor:</strong> {docInfo?.fullName}</p>
//                 <p><strong>Date:</strong> {selectedSlot?.date}</p>
//                 <p><strong>Time:</strong> {selectedSlot?.startTime} - {selectedSlot?.endTime}</p>
//                 <p><strong>Fee:</strong> {currencySymbol}{selectedSlot?.fees}</p>
//               </div>

//               <div className="mt-6 flex justify-end gap-3">
//                 <button variant="outline" onClick={() => setShowModal(false)}>Cancel</button>
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
//                  onClick={handleBooking} disabled={isLoading}>
//                   {isLoading ? 'Booking...' : 'Confirm'}
//                 </button>
//               </div>
//             </Dialog.Panel>
//           </div>
//         </Dialog>
//       </Transition>
//     </div>
//   );
// }
// import { useEffect, useState, Fragment, useContext } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Button, Dialog, Transition } from '@headlessui/react';
// import { AppContext } from '../context/AppContext';

// export default function Appointment() {
//   const { docId } = useParams();
//   const navigate = useNavigate();
//   const { doctors, currencySymbol, backendUrl, token } = useContext(AppContext);

//   const [docInfo, setDocInfo] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [filteredSlots, setFilteredSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (doctors.length > 0) {
//       const doc = doctors.find((d) => d._id === docId);
//       setDocInfo(doc);
//     }
//   }, [doctors, docId]);

//   useEffect(() => {
//     if (docInfo && selectedDate) {
//       const available = docInfo.schedule.filter(
//         (s) => s.date === selectedDate && s.status === 'available'
//       );
//       setFilteredSlots(available);
//       setSelectedSlot(null);
//     }
//   }, [docInfo, selectedDate]);

 
//   const isFutureOrToday = (dateStr) => {
//     const today = new Date();
//     const yyyy = today.getFullYear();
//     const mm = String(today.getMonth() + 1).padStart(2, '0');
//     const dd = String(today.getDate()).padStart(2, '0');
//     const todayStr = `${yyyy}-${mm}-${dd}`;
//     return dateStr >= todayStr;
//   };
  
//   const uniqueDates = () => {
//     return [...new Set(
//       docInfo?.schedule
//         .filter((s) => s.status === 'available' && isFutureOrToday(s.date))
//         .map((s) => s.date)
//     )];
//   };

//   const handleBooking = async () => {
//     setShowModal(false);
//     setIsLoading(true);
//     try {
//       const { data } = await axios.post(`${backendUrl}/api/user/book-appointment`, {
//         doctorId: docId,
//         slotId: selectedSlot._id
//       }, {
//         headers: { token }
//       });

//       if (data.success) {
//         toast.success(data.message);
//         navigate('/my-appointments');
//       } else {
//         toast.error(data.message);
//       }
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Booking failed');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-5xl mx-auto px-6 py-10">
//       <h1 className="text-3xl font-semibold mb-8 text-gray-800">Book Appointment</h1>

//       {/* Doctor Info */}
//       {docInfo && (
//         <div className="flex items-center gap-6 mb-8 p-4 border rounded-lg bg-gray-50 shadow-sm">
//           <img
//             src={docInfo.avatar || '/default-doctor.jpg'}
//             alt={docInfo.fullName}
//             className="w-24 h-24 object-cover rounded-full border"
//           />
//           <div>
//             <h2 className="text-xl font-bold text-gray-800">{docInfo.fullName}</h2>
//             <p className="text-sm text-gray-600">{docInfo.specialization}</p>
//             <p className="text-sm text-gray-600">Experience: {docInfo.experience} years</p>
//             <p className="text-sm text-gray-600">Email: {docInfo.email}</p>
//           </div>
//         </div>
//       )}

//       {/* Date selection */}
//       <div className="mb-6">
//         <h2 className="text-lg font-medium text-gray-700 mb-2">Select a Date</h2>
//         <div className="flex flex-wrap gap-3">
//           {uniqueDates().length > 0 ? (
//             uniqueDates().map((date) => (
//               <div
//                 key={date}
//                 onClick={() => setSelectedDate(date)}
//                 className={`px-4 py-2 rounded-lg cursor-pointer text-sm border transition-all
//                   ${selectedDate === date
//                     ? 'bg-blue-600 text-white shadow-lg'
//                     : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'}`}
//               >
//                 {date}
//               </div>
//             ))
//           ) : (
//             <p className="text-sm text-red-500">No available future dates</p>
//           )}
//         </div>
//       </div>

//       {/* Slot selection */}
//       {selectedDate && (
//         <div className="mb-8">
//           <h2 className="text-lg font-medium text-gray-700 mb-2">Select a Time Slot</h2>
//           {filteredSlots.length ? (
//             <div className="flex flex-wrap gap-4">
//               {filteredSlots.map((slot) => (
//                 <div
//                   key={slot._id}
//                   onClick={() => setSelectedSlot(slot)}
//                   className={`min-w-[130px] p-3 rounded-lg text-center border cursor-pointer transition-all
//                     ${selectedSlot?._id === slot._id
//                       ? 'bg-green-600 text-white scale-105 shadow-lg'
//                       : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'}`}
//                 >
//                   <p className="font-semibold">{slot.startTime} - {slot.endTime}</p>
//                   <p className="text-sm mt-1">{currencySymbol}{slot.fees}</p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-red-500 text-sm">No available slots for {selectedDate}</p>
//           )}
//         </div>
//       )}

//       {/* Confirm button */}
//       {selectedSlot && (
//         <div>
//           <button
//             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
//             onClick={() => setShowModal(true)}
//             disabled={isLoading}
//           >
//             Confirm Appointment
//           </button>
//         </div>
//       )}

//       {/* Modal confirm */}
//       <Transition appear show={showModal} as={Fragment}>
//         <Dialog as="div" className="relative z-30" onClose={() => setShowModal(false)}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-200"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black/30" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto flex items-center justify-center p-4">
//             <Dialog.Panel className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
//               <Dialog.Title className="text-lg font-semibold mb-4">Confirm Appointment</Dialog.Title>
//               <div className="space-y-2 text-gray-700">
//                 <p><strong>Doctor:</strong> {docInfo?.fullName}</p>
//                 <p><strong>Date:</strong> {selectedSlot?.date}</p>
//                 <p><strong>Time:</strong> {selectedSlot?.startTime} - {selectedSlot?.endTime}</p>
//                 <p><strong>Fee:</strong> {currencySymbol}{selectedSlot?.fees}</p>
//               </div>

//               <div className="mt-6 flex justify-end gap-3">
//                 <button
//                   className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
//                   onClick={() => setShowModal(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
//                   onClick={handleBooking}
//                   disabled={isLoading}
//                 >
//                   {isLoading ? 'Booking...' : 'Confirm'}
//                 </button>
//               </div>
//             </Dialog.Panel>
//           </div>
//         </Dialog>
//       </Transition>
//     </div>
//   );
// }







// import { useEffect, useState, Fragment, useContext } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Button, Dialog, Transition } from '@headlessui/react';
// import { AppContext } from '../context/AppContext';

// export default function Appointment() {
//   const { docId } = useParams();
//   const navigate = useNavigate();
//   const { doctors, currencySymbol, backendUrl, token } = useContext(AppContext);

//   const [docInfo, setDocInfo] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [filteredSlots, setFilteredSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (doctors.length > 0) {
//       const doc = doctors.find((d) => d._id === docId);
//       setDocInfo(doc);
//     }
//   }, [doctors, docId]);

//   // useEffect(() => {
//   //   if (docInfo && selectedDate) {
//   //     const available = docInfo.schedule.filter(
//   //       (s) => s.date === selectedDate && s.status === 'available'
//   //     );
//   //     setFilteredSlots(available);
//   //     setSelectedSlot(null);
//   //   }
//   // }, [docInfo, selectedDate]);

//   useEffect(() => {
//     if (docInfo?.schedule) {
//       const available = docInfo.schedule.filter(
//         (slot) => slot.status === 'available'
//       );
//       const sorted = available.sort((a, b) => {
//         const [dayA, monthA, yearA] = a.date.split("-").map(Number);
//         const [dayB, monthB, yearB] = b.date.split("-").map(Number);
//         return new Date(yearA, monthA - 1, dayA) - new Date(yearB, monthB - 1, dayB);
//       });
//       setFilteredSlots(sorted); // hoặc state tương ứng mà bạn dùng để render các ngày
//     }
//   }, [docInfo]);
  

  
//   const convertToISO = (dateStr) => {
//     // "dd-mm-yyyy" -> "yyyy-mm-dd"
//     const [dd, mm, yyyy] = dateStr.split('-');
//     return `${yyyy}-${mm}-${dd}`;
//   };

//   const isFutureOrToday = (dateStr) => {
//     const today = new Date();
//     const isoToday = today.toISOString().split('T')[0];
//     const converted = convertToISO(dateStr);
//     return converted >= isoToday;
//   };

//   const uniqueDates = () => {
//     return [...new Set(
//       docInfo?.schedule
//         .filter((s) => s.status === 'available' && isFutureOrToday(s.date))
//         .map((s) => s.date)
//     )];
//   };

//   const handleBooking = async () => {
//     setShowModal(false);
//     setIsLoading(true);
//     try {
//       const { data } = await axios.post(
//         `${backendUrl}/api/user/book-appointment`,
//         {
//           doctorId: docId,
//           slotId: selectedSlot._id
//         },
//         { headers: { token } }
//       );

//       if (data.success) {
//         toast.success(data.message);
//         navigate('/my-appointments');
//       } else {
//         toast.error(data.message);
//       }
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Booking failed');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-5xl mx-auto px-6 py-10">
//       <h1 className="text-3xl font-semibold mb-8 text-gray-800">Book Appointment</h1>

//       {docInfo && (
//         <div className="flex items-center gap-6 mb-8 p-4 border rounded-lg bg-gray-50 shadow-sm">
//           <img
//             src={docInfo.avatar || '/default-doctor.jpg'}
//             alt={docInfo.name}
//             className="w-24 h-24 object-cover rounded-full border"
//           />
//           <div>
//             <h2 className="text-xl font-bold text-gray-800">{docInfo.name}</h2>
//             <p className="text-sm text-gray-600">{docInfo.speciality}</p>
//             <p className="text-sm text-gray-600">Experience: {docInfo.experience} years</p>
//             <p className="text-sm text-gray-600">Email: {docInfo.email}</p>
//           </div>
//         </div>
//       )}

//       <div className="mb-6">
//         <h2 className="text-lg font-medium text-gray-700 mb-2">Select a Date</h2>
//         <div className="flex flex-wrap gap-3">
//           {uniqueDates().length > 0 ? (
//             uniqueDates().map((date) => (
//               <div
//                 key={date}
//                 onClick={() => setSelectedDate(date)}
//                 className={`px-4 py-2 rounded-lg cursor-pointer text-sm border transition-all
//                   ${selectedDate === date
//                     ? 'bg-blue-600 text-white shadow-lg'
//                     : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'}`}
//               >
//                 {date}
//               </div>
//             ))
//           ) : (
//             <p className="text-sm text-red-500">No available future dates</p>
//           )}
//         </div>
//       </div>

//       {selectedDate && (
//         <div className="mb-8">
//           <h2 className="text-lg font-medium text-gray-700 mb-2">Select a Time Slot</h2>
//           {filteredSlots.length ? (
//             <div className="flex flex-wrap gap-4">
//               {filteredSlots.map((slot) => (
//                 <div
//                   key={slot._id}
//                   onClick={() => setSelectedSlot(slot)}
//                   className={`min-w-[130px] p-3 rounded-lg text-center border cursor-pointer transition-all
//                     ${selectedSlot?._id === slot._id
//                       ? 'bg-green-600 text-white scale-105 shadow-lg'
//                       : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'}`}
//                 >
//                   <p className="font-semibold">{slot.startTime} - {slot.endTime}</p>
//                   <p className="text-sm mt-1">{currencySymbol}{slot.fees}</p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-red-500 text-sm">No available slots for {selectedDate}</p>
//           )}
//         </div>
//       )}

//       {selectedSlot && (
//         <div>
//           <button
//             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
//             onClick={() => setShowModal(true)}
//             disabled={isLoading}
//           >
//             Confirm Appointment
//           </button>
//         </div>
//       )}

//       <Transition appear show={showModal} as={Fragment}>
//         <Dialog as="div" className="relative z-30" onClose={() => setShowModal(false)}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-200"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black/30" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto flex items-center justify-center p-4">
//             <Dialog.Panel className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
//               <Dialog.Title className="text-lg font-semibold mb-4">Confirm Appointment</Dialog.Title>
//               <div className="space-y-2 text-gray-700">
//                 <p><strong>Doctor:</strong> {docInfo?.name}</p>
//                 <p><strong>Date:</strong> {selectedSlot?.date}</p>
//                 <p><strong>Time:</strong> {selectedSlot?.startTime} - {selectedSlot?.endTime}</p>
//                 <p><strong>Fee:</strong> {currencySymbol}{selectedSlot?.fees}</p>
//               </div>

//               <div className="mt-6 flex justify-end gap-3">
//                 <button
//                   className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
//                   onClick={() => setShowModal(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
//                   onClick={handleBooking}
//                   disabled={isLoading}
//                 >
//                   {isLoading ? 'Booking...' : 'Confirm'}
//                 </button>
//               </div>
//             </Dialog.Panel>
//           </div>
//         </Dialog>
//       </Transition>
//     </div>
//   );
// }
// import { useEffect, useState, Fragment, useContext } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Button, Dialog, Transition } from '@headlessui/react';
// import { AppContext } from '../context/AppContext';

// export default function Appointment() {
//   const { docId } = useParams();
//   const navigate = useNavigate();
//   const { doctors, currencySymbol, backendUrl, token } = useContext(AppContext);

//   const [docInfo, setDocInfo] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [filteredSlots, setFilteredSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (doctors.length > 0) {
//       const doc = doctors.find((d) => d._id === docId);
//       setDocInfo(doc);
//     }
//   }, [doctors, docId]);

//   useEffect(() => {
//     if (docInfo?.schedule && selectedDate) {
//       const slots = docInfo.schedule.filter(
//         (s) => s.status === 'available' && s.date === selectedDate
//       );
//       const sorted = slots.sort((a, b) => {
//         return a.startTime.localeCompare(b.startTime);
//       });
//       setFilteredSlots(sorted);
//       setSelectedSlot(null);
//     }
//   }, [docInfo, selectedDate]);

//   const convertToISO = (dateStr) => {
//     const [dd, mm, yyyy] = dateStr.split('-');
//     return `${yyyy}-${mm}-${dd}`;
//   };

//   const isFutureOrToday = (dateStr) => {
//     const today = new Date();
//     const isoToday = today.toISOString().split('T')[0];
//     const converted = convertToISO(dateStr);
//     return converted >= isoToday;
//   };

//   const uniqueDates = () => {
//     return [...new Set(
//       docInfo?.schedule
//         .filter((s) => s.status === 'available' && isFutureOrToday(s.date))
//         .map((s) => s.date)
//     )];
//   };

//   const handleBooking = async () => {
//     setShowModal(false);
//     setIsLoading(true);
//     try {
//       const { data } = await axios.post(
//         `${backendUrl}/api/user/book-appointment`,
//         {
//           doctorId: docId,
//           slotId: selectedSlot._id
//         },
//         { headers: { token } }
//       );

//       if (data.success) {
//         toast.success(data.message);
//         navigate('/my-appointments');
//       } else {
//         toast.error(data.message);
//       }
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Booking failed');
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   return (
//     <div className="max-w-5xl mx-auto px-6 py-10">
//       <h1 className="text-3xl font-semibold mb-8 text-gray-800">Book Appointment</h1>

//       {docInfo && (
//         <div className="flex items-center gap-6 mb-8 p-4 border rounded-lg bg-gray-50 shadow-sm">
//           <img
//             src={docInfo.avatar || '/default-doctor.jpg'}
//             alt={docInfo.name}
//             className="w-24 h-24 object-cover rounded-full border"
//           />
//           <div>
//             <h2 className="text-xl font-bold text-gray-800">{docInfo.name}</h2>
//             <p className="text-sm text-gray-600">{docInfo.speciality}</p>
//             <p className="text-sm text-gray-600">Experience: {docInfo.experience} years</p>
//             <p className="text-sm text-gray-600">Email: {docInfo.email}</p>
//           </div>
//         </div>
//       )}

//       <div className="mb-6">
//         <h2 className="text-lg font-medium text-gray-700 mb-2">Select a Date</h2>
//         <div className="flex flex-wrap gap-3">
//           {uniqueDates().length > 0 ? (
//             uniqueDates().map((date) => (
//               <div
//                 key={date}
//                 onClick={() => setSelectedDate(date)}
//                 className={`px-4 py-2 rounded-lg cursor-pointer text-sm border transition-all
//                   ${selectedDate === date
//                     ? 'bg-blue-600 text-white shadow-lg'
//                     : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'}`}
//               >
//                 {date}
//               </div>
//             ))
//           ) : (
//             <p className="text-sm text-red-500">No available future dates</p>
//           )}
//         </div>
//       </div>

//       {selectedDate && (
//         <div className="mb-8">
//           <h2 className="text-lg font-medium text-gray-700 mb-2">Select a Time Slot</h2>
//           {filteredSlots.length ? (
//             <div className="flex flex-wrap gap-4">
//               {filteredSlots.map((slot) => (
//                 <div
//                   key={slot._id}
//                   onClick={() => setSelectedSlot(slot)}
//                   className={`min-w-[130px] p-3 rounded-lg text-center border cursor-pointer transition-all
//                     ${selectedSlot?._id === slot._id
//                       ? 'bg-green-600 text-white scale-105 shadow-lg'
//                       : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'}`}
//                 >
//                   <p className="font-semibold">{slot.startTime} - {slot.endTime}</p>
//                   <p className="text-sm mt-1">{currencySymbol}{slot.fees}</p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-red-500 text-sm">No available slots for {selectedDate}</p>
//           )}
//         </div>
//       )}

//       {selectedSlot && (
//         <div>
//           <button
//             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
//             onClick={() => setShowModal(true)}
//             disabled={isLoading}
//           >
//             Confirm Appointment
//           </button>
//         </div>
//       )}

//       <Transition appear show={showModal} as={Fragment}>
//         <Dialog as="div" className="relative z-30" onClose={() => setShowModal(false)}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-200"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black/30" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto flex items-center justify-center p-4">
//             <Dialog.Panel className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
//               <Dialog.Title className="text-lg font-semibold mb-4">Confirm Appointment</Dialog.Title>
//               <div className="space-y-2 text-gray-700">
//                 <p><strong>Doctor:</strong> {docInfo?.name}</p>
//                 <p><strong>Date:</strong> {selectedSlot?.date}</p>
//                 <p><strong>Time:</strong> {selectedSlot?.startTime} - {selectedSlot?.endTime}</p>
//                 <p><strong>Fee:</strong> {currencySymbol}{selectedSlot?.fees}</p>
//               </div>

//               <div className="mt-6 flex justify-end gap-3">
//                 <button
//                   className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
//                   onClick={() => setShowModal(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow disabled:opacity-60"
//                   onClick={handleBooking}
//                   disabled={isLoading}
//                 >
//                   {isLoading ? 'Booking...' : 'Confirm'}
//                 </button>
//               </div>
//             </Dialog.Panel>
//           </div>
//         </Dialog>
//       </Transition>
//     </div>
//   );
// }
import { useEffect, useState, Fragment, useContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { AppContext } from '../context/AppContext';

export default function Appointment() {
  const { docId } = useParams();
  const navigate = useNavigate();
  const { doctors, token, backendUrl } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableDates, setAvailableDates] = useState([]);
  const [filteredSlots, setFilteredSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Lấy thông tin bác sĩ
  // useEffect(() => {
  //   const doctor = doctors.find((d) => d._id === docId);
  //   setDocInfo(doctor);

  //   if (doctor?.schedule?.length > 0) {
  //     const today = new Date();
  //     const upcoming = doctor.schedule
  //       .filter(
  //         (s) =>
  //           s.status === 'available' &&
  //           new Date(convertDate(s.date)) >= today
  //       )
  //       .map((s) => s.date);

  //     setAvailableDates([...new Set(upcoming)]);
  //   }
  // }, [doctors, docId]);

  useEffect(() => {
    const doctor = doctors.find((d) => d._id === docId);
    setDocInfo(doctor);
  
    if (doctor?.schedule?.length > 0) {
      const today = new Date();
      const upcoming = doctor.schedule
        .filter(
          (s) =>
            s.status === 'available' &&
            new Date(convertDate(s.date)) >= today
        )
        .map((s) => s.date);
  
      // Sort the available dates in ascending order
      const sortedDates = [...new Set(upcoming)].sort((a, b) => {
        const dateA = new Date(convertDate(a));
        const dateB = new Date(convertDate(b));
        return dateA - dateB;
      });
  
      setAvailableDates(sortedDates);
    }
  }, [doctors, docId]);
  


  // Lọc các slot theo ngày đã chọn
  useEffect(() => {
    if (selectedDate && docInfo) {
      const slots = docInfo.schedule.filter(
        (s) => s.date === selectedDate && s.status === 'available'
      );
      setFilteredSlots(slots);
    }
  }, [selectedDate, docInfo]);

  const convertDate = (ddmmyyyy) => {
    const [dd, mm, yyyy] = ddmmyyyy.split('-');
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleConfirm = async () => {
    if (!selectedSlot) return;

    setIsLoading(true);
    try {
      const res = await axios.post(
        `${backendUrl}/api/user/book-appointment`,
        {
          doctorId: docId,
          slotId: selectedSlot._id,
        },
        {
          headers: { token },
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate('/my-appointments');
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Error booking appointment');
    } finally {
      setIsLoading(false);
      setShowModal(false);
    }
  };
console.log(availableDates)
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Book Appointment</h1>

      {docInfo && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold">{docInfo.name}</h2>
          <p className="text-gray-600">{docInfo.speciality}</p>
        </div>
      )}

      {/* Chọn ngày */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Select Date:</h3>
        <div className="flex flex-wrap gap-3">
          {availableDates.length > 0 ? (
            availableDates.map((date) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`px-3 py-2 rounded-md border text-sm ${
                  selectedDate === date
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border-gray-300'
                }`}
              >
                {date}
              </button>
            ))
          ) : (
            <p className="text-sm text-red-500">No available dates</p>
          )}
        </div>
      </div>

      {/* Chọn slot */}
      {selectedDate && (
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Select Time Slot:</h3>
          <div className="flex flex-wrap gap-4">
            {filteredSlots.length > 0 ? (
              filteredSlots.map((slot) => (
                <button
                  key={slot._id}
                  onClick={() => setSelectedSlot(slot)}
                  className={`min-w-[140px] px-4 py-2 rounded-md border text-center ${
                    selectedSlot?._id === slot._id
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-800 border-gray-300'
                  }`}
                >
                  {slot.startTime} - {slot.endTime}
                </button>
              ))
            ) : (
              <p className="text-sm text-gray-500">No slots available on {selectedDate}</p>
            )}
          </div>
        </div>
      )}

      {/* Nút xác nhận */}
      {selectedSlot && (
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Confirm Booking
        </button>
      )}

      {/* Modal xác nhận */}
      <Transition appear show={showModal} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={() => setShowModal(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white max-w-md w-full rounded-lg p-6 shadow-lg">
              <Dialog.Title className="text-lg font-bold mb-4">Confirm Appointment</Dialog.Title>
              <div className="space-y-2 text-gray-700">
                <p><strong>Doctor:</strong> {docInfo?.name}</p>
                <p><strong>Date:</strong> {selectedSlot?.date}</p>
                <p><strong>Time:</strong> {selectedSlot?.startTime} - {selectedSlot?.endTime}</p>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded-md text-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? 'Booking...' : 'Confirm'}
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
