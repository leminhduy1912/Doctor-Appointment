import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'
import { motion, AnimatePresence } from 'framer-motion'

// const MyAppointments = () => {

//     const { backendUrl, token } = useContext(AppContext)
//     const navigate = useNavigate()

//     const [appointments, setAppointments] = useState([])
//     const [payment, setPayment] = useState('')

//     const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//     // Function to format the date eg. ( 20_01_2000 => 20 Jan 2000 )
//     const slotDateFormat = (slotDate) => {
//         const dateArray = slotDate.split('_')
//         return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
//     }

//     // Function to render status badge with different colors
//     const renderStatusBadge = (status) => {
//         let color = ''
//         let label = status

//         switch (status.toLowerCase()) {
//             case 'pending':
//                 color = 'bg-yellow-100 text-yellow-700 border-yellow-400'
//                 label = 'Pending'
//                 break
//             case 'cancelled':
//                 color = 'bg-red-100 text-red-700 border-red-400'
//                 label = 'Cancelled'
//                 break
//             case 'confirmed':
//             case 'completed': // optionally treat completed same
//                 color = 'bg-green-100 text-green-700 border-green-400'
//                 label = 'Confirmed'
//                 break
//             default:
//                 color = 'bg-gray-100 text-gray-600 border-gray-300'
//                 label = status
//         }

//         return (
//             <span className={`inline-block px-2 py-1 text-xs font-semibold border rounded ${color}`}>
//                 {label}
//             </span>
//         )
//     }

//     // Getting User Appointments Data Using API
//     const getUserAppointments = async () => {
//         try {
//             const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })
//             setAppointments(data.appointments.reverse())
//         } catch (error) {
//             console.log(error)
//             toast.error(error.message)
//         }
//     }

//     // Function to cancel appointment Using API
//     const cancelAppointment = async (appointmentId) => {
//         console.log("apm id",appointmentId);
        
//         // try {
//         //     const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })
//         //     if (data.success) {
//         //         toast.success(data.message)
//         //         getUserAppointments()
//         //     } else {
//         //         toast.error(data.message)
//         //     }
//         // } catch (error) {
//         //     console.log(error)
//         //     toast.error(error.message)
//         // }
//     }

//     const initPay = (order) => {
//         const options = {
//             key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//             amount: order.amount,
//             currency: order.currency,
//             name: 'Appointment Payment',
//             description: "Appointment Payment",
//             order_id: order.id,
//             receipt: order.receipt,
//             handler: async (response) => {
//                 console.log(response)

//                 try {
//                     const { data } = await axios.post(backendUrl + "/api/user/verifyRazorpay", response, { headers: { token } });
//                     if (data.success) {
//                         navigate('/my-appointments')
//                         getUserAppointments()
//                     }
//                 } catch (error) {
//                     console.log(error)
//                     toast.error(error.message)
//                 }
//             }
//         };
//         const rzp = new window.Razorpay(options);
//         rzp.open();
//     };

//     // Function to make payment using razorpay
//     const appointmentRazorpay = async (appointmentId) => {
//         try {
//             const { data } = await axios.post(backendUrl + '/api/user/payment-razorpay', { appointmentId }, { headers: { token } })
//             if (data.success) {
//                 initPay(data.order)
//             } else {
//                 toast.error(data.message)
//             }
//         } catch (error) {
//             console.log(error)
//             toast.error(error.message)
//         }
//     }

//     // Function to make payment using stripe
//     const appointmentStripe = async (appointmentId) => {
//         try {
//             const { data } = await axios.post(backendUrl + '/api/user/payment-stripe', { appointmentId }, { headers: { token } })
//             if (data.success) {
//                 const { session_url } = data
//                 window.location.replace(session_url)
//             } else {
//                 toast.error(data.message)
//             }
//         } catch (error) {
//             console.log(error)
//             toast.error(error.message)
//         }
//     }

//     useEffect(() => {
//         if (token) {
//             getUserAppointments()
//         }
//     }, [token])

//     return (
//         <div>
//             <p className='pb-3 mt-12 text-lg font-medium text-gray-600 border-b'>My appointments</p>
//             <div>
//                 {appointments.map((item, index) => (
//                     <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b'>
//                         <div>
//                             <img className='w-36 bg-[#EAEFFF]' src={item.docData.image} alt="" />
//                         </div>
//                         <div className='flex-1 text-sm text-[#5E5E5E]'>
//                             <p className='text-[#262626] text-base font-semibold'>{item.docData.name}</p>
//                             <p>{item.docData.speciality}</p>
//                             <p className=' mt-1'><span className='text-sm text-[#3C3C3C] font-medium'>Date & Time:</span> {item.slotDate} |  {item.slotTime}</p>
//                             <p className='mt-1'>
//                                 <span className='text-sm text-[#3C3C3C] font-medium'>Status:</span> {renderStatusBadge(item.status)}
//                             </p>
//                         </div>
//                         <div></div>
//                         <div className='flex flex-col gap-2 justify-end text-sm text-center'>
//                             {!item.cancelled && !item.payment && !item.isCompleted && payment !== item._id && <button onClick={() => setPayment(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>}
//                             {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && <button onClick={() => appointmentStripe(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-gray-100 hover:text-white transition-all duration-300 flex items-center justify-center'><img className='max-w-20 max-h-5' src={assets.stripe_logo} alt="" /></button>}
//                             {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && <button onClick={() => appointmentRazorpay(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-gray-100 hover:text-white transition-all duration-300 flex items-center justify-center'><img className='max-w-20 max-h-5' src={assets.razorpay_logo} alt="" /></button>}
//                             {!item.cancelled && item.payment && !item.isCompleted && <button className='sm:min-w-48 py-2 border rounded text-[#696969]  bg-[#EAEFFF]'>Paid</button>}

//                             {item.isCompleted && <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>Completed</button>}

//                             {!item.cancelled && !item.isCompleted && <button onClick={() => cancelAppointment(item.slotId)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel appointment</button>}
//                             {item.cancelled && !item.isCompleted && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment cancelled</button>}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default MyAppointments
const MyAppointments = () => {
    const { backendUrl, token } = useContext(AppContext)
    const navigate = useNavigate()

    const [appointments, setAppointments] = useState([])
    const [payment, setPayment] = useState('')
    const [confirmModal, setConfirmModal] = useState({ open: false, id: null })

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
            const { data } = await axios.get(`${backendUrl}/api/user/appointments`, { headers: { token } })
            setAppointments(data.appointments.reverse())
        } catch (error) {
            toast.error(error.message)
        }
    }

    const cancelAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(`${backendUrl}/api/user/cancel-appointment`, { appointmentId }, { headers: { token } })
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

    const initPay = (order) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'Appointment Payment',
            description: "Appointment Payment",
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {
                try {
                    const { data } = await axios.post(`${backendUrl}/api/user/verifyRazorpay`, response, { headers: { token } });
                    if (data.success) {
                        navigate('/my-appointments')
                        getUserAppointments()
                    }
                } catch (error) {
                    toast.error(error.message)
                }
            }
        };
        const rzp = new window.Razorpay(options)
        rzp.open()
    }

    const appointmentRazorpay = async (appointmentId) => {
        try {
            const { data } = await axios.post(`${backendUrl}/api/user/payment-razorpay`, { appointmentId }, { headers: { token } })
            if (data.success) initPay(data.order)
            else toast.error(data.message)
        } catch (error) {
            toast.error(error.message)
        }
    }

    const appointmentStripe = async (appointmentId) => {
        try {
            const { data } = await axios.post(`${backendUrl}/api/user/payment-stripe`, { appointmentId }, { headers: { token } })
            if (data.success) window.location.replace(data.session_url)
            else toast.error(data.message)
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
                            {item.status === "Waiting for payment" && !item.payment && !item.cancelled && !item.isCompleted && payment !== item._id &&
                                <button onClick={() => setPayment(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>
                                    Pay Online
                                </button>
                            }

                            {item.status === "waiting for payment" && !item.cancelled && payment === item._id &&
                                <>
                                    <button onClick={() => appointmentStripe(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-gray-100 transition-all duration-300 flex items-center justify-center'>
                                        <img className='max-w-20 max-h-5' src={assets.stripe_logo} alt="" />
                                    </button>
                                    <button onClick={() => appointmentRazorpay(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-gray-100 transition-all duration-300 flex items-center justify-center'>
                                        <img className='max-w-20 max-h-5' src={assets.razorpay_logo} alt="" />
                                    </button>
                                </>
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
        </div>
    )
}
export default MyAppointments