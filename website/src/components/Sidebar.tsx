'use client';

import useAppContext from "@/context/AppContext";
import { IoIosClose } from "react-icons/io";
import SidebarLink from "./SidebarLink";
import Image from "next/image";

const Sidebar = () => {
    const { setSidebar, sidebar } = useAppContext();

    return sidebar ? (
        <div className="flex sm:hidden fixed top-0 right-0 w-3/5 h-full z-[51] bg-white dark:border-l-0 border-l-[1px] border-foreground dark:bg-neutral-900 p-4 flex-col justify-start items-center">
            <div className="w-full flex justify-between items-center pb-2 border-b-[1px] border-rounded border-foreground/20">
                <h2 className="font-geist text-xl font-semibold">Links</h2>
                <button onClick={() => setSidebar(false)} className="cursor-pointer"><IoIosClose className="text-3xl text-foreground"/></button>
            </div>
            <div className="w-full flex-1 flex flex-col justify-center items-center gap-4">
                <SidebarLink to="/contact">Contact Us</SidebarLink>
                <SidebarLink to="/about">About Us</SidebarLink>
                <SidebarLink to="/products">Products</SidebarLink>
                <SidebarLink to="/services">Services</SidebarLink>
            </div>
            <div className="w-full min-h-12 flex justify-center items-center gap-1 pt-2 border-t-[1px] border-rounded border-foreground/20">
                <Image src="/glotra_logo.svg" alt="Glotra Logo" width={25} height={25} />
                <h1 className='font-rubik text-xl sm:text-2xl font-semibold'>Glotra</h1>
            </div>
        </div>
    ) : null;
}

export default Sidebar
