'use client';

import Button from '@/components/Button';
import { useEffect, useRef, useState } from 'react';
import { IoIosInformationCircleOutline, IoMdCall } from "react-icons/io";
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

const Hero = () => {
    const slidesRef = useRef<HTMLElement[]>([]);
    const [count, setCount] = useState(0);
    const [slidesCount, setSlidesCount] = useState(0);

    useEffect(() => {
        const nodeList = document.querySelectorAll<HTMLElement>('.slide');
        slidesRef.current = Array.from(nodeList);
        slidesRef.current.forEach((slide, index) => {
            slide.style.left = `${index * 100}%`;
        });
        setSlidesCount(slidesRef.current.length);
    }, []);

    const slideHero = (to: number) => {
        slidesRef.current.forEach((slide) => {
        slide.style.transform = `translateX(-${to * 100}%)`;
        });
    };

    const goPrev = () => {
        if (count <= 0) return;
        const newCount = count - 1;
        setCount(newCount);
        slideHero(newCount);
    };

    const goNext = () => {
        if (count >= slidesRef.current.length - 1) return;
        const newCount = count + 1;
        setCount(newCount);
        slideHero(newCount);
    };

    return (
        <div className='w-full h-[30rem] flex md:flex-col md:gap-4 justify-center items-center md:pt-4'>
            <div className='hidden md:block w-[98%] h-full relative overflow-x-hidden'>
                <div className='slide w-full h-full absolute bg-primary-600 transition duration-500'>

                </div>
                <div className='slide w-full h-full absolute bg-red-600 transition duration-500'>

                </div>
                <div className='slide w-full h-full absolute bg-green-600 transition duration-500'>

                </div>
                <div className='slide w-full h-full absolute bg-amber-600 transition duration-500'>
 
                </div>
            </div>
            <div className='flex justify-center items-center gap-6'>
                <div onClick={() => { goPrev() }} className={`select-none w-fit h-fit p-1 border-[1px] border-foreground flex justify-center items-center ${count === 0 ? 'cursor-not-allowed border-foreground/20' : 'cursor-pointer'}`}>
                    <MdNavigateBefore className={`text-xl text-foreground ${count === 0 ? 'text-foreground/20' : ''}`}/>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    {Array.from({ length: slidesCount }).map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full border-[1px] border-foreground ${i === count ? 'bg-foreground' : ''}`} />
                    ))}
                </div>
                <div onClick={() => { goNext() }} className={`select-none w-fit h-fit p-1 border-[1px] border-foreground flex justify-center items-center ${count === slidesRef.current.length - 1 ? 'cursor-not-allowed border-foreground/20' : 'cursor-pointer'}`}>
                    <MdNavigateNext className={`text-xl text-foreground ${count === slidesRef.current.length - 1 ? ' text-foreground/20' : ''}`}/>
                </div>
            </div>

            <div className='md:hidden w-full h-full flex justify-center items-center flex-col gap-4'>
                <div className='px-4'>
                    <h1 className="font-geist text-3xl sm:text-4xl md:text-6xl select-none text-center tracking-tight mb-2 font-semibold">Glotra Enterprises</h1>
                    <h3 className="text-sm sm:text-lg font-geist select-none text-center">Indenting, and import/export services for businesses worldwide</h3>
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
