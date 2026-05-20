import Link from "next/link";
import { LogoMark } from "./Logo";

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
      { label: "Privacy Policy", href: "/" },
      { label: "Refund Policy", href: "/" },
      { label: "Terms of Service", href: "/" },
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

export function Footer() {
  return (
    <footer className="mt-20 bg-pm-navy text-white">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_repeat(4,_1fr)]">
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center"
            aria-label="ParishMart home"
          >
            <LogoMark variant="white" className="h-10 w-auto sm:h-12" />
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
        <div className="mx-auto max-w-[1280px] px-6 py-5 text-xs text-white/60">
          © 2026 ParishMart Inc. Shop with Purpose. Give with Love.
        </div>
      </div>
    </footer>
  );
}
