import React from 'react'


export const ContactSection = () => {
  return (
    <section className="w-4/5 mx-auto flex flex-col md:flex-row py-16">
      {/* Left Side: Social Media & Contact Info (40%) */}
      <div className="w-full md:w-2/5 p-4 flex flex-col justify-center">
        <h2 className="text-5xl text-white font-bold mb-4">Let's Connect!</h2>
        <p className="text-lg text-gray-600 mb-8">
          I'm passionate about building amazing web experiences with React and always open to new opportunities.
        </p>
        <div className="flex flex-col space-y-3 mb-8">
          <p className="text-xl flex items-center">
            <i className="fas fa-phone-alt mr-3 text-blue-500"></i> +1 (123) 456-7890
          </p>
          <p className="text-xl flex items-center">
            <i className="fas fa-envelope mr-3 text-blue-500"></i> example@email.com
          </p>
          <p className="text-xl flex items-center">
            <i className="fas fa-map-marker-alt mr-3 text-blue-500"></i> 123 React St, Dev City, CA 90210
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-700 hover:text-blue-500 transition-colors duration-300">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-800 hover:text-gray-600 transition-colors duration-300">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-600 hover:text-blue-400 transition-colors duration-300">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-pink-600 hover:text-pink-400 transition-colors duration-300">
            <i className="fab fa-instagram"></i>
          </a>
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
