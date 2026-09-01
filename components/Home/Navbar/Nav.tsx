"use client";
import React, { useEffect, useState } from "react";
import { NavLinks } from "@/constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Props = {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <>
      {/* Top Bar: Logo & Action Button */}
      <div className="fixed top-8 left-0 w-full z-[1000] px-6 md:px-12 flex justify-between items-center pointer-events-none">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer pointer-events-auto">
          <div className="w-10 h-10 rounded-full border-2 border-[#D0FF71] overflow-hidden relative group-hover:border-white transition-colors">
            <Image
              src="/images/logos.jpg"
              alt="logo"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <span className="text-2xl font-bold text-white group-hover:text-[#D0FF71] transition-colors font-display">
            S.<span className="text-[#D0FF71] group-hover:text-white">R</span>
          </span>
        </Link>

        {/* Right Side Buttons (Top Right) */}
        <div className="flex items-center gap-4 pointer-events-auto">
          <Link href="#ContactSection">
            <button className="hidden sm:block px-8 py-2.5 rounded-full border border-[#D0FF71] text-[#D0FF71] font-bold text-sm hover:bg-[#D0FF71] hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(208,255,113,0.2)] hover:shadow-[0_0_20px_rgba(208,255,113,0.4)] uppercase tracking-wider">
              Let's Talk
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <div onClick={openNav} className="lg:hidden cursor-pointer">
            <HiBars3BottomRight
              className="w-8 h-8 text-white hover:text-[#D0FF71] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar: Navigation Links (Center Bottom) */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[1000] hidden lg:block">
        <div className="flex items-center gap-6 border border-white/20 bg-black/30 backdrop-blur-md px-10 py-4 rounded-full shadow-lg">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="nav-link text-white/90 font-medium text-sm tracking-wide uppercase hover:text-[#D0FF71] transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D0FF71] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;
