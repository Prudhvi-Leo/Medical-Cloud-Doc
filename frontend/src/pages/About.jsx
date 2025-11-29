import React from 'react'
import {assets} from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w=full md:max-w-[360px]'src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to MediCloudDoc — a smart, reliable, and modern way to manage your healthcare with ease. We understand how overwhelming it can be to search for doctors, book appointments, and track medical details. That's why MediCloudDoc brings everything together in one simple, accessible platform.</p>
          <p>MediCloudDoc leverages cutting-edge technology to offer a smooth and intuitive experience. Whether you are scheduling a consultation or managing follow-up visits, our platform ensures speed, clarity, and convenience at every step.</p>
          <b className='text-gray-800'>Our Goal</b>
          <p>At MediCloudDoc, our mission is to simplify the healthcare journey for patients. We strive to build a seamless connection between users and medical professionals, enabling quick access to trusted doctors, timely appointments, and a stress-free healthcare experience.</p>

        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold' >CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Book appointments quickly and smoothly, without interrupting your daily routine.</p>
        </div >
         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>ACCESSIBILITY:</b>
          <p>Connect with verified medical experts nearby, whenever you need them.</p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONAL CARE:</b>
          <p>Receive customized suggestions and timely notifications to support your ongoing healthcare needs</p>
        </div>
      </div>
    </div>
  )
}

export default About