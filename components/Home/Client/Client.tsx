"use client";
import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const ClientSection = () => {
  return (
    <div className='pb-16 pt-16'>
        <h1 className='text-center text-2xl font-bold text-white'>
            Kind words from satisfied <br /> 
            <span className='text-cyan-200'>Clients</span>
        </h1>
        <div className='mt-16 w-[70%] max-auto'>

<Carousel
  responsive={responsive}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}
  showDots={false}
>
  <div className='text-whitetext-white w-50 h-40 bg-gray-800 text-white rounded-xl p-6 '>
    
<div className="flex items-center space-x-3">
    <img src="/images/c1.png" 
         className="w-12 h-12 rounded-full object-cover" />

    <div>
      <h3 className="text-lg font-semibold">John Doe</h3>
      <p className="text-sm text-gray-400">Verified User</p>
    </div>
  </div>
  <p className="text-gray-300 text-sm">
    Amazing service! The quality of work was outstanding and delivered on time.
  </p>
  </div>
  <div className='text-white w-50 h-40 bg-gray-800 text-white rounded-xl p-6'><div className="flex items-center space-x-3">
    <img src="https://via.placeholder.com/50" 
         className="w-12 h-12 rounded-full object-cover" />

    <div>
      <h3 className="text-lg font-semibold">John Doe</h3>
      <p className="text-sm text-gray-400">Verified User</p>
    </div>
  </div>
  <p className="text-gray-300 text-sm">
    Amazing service! The quality of work was outstanding and delivered on time.
  </p></div>
  <div className='text-white  text-white w-50 h-40 bg-gray-800 text-white rounded-xl p-6'><div className="flex items-center space-x-3">
    <img src="https://via.placeholder.com/50" 
         className="w-12 h-12 rounded-full object-cover" />

    <div>
      <h3 className="text-lg font-semibold">John Doe</h3>
      <p className="text-sm text-gray-400">Verified User</p>
    </div>
  </div>
  <p className="text-gray-300 text-sm">
    Amazing service! The quality of work was outstanding and delivered on time.
  </p> </div>
  <div className='text-white text-white w-50 h-40 bg-gray-800 text-white rounded-xl p-6'><div className="flex items-center space-x-3">
    <img src="https://via.placeholder.com/50" 
         className="w-12 h-12 rounded-full object-cover" />

    <div>
      <h3 className="text-lg font-semibold">John Doe</h3>
      <p className="text-sm text-gray-400">Verified User</p>
    </div>
  </div>
  <p className="text-gray-300 text-sm">
    Amazing service! The quality of work was outstanding and delivered on time.
  </p></div>
</Carousel>;

        </div>

    </div>
  )
}

export default ClientSection;