'use client';
import React from 'react'
import { useRouter } from 'next/navigation';

type ButtonProps = {
    children: React.ReactNode;
    icon?: React.ReactNode;
    to?: string;
    variant?: 'primary' | 'transparent';
    className?: string;
}

export default function Button({ children, to = '', variant = 'primary', className, icon }: ButtonProps) {
    const router = useRouter();

    return (
        <button
            onClick={() => {
                if (to !== '') {
                    router.push(to);
                } else {
                    
                }
            }}
            className={`btn ${ variant === 'primary' ? 'btn-primary' : 'btn-transparent' } ${className}`}
        >
            {icon && <>{icon}</>}
            {children}
        </button>
    )
}
