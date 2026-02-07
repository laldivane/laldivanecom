// Central Discography Database
// All tracks with platform links and metadata

export interface Track {
  id: string;
  title: string;
  catalogId: string;
  releaseDate: string;
  coverArt: string;
  status: "draft" | "distributing" | "live";
  type: "single" | "album" | "ep";
  description?: string;
  platforms: {
    spotify?: string;
    appleMusic?: string;
    youtubeMusic?: string;
    youtube?: string;
    deezer?: string;
    amazonMusic?: string;
    tidal?: string;
    soundcloud?: string;
    anghami?: string;
    itunes?: string;
    pandora?: string;
    boomplay?: string;
    qobuz?: string;
  };
  visualizerId?: string; // YouTube video ID for visualizer
}

export const discography: Track[] = [
  {
    id: "senin-adin",
    title: "Senin Adın",
    catalogId: "MTS-01-26-000608",
    releaseDate: "2026-01-31",
    coverArt: "/assets/covers/senin-adin.jpg",
    status: "live",
    type: "single",
    platforms: {
      spotify: "https://open.spotify.com/track/senin-adin",
      appleMusic: "https://music.apple.com/tr/album/senin-adin",
      youtubeMusic: "https://music.youtube.com/watch?v=vFmUyZfi4Hw",
      youtube: "https://www.youtube.com/watch?v=vFmUyZfi4Hw",
    },
    visualizerId: "vFmUyZfi4Hw",
  },
  {
    id: "korkmuyorum-manipulasyonlarindan",
    title: "Korkmuyorum Manipülasyonlarından",
    catalogId: "MTS-01-26-000475",
    releaseDate: "2026-01-24",
    coverArt: "/assets/covers/korkmuyorum.jpg",
    status: "live",
    type: "single",
    platforms: {
      spotify: "https://open.spotify.com/track/korkmuyorum",
      youtube: "https://www.youtube.com/watch?v=bNmc6k92kV0",
    },
    visualizerId: "bNmc6k92kV0",
  },
  {
    id: "yaram-asiri-derin",
    title: "Yaram Aşırı Derin",
    catalogId: "MTS-01-26-000415",
    releaseDate: "2026-01-17",
    coverArt: "/assets/covers/yaram-asiri-derin.jpg",
    status: "live",
    type: "single",
    platforms: {
      spotify: "https://open.spotify.com/track/yaram",
      youtube: "https://www.youtube.com/watch?v=UGNWuWsrdk8",
    },
    visualizerId: "UGNWuWsrdk8",
  },
  {
    id: "zehir",
    title: "Zehir",
    catalogId: "MTS-01-26-000413",
    releaseDate: "2026-01-10",
    coverArt: "/assets/covers/zehir.jpg",
    status: "live",
    type: "single",
    platforms: {
      spotify: "https://open.spotify.com/track/zehir",
      youtube: "https://www.youtube.com/watch?v=85V9kFAa--E",
    },
    visualizerId: "85V9kFAa--E",
  },
  {
    id: "sana-yanik",
    title: "Sana Yanık",
    catalogId: "MTS-01-26-000407",
    releaseDate: "2026-01-03",
    coverArt: "/assets/covers/sana-yanik.jpg",
    status: "live",
    type: "single",
    platforms: {
      spotify: "https://open.spotify.com/track/sana-yanik",
      youtube: "https://www.youtube.com/watch?v=7iXGraOb4gY",
    },
    visualizerId: "7iXGraOb4gY",
  },
  {
    id: "cehennem",
    title: "Cehennem",
    catalogId: "MTS-01-26-000404",
    releaseDate: "2025-12-27",
    coverArt: "/assets/covers/cehennem.jpg",
    status: "live",
    type: "single",
    platforms: {
      spotify: "https://open.spotify.com/track/cehennem",
      youtube: "https://www.youtube.com/watch?v=pNrcx_Zi0Jw",
    },
    visualizerId: "pNrcx_Zi0Jw",
  },
  {
    id: "hapishane",
    title: "Hapishane",
    catalogId: "MTS-01-26-000398",
    releaseDate: "2025-12-20",
    coverArt: "/assets/covers/hapishane.jpg",
    status: "live",
    type: "single",
    platforms: {
      spotify: "https://open.spotify.com/track/hapishane",
      youtube: "https://www.youtube.com/watch?v=khWxOn_JGUY",
    },
    visualizerId: "khWxOn_JGUY",
  },
  {
    id: "okyanuslar-yuttu-beni",
    title: "Okyanuslar Yuttu Beni",
    catalogId: "MTS-01-26-000390",
    releaseDate: "2025-12-13",
    coverArt: "/assets/covers/okyanuslar.jpg",
    status: "live",
    type: "single",
    platforms: {
      spotify: "https://open.spotify.com/track/okyanuslar",
      youtube: "https://www.youtube.com/watch?v=9k3b6f0S3dk",
    },
    visualizerId: "9k3b6f0S3dk",
  },
  {
    id: "duyuyor-musun",
    title: "Duyuyor musun?",
    catalogId: "MTS-01-26-000387",
    releaseDate: "2025-12-06",
    coverArt: "/assets/covers/duyuyor-musun.jpg",
    status: "live",
    type: "single",
    platforms: {
      spotify: "https://open.spotify.com/intl-tr/track/1mfZYQdSPekbZUJmk2iS0Z",
      youtube: "https://www.youtube.com/watch?v=otiS07HycEk",
      itunes: "https://music.apple.com/us/album/duyuyor-musun-single/1870797233",
      qobuz: "https://www.qobuz.com/se-en/album/duyuyor-musun-lal-divane/p6yc0muw9d2hq",
      deezer: "https://link.deezer.com/s/32nSoMFIzhsp1LAYIakjh",
    },
    visualizerId: "otiS07HycEk",
  },
  {
    id: "hipnotize",
    title: "Hipnotize",
    catalogId: "MTS-01-25-000350",
    releaseDate: "2025-11-29",
    coverArt: "/assets/covers/hipnotize.jpg",
    status: "live",
    type: "single",
    platforms: {
      spotify: "https://open.spotify.com/track/hipnotize",
      youtube: "https://www.youtube.com/watch?v=HmUiz8QbjK0",
    },
    visualizerId: "HmUiz8QbjK0",
  },
  {
    id: "hatalarim-deneyim",
    title: "Hatalarım Deneyim",
    catalogId: "MTS-01-25-000340",
    releaseDate: "2025-11-22",
    coverArt: "/assets/covers/hatalarim.jpg",
    status: "live",
    type: "single",
    platforms: {
      spotify: "https://open.spotify.com/track/hatalarim",
      youtube: "https://www.youtube.com/watch?v=rTVN4FtCQY4",
    },
    visualizerId: "rTVN4FtCQY4",
  },
  {
    id: "anti-kahraman",
    title: "Anti Kahraman",
    catalogId: "MTS-01-25-000330",
    releaseDate: "2025-11-15",
    coverArt: "/assets/covers/anti-kahraman.jpg",
    status: "live",
    type: "single",
    platforms: {
      spotify: "https://open.spotify.com/track/anti-kahraman",
      youtube: "https://www.youtube.com/watch?v=mJwmIJRns9g",
    },
    visualizerId: "mJwmIJRns9g",
  },
  {
    id: "yarim-kalan-ruya",
    title: "Yarım Kalan Rüya",
    catalogId: "MTS-01-25-000320",
    releaseDate: "2025-11-08",
    coverArt: "/assets/covers/yarim-kalan-ruya.jpg",
    status: "live",
    type: "single",
    platforms: {
      spotify: "https://open.spotify.com/track/yarim-kalan-ruya",
      youtube: "https://www.youtube.com/watch?v=RKtyaoq9ELc",
    },
    visualizerId: "RKtyaoq9ELc",
  },
];

// Helper functions
export function getTrackById(id: string): Track | undefined {
  return discography.find((track) => track.id === id);
}

export function getTracksByStatus(status: Track["status"]): Track[] {
  return discography.filter((track) => track.status === status);
}

export function getTracksByYear(year: number): Track[] {
  return discography.filter((track) => track.releaseDate.startsWith(String(year)));
}

export function getLiveTracks(): Track[] {
  return discography.filter((track) => track.status === "live");
}

export function getTracksWithVisualizer(): Track[] {
  return discography.filter((track) => track.visualizerId);
}

// Stats
export function getStats() {
  return {
    total: discography.length,
    live: discography.filter((t) => t.status === "live").length,
    distributing: discography.filter((t) => t.status === "distributing").length,
    draft: discography.filter((t) => t.status === "draft").length,
    withVisualizer: discography.filter((t) => t.visualizerId).length,
  };
}
