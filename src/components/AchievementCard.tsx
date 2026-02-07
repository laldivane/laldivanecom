import React from 'react';
import Image from 'next/image';

interface AchievementCardProps {
  title: string;
  value: string;
  date: string;
  icon?: React.ReactNode;
  profileImage?: string;
  userName?: string;
}

export default function AchievementCard({
  title = "Views",
  value = "4,500",
  date = "Achieved February 5, 2026",
  icon,
  profileImage = "/icon.png",
  userName = "LAL DIVANE"
}: AchievementCardProps) {
  return (
    <div className="relative group w-full max-w-sm mx-auto">
        {/* Glow Effect Layer */}
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-black rounded-[20px] blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
        
        {/* Main Card Container - Black/Dark Border */}
        <div className="relative bg-[#0a0a0c] border border-red-900/30 rounded-[18px] p-2 h-full shadow-2xl">
            
            {/* White/Inner Paper Layer */}
            <div className="bg-white rounded-[14px] overflow-hidden relative flex flex-col items-center pt-8 pb-8 min-h-[400px] shadow-inner">
                
                {/* --- MEDAL SECTION --- */}
                <div className="relative z-10 mb-4 flex flex-col items-center scale-110">
                    {/* Ribbon Strings - RED */}
                    <div className="absolute -top-12 flex space-x-2">
                        <div className="w-6 h-16 bg-[#D32F2F] -skew-x-12 border-b-4 border-[#8e0000] shadow-sm"></div>
                        <div className="w-6 h-16 bg-[#B71C1C] skew-x-12 border-b-4 border-[#7f0000] shadow-sm"></div>
                    </div>
                    
                    {/* Medal Connector */}
                    <div className="w-12 h-2 bg-gray-800 rounded-full mt-2 shadow-md relative z-20"></div>
                    
                    {/* Icon Container */}
                    <div className="relative z-20 -mt-1">
                        <div className="drop-shadow-md filter">
                           {icon || (
                               <div className="bg-gradient-to-br from-black to-gray-800 rounded-full p-3 border-4 border-[#D32F2F] shadow-lg">
                                   <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                   </svg>
                               </div>
                           )}
                        </div>
                    </div>
                </div>

                {/* --- STATS SECTION --- */}
                <h2 className="text-[3.5rem] font-black text-black leading-none tracking-tight mb-2 drop-shadow-sm font-sans mt-2">
                    {value}
                </h2>
                
                <p className="text-[#D32F2F] font-bold text-xl uppercase tracking-widest mb-8">
                    {title}
                </p>

                {/* --- RIBBON BANNER SECTION - RED --- */}
                <div className="relative w-full mb-8">
                     {/* Left Fold */}
                     <div className="absolute left-[-8px] top-[10px] w-4 h-8 bg-[#7f0000] transform rotate-45 z-0"></div>
                     {/* Right Fold */}
                     <div className="absolute right-[-8px] top-[10px] w-4 h-8 bg-[#7f0000] transform -rotate-45 z-0"></div>
                    
                    {/* Main Ribbon */}
                    <div className="relative bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] w-full py-3 shadow-lg z-10 flex items-center justify-center border-t border-red-400/30">
                         {/* Ribbon Tail Left */}
                        <div className="absolute left-0 top-0 bottom-0 w-4 bg-[#D32F2F] transform -skew-x-12 origin-bottom-right"></div>
                        {/* Ribbon Tail Right */}
                        <div className="absolute right-0 top-0 bottom-0 w-4 bg-[#B71C1C] transform skew-x-12 origin-bottom-left"></div>

                        <span className="text-white font-bold text-lg drop-shadow-md tracking-wider">
                            {date}
                        </span>
                    </div>
                </div>

                {/* --- PROFILE SECTION --- */}
                <div className="flex flex-col items-center mt-auto">
                    <div className="relative w-14 h-14 rounded-full border-2 border-black/10 shadow-lg overflow-hidden mb-2">
                        {profileImage && (
                            <Image 
                                src={profileImage}
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                        )}
                    </div>
                    
                    {/* YouTube Logo Badge */}
                    <div className="absolute mt-10 z-20 bg-black text-white rounded-[4px] px-1 py-[2px] shadow-sm flex items-center justify-center w-8 h-5 border border-white">
                       <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[6px] border-l-red-600 border-b-[3px] border-b-transparent ml-[2px]"></div>
                    </div>

                    <h3 className="text-black font-black text-lg uppercase tracking-tight mt-3">
                        {userName}
                    </h3>
                </div>

            </div>
        </div>
    </div>
  );
}
