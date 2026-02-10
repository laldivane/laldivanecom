import { Metadata } from "next";
import PressContent from "@/components/PressContent";

export const metadata: Metadata = {
  title: "Brand Kit",
  description: "Official visual identity assets for Lal Divane. Experience the typography, colors, and iconography of the digital void.",
};

export default function PressPage() {
  return <PressContent />;
}
