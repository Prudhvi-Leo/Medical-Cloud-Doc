import React from 'react'
import {Outlet} from 'react-router-dom'
import {toast , ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
   <div className="mx-4 sm:mx-[10%]">
       <Navbar />
       <Outlet/>
       <Footer/>
        <ToastContainer position="top-right" autoClose={2000} />
   </div>  
  )
}

export default App
