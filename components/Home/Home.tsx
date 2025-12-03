import React from 'react'
import { HeroSection } from './Hero';
import ServicesSection from './Service/Services';
import ResumeSection from './Resume/Resume';
import ProjectSection from './Project/Project';
import SkillSection from './Skill/Skill';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <ResumeSection />
      <ProjectSection />
      <SkillSection />

      

    </div>

  )
}

export default Home;    