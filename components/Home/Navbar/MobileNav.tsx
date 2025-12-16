import React from 'react'
import { NavLinks } from '@/constant/constant';
import { CgClose } from 'react-icons/cg';
import Link from 'next/link';

type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[1000] h-screen w-full bg-black/70 backdrop-blur-sm transition-all duration-500 ${showNav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeNav}
      />

      {/* Side Menu */}
      <div
        className={`fixed right-0 top-0 bottom-0 h-full w-[75%] sm:w-[60%] bg-[#0f0f0f] text-white z-[1001] transition-transform duration-500 ease-in-out shadow-2xl border-l border-gray-800 ${navOpen}`}
      >
        <div className="flex flex-col h-full relative">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <CgClose
              onClick={closeNav}
              className="w-8 h-8 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors"
            />
          </div>

          {/* Links */}
          <div className="flex flex-col items-center justify-center flex-1 gap-8 -mt-20">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                onClick={closeNav}
                className="group relative text-2xl font-medium text-gray-300 hover:text-white transition-colors"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-cyan-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Decorative bottom element */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
        </div>
      </div>
    </div>
  )
}

export default MobileNav;