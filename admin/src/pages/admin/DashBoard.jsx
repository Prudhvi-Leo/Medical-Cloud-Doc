import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets_admin/assets";

const DashBoard = () => {
  const { aToken, getDashData, dashData } = useContext(AdminContext);
  const { calculateAge, slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (aToken) getDashData();
  }, [aToken]);

  if (!dashData) return null;

  return (
    <div className="p-6 w-full max-w-6xl mx-auto">
      {/* ======== STATS SECTION ======== */}
      <h1 className="text-2xl font-semibold mb-6">Admin Dashboard</h1>

      <div className="grid sm:grid-cols-3 gap-6 mb-8">

        {/* Doctors */}
        <div className="bg-white shadow-md rounded-xl p-6 flex items-center justify-between border border-gray-100 hover:shadow-lg transition">
          <div>
            <p className="text-gray-500">Doctors</p>
            <h2 className="text-3xl font-bold">{dashData.doctors}</h2>
          </div>
          <div className="bg-blue-50 p-3 rounded-full">
            <img
              src={assets.doctor_icon}
              alt="Doctor Icon"
              className="w-10 h-10"
            />
          </div>
        </div>

        {/* Patients */}
        <div className="bg-white shadow-md rounded-xl p-6 flex items-center justify-between border border-gray-100 hover:shadow-lg transition">
          <div>
            <p className="text-gray-500">Patients</p>
            <h2 className="text-3xl font-bold">{dashData.patients}</h2>
          </div>
          <div className="bg-green-50 p-3 rounded-full">
            <img
              src={assets.patients_icon}
              alt="Patients Icon"
              className="w-10 h-10"
            />
          </div>
        </div>

        {/* Appointments */}
        <div className="bg-white shadow-md rounded-xl p-6 flex items-center justify-between border border-gray-100 hover:shadow-lg transition">
          <div>
            <p className="text-gray-500">Appointments</p>
            <h2 className="text-3xl font-bold">{dashData.appointments}</h2>
          </div>
          <div className="bg-orange-50 p-3 rounded-full">
            <img
              src={assets.appointments_icon}
              alt="Appointments Icon"
              className="w-10 h-10"
            />
          </div>
        </div>

      </div>

      {/* ======== LATEST APPOINTMENTS ======== */}
      <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
        <h2 className="text-xl font-semibold mb-4">Latest Appointments</h2>

        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-[1fr_2fr_2fr_2fr_1fr] bg-gray-100 border px-4 py-2 font-medium text-gray-700 rounded-md">
          <p>#</p>
          <p>Patient</p>
          <p>Doctor</p>
          <p>Date & Time</p>
          <p>Age</p>
        </div>

        {/* Table Body */}
        <div>
          {dashData.latestAppointments.map((app, index) => (
            <div
              key={index}
              className="sm:grid sm:grid-cols-[1fr_2fr_2fr_2fr_1fr] flex flex-col gap-2 sm:gap-0 items-center py-4 border-b px-4 hover:bg-gray-50 transition"
            >
              <p className="font-medium">{index + 1}</p>

              {/* Patient */}
              <div className="flex items-center gap-3">
                <img
                  src={app.userData.image}
                  alt="user"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <p className="font-medium text-gray-800">
                  {app.userData.name}
                </p>
              </div>

              {/* Doctor */}
              <div className="flex items-center gap-3">
                <img
                  src={app.docData.image}
                  alt="doctor"
                  className="w-10 h-10 rounded-full object-cover bg-gray-200"
                />
                <p className="font-medium text-gray-800">
                  {app.docData.name}
                </p>
              </div>

              {/* Date + Time */}
              <p className="text-gray-700">
                {slotDateFormat(app.slotDate)} <br />
                <span className="text-gray-500">{app.slotTime}</span>
              </p>

              {/* Age */}
              <p className="font-medium text-gray-700">
                {calculateAge(app.userData.dob)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DashBoard;
