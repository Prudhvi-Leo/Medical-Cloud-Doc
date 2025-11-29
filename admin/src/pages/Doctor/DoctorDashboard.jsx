import React, { useEffect, useContext } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets_admin/assets"; // if you have icons

const DoctorDashboard = () => {
  const { dToken, dashData, getDashData } = useContext(DoctorContext);
  const {slotDateFormat  , calculateAge} = useContext(AppContext)

  useEffect(() => {
    if (dToken) getDashData();
  }, [dToken]);

  if (!dashData) return null;

  return (
    <div className="p-6 w-full max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Doctor Dashboard</h1>

      {/* ===== Stats ===== */}
      <div className="grid sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-md rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Earnings</p>
            <h2 className="text-3xl font-bold">${dashData.earnings}</h2>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <img src={assets.earning_icon} alt="earnings" className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Appointments</p>
            <h2 className="text-3xl font-bold">{dashData.appointments}</h2>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <img src={assets.appointments_icon} alt="appointments" className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Patients</p>
            <h2 className="text-3xl font-bold">{dashData.patients}</h2>
          </div>
          <div className="bg-orange-100 p-3 rounded-full">
            <img src={assets.patients_icon} alt="patients" className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* ===== Latest Appointments ===== */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Latest Appointments</h2>

        <div className="hidden sm:grid grid-cols-[1fr_2fr_2fr_2fr_1fr] bg-gray-100 border px-4 py-2 font-medium text-gray-700 rounded-md">
          <p>#</p>
          <p>Patient</p>
          <p>Date & Time</p>
          <p>Status</p>
          <p>Amount</p>
        </div>

        <div>
          {dashData.latestAppointments.map((app, index) => (
            <div
              key={index}
              className="sm:grid sm:grid-cols-[1fr_2fr_2fr_2fr_1fr] flex flex-col gap-2 sm:gap-0 items-start sm:items-center py-4 border-b px-4 hover:bg-gray-50 transition"
            >
              <p className="font-medium sm:text-center">{index + 1}</p>
              <p className="font-medium text-gray-800">{app.userData.name}</p>
              <p className="text-gray-700">
                {slotDateFormat(app.slotDate)} <br />
                <span className="text-gray-500">{app.slotTime}</span>
              </p>
              <p
                className={`font-semibold ${
                  app.cancelled
                    ? "text-red-500"
                    : app.isCompleted
                    ? "text-green-600"
                    : "text-blue-600"
                }`}
              >
                {app.cancelled
                  ? "Cancelled"
                  : app.isCompleted
                  ? "Completed"
                  : "Upcoming"}
              </p>
              <p className="font-medium text-gray-800">${app.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
