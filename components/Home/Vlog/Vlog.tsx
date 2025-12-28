import React, { useState, useEffect, useRef } from 'react'
import VlogCard from './VlogCard';

const VlogSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const blogs = [
    {
      image: "/images/b1.jpg",
      date: "24 Nov 2024",
      title: "How to Build a Portfolio Website with Next.js",
      tags: ["Next.js", "React", "Tailwind"],
      description: "Learn how to build a modern, high-performance portfolio website using Next.js, Tailwind CSS, and Framer Motion. This guide covers everything from project setup to deployment."
    },
    {
      image: "/images/b2.jpg",
      date: "10 Oct 2024",
      title: "Mastering State Management in React Applications",
      tags: ["React", "Redux", "Hooks"],
      description: "Dive deep into state management in React. We explore React Hooks, Context API, and Redux to help you choose the right solution for your application's needs."
    },
    {
      image: "/images/b3.jpg",
      date: "05 Sep 2024",
      title: "The Ultimate Guide to Modern Web Development",
      tags: ["Web", "Design", "CSS"],
      description: "Stay ahead of the curve with this comprehensive guide to modern web development trends, tools, and best practices for 2024 and beyond."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setOpenIndex(null);
        }
      },
      { threshold: 0.1 } // Collapse when 90% is out of view, or better, when 0% is in view. Let's stick to default 0 which is just touching edge.
      // Actually, if we use 0, it might flicker if just edges touch. Let's use 0.
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className='pb-20 pt-20'>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 id='VlogSection' className='text-center text-3xl md:text-4xl font-bold text-white mb-16'>
          From The <span className='text-cyan-400'>Blog</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {blogs.map((blog, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={index * 100}
            >
              <VlogCard
                image={blog.image}
                date={blog.date}
                title={blog.title}
                tags={blog.tags}
                description={blog.description}
                isOpen={openIndex === index}
                toggle={() => handleToggle(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VlogSection;