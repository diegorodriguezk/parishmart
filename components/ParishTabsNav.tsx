"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type TabKey = "shop" | "give" | "ministries" | "local-biz" | "about";

type Tab = {
  key: TabKey;
  href: string;
  label: string;
  /** Anchor id present on parish landing pages. If set, clicking scrolls to that section. */
  anchor?: string;
};

const TABS: Tab[] = [
  { key: "about",      href: "#about",       label: "About",               anchor: "about" },
  { key: "shop",       href: "#shop",        label: "Shop",                anchor: "shop" },
  { key: "give",       href: "#give",        label: "Give",                anchor: "give" },
  { key: "ministries", href: "#ministries",  label: "Ministries",          anchor: "ministries" },
  { key: "local-biz",  href: "#local-biz",  label: "Business Supporters", anchor: "local-biz" },
];

export function ParishTabsNav({ active: initialActive = "shop" }: { active?: TabKey }) {
  const pathname = usePathname() ?? "";
  const onLanding = pathname === "/stores" || pathname.startsWith("/parishes/");
  const [active, setActive] = useState<TabKey>(initialActive);

  // Scroll-spy only on /stores landing where anchor sections actually exist.
  useEffect(() => {
    if (!onLanding) {
      setActive(initialActive);
      return;
    }
    const sections = TABS
      .map((t) => (t.anchor ? document.getElementById(t.anchor) : null))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const tab = TABS.find((t) => t.anchor === visible.target.id);
          if (tab) setActive(tab.key);
        }
      },
      { rootMargin: "-140px 0px -50% 0px", threshold: [0, 0.3, 0.6, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [onLanding, initialActive]);

  function handleClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    tab: Tab,
  ) {
    if (!onLanding || !tab.anchor) return;
    const target = document.getElementById(tab.anchor);
    if (!target) return;
    e.preventDefault();
    setActive(tab.key);
    const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 120;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${tab.anchor}`);
  }

  return (
    <nav className="relative mx-auto flex max-w-[1320px] items-center pb-3 pt-1 pr-20 sm:pr-28">
      <div className="flex flex-1 items-center justify-center gap-6 overflow-x-auto px-4 sm:gap-10 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {TABS.map((tab) => (
          <Link
            key={tab.key}
            href={tab.href}
            aria-current={active === tab.key ? "page" : undefined}
            onClick={(e) => handleClick(e, tab)}
            className={`shrink-0 whitespace-nowrap text-base font-bold transition ${
              active === tab.key ? "text-pm-blue" : "text-pm-navy hover:text-pm-blue"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
      <Link
        href="/onboarding"
        className="pm-btn pm-btn-primary absolute right-4 shrink-0 !px-3 !py-2 text-xs sm:right-6 sm:!px-4 sm:text-sm"
      >
        Join Us
      </Link>
    </nav>
  );
}
