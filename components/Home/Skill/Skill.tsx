import React from 'react'
import {
     
  SiJavascript, 
  SiNextdotjs, 
  SiReact, 
  SiFlutter 
} from "react-icons/si";

const SkillSection = () => {
    const skills = [

  { 
    name: "JavaScript", 
    logo: SiJavascript,
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
    </div>
  )
}

export default SkillSection;    