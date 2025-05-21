
// import { useEffect, useState, Fragment, useContext } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Dialog, Transition } from '@headlessui/react';
// import { AppContext } from '../context/AppContext';
// import Loading from '../components/Loader';
// import { formatVND } from '../utils/formatVND';

// export default function Appointment() {
//   const { docId } = useParams();
//   const navigate = useNavigate();
//   const { doctors, token, backendUrl } = useContext(AppContext);

//   const [docInfo, setDocInfo] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [availableDates, setAvailableDates] = useState([]);
//   const [filteredSlots, setFilteredSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);


// const fetchDataDoc = async()=>{
//     const payload =  { docId:docId };
//     console.log("docId",docId);
    
//     const { data } = await axios.post(
//             `${backendUrl}/api/user/doctor`,
//             payload,
//           );
//     setDocInfo(data.profileData)
//     console.log("fees",data);
//      if (docInfo?.schedule?.length > 0) {
//       const today = new Date();
//       const upcoming = docInfo.schedule
//         .filter(
//           (s) =>
//             s.status === 'available' &&
//             new Date(convertDate(s.date)) >= today
//         )
//         .map((s) => s.date);
  
//       // Sort the available dates in ascending order
//       const sortedDates = [...new Set(upcoming)].sort((a, b) => {
//         const dateA = new Date(convertDate(a));
//         const dateB = new Date(convertDate(b));
//         return dateA - dateB;
//       });
  
//       setAvailableDates(sortedDates);
//     }
// }
//   useEffect(() => {
   
//   fetchDataDoc()
   
//   }, [doctors, docId]);
  


//   // Lọc các slot theo ngày đã chọn
//   useEffect(() => {
//     if (selectedDate && docInfo) {
//       const slots = docInfo.schedule.filter(
//         (s) => s.date === selectedDate && s.status === 'available'
//       );
//       setFilteredSlots(slots);
//     }
//   }, [selectedDate, docInfo]);

//   const convertDate = (ddmmyyyy) => {
//     const [dd, mm, yyyy] = ddmmyyyy.split('-');
//     return `${yyyy}-${mm}-${dd}`;
//   };

//   const handleConfirm = async () => {
//     if (!selectedSlot) return;

//     setIsLoading(true);
//     try {
//       const res = await axios.post(
//         `${backendUrl}/api/user/book-appointment`,
//         {
//           doctorId: docId,
//           slotId: selectedSlot._id,
//         },
//         {
//           headers: { token },
//         }
//       );

//       if (res.data.success) {
//         toast.success(res.data.message);
//         navigate('/my-appointments');
//         toast.success("Booked successfully !")
//       } else {
//         toast.error(res.data.message);
//         toast.error("Booked failed !")
//       }
//     } catch (err) {
//       toast.error(err?.response?.data?.message || 'Error booking appointment');
//     } finally {
//       setIsLoading(false);
//       setShowModal(false);
//     }
//   };
//    console.log("docInf",docInfo)
//   return (
//     <>
//     {isLoading && <Loading/>}
//     <div className="max-w-4xl mx-auto px-4 py-10">
//       <h1 className="text-2xl font-bold mb-6">Book Appointment</h1>

//       {docInfo && (
//         <div className="mb-6">
    
//            <h2 className="text-2xl font-bold text-gray-900 mb-3">{docInfo.name}</h2>
//            <p>
//     <span className="font-semibold text-gray-800">Speciality:</span>{' '}
//     {docInfo.speciality || 'N/A'}
//   </p>
//           <p>
//     <span className="font-semibold text-gray-800">About:</span>{' '}
//     {docInfo.about || 'N/A'}
//   </p>
       
//           <p>
//     <span className="font-semibold text-gray-800">Experience:</span>{' '}
//     {docInfo.experience + " Years" || 'N/A'}
//   </p>
//           <p className="text-gray-600">{formatVND(docInfo.fees,'')+" VNĐ" || 'N/A'}</p>

         
//         </div>
//       )}

// {docInfo && (
//    <div className="mb-6">
//         <h3 className="font-semibold mb-2">Select Date:</h3>
//         <div className="flex flex-wrap gap-3">
//           {availableDates.length > 0 ? (
//             availableDates.map((date) => (
//               <button
//                 key={date}
//                 onClick={() => setSelectedDate(date)}
//                 className={`px-3 py-2 rounded-md border text-sm ${
//                   selectedDate === date
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-white text-gray-700 border-gray-300'
//                 }`}
//               >
//                 {date}
//               </button>
//             ))
//           ) : (
//             <p className="text-sm text-red-500">No available dates</p>
//           )}
//         </div>
//       </div>
// )}
//       {/* Chọn ngày */}
   

//       {/* Chọn slot */}
//       {selectedDate && (
//         <div className="mb-6">
//           <h3 className="font-semibold mb-2">Select Time Slot:</h3>
//           <div className="flex flex-wrap gap-4">
//             {filteredSlots.length > 0 ? (
//               filteredSlots.map((slot) => (
//                 <button
//                   key={slot._id}
//                   onClick={() => setSelectedSlot(slot)}
//                   className={`min-w-[140px] px-4 py-2 rounded-md border text-center ${
//                     selectedSlot?._id === slot._id
//                       ? 'bg-green-600 text-white'
//                       : 'bg-white text-gray-800 border-gray-300'
//                   }`}
//                 >
//                   {slot.startTime} - {slot.endTime}
//                 </button>
//               ))
//             ) : (
//               <p className="text-sm text-gray-500">No slots available on {selectedDate}</p>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Nút xác nhận */}
//       {selectedSlot && (
//         <button
//           onClick={() => setShowModal(true)}
//           className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
//         >
//           Confirm Booking
//         </button>
//       )}

//       {/* Modal xác nhận */}
//       <Transition appear show={showModal} as={Fragment}>
//         <Dialog as="div" className="relative z-30" onClose={() => setShowModal(false)}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-200"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-150"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black/25" />
//           </Transition.Child>

//           <div className="fixed inset-0 flex items-center justify-center p-4">
//             <Dialog.Panel className="bg-white max-w-md w-full rounded-lg p-6 shadow-lg">
//               <Dialog.Title className="text-lg font-bold mb-4">Confirm Appointment</Dialog.Title>
//               <div className="space-y-2 text-gray-700">
//                 <p><strong>Doctor:</strong> {docInfo?.name}</p>
//                 <p><strong>Date:</strong> {selectedSlot?.date}</p>
//                 <p><strong>Time:</strong> {selectedSlot?.startTime} - {selectedSlot?.endTime}</p>
//                 <p><strong>Fees: </strong>{formatVND(selectedSlot?.fees,'')} VNĐ</p>

//               </div>

//               <div className="mt-6 flex justify-end gap-3">
//                 <button
//                   onClick={() => setShowModal(false)}
//                   className="px-4 py-2 border rounded-md text-gray-600"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleConfirm}
//                   className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
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
//     </>
 
//   );
// }
import { useEffect, useState, Fragment, useContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { AppContext } from '../context/AppContext';
import Loading from '../components/Loader';
import { formatVND } from '../utils/formatVND';

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

  // Fetch doctor data
  const fetchDataDoc = async () => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/doctor`, { docId });
      setDocInfo(data.profileData);
    } catch (err) {
      toast.error('Failed to fetch doctor info');
    }
  };

  useEffect(() => {
    fetchDataDoc();
  }, [doctors, docId]);

  // Update availableDates once docInfo is set
  useEffect(() => {
    if (docInfo?.schedule?.length > 0) {
      const today = new Date();
      const upcoming = docInfo.schedule
        .filter(
          (s) =>
            s.status === 'available' &&
            new Date(convertDate(s.date)) >= today
        )
        .map((s) => s.date);

      const sortedDates = [...new Set(upcoming)].sort((a, b) => {
        return new Date(convertDate(a)) - new Date(convertDate(b));
      });

      setAvailableDates(sortedDates);
    }
  }, [docInfo]);

  // Filter slots by selected date
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
        toast.success("Booked successfully!");
        navigate('/my-appointments');
      } else {
        toast.error(res.data.message || "Booking failed");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Error booking appointment');
    } finally {
      setIsLoading(false);
      setShowModal(false);
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Book Appointment</h1>

        {docInfo && (
          <div className="mb-6 space-y-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{docInfo.name}</h2>
            <p><span className="font-semibold text-gray-800">Speciality:</span> {docInfo.speciality || 'N/A'}</p>
            <p><span className="font-semibold text-gray-800">About:</span> {docInfo.about || 'N/A'}</p>
            <p><span className="font-semibold text-gray-800">Experience:</span> {docInfo.experience + " Years" || 'N/A'}</p>
            <p><span className="font-semibold text-gray-800">Fees:</span> {formatVND(docInfo.fees, '')} VNĐ</p>
          </div>
        )}

        {/* Select Date */}
        {docInfo && (
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
        )}

        {/* Select Time Slot */}
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

        {/* Confirm Button */}
        {selectedSlot && (
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        )}

        {/* Confirm Modal */}
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
                  <p><strong>Fees:</strong> {formatVND(selectedSlot?.fees, '')} VNĐ</p>
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
    </>
  );
}
