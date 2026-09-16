import React from 'react';
import { NavLinks } from '@/constant/constant';
import { CgClose } from 'react-icons/cg';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { 
  HiOutlineHome, 
  HiOutlineBriefcase, 
  HiOutlineDocumentText, 
  HiOutlineCodeBracket, 
  HiOutlineCpuChip, 
  HiOutlineVideoCamera, 
  HiOutlineEnvelope,
  HiChevronRight
} from 'react-icons/hi2';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

// Map each nav label to its dedicated modern icon
const navIconMap: Record<string, React.ReactNode> = {
  Home: <HiOutlineHome className="w-5 h-5" />,
  Services: <HiOutlineBriefcase className="w-5 h-5" />,
  Resume: <HiOutlineDocumentText className="w-5 h-5" />,
  Projects: <HiOutlineCodeBracket className="w-5 h-5" />,
  Skills: <HiOutlineCpuChip className="w-5 h-5" />,
  Vlogs: <HiOutlineVideoCamera className="w-5 h-5" />,
  Contact: <HiOutlineEnvelope className="w-5 h-5" />,
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
        className={`fixed right-0 top-0 bottom-0 h-full w-[85%] sm:w-[360px] bg-[#0c0d12]/98 backdrop-blur-2xl text-white z-[10001] transition-transform duration-300 ease-in-out shadow-[0_0_50px_rgba(0,0,0,0.9)] border-l border-gray-800/80 flex flex-col justify-between p-5 sm:p-6 pt-4 sm:pt-5 ${navOpen}`}
      >
        {/* Upper Content */}
        <div>
          {/* Header: Logo & Touch-Friendly Close Button */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-800/80 mb-5">
            <Link href="/" onClick={closeNav} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border-2 border-[#D0FF71] overflow-hidden relative shadow-[0_0_10px_rgba(208,255,113,0.3)]">
                <Image
                  src="/images/logos.jpg"
                  alt="logo"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <span className="text-xl font-bold text-white font-display tracking-tight">
                S.<span className="text-[#D0FF71]">R</span>
              </span>
            </Link>

            <button
              type="button"
              onClick={closeNav}
              aria-label="Close menu"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 border border-gray-800 text-gray-300 hover:text-[#D0FF71] hover:border-[#D0FF71]/50 hover:bg-[#D0FF71]/10 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <CgClose className="w-5 h-5" />
            </button>
          </div>

          {/* Section Label */}
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 px-2 mb-3 block">
            Navigation
          </span>

          {/* Navigation Links with Icons */}
          <nav className="flex flex-col space-y-1.5">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                onClick={closeNav}
                className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-[#D0FF71]/10 border border-transparent hover:border-[#D0FF71]/20 transition-all duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-gray-900/90 border border-gray-800 text-gray-400 group-hover:text-[#D0FF71] group-hover:border-[#D0FF71]/40 group-hover:bg-[#D0FF71]/15 flex items-center justify-center transition-all duration-200 shadow-sm">
                    {navIconMap[link.label] || <HiOutlineHome className="w-5 h-5" />}
                  </div>
                  <span className="text-base font-medium tracking-wide group-hover:translate-x-0.5 transition-transform duration-200">
                    {link.label}
                  </span>
                </div>

                <HiChevronRight className="w-4 h-4 text-gray-600 group-hover:text-[#D0FF71] group-hover:translate-x-1 transition-all duration-200" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer: CTA & Socials */}
        <div className="pt-4 border-t border-gray-800/80 space-y-4">
          <Link href="#ContactSection" onClick={closeNav} className="block w-full">
            <button className="w-full py-3 px-5 rounded-full border border-[#D0FF71] text-[#D0FF71] font-bold text-xs uppercase tracking-wider hover:bg-[#D0FF71] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(208,255,113,0.2)] flex items-center justify-center gap-2 cursor-pointer">
              <span>Let's Talk</span>
              <FaPaperPlane className="w-3.5 h-3.5" />
            </button>
          </Link>

          <div className="flex items-center justify-center gap-3 text-gray-400 pb-1">
            <a
              href="https://github.com/Ramchandra-Tharu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-gray-800 bg-gray-900/60 hover:text-[#D0FF71] hover:border-[#D0FF71]/50 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ramachandra-tharu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-gray-800 bg-gray-900/60 hover:text-[#D0FF71] hover:border-[#D0FF71]/50 transition-colors"
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