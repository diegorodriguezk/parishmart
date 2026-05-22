"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-pm-border last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-bold text-pm-navy">{title}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-pm-muted transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open && (
        <div className="pb-4 text-sm text-pm-muted">{children}</div>
      )}
    </div>
  );
}

export function CollapsibleDescription({
  text,
  previewLines = 2,
  className = "",
}: {
  text: string;
  previewLines?: number;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={className}>
      <p
        className={`text-xs text-pm-muted transition-all ${
          open ? "" : previewLines === 3 ? "line-clamp-3" : "line-clamp-2"
        }`}
      >
        {text}
      </p>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-pm-blue hover:underline"
      >
        {open ? "See less" : "See more"}
        <ChevronDown
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
    </div>
  );
}
