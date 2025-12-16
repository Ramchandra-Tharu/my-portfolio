"use client";
import React, { useEffect } from 'react'
import { HeroSection } from './Hero';
import ServicesSection from './Service/Services';
import ResumeSection from './Resume/Resume';
import ProjectSection from './Project/Project';
import SkillSection from './Skill/Skill';
import ClientSection from './Client/Client';
import VlogSection from './Vlog/Vlog';
import ContactSection from './Contact/Contact';
import FooterSection from './Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ParticlesHero from './Navbar/ParticleBackground';
import SectionParticles from './Common/SectionParticles';

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    };
    initAOS();
  }, []);
  return (
    <div className="overflow-hidden">
      <HeroSection />

      {/* Body Sections with Star Particles */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <SectionParticles />
        </div>
        <div className="relative z-10">
          <ServicesSection />
          <ResumeSection />
          <ProjectSection />
          <SkillSection />
          <ClientSection />
          <VlogSection />
          <ContactSection />
        </div>
      </div>

      <FooterSection />
    </div>
  )
}

export default Home;