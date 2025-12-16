"use client";

import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import { AiOutlineArrowRight } from "react-icons/ai";

import { BiDownload } from 'react-icons/bi';
import { FaLinkedin, FaGithub } from "react-icons/fa";


export const HeroSection = () => {
    return (
        <div
            id="Home"
            className="relative h-screen mx-auto flex items-center justify-center overflow-hidden flex-col text-white"
        >


            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex flex-col-reverse md:flex-row items-center  justify-between gap-10 md:gap-24">

                {/* LEFT SIDE */}
                <div className="flex flex-col items-left md:items-start text-center md:text-left">

                    <h1

                        data-aos="fade-up"
                        className="text-2xl sm:text-4xl mt-6 font-bold tracking-wide"
                    >
                        Hello, I'm <br />
                        <span className="text-cyan-400">Ramchandra Tharu (Sirzan)</span>
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="mt-4 text-sm sm:text-lg text-gray-300 max-w-xl"
                    >
                        I’m a Computer Applications student.
                        Focused on web and mobile application development.
                        Skilled in Flutter, React.js, Next.js, and Java.
                        Continuously learning and building real-world projects.

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
                    <div className="flex items-center mt-6">
                        <button
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="mr-4 bg-blue-700 text-sm rounded-xl px-6 py-4 hover:bg-blue-900 transition-all duration-300 text-lg font-medium flex items-center"
                        >
                            <span>Resume</span>
                            <BiDownload className="w-5 h-5 ml-2 inline-block" />
                        </button>
                        <a
                            href="https://www.linkedin.com/in/ramachandra-tharu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos="fade-up"
                            data-aos-delay="350"
                            className="text-blue-700 hover:text-cyan-400 transition-colors duration-300 mx-2"
                        >
                            <FaLinkedin className="w-5 h-5 ml-2 inline-block" />
                        </a>
                        <a
                            href="https://github.com/Ramchandra-Tharu"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="text-blue-700  hover:text-cyan-400 transition-colors duration-300 mx-2"
                        >
                            <FaGithub className="w-5 h-5 ml-2 inline-block" />
                        </a>
                    </div>


                </div>

                {/* RIGHT SIDE IMAGE */}
                <Image
                    src="/images/sr.jpg"
                    alt="heroimage"
                    width={400}
                    style={{ marginLeft: '40px' }}
                    height={300}
                    className="rounded-full border-4 border-black"
                    data-aos="fade-up"
                />
            </div>
        </div>




    )

}
export default HeroSection;