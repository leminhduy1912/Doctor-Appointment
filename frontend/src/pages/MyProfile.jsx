






import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaCamera } from "react-icons/fa6";

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext);

  const updateUserProfileData = async () => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("userId", userData._id);
      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);
      formData.append("available", userData.available);

      if (typeof userData.address === 'object') {
        formData.append("address", JSON.stringify(userData.address));
      } else {
        formData.append("address", userData.address);
      }

      if (image) {
        formData.append("image", image);
      }

      const { data } = await axios.post(
        `${backendUrl}/api/user/update-profile`,
        formData,
        { headers: { token } }
      );

      if (data.user) {
        toast.success("Profile updated successfully");
        await loadUserProfileData();
        setIsEdit(false);
        setImage(null);
      }
    } catch (error) {
      toast.error(error.message || "Update failed");
      console.error("Update failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return userData ? (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-8 text-sm">
      <div className="flex flex-col items-center gap-4">
        {isEdit ? (
          <label htmlFor="image">
            <div className="relative w-36 h-36">
              <img
                className="w-36 h-36 object-cover rounded-full border-4 border-primary shadow-md"
                src={image ? URL.createObjectURL(image) : userData.image}
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
            src={userData.image}
            alt="Profile"
          />
        )}

        {isEdit ? (
          <input
            className="text-2xl font-semibold text-center border-b-2 border-gray-300 focus:outline-none focus:border-primary w-64"
            type="text"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
            value={userData.name}
          />
        ) : (
          <h2 className="text-2xl font-semibold">{userData.name}</h2>
        )}
      </div>

      <hr className="my-6 border-gray-300" />

      <section>
        <p className="text-primary font-semibold mb-2">Contact Information</p>
        <div className="grid gap-4 text-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <label className="font-medium w-28">Email:</label>
            <p className="text-blue-500">{userData.email}</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <label className="font-medium w-28">Phone:</label>
            {isEdit ? (
              <input
                type="number"
                className="bg-gray-100 px-3 py-2 rounded-md border w-full max-w-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <p>{userData.phone}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
            <label className="font-medium w-28">Address:</label>
            {isEdit ? (
              <textarea
                rows={2}
                className="bg-gray-100 px-3 py-2 rounded-md border w-full max-w-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={userData.address}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, address: e.target.value }))
                }
              />
            ) : (
              <p>{userData.address}</p>
            )}
          </div>
        </div>
      </section>

      <hr className="my-6 border-gray-300" />

      <section>
        <p className="text-primary font-semibold mb-2">Basic Information</p>
        <div className="grid gap-4 text-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <label className="font-medium w-28">Gender:</label>
            {isEdit ? (
              <select
                className="bg-gray-100 px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary max-w-[160px]"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                value={userData.gender}
              >
                <option value="Not Selected">Not Selected</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <label className="font-medium w-28">Birthday:</label>
            {isEdit ? (
              <input
                type="date"
                className="bg-gray-100 px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary max-w-[180px]"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                value={userData.dob}
              />
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <label className="font-medium w-28">Available:</label>
            {isEdit ? (
              <select
                className="bg-gray-100 px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary max-w-[160px]"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, available: e.target.value }))
                }
                value={userData.available}
              >
                <option value="true">Available</option>
                <option value="false">Unavailable</option>
              </select>
            ) : (
              <select
              disabled
              value={userData.available}
                className="bg-gray-100 px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary max-w-[160px]"
              
              >
          
                <option  value="true">Available</option>
                <option value="false">Unavailable</option>
              </select>
            )}
          </div>
        </div>
      </section>

      <div className="mt-8 flex justify-center">
        {isEdit ? (
          <button
            onClick={updateUserProfileData}
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
  ) : null;
};

export default MyProfile;
