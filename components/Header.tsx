import Link from "next/link";
import { Logo, SubStoreBadge } from "./Logo";
import { MobileNavDrawer } from "./MobileNavDrawer";
import { CartButton } from "./cart/CartButton";

const NAV = [
  { href: "/shop", label: "Shop" },
  { href: "/give", label: "Give" },
  { href: "/stores", label: "Parish Stores" },
  { href: "/local-businesses", label: "Local Biz" },
  { href: "/sponsors", label: "Sponsors" },
];

export function Header({
  ctaLabel = "Open Your Store",
  ctaHref = "/onboarding",
}: {
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-pm-border/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:gap-6">
        <div className="flex items-center gap-2">
          <MobileNavDrawer />
          <Logo />
        </div>
        <nav className="hidden items-center gap-7 text-sm font-medium text-pm-muted md:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-pm-navy">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/sign-in"
            className="hidden text-sm font-semibold text-pm-navy hover:text-pm-blue lg:block"
          >
            Sign in
          </Link>
          <CartButton compact />
          <Link href={ctaHref} className="pm-btn pm-btn-primary !px-4 !py-2 text-xs sm:text-sm hidden md:inline-flex">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SubStoreHeader({
  parishName = "SKD Parish Store",
  location = "Weston, Florida",
  searchPlaceholder = "Search religious gifts, merch, services, sponsors...",
}: {
  parishName?: string;
  location?: string;
  searchPlaceholder?: string;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-pm-border/70 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:gap-6">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <MobileNavDrawer />
            <Link
              href="/"
              className="hidden h-10 w-10 sm:grid place-items-center rounded-xl bg-gradient-to-br from-pm-blue to-pm-cyan font-extrabold text-white shadow-pm-soft"
              aria-label="ParishMart home"
            >
              P
            </Link>
            <SubStoreBadge name={parishName} location={location} />
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <CartButton compact />
          </div>
        </div>
        <div className="flex flex-1 items-center gap-2 rounded-full border border-pm-border bg-white px-3 py-1.5 shadow-pm-soft">
          <input
            className="pm-input h-9 px-2"
            placeholder={searchPlaceholder}
            aria-label="Search"
          />
          <Link
            href="/search"
            className="pm-btn pm-btn-primary !px-4 !py-2 text-xs sm:text-sm"
          >
            Search
          </Link>
        </div>
        <nav className="hidden items-center gap-5 text-sm font-medium text-pm-muted xl:flex">
          <Link href="/shop" className="hover:text-pm-navy">Shop</Link>
          <Link href="/give" className="hover:text-pm-navy">Give</Link>
          <Link href="/local-businesses" className="hover:text-pm-navy">Local Biz</Link>
          <Link href="/sponsors" className="hover:text-pm-navy">Sponsors</Link>
        </nav>
        <div className="hidden lg:flex">
          <CartButton compact />
        </div>
      </div>
    </header>
  );
}

export function OnboardingHeader({ subtitle }: { subtitle: string }) {
  return (
    <header className="border-b border-pm-border/70 bg-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-pm-blue to-pm-cyan font-extrabold text-white shadow-pm-soft"
            aria-label="ParishMart"
          >
            P
          </Link>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-extrabold tracking-tight text-pm-navy sm:text-lg">
              ParishMart
            </span>
            <span className="text-[11px] font-medium text-pm-muted">
              {subtitle}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/onboarding" className="pm-btn pm-btn-secondary !px-3 !py-2 text-xs sm:!px-4 sm:text-sm">
            Back
          </Link>
          <Link href="/" className="pm-btn pm-btn-primary !px-3 !py-2 text-xs sm:!px-4 sm:text-sm">
            Need Help?
          </Link>
        </div>
      </div>
    </header>
  );
}

export function ActivationHeader() {
  return (
    <header className="border-b border-pm-border/70 bg-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-pm-blue to-pm-cyan font-extrabold text-white shadow-pm-soft"
            aria-label="ParishMart"
          >
            P
          </Link>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-extrabold tracking-tight text-pm-navy sm:text-lg">
              ParishMart
            </span>
            <span className="text-[11px] font-medium text-pm-muted">
              Activation submitted
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/" className="pm-btn pm-btn-secondary !px-3 !py-2 text-xs sm:!px-4 sm:text-sm">
            Home
          </Link>
          <Link href="/dashboard" className="pm-btn pm-btn-primary !px-3 !py-2 text-xs sm:!px-4 sm:text-sm">
            Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}
