import { Search, ShieldCheck, Sparkles, HandHeart } from "lucide-react";
import { Photo } from "@/components/Photo";
import { Section } from "@/components/Sections";
import {
  ShopFilterableGrid,
  type ShopProduct,
} from "@/components/shop/ShopFilterableGrid";
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
    body: "Each purchase gives back to a mission.",
  },
];

const FEATURED: ShopProduct[] = [
  {
    title: "Olive Wood Rosary",
    seller: "Bethlehem Crafts",
    price: "$24.99",
    src: "/brand/products/rosary.jpg",
    category: "Religious Gifts",
    flags: { bestSeller: true, mostPopular: true },
  },
  {
    title: "Faith Over Fear Hoodie",
    seller: "Walk by Faith Co.",
    price: "$49.99",
    src: "/brand/products/crew-harps.png",
    category: "Parish Merch",
    flags: { supportsParish: true, newArrival: true, mostPopular: true },
  },
  {
    title: "Be Still Candle",
    seller: "Grace & Light Co.",
    price: "$19.99",
    src: "/brand/products/unity-candleholder.jpg",
    category: "Home & Faith",
    flags: { bestSeller: true },
  },
  {
    title: "Daily Reflection Book",
    seller: "Christian Brands",
    price: "$22.00",
    src: "/brand/products/saint-joseph-biography.jpg",
    category: "Books & Devotionals",
    flags: { newArrival: true },
  },
  {
    title: "Guadalupe Print",
    seller: "Sacred Heart Studios",
    price: "$29.99",
    src: "/brand/products/virgin-mary-medal.png",
    category: "Religious Gifts",
    flags: { supportsParish: true },
  },
  {
    title: "Local Artisan Basket",
    seller: "Casa Bella Gifts",
    price: "$59.00",
    src: "/brand/products/tote-harps.png",
    category: "Local Biz Products",
    flags: { localBiz: true, newArrival: true },
  },
  {
    title: "Holy Family Figure",
    seller: "Sacred Gifts Co.",
    price: "$38.00",
    src: "/brand/products/holy-family-figure.jpg",
    category: "Home & Faith",
    flags: { bestSeller: true, mostPopular: true },
  },
  {
    title: "Communion Candle",
    seller: "Parish Supplies",
    price: "$12.00",
    src: "/brand/products/communion-candle-boy.png",
    category: "Parish Merch",
    flags: { supportsParish: true },
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
    body: "Empower Catholic entrepreneurs and their causes.",
  },
  {
    Icon: ShieldCheck,
    title: "Trusted & secure",
    body: "Your purchases and data are always protected.",
  },
];


export function ShopContent({
  heroKicker = "Global Shop · Community Marketplace",
  heroTitle,
  heroDescription = "Browse a carefully curated selection of religious products and faith-inspired gifts designed to support meaningful missions.",
  searchPlaceholder = "Search product, business, parish, cause, city or ZIP",
  productHref = "/shop/product",
  parish,
}: {
  heroKicker?: string;
  heroTitle?: React.ReactNode;
  heroDescription?: string;
  searchPlaceholder?: string;
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

      {/* FEATURED PRODUCTS — sidebar filters (always visible) + grid */}
      <Section width="wide">
        <ShopFilterableGrid
          products={FEATURED}
          productHref={productHref}
          parish={parish}
        />
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
