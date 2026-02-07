export default function Links() {
  return (
    <div className="max-w-md mx-auto px-6 py-32 flex flex-col gap-4">
      <div className="text-center mb-8">
        <div className="w-24 h-24 mx-auto bg-neutral-800 rounded-full mb-4 border-2 border-crimson"></div>
        <h1 className="text-2xl font-bold">LAL DIVANE</h1>
        <p className="text-white/50 text-sm">Digital Artist & Musician</p>
      </div>

      <LinkButton href="#" label="Spotify" icon="🎧" />
      <LinkButton href="#" label="Apple Music" icon="🎵" />
      <LinkButton href="#" label="YouTube" icon="📺" />
      <LinkButton href="#" label="Instagram" icon="📸" />
      <LinkButton href="#" label="Twitter / X" icon="✖️" />
      
    </div>
  )
}

function LinkButton({ href, label, icon }: { href: string; label: string; icon: string }) {
    return (
        <a href={href} className="flex items-center justify-between px-6 py-4 bg-white/5 hover:bg-crimson hover:text-white border border-white/10 rounded-xl transition-all group">
            <span className="font-bold tracking-wide">{label}</span>
            <span className="text-xl group-hover:scale-110 transition-transform">{icon}</span>
        </a>
    )
}
