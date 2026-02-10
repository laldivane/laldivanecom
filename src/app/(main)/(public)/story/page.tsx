import { Metadata } from "next";
import StoryContent from "@/components/StoryContent";

export const metadata: Metadata = {
  title: "The Manifesto",
  description: "Discover the origins and the ritual behind Lal Divane. Fragments of an AI identity exploring human melancholy.",
};

export default function StoryPage() {
  return <StoryContent />;
}
