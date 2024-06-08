import Image from 'next/image'
import React from 'react'
import BannerImage from './../../public/bannerImage.png'

const Banner = () => {
  return (
    <div className='max-w-container mx-auto'>
        <div className='flex justify-between items-center'>
            <div>
                <h2 className='text-[64px] text-primary font-bold w-720 pt-200'>Professional task manager tool to grow </h2>
                <p className='text-[18px] text-primary font-normal w-516 pt-[40px] pb-[48px]'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.</p>
                <div className='relative w-[600px]'>
                    <input className='w-full py-[28px] px-[38px]  text-white bg-[#F9F6FE] rounded-[24px]' placeholder='Join with us using your gmail address'/>
                    <button className='absolute top-[50%] -translate-y-1/2 right-[16px] bg-[#8454F5] rounded-[18px] text-[#fff] font-semibold py-[14px] px-[28px]'>Sign up</button>
                </div>
            </div>
            <div>
            <Image
            src={BannerImage}
           
            alt="Picture of the author"
          />
            </div>
        </div>

    </div>
  )
}

export default Banner