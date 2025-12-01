import { Icon } from 'next/dist/lib/metadata/types/metadata-types'
import React from 'react'
import { IconType } from 'react-icons';

type Props = {
    Icon: IconType;
    role:string;


}

const ResumeCard = ({Icon, role}: Props) => {
  return (
    <div className='mb-6'>
        <div className="flex items-start  space-x-6 bg-blue-900 transition-all duration-300 sm:p-8 rounded-md">
        <div className='sm:h-14 sm:w-14 h-4 w-4 bg-blue-950 rounded-full flex items-center justify-center flex-col'>
            <Icon className = " sm:w-8 sm:-8 h-6 w-6 text-white"/>
            
        </div>
       <div className='flex-1'>
        <h1 className='text-gray text-xl font-semibold'>
            {role}
        </h1>
        </div>
        

        </div>

    </div>
  )
}

export default ResumeCard;