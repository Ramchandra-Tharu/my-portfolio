import React from 'react'
import { FaCode } from "react-icons/fa";
import { ImOpt } from 'react-icons/im';

const Nav = () => {
  return (
    <div className="transition-all duration-200 h-[12vh] z-[1000] fixed w-full">
      <div className="flex h-full justify-between w-[90%] mx-auto items-center">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
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
              className="text-base hover:text-cyan-50 text-white font-medium transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Nav;