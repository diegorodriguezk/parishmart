"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
