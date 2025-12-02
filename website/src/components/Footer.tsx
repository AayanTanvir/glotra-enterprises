import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-[4rem] sm:h-[6rem] flex justify-center sm:justify-evenly items-center sm:gap-6'>
            <p className='font-rubik text-center text-xs sm:text-base sm:text-md select-none text-white'>© {new Date().getFullYear()} Glotra Enterprises. All rights reserved.</p>
        </div>
    )
}

export default Footer
