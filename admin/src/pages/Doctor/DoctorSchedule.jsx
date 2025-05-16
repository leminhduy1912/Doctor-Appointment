


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Dialog } from '@headlessui/react';
import Loading from '../../components/Loader';
import { toast } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';
const DoctorSchedule = () => {
  const [doctor, setDoctor] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newSlotData, setNewSlotData] = useState({
    day: '',
    date: '',
    startTime: '',
    endTime: '',
  });
  
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
  const formatDateToDDMMYYYY = (inputDate) => {
    const [year, month, day] = inputDate.split('-');
    return `${day}-${month}-${year}`;
  };
  
  const handleConfirmEdit = async () => {
    try {
      const id = localStorage.getItem('id');
      const dToken = localStorage.getItem('dToken');
setLoading(true)
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

      //alert('Schedule updated successfully!');
      toast.success("Your work schedule has been updated !")
      setIsModalOpen(false);
      setLoading(false)
      // toast.success("Your work schedule has been updated !")
      // Refresh data
      const refreshed = await axios.post(
        `${backendUrl}/api/doctor/get-schedule`,
        { doctorId: id, page: currentPage, limit: 7 },
        { headers: { dToken } }
      );
      setDoctor(refreshed.data.schedules);
    } catch (error) {
      toast.error("Failed to update schedule !")
      setLoading(false)
      setIsModalOpen(false);
      console.error('Error updating schedule:', error);
      //alert('Failed to update schedule.');
    }
  };

  if (loading) return <Loading />;

  return (
    <>

     {loading && <Loading/>}
    <div className="p-6 bg-gray-50 min-h-screen w-full flex items-start justify-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-6">
          Doctor's Schedule
        </h2>
        <div className="flex justify-end mb-4">
  <button
    onClick={() => setIsAddModalOpen(true)}
    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
  >
    Add Schedule
  </button>
</div>

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
                  : slot.status === 'pending'
                  ? 'text-yellow-500'
                  : slot.status === 'waiting for payment'
                  ? 'text-orange-500'
                  : slot.status === 'booked'
                  ? 'text-blue-600'
                  : slot.status === 'done'
                  ? 'text-emerald-600'
                  : 'text-gray-500'
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
      ))
    )}
  </tbody>
</table>

{/* Pagination (moved outside of <table>) */}
{doctor.length !== 0 && (
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
)}

        </div>

      
      </div>

      {/* Modal */}
      {/* <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
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
      </Dialog> */}

      {/* Confirm Schedule Removal Modal */}
<AnimatePresence>
  {isModalOpen && (
    <>
      {/* Overlay */}
      <motion.div
        key="overlay-remove"
        className="fixed inset-0 bg-black/50 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal */}
      <motion.div
        key="modal-remove"
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md z-50">
          <h2 className="text-lg font-bold text-indigo-600">Confirm Schedule Removal</h2>
          <p className="mt-2 text-gray-600">
            Are you sure you want to remove the schedule on{' '}
            <span className="font-semibold text-gray-900">{selectedSlot?.date}</span> from{' '}
            <span className="font-semibold text-gray-900">{selectedSlot?.startTime}</span> to{' '}
            <span className="font-semibold text-gray-900">{selectedSlot?.endTime}</span>?
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
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>

      {/* // add schedule modal */}
      {/* <Dialog open={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} className="relative z-50">
  <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
  <div className="fixed inset-0 flex items-center justify-center p-4">
    <Dialog.Panel className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
      <Dialog.Title className="text-lg font-bold text-green-600 mb-4">
        Add New Schedule
      </Dialog.Title>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Date</label>
          <input
            type="date"
            value={newSlotData.date}
            onChange={(e) => {
              const selectedDate = e.target.value;
              const dayOfWeek = new Date(selectedDate).toLocaleDateString('en-US', {
                weekday: 'long',
              });
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
        <button
          onClick={() => setIsAddModalOpen(false)}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg"
        >
          Cancel
        </button>
        <button
          onClick={async () => {
            try {
              const id = localStorage.getItem('id');
              const dToken = localStorage.getItem('dToken');
              setLoading(true);

              const payload = {
                doctorId: id,
                day: newSlotData.day,
                date: formatDateToDDMMYYYY(newSlotData.date),
                newSlot: {
                  startTime: newSlotData.startTime,
                  endTime: newSlotData.endTime,
                },
                actionType: 'add',
              };

              await axios.post(`${backendUrl}/api/doctor/update-schedule`, payload, {
                headers: { dToken },
              });

              toast.success('New schedule added!');
              setIsAddModalOpen(false);

              // refresh data
              const refreshed = await axios.post(
                `${backendUrl}/api/doctor/get-schedule`,
                { doctorId: id, page: currentPage, limit: 7 },
                { headers: { dToken } }
              );
              
              setDoctor(refreshed.data.schedules);
            } catch (error) {
                  toast.error(error.response?.data?.message || 'Something went wrong!');
            console.log(error.response?.data?.message);
            
}
 finally {
              setLoading(false);
            }
          }}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Save
        </button>
      </div>
    </Dialog.Panel>
  </div>
</Dialog> */}


{/* Add New Schedule Modal */}
<AnimatePresence>
  {isAddModalOpen && (
    <>
      {/* Overlay */}
      <motion.div
        key="overlay-add"
        className="fixed inset-0 bg-black/50 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal */}
      <motion.div
        key="modal-add"
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md z-50">
          <h2 className="text-lg font-bold text-green-600 mb-4">Add New Schedule</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Date</label>
              <input
                type="date"
                value={newSlotData.date}
                onChange={(e) => {
                  const selectedDate = e.target.value;
                  const dayOfWeek = new Date(selectedDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                  });
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
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={async () => {
                try {
                  const id = localStorage.getItem('id');
                  const dToken = localStorage.getItem('dToken');
                  setLoading(true);

                  const payload = {
                    doctorId: id,
                    day: newSlotData.day,
                    date: formatDateToDDMMYYYY(newSlotData.date),
                    newSlot: {
                      startTime: newSlotData.startTime,
                      endTime: newSlotData.endTime,
                    },
                    actionType: 'add',
                  };

                  await axios.post(`${backendUrl}/api/doctor/update-schedule`, payload, {
                    headers: { dToken },
                  });

                  toast.success('New schedule added!');
                  setIsAddModalOpen(false);

                  const refreshed = await axios.post(
                    `${backendUrl}/api/doctor/get-schedule`,
                    { doctorId: id, page: currentPage, limit: 7 },
                    { headers: { dToken } }
                  );

                  setDoctor(refreshed.data.schedules);
                } catch (error) {
                  toast.error(error.response?.data?.message || 'Something went wrong!');
                  console.log(error.response?.data?.message);
                } finally {
                  setLoading(false);
                }
              }}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Save
            </button>
          </div>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>

    </div>
    </>
 

  );
};

export default DoctorSchedule;


