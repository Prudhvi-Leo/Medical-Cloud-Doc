import React ,{useContext , useEffect} from 'react'
import {AdminContext} from '../../context/AdminContext'
import {AppContext} from '../../context/AppContext'

 

const AllAppointments = () => {

const {aToken , appointments , getAllAppointments ,cancelAppointment} = useContext(AdminContext)
const {calculateAge ,slotDateFormat , currency} = useContext(AppContext)


useEffect(()=>{
  if(aToken){
    getAllAppointments()
  }
}, [aToken])


  return (
  <div className="w-full max-w-6xl mx-auto p-5">
    <p className="mb-4 text-xl font-semibold">All Appointments</p>

    <div className="bg-white border rounded-lg overflow-hidden max-h-[80vh] min-h-[60vh] overflow-y-auto">

      {/* Desktop Header */}
      <div className="hidden sm:grid grid-cols-[50px_2fr_80px_2fr_2fr_80px_100px] gap-4 py-3 px-6 bg-gray-100 border-b text-gray-600 font-medium">
        <p>#</p>
        <p>Patient</p>
        <p>Age</p>
        <p>Date & Time</p>
        <p>Doctor</p>
        <p>Fees</p>
        <p className="text-center">Actions</p>
      </div>

      {/* Rows */}
      {appointments.map((item, index) => (
        <div
          key={index}
          className="sm:grid sm:grid-cols-[50px_2fr_80px_2fr_2fr_80px_100px] gap-4 py-4 px-6 border-b hover:bg-gray-50 transition-all
                     flex flex-col sm:flex-none"
        >

          {/* # */}
          <p className="text-gray-700 font-medium hidden sm:block">{index + 1}</p>

          {/* Patient */}
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={item.userData.image}
              alt="user profile"
            />
            <div>
              <p className="font-medium text-gray-800">{item.userData.name}</p>
              <p className="text-gray-500 text-sm sm:hidden">
                Age: {calculateAge(item.userData.dob)}
              </p>
            </div>
          </div>

          {/* Age */}
          <p className="hidden sm:block text-gray-700">
            {calculateAge(item.userData.dob)}
          </p>

          {/* Date & Time */}
          <p className="text-gray-700">
            {slotDateFormat(item.slotDate)} <br className="hidden sm:block" />
            <span className="text-gray-600">{item.slotTime}</span>
          </p>

          {/* Doctor */}
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full object-cover bg-gray-200"
              src={item.docData.image}
              alt="Doc profile"
            />
            <p className="font-medium text-gray-800">{item.docData.name}</p>
          </div>

          {/* Fees */}
          <p className="text-gray-700 font-semibold">
            {currency}{item.docData.fees || "—"}
          </p>

          {/* Actions */}
          <div className="flex sm:justify-center gap-2">
           {/*  <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md">
              View
            </button> */}
            {item.cancelled 
            ?<p className='text-red-400 text-xs font-medium'>Cancelled</p>
            : item.isCompleted ?
            <p className='text-green-500 text-xs font-medium'>Completed</p>
            :<button onClick={()=>{cancelAppointment(item._id)}} className="px-3 py-1 text-sm bg-red-500 text-white rounded-md">
              Cancel
            </button>}
          </div>
        </div>
      ))}

    </div>
  </div>
);
}


export default AllAppointments