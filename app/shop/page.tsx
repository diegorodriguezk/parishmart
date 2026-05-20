import Link from "next/link";
import {
  Search,
  Heart,
  MapPin,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  HandHeart,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section } from "@/components/Sections";

export const metadata = { title: "Shop · ParishMart" };

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

const COMMUNITIES = [
  {
    initials: "EM",
    title: "Emmaus Ministry",
    sub: "Linked to SKD · Cause",
  },
  {
    initials: "OLG",
    title: "Our Lady of Guadalupe",
    sub: "Chula Vista, CA",
  },
  {
    initials: "SV",
    title: "St. Vincent de Paul",
    sub: "National Cause",
  },
  {
    initials: "HF",
    title: "Holy Family Community",
    sub: "Orlando, FL",
  },
];

const INTENTIONS: {
  title: string;
  body: string;
  photo:
    | "rosary"
    | "merch"
    | "community"
    | "bible"
    | "praying"
    | "business";
}[] = [
  {
    title: "Religious Gifts",
    body: "Faith-centered products and gifts.",
    photo: "praying",
  },
  {
    title: "Parish Merch",
    body: "Custom apparel and community items.",
    photo: "merch",
  },
  {
    title: "Local Biz",
    body: "Products from community supporters.",
    photo: "community",
  },
  {
    title: "Books & Devotionals",
    body: "Formation, family and faith resources.",
    photo: "bible",
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
  initials: string;
  supportsLabel: string;
  supportsName: string;
  supportsSub: string;
  price: string;
  src: string;
}[] = [
  {
    badge: { label: "Religious Gift" },
    title: "Olive Wood Rosary",
    seller: "Bethlehem Crafts",
    initials: "SKD",
    supportsLabel: "Supports",
    supportsName: "Saint Katharine Drexel Parish",
    supportsSub: "Weston, FL",
    price: "$24.99",
    src: "/brand/products/rosary.jpg",
  },
  {
    badge: { label: "Parish Merch", tone: "merch" },
    title: "Faith Over Fear Hoodie",
    seller: "Walk by Faith Co.",
    initials: "EM",
    supportsLabel: "Supports",
    supportsName: "Emmaus Ministry",
    supportsSub: "Linked to SKD · Weston",
    price: "$49.99",
    src: "/brand/products/crew-harps.png",
  },
  {
    badge: { label: "Local Biz", tone: "biz" },
    title: "Be Still Candle",
    seller: "Grace & Light Co.",
    initials: "OG",
    supportsLabel: "Local Biz supports",
    supportsName: "Our Lady of Grace",
    supportsSub: "Miami, FL",
    price: "$19.99",
    src: "/brand/products/unity-candleholder.jpg",
  },
  {
    badge: { label: "Book", tone: "book" },
    title: "Daily Reflection Book",
    seller: "Christian Brands",
    initials: "SV",
    supportsLabel: "Supports",
    supportsName: "St. Vincent de Paul",
    supportsSub: "National Cause",
    price: "$22.00",
    src: "/brand/products/saint-joseph-biography.jpg",
  },
  {
    badge: { label: "Art & Decor", tone: "art" },
    title: "Guadalupe Print",
    seller: "Sacred Heart Studios",
    initials: "SM",
    supportsLabel: "Supports",
    supportsName: "St. Michael the Archangel",
    supportsSub: "Tampa, FL",
    price: "$29.99",
    src: "/brand/products/virgin-mary-medal.png",
  },
  {
    badge: { label: "Local Seller", tone: "seller" },
    title: "Local Artisan Basket",
    seller: "Casa Bella Gifts",
    initials: "HF",
    supportsLabel: "Local Biz supports",
    supportsName: "Holy Family Community",
    supportsSub: "Orlando, FL",
    price: "$59.00",
    src: "/brand/products/tote-harps.png",
  },
];

const DISCOVER_BIZ = [
  {
    title: "Shop from local sellers",
    body: "Products can support a parish, cause or community through each transaction.",
  },
  {
    title: "Find trusted service businesses",
    body: "Use ParishMart as a community directory with purpose.",
  },
  {
    title: "Filter by parish or city",
    body: "Make Local Biz discovery relevant and emotionally connected.",
  },
  {
    title: "Show impact clearly",
    body: "Every card should answer: who sells it and who benefits.",
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

export default function ShopPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <Section width="wide" className="!py-6">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_1fr] lg:items-stretch">
          {/* Left card */}
          <div className="pm-card flex flex-col gap-5 p-6 sm:p-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-pm-soft px-3 py-1 text-[11px] font-bold text-pm-blue">
              Global Shop · Community Marketplace
            </span>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-pm-navy md:text-4xl">
              Shop with <span className="pm-gradient-text">purpose.</span>
              <br /> Support your{" "}
              <span className="pm-gradient-text">community.</span>
            </h1>
            <p className="max-w-md text-sm text-pm-muted">
              Find products, gifts, parish merch and Local Biz sellers. Every
              product clearly shows who sells it and which parish, cause or
              community it supports.
            </p>
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
                placeholder="Search product, business, parish, cause, city or ZIP"
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
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <p className="text-sm font-bold">
                    Buy from community supporters
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <p className="text-sm font-bold">Faith & Gifts</p>
                  <p className="text-xs text-white/85">
                    Curated products with purpose.
                  </p>
                </div>
              </div>
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

      {/* SHOP BY COMMUNITY */}
      <Section width="wide">
        <div className="mb-5 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-pm-navy md:text-3xl">
              Shop by community
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-pm-muted">
              This area gives ParishMart emotional context before showing
              products. It makes the platform feel community-first.
            </p>
          </div>
          <Link
            href="/communities"
            className="shrink-0 text-sm font-bold text-pm-blue hover:underline"
          >
            View all communities →
          </Link>
        </div>
        <div className="grid gap-3 lg:grid-cols-[1fr_1fr]">
          <Link
            href="/stores"
            className="group relative isolate flex min-h-[260px] flex-col justify-end overflow-hidden rounded-3xl border border-pm-border p-5 text-white shadow-pm-card sm:p-6"
          >
            <Photo
              kind="church"
              src="/brand/skd/church.jpg"
              ratio="auto"
              rounded="rounded-none"
              className="absolute inset-0 -z-10 !rounded-none"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
            <h3 className="text-2xl font-extrabold leading-tight">
              Saint Katharine Drexel
            </h3>
            <p className="mt-1 max-w-sm text-xs text-white/85">
              Weston, FL · Parish Store · Religious gifts, merch, donations and
              Local Biz supporters.
            </p>
          </Link>
          <div className="grid gap-3 sm:grid-cols-2">
            {COMMUNITIES.map((c) => (
              <Link
                key={c.initials}
                href="/communities"
                className="pm-card group flex items-center gap-3 p-4 transition hover:-translate-y-0.5 hover:shadow-pm-soft"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-pm-blue to-pm-cyan text-xs font-extrabold text-white">
                  {c.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-extrabold text-pm-navy group-hover:text-pm-blue">
                    {c.title}
                  </p>
                  <p className="truncate text-xs text-pm-muted">{c.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* EXPLORE BY INTENTION */}
      <Section width="wide">
        <div className="mb-5">
          <h2 className="text-2xl font-extrabold tracking-tight text-pm-navy md:text-3xl">
            Explore by intention
          </h2>
          <p className="mt-1 text-sm text-pm-muted">
            A simple way to guide users by purpose before they enter the full
            catalog.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {INTENTIONS.map((i) => (
            <Link
              key={i.title}
              href="/shop/listing"
              className="group relative isolate flex min-h-[140px] flex-col justify-end overflow-hidden rounded-2xl border border-pm-border p-4 text-white shadow-pm-card"
            >
              <Photo
                kind={i.photo}
                ratio="auto"
                rounded="rounded-none"
                className="absolute inset-0 -z-10 !rounded-none"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />
              <h3 className="text-lg font-extrabold leading-tight">
                {i.title}
              </h3>
              <p className="text-[11px] text-white/85">{i.body}</p>
            </Link>
          ))}
        </div>
      </Section>

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
                    href="/shop/listing"
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
                    <div className="absolute left-3 top-3 z-10">
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
                      <h3 className="text-sm font-extrabold leading-tight text-pm-navy group-hover:text-pm-blue">
                        {p.title}
                      </h3>
                      <p className="text-[11px] text-pm-muted">
                        By {p.seller}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-pm-border bg-pm-soft/50 p-2">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-pm-blue to-pm-cyan text-[10px] font-extrabold text-white">
                        {p.initials}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-wider text-pm-blue">
                          {p.supportsLabel}
                        </p>
                        <p className="truncate text-xs font-bold text-pm-navy">
                          {p.supportsName}
                        </p>
                        <p className="inline-flex items-center gap-1 text-[10px] text-pm-muted">
                          <MapPin className="h-2.5 w-2.5" aria-hidden />
                          {p.supportsSub}
                        </p>
                      </div>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-1">
                      <span className="text-sm font-extrabold text-pm-navy">
                        {p.price}
                      </span>
                      <Link
                        href="/shop/product"
                        className="pm-btn pm-btn-primary !px-4 !py-1.5 text-xs"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* DISCOVER LOCAL BIZ SUPPORTERS */}
      <Section width="wide">
        <div className="grid gap-3 lg:grid-cols-[1fr_1fr]">
          <Link
            href="/local-businesses"
            className="group relative isolate flex min-h-[260px] flex-col justify-end overflow-hidden rounded-3xl border border-pm-border p-5 text-white shadow-pm-card sm:p-6"
          >
            <Photo
              kind="business"
              ratio="auto"
              rounded="rounded-none"
              className="absolute inset-0 -z-10 !rounded-none"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
            <h3 className="text-2xl font-extrabold leading-tight">
              Discover Local Biz Supporters
            </h3>
            <p className="mt-1 max-w-sm text-xs text-white/85">
              ParishMart should help parishioners find, trust and buy from
              businesses connected to their community.
            </p>
          </Link>
          <div className="grid gap-3 sm:grid-cols-2">
            {DISCOVER_BIZ.map((d) => (
              <div key={d.title} className="pm-card p-4">
                <h4 className="text-sm font-extrabold text-pm-navy">
                  {d.title}
                </h4>
                <p className="mt-1 text-xs text-pm-muted">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

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

      <Footer />
    </>
  );
}
