import Image from 'next/image'
import React from 'react'
import ImageRate from './../../public/rateing.png'

const Rateing = () => {
  return (
    <div className='max-w-container mx-auto '>
        <div className='flex justify-center items-center pt-[70px]'>
            <div className='w-5/12 flex items-center'>
            <Image
            src={ImageRate}
           
            alt="Picture of the author"
          />
          <h6 className='text-[24px] text-[#545A64] font-semibold'>Watch a demo</h6>
            </div>
            <div className='w-7/12 flex justify-between'>
            <div>
                <h4 className='text-[64px] text-primary font-semibold'>2.8x</h4>
                <p className='w-[185px] text-lg text-[#29313D] font-normal pt-2'>We are ultra faste deal service</p>
            </div>
            <div>
                <h4 className='text-[64px] text-primary font-semibold'>68%</h4>
                <p className='w-[185px] text-lg text-[#29313D] font-normal pt-2'>More deal closed services</p>
            </div>
            <div>
                <h4 className='text-[64px] text-primary font-semibold'>2.4x</h4>
                <p className='w-[185px] text-lg text-[#29313D] font-normal pt-2'>We slove issue ultra faster</p>
            </div>
            </div>
        </div>


        </div>
  )
}

export default Rateing