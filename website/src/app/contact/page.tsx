import { IoCallOutline } from "react-icons/io5";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";

const ContactUs = () => {
    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center mt-16">
            <h1 className="text-4xl text-foreground font-geist font-semibold tracking-wide mb-6">Contact Us</h1>
            <div className="w-[80%] min-h-[18rem] border-[1px] border-foreground/30 rounded mb-12 flex flex-col justify-start items-start p-8 gap-4">
                <div className="w-full h-fit flex justify-between items-center gap-3">
                    <div className="w-8 h-8 rounded border-[1px] border-foreground/30 flex justify-center items-center">
                        <TbDeviceLandlinePhone className="text-foreground text-xl"/>
                    </div>
                    <div className="flex-1 text-center select-none">
                        <p className="font-rubik text-foreground text-lg">+92 042 37494022</p>
                    </div>
                </div>
                <div className="w-full h-fit flex justify-between items-center gap-3">
                    <div className="w-8 h-8 rounded border-[1px] border-foreground/30 flex justify-center items-center">
                        <IoCallOutline className="text-foreground text-xl"/>
                    </div>
                    <div className="flex-1 text-center">
                        <p className="font-rubik text-foreground text-lg">+92 313 8678689</p>
                    </div>
                </div>
                <div className="w-full h-fit flex justify-between items-center gap-3">
                    <div className="w-8 h-8 rounded border-[1px] border-foreground/30 flex justify-center items-center">
                        <MdAlternateEmail className="text-foreground text-xl"/>
                    </div>
                    <div className="flex-1 text-center">
                        <p className="font-rubik text-foreground text-lg">info@glotraent.com</p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] min-h-[18rem] border-[1px] border-foreground/30 rounded">

            </div>
        </div>
    )
}

export default ContactUs
