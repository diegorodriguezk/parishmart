"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Photo } from "@/components/Photo";
import { AddToCartButton } from "@/components/cart/AddToCartButton";

export type ShopProduct = {
  title: string;
  seller: string;
  price: string;
  src: string;
  /** Matches a sidebar category (excluding "All Products"). */
  category: string;
  flags?: {
    supportsParish?: boolean;
    localBiz?: boolean;
    newArrival?: boolean;
    bestSeller?: boolean;
  };
};

const SIDEBAR = [
  "All Products",
  "Supports My Parish",
  "Local Biz Products",
  "Religious Gifts",
  "Parish Merch",
  "Books & Devotionals",
  "Home & Faith",
  "Sponsor Offers",
];

const PRODUCT_TABS = [
  "All",
  "Supports My Parish",
  "Local Biz",
  "New Arrivals",
  "Best Sellers",
];

function matchesSidebar(side: string, p: ShopProduct) {
  switch (side) {
    case "All Products":
      return true;
    case "Supports My Parish":
      return Boolean(p.flags?.supportsParish);
    case "Local Biz Products":
      return p.category === "Local Biz Products" || Boolean(p.flags?.localBiz);
    case "Sponsor Offers":
      return false;
    default:
      return p.category === side;
  }
}

function matchesTab(tab: string, p: ShopProduct) {
  switch (tab) {
    case "All":
      return true;
    case "Supports My Parish":
      return Boolean(p.flags?.supportsParish);
    case "Local Biz":
      return Boolean(p.flags?.localBiz);
    case "New Arrivals":
      return Boolean(p.flags?.newArrival);
    case "Best Sellers":
      return Boolean(p.flags?.bestSeller);
    default:
      return true;
  }
}

const STEP = 3;
const INITIAL = 4;

export function ShopFilterableGrid({
  products,
  productHref = "/shop/product",
  parish,
}: {
  products: ShopProduct[];
  productHref?: string;
  parish?: string;
}) {
  const [side, setSide] = useState("All Products");
  const [tab, setTab] = useState("All");
  const [visible, setVisible] = useState(INITIAL);

  const filtered = products.filter(
    (p) => matchesSidebar(side, p) && matchesTab(tab, p),
  );
  const shown = filtered.slice(0, visible);

  function chooseSidebar(value: string) {
    setSide(value);
    setVisible(INITIAL);
  }
  function chooseTab(value: string) {
    setTab(value);
    setVisible(INITIAL);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
      {/* Sidebar — always visible, filters in place */}
      <aside className="pm-card h-fit p-3 lg:sticky lg:top-24">
        <p className="px-3 pb-2 pt-1 text-[11px] font-bold uppercase tracking-wider text-pm-muted">
          Explore
        </p>
        <ul className="space-y-1">
          {SIDEBAR.map((s) => (
            <li key={s}>
              <button
                type="button"
                onClick={() => chooseSidebar(s)}
                aria-pressed={s === side}
                className={`block w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition ${
                  s === side
                    ? "bg-pm-soft font-bold text-pm-navy"
                    : "text-pm-ink hover:bg-pm-soft"
                }`}
              >
                {s}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main */}
      <div>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-pm-navy md:text-3xl">
              Featured products
            </h2>
            <p className="mt-1 text-sm text-pm-muted">Curated by purpose</p>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-pm-border bg-white px-3 py-1.5 text-xs font-medium text-pm-navy hover:border-pm-blue"
          >
            Sort: Community relevance
            <ChevronDown className="h-3.5 w-3.5" aria-hidden />
          </button>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {PRODUCT_TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => chooseTab(t)}
              className="pm-chip"
              data-active={t === tab ? "true" : undefined}
            >
              {t}
            </button>
          ))}
        </div>

        {shown.length === 0 ? (
          <div className="pm-card p-8 text-center text-sm text-pm-muted">
            No products match this filter yet.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <article
                key={p.title}
                className="pm-card group flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-pm-soft"
              >
                <div className="relative aspect-[4/3] bg-pm-soft">
                  <Photo
                    kind="merch"
                    src={p.src}
                    ratio="auto"
                    rounded="rounded-none"
                    className="absolute inset-0 !rounded-none border-0 bg-white"
                    overlay="none"
                    fit="contain"
                    alt={p.title}
                  />
                  <Link
                    href={productHref}
                    aria-label={p.title}
                    className="absolute inset-0 z-0"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <div>
                    <Link href={productHref} className="block">
                      <h3 className="text-sm font-extrabold leading-tight text-pm-navy group-hover:text-pm-blue">
                        {p.title}
                      </h3>
                    </Link>
                    <p className="text-[11px] text-pm-muted">By {p.seller}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-1">
                    <span className="text-sm font-extrabold text-pm-navy">
                      {p.price}
                    </span>
                    <AddToCartButton
                      item={{
                        id: p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
                        name: p.title,
                        meta: `By ${p.seller}`,
                        price: Number(p.price.replace(/[^0-9.]/g, "")) || 0,
                        photo: p.src,
                        parish,
                      }}
                      size="sm"
                      label="Add"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {visible < filtered.length ? (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + STEP)}
              className="pm-btn pm-btn-secondary"
            >
              Load more
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
