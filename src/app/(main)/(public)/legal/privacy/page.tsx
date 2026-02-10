export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-32 space-y-12">
      <h1 className="text-5xl font-display font-black tracking-tighter">Privacy Policy</h1>
      <div className="prose prose-invert prose-crimson">
        <p className="text-muted leading-relaxed">
          Last updated: February 6, 2026.
        </p>
        <p>
          Lal Divane (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
        </p>
        {/* Simplified dummy content for now, should be replaced with real legal text */}
        <h2 className="text-xl font-bold text-foreground pt-8 uppercase tracking-widest">1. Data Collection</h2>
        <p className="text-muted">We only collect minimal data required for analytics (if consented) and contact form submissions.</p>
        
        <h2 className="text-xl font-bold text-foreground pt-8 uppercase tracking-widest">2. Your Rights</h2>
        <p className="text-muted">Under GDPR/KVKK, you have the right to access, rectify, or erase your personal data.</p>
      </div>
    </article>
  );
}
