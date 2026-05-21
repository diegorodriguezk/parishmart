"use client";

import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const [lang, setLang] = useState<"EN" | "ES">("EN");
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onBlur={() => window.setTimeout(() => setOpen(false), 150)}
        className={
          compact
            ? "inline-flex items-center rounded-full border border-pm-border bg-white px-2.5 py-1.5 text-sm font-bold text-pm-navy hover:border-pm-blue"
            : "inline-flex items-center gap-1.5 rounded-full border border-pm-border bg-white px-3 py-2 text-sm font-bold text-pm-navy hover:border-pm-blue"
        }
        aria-label={`Language: ${lang}`}
      >
        {compact ? null : <Globe className="h-4 w-4 text-pm-blue" aria-hidden />}
        <span>{lang}</span>
        {compact ? null : (
          <ChevronDown className="h-3.5 w-3.5 text-pm-muted" aria-hidden />
        )}
      </button>
      {open ? (
        <div
          className={`absolute right-0 z-50 w-36 overflow-hidden rounded-2xl border border-pm-border bg-white shadow-pm-card ${
            compact ? "bottom-full mb-2" : "top-full mt-2"
          }`}
        >
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
