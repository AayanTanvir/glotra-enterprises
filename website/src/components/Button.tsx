'use client';
import React from 'react'

type ButtonProps = {
    children: React.ReactNode;
    to?: string;
    variant?: 'fill' | 'outline';
    className?: string;
}

export default function Button({ children, to = '', variant = 'fill', className }: ButtonProps) {
    return (
        <button
            onClick={() => {
                if (to !== '') {
                    window.location.href = to;
                } else {
                    console.warn('Button clicked without a valid "to" prop. Please provide a URL or function to handle the click.');
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
