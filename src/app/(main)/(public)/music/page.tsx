import { Metadata } from "next";
import MusicContent from "@/components/MusicContent";
import { getLiveDiscography, getVisualArchive } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Music",
  description: "Experience the complete sonic transmission of Lal Divane. Listen on Spotify, YouTube Music, and other digital platforms.",
};

export default async function MusicPage() {
  const discography = await getLiveDiscography();
  const visualArchive = await getVisualArchive();

  return <MusicContent discography={discography} visualArchive={visualArchive} />;
}
