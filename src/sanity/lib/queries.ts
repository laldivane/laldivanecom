import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

// --- QUERIES ---
export const settingsQuery = groq`*[_type == "settings"][0]`;
export const discographyQuery = groq`*[_type == "track"] | order(releaseDate desc)`;
export const liveDiscographyQuery = groq`*[_type == "track" && status == "live"] | order(releaseDate desc)`;
export const visualArchiveQuery = groq`*[_type == "visualArchive"] | order(date desc)`;
export const storyQuery = groq`*[_type == "story"][0]`;
export const brandKitQuery = groq`*[_type == "brandKit"][0]{
  ...,
  downloads[]{
    ...,
    file{
      asset->{
        url
      }
    }
  }
}`;
export const homePageQuery = groq`*[_type == "homePage"][0]`;

// --- FETCH FUNCTIONS ---
export async function getSettings() {
  return client.fetch(settingsQuery);
}

export async function getDiscography() {
  return client.fetch(discographyQuery);
}

export async function getLiveDiscography() {
    return client.fetch(liveDiscographyQuery);
}

export async function getVisualArchive() {
    return client.fetch(visualArchiveQuery);
}

export async function getStory() {
    return client.fetch(storyQuery);
}

export async function getBrandKit() {
    return client.fetch(brandKitQuery);
}

export async function getHomePage() {
    return client.fetch(homePageQuery);
}
