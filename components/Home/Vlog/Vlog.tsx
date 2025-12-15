import React from 'react'
import VlogCard from './VlogCard';

const VlogSection = () => {
  return (
    <div className='pb-16 pt-16'>
      <h1 id='VlogSection' className='text-center text-4xl font-bold text-white'>
        My latest
        <span className='text-cyan-200'> Blogs</span>
      </h1>
      <div className="mt-16 w-[70%] mx-auto grid grid-cols-3 xl:grid-cols-3 xl:gap-4 gap-10 items-center">
        <div data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay='0'>
          <VlogCard
            image="/images/b1.jpg"
            title="Learn how to build amazing portfolio Websites using next js"
          />
        </div>
        <div data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay='100'>
          <VlogCard
            image="/images/b2.jpg"
            title="Learn how to build amazing Blog Website using nextjs"
          />
        </div>
        <div data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay='200'>
          <VlogCard
            image="/images/b3.jpg"
            title="Learn how to build amazing socail media website using nextjs"
          />
        </div>
      </div>
    </div>
  )
}

export default VlogSection;