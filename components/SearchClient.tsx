"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Result = {
  id: string;
  type: "Product" | "Service" | "Store" | "Cause" | "Business" | "Sponsor";
  name: string;
  description: string;
  meta?: string;
  href: string;
  initials: string;
};

const ALL_RESULTS: Result[] = [
  { id: "1", type: "Store", name: "Emmaus Men SKD Weston", description: "Retreat store and community", initials: "EM", href: "/stores", meta: "SKD Parish" },
  { id: "2", type: "Store", name: "Emmaus Women SKD Español", description: "Community and formation", initials: "EW", href: "/stores", meta: "SKD Parish" },
  { id: "3", type: "Product", name: "Emmaus Retreat T-Shirt", description: "Supports Emmaus Retreats", initials: "ET", href: "/shop/product", meta: "$22.00" },
  { id: "4", type: "Product", name: "Emmaus Rosary Bracelet", description: "Supports Youth Ministry", initials: "RB", href: "/shop/product", meta: "$25.00" },
  { id: "5", type: "Service", name: "Maria's Studios", description: "Retreat and event photography", initials: "MS", href: "/local-businesses/profile", meta: "From $150" },
  { id: "6", type: "Cause", name: "Emmaus Retreat Fund", description: "Support formation and scholarships", initials: "EF", href: "/give/cause", meta: "$6,230 raised" },
  { id: "7", type: "Business", name: "Weston Catholic Realty", description: "Supporting SKD Community", initials: "CR", href: "/local-businesses/profile", meta: "Real Estate" },
  { id: "8", type: "Cause", name: "Youth Ministry", description: "Formation, retreats and outreach for SKD young leaders", initials: "YM", href: "/give/cause", meta: "$7,850 raised" },
  { id: "9", type: "Sponsor", name: "Cleveland Hospital", description: "$100 health screening credit", initials: "CH", href: "/sponsors/profile", meta: "Healthcare" },
  { id: "10", type: "Cause", name: "St Vincent de Paul", description: "Helping families in need", initials: "SV", href: "/give/cause", meta: "$5,420 raised" },
  { id: "11", type: "Business", name: "Casa Manresa", description: "Retreats and spiritual formation", initials: "CM", href: "/local-businesses/profile", meta: "Retreats" },
  { id: "12", type: "Product", name: "First Communion Gift", description: "Sacramental celebration gift", initials: "FC", href: "/shop/product", meta: "$34.00" },
];

const TYPES: ("All" | Result["type"])[] = ["All", "Product", "Service", "Store", "Cause", "Sponsor", "Business"];

export function SearchClient({ initialQuery = "Emmaus" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [type, setType] = useState<(typeof TYPES)[number]>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_RESULTS.filter(
      (r) =>
        (type === "All" || r.type === type) &&
        (q === "" ||
          r.name.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q)),
    );
  }, [query, type]);

  const grouped = useMemo(() => {
    const g: Record<string, Result[]> = {};
    filtered.forEach((r) => {
      g[r.type] = g[r.type] ?? [];
      g[r.type].push(r);
    });
    return g;
  }, [filtered]);

  return (
    <>
      <div className="mt-6 flex items-center gap-2 rounded-full border border-pm-border bg-white p-2 shadow-pm-soft">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pm-input flex-1 px-4 py-2"
          placeholder="Search the ecosystem..."
          aria-label="Search query"
        />
        <button className="pm-btn pm-btn-primary">Search</button>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {["Emmaus", "Youth Ministry", "Retreat", "Rosary", "SKD", "Maria's"].map((c) => (
          <button
            key={c}
            type="button"
            className="pm-chip"
            onClick={() => setQuery(c)}
            data-active={query === c ? "true" : undefined}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-xl font-extrabold text-pm-navy">
            Results for "{query}" · {filtered.length}
          </h2>
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {TYPES.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setType(t)}
                className="pm-chip whitespace-nowrap"
                data-active={t === type ? "true" : undefined}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="pm-card mt-5 p-8 text-center">
            <p className="text-2xl">🔍</p>
            <p className="mt-2 text-base font-bold text-pm-navy">
              No exact match for "{query}"
            </p>
            <p className="mt-1 text-sm text-pm-muted">
              Try fewer words or browse a category below.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {["Emmaus", "Youth Ministry", "Retreat", "Rosary", "SKD"].map((c) => (
                <button
                  key={c}
                  type="button"
                  className="pm-chip"
                  onClick={() => {
                    setQuery(c);
                    setType("All");
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-5 space-y-6">
            {Object.entries(grouped).map(([groupType, rows]) => (
              <section key={groupType}>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                  {groupType} · {rows.length}
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {rows.map((r) => (
                    <li key={r.id}>
                      <Link
                        href={r.href}
                        className="flex items-center gap-3 rounded-2xl border border-pm-border bg-white p-3 hover:border-pm-blue"
                      >
                        <span className="pm-avatar !h-10 !w-10 rounded-xl text-xs">
                          {r.initials}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-bold text-pm-navy">
                            {r.name}
                          </p>
                          <p className="truncate text-xs text-pm-muted">
                            {r.description}
                          </p>
                        </div>
                        {r.meta ? (
                          <span className="pm-chip" data-active="true">
                            {r.meta}
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
