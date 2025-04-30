// import React, { useContext } from 'react'
// import { assets } from '../assets/assets'
// import { DoctorContext } from '../context/DoctorContext'
// import { AdminContext } from '../context/AdminContext'
// import { useNavigate } from 'react-router-dom'

// const Navbar = () => {

//   const { dToken, setDToken } = useContext(DoctorContext)
//   const { aToken, setAToken } = useContext(AdminContext)

//   const navigate = useNavigate()

//   const logout = () => {
//     navigate('/')
//     dToken && setDToken('')
//     dToken && localStorage.removeItem('dToken')
//     aToken && setAToken('')
//     aToken && localStorage.removeItem('aToken')
//   }

//   return (
//     <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
//       <div className='flex items-center gap-2 text-xs'>
//         <img onClick={() => navigate('/')} className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" />
//         <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin' : 'Doctor'}</p>
//       </div>
//       <button onClick={() => logout()} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
//     </div>
//   )
// }

// export default Navbar



import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const { dToken, setDToken } = useContext(DoctorContext)
  const { aToken, setAToken } = useContext(AdminContext)
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)  // Trạng thái để hiển thị modal

  const logout = () => {
    navigate('/')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex items-center gap-2 text-xs'>
        <img onClick={() => navigate('/')} className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" />
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin' : 'Doctor'}</p>
      </div>
      <button 
        onClick={() => setShowModal(true)} 
        className='bg-primary text-white text-sm px-10 py-2 rounded-full'>
        Logout
      </button>

      {/* Modal Confirmation */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            className='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50'
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className='bg-white rounded-xl p-6 shadow-lg w-96'
              initial={{ scale: 0.8 }} 
              animate={{ scale: 1 }} 
              exit={{ scale: 0.8 }}
            >
              <p className='text-lg font-semibold text-gray-700 mb-4'>
                Are you sure you want to log out?
              </p>
              <div className='flex justify-end gap-3'>
                <button
                  onClick={() => setShowModal(false)}  // Đóng modal nếu chọn "No"
                  className='px-4 py-1 border rounded text-gray-500 hover:bg-gray-100'
                >
                  No
                </button>
                <button
                  onClick={() => {
                    logout()
                    setShowModal(false)  // Đăng xuất và đóng modal
                  }}
                  className='px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700'
                >
                  Yes, Logout
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
