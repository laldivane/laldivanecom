import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../../globals.css";
import { Outfit, Syne } from "next/font/google";

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

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${outfit.variable} ${syne.variable} flex flex-col min-h-screen bg-bg text-foreground antialiased selection:bg-crimson/30 overflow-x-hidden`}>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
