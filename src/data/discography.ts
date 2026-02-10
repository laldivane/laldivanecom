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
    audiomack?: string;
    qobuz?: string;
  };
  visualizerId?: string; // YouTube video ID for visualizer
}

import discographyData from "./json/discography.json";

export const discography: Track[] = discographyData as Track[];

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
