import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-[4rem] sm:h-[6rem] flex justify-center sm:justify-evenly items-center sm:gap-6'>
            <div className='hidden sm:flex justify-center items-center gap-2 select-none'>
                <Image src="/glotra_logo.svg" alt="Glotra Logo" width={30} height={30} className='md:w-[70px] md:h-[70px]' />
                <div className='flex flex-col justify-start items-start'>
                    <h1 className='font-rubik text-white text-xl sm:text-2xl md:text-4xl font-semibold'>Glotra</h1>
                    <p className='hidden text-white md:inline font-rubik text-xs'>Enterprises (Pvt.) Ltd.</p>
                </div>
            </div>
            <p className='font-rubik text-center text-xs sm:text-base sm:text-md select-none'>© {new Date().getFullYear()} Glotra Enterprises. All rights reserved.</p>
        </div>
    )
}

export default Footer
