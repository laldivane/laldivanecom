"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg pt-24 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <header className="mb-12 sm:mb-20 space-y-3 sm:space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-black tracking-tighter">CONTACT</h1>
          <p className="text-muted tracking-[0.2em] sm:tracking-[0.3em] font-light uppercase text-xs sm:text-sm">Send a signal into the void</p>
        </header>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/[0.02] border border-white/5 p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-[2.5rem] backdrop-blur-xl"
        >
          <form className="space-y-6 sm:space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              <div className="space-y-2">
                <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-crimson/50 transition-colors text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="email@example.com"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-crimson/50 transition-colors text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted ml-1">Message</label>
              <textarea 
                rows={5}
                placeholder="What is your signal?"
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-crimson/50 transition-colors resize-none text-sm sm:text-base"
              />
            </div>

            <button 
              type="submit"
              className="w-full btn-primary py-4 sm:py-5 text-xs sm:text-sm"
            >
              Send Signal
            </button>
          </form>
        </motion.div>

        <div className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div>
            <h4 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-crimson mb-2">Management</h4>
            <p className="text-xs sm:text-sm text-muted break-all">management@laldivane.com</p>
          </div>
          <div>
            <h4 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-crimson mb-2">Press</h4>
            <p className="text-xs sm:text-sm text-muted break-all">press@laldivane.com</p>
          </div>
          <div>
            <h4 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-crimson mb-2">General</h4>
            <p className="text-xs sm:text-sm text-muted break-all">void@laldivane.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
