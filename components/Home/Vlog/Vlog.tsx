import React from 'react'
import VlogCard from './VlogCard';

const VlogSection = () => {
  const blogs = [
    {
      image: "/images/b1.jpg",
      date: "24 Nov 2024",
      title: "How to Build a Portfolio Website with Next.js",
      tags: ["Next.js", "React", "Tailwind"]
    },
    {
      image: "/images/b2.jpg",
      date: "10 Oct 2024",
      title: "Mastering State Management in React Applications",
      tags: ["React", "Redux", "Hooks"]
    },
    {
      image: "/images/b3.jpg",
      date: "05 Sep 2024",
      title: "The Ultimate Guide to Modern Web Development",
      tags: ["Web", "Design", "CSS"]
    }
  ];

  return (
    <div className='pb-20 pt-20'>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 id='VlogSection' className='text-center text-3xl md:text-4xl font-bold text-white mb-16'>
          From The <span className='text-cyan-400'>Blog</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={index * 100}
              className="h-full"
            >
              <VlogCard
                image={blog.image}
                date={blog.date}
                title={blog.title}
                tags={blog.tags}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VlogSection;