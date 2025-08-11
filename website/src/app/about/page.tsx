import Button from '@/components/Button';
import React from 'react'
import { FaRegHandshake } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineImportExport } from "react-icons/md";
import { IoIosLink } from "react-icons/io";

const AboutUs = () => {
    
    const WHAT_WE_DO = [
        {
            icon: <FaRegHandshake className='text-2xl text-foreground'/>,
            title: 'Indenting',
            description: 'We act as the link between buyers and reliable manufacturers, ensuring smooth negotiations and clear communication.',
        },
        {
            icon: <IoSearch className='text-2xl text-foreground'/>,
            title: 'Product Sourcing',
            description: 'We supply reliable and sustainable products from trusted suppliers worldwide.',
        },
        {
            icon: <MdOutlineImportExport className='text-2xl text-foreground'/>,
            title: 'Importing & Exporting',
            description: 'We handle international trade with efficiency, compliance, and timely delivery.',
        },
    ]
    
    return (
        <div className='w-full fit flex flex-col justify-start items-center mt-12 md:mt-28 p-12 md:py-12 md:px-20 md:pb-0 gap-16'>
            <div className='w-full md:w-[75%] min-h-[10rem] flex flex-col justify-start items-start gap-6'>
                <h1 className='text-3xl md:text-4xl text-foreground font-geist font-semibold tracking-wide border-b-[1px]'>About <span className='text-primary-300'>Us</span></h1>
                <p className='text-[0.85rem] md:text-lg text-foreground font-rubik'>At Glotra Enterprises, we connect businesses with the right products and partners. We're a trading and sourcing company that specializes in import, export, indenting, and product sourcing.</p>
                <p className='text-[0.85rem] md:text-lg text-foreground font-rubik'>Our approach is simple: be honest, be reliable, and deliver quality every time. We work closely with trusted suppliers and manufacturers worldwide to ensure our clients get the best value and service possible.</p>
            </div>
            {/* <div className='w-full min-h-[10rem] flex flex-col justify-start items-start gap-6'>
                <h1 className='text-3xl md:text-4xl text-foreground font-geist font-semibold tracking-wide border-b-[1px]'><span className='text-primary-300'>Our</span> Story</h1>
                <p className='text-[0.85rem] md:text-lg text-foreground font-rubik'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis minus, blanditiis saepe sit rerum ab unde, itaque quos sint nesciunt error eligendi cupiditate voluptatum perspiciatis illum molestias commodi quia quibusdam.</p>
            </div>
            <div className='w-full min-h-[10rem] flex flex-col justify-start items-start gap-6'>
                <h1 className='text-3xl md:text-4xl text-foreground font-geist font-semibold tracking-wide border-b-[1px]'>What <span className='text-primary-300'>We</span> Do</h1>
                <div className='w-full grid auto-rows-auto grid-cols-1 gap-6'>
                    {WHAT_WE_DO.map((card, index) => (
                        <div key={index} className='w-full min-h-[8rem] border-[1px] border-foreground/30 rounded flex flex-col justify-start items-start p-4 gap-1'>
                            <div className='w-full flex justify-between items-center gap-2'>
                                <h3 className='text-lg md:text-xl font-rubik font-semibold '>{card.title}</h3>
                                {card.icon}
                            </div>
                            <p className='text-[0.85rem] md:text-lg text-foreground font-rubik'>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div> */}

            <div className='w-full mx-auto flex flex-col md:flex-row justify-center items-center gap-4'>
                <h1 className='text-3xl md:text-4xl text-foreground font-geist font-semibold'>Let's Connect</h1>
                <Button to='/contact' variant='primary' className='text-2xl'>Contact Us</Button>
            </div>
        </div>
    )
}

export default AboutUs
