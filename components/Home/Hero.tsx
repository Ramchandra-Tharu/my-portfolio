"use client";

import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import { AiOutlineArrowRight } from "react-icons/ai";
import ParticlesHero from './Navbar/ParticleBackground';


export const HeroSection = () => {
    return (
        <div className=' relative h-screen flex items-center justify-center overflow-hidden flex-col text-white'>
            <ParticlesHero />
            <div className='relative z-10 flex flex-col items-center'>
                <Image
                    src="/images/srphoto.jpg"
                    alt="heroimage"
                    width={150}
                    height={150}
                    className="rounded-full border-4 border-black"
                    data-aos="fade-up"
                />
                <h1 data-aos="fade-up" data-aos-delay="100" className=' text-2xl sm:text-4xl mt-6 text-center font-bold tracking-wide'>Hello, I am Ramchandra Tharu <br />
                    A dedicated Software Developer <span className='text-cyan-400'>real, working solutions.</span>

                </h1>
                <h2 data-aos="fade-up" data-aos-delay="200" className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center justify-center">
                    I am a &nbsp;
                    <span className="text-2xl text-cyan-200 font-bold">
                        <Typewriter
                            options={{
                                strings: ['Frontend Dev', 'Backend Dev', 'Software Dev'],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 50,
                            }}
                        />
                    </span>
                </h2>
                <button data-aos="fade-up" data-aos-delay="300" className='mt-4 bg-blue-700 rounded-full px-4 py-4  hover:bg-blue-900 transition-all duration-300 text-lg font-medium' data-aos="fade-up" data-aos-delay="400">
                    <span>see my works</span>
                    <AiOutlineArrowRight className="w-5 h-5 ml-2 inline-block" />

                </button>
            </div>





        </div>
    )

}
export default HeroSection;