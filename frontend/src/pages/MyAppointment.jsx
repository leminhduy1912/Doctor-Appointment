





import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'
import { motion, AnimatePresence } from 'framer-motion'

const MyAppointments = () => {
    const { backendUrl, token } = useContext(AppContext)
    const navigate = useNavigate()

    const [appointments, setAppointments] = useState([])
    const [payment, setPayment] = useState('')
    const [confirmModal, setConfirmModal] = useState({ open: false, id: null })
    const [vnpayModal, setVnpayModal] = useState({ open: false, appointmentId: null })

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_')
        return `${dateArray[0]} ${months[Number(dateArray[1])]} ${dateArray[2]}`
    }

    const renderStatusBadge = (status) => {
        let color = ''
        let label = status

        switch (status.toLowerCase()) {
            case 'pending':
                color = 'bg-yellow-100 text-yellow-700 border-yellow-400'
                label = 'Pending'
                break
            case 'cancelled':
                color = 'bg-red-100 text-red-700 border-red-400'
                label = 'Cancelled'
                break
            case 'confirmed':
            case 'completed':
                color = 'bg-green-100 text-green-700 border-green-400'
                label = 'Confirmed'
                break
            case 'waiting for payment':
                color = 'bg-blue-100 text-blue-700 border-blue-400'
                label = 'Waiting for Payment'
                break
            default:
                color = 'bg-gray-100 text-gray-600 border-gray-300'
        }

        return (
            <span className={`inline-block px-2 py-1 text-xs font-semibold border rounded ${color}`}>
                {label}
            </span>
        )
    }

    const getUserAppointments = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/user/appointments`, {
                headers: { token }
            })
            setAppointments(data.appointments.reverse())
        } catch (error) {
            toast.error(error.message)
        }
    }

    const cancelAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(
                `${backendUrl}/api/user/cancel-appointment`,
                { appointmentId },
                { headers: { token } }
            )
            if (data.success) {
                toast.success(data.message)
                setConfirmModal({ open: false, id: null })
                getUserAppointments()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const handleVNPAYPayment = async () => {
        try {
            const payload = {
                amount: 100000,
                bankCode: 'NCB',
                language: 'vn'
            }
            const { data } = await axios.post(`${backendUrl}/order/create_payment_url`, payload)
            console.log(data);
            
            if (data?.url) {
                window.location.href = data.url
            } else {
                toast.error('Failed to initiate payment.')
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (token) getUserAppointments()
    }, [token])

    return (
        <div>
            <p className='pb-3 mt-12 text-lg font-medium text-gray-600 border-b'>My appointments</p>
            <div>
                {appointments.map((item, index) => (
                    <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b'>
                        <div>
                            <img className='w-36 bg-[#EAEFFF]' src={item.docData.image} alt="" />
                        </div>
                        <div className='flex-1 text-sm text-[#5E5E5E]'>
                            <p className='text-[#262626] text-base font-semibold'>{item.docData.name}</p>
                            <p>{item.docData.speciality}</p>
                            <p className='mt-1'><span className='text-sm text-[#3C3C3C] font-medium'>Date & Time:</span> {item.slotDate} | {item.slotTime}</p>
                            <p className='mt-1'>
                                <span className='text-sm text-[#3C3C3C] font-medium'>Status:</span> {renderStatusBadge(item.status)}
                            </p>
                        </div>
                        <div className='flex flex-col gap-2 justify-end text-sm text-center'>
                            {item.status === "Waiting for payment" && !item.payment &&
                              <button
                              onClick={() => {
                                localStorage.setItem("slotId", item._id); 
                                setVnpayModal({ open: true, appointmentId: item._id });
                              }}
                              className="text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300"
                            >
                              Pay Online
                            </button>
                            
                            }

                            {item.payment && !item.cancelled && !item.isCompleted &&
                                <button className='sm:min-w-48 py-2 border rounded text-[#696969] bg-[#EAEFFF]'>Paid</button>
                            }

                            {item.isCompleted &&
                                <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>Completed</button>
                            }

                            {!item.cancelled && !item.isCompleted &&
                                <button onClick={() => setConfirmModal({ open: true, id: item.slotId })} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>
                                    Cancel appointment
                                </button>
                            }

                            {item.cancelled && !item.isCompleted &&
                                <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment cancelled</button>
                            }
                        </div>
                    </div>
                ))}
            </div>

            {/* Cancel Modal */}
            <AnimatePresence>
                {confirmModal.open && (
                    <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <motion.div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300 }}>
                            <h2 className="text-lg font-semibold mb-4">Are you sure you want to cancel this appointment?</h2>
                            <div className="flex justify-center gap-4 mt-6">
                                <button onClick={() => setConfirmModal({ open: false, id: null })} className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100">No</button>
                                <button onClick={() => cancelAppointment(confirmModal.id)} className="px-4 py-2 border bg-red-500 text-white rounded hover:bg-red-600">Yes, Cancel</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* VNPAY Modal */}
            <AnimatePresence>
                {vnpayModal.open && (
                    <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <motion.div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300 }}>
                            <h2 className="text-lg font-semibold mb-4">Select Payment Method</h2>
                            <div className='flex justify-center'>
                                <img src="https://vnpay.vn/s1/statics.vnpay.vn/2023/9/06ncktiwd6dc1694418196384.png" alt="vnpay" className='w-32 h-auto' />
                            </div>
                            <p className='text-sm mt-4'>Bank: <strong>NCB</strong></p>
                            <div className="flex justify-center gap-4 mt-6">
                                <button onClick={() => setVnpayModal({ open: false, appointmentId: null })} className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100">Cancel</button>
                                <button onClick={handleVNPAYPayment} className="px-4 py-2 border bg-blue-600 text-white rounded hover:bg-blue-700">Pay with VNPAY</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default MyAppointments
