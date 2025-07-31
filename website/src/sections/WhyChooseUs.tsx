'use client';

import { BiWorld } from "react-icons/bi";
import { FiMessageCircle } from "react-icons/fi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";

const WhyChooseUs = () => {

    const points = [
        {
            icon: <BiWorld className='text-foreground text-2xl xs:text-3xl' />,
            title: 'Global Partnerships',
            description: 'We work with trusted manufacturers worldwide to help businesses source products across various sectors with confidence.'
        },
        {
            icon: <MdWorkOutline className='text-foreground text-2xl xs:text-3xl' />,
            title: 'Years of Experience',
            description: 'With over 20 years in the industry, we have the expertise to navigate complex supply chains and deliver results.'
        },
        {
            icon: <IoShieldCheckmarkOutline className='text-foreground text-2xl xs:text-3xl' />,
            title: 'Quality Assurance',
            description: 'We ensure the highest standards of quality in all our products and services.'
        },
        {
            icon: <FiMessageCircle className='text-foreground text-2xl xs:text-3xl' />,
            title: 'Transparent Communication',
            description: 'We keep you informed at every step, from inquiry to delivery.'
        },
    ]

    return (
        <div className='w-full h-fit flex justify-start items-center flex-col px-4 mb-12'>
            <h2 className='font-geist text-2xl sm:text-3xl xl:text-4xl font-semibold mb-4 xl:mb-6 select-none italic'>Why Choose <span className='text-primary-300'>Us</span>?</h2>
            <div className='w-full sm:w-4/5 h-fit flex flex-col justify-start items-start gap-6'>
                {points.map((point, index) => (
                    <div className='w-full h-fit flex justify-start items-center gap-4' key={index}>
                        <div className='min-w-12 h-12 flex justify-center items-center border-[1px] border-foreground/30 rounded-full'>
                            {point.icon}
                        </div>
                        <div className='flex flex-col justify-start items-start gap-1'>
                            <h3 className='font-geist text-base xl:text-xl font-semibold select-none'>{point.title}</h3>
                            <p className='font-geist text-xs xl:text-base select-none'>{point.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyChooseUs
