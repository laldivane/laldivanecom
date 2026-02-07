import React from 'react';

interface AchievementTimelineItemProps {
  title: string;
  value: string;
  date: string;
  icon?: React.ReactNode;
  isLast?: boolean;
}

export default function AchievementTimelineItem({
  title,
  value,
  date,
  icon,
  isLast = false
}: AchievementTimelineItemProps) {
  return (
    <div className="flex group w-full max-w-2xl mx-auto">
      
      {/* --- TIMELINE COLUMN --- */}
      <div className="flex flex-col items-center mr-6 relative">
          {/* Dot */}
          <div className="w-5 h-5 rounded-full bg-crimson border-4 border-black z-10 shadow-[0_0_15px_rgba(220,20,60,0.6)] group-hover:scale-125 transition-transform duration-300"></div>
          {/* Line */}
          {!isLast && (
              <div className="w-0.5 h-full bg-white/10 absolute top-5 group-hover:bg-crimson/50 transition-colors duration-500"></div>
          )}
      </div>

      {/* --- CONTENT CARD --- */}
      <div className="flex-1 pb-12">
          
          <div className="relative bg-[#0a0a0c] border border-white/5 rounded-xl overflow-hidden hover:border-crimson/40 transition-all duration-300 group-hover:translate-x-2">
               {/* Left Accent Bar */}
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-crimson to-black"></div>

              <div className="p-5 flex items-center justify-between">
                  
                  {/* Left: Icon & Title */}
                  <div className="flex items-center gap-4">
                      {/* Icon Box */}
                      <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-crimson group-hover:text-white group-hover:bg-crimson transition-colors duration-300">
                           {icon || (
                               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                   <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                               </svg>
                           )}
                      </div>

                      <div className="flex flex-col">
                          <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-0.5">{title}</span>
                          <span className="text-3xl font-black text-white leading-none font-display">{value}</span>
                      </div>
                  </div>

                  {/* Right: Date Badge */}
                  <div className="hidden sm:flex flex-col items-end">
                      <span className="text-crimson font-bold text-xs bg-crimson/10 px-2 py-1 rounded border border-crimson/20">
                          {date}
                      </span>
                  </div>
              </div>
          </div>
          {/* Mobile Date (Outside card for cleaner look on small screens) */}
          <div className="sm:hidden mt-2 text-xs text-white/40 pl-2">
              {date}
          </div>
      </div>
    </div>
  );
}
