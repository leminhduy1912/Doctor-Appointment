// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Dialog } from '@headlessui/react';
// import Loading from '../../components/Loader';

// const DoctorSchedule = () => {
//   const [doctor, setDoctor] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   // Fetch Doctor schedule
//   useEffect(() => {
//     const fetchDoctor = async () => {
//       setLoading(true); // Start loading when fetching data
//       try {
//         const id = localStorage.getItem('id');
//         const dToken = localStorage.getItem('dToken');

//         const response = await axios.post(
//           `${backendUrl}/api/doctor/get-schedule`,
//           {
//             doctorId: id,
//             page: currentPage,
//             limit: 7, // Fetch 7 records per page
//           },
//           {
//             headers: { dToken },
//           }
//         );

//         setDoctor(response.data.schedules);
//         setTotalPages(response.data.totalPages); // Set total pages from the response
//       } catch (error) {
//         console.error('Failed to fetch doctor:', error);
//       } finally {
//         setLoading(false); // Stop loading when data is fetched
//       }
//     };

//     fetchDoctor();
//   }, [currentPage]);

//   // Handle modal for editing schedule
//   const handleEditClick = (slot) => {
//     setSelectedSlot(slot);
//     setIsModalOpen(true);
//   };

//   const handleConfirmEdit = async () => {
//     try {
//       const payload = {
//         doctorId: doctor._id,
//         day: selectedSlot.day,
//         date: selectedSlot.date,
//         newSlot: {
//           startTime: selectedSlot.startTime,
//           endTime: selectedSlot.endTime,
//         },
//         actionType: 'remove',
//       };

//       await axios.put('/api/doctors/update-schedule', payload);
//       alert('Schedule updated successfully!');
//       setIsModalOpen(false);

//       // Re-fetch updated data
//       const response = await axios.get('/api/doctor/profile', {
//         doctorId: doctor._id,
//       });
//       setDoctor(response.data);
//     } catch (error) {
//       console.error('Error updating schedule:', error);
//       alert('Failed to update schedule.');
//     }
//   };

//   // Check if doctor data is loaded
//   if (loading) return <Loading />;

//   if (!doctor || doctor.length === 0) return <p className="text-center text-red-500">No doctor data found.</p>;

//   const sortedSchedule = [...doctor].sort((a, b) => {
//     const [dayA, monthA, yearA] = a.date.split('-').map(Number);
//     const [dayB, monthB, yearB] = b.date.split('-').map(Number);
//     const dateA = new Date(yearA, monthA - 1, dayA, ...a.startTime.split(':').map(Number));
//     const dateB = new Date(yearB, monthB - 1, dayB, ...b.startTime.split(':').map(Number));
//     return dateA - dateB;
//   });

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen w-full flex items-center justify-center">
//       <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
//         <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-6">Doctor's Schedule</h2>

//         {/* Table for Schedule */}
//         <div className="overflow-x-auto bg-white rounded-lg shadow-md">
//           <table className="min-w-full table-auto border-collapse text-sm">
//             <thead className="bg-indigo-600 text-white">
//               <tr>
//                 <th className="px-6 py-3 text-left">Date</th>
//                 <th className="px-6 py-3 text-left">Time</th>
//                 <th className="px-6 py-3 text-left">Status</th>
//                 <th className="px-6 py-3 text-center">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {sortedSchedule.map((slot) => (
//                 <tr
//                   key={slot._id}
//                   className="border-b hover:bg-gray-100 transition duration-200"
//                 >
//                   <td className="px-6 py-4">{slot.day}, {slot.date}</td>
//                   <td className="px-6 py-4">{slot.startTime} – {slot.endTime}</td>
//                   <td className="px-6 py-4">
//                     <span
//                       className={`font-semibold ${slot.status === 'available' ? 'text-green-600' : slot.status === 'booked' ? 'text-yellow-600' : 'text-red-600'}`}
//                     >
//                       {slot.status}
//                     </span>
//                   </td>
//                   {slot.status == "available" && 
//                   (
//                     <td className="px-6 py-4 text-center">
//                     <button
//                       onClick={() => handleEditClick(slot)}
//                       className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
//                     >
//                       Remove
//                     </button>
//                   </td>
//                   )
//                   }
                  
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="mt-8 flex justify-center gap-6">
//           <button
//             onClick={() => setCurrentPage(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="px-6 py-3 bg-indigo-500 text-white rounded-lg disabled:bg-gray-400 transition"
//           >
//             Prev
//           </button>
//           <button
//             onClick={() => setCurrentPage(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="px-6 py-3 bg-indigo-500 text-white rounded-lg disabled:bg-gray-400 transition"
//           >
//             Next
//           </button>
//         </div>
//       </div>

//       {/* Modal */}
//       <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
//         <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
//         <div className="fixed inset-0 flex items-center justify-center p-4">
//           <Dialog.Panel className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
//             <Dialog.Title className="text-lg font-bold text-indigo-600">Confirm Schedule Removal</Dialog.Title>
//             <p className="mt-2 text-gray-600">
//               Are you sure you want to remove the schedule on{' '}
//               <span className="font-semibold text-gray-900">{selectedSlot?.date}</span> from{' '}
//               <span className="font-semibold text-gray-900">{selectedSlot?.startTime}</span> to{' '}
//               <span className="font-semibold text-gray-900">{selectedSlot?.endTime}</span>?
//             </p>
//             <div className="mt-6 flex justify-end gap-4">
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleConfirmEdit}
//                 className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
//               >
//                 Confirm
//               </button>
//             </div>
//           </Dialog.Panel>
//         </div>
//       </Dialog>
//     </div>
//   );
// };

// export default DoctorSchedule;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Dialog } from '@headlessui/react';
// import Loading from '../../components/Loader';

// const DoctorSchedule = () => {
//   const [doctor, setDoctor] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   useEffect(() => {
//     const fetchDoctor = async () => {
//       setLoading(true);
//       try {
//         const id = localStorage.getItem('id');
//         const dToken = localStorage.getItem('dToken');

//         const response = await axios.post(
//           `${backendUrl}/api/doctor/get-schedule`,
//           {
//             doctorId: id,
//             page: currentPage,
//             limit: 7,
//           },
//           {
//             headers: { dToken },
//           }
//         );

//         setDoctor(response.data.schedules);
//         setTotalPages(response.data.totalPages);
//       } catch (error) {
//         console.error('Failed to fetch doctor:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDoctor();
//   }, [currentPage]);

//   const handleEditClick = (slot) => {
//     setSelectedSlot(slot);
//     setIsModalOpen(true);
//   };

//   const handleConfirmEdit = async () => {
//     try {
//       const id = localStorage.getItem('id');
//       const dToken = localStorage.getItem('dToken');

//       const payload = {
//         doctorId: id,
//         day: selectedSlot.day,
//         date: selectedSlot.date,
//         newSlot: {
//           startTime: selectedSlot.startTime,
//           endTime: selectedSlot.endTime,
//         },
//         actionType: 'remove',
//       };

//       await axios.put(`${backendUrl}/api/doctors/update-schedule`, payload, {
//         headers: { dToken },
//       });

//       alert('Schedule updated successfully!');
//       setIsModalOpen(false);

//       // Re-fetch updated data
//       const refreshed = await axios.post(
//         `${backendUrl}/api/doctor/get-schedule`,
//         { doctorId: id, page: currentPage, limit: 7 },
//         { headers: { dToken } }
//       );
//       setDoctor(refreshed.data.schedules);
//     } catch (error) {
//       console.error('Error updating schedule:', error);
//       alert('Failed to update schedule.');
//     }
//   };

//   if (loading) return <Loading />;

//   if (!doctor || doctor.length === 0)
//     return <p className="text-center text-red-500">No doctor data found.</p>;

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen w-full flex items-center justify-center">
//       <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
//         <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-6">Doctor's Schedule</h2>

//         <div className="overflow-x-auto bg-white rounded-lg shadow-md">
//           <table className="min-w-full table-auto border-collapse text-sm">
//             <thead className="bg-indigo-600 text-white">
//               <tr>
//                 <th className="px-6 py-3 text-left">Date</th>
//                 <th className="px-6 py-3 text-left">Time</th>
//                 <th className="px-6 py-3 text-left">Status</th>
//                 <th className="px-6 py-3 text-center">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {doctor.map((slot) => (
//                 <tr
//                   key={slot._id}
//                   className="border-b hover:bg-gray-100 transition duration-200"
//                 >
//                   <td className="px-6 py-4">{slot.day}, {slot.date}</td>
//                   <td className="px-6 py-4">{slot.startTime} – {slot.endTime}</td>
//                   <td className="px-6 py-4">
//                     <span
//                       className={`font-semibold ${
//                         slot.status === 'available'
//                           ? 'text-green-600'
//                           : slot.status === 'booked'
//                           ? 'text-yellow-600'
//                           : 'text-red-600'
//                       }`}
//                     >
//                       {slot.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 text-center">
//                     {slot.status === 'available' && (
//                       <button
//                         onClick={() => handleEditClick(slot)}
//                         className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
//                       >
//                         Remove
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="mt-8 flex justify-center gap-6">
//           <button
//             onClick={() => setCurrentPage(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="px-6 py-3 bg-indigo-500 text-white rounded-lg disabled:bg-gray-400 transition"
//           >
//             Prev
//           </button>
//           <button
//             onClick={() => setCurrentPage(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="px-6 py-3 bg-indigo-500 text-white rounded-lg disabled:bg-gray-400 transition"
//           >
//             Next
//           </button>
//         </div>
//       </div>

//       {/* Modal */}
//       <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
//         <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
//         <div className="fixed inset-0 flex items-center justify-center p-4">
//           <Dialog.Panel className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
//             <Dialog.Title className="text-lg font-bold text-indigo-600">Confirm Schedule Removal</Dialog.Title>
//             <p className="mt-2 text-gray-600">
//               Are you sure you want to remove the schedule on{' '}
//               <span className="font-semibold text-gray-900">{selectedSlot?.date}</span> from{' '}
//               <span className="font-semibold text-gray-900">{selectedSlot?.startTime}</span> to{' '}
//               <span className="font-semibold text-gray-900">{selectedSlot?.endTime}</span>?
//             </p>
//             <div className="mt-6 flex justify-end gap-4">
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleConfirmEdit}
//                 className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
//               >
//                 Confirm
//               </button>
//             </div>
//           </Dialog.Panel>
//         </div>
//       </Dialog>
//     </div>
//   );
// };

// export default DoctorSchedule;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Dialog } from '@headlessui/react';
import Loading from '../../components/Loader';

const DoctorSchedule = () => {
  const [doctor, setDoctor] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchDoctor = async () => {
      setLoading(true);
      try {
        const id = localStorage.getItem('id');
        const dToken = localStorage.getItem('dToken');

        const response = await axios.post(
          `${backendUrl}/api/doctor/get-schedule`,
          { doctorId: id, page: currentPage, limit: 7 },
          { headers: { dToken } }
        );

        setDoctor(response.data.schedules);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Failed to fetch doctor:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [currentPage]);

  const handleEditClick = (slot) => {
    setSelectedSlot(slot);
    setIsModalOpen(true);
  };

  const handleConfirmEdit = async () => {
    try {
      const id = localStorage.getItem('id');
      const dToken = localStorage.getItem('dToken');

      const payload = {
        doctorId: id,
        day: selectedSlot.day,
        date: selectedSlot.date,
        newSlot: {
          startTime: selectedSlot.startTime,
          endTime: selectedSlot.endTime,
        },
        actionType: 'remove',
      };

      await axios.put(`${backendUrl}/api/doctors/update-schedule`, payload, {
        headers: { dToken },
      });

      alert('Schedule updated successfully!');
      setIsModalOpen(false);

      // Refresh data
      const refreshed = await axios.post(
        `${backendUrl}/api/doctor/get-schedule`,
        { doctorId: id, page: currentPage, limit: 7 },
        { headers: { dToken } }
      );
      setDoctor(refreshed.data.schedules);
    } catch (error) {
      console.error('Error updating schedule:', error);
      alert('Failed to update schedule.');
    }
  };

  if (loading) return <Loading />;

  if (!doctor || doctor.length === 0)
    return <p className="text-center text-red-500">No doctor data found.</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-6">
          Doctor's Schedule
        </h2>

        <div className="overflow-x-auto rounded-lg">
          <table className="w-full table-fixed border-collapse text-sm">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="px-6 py-3 text-center">Date</th>
                <th className="px-6 py-3 text-center">Time</th>
                <th className="px-6 py-3 text-center">Status</th>
                <th className="px-6 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {doctor.map((slot) => (
                <tr
                  key={slot._id}
                  className="border-b hover:bg-gray-100 transition duration-200"
                >
                  <td className="px-6 py-4 text-center">
                    {slot.day}, {slot.date}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {slot.startTime} – {slot.endTime}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`font-semibold ${
                        slot.status === 'available'
                          ? 'text-green-600'
                          : slot.status === 'booked'
                          ? 'text-yellow-600'
                          : 'text-red-600'
                      }`}
                    >
                      {slot.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {slot.status === 'available' && (
                      <button
                        onClick={() => handleEditClick(slot)}
                        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
                      >
                        Remove
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex justify-center gap-6">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-6 py-3 bg-indigo-500 text-white rounded-lg disabled:bg-gray-400 transition"
          >
            Prev
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-6 py-3 bg-indigo-500 text-white rounded-lg disabled:bg-gray-400 transition"
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <Dialog.Title className="text-lg font-bold text-indigo-600">
              Confirm Schedule Removal
            </Dialog.Title>
            <p className="mt-2 text-gray-600">
              Are you sure you want to remove the schedule on{' '}
              <span className="font-semibold text-gray-900">
                {selectedSlot?.date}
              </span>{' '}
              from{' '}
              <span className="font-semibold text-gray-900">
                {selectedSlot?.startTime}
              </span>{' '}
              to{' '}
              <span className="font-semibold text-gray-900">
                {selectedSlot?.endTime}
              </span>
              ?
            </p>
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmEdit}
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Confirm
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default DoctorSchedule;


