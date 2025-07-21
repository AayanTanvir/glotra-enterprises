'use client';
import React from 'react'
import { useRouter } from 'next/navigation';

type ButtonProps = {
    children: React.ReactNode;
    to?: string;
    variant?: 'fill' | 'outline';
    className?: string;
}

export default function Button({ children, to = '', variant = 'fill', className }: ButtonProps) {
    const router = useRouter();

    return (
        <button
            onClick={() => {
                if (to !== '') {
                    router.push(to);
                } else {
                    
                }
            }}
            className={`py-2 px-4 rounded-full cursor-pointer ${
                variant === 'fill' ? 'bg-primary-500 text-foreground hover:bg-primary-600' : 'bg-transparent border-[1px] hover:border-primary-500 text-foreground hover:text-primary-500'
            } ${className}`}
        >
            {children}
        </button>
    )
}
