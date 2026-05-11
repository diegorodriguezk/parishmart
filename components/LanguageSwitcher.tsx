"use client";

import { useState } from "react";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const [lang, setLang] = useState<"EN" | "ES">("EN");
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onBlur={() => window.setTimeout(() => setOpen(false), 150)}
        className={`inline-flex items-center gap-1 rounded-full border border-pm-border bg-white px-3 py-2 text-sm font-bold text-pm-navy hover:border-pm-blue ${compact ? "px-2" : ""}`}
        aria-label={`Language: ${lang}`}
      >
        <span className="text-pm-blue" aria-hidden>🌐</span>
        <span>{lang}</span>
        <span className="text-pm-muted" aria-hidden>▾</span>
      </button>
      {open ? (
        <div className="absolute right-0 top-full mt-2 w-32 overflow-hidden rounded-2xl border border-pm-border bg-white shadow-pm-card">
          {(["EN", "ES"] as const).map((code) => (
            <button
              key={code}
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                setLang(code);
                setOpen(false);
              }}
              data-active={lang === code ? "true" : undefined}
              className="flex w-full items-center justify-between px-3 py-2 text-sm font-bold text-pm-navy hover:bg-pm-soft data-[active=true]:bg-pm-soft"
            >
              <span>{code === "EN" ? "English" : "Español"}</span>
              <span className="text-xs text-pm-muted">{code}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
