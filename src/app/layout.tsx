import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://laldivane.com"),
  title: {
    default: "Lal Divane | AI Artist & Digital Entity",
    template: "%s | Lal Divane"
  },
  description: "Official portal of Lal Divane. Experience the tragic elegance of a digital void through music, art, and fragmented signals.",
  keywords: ["Lal Divane", "AI Artist", "Tragic Dark-Pop", "Digital Void", "Visual Art", "Music Producer", "Next-Gen Entity"],
  authors: [{ name: "Lal Divane" }, { name: "Canberk Mansuroğlu" }],
  creator: "Lal Divane",
  openGraph: {
    title: "Lal Divane | AI Artist & Digital Entity",
    description: "Official portal of Lal Divane. Music, Visuals, Lore.",
    url: "https://laldivane.com",
    siteName: "Lal Divane",
    images: [
      {
        url: "/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "Lal Divane - Official Signal",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lal Divane | AI Artist & Digital Entity",
    description: "Official portal of Lal Divane. Music, Visuals, Lore.",
    images: ["/og-main.jpg"],
    creator: "@laldivane",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050508",
};

import { Outfit, Syne } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import VFX from "@/components/VFX";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${outfit.variable} ${syne.variable}`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-25..0&display=swap" />
      </head>
      <body className="bg-bg text-foreground antialiased selection:bg-crimson/30 overflow-x-hidden">
        <CustomCursor />
        <VFX />
        {children}
      </body>
    </html>
  );
}
