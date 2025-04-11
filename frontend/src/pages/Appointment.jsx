// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';
// import { assets } from '../assets/assets';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Appointment = () => {
//   const { docId } = useParams();
//   const { doctors, currencySymbol, backendUrl, token, getDoctosData } = useContext(AppContext);
//   const [docInfo, setDocInfo] = useState(null);
//   const [docSlots, setDocSlots] = useState([]);
//   const [slotIndex, setSlotIndex] = useState(0);
//   const [slotTime, setSlotTime] = useState('');

//   const navigate = useNavigate();

//   const fetchDocInfo = async () => {
//     const doc = doctors.find((doc) => doc._id === docId);
//     setDocInfo(doc);
//   };
// console.log("info doc",docInfo);

//   const getAvailableSlots = () => {
//     if (!docInfo || !docInfo.schedule) return;

//     const newSlots = docInfo.schedule.map((entry) => {
//       const slots = [];
//       const [startHour, startMinute] = entry.startTime.split(':').map(Number);
//       const [endHour, endMinute] = entry.endTime.split(':').map(Number);

//       const startDate = new Date(entry.date);
//       startDate.setHours(startHour, startMinute, 0, 0);

//       const endDate = new Date(entry.date);
//       endDate.setHours(endHour, endMinute, 0, 0);

//       let current = new Date(startDate);
//       while (current < endDate) {
//         const formattedTime = current.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//         const slotDate = `${current.getDate()}_${current.getMonth() + 1}_${current.getFullYear()}`;
//         const isBooked = docInfo.slots_booked?.[slotDate]?.includes(formattedTime);

//         if (!isBooked) {
//           slots.push({
//             datetime: new Date(current),
//             time: formattedTime,
//           });
//         }

//         current.setMinutes(current.getMinutes() + 30);
//       }

//       return slots;
//     });

//     setDocSlots(newSlots);
//   };

//   const bookAppointment = async () => {
//     if (!token) {
//       toast.warning('Login to book appointment');
//       return navigate('/login');
//     }

//     const date = docSlots[slotIndex][0].datetime;
//     const slotDate = `${date.getDate()}_${date.getMonth() + 1}_${date.getFullYear()}`;

//     try {
//       const { data } = await axios.post(
//         `${backendUrl}/api/user/book-appointment`,
//         {
//           docId,
//           slotDate,
//           slotTime,
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
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (doctors.length > 0) {
//       fetchDocInfo();
//     }
//   }, [doctors, docId]);

//   useEffect(() => {
//     if (docInfo) {
//       getAvailableSlots();
//     }
//   }, [docInfo]);

//   const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//   return docInfo ? (
//     <div>
//       {/* ---------- Doctor Details ----------- */}
//       <div className="flex flex-col sm:flex-row gap-4">
//         <div>
//           <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={docInfo.image} alt="" />
//         </div>

//         <div className="flex-1 border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
//           <p className="flex items-center gap-2 text-3xl font-medium text-gray-700">
//             {docInfo.name}
//             <img className="w-5" src={assets.verified_icon} alt="" />
//           </p>
//           <div className="flex items-center gap-2 mt-1 text-gray-600">
//             <p>
//               {docInfo.degree} - {docInfo.speciality}
//             </p>
//             <button className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience}</button>
//           </div>

//           <div>
//             <p className="flex items-center gap-1 text-sm font-medium text-[#262626] mt-3">
//               About <img className="w-3" src={assets.info_icon} alt="" />
//             </p>
//             <p className="text-sm text-gray-600 max-w-[700px] mt-1">{docInfo.about}</p>
//           </div>

//           <p className="text-gray-600 font-medium mt-4">
//             Appointment fee:{' '}
//             <span className="text-gray-800">
//               {currencySymbol}
//               {docInfo.fees}
//             </span>
//           </p>
//         </div>
//       </div>

//       {/* Booking slots */}
//       <div className="sm:ml-72 sm:pl-4 mt-8 font-medium text-[#565656]">
//         <p>Booking slots</p>
//         <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
//           {docSlots.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => setSlotIndex(index)}
//               className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
//                 slotIndex === index ? 'bg-primary text-white' : 'border border-[#DDDDDD]'
//               }`}
//             >
//               <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
//               <p>{item[0] && item[0].datetime.getDate()}</p>
//             </div>
//           ))}
//         </div>

//         <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
//           {docSlots.length > 0 &&
//             docSlots[slotIndex].map((item, index) => (
//               <p
//                 key={index}
//                 onClick={() => setSlotTime(item.time)}
//                 className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
//                   item.time === slotTime
//                     ? 'bg-primary text-white'
//                     : 'text-[#949494] border border-[#B4B4B4]'
//                 }`}
//               >
//                 {item.time.toLowerCase()}
//               </p>
//             ))}
//         </div>

//         <button
//           onClick={bookAppointment}
//           className="bg-primary text-white text-sm font-light px-20 py-3 rounded-full my-6"
//         >
//           Book an appointment
//         </button>
//       </div>
//     </div>
//   ) : null;
// };

// export default Appointment;





import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol, backendUrl, token, getDoctosData } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [filteredSlots, setFilteredSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (doctors.length > 0) {
      const doc = doctors.find((d) => d._id === docId);
      setDocInfo(doc);
    }
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo && selectedDate) {
      const slots = docInfo.schedule.filter((slot) => slot.date === selectedDate);
      setFilteredSlots(slots);
      setSelectedSlot(null); // Reset selected slot when date changes
    }
  }, [docInfo, selectedDate]);

  const handleBooking = async () => {
    if (!token) {
      toast.warning('Login to book appointment');
      return navigate('/login');
    }

    if (!selectedSlot) {
      toast.warning('Please select a time slot');
      return;
    }

    console.log("selected slot",selectedSlot._id)

    try {
     

      const { data } = await axios.post(
        `${backendUrl}/api/user/book-appointment`,
        {
          doctorId:docId,
          slotId:selectedSlot._id       
        },
        {
          headers: { token },
        }
      );

      if (data.success) {
        toast.success(data.message);
        getDoctosData();
        navigate('/my-appointments');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const getUniqueDates = () => {
    const dates = docInfo?.schedule.map((slot) => slot.date);
    return [...new Set(dates)];
  };

  return docInfo ? (
    <div className="p-4">
      {/* Doctor Info */}
      <div className="flex flex-col sm:flex-row gap-4">
        <img className="w-full sm:max-w-72 rounded-lg" src={docInfo.image} alt="Doctor" />
        <div className="flex-1 border rounded-lg p-8 bg-white">
          <h2 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
            {docInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="" />
          </h2>
          <p className="mt-2 text-gray-600">{docInfo.degree} - {docInfo.speciality}</p>
          <p className="mt-2 text-sm text-gray-600">{docInfo.about}</p>
          <p className="mt-2 text-gray-700 font-medium">
            Appointment fee: {currencySymbol}{docInfo.fees}
          </p>
        </div>
      </div>

      {/* Date Selection */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Select a date</h3>
        <div className="flex gap-3 overflow-x-auto">
          {getUniqueDates().map((date, idx) => {
            const dateObj = new Date(date);
            const dayLabel = dateObj.toLocaleDateString('en-US', {
              weekday: 'short',
              day: 'numeric',
              month: 'short',
            });
            return (
              <div
                key={idx}
                onClick={() => setSelectedDate(date)}
                className={`px-4 py-3 text-center rounded-full cursor-pointer min-w-24 ${
                  selectedDate === date ? 'bg-primary text-white' : 'border border-gray-300 text-gray-700'
                }`}
              >
                <p>{dayLabel}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Time Slot Selection */}
      {filteredSlots.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-700 mb-2">Select a time slot</h3>
          <div className="flex flex-wrap gap-4">
            {filteredSlots.map((slot, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedSlot(slot)}
                className={`px-5 py-2 rounded-full text-sm cursor-pointer ${
                  selectedSlot?._id === slot._id
                    ? 'bg-primary text-white'
                    : 'border border-gray-300 text-gray-700'
                }`}
              >
                {slot.startTime} - {slot.endTime}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Booking Button */}
      <div className="mt-8">
        <button
          onClick={handleBooking}
          className="bg-primary text-white px-8 py-3 rounded-full text-sm"
        >
          Book Appointment
        </button>
      </div>
    </div>
  ) : null;
};

export default Appointment;

