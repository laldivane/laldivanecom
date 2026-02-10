import { Metadata } from "next";
import PressContent from "@/components/PressContent";
import { getBrandKit } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Brand Kit",
  description: "Official visual identity assets for Lal Divane. Experience the typography, colors, and iconography of the digital void.",
};

export default async function PressPage() {
  const brandKit = await getBrandKit();
  return <PressContent brandKit={brandKit} />;
}
