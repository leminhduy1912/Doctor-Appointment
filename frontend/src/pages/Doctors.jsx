
// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import axios from 'axios'
// import { useContext } from 'react'
// import { AppContext } from '../context/AppContext'



// const Doctors = () => {
//   const { speciality } = useParams()
//   const navigate = useNavigate()
//   const { backendUrl, token } = useContext(AppContext);
//   const [filteredDoctors, setFilteredDoctors] = useState([])
//   const [showFilter, setShowFilter] = useState(false)
//   const [currentPage, setCurrentPage] = useState(1)
//   const [loading, setLoading] = useState(false)
// const [totalPage,setTotalPage]= useState(0);
//   const allSpecialities = [
//     'All',
//     'General physician',
//     'Gynecologist',
//     'Dermatologist',
//     'Pediatricians',
//     'Neurologist',
//     'Gastroenterologist'
//   ]

// const fetchDoctors = async () => {
//   console.log(token);
  
//   setLoading(true)
//   try {
//       const url =
//         speciality && speciality !== 'All'
//           ? `${backendUrl}/api/user/all-doctors?speciality=${encodeURIComponent(speciality)}`
//           : `${backendUrl}/api/user/all-doctors`

//       const res = await axios.get(url)

//     setFilteredDoctors(res.data.doctors || [])
//     setTotalPage(res.data.totalPages)
//     console.log(filteredDoctors.length)
//     setCurrentPage(1)
//   } catch (err) {
//     console.error('Failed to fetch doctors:', err)
//     setFilteredDoctors([])
//   }
//   setLoading(false)
// }


//   useEffect(() => {
//     fetchDoctors()
//   }, [speciality,currentPage])



  

//   return (
//     <div>
//       <p className='text-gray-600'>Browse through the doctors specialist.</p>
//       <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
//         {/* Filter Toggle (for small screens) */}
//         <button
//           onClick={() => setShowFilter(!showFilter)}
//           className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}
//         >
//           Filters
//         </button>

//         {/* Speciality Filters */}
//         <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
//           {allSpecialities.map((type, i) => (
//             <p
//               key={i}
//               onClick={() => {
//                 if (!speciality || speciality !== type) {
//                   navigate(type === 'All' ? '/doctors' : `/doctors/${type}`)
//                 }
//               }}
//               className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
//                 (!speciality && type === 'All') || speciality === type ? 'bg-[#E2E5FF] text-black' : ''
//               }`}
//             >
//               {type}
//             </p>
//           ))}
//         </div>

//         {/* Doctors Grid */}
//         <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
//           {loading ? (
//             <p className='text-gray-500 text-center col-span-full'>Loading doctors...</p>
//           ) : filteredDoctors.length > 0 ? (
//             filteredDoctors.map((item, index) => (
//               <div
//                 key={index}
//                 onClick={() => {
//                   navigate(`/appointment/${item._id}`)
//                   scrollTo(0, 0)
//                 }}
//                 className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
//               >
//                 <img className='bg-[#EAEFFF] w-full max-h-45' src={item.image || 'https://res.cloudinary.com/dolaccvrd/image/upload/v1744611708/v8i0ktcadocx6khckgp1.jpg'} alt={item.name} />
//                 <div className='p-4'>
//                   <div className={`flex items-center gap-2 text-sm ${item.available ? 'text-green-500' : 'text-gray-500'}`}>
//                     <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : 'bg-gray-500'}`}></p>
//                     <p>{item.available ? 'Available' : 'Not Available'}</p>
//                   </div>
//                   <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
//                   <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className='text-center col-span-full text-gray-500'>No doctors found.</p>
//           )}
//         </div>
//       </div>

//       {/* Pagination */}
//       {totalPage >= 1 && (
//         <div className='flex justify-center mt-6 gap-2'>
//           {Array.from({ length: totalPage }).map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-3 py-1 rounded border ${
//                 currentPage === i + 1 ? 'bg-primary text-white' : 'bg-white text-gray-700'
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default Doctors




import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const LIMIT = 10;          // số bác sĩ mỗi trang

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { backendUrl, token } = useContext(AppContext);

  const [doctors, setDoctors]   = useState([]);
  const [totalPages, setTotal]  = useState(0);
  const [page, setPage]         = useState(1);
  const [loading, setLoading]   = useState(false);
  const [showFilter, setShow]   = useState(false);

  const specialities = [
    'All',
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',

  ];

  // —— Lấy dữ liệu bác sĩ ————————————————————
  const fetchDoctors = async (pageNum) => {
    setLoading(true);
    try {
      const url =
        speciality && speciality !== 'All'
          ? `${backendUrl}/api/user/all-doctors?page=${pageNum}&limit=${LIMIT}&speciality=${encodeURIComponent(speciality)}`
          : `${backendUrl}/api/user/all-doctors?page=${pageNum}&limit=${LIMIT}`;

      const { data } = await axios.get(url);

      setDoctors(data.doctors || []);
      setTotal(data.totalPages || 0);
    } catch (err) {
      console.error('Fetch doctors error:', err);
      setDoctors([]);
      setTotal(0);
    }
    setLoading(false);
  };

  // —— Khi đổi chuyên khoa → reset về trang 1 và fetch ——
  useEffect(() => {
    setPage(1);
  }, [speciality]);

  // —— Fetch mỗi khi page / speciality thay đổi ————————
  useEffect(() => {
    fetchDoctors(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, speciality]);

  /* UI -------------------------------------------------------------------- */
  return (
    <div className='relative'>
      {/* Loading overlay */}
      {loading && (
        <div className='absolute inset-0 flex items-center justify-center bg-white/60 z-10'>
          <div className='animate-spin rounded-full h-10 w-10 border-4 border-primary border-t-transparent'></div>
        </div>
      )}

      <p className='text-gray-600'>Browse through the doctors specialist.</p>

      {/* Bộ lọc chuyên khoa */}
      <div className='mt-5 flex flex-col sm:flex-row gap-5'>
        <button
          className={`sm:hidden py-1 px-3 border rounded text-sm ${showFilter ? 'bg-primary text-white' : ''}`}
          onClick={() => setShow(!showFilter)}
        >
          Filters
        </button>

        <div className={`flex-col gap-3 text-sm ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          {specialities.map((sp, idx) => (
            <p
              key={idx}
              onClick={() => navigate(sp === 'All' ? '/doctors' : `/doctors/${sp}`)}
              className={`cursor-pointer border px-4 py-1.5 rounded ${
                (!speciality && sp === 'All') || speciality === sp ? 'bg-[#E2E5FF]' : ''
              }`}
            >
              {sp}
            </p>
          ))}
        </div>

        {/* Danh sách bác sĩ */}
        <div className='grid grid-cols-auto gap-4 flex-1'>
          {doctors.length === 0 && !loading && (
            <p className='text-center text-gray-500 col-span-full'>No doctors found.</p>
          )}

          {doctors.map((doc) => (
            <div
              key={doc._id}
              onClick={() => {
                navigate(`/appointment/${doc._id}`);
                scrollTo(0, 0);
              }}
              className='border border-[#C9D8FF] rounded-xl overflow-hidden hover:-translate-y-2 transition'
            >
              <img
                src={
                  doc.image ||
                  'https://res.cloudinary.com/dolaccvrd/image/upload/v1744611708/v8i0ktcadocx6khckgp1.jpg'
                }
                alt={doc.name}
                className='w-full max-h-44 bg-[#EAEFFF]'
              />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm ${doc.available ? 'text-green-500' : 'text-gray-500'}`}>
                  <span className={`block w-2 h-2 rounded-full ${doc.available ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                  {doc.available ? 'Available' : 'Not Available'}
                </div>
                <p className='text-lg font-medium text-[#262626]'>{doc.name}</p>
                <p className='text-sm text-[#5C5C5C]'>{doc.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Phân trang */}
      {totalPages > 1 && (
        <div className='flex justify-center gap-2 mt-6'>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx + 1)}
              className={`px-3 py-1 border rounded ${
                page === idx + 1 ? 'bg-primary text-white' : 'bg-white text-gray-700'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Doctors;

