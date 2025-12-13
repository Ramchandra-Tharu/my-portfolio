import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTwitter, FaThumbsUp, FaArrowUp } from "react-icons/fa";
const FooterSection = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Section: Logo, Description, Social Media, Button */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white mb-2">Ramchandra Tharu</h2>
                    <p className="text-sm mb-4 max-w-sm">
                        Building innovative solutions with a passion for technology and clean code.
                    </p>

                    {/* Social Media Links */}
                    <div className="flex space-x-4 mb-6">
                        <a href="#" className="hover:text-white transition-colors duration-300">
                            <FaPhone className=" text-lg" />
                        </a>
                        <a href="#" className="hover:text-white transition-colors duration-300">
                            <FaEnvelope className=" text-lg" />
                        </a>
                        <a href="#" className="hover:text-white transition-colors duration-300">
                            <FaLinkedin className=" text-lg" />
                        </a>
                        <a href="#" className="hover:text-white transition-colors duration-300">
                            <FaGithub className=" text-lg" />
                        </a>
                        <a href="#" className="hover:text-white transition-colors duration-300">
                            <FaFacebook className=" text-lg" />
                        </a>
                        <a href="#" className="hover:text-white transition-colors duration-300">
                            <FaInstagram className=" text-lg" />
                        </a>
                        <a href="#" className="hover:text-white transition-colors duration-300">
                            <FaTwitter className=" text-lg" />
                        </a>

                    </div>


                    <button className=" bg-indigo-700 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                        <div className="flex items-center text-base"><FaArrowUp className="text-base " /> <span className="ml-2">Back To Top</span></div>
                    </button>
                </div>

                {/* Right Section: Site Map */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-white mb-4">Site Map</h3>
                    <ul className="space-y-2 flex items-between gap-4">
                        <li><a href="#" className="hover:text-cyan-600 hover:text-lg transition-colors duration-200">Home</a></li>
                        <li><a href="#" className="hover:text-cyan-600 hover:text-lg transition-colors duration-200">About</a></li>
                        <li><a href="#" className="hover:text-cyan-600 hover:text-lg transition-colors duration-200">Services</a></li>
                        <li><a href="#" className="hover:text-cyan-600 hover:text-lg transition-colors duration-200">Portfolio</a></li>
                        <li><a href="#" className="hover:text-cyan-600 hover:text-lg transition-colors duration-200">Contact</a></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm">
                <p>&copy; Copyright 2025 Ramchandra Tharu. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default FooterSection;
