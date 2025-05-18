// import React, { useContext, useEffect, useState } from 'react'
// import { DoctorContext } from '../../context/DoctorContext'
// import { AppContext } from '../../context/AppContext'
// import { toast } from 'react-toastify'
// import axios from 'axios'

// const DoctorProfile = () => {

//     const { profileData, setProfileData } = useContext(DoctorContext)
//     const { currency, backendUrl } = useContext(AppContext)
//     const [isEdit, setIsEdit] = useState(false)
//     const [dToken, setDToken] = useState(localStorage.getItem('dToken') ? localStorage.getItem('dToken') : '')

//     const updateProfile = async () => {

//         try {

//             const updateData = {
//                 address: profileData.address,
//                 fees: profileData.fees,
//                 about: profileData.about,
//                 available: profileData.available
//             }

//             const { data } = await axios.post(backendUrl + '/api/doctor/update-profile', updateData, { headers: { dToken } })

//             if (data.success) {
//                 toast.success(data.message)
//                 setIsEdit(false)
//                 getProfileData()
//             } else {
//                 toast.error(data.message)
//             }

//             setIsEdit(false)

//         } catch (error) {
//             toast.error(error.message)
//             console.log(error)
//         }

//     }
//   const getProfileData = async () => {
//         try {
//             console.log("get profile id",dToken);
            
//           const { data } = await axios.get(`${backendUrl}/api/doctor/profile`,
 
//             { headers: { dToken } } // gửi token trong headers
//           );
//           console.log(data);
//           setProfileData(data.profileData);
//         } catch (error) {
//           console.log(error);
//           toast.error(error.response?.data?.message || error.message);
//         }
//       };
//     useEffect(() => {
//         if (dToken) {
//             getProfileData()
//         }
//     }, [dToken])

//     return profileData && (
//         <div>
//             <div className='flex flex-col gap-4 m-5'>
//                 <div>
//                     <img className='bg-primary/80 w-full sm:max-w-64 rounded-lg' src={profileData.image} alt="" />
//                 </div>

//                 <div className='flex-1 border border-stone-100 rounded-lg p-8 py-7 bg-white'>

//                     {/* ----- Doc Info : name, degree, experience ----- */}

//                     <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>{profileData.name}</p>
//                     <div className='flex items-center gap-2 mt-1 text-gray-600'>
//                         <p>{profileData.degree} - {profileData.speciality}</p>
//                         <button className='py-0.5 px-2 border text-xs rounded-full'>{profileData.experience} {" Year(s)"}</button>
//                     </div>

//                     {/* ----- Doc About ----- */}
//                     <div>
//                         <p className='flex items-center gap-1 text-sm font-medium text-[#262626] mt-3'>About :</p>
//                         <p className='text-sm text-gray-600 max-w-[700px] mt-1'>
//                             {
//                                 isEdit
//                                     ? <textarea onChange={(e) => setProfileData(prev => ({ ...prev, about: e.target.value }))} type='text' className='w-full outline-primary p-2' rows={8} value={profileData.about} />
//                                     : profileData.about
//                             }
//                         </p>
//                     </div>

//                     {/* <p className='text-gray-600 font-medium mt-4'>
//                         Appointment fee: <span className='text-gray-800'>{currency} {isEdit ? <input type='number' onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))} value={profileData.fees} /> : profileData.fees}</span>
//                     </p>

//                     <div className='flex gap-2 py-2'>
//                         <p>Address:</p>
//                         <p className='text-sm'>
//                             {isEdit ? <input type='text' onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={profileData.address.line1} /> : profileData.address.line1}
//                             <br />
//                             {isEdit ? <input type='text' onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={profileData.address.line2} /> : profileData.address.line2}
//                         </p>
//                     </div> */}


//                     {/* Appointment Fee */}
// <div className="mt-6">
//   <label className="block text-gray-600 font-medium mb-1">Appointment Fee:</label>
//   {isEdit ? (
//     <input
//       type="number"
//       className="w-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
//       value={profileData.fees}
//       onChange={(e) =>
//         setProfileData((prev) => ({ ...prev, fees: e.target.value }))
//       }
//     />
//   ) : (
//     <p className="text-gray-800 text-sm">
//       {currency} {profileData.fees}
//     </p>
//   )}
// </div>

// {/* Address */}
// <div className="mt-6">
//   <label className="block text-gray-600 font-medium mb-1">Address:</label>
//   {isEdit ? (
//     <div className="space-y-2">
//       <input
//         type="text"
//         className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
//         value={profileData.address.line1}
//         placeholder="Street address"
//         onChange={(e) =>
//           setProfileData((prev) => ({
//             ...prev,
//             address: { ...prev.address, line1: e.target.value },
//           }))
//         }
//       />
//       <input
//         type="text"
//         className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
//         value={profileData.address.line2}
//         placeholder="City/Region"
//         onChange={(e) =>
//           setProfileData((prev) => ({
//             ...prev,
//             address: { ...prev.address, line2: e.target.value },
//           }))
//         }
//       />
//     </div>
//   ) : (
//     <p className="text-gray-800 text-sm">
//       {profileData.address.line1}
//       <br />
//       {profileData.address.line2}
//     </p>
//   )}
// </div>


//                     <div className='flex gap-1 pt-2'>
//                         <input type="checkbox" onChange={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))} checked={profileData.available} />
//                         <label htmlFor="">Available</label>
//                     </div>

//                     {
//                         isEdit
//                             ? <button onClick={updateProfile} className='px-4 py-1 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all'>Save</button>
//                             : <button onClick={() => setIsEdit(prev => !prev)} className='px-4 py-1 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all'>Edit</button>
//                     }

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default DoctorProfile








// import React, { useContext, useEffect, useState } from 'react';
// import { DoctorContext } from '../../context/DoctorContext';
// import { AppContext } from '../../context/AppContext';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const DoctorProfile = () => {
//   const { profileData, setProfileData } = useContext(DoctorContext);
//   const { currency, backendUrl } = useContext(AppContext);
//   const [isEdit, setIsEdit] = useState(false);
//   const [dToken, setDToken] = useState(localStorage.getItem('dToken') || '');

//   const updateProfile = async () => {
//     try {
//       const { address, fees, about, available } = profileData;

//       // Validate input
//       if (!about || about.trim() === '') {
//         toast.warning('About field cannot be empty');
//         return;
//       }

//       if (fees === '' || isNaN(fees) || Number(fees) < 0) {
//         toast.warning('Fees must be a valid non-negative number');
//         return;
//       }

//       const updateData = {
//         address,
//         fees: Number(fees),
//         about,
//         available,
//       };

//       const { data } = await axios.post(
//         backendUrl + '/api/doctor/update-profile',
//         updateData,
//         { headers: { dToken } }
//       );

//       if (data.success) {
//         toast.success(data.message);
//         setIsEdit(false);
//         getProfileData();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//       console.log(error);
//     }
//   };

//   const getProfileData = async () => {
//     try {
//       const { data } = await axios.get(`${backendUrl}/api/doctor/profile`, {
//         headers: { dToken },
//       });
//       setProfileData(data.profileData);
//     } catch (error) {
//       toast.error(error.response?.data?.message || error.message);
//     }
//   };

//   useEffect(() => {
//     if (dToken) getProfileData();
//   }, [dToken]);

//   return (
//     profileData && (
//       <div>
//         <div className="flex flex-col gap-4 m-5">
//           <div>
//             <img
//               className="bg-primary/80 w-full sm:max-w-64 rounded-lg"
//               src={profileData.image}
//               alt=""
//             />
//           </div>

//           <div className="flex-1 border border-stone-100 rounded-lg p-8 py-7 bg-white">
//             {/* ----- Doctor Info ----- */}
//             <p className="flex items-center gap-2 text-3xl font-medium text-gray-700">
//               {profileData.name}
//             </p>
//             <div className="flex items-center gap-2 mt-1 text-gray-600">
//               <p>
//                 {profileData.degree} - {profileData.speciality}
//               </p>
//               <button className="py-0.5 px-2 border text-xs rounded-full">
//                 {profileData.experience} Year(s)
//               </button>
//             </div>

//             {/* About */}
//             <div className="mt-4">
//               <label className="block text-sm font-medium text-gray-700">About:</label>
//               {isEdit ? (
//                 <textarea
//                   rows={6}
//                   value={profileData.about}
//                   onChange={(e) =>
//                     setProfileData((prev) => ({ ...prev, about: e.target.value }))
//                   }
//                   className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
//                 />
//               ) : (
//                 <p className="text-sm text-gray-600 mt-1">{profileData.about}</p>
//               )}
//             </div>

//             {/* Fees */}
//             <div className="mt-6">
//               <label className="block text-gray-600 font-medium mb-1">Appointment Fee:</label>
//               {isEdit ? (
//                 <input
//                   type="number"
//                   min={0}
//                   className="w-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
//                   value={profileData.fees}
//                   onChange={(e) =>
//                     setProfileData((prev) => ({
//                       ...prev,
//                       fees: e.target.value,
//                     }))
//                   }
//                 />
//               ) : (
//                 <p className="text-gray-800 text-sm">
//                   {currency} {profileData.fees}
//                 </p>
//               )}
//             </div>

//             {/* Address */}
//             <div className="mt-6">
//               <label className="block text-gray-600 font-medium mb-1">Address:</label>
//               {isEdit ? (
//                 <div className="space-y-2">
//                   <input
//                     type="text"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
//                     value={profileData.address.line1}
//                     placeholder="Street address"
//                     onChange={(e) =>
//                       setProfileData((prev) => ({
//                         ...prev,
//                         address: { ...prev.address, line1: e.target.value },
//                       }))
//                     }
//                   />
//                   <input
//                     type="text"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
//                     value={profileData.address.line2}
//                     placeholder="City/Region"
//                     onChange={(e) =>
//                       setProfileData((prev) => ({
//                         ...prev,
//                         address: { ...prev.address, line2: e.target.value },
//                       }))
//                     }
//                   />
//                 </div>
//               ) : (
//                 <p className="text-gray-800 text-sm">
//                   {profileData.address.line1}
//                   <br />
//                   {profileData.address.line2}
//                 </p>
//               )}
//             </div>

//             {/* Availability */}
//             <div className="flex gap-2 items-center pt-4">
//               <input
//                 type="checkbox"
//                 checked={profileData.available}
//                 onChange={() =>
//                   isEdit &&
//                   setProfileData((prev) => ({
//                     ...prev,
//                     available: !prev.available,
//                   }))
//                 }
//               />
//               <label className="text-sm text-gray-700">Available</label>
//             </div>

//             {/* Buttons */}
//             {isEdit ? (
//               <button
//                 onClick={updateProfile}
//                 className="mt-6 px-4 py-2 border border-primary text-sm rounded-full hover:bg-primary hover:text-white transition-all"
//               >
//                 Save
//               </button>
//             ) : (
//               <button
//                 onClick={() => setIsEdit(true)}
//                 className="mt-6 px-4 py-2 border border-primary text-sm rounded-full hover:bg-primary hover:text-white transition-all"
//               >
//                 Edit
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default DoctorProfile;




import React, { useContext, useEffect, useState } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { AppContext } from '../../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const DoctorProfile = () => {
  const { profileData, setProfileData } = useContext(DoctorContext);
  const { currency, backendUrl } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [dToken, setDToken] = useState(localStorage.getItem('dToken') || '');

  const updateProfile = async () => {
    try {
      const { address, fees, about, available } = profileData;

      if (!about || about.trim() === '') {
        toast.warning('About field cannot be empty');
        return;
      }

      if (fees === '' || isNaN(fees) || Number(fees) < 0) {
        toast.warning('Fees must be a valid non-negative number');
        return;
      }

      const updateData = {
        address,
        fees: Number(fees),
        about,
        available,
      };

      const { data } = await axios.post(
        backendUrl + '/api/doctor/update-profile',
        updateData,
        { headers: { dToken } }
      );

      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        getProfileData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const getProfileData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/profile`, {
        headers: { dToken },
      });
      setProfileData(data.profileData);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    if (dToken) getProfileData();
  }, [dToken]);

  return (
    profileData && (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid sm:grid-cols-3 gap-8">
          {/* Avatar */}
          <div className="flex justify-center  sm:justify-start">
            <img
              className="w-48 h-48 object-cover rounded-full shadow-md border-4 border-primary"
              src={profileData.image}
              alt="Doctor Avatar"
            />
          </div>

          {/* Info */}
          <div className="sm:col-span-2 bg-white shadow-md rounded-2xl p-6 space-y-6 border border-gray-100">
            {/* Name + Degree */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{profileData.name}</h2>
              <div className="text-gray-600 text-sm mt-1 flex items-center gap-2">
                <span>
                  {profileData.degree} - {profileData.speciality}
                </span>
                <span className="bg-gray-100 px-2 py-0.5 text-xs rounded-full">
                  {profileData.experience} Year(s)
                </span>
              </div>
            </div>

            {/* About */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">About</label>
              {isEdit ? (
                <textarea
                  rows={4}
                  value={profileData.about}
                  onChange={(e) =>
                    setProfileData((prev) => ({ ...prev, about: e.target.value }))
                  }
                  className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                />
              ) : (
                <p className="text-sm text-gray-700">{profileData.about}</p>
              )}
            </div>

            {/* Fees */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Appointment Fee</label>
              {isEdit ? (
                <input
                  type="number"
                  min={0}
                  value={profileData.fees}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      fees: e.target.value,
                    }))
                  }
                  className="w-40 p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                />
              ) : (
                <p className="text-sm text-gray-800">
                  {currency} {profileData.fees}
                </p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              {isEdit ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Street address"
                    value={profileData.address.line1}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line1: e.target.value },
                      }))
                    }
                    className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="City/Region"
                    value={profileData.address.line2}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line2: e.target.value },
                      }))
                    }
                    className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
              ) : (
                <p className="text-sm text-gray-700">
                  {profileData.address.line1}
                  <br />
                  {profileData.address.line2}
                </p>
              )}
            </div>

            {/* Available Checkbox */}
            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                checked={profileData.available}
                onChange={() =>
                  isEdit &&
                  setProfileData((prev) => ({
                    ...prev,
                    available: !prev.available,
                  }))
                }
                className="h-4 w-4 text-primary border-gray-300 rounded"
              />
              <label className="text-sm text-gray-700">Available</label>
            </div>

            {/* Action Buttons */}
            <div className="pt-4">
              {isEdit ? (
                <button
                  onClick={updateProfile}
                  className="px-5 py-2 bg-primary text-white text-sm rounded-full hover:bg-primary/90 transition"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setIsEdit(true)}
                  className="px-5 py-2 border border-primary text-primary text-sm rounded-full hover:bg-primary hover:text-white transition"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorProfile;




