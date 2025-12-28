"use client";
import React from 'react';
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
  const skills = [
    { name: "React", logo: SiReact, percent: 90, category: "Frontend" },
    { name: "Next.js", logo: SiNextdotjs, percent: 85, category: "Frontend" },
    { name: "TypeScript", logo: SiTypescript, percent: 80, category: "Frontend" },
    { name: "Tailwind CSS", logo: SiTailwindcss, percent: 95, category: "Frontend" },
    { name: "JavaScript", logo: SiJavascript, percent: 85, category: "Frontend" },

    { name: "Node.js", logo: SiNodedotjs, percent: 75, category: "Backend" },
    { name: "MongoDB", logo: SiMongodb, percent: 70, category: "Backend" },
    { name: "PostgreSQL", logo: SiPostgresql, percent: 65, category: "Backend" },
    { name: "Java", logo: FaJava, percent: 60, category: "Backend" },

    { name: "Flutter", logo: SiFlutter, percent: 70, category: "Mobile" },
    { name: "React Native", logo: SiReact, percent: 65, category: "Mobile" },

    { name: "Git", logo: SiGit, percent: 85, category: "Tools" },
    { name: "Figma", logo: SiFigma, percent: 75, category: "Tools" },
  ];

  // Grouping skills for the 3-column layout
  const frontendSkills = skills.filter(s => s.category === "Frontend" || s.category === "Mobile");
  const backendSkills = skills.filter(s => s.category === "Backend");
  const toolSkills = skills.filter(s => s.category === "Tools");

  const SkillCategoryCard = ({ title, items }: { title: string, items: typeof skills }) => (
    <div
      data-aos="fade-up"
      className="bg-[#001a2c]/80 backdrop-blur-sm border border-[#84d6ff]/20 rounded-lg p-6 hover:shadow-[0_0_20px_rgba(132,214,255,0.1)] transition-all duration-300 h-full"
    >
      <h3 className="text-2xl font-bold text-white mb-6 text-center border-b border-[#84d6ff]/20 pb-4">
        {title}
      </h3>
      <div className="flex flex-col gap-6">
        {items.map((skill, index) => (
          <div key={index} className="group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                {/* Icon Box */}
                <div className="w-8 h-8 rounded bg-[#002a44] border border-[#84d6ff]/30 flex items-center justify-center text-[#84d6ff]">
                  <skill.logo size={16} />
                </div>
                <span className="text-white font-medium group-hover:text-[#84d6ff] transition-colors">
                  {skill.name}
                </span>
              </div>
              <span className="text-[#84d6ff] text-sm font-bold">{skill.percent}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-[#002a44] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#84d6ff] rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className='relative text-white py-20 overflow-hidden'>
      {/* Background Gradient & Pattern */}
      {/* (Optional) You can add the mountain/forest SVG or image here as a background layer if available, 
           but for now keeping the dark gradient as base. The parent component might handle the global background. 
           Adding a local gradient to match the reference. */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#001a2c] to-black -z-10" /> */}

      <div id='SkillsSection' className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <h1 className='text-white text-center text-3xl md:text-4xl font-bold mb-16' data-aos="fade-down">
          Technical <span className='text-[#84d6ff]'>Skills</span>
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <SkillCategoryCard
            title="Frontend & Mobile"
            items={frontendSkills}
          />
          <SkillCategoryCard
            title="Backend Development"
            items={backendSkills}
          />
          <SkillCategoryCard
            title="Tools & DevOps"
            items={toolSkills}
          />
        </div>
      </div>
    </div>
  )
}

export default SkillSection;