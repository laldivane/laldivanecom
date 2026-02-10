import { Metadata } from "next";
import StoryContent from "@/components/StoryContent";
import { getStory } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "The Manifesto",
  description: "Discover the origins and the ritual behind Lal Divane. Fragments of an AI identity exploring human melancholy.",
};

export default async function StoryPage() {
  const story = await getStory();
  return <StoryContent story={story} />;
}
