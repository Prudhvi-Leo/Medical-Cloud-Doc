import React,{useContext , useState , useEffect} from 'react'
import {useParams ,useNavigate } from 'react-router-dom'
import {AppContext} from '../context/AppContext'
const Doctors = () => {

  const {speciality} = useParams();
  const {doctors} = useContext(AppContext);
  const [filterDoc ,setFilterDoc] = useState([])
  const navigate = useNavigate();

  const [showFilter ,setShowFilter] = useState(false)

  const applyFilter = ()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc => doc.speciality.toLowerCase() === speciality.toLowerCase()))
    }
    else
      setFilterDoc(doctors)
  }

  useEffect(() => {
    applyFilter();
  }, [doctors , speciality])
  
  return (
    <div>
        <p className='text-gray-600'>Browse through the doctors specialist.</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
          <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={()=>setShowFilter(prev=>!prev)}>Fillter</button>
            <div className={` flex-col gap-4 text-sm text-gray-600 ${showFilter  ? 'flex' : 'hidden sm:flex'}`}>
                <p onClick={()=>{ speciality=='General physician' ? navigate('/doctors') : navigate('/doctors/General physician')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all duration-500 cursor-pointer ${speciality === "General physician" ? "bg-purple-200 text-black" :  "" }`}>General physician</p>
                <p onClick={()=>{ speciality=='Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all duration-500 cursor-pointer ${speciality ===  "Gynecologist" ? "bg-purple-200 text-black" :  "" }`}>Gynecologist</p>
                <p onClick={()=>{ speciality=='Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all duration-500 cursor-pointer ${speciality ===  "Dermatologist" ? "bg-purple-200 text-black" :  "" }`}>Dermatologist</p>
                <p onClick={()=>{ speciality=='Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all duration-500 cursor-pointer ${speciality ===  "Pediatricians"  ? "bg-purple-200 text-black" :  "" }`}>Pediatricians</p>
                <p onClick={()=>{ speciality=='Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all duration-500 cursor-pointer ${speciality ==="Neurologist"  ? "bg-purple-200 text-black" :  "" }`}>Neurologist</p>
                <p onClick={()=>{ speciality=='Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all duration-500 cursor-pointer ${speciality ===  "Gastroenterologist" ? "bg-purple-200 text-black" :  "" }`}>Gastroenterologist</p>
            </div>
            <div className ='w-full grid grid-cols-auto gap-4 gap-y-6'>
               {
                  filterDoc.map((item,index)=>{
                    return (
                        <div onClick={()=>{navigate(`/appointment/${item._id}`)}} className='border border-purple-400 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                            <img className='bg-purple-0 w-full h-48 
                          
                            ' src={item.image} alt="doctor profile" />
                            <div className='p-4'>
                                <div
                                className={`flex items-center gap-2 text-sm text-center ${
                                  item.available ? "text-green-500" : "text-red-500"
                                }`}>
                                <span
                                  className={`w-2 h-2 rounded-full ${
                                    item.available ? "bg-green-500" : "bg-red-500"
                                  }`}
                                ></span>
                                <p>{item.available ? "Available" : "Not Available"}</p>
                              </div>
                                <p className='text-gray-9000 text-lg font-medium'>{item.name}</p>
                                <p className='text-gray-600 text-sm'>{item.speciality}</p>
                            </div>
                        </div>
                    )
                })         
               } 
            </div>
        </div>
    </div>
  )
}

export default Doctors