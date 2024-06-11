import Image from 'next/image'
import React from 'react'
import LayerImage1 from '../../public/businessLayer1.png'
import LayerImage2 from '../../public/businessLayer2.png'

const Business = () => {
    return (
        <div className='relative '>
              <Image
                className='absolute top-[50%] -translate-y-[50%] left-[0px] -z-10 '
               
                    src={LayerImage1}
                    alt="Picture of the author"
                />
                <div className='max-w-container mx-auto '>
            <div className='flex justify-between items-center py-[180px]'>
                <div className='relative'>
              
                <Image
                    src={LayerImage2}
                    alt="Picture of the author"
                />

                </div>
                <div>
                    <h2 className='text-[56px] text-primary font-bold w-[689px] '>Join with any business tasks and any goals</h2>
                    <p className='text-[18px] text-primary font-normal w-[575px] pt-6 '>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem.</p>
                </div>

            </div>


        </div>
        </div>
        
    )
}

export default Business