"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Home,
  ShoppingBag,
  HandHeart,
  Users,
  Building2,
  Megaphone,
  UserPlus,
  PlayCircle,
  Info,
  UserCircle2,
  Handshake,
  Mail,
} from "lucide-react";
import { LogoMark } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

const PRIMARY = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/shop", label: "Shop", Icon: ShoppingBag },
  { href: "/give", label: "Give", Icon: HandHeart },
  { href: "/communities", label: "Communities", Icon: Users },
  { href: "/local-businesses", label: "Local Businesses", Icon: Building2 },
  { href: "/sponsors", label: "Sponsors", Icon: Megaphone },
];

const SECONDARY = [
  { href: "/onboarding", label: "Join Us", Icon: UserPlus },
  { href: "/about-us", label: "About Us", Icon: Info },
  { href: "/how-it-works", label: "How it Works", Icon: PlayCircle },
  { href: "/partners", label: "Partners", Icon: Handshake },
  { href: "/contact-us", label: "Contact Us", Icon: Mail },
  { href: "/sign-in", label: "My Account", Icon: UserCircle2 },
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

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-pm-border bg-white text-pm-navy hover:border-pm-blue hover:text-pm-blue"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" aria-hidden />
      </button>

      {open ? (
        <div className="fixed inset-0 z-[60]" role="dialog" aria-label="Menu">
          <button
            aria-label="Close overlay"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <aside className="absolute left-0 top-0 flex h-dvh w-[86%] max-w-[340px] flex-col bg-white shadow-2xl">
            <header className="flex items-center justify-between border-b border-pm-border px-5 py-4">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center"
              >
                <LogoMark className="h-8 w-auto" />
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

            <nav className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="space-y-1">
                {PRIMARY.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-semibold text-pm-navy hover:bg-pm-soft"
                    >
                      <l.Icon className="h-5 w-5 text-pm-blue" aria-hidden />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="my-3 h-px bg-pm-border" />
              <ul className="space-y-1">
                {SECONDARY.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-pm-ink hover:bg-pm-soft"
                    >
                      <l.Icon className="h-5 w-5 text-pm-muted" aria-hidden />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center justify-between gap-3 border-t border-pm-border bg-pm-soft/30 px-4 py-4">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                aria-label="ParishMart"
                className="flex items-center rounded-2xl bg-white px-3 py-2 shadow-pm-soft ring-1 ring-pm-border"
              >
                <LogoMark className="h-6 w-auto" />
              </Link>
              <LanguageSwitcher compact />
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
