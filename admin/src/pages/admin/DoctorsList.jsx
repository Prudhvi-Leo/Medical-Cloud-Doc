import React from 'react'
import {AdminContext} from '../../context/AdminContext'

const DoctorsList = () => {

  const {doctors , aToken , getAllDoctors , changeAvailablity} = React.useContext(AdminContext); 

  React.useEffect(() => {
    if(aToken){
      getAllDoctors();
    }
  }, [aToken])
  
  return (
    <div className="m-5 max-h-[90vh] overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-5">All Doctors</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {doctors?.map((item, index) => (
          <div 
            key={index}
            className="bg-white border border-indigo-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <img 
              className="w-full h-40 object-cover rounded-t-xl"
              src={item.image} 
              alt={item.name}
            />

            <div className="p-4">
              <p className="text-xl font-semibold text-neutral-800">{item.name}</p>
              <p className="text-sm text-neutral-500 mt-1">{item.speciality}</p>

              <div> <input onChange={()=> changeAvailablity(item._id)} type='checkbox' checked={item.available} /> <p>Available</p> </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorsList
