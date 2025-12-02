'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IoIosMenu } from "react-icons/io";
import useAppContext from '@/context/AppContext';
import NavbarLink from './NavbarLink';

const Navbar = () => {
    const { sidebar, setSidebar } = useAppContext();


    //TODO: find a way to decrease gap between smc and title. Also need to get correct primary color from logo.
    return (
        <nav className='w-full h-12 md:h-28 fixed top-0 left-0 z-50 border-b-2 dark:border-none border-foreground px-4 md:p-0 bg-background flex justify-between sm:justify-evenly md:justify-start items-center '>
            <div className='md:min-w-[400px] lg:min-w-[550px] md:h-full md:flex items-center justify-center md:bg-primary-400'>
                <Link href='/' className='flex justify-center items-center gap-2 cursor-pointer select-none'>
                    <Image src="/glotra_logo.svg" alt="Glotra Logo" width={30} height={30} className='md:w-[70px] md:h-[70px]' />
                    <div className='flex flex-col justify-start items-start relative'>
                        <h1 className='font-rubik text-white text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold'>Glotra Enterprises</h1>
                        <p className='hidden text-white md:inline font-rubik font-light text-sm lg:text-lg'>(SMC - Pvt.) Ltd.</p>
                    </div>
                </Link>
            </div>
            <div className='md:w-full md:h-full md:flex md:flex-col md:justify-center md:items-center relative'>
                <div className='hidden bg-primary-400 lg:flex md:justify-center md:items-center md:gap-6 md:px-4 md:absolute md:h-[75%] md:top-[25%] md:rounded-t'>
                    <NavbarLink to="/">Home</NavbarLink>
                    <NavbarLink to="/contact">Contact Us</NavbarLink>
                    <NavbarLink to="/about">About Us</NavbarLink>
                    <NavbarLink to="/products">Products</NavbarLink>
                    <NavbarLink to="/services">Services</NavbarLink>
                </div>
                <div className='hidden sm:flex lg:hidden justify-center items-center gap-3 h-full'>
                    <NavbarLink to="/">Home</NavbarLink>
                    <NavbarLink to="/contact">Contact Us</NavbarLink>
                    <NavbarLink to="/about">About Us</NavbarLink>
                    <NavbarLink to="/products">Products</NavbarLink>
                    <NavbarLink to="/services">Services</NavbarLink>
                </div>
            </div>
            <div onClick={() => { setSidebar(!sidebar); }} className='block sm:hidden cursor-pointer min-w-8'>
                <IoIosMenu className='text-2xl text-foreground' />
            </div>
        </nav>
    )
}

export default Navbar;
