import React from 'react';
import Image from 'next/image';

interface VideoTimelineItemProps {
  title: string;
  videoId: string;
  date?: string;
  isLast?: boolean;
}

export default function VideoTimelineItem({
  title,
  videoId,
  date,
  isLast = false
}: VideoTimelineItemProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="flex group w-full max-w-4xl mx-auto mb-12">
      
      {/* --- TIMELINE COLUMN --- */}
      <div className="flex flex-col items-center mr-8 relative shrink-0">
          {/* Dot */}
          <div className="w-4 h-4 rounded-full bg-black border-2 border-crimson z-10 shadow-[0_0_10px_rgba(220,20,60,0.4)] group-hover:scale-150 group-hover:bg-crimson transition-all duration-300 mt-6"></div>
          {/* Line */}
          {!isLast && (
              <div className="w-px h-[calc(100%+3rem)] bg-white/5 absolute top-10 group-hover:bg-crimson/30 transition-colors duration-500"></div>
          )}
      </div>

      {/* --- CONTENT CARD --- */}
      <a 
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 block"
      >
          <div className="relative bg-[#0a0a0c] border border-white/5 rounded-2xl overflow-hidden hover:border-crimson/40 transition-all duration-300 group-hover:translate-x-2 group-hover:shadow-[0_10px_40px_-10px_rgba(220,20,60,0.1)]">
               
               <div className="flex flex-col md:flex-row">
                   {/* Thumbnail Section */}
                   <div className="relative aspect-video md:w-72 md:aspect-auto shrink-0 overflow-hidden">
                       <Image 
                           src={thumbnailUrl} 
                           alt={title}
                           fill
                           className="object-cover group-hover:scale-110 transition-transform duration-700"
                       />
                       {/* Play Overlay */}
                       <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-crimson group-hover:border-crimson transition-all">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white ml-1">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                            </div>
                       </div>
                   </div>

                   {/* Info Section */}
                   <div className="p-6 flex flex-col justify-center flex-1">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-crimson/80 text-[10px] font-black uppercase tracking-[0.2em]">{date || "OFFICIAL RELEASE"}</span>
                            <span className="material-symbols-outlined text-white/20 text-sm group-hover:text-crimson transition-colors">open_in_new</span>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-crimson transition-colors font-display mb-3">
                            {title.replace("Lal Divane - ", "").replace(" (Official Visualizer)", "")}
                        </h3>
                        
                        <div className="flex items-center gap-2 mt-auto">
                            <span className="text-xs text-white/40 font-mono group-hover:text-white/60">Watch on YouTube</span>
                        </div>
                   </div>
               </div>
          </div>
      </a>
    </div>
  );
}
