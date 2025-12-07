"use client";
import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClientCardSection from './ClientCard';
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
  <ClientCard />
</Carousel>;

        </div>

    </div>
  )
}

export default ClientSection;