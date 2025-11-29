import React from 'react'
import {assets} from '../assets/assets_frontend/assets'
import {useNavigate} from 'react-router-dom'
const Banner = () => {

  const navigate = useNavigate();

  return (
    <div className='flex mt-40 justify-between bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
        <div className='py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-xl sm:text-1xl md:text-2xl lg:text-3xl font-semibold text-white'>
                <p>Schedule your consultation</p>
                <p className='mt-4'>with verified and trusted medical practitioners</p>
            </div>
            <button onClick={()=>{
              navigate('/login');scrollTo(0,0)
            }} className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all duration-500'>Create account</button>
        </div>

        <div className='hidden lg:block  lg:w-[370px] relative'>
              <img className='absolute bottom-0 right-0 xl:min-w-[35rem] md:min-w-[30rem]'src={assets.appointment_img} alt="" />
        </div>
    </div>
  )
}

export default Banner