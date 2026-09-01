"use client";

import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import { AiOutlineArrowRight } from "react-icons/ai";

import { BiDownload } from 'react-icons/bi';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ResponsiveNav from './Navbar/ResponsiveNav';


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
                                        " Android App Dev"
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    deleteSpeed: 50,
                                }}
                            />
                        </span>
                    </h2>
<<<<<<< HEAD
                    <div className="flex items-center mt-8">
                        <button
=======
                    <div className="flex items-center mt-6">
                        <a
                            href="/resume.pdf"
                            download="Ramchandra_Tharu_Resume.pdf"
>>>>>>> 49cca9e84af472051fed12f49dd26fe3b88f9c43
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="mr-6 bg-[#D0FF71] text-black text-sm rounded-full px-8 py-3 hover:bg-white transition-all duration-300 font-bold uppercase tracking-wider flex items-center shadow-[0_0_10px_rgba(208,255,113,0.3)]"
                        >
                            <span>Resume</span>
                            <BiDownload className="w-5 h-5 ml-2 inline-block" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ramachandra-tharu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos="fade-up"
                            data-aos-delay="350"
                            className="text-[#D0FF71] hover:text-white transition-colors duration-300 mx-2"
                        >
                            <FaLinkedin className="w-7 h-7 inline-block" />
                        </a>
                        <a
                            href="https://github.com/Ramchandra-Tharu"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="text-[#D0FF71]  hover:text-white transition-colors duration-300 mx-2"
                        >
                            <FaGithub className="w-7 h-7 inline-block" />
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