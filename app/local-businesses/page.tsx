import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, SectionHeader } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SkdLogo } from "@/components/SkdLogo";
import { fetchBusinesses } from "@/lib/api";

export const metadata = { title: "Local Biz Supporters · ParishMart" };

const TABS = ["Featured", "Services", "Product Sellers", "Parishioner Offers", "Sponsors"];

const BIZ_META: Record<string, {
  tags: string[];
  rating: string;
  benefit: string;
  supportedParish: string;
  primaryCta: string;
  secondaryCta: string;
}> = {
  "aquatic-adventures-fl": {
    tags: ["Weston / Fort Lauderdale", "Services"],
    rating: "4.8 rating",
    benefit: "10% benefit",
    supportedParish: "Supports SKD",
    primaryCta: "View Business",
    secondaryCta: "Book",
  },
  "armando-fit": {
    tags: ["Weston, FL", "Services"],
    rating: "4.9 rating",
    benefit: "Intro offer",
    supportedParish: "Supports SKD",
    primaryCta: "View Business",
    secondaryCta: "Book",
  },
  "meraki": {
    tags: ["Doral, FL", "Product Seller"],
    rating: "4.7 rating",
    benefit: "Impact sale",
    supportedParish: "Supports Emmaus",
    primaryCta: "View Business",
    secondaryCta: "Shop",
  },
};

const PHOTOS = ["community", "business", "merch"] as const;

export default async function LocalBusinessCategoryPage() {
  const businesses = await fetchBusinesses();
  return (
    <>
      <Header />

      <Section width="wide" className="!py-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Local Biz Supporters" }]} />
      </Section>

      {/* HERO — two columns: left content card, right single photo */}
      <Section width="wide" className="!pb-2 !pt-0">
        <div className="grid min-h-[300px] overflow-hidden rounded-3xl border border-pm-border shadow-pm-card lg:grid-cols-[1fr_1fr]">
          {/* Left */}
          <div className="flex flex-col justify-center gap-5 bg-white p-8 sm:p-10">
            <span className="pm-kicker">Local Biz Supporters</span>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-pm-navy md:text-4xl">
              Discover businesses that{" "}
              <span className="pm-gradient-text">support your community.</span>
            </h1>
            <p className="max-w-md text-sm text-pm-muted">
              Find trusted services, products and offers from local businesses
              connected to parishes, causes and communities.
            </p>
            <form
              action="/search"
              method="get"
              role="search"
              className="flex items-center gap-2 rounded-full border border-pm-border bg-white px-3 py-1.5 shadow-pm-soft"
            >
              <Search className="h-4 w-4 shrink-0 text-pm-muted" aria-hidden />
              <input
                name="q"
                className="pm-input h-9 w-full px-1 text-sm"
                placeholder="Search business, service, parish, city or ZIP…"
                aria-label="Search local businesses"
              />
              <button type="submit" className="pm-btn pm-btn-primary !px-4 !py-1.5 text-xs sm:text-sm">
                Search
              </button>
            </form>
          </div>

          {/* Right — single photo with overlay */}
          <div className="relative min-h-[240px]">
            <Photo
              kind="business"
              ratio="auto"
              rounded="rounded-none"
              className="absolute inset-0 !rounded-none h-full"
              overlay="strong"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">
                Community Commerce
              </span>
              <h2 className="mt-1 text-lg font-extrabold leading-snug">
                Local businesses with a purpose.
              </h2>
              <p className="mt-1 text-xs text-white/80">
                Each business shows who it supports and how parishioners benefit.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FILTER BAR */}
      <Section width="wide" className="!py-5">
        <div className="mb-3">
          <p className="text-sm font-bold text-pm-navy">Filter by parish, city, category or offer</p>
          <p className="text-xs text-pm-muted">Help parishioners discover businesses that support the communities they care about.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex flex-1 min-w-[180px] items-center gap-2 rounded-full border border-pm-border bg-white px-3 py-2 shadow-pm-soft">
            <Search className="h-4 w-4 shrink-0 text-pm-muted" aria-hidden />
            <input className="pm-input text-sm" placeholder="Search local businesses…" aria-label="Search" />
          </div>
          {["All Categories", "All Communities", "All Cities"].map((label) => (
            <button
              key={label}
              type="button"
              className="flex items-center gap-1.5 rounded-full border border-pm-border bg-white px-4 py-2 text-sm font-medium text-pm-navy hover:border-pm-blue"
            >
              {label}
              <ChevronDown className="h-3.5 w-3.5 text-pm-muted" aria-hidden />
            </button>
          ))}
          <button
            type="button"
            className="pm-btn pm-btn-dark !px-5 !py-2 text-sm"
          >
            Filter
          </button>
        </div>
      </Section>

      {/* TABS */}
      <Section width="wide" className="!pt-0 !pb-4">
        <div className="flex flex-wrap gap-2">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              type="button"
              className={`pm-chip ${i === 0 ? "!bg-gradient-to-r !from-pm-blue !to-pm-cyan !text-white !border-transparent" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </Section>

      {/* FEATURED LOCAL BIZ */}
      <Section id="featured" width="wide" className="!pt-0">
        <SectionHeader
          title="Featured Local Biz Supporters"
          description="Businesses that combine trusted local discovery with clear community support."
          right={<Link href="#" className="font-bold text-pm-blue">View all →</Link>}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {businesses.map((b, i) => {
            const meta = BIZ_META[b.id] ?? {
              tags: [b.location, b.category],
              rating: "4.8 rating",
              benefit: "Supporter",
              supportedParish: "Supports SKD",
              primaryCta: "View Business",
              secondaryCta: "Book",
            };
            return (
              <article
                key={b.id}
                className="pm-card group flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-pm-soft"
              >
                {/* Photo with small initials badge */}
                <div className="relative">
                  <Photo
                    kind={PHOTOS[i % PHOTOS.length]}
                    ratio="4/3"
                    rounded="rounded-none"
                    className="!rounded-t-[24px] !rounded-b-none"
                  />
                  <span className="absolute bottom-3 left-3 grid h-10 w-10 place-items-center rounded-xl bg-white text-xs font-extrabold text-pm-navy shadow-pm-soft ring-2 ring-white">
                    {b.initials}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                    {b.category}
                  </p>
                  <Link href={b.href} className="block">
                    <h3 className="text-base font-extrabold text-pm-navy group-hover:text-pm-blue">
                      {b.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-pm-muted">{b.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {[...meta.tags, meta.rating].map((tag) => (
                      <span key={tag} className="rounded-full border border-pm-border px-2.5 py-0.5 text-[10px] text-pm-muted">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Supports row */}
                  <div className="mt-1 flex items-center gap-2 rounded-2xl border border-pm-border bg-pm-soft/60 px-3 py-2">
                    <SkdLogo size="sm" />
                    <div className="flex flex-1 flex-col leading-tight">
                      <span className="text-[10px] font-bold text-pm-navy">{meta.supportedParish}</span>
                      <span className="text-[10px] text-pm-muted">Parish community</span>
                    </div>
                    <span className="rounded-full bg-pm-blue px-2.5 py-0.5 text-[10px] font-bold text-white">
                      {meta.benefit}
                    </span>
                  </div>

                  {/* CTAs */}
                  <div className="mt-auto flex gap-2 pt-1">
                    <Link href={b.href} className="pm-btn pm-btn-primary !flex-1 !px-3 !py-1.5 text-xs">
                      {meta.primaryCta}
                    </Link>
                    <Link href={b.href} className="pm-btn pm-btn-secondary !px-4 !py-1.5 text-xs">
                      {meta.secondaryCta}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section width="wide">
        <div className="pm-dark-panel !p-6 sm:!p-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-extrabold">Are you a business that supports community?</h2>
            <p className="mt-1 text-sm text-white/80">
              Join ParishMart as a Local Biz Supporter and connect your products or services to parishes, causes and trusted local discovery.
            </p>
          </div>
          <Link href="/onboarding/local-business" className="pm-btn bg-white text-pm-navy shrink-0">
            Become a Local Biz
          </Link>
        </div>
      </Section>

      <Footer />
    </>
  );
}
