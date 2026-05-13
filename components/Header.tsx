import Link from "next/link";
import { Search, User } from "lucide-react";
import { Logo, SubStoreBadge } from "./Logo";
import { MobileNavDrawer } from "./MobileNavDrawer";
import { CartButton } from "./cart/CartButton";
import { LanguageSwitcher } from "./LanguageSwitcher";

function SearchForm({
  placeholder = "Search products, causes, businesses, gifts and services…",
}: {
  placeholder?: string;
}) {
  return (
    <form
      action="/search"
      method="get"
      className="flex flex-1 items-center gap-2 rounded-full border border-pm-border bg-white px-3 py-1 shadow-pm-soft"
      role="search"
    >
      <Search className="h-4 w-4 shrink-0 text-pm-muted" aria-hidden />
      <input
        name="q"
        className="pm-input h-9 w-full px-1 text-sm"
        placeholder={placeholder}
        aria-label="Search"
      />
      <button
        type="submit"
        className="pm-btn pm-btn-primary !px-3 !py-1.5 text-xs sm:!px-4 sm:text-sm"
      >
        Search
      </button>
    </form>
  );
}

function HeaderActions() {
  return (
    <div className="flex shrink-0 items-center gap-2">
      <span className="hidden md:inline-flex">
        <LanguageSwitcher compact />
      </span>
      <CartButton compact />
      <Link
        href="/sign-in"
        className="grid h-10 w-10 place-items-center rounded-full border border-pm-border bg-white text-pm-navy hover:border-pm-blue hover:text-pm-blue"
        aria-label="My Account"
        title="My Account · Sign in"
      >
        <User className="h-4 w-4" aria-hidden />
      </Link>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-pm-border/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1320px] items-center gap-3 px-4 py-2.5 sm:px-6">
        <MobileNavDrawer />
        <div className="shrink-0">
          <Logo />
        </div>
        <div className="ml-3 hidden flex-1 md:flex">
          <SearchForm />
        </div>
        <div className="ml-auto">
          <HeaderActions />
        </div>
      </div>
      <div className="border-t border-pm-border/70 px-4 pb-3 pt-2 sm:px-6 md:hidden">
        <SearchForm />
      </div>
    </header>
  );
}

function ParishTabs() {
  return (
    <nav className="mx-auto flex max-w-[1320px] items-center gap-6 overflow-x-auto px-4 pb-2 text-sm font-medium text-pm-muted sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <Link href="/stores" className="whitespace-nowrap text-pm-navy">
        Shop
      </Link>
      <Link href="/give" className="whitespace-nowrap hover:text-pm-navy">
        Give
      </Link>
      <Link
        href="/local-businesses"
        className="whitespace-nowrap hover:text-pm-navy"
      >
        Supporters
      </Link>
      <Link href="/sponsors" className="whitespace-nowrap hover:text-pm-navy">
        Sponsors
      </Link>
    </nav>
  );
}

export function ParishProfileHeader({
  parishName = "Saint Katharine Drexel",
  parishInitials = "SKD",
  location = "Weston, FL",
  searchPlaceholder = "Search store, products, services…",
}: {
  parishName?: string;
  parishInitials?: string;
  location?: string;
  searchPlaceholder?: string;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-pm-border/70 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1320px] items-center gap-3 px-4 py-2.5 sm:px-6">
        <MobileNavDrawer />
        <div className="flex shrink-0 items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan text-sm font-extrabold text-white shadow-pm-soft">
            {parishInitials}
          </span>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-extrabold tracking-tight text-pm-navy">
              {parishName}
            </span>
            <span className="text-[11px] text-pm-muted">{location}</span>
          </div>
        </div>
        <div className="ml-3 hidden flex-1 md:flex">
          <SearchForm placeholder={searchPlaceholder} />
        </div>
        <div className="ml-auto">
          <HeaderActions />
        </div>
      </div>
      <div className="px-4 pb-1 sm:px-6 md:hidden">
        <SearchForm placeholder={searchPlaceholder} />
      </div>
      <ParishTabs />
    </header>
  );
}

export function SubStoreHeader({
  parishName = "Saint Katharine Drexel",
  location = "Weston, FL",
  searchPlaceholder = "Search religious gifts, merch, services, sponsors…",
}: {
  parishName?: string;
  location?: string;
  searchPlaceholder?: string;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-pm-border/70 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1320px] items-center gap-3 px-4 py-2.5 sm:px-6">
        <MobileNavDrawer />
        <div className="shrink-0">
          <SubStoreBadge name={parishName} location={location} />
        </div>
        <div className="ml-3 hidden flex-1 md:flex">
          <SearchForm placeholder={searchPlaceholder} />
        </div>
        <div className="ml-auto">
          <HeaderActions />
        </div>
      </div>
      <div className="px-4 pb-1 sm:px-6 md:hidden">
        <SearchForm placeholder={searchPlaceholder} />
      </div>
      <ParishTabs />
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
