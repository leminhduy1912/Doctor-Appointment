// import React, { useContext, useState } from 'react'
// import { assets } from '../../assets/assets'
// import { toast } from 'react-toastify'
// import axios from 'axios'
// import { AdminContext } from '../../context/AdminContext'
// import { AppContext } from '../../context/AppContext'

// const AddSchedule = () => {

//     const [docImg, setDocImg] = useState(false)
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [experience, setExperience] = useState('1 Year')
//     const [fees, setFees] = useState('')
//     const [about, setAbout] = useState('')
//     const [speciality, setSpeciality] = useState('General physician')
//     const [degree, setDegree] = useState('')
//     const [address1, setAddress1] = useState('')
//     const [address2, setAddress2] = useState('')
//     const [schedules, setSchedules] = useState([
//         { day: 'Monday', date: '', startTime: '', endTime: '' },
//     ])

//     const { backendUrl } = useContext(AppContext)
//     const { aToken } = useContext(AdminContext)

//     const addSchedule = () => {
//         setSchedules([...schedules, { day: 'Monday', date: '', startTime: '', endTime: '' }])
//     }

//     const removeSchedule = (index) => {
//         const updated = schedules.filter((_, i) => i !== index)
//         setSchedules(updated)
//     }

//     const handleScheduleChange = (index, field, value) => {
//         const updated = [...schedules]
//         updated[index][field] = value
//         setSchedules(updated)
//     }

//     const onSubmitHandler = async (event) => {
//         event.preventDefault()

//         try {
//             if (!docImg) {
//                 return toast.error('Image Not Selected')
//             }

//             const formData = new FormData();

//             formData.append('image', docImg)
//             formData.append('name', name)
//             formData.append('email', email)
//             formData.append('password', password)
//             formData.append('experience', experience)
//             formData.append('fees', Number(fees))
//             formData.append('about', about)
//             formData.append('speciality', speciality)
//             formData.append('degree', degree)
//             formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))
//             formData.append('schedule', JSON.stringify(schedules))

//             const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, {
//                 headers: { aToken }
//             })

//             if (data.success) {
//                 toast.success(data.message)
//                 // Reset fields
//                 setDocImg(false)
//                 setName('')
//                 setPassword('')
//                 setEmail('')
//                 setAddress1('')
//                 setAddress2('')
//                 setDegree('')
//                 setAbout('')
//                 setFees('')
//                 setSchedules([{ day: 'Monday', date: '', startTime: '', endTime: '' }])
//             } else {
//                 toast.error(data.message)
//             }

//         } catch (error) {
//             toast.error(error.message)
//             console.log(error)
//         }
//     }

//     return (
//         <form onSubmit={onSubmitHandler} className='m-5 w-full'>
//             <p className='mb-3 text-lg font-medium'>Add Doctor</p>

//             <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
//                 <div className='flex items-center gap-4 mb-8 text-gray-500'>
//                     <label htmlFor="doc-img">
//                         <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="" />
//                     </label>
//                     <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
//                     <p>Upload doctor <br /> picture</p>
//                 </div>

//                 <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>

//                     <div className='w-full lg:flex-1 flex flex-col gap-4'>

//                         <div className='flex-1 flex flex-col gap-1'>
//                             <p>Your name</p>
//                             <input onChange={e => setName(e.target.value)} value={name} className='border rounded px-3 py-2' type="text" placeholder='Name' required />
//                         </div>

//                         <div className='flex-1 flex flex-col gap-1'>
//                             <p>Doctor Email</p>
//                             <input onChange={e => setEmail(e.target.value)} value={email} className='border rounded px-3 py-2' type="email" placeholder='Email' required />
//                         </div>

//                         <div className='flex-1 flex flex-col gap-1'>
//                             <p>Set Password</p>
//                             <input onChange={e => setPassword(e.target.value)} value={password} className='border rounded px-3 py-2' type="password" placeholder='Password' required />
//                         </div>

//                         <div className='flex-1 flex flex-col gap-1'>
//                             <p>Experience</p>
//                             <select onChange={e => setExperience(e.target.value)} value={experience} className='border rounded px-2 py-2'>
//                                 {Array.from({ length: 10 }, (_, i) => (
//                                     <option key={i + 1} value={`${i + 1} Year`}>{i + 1} Year{(i + 1) > 1 ? 's' : ''}</option>
//                                 ))}
//                             </select>
//                         </div>

//                         <div className='flex-1 flex flex-col gap-1'>
//                             <p>Fees</p>
//                             <input onChange={e => setFees(e.target.value)} value={fees} className='border rounded px-3 py-2' type="number" placeholder='Doctor fees' required />
//                         </div>

//                     </div>

//                     <div className='w-full lg:flex-1 flex flex-col gap-4'>
//                         <div className='flex-1 flex flex-col gap-1'>
//                             <p>Speciality</p>
//                             <select onChange={e => setSpeciality(e.target.value)} value={speciality} className='border rounded px-2 py-2'>
//                                 <option value="General physician">General physician</option>
//                                 <option value="Gynecologist">Gynecologist</option>
//                                 <option value="Dermatologist">Dermatologist</option>
//                                 <option value="Pediatricians">Pediatricians</option>
//                                 <option value="Neurologist">Neurologist</option>
//                                 <option value="Gastroenterologist">Gastroenterologist</option>
//                             </select>
//                         </div>

//                         <div className='flex-1 flex flex-col gap-1'>
//                             <p>Degree</p>
//                             <input onChange={e => setDegree(e.target.value)} value={degree} className='border rounded px-3 py-2' type="text" placeholder='Degree' required />
//                         </div>

//                         <div className='flex-1 flex flex-col gap-1'>
//                             <p>Address</p>
//                             <input onChange={e => setAddress1(e.target.value)} value={address1} className='border rounded px-3 py-2' type="text" placeholder='Address 1' required />
//                             <input onChange={e => setAddress2(e.target.value)} value={address2} className='border rounded px-3 py-2' type="text" placeholder='Address 2' required />
//                         </div>
//                     </div>

//                 </div>

//                 <div>
//                     <p className='mt-4 mb-2'>About Doctor</p>
//                     <textarea onChange={e => setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border rounded' rows={5} placeholder='Write about doctor'></textarea>
//                 </div>

//                 {/* Working Schedule Section */}
//                 <div className='mt-6'>
//                     <p className='mb-2 text-lg font-medium'>Doctor Working Schedule</p>

//                     {schedules.map((schedule, index) => (
//                         <div key={index} className='mb-4 p-4 border rounded bg-gray-50 relative'>

//                             <button
//                                 type='button'
//                                 className='absolute top-2 right-2 text-red-500 font-bold text-xl'
//                                 onClick={() => removeSchedule(index)}
//                             >
//                                 −
//                             </button>

//                             <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
//                                 <div className='flex flex-col'>
//                                     <label className='text-sm mb-1'>Day</label>
//                                     <select
//                                         value={schedule.day}
//                                         onChange={(e) => handleScheduleChange(index, 'day', e.target.value)}
//                                         className='border px-2 py-2 rounded'
//                                     >
//                                         {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
//                                             <option key={day} value={day}>{day}</option>
//                                         ))}
//                                     </select>
//                                 </div>

//                                 <div className='flex flex-col'>
//                                     <label className='text-sm mb-1'>Date (optional)</label>
//                                     <input
//                                         type='date'
//                                         value={schedule.date}
//                                         onChange={(e) => handleScheduleChange(index, 'date', e.target.value)}
//                                         className='border px-3 py-2 rounded'
//                                     />
//                                 </div>

//                                 <div className='flex flex-col'>
//                                     <label className='text-sm mb-1'>Start Time</label>
//                                     <input
//                                         type='time'
//                                         value={schedule.startTime}
//                                         onChange={(e) => handleScheduleChange(index, 'startTime', e.target.value)}
//                                         className='border px-3 py-2 rounded'
//                                         required
//                                     />
//                                 </div>

//                                 <div className='flex flex-col'>
//                                     <label className='text-sm mb-1'>End Time</label>
//                                     <input
//                                         type='time'
//                                         value={schedule.endTime}
//                                         onChange={(e) => handleScheduleChange(index, 'endTime', e.target.value)}
//                                         className='border px-3 py-2 rounded'
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     ))}

//                     <button
//                         type='button'
//                         onClick={addSchedule}
//                         className='text-primary mt-2 font-semibold'
//                     >
//                         + Add More Time Slot
//                     </button>
//                 </div>

//                 <button type='submit' className='bg-primary px-10 py-3 mt-6 text-white rounded-full'>Add doctor</button>
//             </div>
//         </form>
//     )
// }

// export default AddSchedule
