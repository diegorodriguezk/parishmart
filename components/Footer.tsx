import Link from "next/link";
import { LogoMark } from "./Logo";

const COLS = [
  {
    title: "Quick Links",
    links: [
      { label: "Marketplace", href: "/shop" },
      { label: "E-Stores", href: "/communities" },
      { label: "Sell with Us", href: "/onboarding/seller" },
      { label: "Partner with us", href: "/onboarding/sponsor" },
      { label: "About", href: "/" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "FAQs", href: "/" },
      { label: "Contact Us", href: "/" },
      { label: "Privacy Policy", href: "/" },
      { label: "Refund Policy", href: "/" },
      { label: "Terms of Service", href: "/" },
    ],
  },
  {
    title: "My Account",
    links: [
      { label: "Track your order", href: "/dashboard" },
      { label: "Register an account", href: "/onboarding" },
      { label: "Login to your account", href: "/sign-in" },
      { label: "Forgot Password", href: "/sign-in" },
      { label: "Shopping Cart", href: "/shop/cart" },
    ],
  },
];

const SPONSORS = [
  { name: "Cleveland Hospital", initials: "CH" },
  { name: "Community Bank", initials: "BK" },
  { name: "Baires Grill", initials: "BG" },
  { name: "Maria's Studios", initials: "MS" },
  { name: "Casa Manresa", initials: "CM" },
  { name: "Simplisafe", initials: "SS" },
  { name: "Pretzelmaker", initials: "PM" },
  { name: "Family Streaming", initials: "TV" },
];

export function Footer() {
  return (
    <footer className="mt-20 bg-pm-navy text-white">
      {/* Sponsor row */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1280px] px-6 py-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-white/60">
              Proudly supported by
            </p>
            <Link
              href="/onboarding/sponsor"
              className="text-xs font-bold text-pm-cyan hover:text-white"
            >
              Become a sponsor →
            </Link>
          </div>
          <ul className="mt-4 -mx-1 flex flex-nowrap items-center gap-3 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible">
            {SPONSORS.map((s) => (
              <li
                key={s.initials}
                className="flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5"
              >
                <span className="grid h-7 w-7 place-items-center rounded-md bg-white/15 text-[10px] font-extrabold text-white">
                  {s.initials}
                </span>
                <span className="text-xs font-bold text-white/85 whitespace-nowrap">
                  {s.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-14 md:grid-cols-[1.2fr_repeat(3,_1fr)]">
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-pm-soft"
            aria-label="ParishMart home"
          >
            <LogoMark className="h-10 w-auto" />
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-extrabold tracking-tight text-pm-navy">
                ParishMart
              </span>
              <span className="text-[9px] font-bold tracking-wider text-pm-blue">
                SHOP WITH PURPOSE · GIVE WITH LOVE
              </span>
            </span>
          </Link>
          <p className="max-w-xs text-sm text-white/70">
            Unifying faith, commerce and compassion to build stronger
            communities.
          </p>
        </div>
        {COLS.map((col) => (
          <div key={col.title} className="space-y-3 text-sm">
            <h4 className="text-base font-bold uppercase tracking-wider text-white">
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/70 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-white/60">
          <span>© 2026 ParishMart. Shop with Purpose. Give with Love.</span>
          <span>Marketplace · Giving · Parish Stores · Local Supporters</span>
        </div>
      </div>
    </footer>
  );
}
