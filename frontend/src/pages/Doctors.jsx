




// import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from '../context/AppContext'
// import { useNavigate, useParams } from 'react-router-dom'

// const ITEMS_PER_PAGE = 4

// const Doctors = () => {
//   const { speciality } = useParams()
//   const navigate = useNavigate()
//   const { doctors } = useContext(AppContext)

//   const [filteredDoctors, setFilteredDoctors] = useState([])
//   const [showFilter, setShowFilter] = useState(false)
//   const [currentPage, setCurrentPage] = useState(1)

//   const allSpecialities = [
//     'All',
//     'General physician',
//     'Gynecologist',
//     'Dermatologist',
//     'Pediatricians',
//     'Neurologist',
   
//   ]

//   const applyFilter = () => {
//     let result
//     if (!speciality || speciality === 'All') {
//       result = doctors
//     } else {
//       result = doctors.filter(doc => doc.speciality === speciality)
//     }
//     setFilteredDoctors(result)
//     setCurrentPage(1)
//   }

//   useEffect(() => {
//     applyFilter()
//   }, [doctors, speciality])

//   const paginatedDoctors = filteredDoctors.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   )

//   const totalPages = Math.ceil(filteredDoctors.length / ITEMS_PER_PAGE)

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
//               onClick={() =>
//                 !speciality || speciality !== type
//                   ? navigate(type === 'All' ? '/doctors' : `/doctors/${type}`)
//                   : null
//               }
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
//           {paginatedDoctors.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => {
//                 navigate(`/appointment/${item._id}`)
//                 scrollTo(0, 0)
//               }}
//               className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
//             >
//               <img className='bg-[#EAEFFF]' src={item.image} alt='' />
//               <div className='p-4'>
//                 <div className={`flex items-center gap-2 text-sm ${item.available ? 'text-green-500' : 'text-gray-500'}`}>
//                   <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : 'bg-gray-500'}`}></p>
//                   <p>{item.available ? 'Available' : 'Not Available'}</p>
//                 </div>
//                 <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
//                 <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pagination */}
//       {totalPages >= 1 && (
//         <div className='flex justify-center mt-6 gap-2'>
//           {Array.from({ length: totalPages }).map((_, i) => (
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
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const ITEMS_PER_PAGE = 6

const Doctors = () => {
  const { speciality } = useParams()
  const navigate = useNavigate()
  const { backendUrl, token } = useContext(AppContext);
  const [filteredDoctors, setFilteredDoctors] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const allSpecialities = [
    'All',
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist'
  ]

const fetchDoctors = async () => {
  console.log(token);
  
  setLoading(true)
  try {
      const url =
        speciality && speciality !== 'All'
          ? `${backendUrl}/api/user/all-doctors?speciality=${encodeURIComponent(speciality)}`
          : `${backendUrl}/api/user/all-doctors`

      const res = await axios.get(url,{
          headers: { token }
      })

    setFilteredDoctors(res.data.doctors || [])
    setCurrentPage(1)
  } catch (err) {
    console.error('Failed to fetch doctors:', err)
    setFilteredDoctors([])
  }
  setLoading(false)
}


  useEffect(() => {
    fetchDoctors()
  }, [speciality])

  const paginatedDoctors = filteredDoctors.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const totalPages = Math.ceil(filteredDoctors.length / ITEMS_PER_PAGE)

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        {/* Filter Toggle (for small screens) */}
        <button
          onClick={() => setShowFilter(!showFilter)}
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}
        >
          Filters
        </button>

        {/* Speciality Filters */}
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          {allSpecialities.map((type, i) => (
            <p
              key={i}
              onClick={() => {
                if (!speciality || speciality !== type) {
                  navigate(type === 'All' ? '/doctors' : `/doctors/${type}`)
                }
              }}
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                (!speciality && type === 'All') || speciality === type ? 'bg-[#E2E5FF] text-black' : ''
              }`}
            >
              {type}
            </p>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {loading ? (
            <p className='text-gray-500 text-center col-span-full'>Loading doctors...</p>
          ) : paginatedDoctors.length > 0 ? (
            paginatedDoctors.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  navigate(`/appointment/${item._id}`)
                  scrollTo(0, 0)
                }}
                className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
              >
                <img className='bg-[#EAEFFF] w-full max-h-45' src={item.image || 'https://res.cloudinary.com/dolaccvrd/image/upload/v1744611708/v8i0ktcadocx6khckgp1.jpg'} alt={item.name} />
                <div className='p-4'>
                  <div className={`flex items-center gap-2 text-sm ${item.available ? 'text-green-500' : 'text-gray-500'}`}>
                    <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : 'bg-gray-500'}`}></p>
                    <p>{item.available ? 'Available' : 'Not Available'}</p>
                  </div>
                  <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                  <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p className='text-center col-span-full text-gray-500'>No doctors found.</p>
          )}
        </div>
      </div>

      {/* Pagination */}
      {totalPages >= 1 && (
        <div className='flex justify-center mt-6 gap-2'>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded border ${
                currentPage === i + 1 ? 'bg-primary text-white' : 'bg-white text-gray-700'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Doctors
