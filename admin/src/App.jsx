import { useState , useContext } from 'react'
import './App.css'
import Login from './pages/Login'
import {toast , ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {AdminContext} from './context/AdminContext'
import {DoctorContext} from './context/DoctorContext'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Outlet} from 'react-router-dom'

function App() {
  
  const {aToken} = useContext(AdminContext)
  const {dToken}  = useContext(DoctorContext)
  
  return (aToken || dToken) ? (
    <div className ='bg=[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Outlet/>
      </div>
    </div>
  ) : (
    <>
      <Login/>
      <Outlet/>
      <ToastContainer />
    </>
  )
}

export default App
