import React from 'react';

interface AchievementTimelineItemProps {
  date: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

export default function AchievementTimelineItem({
  date,
  title,
  description,
  isHighlighted = false
}: AchievementTimelineItemProps) {
  return (
    <div className={`relative p-8 rounded-2xl border transition-all duration-700 group ${
      isHighlighted ? 'bg-crimson/5 border-crimson/20' : 'bg-white/[0.02] border-white/5 hover:border-white/10'
    }`}>
      <div className="mb-6 flex items-center justify-between">
        <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${isHighlighted ? 'text-crimson' : 'text-muted'}`}>
          {date}
        </span>
        {isHighlighted && (
          <div className="w-2 h-2 rounded-full bg-crimson animate-pulse shadow-[0_0_10px_rgba(176,0,32,0.8)]" />
        )}
      </div>
      
      <div className="space-y-4">
        <h4 className="text-2xl sm:text-3xl font-display font-black tracking-tighter text-foreground group-hover:text-crimson transition-all duration-500">
          {title}
        </h4>
        <p className="text-sm sm:text-base text-muted/80 font-light leading-relaxed">
          {description}
        </p>
      </div>

      <div className={`mt-8 h-[1px] transition-all duration-1000 ${
        isHighlighted ? 'bg-crimson w-full shadow-[0_0_10px_rgba(176,0,32,0.5)]' : 'bg-white/10 group-hover:bg-crimson/30 group-hover:w-full'
      }`} />
    </div>
  );
}
