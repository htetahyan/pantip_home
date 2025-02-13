'use client'
import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='relative w-full md:h-[200px] h-[120px] bg-[#2D2B3D]'>
      {/* Logo */}
     

      {/* Banner Image */}
      <div className='absolute inset-0 w-full h-full'>
        <Image 
          src="https://ptcdn.info/doodle/2024/5d07273900d01f33da0f618c_kltlxiu7k8.png" 
          alt="Banner"
          fill
          className='object-cover w-full'
          sizes="100vw"
          quality={100}
          priority
        />
      </div>

      {/* Wave Pattern Overlay */}
      {/* <div className='absolute bottom-0 left-0 right-0'>
        <svg 
          viewBox="0 0 1200 20" 
          className='w-full h-5  transform translate-y-1'
          preserveAspectRatio="none"
        >
          <path d="M0,0 C300,20 900,20 1200,0 L1200,20 L0,20 Z" />
        </svg>
      </div> */}
    </div>
  )
}

export default Banner
