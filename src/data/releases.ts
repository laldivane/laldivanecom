export interface Release {
  id: string;
  title: string;
  type: "album" | "single" | "ep";
  releaseDate: string;
  coverArt: string;
  description: string;
  links: {
    spotify?: string;
    appleMusic?: string;
    youtubeMusic?: string;
    deezer?: string;
    soundcloud?: string;
  };
}

export const releases: Release[] = [
  {
    id: "crimson-frequencies",
    title: "Crimson Frequencies",
    type: "album",
    releaseDate: "2024-12-15",
    coverArt: "/releases/crimson-frequencies.jpg",
    description: "A journey through the digital void, blending industrial textures with ethereal vocals.",
    links: {
      spotify: "https://open.spotify.com/album/...",
      appleMusic: "https://music.apple.com/album/...",
      youtubeMusic: "https://music.youtube.com/playlist/...",
    }
  },
  {
    id: "obsidian-ritual",
    title: "Obsidian Ritual",
    type: "single",
    releaseDate: "2024-10-01",
    coverArt: "/releases/obsidian-ritual.jpg",
    description: "The first signal from the void.",
    links: {
      spotify: "https://open.spotify.com/track/...",
      youtubeMusic: "https://music.youtube.com/watch?v=...",
    }
  }
];
