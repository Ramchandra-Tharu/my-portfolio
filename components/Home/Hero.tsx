"use client";

import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import { AiOutlineArrowRight } from "react-icons/ai";
import ParticlesHero from './Navbar/ParticleBackground';


export const HeroSection = () => {
    return (
        <div
            id="Home"
            className="relative h-screen mx-auto flex items-center justify-center overflow-hidden flex-col text-white"
        >
            <ParticlesHero />

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex flex-col-reverse md:flex-row items-between justify-between gap-10 md:gap-24">

                {/* LEFT SIDE */}
                <div className="flex flex-col items-left md:items-start text-center md:text-left">

                    <h1
                        data-aos="fade-up"
                        className="text-2xl sm:text-4xl mt-6 font-bold tracking-wide"
                    >
                        I am Ramchandra Tharu, a <br />
                        <span className="text-cyan-400">Full Stack Developer</span>
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="mt-4 text-sm sm:text-lg text-gray-300 max-w-xl"
                    >
                        Ramchandra Tharu is a passionate Software Engineer specializing in full
                        stack development. He builds scalable, responsive, high-performance
                        applications using modern technologies including React and Node.js.
                    </p>

                    <h2
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="mt-5 text-sm sm:text-2xl font-medium flex items-center justify-center md:justify-start"
                    >
                        I am a&nbsp;
                        <span className="text-2xl text-cyan-200 font-bold">
                            <Typewriter
                                options={{
                                    strings: [
                                        "Backend Dev",
                                        "Frontend Dev",
                                        "Fullstack Dev",
                                        "UI/UX Designer",
                                        "Content Creator",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    deleteSpeed: 50,
                                }}
                            />
                        </span>
                    </h2>

                    <button
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="mt-6 bg-blue-700 rounded-full px-6 py-4 hover:bg-blue-900 transition-all duration-300 text-lg font-medium"
                    >
                        <span>See my works</span>
                        <AiOutlineArrowRight className="w-5 h-5 ml-2 inline-block" />
                    </button>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <Image
                    src="/images/srphoto.jpg"
                    alt="heroimage"
                    width={180}
                    height={180}
                    className="rounded-full border-4 border-black"
                    data-aos="fade-up"
                />
            </div>
        </div>




    )

}
export default HeroSection;