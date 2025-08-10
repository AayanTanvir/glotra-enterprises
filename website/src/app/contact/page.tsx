'use client';

import { IoCallOutline } from "react-icons/io5";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";
import { useEffect, useState } from "react";

const ContactUs = () => {

    const [currentHost, setCurrentHost] = useState("");

    useEffect(() => {
        setCurrentHost(window.location.origin);
    }, []);

    const CONTACTS_PAK_OFFICE = [
        {
            icon: <MdOutlinePersonOutline className="text-foreground/60 text-xl md:text-2xl"/>,
            contact: 'Tanvir Aslam',
            href: null,
        },
        {
            icon: <TbDeviceLandlinePhone className="text-foreground/60 text-xl md:text-2xl"/>,
            contact: '+92 42 3749 4022',
            href: 'tel:+924237494022'
        },
        {
            icon: <IoCallOutline className="text-foreground/60 text-xl md:text-2xl"/>,
            contact: '+92 313 867 8689',
            href: 'tel:+923138678689',
        },
        {
            icon: <MdAlternateEmail className="text-foreground/60 text-xl md:text-2xl"/>,
            contact: 'info@glotraent.com',
            href: 'mailto:info@glotraent.com',
        },
    ]

    const CONTACTS_UK_OFFICE = [
        {
            icon: <MdOutlinePersonOutline className="text-foreground/60 text-xl md:text-2xl"/>,
            contact: 'Muhammad Ishfaq Khan',
            href: null,
        },
        {
            icon: <IoCallOutline className="text-foreground/60 text-xl md:text-2xl"/>,
            contact: '+44 7376 077 979',
            href: 'tel:+447376077979',
        },
        {
            icon: <MdAlternateEmail className="text-foreground/60 text-xl md:text-2xl"/>,
            contact: 'info@glotraent.com',
            href: 'mailto:info@glotraent.com',
        },
    ] 
    
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center mt-16 gap-10">
            <h1 className="text-4xl text-foreground font-geist font-semibold tracking-wide">Contact <span className="text-primary-300">Us</span></h1>
            <div className="w-full h-full flex flex-col md:flex-row md:items-start justify-center items-center md:px-10 gap-10">
                <div className="w-full flex flex-col justify-start items-center">
                    <div className="w-[80%] min-h-[15rem] border-[1px] border-foreground/30 rounded mb-12 flex flex-col justify-start items-center">
                        <div className="w-full py-3 border-b-[1px] border-foreground/30 flex justify-center items-center">
                            <h2 className="text-2xl text-foreground font-geist font-semibold">Pakistan Office</h2>
                        </div>
                        <div className="w-full h-full flex flex-col justify-center items-start gap-6 px-8 py-6">
                            {CONTACTS_PAK_OFFICE.map((contact, index) => (
                                <div key={index} className="w-full h-fit flex justify-start sm:justify-center items-center gap-3">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded border-[1px] border-foreground/30 flex justify-center items-center">
                                        {contact.icon}
                                    </div>
                                    <div className="text-center select-none">
                                        {contact.href ? (
                                            <a href={contact.href} className="navbar-link text-lg md:text-xl">{contact.contact}</a>
                                        ) : (
                                            <p className="font-rubik text-foreground text-lg md:text-xl">{contact.contact}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-[80%] min-h-[15rem] border-[1px] border-foreground/30 rounded mb-12 flex flex-col justify-start items-center">
                        <div className="w-full py-3 border-b-[1px] border-foreground/30 flex justify-center items-center">
                            <h2 className="text-2xl text-foreground font-geist font-semibold">UK Office</h2>
                        </div>
                        <div className="w-full h-full flex flex-col justify-center items-start gap-6 px-8 py-6">
                            {CONTACTS_UK_OFFICE.map((contact, index) => (
                                <div key={index} className="w-full h-fit flex justify-start sm:justify-center items-center gap-3">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded border-[1px] border-foreground/30 flex justify-center items-center">
                                        {contact.icon}
                                    </div>
                                    <div className="text-center select-none">
                                        {contact.href ? (
                                            <a href={contact.href} className="navbar-link text-lg md:text-xl">{contact.contact}</a>
                                        ) : (
                                            <p className="font-rubik text-foreground text-lg md:text-xl">{contact.contact}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-[80%] min-h-[18rem] border-[1px] border-foreground/30 rounded p-8 flex flex-col justify-center items-center gap-4">
                    <h2 className="text-2xl text-foreground font-geist font-semibold">Send an Inquiry</h2>
                    <form action="https://formsubmit.co/a43b2a851d1a1f15046e72ad203503d3" method="POST" className="w-full h-full flex flex-col justify-center items-center gap-5">
                        <input type="hidden" name="_template" value="box" />
                        <input type="hidden" name="_next" value={`${currentHost}/inquiry-sent`} />
                        <input type="hidden" name="_subject" value="New Inquiry | Glotra Enterprises"></input>

                        <input type="text" name="name" placeholder="Full Name" className="w-full h-fit p-2 pl-4 border-[1px] border-foreground/50 placeholder-foreground/50 focus:outline-none transition-all ease-in-out duration-200 focus:rounded-lg focus:border-foreground" required />
                        <input type="email" name="email" placeholder="Email" className="w-full h-fit p-2 pl-4 border-[1px] border-foreground/50 placeholder-foreground/50 focus:outline-none transition-all ease-in-out duration-200 focus:rounded-lg focus:border-foreground" required />
                        <input type="text" name="subject" placeholder="Subject" className="w-full h-fit p-2 pl-4 border-[1px] border-foreground/50 placeholder-foreground/50 focus:outline-none transition-all ease-in-out duration-200 focus:rounded-lg focus:border-foreground" required />
                        <textarea name="message" placeholder="Your Inquiry" rows={5} className="w-full h-fit p-2 pl-4 border-[1px] border-foreground/50 placeholder-foreground/50 focus:outline-none transition-all ease-in-out duration-200 focus:rounded-lg focus:border-foreground resize-none" required />
                        <button type="submit" className="w-full p-2 bg-foreground text-background text-lg font-geist cursor-pointer transition-all ease-in-out duration-150 hover:rounded-lg">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
