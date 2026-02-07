import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://laldivane.com";
  
  const routes = [
    "",
    "/music",
    "/videos",
    "/story",
    "/press",
    "/contact",
    "/manifesto",
    "/legal/privacy",
    "/legal/cookies",
    "/legal/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
