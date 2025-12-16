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
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 50) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`fixed w-full z-[1000] transition-all duration-300 ${navBg ? "bg-[#050505]/80 py-4 shadow-lg backdrop-blur-md border-b border-gray-800" : "bg-transparent py-6"
        }`}
    >
      <div className="flex justify-between items-center w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-full border-2 border-cyan-500 overflow-hidden relative group-hover:border-white transition-colors">
            <Image
              src="/images/logos.jpg"
              alt="logo"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <span className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            S.R<span className="text-cyan-400 group-hover:text-white">.</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-4">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="nav-link text-gray-300 font-medium text-sm tracking-wide uppercase hover:text-cyan-400 transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">

          <Link href="#ContactSection">
            <button className="hidden sm:block px-8 py-2.5 rounded-full border border-cyan-500 text-cyan-400 font-bold text-sm hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              Let's Talk
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <div onClick={openNav} className="lg:hidden cursor-pointer">
            <HiBars3BottomRight
              className="w-8 h-8 text-white hover:text-cyan-400 transition-colors"
            />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Nav;
