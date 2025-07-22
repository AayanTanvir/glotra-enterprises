'use client';

import React, { useState, useEffect } from 'react';
import Button from '@/components/Button';
import { BsGlobe } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { RiMenuSearchLine, RiTeamLine } from "react-icons/ri";

export default function Home() {

    return (
        <div className="w-full h-fit flex justify-start items-center flex-col mt-8 md:mt-16">
            <div className='w-full h-[30rem] flex justify-center items-center relative '>
                <div className='hidden md:flex md:w-[75%] md:max-w-[1080px] h-fit justify-center items-center -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 dark:opacity-5'>
                    <img src='/world_map.svg' alt="" className="w-full h-full object-contain" />
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
            <div className='w-4/5 h-[1px] rounded-full bg-foreground opacity-20 my-12 '/>
            <div className='w-full h-fit flex justify-start items-center flex-col px-4'>
                <h2 className='font-geist text-2xl sm:text-3xl xl:text-4xl font-semibold mb-4 xl:mb-6 select-none'>Our Services</h2>
                <div className='w-full md:w-4/5 h-fit grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='w-full h-full rounded-lg border-[1px] border-foreground flex justify-normal items-center '>
                        <div className='w-12 xl:w-16 h-full flex justify-center items-center'>
                            <FaRegHandshake className='text-foreground text-2xl lg:text-3xl xl:text-4xl' />
                        </div>
                        <div className='flex-1 flex flex-col justify-start items-start gap-1 p-2 lg:py-4'>
                            <h3 className='font-geist text-base xl:text-xl font-semibold select-none'>Indenting</h3>
                            <p className='font-geist text-xs xl:text-base leading-4.5 select-none'>We act as a trusted bridge between buyers and international suppliers, ensuring smooth trade deals from start to finish.</p>
                        </div>
                    </div>
                    <div className='w-full h-full rounded-lg border-[1px] border-foreground flex justify-normal items-center '>
                        <div className='w-12 xl:w-16 h-full flex justify-center items-center'>
                            <RiTeamLine className='text-foreground text-2xl lg:text-3xl xl:text-4xl' />
                        </div>
                        <div className='flex-1 flex flex-col justify-start items-start gap-1 p-2 lg:py-4'>
                            <h3 className='font-geist text-base xl:text-xl font-semibold select-none'>Trading Consultation</h3>
                            <p className='font-geist text-xs xl:text-base leading-4.5 select-none'>We offer comprehensive trading consultation services to help you navigate the global market.</p>
                        </div>
                    </div>
                    <div className='w-full h-full rounded-lg border-[1px] border-foreground flex justify-normal items-center '>
                        <div className='w-12 xl:w-16 h-full flex justify-center items-center'>
                            <BsGlobe className='text-foreground text-2xl lg:text-3xl xl:text-4xl' />
                        </div>
                        <div className='flex-1 flex flex-col justify-start items-start gap-1 p-2 lg:py-4'>
                            <h3 className='font-geist text-base xl:text-xl font-semibold select-none'>Import/Export</h3>
                            <p className='font-geist text-xs xl:text-base leading-4.5 select-none'>We handle global shipping and documentation, helping you import or export products efficiently and legally.</p>
                        </div>
                    </div>
                    <div className='w-full h-full rounded-lg border-[1px] border-foreground flex justify-normal items-center '>
                        <div className='w-12 xl:w-16 h-full flex justify-center items-center'>
                            <RiMenuSearchLine className='text-foreground text-2xl lg:text-3xl xl:text-4xl' />
                        </div>
                        <div className='flex-1 flex flex-col justify-start items-start gap-1 p-2 lg:py-4'>
                            <h3 className='font-geist text-base xl:text-xl font-semibold select-none'>Product Sourcing</h3>
                            <p className='font-geist text-xs xl:text-base leading-4.5 select-none'>We provide dedicated team support services to help you achieve your business goals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
