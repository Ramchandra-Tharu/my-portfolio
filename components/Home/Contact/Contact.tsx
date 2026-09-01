<<<<<<< HEAD
3import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTwitter, FaPaperPlane } from "react-icons/fa";
=======
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState } from "react";
>>>>>>> 49cca9e84af472051fed12f49dd26fe3b88f9c43

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<null | 'sending' | 'success' | 'error'>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Add explicit 2-second delay before showing success
                setTimeout(() => {
                    setStatus('success');
                    setFormData({ name: '', phone: '', email: '', message: '' });

                    // Clear success message after another 3 seconds
                    setTimeout(() => setStatus(null), 3000);
                }, 2000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
        }
    };
    return (
        <div className="py-20 relative z-10 mt-12">
            <div id='ContactSection' className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="bg-gradient-to-br from-[#13141c] via-[#181a24] to-[#0f1016] rounded-3xl border border-gray-800/80 p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden">
                    {/* Decorative ambient background blur */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

<<<<<<< HEAD
                    <div className="flex flex-col md:flex-row justify-between items-start mb-14 gap-8 relative z-10">
                        <div>
                            <span className="uppercase tracking-widest text-xs font-semibold border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 rounded-full px-4 py-1.5 inline-block mb-4 shadow-sm">
                                Interested?
                            </span>
                            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight font-display text-white'>
                                Let's Create <br />
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400'>
                                    Something Together
                                </span>
                            </h1>
                        </div>
=======
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Side: Form */}
                    <div data-aos='fade-right'>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    required
                                    className="w-full bg-transparent border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 hover:border-cyan-500 transition-all"
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone"
                                    className="w-full bg-transparent border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 hover:border-cyan-500 transition-all"
                                />
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                                className="w-full bg-transparent border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 hover:border-cyan-500 transition-all"
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                rows={6}
                                required
                                className="w-full bg-transparent border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 hover:border-cyan-500 transition-all resize-none"
                            ></textarea>

                            {status === 'success' && (
                                <p className="text-green-400 text-sm">Message sent successfully!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-cyan-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-cyan-500 transition-colors duration-300 shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
>>>>>>> 49cca9e84af472051fed12f49dd26fe3b88f9c43
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
                        {/* Left Side: Form */}
                        <div data-aos='fade-right' className="lg:col-span-7">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full bg-gray-900/70 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Phone</label>
                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                            className="w-full bg-gray-900/70 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full bg-gray-900/70 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Message</label>
                                    <textarea
                                        placeholder="Tell me about your project..."
                                        rows={4}
                                        className="w-full bg-gray-900/70 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 group cursor-pointer"
                                >
                                    <span>Send Message</span>
                                    <FaPaperPlane className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                </button>
                            </form>
                        </div>

                        {/* Right Side: Contact Info */}
                        <div data-aos='fade-left' className="lg:col-span-5 flex flex-col justify-between space-y-8">
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-normal">
                                I'm always open to discussing web development work or partnership opportunities. Let's build something amazing.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/40 border border-gray-800/60 hover:border-cyan-500/40 transition-colors duration-300">
                                    <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Address</h3>
                                        <p className="text-white text-sm font-medium">Mandideep, Raisen, Madhya Pradesh, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/40 border border-gray-800/60 hover:border-cyan-500/40 transition-colors duration-300">
                                    <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                        <FaPhone size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Phone</h3>
                                        <p className="text-white text-sm font-medium">(+91) 7778421392</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/40 border border-gray-800/60 hover:border-cyan-500/40 transition-colors duration-300">
                                    <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Email</h3>
                                        <p className="text-white text-sm font-medium break-all">ramchandrachaudhary2003@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-800">
                                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Follow Me</h3>
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="https://www.linkedin.com/in/ramachandra-tharu/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 border border-gray-800 bg-gray-900/60 text-gray-300 rounded-xl hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                                        aria-label="LinkedIn"
                                    >
                                        <FaLinkedin size={18} />
                                    </a>
                                    <a
                                        href="https://github.com/Ramchandra-Tharu"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 border border-gray-800 bg-gray-900/60 text-gray-300 rounded-xl hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                                        aria-label="GitHub"
                                    >
                                        <FaGithub size={18} />
                                    </a>
                                    <a
                                        href="#"
                                        className="p-3 border border-gray-800 bg-gray-900/60 text-gray-300 rounded-xl hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                                        aria-label="Facebook"
                                    >
                                        <FaFacebook size={18} />
                                    </a>
                                    <a
                                        href="#"
                                        className="p-3 border border-gray-800 bg-gray-900/60 text-gray-300 rounded-xl hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                                        aria-label="Instagram"
                                    >
                                        <FaInstagram size={18} />
                                    </a>
                                    <a
                                        href="#"
                                        className="p-3 border border-gray-800 bg-gray-900/60 text-gray-300 rounded-xl hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                                        aria-label="Twitter"
                                    >
                                        <FaTwitter size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;