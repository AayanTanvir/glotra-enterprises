'use client';
import React from 'react'
import Navlink from './Navlink';
import Link from 'next/link';

export default function Navbar() {


    return (
        <div className='w-full h-fit fixed top-0 left-0 z-50 p-4 bg-background flex justify-evenly items-center'>
            <Link href='/' className='w-fit h-fit flex justify-center items-center gap-1 cursor-pointer'>
                <img src="/glotra_logo.svg" alt="" className='w-6' />
                <h1 className='font-rubik text-2xl font-semibold'>Glotra</h1>
            </Link>
            <nav className='w-fit h-full flex justify-between items-center gap-4'>
                <Navlink to="/about">About Us</Navlink>
                <Navlink to="/services">Services</Navlink>
                <Navlink to="/contact">Contact Us</Navlink>
            </nav>
        </div>
    )
}