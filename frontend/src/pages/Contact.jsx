import React from 'react'
import {assets} from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-grayy-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image}alt="" />

        <div className ='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
            <p className='text-gray-500'>Hyderabad <br/> Telangana , India</p>
            <p className='text-gray-500'>Phone: (000) 000-0000 <br/> Email: thallaprudhvi15@gmail.com</p>
            <p className='font-semibold text-lg text-gray-600'>CAREERS AT MEDICLOUDCONNECT</p>
            <p className='text-gray-500'>Discover our work culture, explore departments, and browse current opportunities to join our team.</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>EXPLORE NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Contact