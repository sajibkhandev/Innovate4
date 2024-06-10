import React from 'react'
import Image from 'next/image'
import Logo from './../../public/logo.png'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const Navber = () => {
  return (
    <div className='py-[18px]'>
      <div className='max-w-container mx-auto'>
        <div className='flex items-center justify-between'>
          <Image
            src={Logo}
            width={80}
            height={80}
            alt="Picture of the author"
          />
          <ul className='flex gap-x-[40px]'>
            <li className='font-semibold text-[#29313D]'>Home</li>
            <li className='font-semibold text-[#29313D]'>About</li>
            <li className='font-semibold text-[#29313D]'>Service</li>
            <li className='font-semibold text-[#29313D]'>Price</li>
            <li className='font-semibold text-[#29313D]'>Blog</li>
          </ul>
          <button className='bg-[#8454F5] rounded-[18px] text-[#fff] font-semibold py-[14px] px-[28px]  border border-solid border-[#8454F5] hover:bg-transparent hover:text-[#8454F5] duration-300 '>Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default Navber