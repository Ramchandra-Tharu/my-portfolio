import React from 'react'
import Image from 'next/image';

const ProjectSection = () => {
  return (
    <div id='ProjectsSection' className="pt-16 pb-16">
      <h1 className='text-white text-center bt-10 text-2xl md:text-4xl font-bold'>
        A small selection of <span className="text-cyan-400">Projects</span>
      </h1>

      <div className="px-6 md:px-12 py-8 max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {projectData.map((project, index) => (
          <div
            key={project.id}
            data-aos='fade-up'
            data-aos-delay={index * 100}
            data-aos-anchor-placement='top-center'
            className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:scale-105 hover:shadow-xl 
              hover:shadow-cyan-500/30 transition-all duration-300 flex flex-col items-center group relative overflow-hidden"
          >
            <div className="relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.description}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <p className="mt-6 text-gray-300 text-sm sm:text-base leading-relaxed tracking-wide text-justify w-full">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 w-full justify-start">
              {project.techStack.map((tech) => (
                <span key={tech} className="bg-blue-900/40 text-cyan-300 text-xs md:text-sm px-3 py-1 rounded-full border border-blue-800">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const projectData = [
  {
    id: 1,
    image: "/images/p1.png",
    description: "FitFlow is a fitness platform that helps users track workouts, get personalized fitness and nutrition guidance, and follow guided exercise or walking plans.",
    techStack: ["Next.js", , "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 2,
    image: "/images/p2.jpg",
    description: "A dark interactive-content tool website with neon accents and a content editor preview. It highlights quick creation of quizzes, tests, and media content.",
    techStack: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    id: 3,
    image: "/images/p3.jpg",
    description: "A dark SaaS site showcasing feature-flag dashboards and analytics for B2B use. It emphasizes gradual releases and controlled feature access.",
    techStack: ["TypeScript", "Next.js", "PostgreSQL", "Prisma"]
  },
  {
    id: 4,
    image: "/images/p4.jpg",
    description: "An AI-driven platform that automatically analyzes contracts, extracts key clauses, identifies risks, and generates smart insights. It speeds up review workflows.",
    techStack: ["Python", "TensorFlow", "React", "FastAPI"]
  }
];

export default ProjectSection;