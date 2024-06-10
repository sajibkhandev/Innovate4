import React from 'react'
import Image from 'next/image'
import Icon from './../../public/serviceIcon1.png'

const ServiceCart = () => {
    return (
        <div className='group p-6 bg-white border border-solid border-[#E0D5FD] rounded-[30px] hover:bg-[#8454F5] '>
            <div className='flex gap-x-[14px] items-center'>
                <Image
                    src={Icon}
                    alt="Picture of the author"
                />
                <h3 className='text-primary text-[28px] font-bold group-hover:text-[#fff]'>Set Daily Alarms</h3>

            </div>
            <p className='text-primary text-[18px] font-normal pt-[16px] pb-[24px] w-[392px] group-hover:text-[#fff]'>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.
            </p>
            <a className=' text-primary text-[20px] font-semibold group-hover:text-[#fff]'>Read more</a>
        </div>
    )
}

export default ServiceCart