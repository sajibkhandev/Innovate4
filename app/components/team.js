import Image from 'next/image'
import React from 'react'
import ImageIcon from '../../public/teamIcon.png'
import TeamCart from './teamCart'

const Team = () => {
    return (
        <div className='max-w-container mx-auto py-[120px]'>
            <h2 className='text-[56px] mx-auto text-primary font-bold text-center w-[689px]'>
                Build the right plan for your team.
            </h2>
            <div className='flex gap-x-[20px] justify-center pb-[84px] pt-[36px]'>
                <span className='text-[28px] font-bold text-[#29313D]'>Monthly</span>
                <Image
                    src={ImageIcon}
                    alt="Picture of the author"
                />
                <span className='text-[28px] font-bold text-[#29313D]'>Yearly</span>
            </div>

            {/* Cart start */}
            <div className='flex justify-between'>
            <TeamCart/>
            <TeamCart/>
            <TeamCart/>
            </div>

            {/* Cart end */}


        </div>
    )
}

export default Team