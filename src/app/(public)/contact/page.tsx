"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-20 space-y-4">
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter">CONTACT</h1>
          <p className="text-muted tracking-[0.3em] font-light uppercase text-sm">Send a signal into the void</p>
        </header>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/[0.02] border border-white/5 p-10 md:p-16 rounded-[2.5rem] backdrop-blur-xl"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-crimson/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="email@example.com"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-crimson/50 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted ml-1">Message</label>
              <textarea 
                rows={6}
                placeholder="What is your signal?"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-crimson/50 transition-colors resize-none"
              />
            </div>

            <button 
              type="submit"
              className="w-full btn-primary py-5 text-sm"
            >
              Send Signal
            </button>
          </form>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-crimson mb-2">Management</h4>
            <p className="text-sm text-muted">management@laldivane.com</p>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-crimson mb-2">Press</h4>
            <p className="text-sm text-muted">press@laldivane.com</p>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-crimson mb-2">General</h4>
            <p className="text-sm text-muted">void@laldivane.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
