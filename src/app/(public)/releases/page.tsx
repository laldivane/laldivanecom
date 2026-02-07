import React from 'react';
import VideoTimelineItem from '@/components/VideoTimelineItem';

const VIDEOS = [
  { id: "otiS07HycEk", title: "Lal Divane - Duyuyor musun? (Official Visualizer)" },
  { id: "9k3b6f0S3dk", title: "Lal Divane - Okyanuslar Yuttu Beni (Official Visualizer)" },
  { id: "khWxOn_JGUY", title: "Lal Divane - Hapishane (Official Visualizer)" },
  { id: "pNrcx_Zi0Jw", title: "Lal Divane - Cehennem (Official Visualizer)" },
  { id: "7iXGraOb4gY", title: "Lal Divane - Sana Yanık (Official Visualizer)" },
  { id: "85V9kFAa--E", title: "Lal Divane - Zehir (Official Visualizer)" },
  { id: "UGNWuWsrdk8", title: "Lal Divane - Yaram Aşırı Derin (Official Visualizer)" },
  { id: "bNmc6k92kV0", title: "Lal Divane - Korkmuyorum Manipülasyonlarından (Official Visualizer)" },
  { id: "vFmUyZfi4Hw", title: "Lal Divane - Senin Adın (Official Visualizer)" },
  { id: "HmUiz8QbjK0", title: "Lal Divane - Hipnotize (Official Visualizer)" },
  { id: "rTVN4FtCQY4", title: "Lal Divane - Hatalarım Deneyim (Official Visualizer)" },
  { id: "mJwmIJRns9g", title: "Lal Divane - Anti Kahraman (Official Visualizer)" },
  { id: "RKtyaoq9ELc", title: "Lal Divane - Yarım Kalan Rüya (Official Visualizer)" },
];

export default function ReleasesPage() {
  // Reverse to show newest first (Visualizer #13 at top)
  const reversedVideos = [...VIDEOS].reverse();

  return (
    <div className="min-h-screen bg-[#050508] text-white pt-24 sm:pt-32 pb-16 sm:pb-20">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-3 sm:mb-4 font-display">
          Releases
        </h1>
        <p className="text-base sm:text-xl text-white/50 max-w-2xl font-light">
           Visualizers and signals transmitted from the void.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative border-l border-white/5 ml-2 sm:ml-4 md:ml-0 md:border-none">
            {reversedVideos.map((video, index) => (
                <VideoTimelineItem 
                    key={video.id}
                    title={video.title}
                    videoId={video.id}
                    date={`RELEASE #${reversedVideos.length - index}`} 
                    isLast={index === reversedVideos.length - 1}
                />
            ))}
        </div>
      </div>
      
      {/* Background Ambience */}
      <div className="fixed bottom-0 left-0 w-full h-[300px] sm:h-[500px] bg-gradient-to-t from-crimson/10 to-transparent pointer-events-none -z-10"></div>
    </div>
  );
}
