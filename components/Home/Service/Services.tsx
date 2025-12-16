import React from 'react'
import ServiceCard from './ServiceCard';

const ServicesSection = () => {

    return (
        <div className='pt-16 pb-16'>
            <div id='ServicesSection' className='text-center mb-16'>
                <h1 className='text-white font-bold text-2xl md:text-4xl mb-4'>
                    My <span className="text-cyan-400">Services</span>
                </h1>
                <p className='text-gray-400 text-sm md:text-base max-w-2xl mx-auto'>
                    Quality services tailored to your needs. Fast, clean, and reliable work.
                </p>
            </div>
            <div className="w-[95%] sm:w-[85%] mx-auto grid gap-6 mt-20 
                grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                <div data-aos="fade-right" data-aos-anchor-placement="top-bottom" className="h-full">
                    <ServiceCard
                        icon="/images/shape.png"
                        name="UI/UX Design"
                        description="Designing how a product looks and feels to create a smooth, enjoyable user experience."
                    />
                </div>
                <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="100" data-aos-duration="1000" className="h-full">
                    <ServiceCard
                        icon="/images/s2.png"
                        name="App Development"
                        description="Building high-performance mobile applications for iOS and Android platforms."
                    />
                </div>
                <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="200" data-aos-duration="1000" className="h-full">
                    <ServiceCard
                        icon="/images/s3.png"
                        name="Digital Marketing"
                        description="Strategic marketing solutions to reach your target audience and grow your business."
                    />
                </div>
                <div data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="300" data-aos-duration="1000" className="h-full">
                    <ServiceCard
                        icon="/images/s4.png"
                        name="Web Development"
                        description="Creating modern, responsive, and robust websites tailored to your specific needs."
                    />
                </div>

            </div>

        </div>
    )
}

export default ServicesSection;