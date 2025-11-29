import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import all context providers
import AdminContextProvider from './context/AdminContext.jsx'
import DoctorContextProvider from './context/DoctorContext.jsx'
import AppContextProvider from './context/AppContext.jsx'
import {createBrowserRouter , RouterProvider} from 'react-router'
import DashBoard from './pages/admin/DashBoard'
import AllAppointments from './pages/admin/AllAppointments'
import AddDoctor from './pages/admin/AddDoctor'
import DoctorsList from './pages/admin/DoctorsList'
import DoctorDashboard from './pages/Doctor/DoctorDashboard'
import DoctorAppointment from './pages/Doctor/DoctorAppointment'
import DoctorProfile from './pages/Doctor/DoctorProfile'

const router = createBrowserRouter([
    {
        path : '/' ,
        element : <App/>,
        children : [
           {path : '/' , element : <></>},
           {path: '/admin-dashboard' , element : <DashBoard/>},
           {path: '/all-appointments' , element : <AllAppointments/>},
           {path: '/add-doctor' , element :<AddDoctor/>},
           {path: '/doctor-list' , element :<DoctorsList/>},
           {path: '/doctor-dashboard' , element :<DoctorDashboard/> },
           {path: '/doctor-appointments' , element :<DoctorAppointment/> },
           {path: '/doctor-profile' , element :<DoctorProfile/>},
        ]
    }
])  






createRoot(document.getElementById('root')).render(
    <AdminContextProvider>
        <DoctorContextProvider>
            <AppContextProvider>
                <RouterProvider router = {router}/>
            </AppContextProvider>
        </DoctorContextProvider>
    </AdminContextProvider>    
)
