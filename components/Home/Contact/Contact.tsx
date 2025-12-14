import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTwitter, FaThumbsUp } from "react-icons/fa";


const ContactSection = () => {
    return (
        <div className="pt-16 pb-16">
            <div className="bg-[#0f172a] w-full rounded-lg  mb-16 pt-16  pb-16">
                <h2 className="text-white text-4xl font-bold ml-20 mb-8">Get in Touch</h2>

                <div
                    data-aos='zoom-in' data-aos-anchor-placement='top-center'
                    className=" mx-auto grid grid-cols-1 md:grid-cols-2 ml-20 gap-30">
                    {/* Left Side: Contact Form */}
                    <div>
                        <form className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white pb-2"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white pb-2"
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white pb-2"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Message"
                                    rows={5}
                                    className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white pb-2 resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#F4A261] text-[#1f1f1f] px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Contact Info & Social Media */}
                    <div
                        data-aos='zoom-out' data-aos-anchor-placement='top-center'
                        className="flex flex-col justify-between">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                {/* Assuming react-icons are available, e.g., import { FaMapMarkerAlt } from 'react-icons/fa'; */}
                                <div className="text-white text-2xl"> <FaMapMarkerAlt className="text-blue-500 text-lg" /></div> {/* Placeholder for icon */}
                                <div>
                                    <h3 className="text-white text-lg font-semibold">Address</h3>
                                    <p className="text-gray-300 text-sm">Mandideep, Raisen Madhya Pradesh India </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="text-white text-2xl"> <FaPhone className="text-blue-500 text-lg" /></div> {/* Placeholder for icon */}
                                <div>
                                    <h3 className="text-white text-lg font-semibold">Phone</h3>
                                    <p className="text-gray-300 text-sm"> (+91) 7778421392</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="text-white text-2xl"> <FaEnvelope className="text-blue-500 text-lg" /></div> {/* Placeholder for icon */}
                                <div>
                                    <h3 className="text-white text-lg font-semibold">E mail</h3>
                                    <p className="text-gray-300 text-sm">ramchandrachaudhary2003@gmail.com</p>
                                </div>
                            </div>
                            <div className="mt-12  md:mt-0">
                                <div className="flex items-start space-x-4">
                                    <div className="text-white text-2xl"> <FaThumbsUp className="text-blue-500 text-xl" /></div> {/* Placeholder for icon */}
                                    <div>
                                        <h3 className="text-white text-lg font-semibold">Follow Me</h3>
                                    </div>
                                </div>
                                <div className="flex  ml-8 flex-wrap gap-2">
                                    <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                                        <div className="text-2xl"><FaLinkedin /></div> {/* Placeholder for icon */}
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                                        <div className="text-2xl"><FaGithub /></div> {/* Placeholder for icon */}
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                                        <div className="text-2xl"><FaLinkedin /></div> {/* Placeholder for icon */}
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                                        <div className="text-2xl"><FaInstagram /></div> {/* Placeholder for icon */}
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                                        <div className="text-2xl"><FaTwitter /></div> {/* Placeholder for icon */}
                                    </a>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactSection;