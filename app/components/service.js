import React from 'react'
import ServiceCart from './serviceCart'

const Service = () => {
  return (
    <div className='max-w-container mx-auto mt-[120px] '>
        <div className='flex justify-between items-center'>
            
           <div>
            <h2 className='text-[#29313D] text-[56px] font-bold w-[564px]'>
            The best solutions in one tool
            </h2>
           </div>
           <div>
            <p  className='relative after:absolute after:top-[28px] after:left-[0px] after:w-[6px] after:h-[120px] after:bg-[#FFC556] text-[18px] text-primary font-normal w-[675px] pt-[40px] pl-[20px] pb-[48px]'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem.</p>
           </div>
        </div>
        <div className='flex gap-[30px] flex-wrap mt-[80px] mb-[120px]'>

            <ServiceCart/>
            <ServiceCart/>
            <ServiceCart/>
            <ServiceCart/>
            <ServiceCart/>
            <ServiceCart/>
            
            
       
        </div>
    </div>
  )
}

export default Service