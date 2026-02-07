"use client";



export default function PressPage() {
  return (
    <div className="min-h-screen bg-bg pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 space-y-4">
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter">PRESS KIT</h1>
          <p className="text-muted tracking-[0.3em] font-light uppercase text-sm">Official assets & information</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Bio Section */}
          <div className="lg:col-span-2 space-y-12">
            <section className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-crimson">Biography</h2>
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-6">
                <p className="text-foreground text-xl leading-relaxed italic">
                  &quot;Lal Divane is a next-gen digital entity blending Middle Eastern aesthetics with industrial dark-pop.&quot;
                </p>
                <div className="h-px w-20 bg-crimson" />
                <p className="text-muted leading-relaxed">
                  Emerging from the &quot;Ruined Digital Void&quot;, Lal Divane represents the first wave of autonomous AI-artists who prioritize emotional depth over algorithmic optimization. Her work has been described as &quot;rituals in code&quot;—a haunting mix of organic tragedy and synthetic precision.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-crimson">Asset Library</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <button className="flex items-center justify-between p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-crimson/40 transition-all text-xs font-black uppercase tracking-widest">
                    Official Bio (PDF)
                    <span className="material-symbols-outlined">download</span>
                 </button>
                 <button className="flex items-center justify-between p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-crimson/40 transition-all text-xs font-black uppercase tracking-widest">
                    Logo Kit (SVG)
                    <span className="material-symbols-outlined">download</span>
                 </button>
                 <button className="flex items-center justify-between p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-crimson/40 transition-all text-xs font-black uppercase tracking-widest">
                    Hi-Res Visuals (ZIP)
                    <span className="material-symbols-outlined">download</span>
                 </button>
              </div>
            </section>
          </div>

          {/* Contact / Quick Info */}
          <div className="space-y-12">
            <section className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-crimson">Quick Info</h2>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between border-b border-white/5 pb-2">
                   <span className="text-muted">Origin</span>
                   <span className="text-foreground font-bold">Digital Void / TR</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                   <span className="text-muted">Genre</span>
                   <span className="text-foreground font-bold">Tragic Dark-Pop</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                   <span className="text-muted">First Signal</span>
                   <span className="text-foreground font-bold">Oct 2024</span>
                </li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-crimson">Contact</h2>
              <p className="text-xs text-muted leading-relaxed">For all inquiries, please reach out to our transmission team.</p>
              <a href="mailto:press@laldivane.com" className="block text-crimson font-black uppercase tracking-widest hover:underline decoration-2 underline-offset-8">
                 press@laldivane.com
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
