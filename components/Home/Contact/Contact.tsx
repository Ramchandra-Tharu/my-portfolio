import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Get in Touch
        </h2>

        <p className="text-base sm:text-lg text-center mb-12 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center lg:text-left">
                Contact Information
              </h3>

              <div className="space-y-5">
                <a
                  href="tel:+11234567890"
                  className="flex items-center justify-center lg:justify-start gap-4 hover:text-blue-600 transition"
                >
                  <FaPhone className="text-blue-500 text-xl sm:text-2xl" />
                  <span className="text-sm sm:text-lg">
                    +1 (123) 456-7890
                  </span>
                </a>

                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center justify-center lg:justify-start gap-4 hover:text-blue-600 transition"
                >
                  <FaEnvelope className="text-blue-500 text-xl sm:text-2xl" />
                  <span className="text-sm sm:text-lg">
                    your.email@example.com
                  </span>
                </a>

                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <FaMapMarkerAlt className="text-blue-500 text-xl sm:text-2xl" />
                  <span className="text-sm sm:text-lg">
                    Your City, Country
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center lg:text-left">
                Connect With Me
              </h3>

              <div className="flex justify-center lg:justify-start gap-6">
                <a
                  href="#"
                  className="hover:text-blue-600 transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-3xl sm:text-4xl" />
                </a>

                <a
                  href="#"
                  className="hover:text-gray-800 dark:hover:text-white transition"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-3xl sm:text-4xl" />
                </a>

                <a
                  href="#"
                  className="hover:text-blue-400 transition"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-3xl sm:text-4xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <form className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md w-full max-w-lg mx-auto">
            <div className="mb-5">
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border dark:bg-gray-700"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-md border dark:bg-gray-700"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-md border dark:bg-gray-700"
                placeholder="Your message..."
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
