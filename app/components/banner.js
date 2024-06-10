import Image from 'next/image'
import React from 'react'
import BannerImage from './../../public/bannerImage.png'
import Image1 from './../../public/7.png'
import Image2 from './../../public/8.png'
import Image3 from './../../public/9.png'
import Image4 from './../../public/10.png'
import Image5 from './../../public/11.png'
import Image6 from './../../public/12.png'


const Banner = () => {
  return (
    <div className='max-w-container mx-auto '>
        <div className='flex justify-between items-center'>
            <div>
                <h2 className='text-[64px] text-primary font-bold w-720 pt-200'>Professional task manager tool to grow </h2>
                <p className='relative after:absolute after:top-[28px] after:left-[0px] after:w-[6px] after:h-[80px] after:bg-[#FFC556] text-[18px] text-primary font-normal w-516 pt-[40px] pl-[20px] pb-[48px]'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.</p>
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


        <div className='flex justify-between py-[80px] mt-[120px]'>
        <Image src={Image1} alt="Picture of the author"/>
        <Image src={Image2} alt="Picture of the author"/>
        <Image src={Image3} alt="Picture of the author"/>
        <Image src={Image4} alt="Picture of the author"/>
        <Image src={Image5} alt="Picture of the author"/>
        <Image src={Image6} alt="Picture of the author"/>
        </div>

    </div>
  )
}

export default Banner