import React from 'react'
import ResumeCard from './ResumeCard';
import { FaCodepen, FaDatabase, FaReact } from 'react-icons/fa';

const ResumeSection = () => {
    return (
        <div className='pt-20 pb-20'>
            <div className="w-[90%] sm:w-[70%] mx-auto grid grid-flow-col auto-cols-[250px] gap-10 text-white overflow-x-auto py-10">
                {/* work */}
                 <div className='text-2xl font-bold text-white'>
                    <h1> My  <span className='text-cyan-400'>Education</span></h1>
                    <ResumeCard Icon={FaCodepen} role="Full Stack Devloper" />
                    <ResumeCard Icon={FaReact} role="Full Stack Devloper" />
                    <ResumeCard Icon={FaDatabase} role="Full Stack Devloper" />

                </div>
                {/* education*/}
               
                <div>
                </div>
            </div>

        </div>
    )
}

export default ResumeSection;