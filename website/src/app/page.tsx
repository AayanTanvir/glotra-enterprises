'use client';

import React from 'react';
import Button from '@/components/Button';
import Image from 'next/image';
import { BiWorld } from "react-icons/bi";
import { FiMessageCircle } from "react-icons/fi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { LuWheat } from "react-icons/lu";
import { HiOutlineBolt } from "react-icons/hi2";
import { RiOilLine } from "react-icons/ri";
import { MdOutlineFactory } from "react-icons/md";
import { PiTestTube } from "react-icons/pi";

export default function Home() {


    const whyUsPoints = [
        {
            icon: <BiWorld className='text-foreground text-2xl xs:text-3xl' />,
            title: 'Global Partnerships',
            description: 'We work with trusted manufacturers worldwide to help businesses source products across various sectors with confidence.'
        },
        {
            icon: <MdWorkOutline className='text-foreground text-2xl xs:text-3xl' />,
            title: 'Years of Experience',
            description: 'We manage logistics efficiently to ensure timely delivery of goods.'
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

    const industries = [
        {
            icon: <LuWheat className='text-foreground text-2xl xs:text-3xl' />,
            title: 'Agriculture',
            color: 'gold',
        },
        {
            icon: <HiOutlineBolt className='text-foreground text-2xl xs:text-3xl' />,
            title: 'Energy',
        },
        {
            icon: <RiOilLine className='text-foreground text-2xl xs:text-3xl' />,
            title: 'Oil & Gas',
        },
        {
            icon: <MdOutlineFactory className='text-foreground text-2xl xs:text-3xl' />,
            title: 'Manufacturing',
        },
        {
            icon: <PiTestTube className='text-foreground text-2xl xs:text-3xl' />,
            title: 'Chemicals',
        }
    ]

    return (
        <div className="w-full h-fit flex justify-start items-center flex-col mt-8 md:mt-16">
            <div className='w-full h-[30rem] flex justify-center items-center relative '>
                <div className='hidden md:flex md:w-[75%] md:max-w-[1080px] h-full justify-center items-center -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 dark:opacity-5'>
                    <Image src='/world_map.svg' alt="World map" fill className="object-contain" />
                </div>
                <div className='w-full h-full flex justify-center items-center flex-col gap-4'>
                    <div className='px-4'>
                        <h1 className="font-geist text-3xl sm:text-4xl md:text-6xl select-none text-center tracking-tight mb-2 font-semibold">Glotra Enterprises</h1>
                        <h3 className="text-sm sm:text-lg font-geist select-none text-center">Trading support, indenting, and import/export services for businesses worldwide</h3>
                    </div>
                    <div className='w-fit h-fit flex justify-between items-center gap-4'>
                        <Button to='/contact'>Contact Us</Button>
                        <Button to='/about' variant="outline">About Us</Button>
                    </div>
                </div>
            </div>
            <div className='w-3/5 h-[1px] rounded-full bg-foreground/10 my-12 '/>
            <div className='w-full h-fit flex justify-start items-center flex-col px-4 mb-12'>
                <h2 className='font-geist text-2xl sm:text-3xl xl:text-4xl font-semibold mb-4 xl:mb-6 select-none italic'>Why Choose <span className='text-primary-300'>Us</span>?</h2>
                <div className='w-full sm:w-4/5 h-fit flex flex-col justify-start items-start gap-6'>
                    {whyUsPoints.map((point, index) => (
                        <div className='w-full sm:w-4/5 h-fit flex justify-start items-center' key={index}>
                            <div className='w-12 h-12 flex justify-center items-center border-[1px] border-foreground/30 rounded-full'>
                                {point.icon}
                            </div>
                            <div className='flex-1 flex flex-col justify-start items-start pl-4 gap-1'>
                                <h3 className='font-geist text-base xl:text-xl font-semibold select-none'>{point.title}</h3>
                                <p className='font-geist text-xs xl:text-base select-none'>{point.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-4/5 xl:w-[70%] h-fit flex justify-between items-center flex-col sm:flex-row px-4 mt-12 sm:gap-10'>
                <div className='h-full flex justify-center items-center flex-col sm:items-start mb-4 xl:mb-6'>
                    <h2 className='font-geist text-2xl text-center sm:text-3xl xl:text-4xl font-semibold select-none'>Industries <span className='text-primary-300'>We</span> Serve</h2>
                    <p className='hidden sm:block font-geist text-xs xl:text-base select-none'>We work with businesses in the following industries and others</p>
                </div>
                <div className='w-full sm:w-fit grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {industries.map((industry, index) => (
                        <div key={index} className={`flex justify-center items-center gap-2 sm:p-2 sm:border-[1px] sm:border-foreground/30 sm:rounded-lg hover:bg-primary-300/5 transition-all duration-200 ease-in-out`}>
                            {industry.icon}
                            <h3 className='font-geist text-base xl:text-xl font-semibold select-none'>{industry.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
