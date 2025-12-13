import React from 'react'
import { SiLinkedin, SiGithub, SiFacebook, SiInstagram } from 'react-icons/si';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";



export const ContactSection = () => {

  return (
    <section className="w-full mx-auto flex flex-col md:flex-row pt-16 pb-16">
      {/* Left Side: Social Media & Contact Info (40%) */}
      <div className=" text-center text-white mx-auto">

        <div>
          <h1 className='text-2xl'>Let's learn next js</h1>
          <p>Get in touch with me</p>
        </div>
        <div className="">
          <FaPhoneAlt /> <h1>123-456-7890</h1>
          <FaEnvelope /> <h1>123@123.com</h1>bhopal Madhya Pradesh, India
          <FaMapMarkerAlt />
        </div>
        <div className="flex justify-center items-center gap-4 mt-4 mb-4  text-2xl  text-cyan-400 ">
          <SiLinkedin />
          <SiGithub />
          <SiFacebook />
          <SiInstagram />
        </div>

      </div>

      {/* Right Side: Contact Form (40%) */}
      <div className="w-full md:w-2/5 p-8 md:ml-auto mt-12 md:mt-0 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-white">Send a Message</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white"
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-white"
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            className="p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y bg-gray-900 text-white"
          ></textarea>
          <button
            type="submit"
            className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>

    </section>
  );
}
export default ContactSection;
