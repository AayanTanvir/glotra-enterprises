'use client';

import Image from 'next/image';
import Button from '@/components/Button';
import { IoIosInformationCircleOutline, IoMdCall } from "react-icons/io";

const Hero = () => {
    return (
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
                    <Button to='/contact' icon={<IoMdCall className='text-xl text-white dark:text-foreground'/>}>Contact Us</Button>
                    <Button to='/about' variant="transparent" icon={<IoIosInformationCircleOutline className='text-xl text-foreground'/>}>About Us</Button>
                </div>
            </div>
        </div>
    )
}

export default Hero
