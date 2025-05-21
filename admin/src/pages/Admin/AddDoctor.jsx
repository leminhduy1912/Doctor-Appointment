// import React, { useContext, useState } from 'react'
// import { assets } from '../../assets/assets'
// import { toast } from 'react-toastify'
// import axios from 'axios'
// import { AdminContext } from '../../context/AdminContext'
// import { AppContext } from '../../context/AppContext'
// import Loading from '../../components/Loader'

// const AddDoctor = () => {

//     const [docImg, setDocImg] = useState(false)
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [experience, setExperience] = useState('1 Year')
//     const [fees, setFees] = useState('')
//     const [about, setAbout] = useState('')
//     const [speciality, setSpeciality] = useState('General physician')
//     const [degree, setDegree] = useState('')
//     const [address, setAddress] = useState('')

// const [phoneNumber,setPhoneNumber] = useState('')
// const [isLoading,setIsLoading] = useState(false)
//     const { backendUrl } = useContext(AppContext)
//     const { aToken } = useContext(AdminContext)
//     const resetForm = () => {
//         setDocImg(false);
//         setName('');
//         setEmail('');
//         setPassword('');
//         setExperience('1 Year');
//         setFees('');
//         setAbout('');
//         setSpeciality('General physician');
//         setDegree('');
//         setAddress('');
     
//         setPhoneNumber('');
//     };
    
// const onSubmitHandler = async (event) => {
//   event.preventDefault();

//   try {
//     setIsLoading(true);

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("password", password);
//     formData.append("experience", experience);
//     formData.append("fees", fees);
//     formData.append("about", about);
//     formData.append("speciality", speciality);
//     formData.append("degree", degree);
//     formData.append("phoneNumber", phoneNumber);
//     // Gửi address dưới dạng JSON string
//     formData.append("address", address);
//     // Gửi ảnh nếu có
//     if (docImg) {
//       formData.append("image", docImg);
//     }
//     const { data } = await axios.post(
//       backendUrl + '/api/admin/add-doctor',
//       formData,
//       { headers: { aToken } }
//     );

//     console.log("data", data);

//     if (data.success) {
//       toast.success("Added new doctor successfully!");
//       resetForm();
//     } else {
//       toast.error(data.message);
//     }
//   } catch (error) {
//     const errorMsg = error.response?.data?.message || "Something went wrong!";
//     toast.error(errorMsg);
//     console.error("Error:", errorMsg);
//   } finally {
//     setIsLoading(false);
//   }
// };

    
//     return (
//         <>
//         {isLoading && <Loading/>}
//         <form onSubmit={onSubmitHandler} className='m-5 w-full'>

// <p className='mb-3 text-lg font-medium'>Add Doctor</p>

// <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
//     <div className='flex items-center gap-4 mb-8 text-gray-500'>
//         <label htmlFor="doc-img">
//             <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="" />
//         </label>
//         <input onChange={(e) => setDocImg(e.target.files[0])} type="file" name="" id="doc-img" hidden />
//         <p>Upload doctor <br /> picture</p>
//     </div>

//     <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>

//         <div className='w-full lg:flex-1 flex flex-col gap-4'>

//             <div className='flex-1 flex flex-col gap-1'>
//                 <p>Your name</p>
//                 <input onChange={e => setName(e.target.value)} value={name} className='border rounded px-3 py-2' type="text" placeholder='Name' required />
//             </div>

//             <div className='flex-1 flex flex-col gap-1'>
//                 <p>Doctor Email</p>
//                 <input onChange={e => setEmail(e.target.value)} value={email} className='border rounded px-3 py-2' type="email" placeholder='Email' required />
//             </div>

//             <div className='flex-1 flex flex-col gap-1'>
//                 <p>Set Phone Number</p>
//                 <input onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} className='border rounded px-3 py-2' type="number" placeholder='Phone Number' required />
//             </div>
//             <div className='flex-1 flex flex-col gap-1'>
//                 <p>Set Password</p>
//                 <input onChange={e => setPassword(e.target.value)} value={password} className='border rounded px-3 py-2' type="password" placeholder='Password' required />
//             </div>

//             <div className='flex-1 flex flex-col gap-1'>
//             <p>Experience</p>
//             <input onChange={e => setExperience(e.target.value)} value={experience} className='border rounded px-3 py-2' type="number" placeholder='Doctor experience ( Year(s) )' required />
//             </div>

//             <div className='flex-1 flex flex-col gap-1'>
//                 <p>Fees</p>
//                 <input onChange={e => setFees(e.target.value)} value={fees} className='border rounded px-3 py-2' type="number" placeholder='Doctor fees' required />
//             </div>

//         </div>

//         <div className='w-full lg:flex-1 flex flex-col gap-4'>

//             <div className='flex-1 flex flex-col gap-1'>
//                 <p>Speciality</p>
//                 <select onChange={e => setSpeciality(e.target.value)} value={speciality} className='border rounded px-2 py-2'>
//                     <option value="General physician">General physician</option>
//                     <option value="Gynecologist">Gynecologist</option>
//                     <option value="Dermatologist">Dermatologist</option>
//                     <option value="Pediatricians">Pediatricians</option>
//                     <option value="Neurologist">Neurologist</option>
//                     <option value="Gastroenterologist">Gastroenterologist</option>
//                 </select>
//             </div>


//             <div className='flex-1 flex flex-col gap-1'>
//                 <p>Degree</p>
//                 <input onChange={e => setDegree(e.target.value)} value={degree} className='border rounded px-3 py-2' type="text" placeholder='Degree' required />
//             </div>

  


//             <div className='flex-1 flex flex-col gap-1'>
//                 <p>Address</p>
//                 <input onChange={e => setAddress(e.target.value)} value={address} className='border rounded px-3 py-2' type="text" placeholder='Address ' required />
//             </div>

//         </div>

//     </div>

//     <div>
//         <p className='mt-4 mb-2'>About Doctor</p>
//         <textarea onChange={e => setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border rounded' rows={5} placeholder='Write about doctor'></textarea>
//     </div>

//     <button type='submit' className='bg-primary px-10 py-3 mt-4 text-white rounded-full'>Add doctor</button>

// </div>


// </form>
//         </>
        
//     )
// }

// export default AddDoctor




import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'
import axios from 'axios'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/Loader'

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1')
  const [fees, setFees] = useState('')
  const [about, setAbout] = useState('')
  const [speciality, setSpeciality] = useState('General physician')
  const [degree, setDegree] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { backendUrl } = useContext(AppContext)
  const { aToken } = useContext(AdminContext)

  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}

    if (!name.trim()) newErrors.name = 'Name is required.'
    if (!email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Invalid email format.'
    }
    if (!password) {
      newErrors.password = 'Password is required.'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.'
    }
    if (!phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required.'
    } else if (!/^\d{9,15}$/.test(phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 9 to 15 digits.'
    }
    if (!degree.trim()) newErrors.degree = 'Degree is required.'
    if (!address.trim()) newErrors.address = 'Address is required.'
    if (!about.trim()) newErrors.about = 'Please write something about the doctor.'
    if (!experience || isNaN(experience) || Number(experience) <= 0) {
      newErrors.experience = 'Experience must be a positive number.'
    }
    if (!fees || isNaN(fees) || Number(fees) <= 0) {
      newErrors.fees = 'Fees must be a positive number.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const resetForm = () => {
    setDocImg(false)
    setName('')
    setEmail('')
    setPassword('')
    setExperience('1')
    setFees('')
    setAbout('')
    setSpeciality('General physician')
    setDegree('')
    setAddress('')
    setPhoneNumber('')
    setErrors({})
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    if (!validate()) return

    try {
      setIsLoading(true)

      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('experience', experience)
      formData.append('fees', fees)
      formData.append('about', about)
      formData.append('speciality', speciality)
      formData.append('degree', degree)
      formData.append('phoneNumber', phoneNumber)
      formData.append('address', address)
      if (docImg) {
        formData.append('image', docImg)
      }
      const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, {
        headers: { aToken },
      })

      console.log('data', data)

      if (data.success) {
        toast.success('Added new doctor successfully!')
        resetForm()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Something went wrong!'
      toast.error(errorMsg)
      console.error('Error:', errorMsg)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {isLoading && <Loading />}
      <form onSubmit={onSubmitHandler} className="m-5 w-full">
        <p className="mb-3 text-lg font-medium">Add Doctor</p>

        <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
          <div className="flex items-center gap-4 mb-8 text-gray-500">
            <label htmlFor="doc-img">
              <img
                className="w-16 bg-gray-100 rounded-full cursor-pointer"
                src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
                alt=""
              />
            </label>
            <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
            <p>Upload doctor <br /> picture</p>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
            <div className="w-full lg:flex-1 flex flex-col gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <p>Your name</p>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className={`border rounded px-3 py-2 ${errors.name ? 'border-red-500' : ''}`}
                  type="text"
                  placeholder="Name"
                  required
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <p>Doctor Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`border rounded px-3 py-2 ${errors.email ? 'border-red-500' : ''}`}
                  type="email"
                  placeholder="Email"
                  required
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <p>Set Phone Number</p>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  className={`border rounded px-3 py-2 ${errors.phoneNumber ? 'border-red-500' : ''}`}
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
                {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber}</span>}
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <p>Set Password</p>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className={`border rounded px-3 py-2 ${errors.password ? 'border-red-500' : ''}`}
                  type="password"
                  placeholder="Password"
                  required
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <p>Experience (Year(s))</p>
                <input
                  onChange={(e) => setExperience(e.target.value)}
                  value={experience}
                  className={`border rounded px-3 py-2 ${errors.experience ? 'border-red-500' : ''}`}
                  type="number"
                  min="1"
                  placeholder="Doctor experience (Year(s))"
                  required
                />
                {errors.experience && <span className="text-red-500 text-sm">{errors.experience}</span>}
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <p>Fees</p>
                <input
                  onChange={(e) => setFees(e.target.value)}
                  value={fees}
                  className={`border rounded px-3 py-2 ${errors.fees ? 'border-red-500' : ''}`}
                  type="number"
                  min="1"
                  placeholder="Doctor fees"
                  required
                />
                {errors.fees && <span className="text-red-500 text-sm">{errors.fees}</span>}
              </div>
            </div>

            <div className="w-full lg:flex-1 flex flex-col gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <p>Speciality</p>
                <select
                  onChange={(e) => setSpeciality(e.target.value)}
                  value={speciality}
                  className="border rounded px-2 py-2"
                >
                  <option value="General physician">General physician</option>
                  <option value="Gynecologist">Gynecologist</option>
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="Pediatricians">Pediatricians</option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Gastroenterologist">Gastroenterologist</option>
                </select>
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <p>Degree</p>
                <input
                  onChange={(e) => setDegree(e.target.value)}
                  value={degree}
                  className={`border rounded px-3 py-2 ${errors.degree ? 'border-red-500' : ''}`}
                  type="text"
                  placeholder="Degree"
                  required
                />
                {errors.degree && <span className="text-red-500 text-sm">{errors.degree}</span>}
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <p>Address</p>
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  className={`border rounded px-3 py-2 ${errors.address ? 'border-red-500' : ''}`}
                  type="text"
                  placeholder="Address"
                  required
                />
                {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
              </div>
            </div>
          </div>

          <div>
            <p className="mt-4 mb-2">About Doctor</p>
            <textarea
              onChange={(e) => setAbout(e.target.value)}
              value={about}
              className={`w-full px-4 pt-2 border rounded ${errors.about ? 'border-red-500' : ''}`}
              rows={5}
              placeholder="Write about doctor"
              required
            ></textarea>
            {errors.about && <span className="text-red-500 text-sm">{errors.about}</span>}
          </div>

          <button
            type="submit"
            className="bg-primary px-10 py-3 mt-4 text-white rounded-full"
          >
            Add doctor
          </button>
        </div>
      </form>
    </>
  )
}

export default AddDoctor
