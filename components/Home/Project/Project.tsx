import React from 'react'
import Image from 'next/image';

const ProjectSection = () => {
  return (
    <div id='ProjectsSection' className="pt-16 pb-16">
      <h1 className='text-white text-center bt-10 text-2xl'>
        A small selection of <span className="text-cyan-400">Projects</span>
      </h1>

      <div className="px-10 py-8 max-w-full mx-auto" data-aos='fade-up' data-aos-anchor-placement='top-center'>
        <div className="flex flex-col sm:flex-row w-full gap-8">
          {/* Left Photo */}
          <div className="w-full sm:w-1/2 flex flex-col items-center">
            <Image
              src="/images/p1.jpg"
              alt="Photo 1"
              width={400}
              height={300}
              className="object-cover rounded-xl"
            />
            <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed sm:leading-loose tracking-wide max-w-md text-justify">
              A clean white SaaS website showing a user-onboarding platform with a dashboard preview.
              <br />
              It focuses on helping teams onboard users faster.
            </p>
          </div>

          {/* Right Photo */}
          <div className="w-full sm:w-1/2 flex flex-col items-center" data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='100'>
            <Image
              src="/images/p2.jpg"
              alt="Photo 2"
              width={400}
              height={300}
              className="object-cover rounded-xl"
            />
            <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed sm:leading-loose tracking-wide max-w-md text-justify">
              A dark interactive-content tool website with neon accents and a content editor preview. <br />
              It highlights quick creation of quizzes, tests, and media content.
            </p>
          </div>
        </div>


        <div className="flex flex-col sm:flex-row w-full gap-8 mt-20">
          {/* Left Photo */}
          <div className="w-full sm:w-1/2 flex flex-col items-center" data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='200'>
            <Image
              src="/images/p3.jpg"
              alt="Photo 1"
              width={400}
              height={300}
              className="object-cover rounded-xl"
            />
            <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed sm:leading-loose tracking-wide max-w-md text-justify">
              A dark SaaS site showcasing feature-flag dashboards and analytics for B2B use. <br />
              It emphasizes gradual releases and controlled feature access.
            </p>
          </div>

          {/* Right Photo */}
          <div className=" w-full sm:w-1/2 flex flex-col items-center" data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='300'>
            <Image
              src="/images/p4.jpg"
              alt="Photo 2"
              width={400}
              height={300}
              className="object-cover rounded-xl"
            />
            <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed sm:leading-loose tracking-wide max-w-md text-justify">
              An AI-driven platform that automatically analyzes contracts, extracts key clauses, identifies risks, and generates smart insights. It speeds up review workflows, reduces manual errors, and helps teams make faster, more informed decisions.
            </p>

          </div>
        </div>
      </div>
    </div>


  )
}

export default ProjectSection;