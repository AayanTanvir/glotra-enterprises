'use client';

import { LuWheat } from "react-icons/lu";
import { HiOutlineBolt } from "react-icons/hi2";
import { RiOilLine } from "react-icons/ri";
import { LuPickaxe } from "react-icons/lu";
import { PiTestTube } from "react-icons/pi";

const IndustriesWeServe = () => {
    const industries = [
        {
            icon: <LuWheat className='text-foreground text-2xl' />,
            title: 'Agriculture',
            color: 'gold',
        },
        {
            icon: <HiOutlineBolt className='text-foreground text-2xl' />,
            title: 'Energy',
        },
        {
            icon: <RiOilLine className='text-foreground text-2xl' />,
            title: 'Oil & Gas',
        },
        {
            icon: <LuPickaxe className='text-foreground text-2xl' />,
            title: 'Mining',
        }
    ]

    return (
        <div className='w-4/5  h-fit flex justify-between items-center flex-col sm:flex-row px-4 mt-12 sm:gap-10'>
            <div className='h-full flex justify-center items-center flex-col sm:items-start mb-4 xl:mb-6'>
                <h2 className='font-geist text-2xl text-center sm:text-3xl xl:text-4xl font-semibold select-none'>Sectors <span className='text-primary-300'>We</span> Serve</h2>
                <p className='block font-geist text-center sm:text-left text-xs xl:text-base select-none'>We work with businesses in the following sectors and many more</p>
            </div>
            <div className='w-full sm:w-fit grid grid-cols-1 md:grid-cols-2 gap-4'>
                {industries.map((industry, index) => (
                    <div key={index} className={`flex justify-center items-center gap-2 px-4 py-2 border-[1px] border-foreground/30 rounded-lg hover:bg-primary-300/20 transition-all duration-200 ease-in-out`}>
                        {industry.icon}
                        <h3 className='font-geist text-base xl:text-lg font-semibold select-none text-nowrap whitespace-nowrap'>{industry.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default IndustriesWeServe
