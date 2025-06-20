

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Dialog } from '@headlessui/react';
import Loading from '../../components/Loader';
import { toast } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosAddCircleOutline } from "react-icons/io";

const DoctorSchedule = () => {
  const [doctor, setDoctor] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [hovered, setHovered] = useState(false);
  const [newSlotData, setNewSlotData] = useState({
    day: '',
    date: '',
    startTime: '',
    endTime: '',
  });

  useEffect(() => {
    fetchSchedule();
  }, [currentPage]);

  const fetchSchedule = async () => {
    setLoading(true);
    try {
      const id = localStorage.getItem('id');
      const dToken = localStorage.getItem('dToken');
      const res = await axios.post(
        `${backendUrl}/api/doctor/get-schedule`,
        { doctorId: id, page: currentPage, limit: 7 },
        { headers: { dToken } }
      );
      setDoctor(res.data.schedules);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      toast.error('Failed to fetch schedule');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveSlot = async () => {
    setLoading(true);
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
      await axios.post(`${backendUrl}/api/doctor/update-schedule`, payload, {
        headers: { dToken },
      });
      toast.success('Schedule removed successfully');
      setIsModalOpen(false);
      fetchSchedule();
    } catch (err) {
      toast.error('Failed to remove schedule');
    } finally {
      setLoading(false);
    }
  };



// const handleAddSchedule = async () => {
//   const { day, date, startTime, endTime } = newSlotData;

//   if (!date || !startTime || !endTime) {
//     toast.warning('Please fill in all fields');
//     return;
//   }

//   const selectedDate = new Date(date);
//   const today = new Date();
//   today.setHours(0, 0, 0, 0);
//   selectedDate.setHours(0, 0, 0, 0);

//   if (selectedDate < today) {
//     toast.warning('Date cannot be in the past');
//     return;
//   }

//   if (startTime >= endTime) {
//     toast.warning('Start time must be earlier than end time');
//     return;
//   }

//   // ✅ Check nếu là ngày hôm nay thì startTime phải > thời gian hiện tại
//   const now = new Date();
//   if (selectedDate.getTime() === today.getTime()) {
//     const [startHour, startMinute] = startTime.split(':').map(Number);
//     const startDateTime = new Date();
//     startDateTime.setHours(startHour, startMinute, 0, 0);

//     if (startDateTime <= now) {
//       toast.warning('Start time must be later than current time');
//       return;
//     }
//   }

//   setLoading(true);
//   try {
//     const id = localStorage.getItem('id');
//     const dToken = localStorage.getItem('dToken');
//     const payload = {
//       doctorId: id,
//       day,
//       date,
//       newSlot: { startTime, endTime },
//       actionType: 'add',
//     };
//     await axios.post(`${backendUrl}/api/doctor/update-schedule`, payload, {
//       headers: { dToken },
//     });
//     toast.success('New schedule added');
//     setIsAddModalOpen(false);
//     setNewSlotData({ day: '', date: '', startTime: '', endTime: '' });
//     fetchSchedule();
//   } catch (err) {
//     //console.log(err.response.data.message)
//     toast.warning(err.response.data.message);
//   } finally {
//     setLoading(false);
//   }
// };
const handleAddSchedule = async () => {
  const { day, date, startTime, endTime } = newSlotData;

  if (!date || !startTime || !endTime) {
    toast.warning('Please fill in all fields');
    return;
  }

  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  selectedDate.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    toast.warning('Date cannot be in the past');
    return;
  }

  if (startTime >= endTime) {
    toast.warning('Start time must be earlier than end time');
    return;
  }

  // ✅ Nếu là hôm nay thì startTime phải > giờ hiện tại
  const now = new Date();
  if (selectedDate.getTime() === today.getTime()) {
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const startDateTime = new Date();
    startDateTime.setHours(startHour, startMinute, 0, 0);

    if (startDateTime <= now) {
      toast.warning('Start time must be later than current time');
      return;
    }
  }

  // ✅ Format lại date sang dd-mm-yyyy
  const formattedDate = formatDateToDDMMYYYY(date);

  setLoading(true);
  try {
    const id = localStorage.getItem('id');
    const dToken = localStorage.getItem('dToken');
    const payload = {
      doctorId: id,
      day,
      date: formattedDate,
      newSlot: { startTime, endTime },
      actionType: 'add',
    };
    await axios.post(`${backendUrl}/api/doctor/update-schedule`, payload, {
      headers: { dToken },
    });
    
    toast.success('New schedule added');
  setIsAddModalOpen(false)
    setNewSlotData({ day: '', date: '', startTime: '', endTime: '' });
    fetchSchedule();
  } catch (err) {

    toast.warning(err.response.data.message);
  } finally {
    setLoading(false);
  }
};


const formatDateToDDMMYYYY = (isoDate) => {
  const d = new Date(isoDate);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
};


  
  return (
    <div className="p-6 bg-gray-50 min-h-screen w-full flex items-start justify-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-6">
          Doctor's Schedule
        </h2>

        <div className="flex justify-end mb-4">
          <motion.button
            onClick={() => setIsAddModalOpen(true)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            animate={{ width: hovered ? 150 : 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="flex items-center overflow-hidden bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-green-700"
          >
            <span className="flex justify-center"><IoIosAddCircleOutline /></span>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={hovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="ml-2 whitespace-nowrap flex justify-center"
            >
              Add Schedule
            </motion.span>
          </motion.button>
        </div>

        {loading ? (
          <Loading />
        ) : (
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
                {doctor.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-8 text-gray-500 italic">
                      No work schedule
                    </td>
                  </tr>
                ) : (
                  doctor.map((slot) => (
                    <tr key={slot._id} className="border-b hover:bg-gray-100">
                      <td className="px-6 py-4 text-center">{slot.day}, {slot.date}</td>
                      <td className="px-6 py-4 text-center">{slot.startTime} – {slot.endTime}</td>
                      <td className={`font-semibold capitalize ${
                        slot.status === 'available'
                          ? 'text-green-600'
                          : slot.status === 'pending'
                          ? 'text-yellow-600'
                          : slot.status === 'waiting for payment'
                          ? 'text-orange-600'
                          : slot.status === 'booked'
                          ? 'text-blue-600'
                          : slot.status === 'done'
                          ? 'text-emerald-700'
                          : 'text-gray-500'
                      }`}>
                        {slot.status}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {slot.status === 'available' && (
                          <button
                            onClick={() => { setSelectedSlot(slot); setIsModalOpen(true); }}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
                          >
                            Remove
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="mt-8 flex justify-center gap-6">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-6 py-3 bg-indigo-500 text-white rounded-lg disabled:bg-gray-400"
              >
                Prev
              </button>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-6 py-3 bg-indigo-500 text-white rounded-lg disabled:bg-gray-400"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Remove Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div className="fixed inset-0 bg-black/50 z-40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}>
              <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md z-50">
                <h2 className="text-lg font-bold text-indigo-600">Confirm Schedule Removal</h2>
                <p className="mt-2 text-gray-600">
                  Are you sure you want to remove the schedule on <strong>{selectedSlot?.date}</strong> from <strong>{selectedSlot?.startTime}</strong> to <strong>{selectedSlot?.endTime}</strong>?
                </p>
                <div className="mt-6 flex justify-end gap-4">
                  <button onClick={() => setIsModalOpen(false)} className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg">Cancel</button>
                  <button onClick={handleRemoveSlot} className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700">Confirm</button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Add Modal */}
      <Dialog open={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <Dialog.Title className="text-lg font-bold text-green-600 mb-4">Add New Schedule</Dialog.Title>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  value={newSlotData.date}
                  onChange={(e) => {
                    const selectedDate = e.target.value;
                    const dayOfWeek = new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long' });
                    setNewSlotData({ ...newSlotData, date: selectedDate, day: dayOfWeek });
                  }}
                  className="w-full border px-4 py-2 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Start Time</label>
                <input
                  type="time"
                  value={newSlotData.startTime}
                  onChange={(e) => setNewSlotData({ ...newSlotData, startTime: e.target.value })}
                  className="w-full border px-4 py-2 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">End Time</label>
                <input
                  type="time"
                  value={newSlotData.endTime}
                  onChange={(e) => setNewSlotData({ ...newSlotData, endTime: e.target.value })}
                  className="w-full border px-4 py-2 rounded-lg"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <button onClick={() => setIsAddModalOpen(false)} className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg">Cancel</button>
              <button onClick={handleAddSchedule} className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Add</button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default DoctorSchedule;
