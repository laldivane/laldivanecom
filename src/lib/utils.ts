import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Shadcn UI / Tailwind Utility for merging class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * LAL DIVANE - GENEL YARDIMCI ARAÇLAR (UTILS)
 * 
 * Uygulama genelinde kullanılan küçük ama kritik yardımcı fonksiyonları içerir.
 */

/**
 * updateByPath: Bir nesnenin içindeki değeri, "nokta notasyonu" (örn: 'shot.lens') kullanarak günceller.
 * Orijinal nesneyi bozmaz, güncellenmiş yeni bir kopya döner.
 * 
 * @param obj - Güncellenecek nesne
 * @param path - Hedef yol (örn: "physical_traits.eyes.color")
 * @param value - Yeni değer
 */
export function updateByPath<T extends object>(obj: T, path: string, value: unknown): T {
  const clone: any = JSON.parse(JSON.stringify(obj));
  const keys = path.split(".");
  let cur = clone;

  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i]!;
    // Ara düğümler yoksa oluştur
    if (cur[k] === undefined || cur[k] === null) cur[k] = {};
    cur = cur[k];
  }

  // Son düğümü güncelle
  cur[keys[keys.length - 1]!] = value;
  return clone as T;
}
