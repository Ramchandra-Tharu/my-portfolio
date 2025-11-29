import React from 'react'
import Nav from './Nav';

const MobileNav = () => {
  return (
    <div>

      <div className=' fixed top-0 left-0 h-screen w-screen bg-black/50 z-[10002] 
transition-all duration-500 right-0 opacity-70'>
        <div className='fixed top-0 right-0 h-full w-[80%] bg-purple text-white z-[1000] 
            p-6 transition-transform duration-300 ease-in-out
'>

        </div>
      </div>



    </div>
  )
}

export default MobileNav;