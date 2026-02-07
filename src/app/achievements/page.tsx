import React from 'react';
import AchievementTimelineItem from '@/components/AchievementTimelineItem';

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-[#050508] text-white pt-32 pb-20 px-4 md:px-8">
      
      {/* Header Section */}
      <div className="max-w-2xl mx-auto mb-20 text-left pl-6 border-l-2 border-crimson/50">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-2 font-display">
          Başarım Raporu
        </h1>
        <p className="text-lg text-white/50 font-light">
           <span className="text-crimson font-bold">Lal Divane</span> YouTube Kanalı İstatistikleri
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="max-w-3xl mx-auto">
        
        {/* Item 1: Görüntülenme */}
        <AchievementTimelineItem 
            title="TOPLAM GÖRÜNTÜLENME"
            value="4,600"
            date="Şubat 2026"
            icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
            }
        />

        {/* Item 2: İzlenme Saati */}
         <AchievementTimelineItem 
            title="İZLENME SAATİ"
            value="30 SAAT"
            date="Şubat 2026"
            icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
            }
        />

        {/* Item 3: Abone */}
        <AchievementTimelineItem 
            title="TOPLAM ABONE"
            value="36"
            date="Şubat 2026"
            isLast={true}
            icon={
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
               </svg>
            }
        />
      </div>
      
       {/* Ambient Glow */}
       <div className="fixed top-20 right-0 w-[500px] h-[500px] bg-crimson/5 rounded-full blur-[120px] -z-10"></div>

    </div>
  );
}
