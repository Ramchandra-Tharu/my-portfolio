import React from 'react'
import ServiceCard from './ServiceCard';

const ServicesSection = () => {

    return (
        <div className='pt-16 pb-16'>
            <div className='text-white font-bold text-2xl md:text-4xl text-center'>
                Quality services for your needs. <br />
                Fast, clean and reliable work.
            </div>
            <div className="w-[90%] sm:w-[70%] mx-auto grid gap-6 mt-20 
                grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">



                <ServiceCard
                    icon="/images/shape.png"
                    name=" UI and UX"
                    description=" Designing how a product looks and feels to create a smooth, enjoyable user experience."
                />
                <ServiceCard
                    icon="/images/s2.png"
                    name=" UI and UX"
                    description=" Designing how a product looks and feels to create a smooth, enjoyable user experience."
                />
                <ServiceCard
                    icon="/images/s3.png"
                    name=" UI and UX"
                    description=" Designing how a product looks and feels to create a smooth, enjoyable user experience."
                />
                <ServiceCard
                    icon="/images/s4.png"
                    name=" UI and UX"
                    description=" Designing how a product looks and feels to create a smooth, enjoyable user experience."
                />

            </div>

        </div>
    )
}

export default ServicesSection;