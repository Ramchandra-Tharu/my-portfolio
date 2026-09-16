import React from 'react'
import { IconType } from 'react-icons';

type Props = {
    Icon: IconType;
    title: string;
    subTitle?: string;
    description: string;
    date?: string;
}

const ResumeCard = ({ Icon, title, subTitle, description, date }: Props) => {
    return (
        <div className="mb-6 group">
            <div className="flex items-start w-full space-x-6 bg-gray-900 border border-gray-800 p-6 rounded-xl 
                hover:border-cyan-500/50 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-cyan-500/20">

                {/* Icon */}
                <div className="relative z-10 sm:h-12 sm:w-12 h-10 w-10 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400
                    group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 shadow-md shadow-cyan-500/10">
                    <Icon className="sm:w-6 sm:h-6 h-5 w-5" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h1 className="text-white text-lg sm:text-xl font-bold group-hover:text-cyan-400 transition-colors">
                            {title}
                        </h1>
                        {date && (
                            <span className="text-gray-400 text-xs sm:text-sm font-medium bg-gray-800 px-3 py-1 rounded-full border border-gray-700 mt-2 sm:mt-0 w-fit">
                                {date}
                            </span>
                        )}
                    </div>

                    {subTitle && (
                        <h2 className="text-gray-300 text-sm font-semibold mb-2">
                            {subTitle}
                        </h2>
                    )}

                    <p className="text-gray-400 text-sm leading-relaxed text-justify">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ResumeCard;