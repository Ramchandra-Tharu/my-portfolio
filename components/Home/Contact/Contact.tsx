import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
    return (
        <div className="pt-20 pb-20">
            <div id='ContactSection' className="max-w-7xl mx-auto px-6 md:px-12">
                <h1 className=' text-3xl md:text-4xl font-bold text-white mb-16'>
                    Get in <span className='text-cyan-400'>Touch</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Side: Form */}
                    <div data-aos='fade-right'>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-transparent border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 hover:border-cyan-500 transition-all"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="w-full bg-transparent border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 hover:border-cyan-500 transition-all"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-transparent border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 hover:border-cyan-500 transition-all"
                            />
                            <textarea
                                placeholder="Message"
                                rows={6}
                                className="w-full bg-transparent border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 hover:border-cyan-500 transition-all resize-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-cyan-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-cyan-500 transition-colors duration-300 shadow-lg shadow-cyan-500/20"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Contact Info */}
                    <div data-aos='fade-left' className="space-y-8">
                        <p className="text-gray-400 leading-relaxed text-lg">
                            I'm always open to discussing web development work or partnership opportunities.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 group">
                                <div className="p-4 bg-gray-900 rounded-full border border-gray-800 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300">
                                    <FaMapMarkerAlt className="text-cyan-500 text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-white text-lg font-semibold group-hover:text-cyan-400 transition-colors">Address</h3>
                                    <p className="text-gray-400">Mandideep, Raisen Madhya Pradesh, India</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className="p-4 bg-gray-900 rounded-full border border-gray-800 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300">
                                    <FaPhone className="text-cyan-500 text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-white text-lg font-semibold group-hover:text-cyan-400 transition-colors">Phone</h3>
                                    <p className="text-gray-400">(+91) 7778421392</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className="p-4 bg-gray-900 rounded-full border border-gray-800 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300">
                                    <FaEnvelope className="text-cyan-500 text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-white text-lg font-semibold group-hover:text-cyan-400 transition-colors">Email</h3>
                                    <p className="text-gray-400">ramchandrachaudhary2003@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h3 className="text-white text-lg font-semibold mb-4">Follow Me</h3>
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/in/ramachandra-tharu/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 rounded-full border border-gray-800 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 text-gray-400 transition-all duration-300">
                                    <FaLinkedin size={20} />
                                </a>
                                <a href="https://github.com/Ramchandra-Tharu" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 rounded-full border border-gray-800 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 text-gray-400 transition-all duration-300">
                                    <FaGithub size={20} />
                                </a>
                                <a href="#" className="p-3 bg-gray-900 rounded-full border border-gray-800 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 text-gray-400 transition-all duration-300">
                                    <FaFacebook size={20} />
                                </a>
                                <a href="#" className="p-3 bg-gray-900 rounded-full border border-gray-800 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 text-gray-400 transition-all duration-300">
                                    <FaInstagram size={20} />
                                </a>
                                <a href="#" className="p-3 bg-gray-900 rounded-full border border-gray-800 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 text-gray-400 transition-all duration-300">
                                    <FaTwitter size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactSection;