import React from 'react'
import {assets} from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
              <img className='mb-5 w-56'src={assets.logo} alt="" />
              <p className='w-full md:w-2/3 text-gray-600 leading-6'>MedCloudConnect is an online healthcare platform that connects patients with certified, experienced doctors. Our mission is to make medical consultations accessible, fast, and reliable — anytime, anywhere.</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
              <li>Home</li>
              <li>About Us</li>
              <li>Find Doctors</li>
              <li>Book Appointment</li>
              <li>FAQs</li>
              <li>Privacy policy</li>
            </ul>
        </div>          
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
              <li>+91-0000000000</li>
              <li>thallaprudhvi15@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright {new Date().getFullYear()} @ Thalla Prudhvi Rao- All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer