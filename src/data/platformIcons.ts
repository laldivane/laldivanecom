// Platform Icons - Use official brand icons
export const PLATFORM_ICONS = {
  spotify: "/assets/icons/icons8-spotify.svg",
  appleMusic: "/assets/icons/icons8-music.svg", // Using generic music note for Apple Music
  youtubeMusic: "/assets/icons/icons8-youtube-music.svg",
  youtube: "/assets/icons/icons8-youtube.svg",
  deezer: "/assets/icons/icons8-deezer.svg",
  amazonMusic: "/assets/icons/icons8-music.svg", // Using generic play for now
  tidal: "/assets/icons/icons8-tidal.svg",
  soundcloud: "/assets/icons/icons8-soundcloud.svg",
  anghami: "/assets/icons/icons8-anghami.svg",
  instagram: "/assets/icons/icons8-instagram.svg",
  tiktok: "/assets/icons/icons8-tiktok.svg",
  x: "/assets/icons/icons8-x.svg",
  itunes: "/assets/icons/icons8-itunes.svg",
  pandora: "/assets/icons/icons8-pandora-app.svg",
  boomplay: "/assets/icons/icons8-boomplay.svg",
  audiomack: "/assets/icons/icons8-audiomack.svg",
  qobuz: "/assets/icons/icons8-qobuz.svg",
  genius: "/assets/icons/icons8-genius.svg",
  kugou: "/assets/icons/icons8-music.svg", // Using generic music icon for Kugou
};

export type PlatformKey = keyof typeof PLATFORM_ICONS;
