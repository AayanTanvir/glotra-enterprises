'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IoIosMenu } from "react-icons/io";
import useAppContext from '@/context/AppContext';
import NavbarLink from './NavbarLink';

const Navbar = () => {
    const { sidebar, setSidebar } = useAppContext();

    return (
        <nav className='w-full h-12 md:h-28 fixed top-0 left-0 z-50 px-4 md:p-0 bg-background flex justify-between sm:justify-evenly md:justify-start items-center '>
            <div className='md:min-w-[350px] md:h-full md:flex items-center justify-center md:bg-primary-800 md:border-b-4 border-primary-600'>
                <Link href='/' className='flex justify-center items-center gap-2 cursor-pointer select-none'>
                    <Image src="/glotra_logo.svg" alt="Glotra Logo" width={30} height={30} className='md:w-[70px] md:h-[70px]' />
                    <div className='flex flex-col justify-start items-start'>
                        <h1 className='font-rubik text-xl sm:text-2xl md:text-4xl font-semibold'>Glotra</h1>
                        <p className='hidden md:inline font-rubik text-xs'>Enterprises (Pvt.) Ltd.</p>
                    </div>
                </Link>
            </div>
            <div className='hidden sm:flex md:flex-1 md:h-full justify-between md:justify-center items-center gap-2 sm:gap-4'>
                <NavbarLink to="/contact">Contact Us</NavbarLink>
                <NavbarLink to="/about">About Us</NavbarLink>
                <NavbarLink to="/products">Products</NavbarLink>
                <NavbarLink to="/services">Services</NavbarLink>
            </div>
            <div onClick={() => { setSidebar(!sidebar); }} className='block sm:hidden cursor-pointer min-w-8'>
                <IoIosMenu className='text-2xl text-foreground' />
            </div>
        </nav>
    )
}

export default Navbar;