import React from 'react';
import Button from '@/components/Button';

export default function Home() {
    return (
        <div className="w-full h-fit flex justify-start items-center flex-col mt-4">
            <div className='w-full h-[31rem]  flex justify-center items-center relative'>
                <div className='hidden md:flex md:w-[75%] h-fit justify-center items-center -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5'>
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
            <div className='w-full h-fit flex justify-center items-center flex-col'>

            </div>
        </div>
    );
}
