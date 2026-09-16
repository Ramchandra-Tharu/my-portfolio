import React from 'react';
import { NavLinks } from '@/constant/constant';
import { CgClose } from 'react-icons/cg';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-full";

  return (
    <div className="lg:hidden">
      {/* Overlay Backdrop */}
      <div
        className={`fixed inset-0 z-[10000] h-screen w-full bg-black/80 backdrop-blur-md transition-opacity duration-300 ${
          showNav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeNav}
      />

      {/* Side Menu Drawer */}
      <div
        className={`fixed right-0 top-0 bottom-0 h-full w-[85%] sm:w-[380px] bg-[#0d0e15] text-white z-[10001] transition-transform duration-300 ease-in-out shadow-[0_0_50px_rgba(0,0,0,0.8)] border-l border-gray-800/80 flex flex-col justify-between p-6 sm:p-8 ${navOpen}`}
      >
        {/* Header: Logo & Close Button */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-gray-800/80 mb-8">
            <Link href="/" onClick={closeNav} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border-2 border-cyan-400 overflow-hidden relative">
                <Image
                  src="/images/logos.jpg"
                  alt="logo"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <span className="text-xl font-bold text-white font-display">
                S.<span className="text-cyan-400">R</span>
              </span>
            </Link>

            {/* Touch-Friendly Close 'X' Button */}
            <button
              type="button"
              onClick={closeNav}
              aria-label="Close menu"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-900 border border-gray-800 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <CgClose className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-2">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                onClick={closeNav}
                className="group flex items-center justify-between text-lg font-medium text-gray-300 hover:text-cyan-400 px-4 py-3 rounded-xl hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all duration-200"
              >
                <span>{link.label}</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer inside drawer: CTA & Socials */}
        <div className="pt-6 border-t border-gray-800/80 space-y-6">
          <Link href="#ContactSection" onClick={closeNav} className="block w-full">
            <button className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300">
              <span>Let's Talk</span>
              <FaPaperPlane className="w-3.5 h-3.5" />
            </button>
          </Link>

          <div className="flex items-center justify-center gap-4 text-gray-400">
            <a
              href="https://github.com/Ramchandra-Tharu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-gray-800 bg-gray-900/60 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ramachandra-tharu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-gray-800 bg-gray-900/60 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;