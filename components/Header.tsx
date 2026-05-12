import Link from "next/link";
import { Search, User } from "lucide-react";
import { Logo, SubStoreBadge } from "./Logo";
import { MobileNavDrawer } from "./MobileNavDrawer";
import { CartButton } from "./cart/CartButton";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV = [
  { href: "/shop", label: "Shop" },
  { href: "/give", label: "Give" },
  { href: "/communities", label: "Communities" },
  { href: "/local-businesses", label: "Businesses" },
  { href: "/sponsors", label: "Sponsors" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-pm-border/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1320px] items-center gap-3 px-4 py-2.5 sm:px-6">
        <MobileNavDrawer />
        <Logo />
        <nav className="hidden items-center gap-5 text-sm font-medium text-pm-muted lg:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-pm-navy">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex flex-1 items-center justify-end gap-2 lg:flex-none">
          <form
            action="/search"
            method="get"
            className="hidden flex-1 items-center gap-2 rounded-full border border-pm-border bg-white px-3 py-1 shadow-pm-soft lg:flex lg:max-w-md"
          >
            <Search className="h-4 w-4 text-pm-muted" aria-hidden />
            <input
              name="q"
              className="pm-input h-8 px-1 text-sm"
              placeholder="Search products, causes, communities…"
              aria-label="Search"
            />
            <button
              type="submit"
              className="pm-btn pm-btn-primary !px-3 !py-1 text-xs"
            >
              Search
            </button>
          </form>
          <Link
            href="/onboarding"
            className="hidden text-sm font-semibold text-pm-navy hover:text-pm-blue xl:block"
          >
            Join Us
          </Link>
          <span className="hidden md:inline-flex">
            <LanguageSwitcher compact />
          </span>
          <CartButton compact />
          <Link
            href="/sign-in"
            className="grid h-10 w-10 place-items-center rounded-full border border-pm-border bg-white text-pm-navy hover:border-pm-blue hover:text-pm-blue"
            aria-label="Sign in"
            title="Sign in / Log in"
          >
            <User className="h-4 w-4" aria-hidden />
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
      <div className="mx-auto flex max-w-[1320px] flex-col gap-2 px-4 py-2.5 sm:px-6 lg:flex-row lg:items-center lg:gap-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <MobileNavDrawer />
            <SubStoreBadge name={parishName} location={location} />
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <CartButton compact />
            <Link
              href="/sign-in"
              className="grid h-10 w-10 place-items-center rounded-full border border-pm-border bg-white text-pm-navy"
              aria-label="Sign in"
            >
              <User className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
        <form
          action="/search"
          method="get"
          className="flex flex-1 items-center gap-2 rounded-full border border-pm-border bg-white px-3 py-1.5 shadow-pm-soft"
        >
          <Search className="h-4 w-4 text-pm-muted" aria-hidden />
          <input
            name="q"
            className="pm-input h-9 px-1"
            placeholder={searchPlaceholder}
            aria-label="Search"
          />
          <button
            type="submit"
            className="pm-btn pm-btn-primary !px-4 !py-2 text-xs sm:text-sm"
          >
            Search
          </button>
        </form>
        <nav className="hidden items-center gap-5 text-sm font-medium text-pm-muted xl:flex">
          <Link href="/shop" className="hover:text-pm-navy">Shop</Link>
          <Link href="/give" className="hover:text-pm-navy">Give</Link>
          <Link href="/local-businesses" className="hover:text-pm-navy">Businesses</Link>
          <Link href="/sponsors" className="hover:text-pm-navy">Sponsors</Link>
          <Link href="/" className="ml-2 rounded-full border border-pm-border px-3 py-1 text-xs font-bold text-pm-blue hover:border-pm-blue">
            ← Back to ParishMart
          </Link>
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher compact />
          <CartButton compact />
          <Link
            href="/sign-in"
            className="grid h-10 w-10 place-items-center rounded-full border border-pm-border bg-white text-pm-navy hover:border-pm-blue hover:text-pm-blue"
            aria-label="Sign in"
          >
            <User className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </header>
  );
}

export function OnboardingHeader({ subtitle }: { subtitle: string }) {
  return (
    <header className="border-b border-pm-border/70 bg-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Logo subtitle={subtitle} />
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
        <Logo subtitle="Activation submitted" />
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
