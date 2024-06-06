import React from 'react'
import Image from 'next/image'
import Logo from './../../public/logo.png'


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
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Price</li>
        <li>Blog</li>
      </ul>
    <button className='bg-blue-400 py-[14px] px-[28px]'>Contact Us</button>
      </div>
      </div>
    </div>
  )
}

export default Navber