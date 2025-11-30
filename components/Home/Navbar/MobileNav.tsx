import React from 'react'
import Nav from './Nav';
import { NavLinks } from '@/constant/constant';
import { link } from 'fs';
import { CgClose } from 'react-icons/cg';
type Props ={
  showNav : boolean;
  closeNav : () => void;

}
const MobileNav = ( {closeNav, showNav}:Props) => {
  const navOpen = showNav ? "translate-x-0": "translate-x-[100%]";
  return (
    <div>

      <div className={`fixed inset-0 left-0 h-screen w-screen bg-black/50 z-[10002]
  transition-all duration-500 opacity-70 ${navOpen}`}>
{/* navlinks */}
        <div className={`fixed  justify-center flex flex-col gap-3
        right-0 h-full w-[80%] transform transition-all duration-500 sm:w-[80%] bg-cyan-800 text-white z-[1000] 
            p-6 transition-transform duration-300 ease-in-out ${navOpen}`}>
          {NavLinks.map((link) => (
  <a key={link.id} href={link.url}>
    <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white">
      {link.label}
    </p>
  </a>
))}
<CgClose onClick = {closeNav}
className =" absolute top-[2rem] right-[0.8rem] sm:h-8 sm:w-8 h-6 w-6" />
        </div>


        </div>
      </div>
  )
}

export default MobileNav;