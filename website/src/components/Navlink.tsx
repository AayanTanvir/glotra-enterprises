'use client';
import React from 'react'
import Link from 'next/link';

type NavlinkProps = {
    children: React.ReactNode;
    to: string;
    className?: string;
}

export default function Navlink({ children, to, className }: NavlinkProps) {
    return (
        <Link href={to} className={
            `font-rubik tracking-tight relative after:content-[''] after:absolute 
            after:bottom-0 after:left-0 after:w-0 after:rounded-full after:h-[1px] 
            after:bg-foreground after:transition-all after:duration-300 after:ease-in-out
            hover:after:w-full
            ${className}`}>
            {children}
        </Link>
    )
}

