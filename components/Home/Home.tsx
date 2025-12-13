import React from 'react'
import { HeroSection } from './Hero';
import ServicesSection from './Service/Services';
import ResumeSection from './Resume/Resume';
import ProjectSection from './Project/Project';
import SkillSection from './Skill/Skill';
import ClientSection from './Client/Client';
import VlogSection from './Vlog/Vlog';
import ContactSection from './Contact/Contact';
const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <ResumeSection />
      <ProjectSection />
      <SkillSection />
      <ClientSection />
      <VlogSection />
      <ContactSection />




    </div>

  )
}

export default Home;    