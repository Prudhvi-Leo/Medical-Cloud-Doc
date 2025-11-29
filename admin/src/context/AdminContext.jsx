import {createContext , useState} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify'


export const AdminContext = createContext()

const AdminContextProvider =  ({children}) => {

    const [aToken , setAToken] = useState(localStorage.getItem('aToken')  || '');
    const [doctors,setDoctors] = useState([]);
    const [appointments , setAppointments] = useState([])
    const [dashData , setDashData] = useState(false)
    const backendUrl = import.meta.env.VITE_BACKENDURL

    const getAllDoctors = async () => { 
        try {
            const {data} = await axios.post(`${backendUrl}/api/admin/all-doctors`, {} , {
            headers: {Authorization: `Bearer ${aToken}`}});
            if(data?.success){
                setDoctors(data?.doctors);
            }
            else{
                toast.error(data?.message);
            }   
        } catch (error) {
            toast.error('Something went wrong in fetching doctors list' , error.message);
        }
    }

    const changeAvailablity = async (docId) =>{
        try {
            const {data} = await axios.post(`${backendUrl}/api/admin/change-availablity`, {docId} , {
            headers: {Authorization: `Bearer ${aToken}`}});
            
            if(data?.success){
                toast.success(data.message)
                getAllDoctors();
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const getAllAppointments = async () => {
        try {
            
            const {data} = await axios.get(backendUrl + '/api/admin/appointments' , {
            headers: {Authorization: `Bearer ${aToken}`}})

            if(data.success){
                setAppointments(data.appointments)
            }
            else{
                toast.error(data.message)
            }


        } catch (error) {
            toast.error(error.message);
        }
    }

    const cancelAppointment = async (appointmentId) =>{
        try {
            const {data} = await axios.post(backendUrl + '/api/admin/cancel-appointment' , {appointmentId} , {
            headers: {Authorization: `Bearer ${aToken}`}})

            if(data.success){
                toast.success(data.message)
                getAllAppointments()
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
           toast.error(error.message);
        }
    }

    const getDashData = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/admin/dashboard' , {
            headers: {Authorization: `Bearer ${aToken}`}})
            if(data.success){
                setDashData(data.dashData)
            }
            else{
             toast.error(data.message);                          
            }

        } catch (error) {
            toast.error(error.message);           
        }
    }

    const value ={
        aToken,
        setAToken,
        backendUrl,
        doctors,
        getAllDoctors,
        changeAvailablity,
        appointments,
        setAppointments,
        getAllAppointments,
        cancelAppointment,
        dashData ,
        setDashData,
        getDashData
    }

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider;