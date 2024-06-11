import Image from 'next/image'
import React from 'react'
import DistributeImage from './../../public/distributeImage.png'

const Distibutate = () => {
  return (
    <div className='max-w-container mx-auto '>
        
           <div className='w-full  bg-[#F8F5FE] rounded-[24px] flex justify-around items-center'>

        <div className='font-semibold text-[#8454F5] text-[20px] py-[26px] px-[62px] hover:bg-[#8454F5] hover:text-[#fff] my-[15px] rounded-[18px] duration-300'>Artificial Intelligence</div>
        <div className='font-semibold text-[#8454F5] text-[20px] py-[26px] px-[62px] hover:bg-[#8454F5] hover:text-[#fff] my-[15px] rounded-[18px] duration-300'>Header Builder</div>
        <div className='font-semibold text-[#8454F5] text-[20px] py-[26px] px-[62px] hover:bg-[#8454F5] hover:text-[#fff] my-[15px] rounded-[18px] duration-300'>Safe and Private</div>
        <div className='font-semibold text-[#8454F5] text-[20px] py-[26px] px-[62px] hover:bg-[#8454F5] hover:text-[#fff] my-[15px] rounded-[18px] duration-300'>Mobility Solutions</div>
           </div>
           {/* part two start */}
           <div className='flex justify-between items-center pt-[120px]'>
          
            <Image
                src={DistributeImage}
                alt="Picture of the author"
            />

            
            <div>
                <h2 className='text-[56px] text-primary font-bold w-[689px] pb-6'>
                No more messy distribution lists.
                </h2>
                <p className='w-[575px] text-lg text-primary font-normal mb-12'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page. You can also use the shop features for all demos.</p>
                <button className='bg-[#8454F5] rounded-[18px] text-[#fff] font-semibold py-[14px] px-[28px]  border border-solid border-[#8454F5] hover:bg-transparent hover:text-[#8454F5] duration-300 '>Get started</button>
                
            </div>
           </div>

           {/* part two  end*/}



        </div>
  )
}

export default Distibutate