import Link from "next/link";
import { LogoMark } from "./Logo";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

const COLS = [
  {
    title: "Quick Links",
    links: [
      { label: "Shop", href: "/shop" },
      { label: "Give", href: "/give" },
      { label: "Communities", href: "/communities" },
      { label: "Local Businesses", href: "/local-businesses" },
      { label: "Sponsors", href: "/sponsors" },
    ],
  },
  {
    title: "Our Company",
    links: [
      { label: "Join Us", href: "/onboarding" },
      { label: "About Us", href: "/about-us" },
      { label: "How it Works", href: "/how-it-works" },
      { label: "Partners", href: "/partners" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "FAQs", href: "/" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "My Account",
    links: [
      { label: "View your orders", href: "/dashboard" },
      { label: "Register an account", href: "/onboarding" },
      { label: "Login to your account", href: "/sign-in" },
      { label: "Forgot Password", href: "/sign-in" },
      { label: "Shopping Cart", href: "/shop/cart" },
    ],
  },
];

const SOCIAL = [
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/parishmart" },
  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com/parishmart" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com/company/parishmart" },
  { icon: YouTubeIcon, label: "YouTube", href: "https://youtube.com/@parishmart" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/" },
  { label: "Terms of Service", href: "/" },
  { label: "Refund Policy", href: "/" },
];

export function Footer() {
  return (
    <footer className="mt-20 bg-pm-navy text-white">
      {/* Main link grid */}
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_repeat(4,_1fr)]">
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center" aria-label="ParishMart home">
            <LogoMark variant="white" className="h-10 w-auto sm:h-12" />
          </Link>
          <p className="max-w-xs text-sm text-white/70">
            Unifying faith, commerce and compassion to build stronger communities.
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
                  <Link href={l.href} className="text-white/70 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-y-4 px-6 py-5">

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {SOCIAL.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-white/60 transition hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Copyright + legal */}
          <div className="flex flex-wrap items-center gap-x-1 gap-y-1 text-xs text-white/50">
            <span>© 2026 ParishMart Inc.</span>
            {LEGAL.map((l) => (
              <span key={l.label} className="flex items-center gap-1">
                <span aria-hidden>·</span>
                <Link href={l.href} className="hover:text-white/80">
                  {l.label}
                </Link>
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <p className="hidden text-right text-sm leading-snug text-white/70 lg:block">
              Launch a purpose-driven<br />
              <strong className="text-white">storefront for your community.</strong>
            </p>
            <Link href="/onboarding" className="pm-btn pm-btn-primary whitespace-nowrap">
              Activate Community
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
