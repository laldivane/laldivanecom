import styles from "./SocialBadge.module.css";
import Image from "next/image";
import { PLATFORM_ICONS } from "@/data/platformIcons";

interface SocialBadgeProps {
  platform: keyof typeof PLATFORM_ICONS;
  href: string;
  label: string;
}

export default function SocialBadge({ platform, href, label }: SocialBadgeProps) {
  const iconSrc = PLATFORM_ICONS[platform];

  if (!iconSrc) {
    return null;
  }

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.badge}
      aria-label={label}
    >
      <div className={styles.iconWrapper}>
        <Image 
          src={iconSrc} 
          alt={label} 
          fill 
          className="object-contain" 
        />
      </div>
    </a>
  );
}
