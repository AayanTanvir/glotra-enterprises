'use client';

import { useState } from "react";
import Button from "@/components/Button";
import Image from "next/image";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { GoLinkExternal } from "react-icons/go";

const Products = () => {

    const [selectedDivisionIndex, setSelectedDivisionIndex] = useState(1);

    const divisionCards = [
        {
            image: '/agriculture.jpg',
            division: 'Agriculture',
        },
        {
            image: '/oil_and_gas.jpg',
            division: 'Oil & Gas',
        },
        {
            image: '/energy.jpg',
            division: 'Energy',
        },
    ];

    const selectedDivision = divisionCards.at(selectedDivisionIndex - 1) ?? {image: 'agriculture.jpg', division: 'Unknown'};

    return (
        <div className="w-full h-fit my-12 flex flex-col justify-center items-center gap-4">
            <h1 className="font-geist text-2xl sm:text-3xl xl:text-4xl font-semibold xl:mb-6 select-none">Product Divisions</h1>
            <div className="hidden md:flex xl:px-32 justify-between items-center gap-8 px-10 w-full">
                {divisionCards.map((e, index) => (
                    <div key={index} className="relative group w-[20rem] h-[10rem] sm:h-[12rem] overflow-hidden flex justify-center items-center rounded-lg">
                        <Image src={e.image} alt="Agriculture" className="object-cover transition-all duration-300 ease-in-out group-hover:blur-[2px] select-none" fill sizes="90vw"/>
                        <div className="w-full h-full group-hover z-10">
                            <h1 className="text-nowrap absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-300 ease-in-out group-hover:top-[40%] text-xl select-none font-geist font-semibold px-4 py-2 rounded-lg bg-white text-black border-[1px] border-black">{e.division}</h1>
                            <Button to="/products" variant="primary" className="absolute bottom-[25%] left-[50%] -translate-x-[50%] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 rounded bg-white text-black border-[1px] border-black px-3 py-1 text-base" icon={<GoLinkExternal className="text-black"/>}>View</Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex md:hidden relative w-full h-fit justify-between items-center px-4 sm:px-10">
                <div onClick={() => { setSelectedDivisionIndex((selectedDivisionIndex > 1 ? selectedDivisionIndex - 1 : selectedDivisionIndex)) }} className={`w-fit h-fit cursor-pointer p-1 border-[1px] border-foreground flex justify-center items-center ${selectedDivisionIndex === 1 ? 'cursor-not-allowed border-foreground/20' : ''}`}>
                    <MdNavigateBefore className={`text-xl text-foreground ${selectedDivisionIndex === 1 ? 'cursor-not-allowed text-foreground/20' : ''}`}/>
                </div>
                <div className="relative w-[70%] h-[10rem] sm:h-[12rem] overflow-hidden flex justify-center items-center rounded-lg">
                    <Image src={selectedDivision.image} alt="Agriculture" className="object-cover blur-[2px] select-none" fill sizes="90vw"/>
                    <div className="w-full h-full z-10 flex flex-col justify-center items-center gap-2">
                        <h1 className="text-md select-none font-geist px-3 py-2 rounded-lg bg-foreground text-background border-[1px] border-background">{selectedDivision.division}</h1>
                        <Button to="/products" variant="primary" className="rounded bg-foreground text-background border-[1px] border-background px-2 py-1 text-sm" icon={<GoLinkExternal className="text-background"/>}>View</Button>
                    </div>
                </div>
                <div onClick={() => { setSelectedDivisionIndex((selectedDivisionIndex < divisionCards.length ? selectedDivisionIndex + 1 : selectedDivisionIndex)) }} className={`w-fit h-fit cursor-pointer p-1 border-[1px] border-foreground flex justify-center items-center ${selectedDivisionIndex === divisionCards.length ? 'cursor-not-allowed border-foreground/20' : ''}`}>
                    <MdNavigateNext className={`text-xl text-foreground ${selectedDivisionIndex === divisionCards.length ? 'cursor-not-allowed text-foreground/20' : ''}`}/>
                </div>
                <div className="flex justify-center items-center w-full h-fit absolute -bottom-6 left-0 gap-4">
                    {divisionCards.map((card, index) => (
                        <div key={index} className={`w-2 h-2 rounded-full border-[1px] border-foreground ${(index + 1) === selectedDivisionIndex ? 'bg-foreground' : ''}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products
