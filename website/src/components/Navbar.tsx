'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IoIosMenu } from "react-icons/io";
import useAppContext from '@/context/AppContext';
import NavbarLink from './NavbarLink';

const Navbar = () => {
    const { sidebar, setSidebar } = useAppContext();

    return (
        <nav className='w-full max-h-12 fixed top-0 left-0 z-50 p-4 bg-background flex justify-between sm:justify-evenly items-center'>
            <Link href='/' className='flex justify-center items-center gap-1 cursor-pointer'>
                <Image src="/glotra_logo.svg" alt="Glotra Logo" width={30} height={30} />
                <h1 className='font-rubik text-xl sm:text-2xl font-semibold'>Glotra</h1>
            </Link>
            <div className='hidden sm:flex h-full justify-between items-center gap-2 sm:gap-4'>
                <NavbarLink to="/about">About Us</NavbarLink>
                <NavbarLink to="/products">Products</NavbarLink>
                <NavbarLink to="/services">Services</NavbarLink>
                <NavbarLink to="/contact">Contact Us</NavbarLink>
            </div>
            <div onClick={() => { setSidebar(!sidebar); }} className='block sm:hidden cursor-pointer min-w-8'>
                <IoIosMenu className='text-2xl text-foreground' />
            </div>
        </nav>
    )
}

export default Navbar;