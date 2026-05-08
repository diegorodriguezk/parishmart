import Link from "next/link";
import { SubStoreHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, SectionHeader, FilterChips, DarkPanel } from "@/components/Sections";
import { SponsorOfferCard } from "@/components/Cards";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = { title: "Sponsor Offers · ParishMart" };

export default function SponsorsCategoryPage() {
  return (
    <>
      <SubStoreHeader searchPlaceholder="Search sponsor offers, discounts, services..." />

      <Section width="wide" className="!py-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Sponsor Offers" }]} />
      </Section>

      <Section width="wide" className="!pb-2 !pt-2">
        <div className="relative isolate overflow-hidden rounded-3xl border border-pm-border shadow-pm-card p-6 sm:p-8 min-h-[260px] sm:min-h-[300px]">
          <Photo kind="business" ratio="auto" rounded="rounded-none" className="absolute inset-0 -z-10 !rounded-none" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold text-pm-blue">Sponsor Offers · Parishioner Benefits</p>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-pm-navy md:text-5xl">
                Sponsor <span className="pm-gradient-text">Offers</span>
              </h1>
              <p className="mt-3 max-w-md text-sm text-pm-muted">
                Exclusive benefits from mission-aligned businesses that support
                SKD, Emmaus and parish initiatives. A familiar rewards-style
                experience for parishioners.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a className="pm-btn pm-btn-primary" href="#offers">Explore Offers</a>
                <Link className="pm-btn pm-btn-secondary" href="/onboarding/sponsor">Become a Sponsor</Link>
              </div>
            </div>
            <div className="pm-card !shadow-none p-4">
              <p className="text-xs font-bold text-pm-blue">Chase Offers style</p>
              <p className="mt-1 max-w-xs text-xs text-pm-muted">
                Logo, image, coupon, deadline and quick action — simple for
                parishioners to scan and redeem.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section width="wide" className="!pt-3">
        <div className="pm-dark-panel relative overflow-hidden">
          <div className="absolute inset-0 -z-0 opacity-30">
            <Photo kind="business" ratio="auto" rounded="rounded-none" className="!rounded-none h-full" />
          </div>
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="pm-avatar !h-10 !w-10 rounded-xl bg-white/15">CH</span>
              <h2 className="text-2xl font-extrabold md:text-3xl">Cleveland Hospital Sponsor</h2>
              <p className="max-w-md text-sm text-white/80">
                Featured premium banner placement for a major sponsor
                supporting SKD families, wellness initiatives and community
                health campaigns.
              </p>
              <div className="flex gap-3 pt-2">
                <Link href="/sponsors/profile" className="pm-btn bg-white text-pm-navy">View Sponsor</Link>
                <Link href="/share-impact" className="pm-btn bg-white/10 text-white">Redeem Benefit</Link>
              </div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-right">
              <p className="text-[10px] uppercase tracking-wider text-white/70">Featured sponsor benefit</p>
              <p className="mt-1 text-3xl font-extrabold">$100</p>
              <p className="text-xs text-white/70">Health screening credit for SKD parishioners</p>
            </div>
          </div>
        </div>
      </Section>

      <Section width="wide" className="!py-4">
        <FilterChips items={["All", "Newest", "Cash Back", "Health", "Food", "Family", "Professional", "Travel", "Supports Emmaus"]} active="All" />
      </Section>

      <Section id="offers" width="wide" className="!pt-2">
        <SectionHeader
          title="All Sponsor Offers"
          description="Compact cards with logo, coupon and quick redeem action."
          right={<a href="#" className="font-bold text-pm-blue">View All</a>}
        />
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          <SponsorOfferCard photo="retreat" initials="MS" title="Maria's Studios" offer="10% cash back" daysLeft="40d left" />
          <SponsorOfferCard photo="house" initials="BK" title="Community Bank" offer="$50 cash back" daysLeft="32d left" />
          <SponsorOfferCard photo="food" initials="BG" title="Baires Grill Weston" offer="5% cash back" daysLeft="18d left" />
          <SponsorOfferCard photo="merch" initials="PM" title="Pretzelmaker" offer="10% cash back" daysLeft="24d left" isNew />
          <SponsorOfferCard photo="business" initials="TV" title="Family Streaming" offer="30% cash back" daysLeft="60d left" isNew />
          <SponsorOfferCard photo="business" initials="TR" title="Travel Partner" offer="8% cash back" daysLeft="24d left" isNew />
          <SponsorOfferCard photo="apparel" initials="AD" title="Sports Apparel" offer="$20 cash back" daysLeft="24d left" />
          <SponsorOfferCard photo="business" initials="CF" title="Cumberland Farms" offer="10% cash back" daysLeft="10d left" />
          <SponsorOfferCard photo="business" initials="CH" title="Cleveland Hospital" offer="$100 credit" daysLeft="30d left" isNew />
          <SponsorOfferCard photo="house" initials="SS" title="Simplisafe" offer="$100 cash back" daysLeft="24d left" isNew />
          <SponsorOfferCard photo="house" initials="RE" title="Realty Supporter" offer="Free consult" daysLeft="60d left" />
          <SponsorOfferCard photo="business" initials="LF" title="Legal & Finance" offer="20% off" daysLeft="45d left" />
        </div>
      </Section>

      <Section width="wide">
        <DarkPanel
          title="Want your business featured here?"
          description="Premium sponsors can own the banner while all sponsors appear as easy-to-redeem offers for parishioners."
          cta="Become a Sponsor"
          ctaHref="/onboarding/sponsor"
          ctaSecondary="See Sponsor Plans"
          ctaSecondaryHref="/onboarding/sponsor"
        />
      </Section>

      <Footer />
    </>
  );
}
