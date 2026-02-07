/**
 * LAL DIVANE - LANGUAGE SWITCHER
 * 
 * TR/EN dil seçimi butonları.
 */

"use client";

import { useLanguage } from "@/lib/language";

export default function LanguageSwitcher() {
  const { lang, setLanguage } = useLanguage();

  return (
    <div className="flex bg-panel2/50 p-1 rounded-lg border border-borderc/30 scale-90 origin-right">
      <button
        onClick={() => setLanguage("tr")}
        className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase transition-all ${
          lang === "tr" ? "bg-crimson text-white shadow-lg shadow-crimson/20" : "text-muted hover:text-textc"
        }`}
      >
        TR
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase transition-all ${
          lang === "en" ? "bg-crimson text-white shadow-lg shadow-crimson/20" : "text-muted hover:text-textc"
        }`}
      >
        EN
      </button>
    </div>
  );
}
