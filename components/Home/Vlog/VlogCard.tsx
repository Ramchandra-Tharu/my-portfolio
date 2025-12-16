import React from 'react'
import Image from 'next/image'
import { FaCalendar, FaArrowRight } from 'react-icons/fa';

type Props = {
    image: string;
    date: string;
    title: string;
    tags: string[];
}

const VlogCard = ({ image, date, title, tags }: Props) => {
    return (
        <div className='bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer h-full flex flex-col'>
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10" />
                <Image
                    src={image}
                    alt={title}
                    fill
                    unoptimized
                    className='object-cover transform group-hover:scale-110 transition-transform duration-500'
                />
                <div className="absolute top-4 right-4 z-20 bg-gray-900/90 px-3 py-1 rounded-full border border-gray-700 text-xs font-bold text-cyan-400 shadow-sm">
                    {tags[0]}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center text-gray-400 text-xs mb-3 font-medium gap-2">
                    <FaCalendar className="text-cyan-500" />
                    <span>{date}</span>
                </div>

                <h2 className='text-white text-lg font-bold leading-snug mb-4 group-hover:text-cyan-400 transition-colors line-clamp-2'>
                    {title}
                </h2>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.slice(1).map((tag, index) => (
                            <span key={index} className='text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded border border-gray-700'>
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold group-hover:translate-x-2 transition-transform duration-300">
                        Read More <FaArrowRight size={12} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VlogCard