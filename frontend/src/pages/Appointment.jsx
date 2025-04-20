import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../components/Loader';
import { motion, AnimatePresence } from 'framer-motion';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol, backendUrl, token, getDoctosData } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [filteredSlots, setFilteredSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
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
      setSelectedSlot(null);
    }
  }, [docInfo, selectedDate]);

  const handleBooking = () => {
    if (!token) {
      toast.warning('Please login to book an appointment');
      return navigate('/login');
    }

    if (!selectedSlot) {
      toast.warning('Please select a time slot');
      return;
    }

    setShowConfirmation(true);
  };

  const handleConfirmBooking = async () => {
    setShowConfirmation(false);
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/book-appointment`,
        {
          doctorId: docId,
          slotId: selectedSlot._id
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
    } finally {
      setIsLoading(false);
    }
  };

  const getUniqueDates = () => {
    const dates = docInfo?.schedule.map((slot) => slot.date);
    return [...new Set(dates)];
  };

  const formatDateLabel = (date) => {
    const [day, month, year] = date.split('-');
    const dateObj = new Date(`${year}-${month}-${day}`);
    if (isNaN(dateObj)) return date;
    return dateObj.toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    });
  };

  return (
    <>
      {isLoading && <Loading />}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Confirm Booking</h3>
              <p className="text-sm text-gray-600 mb-6">
                Are you sure you want to book this appointment?
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="px-4 py-2 rounded-full text-sm border border-gray-400 text-gray-600 hover:bg-gray-100"
                >
                  No
                </button>
                <button
                  onClick={handleConfirmBooking}
                  className="px-4 py-2 rounded-full text-sm bg-primary text-white hover:bg-opacity-90"
                >
                  Yes, Book It
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {docInfo ? (
        <div className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <img className="w-full sm:max-w-72 rounded-lg" src={docInfo.image} alt="Doctor" />
            <div className="flex-1 border rounded-lg p-8 bg-white">
              <h2 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
                {docInfo.name}
                <img className="w-5" src={assets.verified_icon} alt="Verified" />
              </h2>
              <p className="mt-2 text-gray-600">{docInfo.degree} - {docInfo.speciality}</p>
              <p className="mt-2 text-sm text-gray-600">{docInfo.about}</p>
              {/* <p className="mt-2 text-gray-700 font-medium">
                Appointment fee: {currencySymbol}{docInfo.fees}
              </p> */}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Select a date</h3>
            <div className="flex gap-3 overflow-x-auto">
              {getUniqueDates().map((date, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedDate(date)}
                  className={`px-4 py-3 text-center rounded-full cursor-pointer min-w-24 ${
                    selectedDate === date ? 'bg-primary text-white' : 'border border-gray-300 text-gray-700'
                  }`}
                >
                  <p>{formatDateLabel(date)}</p>
                </div>
              ))}
            </div>
          </div>

          {filteredSlots.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Select a time slot</h3>
              <div className="flex flex-wrap gap-4">
              {filteredSlots.map((slot, idx) => (
  <div
    key={idx}
    onClick={() => setSelectedSlot(slot)}
    className={`flex flex-col items-center justify-center px-5 py-3 rounded-xl text-sm cursor-pointer transition-all duration-200 shadow-sm min-w-[120px]
      ${selectedSlot?._id === slot._id
        ? 'bg-primary text-white scale-105'
        : 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50'}`}
  >
    <p className="font-medium">{slot.startTime} - {slot.endTime}</p>
    <p className="text-xs mt-1">
      {currencySymbol}{slot.fees}
    </p>
  </div>
))}

              </div>
            </div>
          )}

          <div className="mt-8">
            <button
              onClick={handleBooking}
              className="bg-primary text-white px-8 py-3 rounded-full text-sm hover:bg-opacity-90"
            >
              Book Appointment
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Appointment;
