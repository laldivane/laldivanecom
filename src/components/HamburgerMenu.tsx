"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const MENU_ITEMS = [
  { label: "Manifesto", href: "/manifesto" },
  { label: "Releases", href: "/releases" },
  { label: "Discography", href: "/discgraphy" },
  { label: "Contact", href: "/contact" },
  { label: "Links", href: "/links" },
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="relative z-50 flex flex-col items-center justify-center w-8 h-8 gap-1.5 group"
        aria-label="Toggle Menu"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="w-full h-0.5 bg-white group-hover:bg-crimson transition-colors"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-full h-0.5 bg-white group-hover:bg-crimson transition-colors"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="w-full h-0.5 bg-white group-hover:bg-crimson transition-colors"
        />
      </button>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#0a0a0c] flex flex-col items-center justify-center"
          >
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-crimson/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-crimson/5 blur-[80px] rounded-full pointer-events-none" />

            <nav className="flex flex-col items-center gap-8 text-center relative z-10">
              {MENU_ITEMS.map((item, i) => (
                <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                >
                    <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold tracking-[0.2em] uppercase text-white/80 hover:text-crimson hover:scale-105 transition-all duration-300"
                    >
                    {item.label}
                    </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 w-12 h-[1px] bg-crimson/30"
              />

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
