// Platform Icons - Use official brand icons customized with Crimson color (#B00020)
export const PLATFORM_ICONS = {
  spotify: "/assets/icons/spotify.svg",
  appleMusic: "/assets/icons/apple-music.svg",
  youtubeMusic: "/assets/icons/youtube-music.svg",
  youtube: "/assets/icons/youtube.svg",
  deezer: "/assets/icons/deezer.svg",
  amazonMusic: "/assets/icons/youtube-music.svg", // Using generic play for now
  tidal: "/assets/icons/tidal.svg",
  soundcloud: "/assets/icons/soundcloud.svg",
  anghami: "/assets/icons/youtube-music.svg", // Placeholder
  instagram: "/assets/icons/instagram.svg",
  tiktok: "/assets/icons/tiktok.svg",
  x: "/assets/icons/x.svg",
  itunes: "/assets/icons/itunes.svg",
  pandora: "/assets/icons/pandora.svg",
  boomplay: "/assets/icons/boomplay.svg",
  qobuz: "/assets/icons/qobuz.svg",
  genius: "/assets/icons/genius.svg",
};

export type PlatformKey = keyof typeof PLATFORM_ICONS;
