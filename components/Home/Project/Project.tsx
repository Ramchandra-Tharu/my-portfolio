import React from 'react'
import Image from 'next/image';

const ProjectSection = () => {
    return (
        <div className="flex flex-col items-center justify-center text-4xl text-white text-center p-6 sm:p-10 max-w-2xl mx-auto">
  A small selection of <span className="text-cyan-400">Projects</span>
  <div className="px-10 py-8 max-w-full mx-auto">
  <div className="flex flex-col sm:flex-row w-full gap-6">
    {/* Left Photo */}
    <div className="w-full sm:w-1/2 flex flex-col items-center">
      <Image
        src="/images/p1.jpg"
        alt="Photo 1"
        width={800}
        height={650}
        className="object-cover rounded-xl"
      />
      <p className="mt-4 text-center text-gray-300 text-base sm:text-lg font-medium">
        Description for Photo 1
      </p>
    </div>
    <div className="w-full sm:w-1/2 flex flex-col items-center">
      <Image
        src="/images/p2.jpg"
        alt="Photo 2"
        width={800}
        height={650}
        className="object-cover rounded-xl"
      />
      <p className="mt-4 text-center text-gray-300 text-base sm:text-lg font-medium">
        Description for Photo 2
      </p>
    </div>
    <div className="w-full sm:w-1/2 flex flex-col items-center">
      <Image
        src="/images/p2.jpg"
        alt="Photo 2"
        width={800}
        height={650}
        className="object-cover rounded-xl"
      />
      <p className="mt-4 text-center text-gray-300 text-base sm:text-lg font-medium">
        Description for Photo 2
      </p>
    </div>
  </div>
</div>
</div>


    )
}

export default ProjectSection;