"use client";
import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClientCardSection from './ClientCard';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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


const clientReviews = [
  {
    image: "/images/c1.png",
    name: "Sirzan",
    role: "Web & App Developer",
    review: "Exceptional work! The website delivered was exactly what we needed. The attention to detail and animations are top-notch."
  },
  {
    image: "/images/c2.png",
    name: "Manav",
    role: "Software Developer",
    review: "Highly skilled professional. The backend integration works seamlessly, and the code quality is excellent. Highly recommended!"
  },
  {
    image: "/images/c3.png",
    name: "Ram",
    role: "Web Developer",
    review: "Great communication and timely delivery. The UI/UX design exceeded our expectations. Will definitely work together again."
  },
  {
    image: "/images/c4.png",
    name: "Sanjeet",
    role: "Project Manager",
    review: "Efficient and reliable. Handled the complex requirements of our SaaS platform very well. A true problem solver."
  },
  {
    image: "/images/c5.png",
    name: "Ravina",
    role: "CEO",
    review: "Transformed our digital presence completely. The new site is fast, responsive, and looks professional. Amazing job!"
  }
];

const ClientSection = () => {
  return (
    <div id='ClientSection' className='pb-20 pt-20'>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className='text-center text-3xl md:text-4xl font-bold text-white mb-4'>
          Kind Words From <span className='text-cyan-400'>Clients</span>
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-sm md:text-base">
          See what my clients have to say about my work and collaboration.
        </p>

        <div className='w-full'>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            showDots={true}
            arrows={false}
            itemClass="px-2"
          >
            {clientReviews.map((client, index) => (
              <ClientCardSection
                key={index}
                image={client.image}
                name={client.name}
                role={client.role}
                review={client.review}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default ClientSection;