
import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const DoctorAppointments = () => {
  const { dToken, appointments, getAppointments, cancelAppointment, completeAppointment } = useContext(DoctorContext)
  const { currency } = useContext(AppContext)

  useEffect(() => {
    if (dToken) {
      getAppointments()
    }
  }, [dToken])

  return (
    <div className='w-full max-w-6xl m-5'>
      <p className='mb-3 text-lg font-semibold text-gray-800'>All Appointments</p>

      <div className='bg-white border rounded shadow text-sm max-h-[80vh] overflow-y-auto'>

        {/* Table Header */}
        <div className='hidden sm:grid grid-cols-[40px_1fr_1fr_1fr_1fr_1fr_1fr] gap-4 py-3 px-4 border-b font-semibold text-gray-600 bg-gray-50 sticky top-0 z-10'>
          <p className='text-center'>#</p>
          <p className='text-center'>Patient</p>
          <p className='text-center'>Email</p>
          <p className='text-center'>Date</p>
          <p className='text-center'>Time</p>
          <p className='text-center'>Fees</p>
          <p className='text-center'>Action</p>
        </div>

        {/* Table Body */}
        {appointments.map((item, index) => (
          <div
            key={index}
            className='grid sm:grid-cols-[40px_1fr_1fr_1fr_1fr_1fr_1fr] grid-cols-1 gap-4 items-center py-4 px-4 border-b hover:bg-gray-50 transition-all'
          >
            {/* Index */}
            <p className='hidden sm:block text-center font-medium'>{index + 1}</p>

            {/* Patient */}
            <p className='sm:block hidden text-center truncate'>{item.userData?.name || 'Unknown'}</p>

            {/* Email */}
            <p className='sm:block hidden text-center truncate sm:max-w-[160px]' title={item.userData?.email}>
              {item.userData?.email}
            </p>

            {/* Date */}
            <p className='sm:block hidden text-center whitespace-nowrap'>{item.slotDate}</p>

            {/* Time */}
            <p className='sm:block hidden text-center whitespace-nowrap'>{item.slotTime}</p>

            {/* Fees */}
            <p className='sm:block hidden text-center'>{currency}{item.amount}</p>

            {/* Action */}
            <div className='sm:flex hidden justify-center items-center gap-2'>
              {item.cancelled ? (
                <span className='text-red-500 text-xs font-semibold'>Cancelled</span>
              ) : item.isCompleted ? (
                <span className='text-green-600 text-xs font-semibold'>Completed</span>
              ) : (
                <>
                  <img
                    onClick={() => cancelAppointment(item._id)}
                    src={assets.cancel_icon}
                    className='w-6 h-6 cursor-pointer hover:scale-110 transition'
                    alt='cancel'
                  />
                  <img
                    onClick={() => completeAppointment(item._id)}
                    src={assets.tick_icon}
                    className='w-6 h-6 cursor-pointer hover:scale-110 transition'
                    alt='complete'
                  />
                </>
              )}
            </div>

            {/* Mobile View */}
            <div className='sm:hidden'>
              <p className='text-sm'><strong>Patient:</strong> {item.userData?.name}</p>
              <p className='text-sm'><strong>Email:</strong> {item.userData?.email}</p>
              <p className='text-sm'><strong>Date:</strong> {item.slotDate}</p>
              <p className='text-sm'><strong>Time:</strong> {item.slotTime}</p>
              <p className='text-sm'><strong>Fees:</strong> {currency}{item.amount}</p>
              <p className='text-sm mt-1'><strong>Action:</strong></p>
              <div className='flex gap-2 mt-1'>
                {item.cancelled ? (
                  <span className='text-red-500 text-xs font-semibold'>Cancelled</span>
                ) : item.isCompleted ? (
                  <span className='text-green-600 text-xs font-semibold'>Completed</span>
                ) : (
                  <>
                    <img
                      onClick={() => cancelAppointment(item._id)}
                      src={assets.cancel_icon}
                      className='w-6 h-6 cursor-pointer hover:scale-110 transition'
                      alt='cancel'
                    />
                    <img
                      onClick={() => completeAppointment(item._id)}
                      src={assets.tick_icon}
                      className='w-6 h-6 cursor-pointer hover:scale-110 transition'
                      alt='complete'
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorAppointments
