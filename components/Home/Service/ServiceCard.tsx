import React from 'react'
import Image from 'next/image'

type Props = {
    icon: string;
    name: string;
    description: string;
}

const ServiceCard = ({ icon, name, description }: Props) => {
    return (
        <div className='bg-gray-900 p-6 rounded-2xl border border-gray-800 h-full flex flex-col items-center text-center group
            hover:border-blue-600 hover:bg-blue-900/10 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-cyan-500/20 cursor-pointer relative overflow-hidden'>

            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon Container */}
            <div className="relative z-10 p-4 bg-gray-800 rounded-full mb-5 ring-1 ring-gray-700/50 group-hover:ring-cyan-500/50 transition-all duration-300 group-hover:bg-cyan-500/10">
                <Image src={icon} alt={name} width={50} height={50} className="object-contain" unoptimized />
            </div>

            <div className="relative z-10">
                <h1 className='text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 tracking-wide'>
                    {name}
                </h1>
                <p className='mt-3 text-gray-400 text-sm leading-relaxed opacity-90 group-hover:opacity-100'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ServiceCard