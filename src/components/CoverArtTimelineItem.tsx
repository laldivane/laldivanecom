import React from 'react';
import Image from 'next/image';

interface CoverArtTimelineItemProps {
  title: string;
  imageUrl: string;
  date?: string;
  isLast?: boolean;
}

export default function CoverArtTimelineItem({
  title,
  imageUrl,
  date,
  isLast = false
}: CoverArtTimelineItemProps) {
  return (
    <div className="flex group w-full max-w-4xl mx-auto mb-16">
      
      {/* --- TIMELINE COLUMN --- */}
      <div className="flex flex-col items-center mr-8 relative shrink-0">
          {/* Dot */}
          <div className="w-4 h-4 rounded-full bg-white border-2 border-crimson z-10 shadow-[0_0_15px_rgba(255,255,255,0.4)] group-hover:scale-150 group-hover:bg-crimson transition-all duration-300 mt-6"></div>
          {/* Line */}
          {!isLast && (
              <div className="w-px h-[calc(100%+4rem)] bg-white/10 absolute top-10 group-hover:bg-crimson/40 transition-colors duration-500"></div>
          )}
      </div>

      {/* --- CONTENT CARD --- */}
      <div className="flex-1 block">
          <div className="relative bg-bg-elevated border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 group-hover:translate-x-2 group-hover:shadow-2xl">
               
               <div className="flex flex-col md:flex-row">
                   {/* Art Section */}
                   <div className="relative aspect-square md:w-80 shrink-0 overflow-hidden border-r border-white/5">
                       <Image 
                           src={imageUrl} 
                           alt={title}
                           fill
                           className="object-cover group-hover:scale-105 transition-transform duration-700"
                       />
                       {/* Overlay */}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white/80 text-xs font-mono uppercase tracking-widest">Original Art</span>
                       </div>
                   </div>

                   {/* Info Section */}
                   <div className="p-8 flex flex-col justify-center flex-1 relative overflow-hidden">
                        {/* Background Noise/Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-crimson/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-crimson/90 text-[10px] font-black uppercase tracking-[0.3em]">{date || "ARCHIVED ART"}</span>
                                <span className="material-symbols-outlined text-white/20 text-xl group-hover:text-white transition-colors">image</span>
                            </div>
                            
                            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight font-display mb-2 group-hover:tracking-wide transition-all duration-300">
                                {title}
                            </h3>
                            
                            <p className="text-white/40 font-light text-sm leading-relaxed mb-6">
                                Official cover art composition. High-fidelity visual manifest.
                            </p>

                            <div className="flex items-center gap-4">
                                <a 
                                    href={imageUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    View Full
                                </a>
                            </div>
                        </div>
                   </div>
               </div>
          </div>
      </div>
    </div>
  );
}
