import React from 'react';
import Image from 'next/image';

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

export default function VideosPage() {
  // Reverse to show newest first
  const reversedVideos = [...VIDEOS].reverse();

  return (
    <div className="min-h-screen bg-[#050508] text-white pt-32 pb-20">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4 font-display">
          VIDEOS
        </h1>
        <p className="text-xl text-white/50 max-w-2xl font-light">
           Visual signals and broadcast archives.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reversedVideos.map((video, index) => {
                const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
                const videoUrl = `https://www.youtube.com/watch?v=${video.id}`;
                const cleanTitle = video.title.replace("Lal Divane - ", "").replace(" (Official Visualizer)", "");

                return (
                    <a 
                        key={video.id}
                        href={videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                    >
                        {/* Thumbnail Card */}
                        <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/5 bg-[#0a0a0c] group-hover:border-crimson/50 transition-all duration-500 shadow-lg">
                            <Image 
                                src={thumbnailUrl} 
                                alt={cleanTitle}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                            />
                            
                            {/* Overlay Play Button */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-crimson group-hover:scale-110 transition-all duration-300">
                                     <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
                                </div>
                            </div>

                            {/* Corner Badge */}
                            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-white/80 border border-white/10">
                                Visualizer
                            </div>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-col">
                            <h3 className="text-xl font-bold font-display text-white group-hover:text-crimson transition-colors leading-tight mb-1">
                                {cleanTitle}
                            </h3>
                            <span className="text-xs text-white/40 font-mono">
                                BROADCAST #{reversedVideos.length - index}
                            </span>
                        </div>
                    </a>
                );
            })}
        </div>
      </div>
      
      {/* Background Ambience */}
      <div className="fixed bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-crimson/5 to-transparent pointer-events-none -z-10"></div>
    </div>
  );
}
