import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";
import Image from 'next/image';

const FooterSection = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-[#050505] text-gray-300 py-16 border-t border-gray-800 relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">
                            Ram<span className='text-cyan-400'>chandra</span>
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Building innovative solutions with a passion for technology and clean code.
                            Turning ideas into reality through modern web development.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/Ramchandra-Tharu" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/ramachandra-tharu/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                                <FaLinkedin />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="#Home" className="hover:text-cyan-400 transition-colors flex items-center gap-2">Home</a></li>
                            <li><a href="#ServicesSection" className="hover:text-cyan-400 transition-colors flex items-center gap-2">Services</a></li>
                            <li><a href="#ProjectsSection" className="hover:text-cyan-400 transition-colors flex items-center gap-2">Projects</a></li>
                            <li><a href="#ContactSection" className="hover:text-cyan-400 transition-colors flex items-center gap-2">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6">Get In Touch</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <FaEnvelope className="mt-1 text-cyan-400" />
                                <div>
                                    <p className="text-gray-400">Email:</p>
                                    <a href="mailto:ramchandrachaudhary2003@gmail.com" className="hover:text-cyan-400 transition-colors">ramchandrachaudhary2003@gmail.com</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-1 text-cyan-400" />
                                <div>
                                    <p className="text-gray-400">Location:</p>
                                    <p>Mandideep, Raisen Madhya Pradesh, India</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; 2025 Ramchandra Tharu. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 px-6 py-2 rounded-full bg-gray-900 border border-gray-800 text-sm font-medium hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 group"
                    >
                        Back to Top <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

// Import component needs to be accessible, assuming standard imports or add if missing
import { FaMapMarkerAlt } from "react-icons/fa";

export default FooterSection;
