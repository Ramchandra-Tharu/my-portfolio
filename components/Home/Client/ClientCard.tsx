import React from 'react'
import Image from 'next/image';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

type Props = {
  image: string
  name: string;
  role: string;
  review: string;
}

const ClientCardSection = ({ image, name, role, review }: Props) => {
  return (
    <div className='m-4'>
      <div className='bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group relative'>

        {/* Quote Icon */}
        <div className="absolute top-8 right-8 text-7xl text-gray-800/50 group-hover:text-cyan-500/10 transition-colors">
          <FaQuoteLeft />
        </div>

        {/* User Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
            <Image
              src={image}
              alt={name}
              height={60}
              width={60}
              unoptimized
              className="rounded-full border-2 border-gray-700 group-hover:border-cyan-500 transition-colors relative z-10"
            />
          </div>
          <div>
            <h1 className='font-bold text-lg text-white group-hover:text-cyan-400 transition-colors'>{name}</h1>
            <p className='text-sm text-gray-400'>{role}</p>
          </div>
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-4 text-orange-400">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <FaStar key={i} size={14} />
          ))}
        </div>

        {/* Review Text */}
        <p className='text-gray-300 text-sm leading-relaxed relative z-10 min-h-[80px]'>
          {review}
        </p>
      </div>
    </div>
  );
};

export default ClientCardSection;