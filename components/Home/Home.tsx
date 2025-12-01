import React from 'react'
import { HeroSection } from './Hero';
import ServicesSection from './Service/Services';
import ResumeSection from './Resume/Resume';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <ResumeSection />
      

    </div>

  )
}

export default Home;    