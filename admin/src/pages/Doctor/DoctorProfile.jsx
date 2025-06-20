




import React, { useContext, useEffect, useState } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { AppContext } from '../../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import { FaCamera } from "react-icons/fa6";
import { formatVND } from '../../../../backend/utils/formatVND';
const DoctorProfile = () => {
  const { profileData, setProfileData } = useContext(DoctorContext);
 

    const [loading, setLoading] = useState(false);
  const { currency, backendUrl } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [dToken, setDToken] = useState(localStorage.getItem('dToken') || '');
 const [image, setImage] = useState(null);
 const updateProfile = async () => {
  setLoading(true);
  try {
    const {
      name,
      phoneNumber,
      address,
      speciality,
      experience,
      degree,
      about,
      fees,
      available
    } = profileData;

    // Validate all required fields
    if (!name?.trim()) {
      toast.warning('Name is required');
      setLoading(false);
      return;
    }

    if (!phoneNumber?.trim()) {
      toast.warning('Phone number is required');
      setLoading(false);
      return;
    }

    if (!address?.trim()) {
      toast.warning('Address is required');
      setLoading(false);
      return;
    }

    if (!speciality?.trim()) {
      toast.warning('Speciality is required');
      setLoading(false);
      return;
    }

    if (!experience) {
      toast.warning('Experience is required');
      setLoading(false);
      return;
    }

    if (!degree?.trim()) {
      toast.warning('Degree is required');
      setLoading(false);
      return;
    }

    if (!about?.trim()) {
      toast.warning('About field is required');
      setLoading(false);
      return;
    }

    

    if (available === '') {
      toast.warning('Availability selection is required');
      setLoading(false);
      return;
    }

    // Prepare data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phoneNumber', phoneNumber);
    formData.append('address', address);
    formData.append('speciality', speciality);
    formData.append('experience', experience);
    formData.append('degree', degree);
    formData.append('about', about);
    if (fees){
    formData.append('fees', Number(fees));
    }

    formData.append('available', available);

    if (image) {
      formData.append('image', image);
    }

    const { data } = await axios.put(
      backendUrl + '/api/doctor/profile',
      formData,
      {
        headers: { dToken },
      }
    );

    if (data.doctor) {
      toast.success("Doctor profile updated successfully !");
      setIsEdit(false);
      getProfileData();
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.message || "Update failed");
    console.log(error);
  } finally {
    setLoading(false);
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
console.log(profileData.available);

  return (
    profileData && (
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-8 text-sm">
           <div className="flex flex-col items-center gap-4">
                  {isEdit ? (
                    <label htmlFor="image">
                      <div className="relative w-36 h-36">
                        <img
                          className="w-36 h-36 object-cover rounded-full border-4 border-primary shadow-md"
                          src={image ? URL.createObjectURL(image) : profileData.image}
                          alt="Profile"
                        />
                        <div className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow-md">
                          <FaCamera className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <input
                        type="file"
                        id="image"
                        hidden
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </label>
                  ) : (
                    <img
                      className="w-36 h-36 object-cover rounded-full border-4 border-primary shadow-md"
                      src={profileData.image}
                      alt="Profile"
                    />
                  )}
          
                  {isEdit ? (
                    <input
                      className="text-2xl font-semibold text-center border-b-2 border-gray-300 focus:outline-none focus:border-primary w-64"
                      type="text"
                      onChange={(e) =>
                        setProfileData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      value={profileData.name}
                    />
                  ) : (
                    <h2 className="text-2xl font-semibold">{profileData.name}</h2>
                  )}
                </div>
          
                <hr className="my-6 border-gray-300" />

                

                    <section>
        <p className="text-primary font-semibold mb-2">Contact Information</p>
        <div className="grid gap-4 text-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <label className="font-medium w-28">Email:</label>
            <p className="text-blue-500">{profileData.email}</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <label className="font-medium w-28">Phone:</label>
            {isEdit ? (
              <input
                type="number"
                className="bg-gray-100 px-3 py-2 rounded-md border w-full max-w-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={profileData.phoneNumber}
                onChange={(e) =>
                  setProfileData((prev) => ({ ...prev, phoneNumber: e.target.value }))
                }
              />
            ) : (
              <p>{profileData.phoneNumber}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
            <label className="font-medium w-28">Address:</label>
            {isEdit ? (
              <textarea
                rows={2}
                className="bg-gray-100 px-3 py-2 rounded-md border w-full max-w-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={profileData.address}
                onChange={(e) =>
                  setProfileData((prev) => ({ ...prev, address: e.target.value }))
                }
              />
            ) : (
              <p>{profileData.address}</p>
            )}
          </div>
        </div>
      </section>

      <hr className="my-6 border-gray-300" />


   <section>
        <p className="text-primary font-semibold mb-2">Basic Information</p>
        <div className="grid gap-4 text-gray-700">

<div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <label className="font-medium w-28">Speciality:</label>
            {isEdit ? (
              <select
                className="bg-gray-100 px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary max-w-[160px]"
                onChange={(e) =>
                  setProfileData((prev) => ({ ...prev, speciality: e.target.value }))
                }
                value={profileData.speciality}
              >
                
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
                
              </select>
            ) : (
              <p>{profileData.speciality}</p>
            )}
          </div>

<div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <label className="font-medium w-28">Experience:</label>
            {isEdit ? (
              <input
                type="number"
                className="bg-gray-100 px-3 py-2 rounded-md border w-full max-w-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={profileData.experience}
                onChange={(e) =>
                  setProfileData((prev) => ({ ...prev, experience: e.target.value }))
                }
              />
            ) : (
              <p>{profileData.experience}{" Years "}</p>
            )}
          </div>


<div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <label className="font-medium w-28">Degree:</label>
            {isEdit ? (
              <input
                type="text"
                className="bg-gray-100 px-3 py-2 rounded-md border w-full max-w-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={profileData.degree}
                onChange={(e) =>
                  setProfileData((prev) => ({ ...prev, degree: e.target.value }))
                }
              />
            ) : (
              <p>{profileData.degree}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <label className="font-medium w-28">About:</label>
            {isEdit ? (
              <textarea
                rows={4}
                className="bg-gray-100 px-3 py-2 rounded-md border w-full max-w-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={profileData.about}
                onChange={(e) =>
                  setProfileData((prev) => ({ ...prev, about: e.target.value }))
                }
              />
            ) : (
              <p>{profileData.about}</p>
            )}
          </div>

<div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <label className="font-medium w-28">Fee:</label>
            {isEdit ? (
              // <input
              //   type="number"
              //   className="bg-gray-100 px-3 py-2 rounded-md border w-full max-w-md focus:outline-none focus:ring-2 focus:ring-primary"
          
              //   onChange={(e) =>
              //     setProfileData((prev) => ({ ...prev, fees: e.target.value }))
              //   }
              // />


              <input
  type="text"
  className="bg-gray-100 px-3 py-2 rounded-md border w-full max-w-md focus:outline-none focus:ring-2 focus:ring-primary"
 
  onChange={(e) => {
    const input = e.target.value;

    // Chỉ cho phép chuỗi rỗng hoặc số không âm (dùng regex kiểm tra)
    if (input === '' || /^\d+$/.test(input)) {
      setProfileData((prev) => ({ ...prev, fees: input }));
    } else {
      toast.warning('Only non-negative numbers are allowed');
    }
  }}
/>

            ) : (
              <p>{formatVND(profileData.fees,'')}{" VNĐ"}</p>
            )}
          </div>


          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <label className="font-medium w-28">Available:</label>
            {isEdit ? (
              <select
                className="bg-gray-100 px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary max-w-[160px]"
                onChange={(e) =>
                  setProfileData((prev) => ({ ...prev, available: e.target.value }))
                }
                value={profileData.available}
              >
                <option value="true">Available</option>
                <option value="false">Unavailable</option>
              </select>
            ) : (
              <select
              disabled
              value={profileData.available}
                className="bg-gray-100 px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary max-w-[160px]"
              
              >
          
                <option  value="true">Available</option>
                <option value="false">Unavailable</option>
              </select>
            )}
          </div>
             <div className="mt-8 flex justify-center">
        {isEdit ? (
          <button
            onClick={updateProfile}
            disabled={loading}
            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-all flex items-center gap-2 disabled:opacity-50"
          >
            {loading && (
              <span className="animate-spin h-4 w-4 border-2 border-t-transparent border-white rounded-full"></span>
            )}
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
          >
            Edit Profile
          </button>
        )}
      </div>
        </div>
      </section>

      </div>
    )
    
  );
};

export default DoctorProfile;




