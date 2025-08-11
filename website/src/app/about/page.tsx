import Button from '@/components/Button';

const AboutUs = () => {
    
    return (
        <div className='w-full fit flex flex-col justify-start items-center mt-12 md:mt-28 p-12 md:py-12 md:px-20 md:pb-0 gap-16'>
            <div className='w-full md:w-[75%] min-h-[10rem] flex flex-col justify-start items-start gap-6'>
                <h1 className='text-3xl md:text-4xl text-foreground font-geist font-semibold tracking-wide border-b-[1px]'>About <span className='text-primary-300'>Us</span></h1>
                <p className='text-[0.85rem] md:text-lg text-foreground font-rubik'>{"At Glotra Enterprises, we connect businesses with the right products and partners. We're a trading and sourcing company that specializes in import, export, indenting, and product sourcing."}</p>
                <p className='text-[0.85rem] md:text-lg text-foreground font-rubik'>Our approach is simple: be honest, be reliable, and deliver quality every time. We work closely with trusted suppliers and manufacturers worldwide to ensure our clients get the best value and service possible.</p>
            </div>
            <div className='w-full mx-auto flex flex-col md:flex-row justify-center items-center gap-4'>
                <h1 className='text-3xl md:text-4xl text-foreground font-geist font-semibold'>{"Let's Connect"}</h1>
                <Button to='/contact' variant='primary' className='text-2xl'>Contact Us</Button>
            </div>
        </div>
    )
}

export default AboutUs
