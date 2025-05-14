// import React, {  useEffect, useState } from 'react'
//  import { AdminContext } from '../../context/AdminContext'
//  import axios from 'axios'
//  import { toast } from 'react-toastify'
//  import Loading from '../../components/Loader'
//  import { AnimatePresence, motion } from 'framer-motion'

// const DoctorList = () => {
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   const aToken = localStorage.getItem("aToken");
//   console.log("token",aToken);
  
//   // const { currency } = useContext(AppContext);
  
//   // State management
//   const [doctors, setDoctors] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [filterStatus, setFilterStatus] = useState('All');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
  
//    const [showModalUnactiveDoctorAccount, setShowModalUnactiveDoctorAccount] = useState(false)
//    const [selectedDoctorId, setSelectedDoctorId] = useState(null)
//    const [isLoading, setIsLoading] = useState(false)

//     const handleAvailabilityToggle = (docId) => {
//      setSelectedDoctorId(docId)
//     setShowModalUnactiveDoctorAccount(true)
//   }




//      useEffect(() => {
  
//      const fetchDoctors = async () => {
//        try {
//          setLoading(true)
//         const { data } = await axios.get(`${backendUrl}/api/admin/all-doctors?page=${currentPage}&status=${filterStatus}`,
//         {
//            headers: { aToken:aToken },
//         })

//          if (data.doctors) {
//            setDoctors(data.doctors)
//            setTotalPages(data.totalPages || 1)
//          } else {
//            toast.error(data.message)
//          }
//        } catch (error) {
//          console.error(error)
//          toast.error(error.message)
//        } finally {
//          setLoading(false)
//        }
//      }

//      if (aToken) fetchDoctors()
//    }, [aToken, filterStatus, currentPage])


//   // Helper functions
//   const handleConfirm = async () => {
//     if (!selectedDoctorId) return
//     try {
//       setIsLoading(true)

//       const { data } = await axios.post(
//         `${backendUrl}/api/admin/change-availability`,
//         { docId: selectedDoctorId },
//         { headers: { aToken } }
//       )

//       if (data.success) {
//         toast.success(data.message)
  

//         const { data: newData } = await axios.get(`${backendUrl}/api/admin/all-doctors?page=${currentPage}&status=${filterStatus}`, {
//           headers: { aToken },
//         })
//         setDoctors(newData.doctors)
//       } else {
//         toast.error(data.message)
//       }
//     } catch (error) {
//       toast.error(error.message)
//     } finally {
//       setIsLoading(false)
//       setShowModalUnactiveDoctorAccount(false)
//       setSelectedDoctorId(null)
//     }
//   }

// if (loading) return <Loading />;

//   return (
//     <>
//     {isLoading && <Loading/>}
//            <div className='w-full max-w-6xl m-5 relative'>
//              <p className='mb-3 text-lg font-semibold text-gray-800'>All Doctors</p>
//              {/* Filter */}
//          <div className='flex gap-2 mb-4 text-sm font-medium'>
//            {['All', 'General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map(status => (
//              <button
//                key={status}
//                onClick={() => {
//                  setFilterStatus(status);
//                  setCurrentPage(1);
//                }}
//                className={`px-3 py-1 border rounded ${filterStatus === status ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 text-gray-600'} capitalize`}
//              >
//                {status}
//              </button>
//            ))}
//          </div>



//          <div className="m-5 max-h-[80vh] overflow-y-auto">
//         <h1 className="text-lg font-medium">All Doctors</h1>
//         <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
//           {doctors  ? (
//             doctors.map((item, index) => (
//               <div
//                 className="border border-[#C9D8FF] rounded-xl max-w-56 overflow-hidden cursor-pointer group"
//                 key={index}
//               >
//                 <img
//                   className="bg-[#EAEFFF] group-hover:bg-primary transition-all duration-500 w-full h-32 object-cover"
//                   src={item.image}
//                   alt=""
//                 />
//                 <div className="p-4">
//                   <p className="text-[#262626] text-lg font-medium">{item.name}</p>
//                   <p className="text-[#5C5C5C] text-sm">{item.speciality}</p>
//                   <div className="mt-2 flex items-center gap-1 text-sm">
//                     <input
//                       type="checkbox"
//                       checked={item.available}
//                       onChange={() => handleAvailabilityToggle(item._id)}
//                     />
//                     <p>Available</p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-600 mt-4">No doctors found.</p>
//           )}
//         </div>
//         </div>
//                  {/* Pagination */}
//                  {totalPages >= 1 && (
//            <div className="flex justify-center mt-6 gap-2 items-center text-sm font-medium text-gray-600">
//              <button
//                onClick={() => setCurrentPage(currentPage - 1)}
//                disabled={currentPage === 1}
//                className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
//              >
//                Previous
//              </button>
//              <button className={`px-3 py-1 border rounded bg-blue-600 text-white`}>
//                {currentPage}
//              </button>
//              <button
//                onClick={() => setCurrentPage(currentPage + 1)}
//                disabled={currentPage === totalPages}
//                className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
//              >
//                Next
//              </button>
//            </div>
//          )}
//         </div>



        
//                {/* Confirmation Modal */}
//                <AnimatePresence>
//   {showModalUnactiveDoctorAccount && (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         className="bg-white w-full max-w-md rounded-xl shadow-lg p-6"
//       >
//         {/* Title */}
//         <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">
//           Deactivate Doctor Account
//         </h2>

//         {/* Sub description */}
//         <p className="text-sm text-gray-600 text-center mb-4">
//           Please confirm and provide a reason for deactivating this account.
//         </p>

//         {/* Reason textarea */}
//         <textarea
//           //value={reason}
//           //onChange={(e) => setReason(e.target.value)}
//           placeholder="E.g. Doctor is inactive, violation of policies, etc."
//           className="w-full border border-gray-300 rounded-md px-3 py-2 mb-5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//           rows={4}
//         />

//         {/* Action buttons */}
//         <div className="flex justify-end gap-3">
//           <button
//             // onClick={() => {
//             //   setShowModalUnactiveDoctorAccount(false);
//             //   setReason('');
//             // }}
//             className="px-4 py-2 rounded-md border text-gray-600 hover:bg-gray-100 transition"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleConfirm}
//             disabled={isLoading}
//             className={`px-4 py-2 rounded-md text-white transition ${
//               isLoading
//                 ? 'bg-blue-300 cursor-not-allowed'
//                 : 'bg-blue-600 hover:bg-blue-700'
//             }`}
//           >
//             {isLoading ? 'Processing...' : 'Confirm'}
//           </button>
//         </div>
//       </motion.div>
//     </motion.div>
//   )}
// </AnimatePresence>

//     </>

//   );
// };
 

// export default DoctorList






import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../../components/Loader';
import { AnimatePresence, motion } from 'framer-motion';

const DoctorList = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const aToken = localStorage.getItem("aToken");

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [showModalUnactiveDoctorAccount, setShowModalUnactiveDoctorAccount] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const [selectedDoctorAvailable, setSelectedDoctorAvailable] = useState(null);
  const [reason, setReason] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAvailabilityToggle = (docId, available) => {
    setSelectedDoctorId(docId);
    setSelectedDoctorAvailable(available);
    setShowModalUnactiveDoctorAccount(true);
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${backendUrl}/api/admin/all-doctors?page=${currentPage}&status=${filterStatus}`, {
          headers: { aToken }
        });

        if (data.doctors) {
          setDoctors(data.doctors);
          setTotalPages(data.totalPages || 1);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (aToken) fetchDoctors();
  }, [aToken, filterStatus, currentPage]);

  const handleConfirm = async () => {
    if (!selectedDoctorId) return;

    try {
      setIsLoading(true);
      const payload = selectedDoctorAvailable
        ? { docId: selectedDoctorId, reason }
        : { docId: selectedDoctorId };

      const { data } = await axios.post(
        `${backendUrl}/api/admin/change-availability`,
        payload,
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);
        const { data: newData } = await axios.get(`${backendUrl}/api/admin/all-doctors?page=${currentPage}&status=${filterStatus}`, {
          headers: { aToken }
        });
        setDoctors(newData.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
      setShowModalUnactiveDoctorAccount(false);
      setSelectedDoctorId(null);
      setSelectedDoctorAvailable(null);
      setReason('');
    }
  };

  if (loading) return <Loading />;

  return (
    <>
      {isLoading && <Loading />}
      <div className='w-full max-w-6xl m-5 relative'>
        <p className='mb-3 text-lg font-semibold text-gray-800'>All Doctors</p>

        {/* Filter */}
        <div className='flex gap-2 mb-4 text-sm font-medium'>
          {['All', 'General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map(status => (
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

        {/* <div className="m-5 max-h-[80vh] overflow-y-auto">
          <h1 className="text-lg font-medium">All Doctors</h1>
          <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
            {doctors ? (
              doctors.map((item, index) => (
                <div
                  className="border border-[#C9D8FF] rounded-xl w-46 h-56 overflow-hidden cursor-pointer group"
                  key={index}
                >
                  <img
                    className="bg-[#EAEFFF] group-hover:bg-primary transition-all duration-500 w-46 h-32 object-cover"
                    src={item.image}
                    alt=""
                  />
                  <div className="p-4">
                    <p className="text-[#262626] text-lg font-medium">{item.name}</p>
                    <p className="text-[#5C5C5C] text-sm">{item.speciality}</p>
                    <div className="mt-2 flex items-center gap-1 text-sm">
                      <input
                        type="checkbox"
                        checked={item.available}
                        onChange={() => handleAvailabilityToggle(item._id, item.available)}
                      />
                      <p>Available</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600 mt-4">No doctors found.</p>
            )}
          </div>
        </div> */}
<div className="m-5 max-h-[80vh] overflow-y-auto">
  <h1 className="text-lg font-medium">All Doctors</h1>

  <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5">
    {doctors && doctors.length > 0 ? (
      doctors.map((item, index) => (
        <div
          key={index}
          className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer group transition-all"
        >
          <img
            className="bg-[#EAEFFF] group-hover:bg-primary transition-all duration-500 w-full h-32 object-cover"
            src={item.image}
            alt="Doctor"
          />
          <div className="p-4">
            <p className="text-[#262626] text-lg font-medium truncate">{item.name}</p>
            <p className="text-[#5C5C5C] text-sm truncate">{item.speciality}</p>
            <div className="mt-2 flex items-center gap-1 text-sm">
              <input
                type="checkbox"
                checked={item.available}
                onChange={() =>
                  handleAvailabilityToggle(item._id, item.available)
                }
              />
              <p>Available</p>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p className="text-gray-600 mt-4">No doctors found.</p>
    )}
  </div>
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
            <button className="px-3 py-1 border rounded bg-blue-600 text-white">{currentPage}</button>
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
        {showModalUnactiveDoctorAccount && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-md rounded-xl shadow-lg p-6"
            >
              <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {selectedDoctorAvailable
                  ? 'Deactivate Doctor Account'
                  : 'Activate Doctor Account'}
              </h2>
              <p className="text-sm text-gray-600 text-center mb-4">
                {selectedDoctorAvailable
                  ? 'Please confirm and provide a reason for deactivating this account.'
                  : 'Are you sure you want to activate this doctor account?'}
              </p>

              {selectedDoctorAvailable && (
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="E.g. Doctor is inactive, violation of policies, etc."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mb-5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows={4}
                />
              )}

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    setShowModalUnactiveDoctorAccount(false);
                    setSelectedDoctorId(null);
                    setSelectedDoctorAvailable(null);
                    setReason('');
                  }}
                  className="px-4 py-2 rounded-md border text-gray-600 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={isLoading}
                  className={`px-4 py-2 rounded-md text-white transition ${
                    isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {isLoading ? 'Processing...' : 'Confirm'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DoctorList;
