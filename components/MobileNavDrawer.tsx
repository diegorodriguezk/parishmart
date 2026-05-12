"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { LogoMark } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

const PRIMARY = [
  { href: "/shop", label: "Shop" },
  { href: "/give", label: "Give" },
  { href: "/communities", label: "Communities" },
  { href: "/local-businesses", label: "Businesses" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/search", label: "Search" },
];
const SECONDARY = [
  { href: "/onboarding", label: "Join Us" },
  { href: "/onboarding/parish", label: "Open Your Store" },
  { href: "/onboarding/seller", label: "Become a Seller" },
  { href: "/onboarding/sponsor", label: "Become a Sponsor" },
  { href: "/onboarding/local-business", label: "Become a Business" },
  { href: "/sign-in", label: "Sign in / Log in" },
];

export function MobileNavDrawer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="grid h-10 w-10 place-items-center rounded-full border border-pm-border bg-white text-pm-navy lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" aria-hidden />
      </button>

      {open ? (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-label="Menu">
          <button
            aria-label="Close overlay"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <aside className="absolute left-0 top-0 flex h-dvh w-[88%] max-w-[360px] flex-col bg-white shadow-2xl">
            <header className="flex items-center justify-between border-b border-pm-border px-5 py-4">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2"
              >
                <LogoMark className="h-9 w-auto" />
                <span className="text-lg font-extrabold tracking-tight text-pm-navy">
                  ParishMart
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full border border-pm-border text-pm-muted hover:text-pm-navy"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </header>

            <div className="border-b border-pm-border bg-pm-soft/40 px-5 py-3">
              <Link
                href="/search"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-full border border-pm-border bg-white px-3 py-2 text-sm text-pm-muted hover:border-pm-blue"
              >
                <Search className="h-4 w-4" aria-hidden />
                <span>Search ParishMart…</span>
              </Link>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4">
              <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                Explore
              </p>
              <ul className="mt-2 space-y-1">
                {PRIMARY.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-3 py-3 text-base font-bold text-pm-navy hover:bg-pm-soft"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-5 px-3 text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                Join
              </p>
              <ul className="mt-2 space-y-1">
                {SECONDARY.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-3 py-3 text-sm text-pm-ink hover:bg-pm-soft"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between px-3">
                <span className="text-xs text-pm-muted">Language</span>
                <LanguageSwitcher compact />
              </div>
            </nav>

            <div className="border-t border-pm-border p-4">
              <Link
                href="/onboarding"
                onClick={() => setOpen(false)}
                className="pm-btn pm-btn-primary w-full"
              >
                Join the Ecosystem
              </Link>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
