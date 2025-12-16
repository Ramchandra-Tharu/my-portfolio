"use client";
import React, { useState } from 'react'
import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiFlutter,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiFigma
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Mobile", "Tools"];

  const skills = [
    { name: "React", logo: SiReact, percent: 90, category: "Frontend" },
    { name: "Next.js", logo: SiNextdotjs, percent: 85, category: "Frontend" },
    { name: "TypeScript", logo: SiTypescript, percent: 80, category: "Frontend" },
    { name: "Tailwind CSS", logo: SiTailwindcss, percent: 95, category: "Frontend" },
    { name: "HTML5", logo: SiHtml5, percent: 95, category: "Frontend" },
    { name: "CSS3", logo: SiCss3, percent: 90, category: "Frontend" },
    { name: "JavaScript", logo: SiJavascript, percent: 85, category: "Frontend" },

    { name: "Node.js", logo: SiNodedotjs, percent: 75, category: "Backend" },
    { name: "MongoDB", logo: SiMongodb, percent: 70, category: "Backend" },
    { name: "PostgreSQL", logo: SiPostgresql, percent: 65, category: "Backend" },
    { name: "Java", logo: FaJava, percent: 60, category: "Backend" },

    { name: "Flutter", logo: SiFlutter, percent: 70, category: "Mobile" },
    { name: "React Native", logo: SiReact, percent: 65, category: "Mobile" }, // Assuming knowledge based on React

    { name: "Git", logo: SiGit, percent: 85, category: "Tools" },
    { name: "Figma", logo: SiFigma, percent: 75, category: "Tools" },
  ];

  const filteredSkills = activeCategory === "All"
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div className='text-white pt-20 pb-20'>
      <div id='SkillsSection' className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className='text-white text-bold text-center text-3xl md:text-4xl font-bold mb-12'>
          My <span className='text-cyan-400'>Skills</span>
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${activeCategory === cat
                ? 'bg-cyan-500 border-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                : 'bg-transparent border-gray-700 text-gray-400 hover:border-cyan-400 hover:text-cyan-400'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredSkills.map((skill, i) => (
            <div
              key={skill.name}
              data-aos='fade-up'
              data-aos-delay={i * 50}
              className="bg-gray-900 border border-gray-800 p-5 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-cyan-500/10 group"
            >
              <div className="flex items-center gap-5">
                {/* Icon Left */}
                <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300">
                  <skill.logo className="text-3xl text-gray-300 group-hover:text-cyan-400 transition-colors" />
                </div>

                {/* Info Right */}
                <div className="flex-1">
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">{skill.name}</h3>
                    <span className="text-sm font-code text-gray-400">{skill.percent}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-600 to-blue-500 rounded-full group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-500"
                      style={{ width: `${skill.percent}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillSection;    