"use client";
import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { NavLinks } from "@/constant/constant";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
}
const Nav = ({ openNav }: Props) => {
  const [Navbg, setNavbg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavbg(true);
      else setNavbg(false);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`transition-all ${Navbg ? "bg-[#0f142ed9] shadow-md backdrop-blur-md" : "bg-transparent"
        } duration-200 h-[12vh] z-[1000] fixed w-full`}
    >
      <div className="flex h-full justify-between w-[90%] mx-auto items-center">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden ">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            SR
          </h1>
        </div>

        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-8">
          {NavLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className="text-base text-white font-medium transition-all duration-200 hover:text-2xl text-cyan-300 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* button */}
        <div className="flex items-center space-x-4">
          <button className="px-6 py-4 text-sm rounded-lg bg-blue-700 hover:bg-blue-900 text-2xl transition-all text-white duration-300 flex items-center space-x-2">
            <BiDownload className="h-5 w-5 text-white" />
            <span>Resume</span>
          </button>

          <HiBars3BottomRight
            onClick={openNav}
            className="h-8 w-8 text-white lg:hidden"
          />
``
        </div>
      </div>
    </div>
  );
};

export default Nav;
