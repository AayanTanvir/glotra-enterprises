'use client';

import React from 'react';
import WhyChooseUs from '@/sections/WhyChooseUs';
import IndustriesWeServe from '@/sections/IndustriesWeServe';
import Hero from '@/sections/Hero';

export default function Home() {

    return (
        <div className="w-full h-fit flex justify-start items-center flex-col mt-8 md:mt-16">
            <Hero />
            <div className='w-3/5 h-[1px] rounded-full bg-foreground/10 my-12 '/>
            <WhyChooseUs />
            <IndustriesWeServe />
        </div>
    );
}
