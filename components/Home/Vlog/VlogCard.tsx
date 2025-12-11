import React from 'react'
import Image from 'next/image'
type Props = {
    image: string;
    title: string
}
const VlogCard = ({ image, title }: Props) => {
    return (
        <div>
            <Image
                src={image}
                alt='blog'
                height={500}
                width={500}
                className='objecct'
            />
            <p className='mt-4 text-gray-500 font-medium text-base sm:text-lg'>24 Sept 2025</p>
            <h2 className='text-white mt-5 text-sm font-bold sm:text-base hover:underline hover:text-cyan-200 transition-all duration-300'>
                {title}
            </h2>
            <div className="mt-4 gap-4 flex items-center">
                <p className='px-4 py-1.5  bg-blue-950 text-sm text-white sm:text-sm font-bold rounded-full'>React</p>
                <p className='px-4 py-1.5  bg-blue-950 text-sm text-white sm:text-sm font-bold rounded-full'>Nextjs</p>
                <p className='px-4 py-1.5  bg-blue-950 text-sm text-white sm:text-sm font-bold rounded-full'>Tailwind</p>                </div>
        </div>
    )
}

export default VlogCard