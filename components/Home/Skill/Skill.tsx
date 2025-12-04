"use client";
import { Scada } from 'next/font/google';
import React from 'react'
import {

  SiJavascript,
  SiOpenjdk,
  SiNextdotjs,
  SiReact,
  SiFlutter,
  SiPycharm,
  SiHtml5
} from "react-icons/si";
import Tilt from 'react-parallax-tilt'

const SkillSection = () => {
  const skills = [

    {
      name: "JavaScript",
      logo: SiJavascript,
      percent: 60
    },
    
    {
      name : "Html",
      logo: SiHtml5,
      percent :90
    },
  
    
    {
      name: "Java",
      logo: SiOpenjdk,
      percent: 60
    },
    {
      name: "Next.js",
      logo: SiNextdotjs,
      percent: 60
    },
    {
      name: "React",
      logo: SiReact,
      percent: 60
    },
    {
      name: "Flutter",
      logo: SiFlutter,
      percent: 60
    },
  ];


  return (
    <div className='text-white pt-14 pb-16'>
      <h1 className='text-white text-bold text-center text-2xl sm:text-4xl xl:text-5xl font-bold'>
        My <span className='text-cyan-200'> Skills</span>
      </h1>
      <div className='justify-center mt-16  gap-6 flex flex-wrap'>
        {
  skills.map((skill) => {
    return (
      <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
        <div className="bg-[#14134145] w-40 h-48 text-center rounded-3xl flex flex-col items-center justify-center shadow-lg transition scale-105">
          
          <div className="text-5xl mb-4 text-gray-300">
            <skill.logo size={50} />
          </div>

          <p className="text-2xl font-semibold">{skill.percent}%</p>
          <p className="text-purple-300 mt-1">{skill.name}</p>

        </div>
      </Tilt>
    );
  })
}




      </div>
    </div>
  )
}

export default SkillSection;    