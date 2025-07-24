'use client';
import React from 'react'
import Image from 'next/image';
import Navlink from './Navlink';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className='w-full h-fit fixed top-0 left-0 z-50 p-4 bg-background flex justify-evenly items-center'>
            <Link href='/' className='w-fit h-fit flex justify-center items-center gap-1 cursor-pointer'>
                <Image src="/glotra_logo.svg" alt="Glotra Logo" width={30} height={30} />
                <h1 className='hidden sm:block font-rubik text-2xl font-semibold'>Glotra</h1>
            </Link>
            <nav className='w-fit h-full flex justify-between items-center gap-2 sm:gap-4'>
                <Navlink to="/about" className='text-xs text-nowrap sm:text-base'>About Us</Navlink>
                <Navlink to="/products" className='text-xs text-nowrap sm:text-base'>Products</Navlink>
                <Navlink to="/services" className='text-xs text-nowrap sm:text-base'>Services</Navlink>
                <Navlink to="/contact" className='text-xs text-nowrap sm:text-base'>Contact Us</Navlink>
            </nav>
        </div>
    )
}