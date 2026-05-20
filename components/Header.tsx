import Link from "next/link";
import {
  Search,
  User,
  ShoppingBag,
  Heart,
  Users,
  Store,
  Award,
  Info,
} from "lucide-react";
import { Logo, SubStoreBadge } from "./Logo";
import { SkdLogo } from "./SkdLogo";
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
        className="pm-btn pm-btn-dark !px-3 !py-1.5 text-xs sm:!px-4 sm:text-sm"
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

const PRIMARY_NAV = [
  { href: "/shop", label: "Shop" },
  { href: "/give", label: "Give" },
  { href: "/communities", label: "Communities" },
  { href: "/local-businesses", label: "Local Businesses" },
  { href: "/sponsors", label: "Sponsors" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-pm-border/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1320px] items-center gap-3 px-4 py-3 sm:px-6">
        <MobileNavDrawer />
        <div className="shrink-0">
          <Logo />
        </div>

        <nav className="ml-6 hidden flex-1 items-center gap-1 lg:flex">
          {PRIMARY_NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm font-semibold text-pm-muted hover:bg-pm-soft hover:text-pm-navy"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <Link
            href="/search"
            aria-label="Open search"
            className="hidden h-10 w-10 place-items-center rounded-full border border-pm-border bg-white text-pm-navy hover:border-pm-blue hover:text-pm-blue sm:grid"
          >
            <Search className="h-4 w-4" aria-hidden />
          </Link>
          <CartButton compact />
          <Link
            href="/sign-in"
            aria-label="My Account"
            title="My Account · Sign in"
            className="hidden h-10 w-10 place-items-center rounded-full border border-pm-border bg-white text-pm-navy hover:border-pm-blue hover:text-pm-blue sm:grid"
          >
            <User className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href="/onboarding"
            className="pm-btn pm-btn-primary !px-3 !py-2 text-xs sm:!px-4 sm:text-sm"
          >
            Join Us
          </Link>
        </div>
      </div>
    </header>
  );
}

type TabKey = "shop" | "give" | "ministries" | "local-biz" | "sponsors" | "about";

const PARISH_TABS: { key: TabKey; href: string; label: string; Icon: typeof ShoppingBag }[] = [
  { key: "shop", href: "/shop", label: "Shop", Icon: ShoppingBag },
  { key: "give", href: "/give", label: "Give", Icon: Heart },
  { key: "ministries", href: "/communities", label: "Ministries", Icon: Users },
  { key: "local-biz", href: "/local-businesses", label: "Local Biz", Icon: Store },
  { key: "sponsors", href: "/sponsors", label: "Sponsors", Icon: Award },
  { key: "about", href: "/about-us", label: "About", Icon: Info },
];

function ParishTabs({ active = "shop" }: { active?: TabKey }) {
  return (
    <nav className="mx-auto flex max-w-[1320px] items-center justify-center gap-2 overflow-x-auto px-4 pb-3 pt-1 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {PARISH_TABS.map(({ key, href, label, Icon }) => {
        const isActive = key === active;
        return (
          <Link
            key={key}
            href={href}
            className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm font-bold transition ${
              isActive
                ? "border-pm-navy bg-pm-navy text-white"
                : "border-pm-border bg-white text-pm-navy hover:border-pm-blue hover:text-pm-blue"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            <Icon className="h-4 w-4" aria-hidden />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

export function ParishProfileHeader({
  parishName = "Saint Katharine Drexel",
  storeLabel = "Parish Store",
  location = "Weston, Florida",
  searchPlaceholder = "Search products, ministries, causes, local businesses…",
  activeTab = "shop",
}: {
  parishName?: string;
  parishInitials?: string;
  storeLabel?: string;
  location?: string;
  searchPlaceholder?: string;
  activeTab?: TabKey;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-pm-border/70 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1320px] items-center gap-3 px-4 py-2.5 sm:px-6">
        <MobileNavDrawer />
        <div className="flex shrink-0 items-center gap-3">
          <SkdLogo size="md" />
          <div className="hidden flex-col leading-[1.1] sm:flex">
            <span className="text-base font-extrabold tracking-tight text-pm-navy">
              {parishName}
            </span>
            <span className="text-base font-extrabold tracking-tight text-pm-navy">
              {storeLabel}
            </span>
            <span className="mt-0.5 text-[11px] text-pm-muted">{location}</span>
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
      <ParishTabs active={activeTab} />
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
