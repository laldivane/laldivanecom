"use client";

import { useState } from "react";

type Props = {
  title: string;
  defaultOpen?: boolean;
  rightSlot?: React.ReactNode;
  children: React.ReactNode;
};

export default function AccordionSection({ title, defaultOpen, rightSlot, children }: Props) {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <div className="rounded-xl border border-borderc bg-panel2/30 overflow-hidden">
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((v) => !v);
          }
        }}
        className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left hover:bg-panel2/50 transition-colors"
      >
        <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">{title}</span>

        <div className="flex items-center gap-2">
          {rightSlot && (
            <div
              className="relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {rightSlot}
            </div>
          )}
          <svg
            className={[
              "w-4 h-4 text-muted transition-transform duration-200",
              open ? "rotate-180" : "rotate-0",
            ].join(" ")}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>

      <div
        className={[
          "grid transition-all duration-200",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <div className="border-t border-borderc px-4 pb-4 pt-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
