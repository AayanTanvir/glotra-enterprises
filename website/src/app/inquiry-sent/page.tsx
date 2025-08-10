'use client';
import React, { useEffect } from 'react'
import { SiTicktick } from "react-icons/si";

const InquirySent = () => {
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            window.location.href = '/';
        }, 2500);

        return () => clearTimeout(timeout);
    }, [])
    
    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center mt-16 gap-4'>
            <SiTicktick className='text-lime-600 text-9xl'/>
            <h1 className='text-4xl text-foreground font-geist font-semibold tracking-wide'>Inquiry Submitted!</h1>
        </div>
    )
}

export default InquirySent
