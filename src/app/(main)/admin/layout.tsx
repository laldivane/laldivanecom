import { Outfit, Syne } from "next/font/google";
import "../../globals.css";

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

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${outfit.variable} ${syne.variable} bg-bg text-foreground antialiased selection:bg-crimson/30 overflow-x-hidden min-h-screen`}>
        {children}
    </div>
  );
}
