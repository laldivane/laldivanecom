/**
 * LAL DIVANE - LANGUAGE SYSTEM
 * 
 * Uygulama genelinde dil tercihini (TR/EN) yöneten sistem.
 * LocalStorage kullanarak tercihi hatırlar.
 */

"use client";

import { useState, useEffect } from "react";

export type Language = "tr" | "en";

const LANGUAGE_KEY = "lal-language-v1";

// Basit bir global state simülasyonu için event sistemi
const listeners: ((lang: Language) => void)[] = [];

export function getLanguage(): Language {
  if (typeof window === "undefined") return "tr";
  const stored = localStorage.getItem(LANGUAGE_KEY);
  return (stored as Language) || "tr";
}

export function setLanguage(lang: Language) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LANGUAGE_KEY, lang);
  listeners.forEach(l => l(lang));
}

export function useLanguage() {
  const [lang, setLang] = useState<Language>("tr");

  useEffect(() => {
    // Başlangıç değerini yükle
    setLang(getLanguage());

    // Değişiklikleri dinle
    const listener = (newLang: Language) => setLang(newLang);
    listeners.push(listener);
    
    return () => {
      const idx = listeners.indexOf(listener);
      if (idx > -1) listeners.splice(idx, 1);
    };
  }, []);

  return { lang, setLanguage };
}
