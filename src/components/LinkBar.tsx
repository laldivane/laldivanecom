import Image from "next/image";
import { PLATFORM_ICONS, PlatformKey } from "@/data/platformIcons";

interface LinkBarProps {
  platform: PlatformKey;
  href: string;
  label: string;
}

export default function LinkBar({ platform, href, label }: LinkBarProps) {
  const iconSrc = PLATFORM_ICONS[platform];

  if (!iconSrc) {
    return null;
  }

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-crimson/50 rounded-lg transition-all duration-300 group"
    >
      <div className="flex items-center gap-4">
        <div className="relative w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity">
          <Image 
            src={iconSrc} 
            alt={label} 
            fill 
            className="object-contain" 
          />
        </div>
        <span className="font-display font-bold uppercase tracking-wider text-sm sm:text-base">{label}</span>
      </div>
    </a>
  );
}
