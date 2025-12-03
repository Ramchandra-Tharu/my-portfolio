import React from 'react'
import { HeroSection } from './Hero';
import ServicesSection from './Service/Services';
import ResumeSection from './Resume/Resume';
import ProjectSection from './Project/Project';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <ResumeSection />
      <ProjectSection />
      

    </div>

  )
}

export default Home;    