import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, SectionHeader } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SkdLogo } from "@/components/SkdLogo";
import { fetchBusinesses, fetchSponsors } from "@/lib/api";
import { SponsorBannerCarousel } from "@/components/SponsorBannerCarousel";
import { SponsorOfferCard } from "@/components/Cards";

export const metadata = { title: "Local Biz Supporters · ParishMart" };

const TABS = ["Featured", "Services", "Product Sellers", "Parishioner Offers"];

const BIZ_META: Record<string, {
  tags: string[];
  rating: string;
  benefit: string;
  supportedParish: string;
  primaryCta: string;
  secondaryCta: string;
}> = {
  "aquatic-adventures-fl": {
    tags: ["Services"],
    rating: "4.8 rating",
    benefit: "10% benefit",
    supportedParish: "Supports SKD",
    primaryCta: "View Business",
    secondaryCta: "Book",
  },
  "armando-fit": {
    tags: ["Services"],
    rating: "4.9 rating",
    benefit: "Intro offer",
    supportedParish: "Supports SKD",
    primaryCta: "View Business",
    secondaryCta: "Book",
  },
  "meraki": {
    tags: ["Product Seller"],
    rating: "4.7 rating",
    benefit: "Impact sale",
    supportedParish: "Supports Emmaus",
    primaryCta: "View Business",
    secondaryCta: "Shop",
  },
};

const PHOTOS = ["community", "business", "merch"] as const;

export default async function LocalBusinessCategoryPage() {
  const [businesses, sponsors] = await Promise.all([fetchBusinesses(), fetchSponsors()]);
  return (
    <>
      <Header />

      <Section width="wide" className="!py-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Local Biz Supporters" }]} />
      </Section>

      {/* HERO — two separate cards */}
      <Section width="wide" className="!pb-2 !pt-0">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_1fr] lg:items-stretch">
          {/* Left card */}
          <div className="pm-card flex flex-col justify-center gap-5 p-6 sm:p-8 min-h-[340px]">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-pm-soft px-3 py-1 text-[11px] font-bold text-pm-blue">
              Local Biz Supporters
            </span>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-pm-navy md:text-4xl">
              Discover businesses that{" "}
              <span className="pm-gradient-text">support your community.</span>
            </h1>
            <p className="max-w-md text-sm text-pm-muted">
              Find trusted services, products and offers from local businesses
              connected to parishes and causes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#featured" className="pm-btn pm-btn-primary">
                Explore Businesses
              </Link>
              <Link href="/onboarding/local-business" className="pm-btn pm-btn-secondary">
                Become a Biz Supporter
              </Link>
            </div>
          </div>

          {/* Right card — photo with overlay */}
          <div className="relative isolate overflow-hidden rounded-3xl border border-pm-border shadow-pm-card">
            <Photo
              kind="business"
              ratio="auto"
              rounded="rounded-none"
              className="absolute inset-0 -z-10 !rounded-none"
              overlay="none"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/35 via-black/15 to-black/55" />
            <div className="flex h-full flex-col justify-end gap-3 p-6 text-white sm:p-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white/85 backdrop-blur">
                Community Commerce
              </span>
              <h2 className="text-2xl font-extrabold leading-tight md:text-3xl">
                Local businesses with a purpose.
              </h2>
              <p className="max-w-md text-sm text-white/85">
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
          <p className="text-xs text-pm-muted">Help parishioners discover businesses that support the causes they care about.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex flex-1 min-w-[180px] items-center gap-2 rounded-full border border-pm-border bg-white px-3 py-2 shadow-pm-soft">
            <Search className="h-4 w-4 shrink-0 text-pm-muted" aria-hidden />
            <input className="pm-input text-sm" placeholder="Search local businesses…" aria-label="Search" />
          </div>
          {["All Categories", "All Causes", "All Cities"].map((label) => (
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
              tags: [b.category],
              rating: "4.8 rating",
              benefit: "Supporter",
              supportedParish: "Supports SKD",
              primaryCta: "View Business",
              secondaryCta: "Book",
            };
            return (
              <article
                key={b.id}
                className="pm-card group flex flex-col overflow-hidden p-3 transition hover:-translate-y-0.5 hover:shadow-pm-soft"
              >
                {/* Photo with offer pill top-left + business logo bottom-right */}
                <Link href={`/local-businesses/${b.id}`} className="relative block">
                  <Photo
                    kind={PHOTOS[i % PHOTOS.length]}
                    ratio="4/3"
                    rounded="rounded-2xl"
                  />
                  {/* Offer pill — top-left of image */}
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-pm-navy px-3 py-1 text-xs font-bold text-white">
                    {meta.benefit}
                  </span>
                  {b.logoSrc ? (
                    <span
                      className="absolute bottom-0 right-3 z-10 translate-y-1/4 grid shrink-0 place-items-center overflow-hidden rounded-2xl bg-white p-1.5 ring-2 !ring-white shadow-pm-soft h-20 w-20"
                      title={b.name}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={b.logoSrc} alt={b.name} className="h-full w-full object-contain" loading="lazy" />
                    </span>
                  ) : (
                    <span className="pm-avatar absolute bottom-0 right-3 z-10 translate-y-1/4 !h-16 !w-16 rounded-2xl ring-2 !ring-white shadow-pm-soft">
                      {b.initials}
                    </span>
                  )}
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-2 px-3 pb-3 pt-8">
                  <span className="pm-label w-fit">{b.category}</span>
                  <Link href={`/local-businesses/${b.id}`} className="block">
                    <h3 className="text-base font-bold text-pm-navy group-hover:text-pm-blue">
                      {b.name}
                    </h3>
                  </Link>
                  <p className="text-[11px] font-medium text-pm-blue">{b.location}</p>
                  <p className="text-xs text-pm-muted">{b.description}</p>

                  {/* Supports row — logo outside pill, pill full width */}
                  <div className="flex items-center gap-2">
                    <SkdLogo size="md" />
                    <div className="flex-1 rounded-2xl border border-pm-border bg-pm-soft/60 px-3 py-2 space-y-0.5">
                      <p className="text-[11px] font-bold text-pm-navy">{meta.supportedParish}</p>
                      <p className="text-[10px] text-pm-muted">Parish community</p>
                    </div>
                  </div>

                  {/* Arrow link */}
                  <div className="mt-auto pt-1">
                    <Link href={`/local-businesses/${b.id}`} className="text-sm font-bold text-pm-blue hover:text-pm-navy">
                      View more →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      {/* PROFILE TYPE EXAMPLES */}
      <Section width="wide">
        <SectionHeader
          title="Two types of local businesses"
          description="Service providers and product sellers — each with their own tailored profile."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Services example */}
          <Link href="/local-businesses/maria-studios" className="pm-card group flex flex-col overflow-hidden p-3 transition hover:-translate-y-0.5 hover:shadow-pm-soft">
            <Photo kind="business" ratio="4/3" rounded="rounded-2xl" overlay="subtle" />
            <div className="flex flex-1 flex-col gap-2 p-3">
              <span className="pm-label w-fit">Service Business</span>
              <h3 className="text-base font-bold text-pm-navy group-hover:text-pm-blue">Maria&rsquo;s Studios</h3>
              <p className="text-[11px] font-medium text-pm-blue">Weston, FL · Photography</p>
              <p className="text-xs text-pm-muted">Photography services for parish events, retreats and SKD family celebrations.</p>
              <div className="mt-auto pt-2">
                <span className="text-sm font-bold text-pm-blue">View service profile →</span>
              </div>
            </div>
          </Link>

          {/* Products example */}
          <Link href="/local-businesses/harps-club" className="pm-card group flex flex-col overflow-hidden p-3 transition hover:-translate-y-0.5 hover:shadow-pm-soft">
            <Photo kind="merch" ratio="4/3" rounded="rounded-2xl" overlay="subtle" />
            <div className="flex flex-1 flex-col gap-2 p-3">
              <span className="pm-label w-fit">Product Seller</span>
              <h3 className="text-base font-bold text-pm-navy group-hover:text-pm-blue">Harps Club</h3>
              <p className="text-[11px] font-medium text-pm-blue">South Florida · Custom Merch</p>
              <p className="text-xs text-pm-muted">Custom apparel, parish merch and ministry products helping causes raise funds.</p>
              <div className="mt-auto pt-2">
                <span className="text-sm font-bold text-pm-blue">View product profile →</span>
              </div>
            </div>
          </Link>
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
          <Link href="/onboarding/local-business" className="pm-btn bg-white !text-pm-navy shrink-0">
            Become a Local Biz
          </Link>
        </div>
      </Section>

      <Section width="wide" className="!pt-3">
        <SectionHeader
          title="Sponsors & Parishioner Benefits"
          description="Mission-aligned businesses that support parish communities while offering exclusive benefits to parishioners."
          right={<Link href="/sponsors" className="font-bold text-pm-blue">View all sponsors →</Link>}
        />
        <SponsorBannerCarousel />
      </Section>

      <Section id="offers" width="wide" className="!pt-2">
        <SectionHeader
          title="All Sponsor Offers"
          description="Compact cards with logo, coupon and quick redeem action."
        />
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {sponsors.map((s) => (
            <SponsorOfferCard
              key={s.id}
              href={`/sponsors/${s.id}`}
              compact
              photo="business"
              initials={s.name.slice(0, 2).toUpperCase()}
              title={s.name}
              offer={s.offer ?? ""}
              daysLeft={s.offerDaysLeft ?? ""}
            />
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}
