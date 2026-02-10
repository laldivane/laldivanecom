
import { urlForImage } from "@/sanity/lib/image";
import DiscographyContent from "@/components/DiscographyContent";

// Helper to fetch ALL tracks (not just live ones for the archive)
// The existing getLiveDiscography filters for status == 'live'.
// But the archive page had a filter for drafts/pending. 
// So I should fetch ALL tracks.
// I need a query for that. I will add it or use a raw one.
// I'll check if getLiveDiscography is what I want. 
// The original page had tabs for "Draft", "Distributing". 
// If this is a public site, maybe we only want Live?
// But the user has an archive page showing Status.
// I will create a new query `getAllDiscography` in queries.ts first.
// Or I can use this page to only show Live tracks if user is public.
// Assuming "Admin" view vs Public view.
// If this is public site, likely only "Live" tracks should be visible.
// Accessing "Draft" tracks usually requires auth.
// But the original code was client side static data, so it had everything.
// I will stick to "getLiveDiscography" for now to be safe for public.
// If user wants full archive, I will need to enable token or proxy.
// For now, I will use `getLiveDiscography` which returns live tracks.
// Wait, the status filter in UI will be useless if I only fetch live.
// I'll assume for now we only show LIVE tracks to public. 
// If the user wants to see drafts, they should use Studio.
// BUT, to replicate previous functionality exactly, I would need all tracks.
// Since I migrated everything to Sanity, public API only returns public documents unless I use a token.
// So I will just use `getLiveDiscography`. The filter tabs will likely just show "Live" or empty for others.

export default async function DiscographyPage() {
  const customQuery = `*[_type == "track"] | order(releaseDate desc) {
    title,
    "id": slug.current,
    catalogId,
    releaseDate,
    coverArt,
    status,
    type,
    visualizerId,
    platforms
  }`;
  
  // Note: Standard client fetch might only return published documents.
  // Drafts are not returned to public unauthenticated client.
  // So "status: draft" items in Sanity might not appear unless I use a preview client.
  // I will just use the standard client which returns published docs.
  // If "status" field is "draft" but document is "published", it will show up.
  // Sanity "Draft" system is different from my custom "status" field.
  // My "status" field is a string string.
  // So yes, I can fetch all.
  
  const { client } = await import("@/sanity/lib/client");
  const tracks = await client.fetch(customQuery);

  // Process images
  const processedTracks = tracks.map((track: any) => ({
    ...track,
    coverArtUrl: track.coverArt ? urlForImage(track.coverArt).width(400).height(400).url() : null
  }));

  return (
    <DiscographyContent tracks={processedTracks} />
  );
}
