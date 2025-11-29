import React, { useContext, useEffect, useState } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import {toast} from 'react-toastify';
import axios from 'axios'

const DoctorProfile = () => {
  const { dToken, profileData, getProfileData, setProfileData ,backendUrl} =
    useContext(DoctorContext);
  const { currency } = useContext(AppContext);

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fees: "",
    address: { line1: "", line2: "" },
    available: true,
  });

  useEffect(() => {
    if (dToken) getProfileData();
  }, [dToken]);

  useEffect(() => {
    if (profileData) {
      setFormData({
        fees: profileData.fees,
        address: { ...profileData.address },
        available: profileData.available,
      });
    }
  }, [profileData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "line1" || name === "line2") {
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [name]: value },
      }));
    } else if (name === "available") {
      setFormData((prev) => ({ ...prev, available: e.target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = async () => {
    try {
      const {data} = await axios.post(backendUrl + '/api/doctor/update-profile' ,formData , {headers : {dToken}} )
      
      if(data.success){
        toast.success("Profile updated successfully");
        setEditMode(false);
        getProfileData(); // refresh data
      }
      else{
        toast.error(data.message)
      }
     
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (!profileData) return null;

  return (
    <div className="p-6 w-full max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">My Profile</h1>

      <div className="bg-white shadow-md rounded-xl p-6 flex flex-col sm:flex-row gap-6">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profileData.image}
            alt={profileData.name}
            className="w-32 h-32 rounded-full object-cover border"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <div className="flex flex-col gap-2 mb-4">
            <p className="text-xl font-semibold">{profileData.name}</p>
            <p className="text-gray-600">{profileData.degree}</p>
            <p className="text-gray-600">{profileData.speciality}</p>
            <p className="text-gray-600">{profileData.experience} experience</p>
            <p className="text-gray-700 mt-2">{profileData.about}</p>
          </div>

          {/* Editable Fields */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="font-medium">Fees:</label>
              {editMode ? (
                <input
                  type="number"
                  name="fees"
                  value={formData.fees}
                  onChange={handleChange}
                  className="ml-2 border px-2 py-1 rounded w-32"
                />
              ) : (
                <span className="ml-2">{currency}{profileData.fees}</span>
              )}
            </div>

            <div>
              <label className="font-medium">Address:</label>
              {editMode ? (
                <div className="flex flex-col ml-2 gap-1">
                  <input
                    type="text"
                    name="line1"
                    value={formData.address.line1}
                    onChange={handleChange}
                    placeholder="Line 1"
                    className="border px-2 py-1 rounded"
                  />
                  <input
                    type="text"
                    name="line2"
                    value={formData.address.line2}
                    onChange={handleChange}
                    placeholder="Line 2"
                    className="border px-2 py-1 rounded"
                  />
                </div>
              ) : (
                <span className="ml-2">
                  {profileData.address.line1}, {profileData.address.line2}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <label className="font-medium">Available:</label>
              {editMode ? (
                <input
                  type="checkbox"
                  name="available"
                  checked={formData.available}
                  onChange={handleChange}
                />
              ) : (
                <span>{profileData.available ? "Yes" : "No"}</span>
              )}
            </div>

            {/* Edit / Save Buttons */}
            <div className="mt-4">
              {editMode ? (
                <div className="flex gap-2">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
                    onClick={() => setEditMode(false)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  onClick={() => setEditMode(true)}
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
