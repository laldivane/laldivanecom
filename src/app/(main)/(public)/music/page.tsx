import { Metadata } from "next";
import MusicContent from "@/components/MusicContent";

export const metadata: Metadata = {
  title: "Music",
  description: "Experience the complete sonic transmission of Lal Divane. Listen on Spotify, YouTube Music, and other digital platforms.",
};

export default function MusicPage() {
  return <MusicContent />;
}
