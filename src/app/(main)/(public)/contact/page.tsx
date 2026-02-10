"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: data.message });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error });
      }
    } catch {
      setStatus({ type: "error", message: "Bağlantı hatası. Lütfen tekrar deneyin." });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (status.type !== "idle") setStatus({ type: "idle" });
  };

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
          {/* Status Messages */}
          <AnimatePresence>
            {status.type !== "idle" && status.type !== "loading" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={`mb-6 p-4 rounded-xl border text-sm font-medium ${
                  status.type === "success" 
                    ? "bg-green-500/10 border-green-500/30 text-green-400" 
                    : "bg-crimson/10 border-crimson/30 text-crimson"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-lg">
                    {status.type === "success" ? "check_circle" : "error"}
                  </span>
                  {status.message}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              <div className="space-y-2">
                <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted ml-1">Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-crimson/50 transition-colors text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted ml-1">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-crimson/50 transition-colors text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted ml-1">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="What is your signal?"
                required
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:border-crimson/50 transition-colors resize-none text-sm sm:text-base"
              />
            </div>

            <button 
              type="submit"
              disabled={status.type === "loading"}
              className={`w-full py-4 sm:py-5 text-xs sm:text-sm rounded-full font-black uppercase tracking-widest transition-all duration-300 ${
                status.type === "loading"
                  ? "bg-white/10 text-muted cursor-not-allowed"
                  : "bg-crimson text-white hover:bg-crimson/90 hover:shadow-[0_0_30px_rgba(244,30,66,0.3)]"
              }`}
            >
              {status.type === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined animate-spin text-lg">progress_activity</span>
                  Transmitting...
                </span>
              ) : (
                "Send Signal"
              )}
            </button>
          </form>
        </motion.div>

        <div className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div>
            <h4 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-crimson mb-2">Management</h4>
            <a href="mailto:management@laldivane.com" className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors break-all">management@laldivane.com</a>
          </div>
          <div>
            <h4 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-crimson mb-2">Press</h4>
            <a href="mailto:press@laldivane.com" className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors break-all">press@laldivane.com</a>
          </div>
          <div>
            <h4 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-crimson mb-2">General</h4>
            <a href="mailto:void@laldivane.com" className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors break-all">void@laldivane.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
