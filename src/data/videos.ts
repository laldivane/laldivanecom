export interface Video {
  id: string; // YouTube ID
  title: string;
  date: string;
  thumbnail: string;
  tags: string[];
  category: "music-video" | "visualizer" | "short" | "lore";
}

export const videos: Video[] = [
  {
    id: "4cOdK2wGLET",
    title: "Obsidian Ritual (Official Visualizer)",
    date: "2024-10-01",
    thumbnail: "https://img.youtube.com/vi/4cOdK2wGLET/maxresdefault.jpg",
    tags: ["visualizer", "dark-pop", "industrial"],
    category: "visualizer"
  },
  {
    id: "vX2B9c8D2E",
    title: "The Birth of Lal (Lore Clip)",
    date: "2024-09-15",
    thumbnail: "https://img.youtube.com/vi/vX2B9c8D2E/maxresdefault.jpg",
    tags: ["lore", "story"],
    category: "lore"
  }
];
