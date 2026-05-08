"use client";

import { useEffect, useState } from "react";

export type TabItem = { id: string; label: string };

export function StickyTabs({
  items,
  topOffset = 56,
}: {
  items: TabItem[];
  topOffset?: number;
}) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: `-${topOffset + 60}px 0px -55% 0px`, threshold: [0, 0.3, 0.6, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items, topOffset]);

  return (
    <div
      className="sticky z-20 -mx-4 border-b border-pm-border bg-white/95 px-4 backdrop-blur-md sm:-mx-6 sm:px-6"
      style={{ top: topOffset }}
    >
      <div className="mx-auto flex max-w-[1280px] gap-2 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            data-active={active === it.id ? "true" : undefined}
            className="pm-chip whitespace-nowrap"
          >
            {it.label}
          </a>
        ))}
      </div>
    </div>
  );
}
