"use client";

export default function VFX() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      <div className="fixed inset-0 pointer-events-none z-[9997] bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(5,5,8,0.4)_100%)]" aria-hidden="true" />
    </>
  );
}
