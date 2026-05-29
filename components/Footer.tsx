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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.42-4.81zM10 15.2V8.8l5.5 3.2z"
      />
    </svg>
  );
}

const COLS = [
  {
    title: "Quick Links",
    links: [
      { label: "Shop", href: "/shop" },
      { label: "Give", href: "/give" },
      { label: "Causes", href: "/communities" },
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
      { label: "Refund Policy", href: "/" },
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
      {/* Main grid: brand + link cols + CTA */}
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,_0.9fr)_1.2fr]">
        {/* Brand + social */}
        <div className="space-y-5">
          <Link href="/" className="inline-flex items-center" aria-label="ParishMart home">
            <LogoMark variant="white" className="h-10 w-auto sm:h-12" />
          </Link>
          <p className="max-w-xs text-sm text-white/70">
            Unifying faith, commerce and compassion to build stronger causes.
          </p>
          <div className="flex items-center gap-3">
            {SOCIAL.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20 hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {COLS.map((col) => (
          <div key={col.title} className="space-y-3 text-sm">
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-white">
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

        {/* CTA */}
        <div className="space-y-4">
          <p className="text-sm leading-snug text-white/70">
            Launch a purpose-driven{" "}
            <strong className="text-white">storefront for your community.</strong>
          </p>
          <Link
            href="/onboarding"
            className="pm-btn pm-btn-primary inline-flex w-fit whitespace-nowrap"
          >
            Activate Community
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-y-3 px-6 py-5 text-xs text-white/50">
          <span>
            © 2026 ParishMart Inc. Shop with Purpose. Give with Love.
          </span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {LEGAL.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-white/80">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
