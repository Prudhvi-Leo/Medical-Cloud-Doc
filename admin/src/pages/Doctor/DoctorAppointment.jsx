import React, { useEffect, useContext } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";

const DoctorAppointment = () => {
  const { dToken, appointments, getAppointments ,completeAppointment ,cancelAppointment} =
    useContext(DoctorContext);
  const { calculateAge, slotDateFormat , currency } = useContext(AppContext);

  useEffect(() => {
    if (dToken) getAppointments();
  }, [dToken]);

  return (
    <div className="p-6 w-full max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">My Appointments</h1>

      <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">

        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-[1fr_2fr_2fr_1fr_1fr_1fr_2fr] bg-gray-100 border px-4 py-2 font-medium text-gray-700 rounded-md">
          <p>#</p>
          <p>Patient</p>
          <p>Patient Email</p>
          <p>Date & Time</p>
          <p>Status</p>
          <p>Amount</p>
          <p>Actions</p>
        </div>

        {/* Table Body */}
        <div>
          
          {appointments.map((app, index) => (
  <div
    key={index}
    className="bg-white shadow-md rounded-xl p-4 sm:p-6 flex flex-col sm:grid sm:grid-cols-[1fr_2fr_2fr_1fr_1fr_1fr_2fr] gap-2 sm:gap-0 items-start sm:items-center hover:bg-gray-50 transition"
  >
    {/* Index */}
    <p className="font-medium sm:text-center">{index + 1}</p>

    {/* Patient */}
    <div className="flex items-center gap-3">
      <img
        src={app.userData.image}
        alt="user"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p className="font-medium text-gray-800">{app.userData.name}</p>
        <p className="text-gray-500 text-sm sm:hidden">
          Age: {calculateAge(app.userData.dob)}
        </p>
      </div>
    </div>

    {/* Email */}
    <p className="text-gray-700 break-words sm:block sm:text-left">{app.userData.email}</p>

    {/* Date + Time */}
    <p className="text-gray-700">
      {slotDateFormat(app.slotDate)} <br />
      <span className="text-gray-500">{app.slotTime}</span>
    </p>

    {/* Status */}
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

    {/* Amount */}
    <p className="font-medium text-gray-800">{currency}{app.amount}</p>

    {/* Actions */}
    <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
      {app.cancelled || app.isCompleted ? (
        <span className="text-gray-500 text-sm">No Actions</span>
      ) : (
        <>
          <button
            onClick={() => completeAppointment(app._id)}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition text-sm"
          >
            Complete
          </button>
          <button
            onClick={() => cancelAppointment(app._id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-sm"
          >
            Cancel
          </button>
        </>
      )}
    </div>
  </div>
))}

        </div>
      </div>
    </div>
  );
};

export default DoctorAppointment;
