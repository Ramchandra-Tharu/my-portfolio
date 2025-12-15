import React from 'react'
import ResumeCard from './ResumeCard';
import { FaCodepen, FaDatabase, FaReact } from 'react-icons/fa';

const ResumeSection = () => {
  return (
    <div id='ResumeSection' className="pt-20 pb-20 ">
      <div className="w-full max-w-[1600px] mx-auto grid grid-flow-col auto-cols-[350px] gap-10 text-white overflow-x-auto py-10 justify-center">

        {/* Work Section */}
        <div className="flex flex-col text-white data-aos=zoo">
          <h1 className="text-xl font-bold mb-6">
            My <span className="text-cyan-400">Work</span>
          </h1>
          <div data-aos='zoom-in' data-aos-anchor-placement='top-center'>
            <ResumeCard Icon={FaCodepen} role="Full Stack Developer" />
            <ResumeCard Icon={FaReact} role="Frontend Developer" />
            <ResumeCard Icon={FaDatabase} role="Database Specialist" />
          </div>
        </div>

        {/* Education Section */}
        <div className="flex flex-col text-white">
          <h1 className="text-xl font-bold mb-6">
            My <span className="text-cyan-400">Education</span>
          </h1>
          <div data-aos='zoom-out' data-aos-anchor-placement='top-center' data-aos-delay='300' data-aos-duration='1000'>
            <ResumeCard Icon={FaCodepen} role="Bachelor of Computer Science" date=" 23-jun-2023" />
            <ResumeCard Icon={FaReact} role="Master of Software Engineering" date=" 23-jun-2023" />
            <ResumeCard Icon={FaDatabase} role="Database Certification" date=" 23-jun-2023" />
          </div>
        </div>

      </div>
    </div>

  )
}

export default ResumeSection;