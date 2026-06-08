"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { Photo, PhotoKind } from "@/components/Photo";
import { PRODUCTS, BUSINESSES, CAUSES, PARISHES } from "@/lib/catalog";

type Group = "Stores" | "Products" | "Businesses" | "Causes";

type Item = {
  id: string;
  group: Group;
  name: string;
  meta?: string;
  href: string;
  src?: string;
  photo?: PhotoKind;
  initials?: string;
};

const ITEMS: Item[] = [
  ...Object.values(PARISHES).map((p) => ({
    id: `store-${p.slug}`,
    group: "Stores" as Group,
    name: p.shortName,
    meta: p.location,
    href: `/parishes/${p.slug}`,
    initials: p.initials,
    photo: "church" as PhotoKind,
  })),
  ...PRODUCTS.map((p) => ({
    id: `product-${p.id}`,
    group: "Products" as Group,
    name: p.name,
    meta: p.price,
    href: `/shop/products/${p.id}`,
    src: p.src,
    photo: p.photo,
  })),
  ...BUSINESSES.map((b) => ({
    id: `biz-${b.id}`,
    group: "Businesses" as Group,
    name: b.name,
    meta: b.category,
    href: `/local-businesses/${b.id}`,
    initials: b.initials,
    photo: "business" as PhotoKind,
  })),
  ...Object.values(CAUSES).map((c) => ({
    id: `cause-${c.key}`,
    group: "Causes" as Group,
    name: c.name,
    meta: c.tagline ?? "Cause",
    href: `/causes/${c.key}`,
    initials: c.name
      .split(" ")
      .slice(0, 2)
      .map((w) => w[0] ?? "")
      .join("")
      .toUpperCase(),
    photo: "praying" as PhotoKind,
  })),
];

const GROUP_ORDER: Group[] = ["Stores", "Products", "Businesses", "Causes"];
const PER_GROUP = 5;

export function SearchAutocomplete({
  placeholder = "Search products, causes, businesses, gifts and services…",
  autoFocus = false,
  onClose,
  className = "",
}: {
  placeholder?: string;
  autoFocus?: boolean;
  onClose?: () => void;
  className?: string;
}) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const groups = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];
    const matched = ITEMS.filter(
      (it) =>
        it.name.toLowerCase().includes(query) ||
        (it.meta?.toLowerCase().includes(query) ?? false),
    );
    return GROUP_ORDER.map((g) => ({
      group: g,
      items: matched.filter((it) => it.group === g).slice(0, PER_GROUP),
    })).filter((grp) => grp.items.length > 0);
  }, [q]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(q.trim())}`);
    setOpen(false);
    onClose?.();
  }

  const showDropdown = open && q.trim().length > 0 && groups.length > 0;

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      <form
        onSubmit={submit}
        role="search"
        className="flex items-center gap-2 rounded-full border border-pm-border bg-white px-3 py-1 shadow-pm-soft focus-within:border-pm-blue"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setOpen(false);
            onClose?.();
          }
        }}
      >
        <Search className="h-4 w-4 shrink-0 text-pm-muted" aria-hidden />
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          name="q"
          className="pm-input h-9 w-full min-w-0 px-1 text-sm"
          placeholder={placeholder}
          aria-label="Search"
          autoComplete="off"
        />
        <button
          type="submit"
          className="pm-btn pm-btn-dark !px-3 !py-1.5 text-xs sm:!px-4 sm:text-sm"
        >
          Search
        </button>
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-pm-muted hover:bg-pm-soft hover:text-pm-navy"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        ) : null}
      </form>

      {showDropdown ? (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-[70vh] overflow-auto rounded-3xl border border-pm-border bg-white p-2 shadow-pm-card">
          {groups.map((grp) => (
            <div key={grp.group}>
              <p className="px-3 pb-1 pt-2 text-center text-[10px] font-bold uppercase tracking-[.16em] text-pm-blue">
                {grp.group}
              </p>
              {grp.items.map((it) => (
                <Link
                  key={it.id}
                  href={it.href}
                  onClick={() => {
                    setOpen(false);
                    onClose?.();
                  }}
                  className="flex items-center gap-3 rounded-2xl px-3 py-2 transition hover:bg-pm-soft"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-pm-border bg-white">
                    {it.src ? (
                      <Photo
                        kind={it.photo ?? "merch"}
                        src={it.src}
                        ratio="1/1"
                        rounded="rounded-none"
                        className="!rounded-none border-0"
                        overlay="none"
                        fit="contain"
                        alt={it.name}
                      />
                    ) : (
                      <span className="text-xs font-extrabold text-pm-blue">
                        {it.initials}
                      </span>
                    )}
                  </div>
                  <span className="line-clamp-1 flex-1 text-sm font-bold text-pm-navy">
                    {it.name}
                  </span>
                  {it.meta ? (
                    <span className="shrink-0 text-sm font-extrabold text-pm-navy">
                      {it.meta}
                    </span>
                  ) : null}
                </Link>
              ))}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
