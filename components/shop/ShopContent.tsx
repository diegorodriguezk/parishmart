import Link from "next/link";
import {
  Search,
  Heart,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  HandHeart,
} from "lucide-react";
import { Photo } from "@/components/Photo";
import { Section } from "@/components/Sections";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { SponsorBanner } from "@/components/sponsors/SponsorBanner";
import { SponsorRecruitSection } from "@/components/sponsors/SponsorRecruitSection";

const STEPS = [
  {
    n: 1,
    title: "Choose your community",
    body: "Shop by parish, cause, city or ministry.",
  },
  {
    n: 2,
    title: "Discover products",
    body: "See gifts, merch, Local Biz products and partner inventory.",
  },
  {
    n: 3,
    title: "Support with love",
    body: "Each purchase connects back to a mission.",
  },
];

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

type ProductBadge = {
  label: string;
  tone?: "default" | "merch" | "biz" | "book" | "art" | "seller";
};

const FEATURED: {
  badge: ProductBadge;
  title: string;
  seller: string;
  price: string;
  src: string;
}[] = [
  {
    badge: { label: "Religious Gift" },
    title: "Olive Wood Rosary",
    seller: "Bethlehem Crafts",
    price: "$24.99",
    src: "/brand/products/rosary.jpg",
  },
  {
    badge: { label: "Parish Merch", tone: "merch" },
    title: "Faith Over Fear Hoodie",
    seller: "Walk by Faith Co.",
    price: "$49.99",
    src: "/brand/products/crew-harps.png",
  },
  {
    badge: { label: "Local Biz", tone: "biz" },
    title: "Be Still Candle",
    seller: "Grace & Light Co.",
    price: "$19.99",
    src: "/brand/products/unity-candleholder.jpg",
  },
  {
    badge: { label: "Book", tone: "book" },
    title: "Daily Reflection Book",
    seller: "Christian Brands",
    price: "$22.00",
    src: "/brand/products/saint-joseph-biography.jpg",
  },
  {
    badge: { label: "Art & Decor", tone: "art" },
    title: "Guadalupe Print",
    seller: "Sacred Heart Studios",
    price: "$29.99",
    src: "/brand/products/virgin-mary-medal.png",
  },
  {
    badge: { label: "Local Seller", tone: "seller" },
    title: "Local Artisan Basket",
    seller: "Casa Bella Gifts",
    price: "$59.00",
    src: "/brand/products/tote-harps.png",
  },
];

const TRUST = [
  {
    Icon: HandHeart,
    title: "Your purchase makes an impact",
    body: "A portion of every purchase supports faith-based causes.",
  },
  {
    Icon: Sparkles,
    title: "Support local businesses",
    body: "Empower Catholic entrepreneurs and their communities.",
  },
  {
    Icon: ShieldCheck,
    title: "Trusted & secure",
    body: "Your purchases and data are always protected.",
  },
];

function ProductBadgePill({ label }: ProductBadge) {
  return (
    <span className="inline-flex items-center rounded-full bg-pm-navy px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
      {label}
    </span>
  );
}

export function ShopContent({
  heroKicker = "Global Shop · Community Marketplace",
  heroTitle,
  heroDescription = "Find products, gifts, parish merch and Local Biz sellers. Every product clearly shows who sells it and which parish, cause or community it supports.",
  searchPlaceholder = "Search product, business, parish, cause, city or ZIP",
  listingHref = "/shop/listing",
  productHref = "/shop/product",
  parish,
}: {
  heroKicker?: string;
  heroTitle?: React.ReactNode;
  heroDescription?: string;
  searchPlaceholder?: string;
  listingHref?: string;
  productHref?: string;
  parish?: string;
}) {
  return (
    <>
      {/* HERO */}
      <Section width="wide" className="!py-6">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_1fr] lg:items-stretch">
          {/* Left card */}
          <div className="pm-card flex flex-col gap-5 p-6 sm:p-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-pm-soft px-3 py-1 text-[11px] font-bold text-pm-blue">
              {heroKicker}
            </span>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-pm-navy md:text-4xl">
              {heroTitle ?? (
                <>
                  Shop with <span className="pm-gradient-text">purpose.</span>
                  <br /> Support your{" "}
                  <span className="pm-gradient-text">community.</span>
                </>
              )}
            </h1>
            <p className="max-w-md text-sm text-pm-muted">{heroDescription}</p>
            <form
              action="/search"
              method="get"
              role="search"
              className="flex items-center gap-2 rounded-full border border-pm-border bg-white px-3 py-1.5 shadow-pm-soft"
            >
              <Search
                className="h-4 w-4 shrink-0 text-pm-muted"
                aria-hidden
              />
              <input
                name="q"
                className="pm-input h-9 w-full px-1 text-sm"
                placeholder={searchPlaceholder}
                aria-label="Search the marketplace"
              />
              <button
                type="submit"
                className="pm-btn pm-btn-primary !px-4 !py-1.5 text-xs sm:text-sm"
              >
                Search
              </button>
            </form>
          </div>

          {/* Right card with photo */}
          <div className="relative isolate overflow-hidden rounded-3xl border border-pm-border shadow-pm-card">
            <Photo
              kind="community"
              ratio="auto"
              rounded="rounded-none"
              className="absolute inset-0 -z-10 !rounded-none"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/35 via-black/15 to-black/55" />
            <div className="flex h-full flex-col justify-end gap-3 p-6 text-white sm:p-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white/85 backdrop-blur">
                The ParishMart difference
              </span>
              <h2 className="text-2xl font-extrabold leading-tight md:text-3xl">
                Not just what you buy. Who your purchase helps.
              </h2>
              <p className="max-w-md text-sm text-white/85">
                Make community support visible before checkout.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3 STEPS */}
      <Section width="wide" className="!py-3">
        <div className="grid gap-3 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="pm-card flex items-start gap-3 p-4"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-pm-blue text-sm font-extrabold text-white">
                {s.n}
              </span>
              <div>
                <h3 className="text-sm font-extrabold text-pm-navy">
                  {s.title}
                </h3>
                <p className="text-xs text-pm-muted">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SPONSOR BANNER */}
      <SponsorBanner />

      {/* FEATURED PRODUCTS — sidebar + grid */}
      <Section width="wide">
        <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
          {/* Sidebar */}
          <aside className="pm-card h-fit p-3 lg:sticky lg:top-24">
            <p className="px-3 pb-2 pt-1 text-[11px] font-bold uppercase tracking-wider text-pm-muted">
              Explore
            </p>
            <ul className="space-y-1">
              {SIDEBAR.map((s, i) => (
                <li key={s}>
                  <Link
                    href={listingHref}
                    className={`block rounded-xl px-3 py-2 text-sm font-medium transition ${
                      i === 0
                        ? "bg-pm-soft font-bold text-pm-navy"
                        : "text-pm-ink hover:bg-pm-soft"
                    }`}
                  >
                    {s}
                  </Link>
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
                <p className="mt-1 text-sm text-pm-muted">
                  Curated by purpose
                </p>
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
              {PRODUCT_TABS.map((t, i) => (
                <button
                  key={t}
                  type="button"
                  className="pm-chip"
                  data-active={i === 0 ? "true" : undefined}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURED.map((p) => (
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
                    <div className="pointer-events-none absolute left-3 top-3 z-10">
                      <ProductBadgePill {...p.badge} />
                    </div>
                    <button
                      type="button"
                      aria-label="Save"
                      className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full border border-pm-border bg-white text-pm-muted hover:text-pm-blue"
                    >
                      <Heart className="h-4 w-4" aria-hidden />
                    </button>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-4">
                    <div>
                      <Link href={productHref} className="block">
                        <h3 className="text-sm font-extrabold leading-tight text-pm-navy group-hover:text-pm-blue">
                          {p.title}
                        </h3>
                      </Link>
                      <p className="text-[11px] text-pm-muted">
                        By {p.seller}
                      </p>
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
                        label="Add to cart"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SPONSOR RECRUITMENT — apply to become a ParishMart sponsor */}
      <SponsorRecruitSection />

      {/* TRUST STRIP */}
      <Section width="wide" className="!pb-12">
        <div className="grid gap-3 sm:grid-cols-3">
          {TRUST.map((t) => (
            <div
              key={t.title}
              className="pm-card flex items-start gap-3 p-4"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-pm-soft text-pm-blue">
                <t.Icon className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h4 className="text-sm font-extrabold text-pm-navy">
                  {t.title}
                </h4>
                <p className="text-xs text-pm-muted">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
