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
            <div className='w-7/12'>ldsf</div>
        </div>


        </div>
  )
}

export default Rateing