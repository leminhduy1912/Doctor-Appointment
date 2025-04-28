import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { motion, AnimatePresence } from 'framer-motion'
import Loading from '../components/Loading'

const MyAppointments = () => {
    const { backendUrl, token } = useContext(AppContext)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [appointments, setAppointments] = useState([])
    const [confirmModal, setConfirmModal] = useState({ open: false, id: null, doctorId: null })
    const [cancelReason, setCancelReason] = useState('')
    const [vnpayModal, setVnpayModal] = useState({ open: false, appointmentId: null })
    const [joinModal, setJoinModal] = useState({ open: false, link: null })

    const getUserAppointments = async () => {
        try {
            setIsLoading(true)
            const { data } = await axios.get(`${backendUrl}/api/user/appointments`, {
                headers: { token }
            })
            setAppointments(data.appointments.reverse())
        } catch (error) {
            toast.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const cancelAppointment = async (appointmentId, doctorId, reason) => {
        try {
            setIsLoading(true)
            const token = localStorage.getItem('token')
            console.log("token",token)
            const { data } = await axios.post(`${backendUrl}/api/user/cancel-appointment`,
                { doctorId, appointmentId, reason },
                { headers: { token } }
            )
            if (data.success) {
                toast.success(data.message)
                setConfirmModal({ open: false, id: null, doctorId: null })
                setCancelReason('')
                getUserAppointments()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const handleVNPAYPayment = async () => {
        try {
            const payload = { amount: 100000, bankCode: 'NCB', language: 'vn' }
            const { data } = await axios.post(`${backendUrl}/order/create_payment_url`, payload)
            if (data?.url) window.location.href = data.url
            else toast.error('Failed to initiate payment.')
        } catch (error) {
            toast.error(error.message)
        }
    }

    const renderStatusBadge = (status) => {
        const styles = {
            pending: 'bg-yellow-100 text-yellow-700 border-yellow-400',
            'waiting for payment': 'bg-blue-100 text-blue-700 border-blue-400',
            booked: 'bg-purple-100 text-purple-700 border-purple-400',
            done: 'bg-green-100 text-green-700 border-green-400'
        }
        return (
            <span className={`inline-block px-2 py-1 text-xs font-semibold border rounded ${styles[status.toLowerCase()] || 'bg-gray-100 text-gray-600 border-gray-300'}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        )
    }

    const handleJoinRoom = (link) => {
        setJoinModal({ open: true, link })
    }

    const confirmJoinRoom = () => {
        if (joinModal.link) {
            window.open(joinModal.link, '_blank')
        }
        setJoinModal({ open: false, link: null })
    }

    useEffect(() => {
        if (token) getUserAppointments()
    }, [token])

    return (
        <div>
            {isLoading && <Loading />}
            <p className='pb-3 mt-12 text-lg font-medium text-gray-600 border-b'>My appointments</p>
            <div>
                {appointments.map((item, index) => (
                    <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b'>
                        <img className='w-36 bg-[#EAEFFF]' src={item.docData.image} alt="" />
                        <div className='flex-1 text-sm text-[#5E5E5E]'>
                            <p className='text-[#262626] text-base font-semibold'>{item.docData.name}</p>
                            <p>{item.docData.speciality}</p>
                            <p className='mt-1'><span className='font-medium text-[#3C3C3C]'>Date & Time:</span> {item.slotDate} | {item.slotTime}</p>
                            <p className='mt-1'><span className='font-medium text-[#3C3C3C]'>Status:</span> {renderStatusBadge(item.status)}</p>
                        </div>
                        <div className='flex flex-col gap-2 justify-end text-sm text-center'>
                            {item.status === "Waiting for payment" && !item.payment && (
                                <button
                                    onClick={() => {
                                        localStorage.setItem("slotId", item.slotId)
                                        localStorage.setItem("docId", item.docData._id)
                                        localStorage.setItem("fee", item.amount)
                                        setVnpayModal({ open: true, appointmentId: item._id })
                                    }}
                                    className="sm:min-w-48 py-2 border rounded text-[#696969] hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    Pay Online
                                </button>
                            )}
                            {item.payment && !item.cancelled && !item.isCompleted && (
                                <button className='sm:min-w-48 py-2 border rounded bg-[#EAEFFF] text-[#696969]'>Paid</button>
                            )}
                            {item.isCompleted && (
                                <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>Completed</button>
                            )}
                            {item.status !== "Booked" && (
                                <button
                                    onClick={() => setConfirmModal({ open: true, id: item._id, doctorId: item.docData._id })}
                                    className='sm:min-w-48 py-2 border rounded text-[#696969] hover:bg-red-600 hover:text-white transition-all duration-300'
                                >
                                    Cancel appointment
                                </button>
                            )}
                            {item.status === "Booked" && (
                                <button
                                    onClick={() => handleJoinRoom(item.linkMeet)}
                                    className='sm:min-w-48 py-2 border rounded text-[#696969] hover:bg-green-600 hover:text-white transition-all duration-300'
                                >
                                    Join Room
                                </button>
                            )}
                            {item.cancelled && !item.isCompleted && (
                                <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment cancelled</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Cancel Modal */}
            <AnimatePresence>
                {confirmModal.open && (
                    <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <motion.div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full"
                            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300 }}>
                            <h2 className="text-lg font-semibold mb-4">Are you sure you want to cancel this appointment?</h2>
                            <input
                                type="text"
                                value={cancelReason}
                                onChange={(e) => setCancelReason(e.target.value)}
                                placeholder="Enter your reason..."
                                className="w-full px-4 py-2 mt-4 border rounded"
                            />
                            <div className="flex justify-center gap-4 mt-6">
                                <button
                                    onClick={() => {
                                        setConfirmModal({ open: false, id: null, doctorId: null });
                                        setCancelReason('');
                                    }}
                                    className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100">
                                    No
                                </button>
                                <button
                                    onClick={() => {
                                        if (cancelReason.trim() === '') {
                                            toast.error('Please enter a reason before proceeding.')
                                        } else {
                                            cancelAppointment(confirmModal.id, confirmModal.doctorId, cancelReason)
                                        }
                                    }}
                                    className="px-4 py-2 border bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Confirm
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* VNPAY Modal */}
            <AnimatePresence>
                {vnpayModal.open && (
                    <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <motion.div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full"
                            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300 }}>
                            <h2 className="text-lg font-semibold mb-4">Select Payment Method</h2>
                            <img src="https://vnpay.vn/s1/statics.vnpay.vn/2023/9/06ncktiwd6dc1694418196384.png" alt="vnpay" className='w-32 mx-auto mt-2' />
                            <p className='text-sm mt-4'>Bank: <strong>NCB</strong></p>
                            <div className="flex justify-center gap-4 mt-6">
                                <button onClick={() => {
                                    setVnpayModal({ open: false, appointmentId: null });
                                    localStorage.removeItem("slotId");
                                    localStorage.removeItem("docId");
                                    localStorage.removeItem("fee");
                                }} className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100">Cancel</button>
                                <button onClick={handleVNPAYPayment} className="px-4 py-2 border bg-blue-600 text-white rounded hover:bg-blue-700">Pay with VNPAY</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Join Call Modal */}
            <AnimatePresence>
                {joinModal.open && (
                    <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <motion.div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full"
                            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300 }}>
                            <h2 className="text-lg font-semibold mb-4">Do you want to join the video call?</h2>
                            <div className="flex justify-center gap-4 mt-6">
                                <button onClick={() => setJoinModal({ open: false, link: null })} className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100">No</button>
                                <button onClick={confirmJoinRoom} className="px-4 py-2 border bg-green-600 text-white rounded hover:bg-green-700">Yes, Join</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default MyAppointments
