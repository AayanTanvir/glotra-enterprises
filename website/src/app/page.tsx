'use client';

import React from 'react';
import WhyChooseUs from '@/sections/WhyChooseUs';
import Hero from '@/sections/Hero';
import Products from '@/sections/Products';

export default function Home() {

    return (
        <div className="w-full h-fit flex justify-start items-center flex-col mt-12 md:mt-28">
            <Hero />
            <div className='w-3/5 h-[1px] rounded-full bg-foreground/10 mt-12 md:mt-10 '/>
            <Products />
            <WhyChooseUs />
        </div>
    );
}
