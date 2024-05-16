import React from 'react'
import BannerCover from '../assets/banner.png'
import Logo from '../assets/logo.png'

function Banner() {
  return (
    <div className='w-full h-64 bg-gray-500 relative'>
        <img src={BannerCover} className='w-full h-80' alt="Banner" />
        <img src={Logo} alt="logo" className='absolute z-10 right-2 top-2'/>
        <div className='absolute left-[780px] top-28 w-[500px]'>
        <h1 className='text-[#CA2531] text-5xl capitalize font-bold '>Partner with us</h1>
        <p className='font-bold'>Be our partner in just few steps and start Increasing your reach by gaining new customers.</p>
        </div>
    </div>
  )
}

export default Banner