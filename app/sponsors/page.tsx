import Link from "next/link";
import { Search } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, SectionHeader, FilterChips, DarkPanel } from "@/components/Sections";
import { SponsorOfferCard } from "@/components/Cards";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SponsorBannerCarousel } from "@/components/SponsorBannerCarousel";
import { LoadMoreGrid } from "@/components/shop/LoadMoreGrid";

export const metadata = { title: "Sponsor Offers · ParishMart" };

export default function SponsorsCategoryPage() {
  return (
    <>
      <Header />

      <Section width="wide" className="!py-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Sponsor Offers" }]} />
      </Section>

      <Section width="wide" className="!pb-2 !pt-0">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_1fr] lg:items-stretch">
          {/* Left card */}
          <div className="pm-card flex flex-col justify-center gap-5 p-6 sm:p-8 min-h-[340px]">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-pm-soft px-3 py-1 text-[11px] font-bold text-pm-blue">
              Sponsor Offers · Parishioner Benefits
            </span>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-pm-navy md:text-4xl">
              Sponsor <span className="pm-gradient-text">Offers</span>
            </h1>
            <p className="max-w-md text-sm text-pm-muted">
              Exclusive benefits from mission-aligned businesses that support
              SKD, Emmaus and parish initiatives. A familiar rewards-style
              experience for parishioners.
            </p>
            <form action="/search" method="get" role="search" className="flex items-center gap-2 rounded-full border border-pm-border bg-white px-3 py-1.5 shadow-pm-soft">
              <Search className="h-4 w-4 shrink-0 text-pm-muted" aria-hidden />
              <input name="q" className="pm-input h-9 w-full px-1 text-sm" placeholder="Search sponsors, offers, categories…" aria-label="Search sponsors" />
              <button type="submit" className="pm-btn pm-btn-primary !px-4 !py-1.5 text-xs sm:text-sm">Search</button>
            </form>
            <div className="flex flex-wrap gap-3">
              <a className="pm-btn pm-btn-primary" href="#offers">Explore Offers</a>
              <Link className="pm-btn pm-btn-secondary" href="/onboarding/sponsor">Become a Sponsor</Link>
            </div>
          </div>

          {/* Right card — photo with overlay */}
          <div className="relative isolate overflow-hidden rounded-3xl border border-pm-border shadow-pm-card">
            <Photo kind="business" ratio="auto" rounded="rounded-none" className="absolute inset-0 -z-10 !rounded-none" overlay="none" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/35 via-black/15 to-black/55" />
            <div className="flex h-full flex-col justify-end gap-3 p-6 text-white sm:p-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white/85 backdrop-blur">
                Parishioner Benefits
              </span>
              <h2 className="text-2xl font-extrabold leading-tight md:text-3xl">
                Logo, image, coupon, deadline and quick action.
              </h2>
              <p className="max-w-md text-sm text-white/85">
                Simple for parishioners to scan and redeem.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section width="wide" className="!pt-3">
        <SponsorBannerCarousel />
      </Section>

      <Section width="wide" className="!py-4">
        <FilterChips items={["All", "Newest", "Cash Back", "Health", "Food", "Family", "Professional", "Travel", "Supports Emmaus"]} active="All" />
      </Section>

      <Section id="offers" width="wide" className="!pt-2">
        <SectionHeader
          title="All Sponsor Offers"
          description="Compact cards with logo, coupon and quick redeem action."
        />
        <LoadMoreGrid initialCount={5} step={5} gridClassName="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          <SponsorOfferCard compact photo="retreat" initials="MS" title="Maria's Studios" offer="10% cash back" daysLeft="40d left" />
          <SponsorOfferCard compact photo="house" initials="BK" title="Community Bank" offer="$50 cash back" daysLeft="32d left" />
          <SponsorOfferCard compact photo="food" initials="BG" title="Baires Grill Weston" offer="5% cash back" daysLeft="18d left" />
          <SponsorOfferCard compact photo="merch" initials="PM" title="Pretzelmaker" offer="10% cash back" daysLeft="24d left" isNew />
          <SponsorOfferCard compact photo="business" initials="TV" title="Family Streaming" offer="30% cash back" daysLeft="60d left" isNew />
          <SponsorOfferCard compact photo="business" initials="TR" title="Travel Partner" offer="8% cash back" daysLeft="24d left" isNew />
          <SponsorOfferCard compact photo="apparel" initials="AD" title="Sports Apparel" offer="$20 cash back" daysLeft="24d left" />
          <SponsorOfferCard compact photo="business" initials="CF" title="Cumberland Farms" offer="10% cash back" daysLeft="10d left" />
          <SponsorOfferCard compact photo="business" initials="CH" title="Cleveland Hospital" offer="$100 credit" daysLeft="30d left" isNew />
          <SponsorOfferCard compact photo="house" initials="SS" title="Simplisafe" offer="$100 cash back" daysLeft="24d left" isNew />
          <SponsorOfferCard compact photo="house" initials="RE" title="Realty Supporter" offer="Free consult" daysLeft="60d left" />
          <SponsorOfferCard compact photo="business" initials="LF" title="Legal & Finance" offer="20% off" daysLeft="45d left" />
        </LoadMoreGrid>
      </Section>

      <Section width="wide">
        <DarkPanel
          title="Want your business featured here?"
          description="Premium sponsors can own the banner while all sponsors appear as easy-to-redeem offers for parishioners."
          cta="Become a Sponsor"
          ctaHref="/onboarding/sponsor"
        />
      </Section>

      <Footer />
    </>
  );
}
