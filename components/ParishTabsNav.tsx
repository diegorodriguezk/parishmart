"use client";

import { useEffect, useState } from "react";

type TabKey = "shop" | "give" | "ministries" | "local-biz" | "sponsors" | "about";

const TABS: { key: TabKey; id: string; label: string }[] = [
  { key: "about",      id: "about",      label: "About" },
  { key: "shop",       id: "shop",       label: "Shop" },
  { key: "give",       id: "give",       label: "Give" },
  { key: "ministries", id: "ministries", label: "Ministries" },
  { key: "local-biz",  id: "local-biz",  label: "Local Biz" },
  { key: "sponsors",   id: "sponsors",   label: "Sponsors" },
];

export function ParishTabsNav({ active: initialActive = "shop" }: { active?: TabKey }) {
  const [active, setActive] = useState<TabKey>(initialActive);

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const tab = TABS.find((t) => t.id === visible.target.id);
          if (tab) setActive(tab.key);
        }
      },
      { rootMargin: "-120px 0px -55% 0px", threshold: [0, 0.3, 0.6, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, id: string, key: TabKey) {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    setActive(key);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav className="mx-auto flex max-w-[1320px] items-center justify-center gap-6 overflow-x-auto px-4 pb-3 pt-1 sm:gap-10 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {TABS.map(({ key, id, label }) => (
        <a
          key={key}
          href={`#${id}`}
          aria-current={active === key ? "page" : undefined}
          onClick={(e) => handleClick(e, id, key)}
          className={`shrink-0 whitespace-nowrap text-base font-bold transition ${
            active === key ? "text-pm-blue" : "text-pm-navy hover:text-pm-blue"
          }`}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
