import React from 'react'
import ResumeCard from './ResumeCard';
import { FaCodepen, FaDatabase, FaReact } from 'react-icons/fa';

const ResumeSection = () => {
  return (
    <div className="pt-16 pb-16">
      <div id='ResumeSection' className="w-full max-w-5xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Work Section */}
          <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-8 text-white flex items-center gap-3">
              My <span className="text-cyan-400">Experience</span>
            </h1>
            <div className="flex flex-col gap-2">
              {experienceData.map((item, index) => (
                <ResumeCard
                  key={index}
                  Icon={item.icon}
                  title={item.title}
                  subTitle={item.subTitle}
                  description={item.description}
                />
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
            <h1 className="text-2xl md:text-3xl font-bold mb-8 text-white flex items-center gap-3">
              My <span className="text-cyan-400">Education</span>
            </h1>
            <div className="flex flex-col gap-2">
              {educationData.map((item, index) => (
                <ResumeCard
                  key={index}
                  Icon={item.icon}
                  title={item.title}
                  subTitle={item.subTitle}
                  date={item.date}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

const experienceData = [
  {
    icon: FaReact,
    title: "Full Stack Developer",
    subTitle: "Freelance",
    description: "Developing scalable web applications using Next.js, React, and Node.js. integrating secure authentication and payment gateways."
  },
  {
    icon: FaCodepen,
    title: "Frontend Developer",
    subTitle: "Personal Projects",
    description: "Built responsive and interactive user interfaces with Tailwind CSS and Framer Motion, focusing on performance and user experience."
  },
  {
    icon: FaDatabase,
    title: "Backend Developer",
    subTitle: "Academic Projects",
    description: "Designed RESTful APIs and managed database schemas using MongoDB and PostgreSQL for data-intensive applications."
  }
];

const educationData = [
  {
    icon: FaCodepen,
    title: "Bachelor of Computer Applications",
    subTitle: "University of Technology",
    date: "2021 - 2024",
    description: "Focused on software engineering principles, algorithms, and data structures. Active member of the coding club."
  },
  {
    icon: FaReact,
    title: "Higher Secondary Education",
    subTitle: "Science Stream",
    date: "2019 - 2021",
    description: "Completed with distinction. Major subjects included Physics, Chemistry, and Mathematics with Computer Science."
  },
  {
    icon: FaDatabase,
    title: "Database Certification",
    subTitle: "Online Course",
    date: "2023",
    description: "Specialized training in SQL and NoSQL database management, query optimization, and data modeling."
  }
];

export default ResumeSection;