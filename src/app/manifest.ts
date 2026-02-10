import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lal Divane",
    short_name: "Lal Divane",
    description: "AI Artist & Digital Entity - Official Portal",
    start_url: "/",
    display: "standalone",
    background_color: "#050508",
    theme_color: "#f41e42",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["music", "entertainment"],
    lang: "tr",
    orientation: "portrait-primary",
  };
}
