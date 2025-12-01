import { Icon } from 'next/dist/lib/metadata/types/metadata-types'
import React from 'react'
import { IconType } from 'react-icons';
import { HiH1 } from 'react-icons/hi2';

type Props = {
    Icon: IconType;
    role: string;
    date?: string;


}

const ResumeCard = ({ Icon, role, date }: Props) => {
    return (
        <div className="mb-6">
            <div className="flex items-start w-full max-w-[600px] space-x-6 bg-blue-900 transition-all duration-300 sm:p-8 p-4 rounded-md">

                {/* Icon */}
                <div className="sm:h-14 sm:w-14 h-10 w-10 bg-blue-950 rounded-full flex items-center justify-center">
                    <Icon className="sm:w-8 sm:h-8 h-6 w-6 text-white" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                    {date && (
                        <h1 className="mb-2 px-4 py-1 sm:px-6 sm:py-1 bg-gray-200 text-gray-500 text-sm sm:text-lg font-bold rounded-full inline-block w-fit">
                            {date}
                        </h1>
                    )}
                    <h1 className="text-white text-lg font-bold truncate sm:whitespace-normal">
                        {role}
                    </h1>
                    <p className="text-gray-300 text-sm mt-2">
                        Hey, my name is Sirzan. I am from Mandideep. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>



            </div>
        </div>

    )
}

export default ResumeCard;