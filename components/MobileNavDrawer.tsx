"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  { href: "/communities", label: "Parishes & Causes", Icon: Users },
  { href: "/local-businesses", label: "Business Supporters", Icon: Building2 },
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
  const asideRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (asideRef.current?.contains(target)) return;
      if (buttonRef.current?.contains(target)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open]);

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
        ref={buttonRef}
        type="button"
        onClick={() => setOpen(true)}
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-pm-border bg-white text-pm-navy hover:border-pm-blue hover:text-pm-blue"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" aria-hidden />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[60]"
          role="dialog"
          aria-label="Menu"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div
            aria-hidden
            onClick={() => setOpen(false)}
            className="absolute inset-0 cursor-pointer bg-black/40 backdrop-blur-sm"
          />
          <aside
            ref={asideRef}
            onClick={(e) => e.stopPropagation()}
            className="absolute left-0 top-0 flex h-dvh w-[86%] max-w-[340px] flex-col bg-white shadow-2xl">
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

            <div className="flex items-center justify-end border-t border-pm-border bg-pm-soft/30 px-4 py-4">
              <LanguageSwitcher compact />
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
