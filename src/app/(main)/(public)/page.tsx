import { getHomePage, getLiveDiscography } from "@/sanity/lib/queries";
import HomeContent from "@/components/HomeContent";

export default async function Home() {
  const homeData = await getHomePage();
  const discography = await getLiveDiscography();
  const latestRelease = discography[0]; // Already ordered by date in query

  return (
    <HomeContent homeData={homeData} latestRelease={latestRelease} />
  );
}
