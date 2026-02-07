"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/data/links";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="lg:hidden">
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
            <div className="absolute top-0 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-crimson/10 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-crimson/5 blur-[60px] sm:blur-[80px] rounded-full pointer-events-none" />

            <nav className="flex flex-col items-center gap-6 sm:gap-8 text-center relative z-10">
              {navLinks.map((item, i) => (
                <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                >
                    <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl sm:text-2xl font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white/80 hover:text-crimson hover:scale-105 transition-all duration-300"
                    >
                    {item.label}
                    </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 sm:mt-8 w-10 sm:w-12 h-[1px] bg-crimson/30"
              />

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
