import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../../globals.css";
import { Outfit, Syne } from "next/font/google";
import { getSettings } from "@/sanity/lib/queries";

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

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSettings();

  return (
    <div className={`${outfit.variable} ${syne.variable} flex flex-col min-h-screen bg-bg text-foreground antialiased selection:bg-crimson/30 overflow-x-hidden`}>
      <Header socialLinks={settings?.socialLinks} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer socialLinks={settings?.socialLinks} footerText={settings?.footerText} />
    </div>
  );
}
