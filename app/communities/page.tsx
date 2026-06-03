import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import {
  Section,
  SectionHeader,
  DarkPanel,
} from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeaturedCommunityCard } from "@/components/home/LocalBizCard";
import { CardsCarousel } from "@/components/CardsCarousel";
import { SponsorBanner } from "@/components/sponsors/SponsorBanner";
import { SponsorRecruitSection } from "@/components/sponsors/SponsorRecruitSection";

export const metadata = {
  title: "Causes · Parishes & Causes · ParishMart",
};

export default function CommunitiesPage() {
  return (
    <>
      <Header />

      <Section width="wide" className="!py-4">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Parishes & Causes" }]}
        />
      </Section>

      <Section width="wide" className="!pb-2 !pt-0">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_1fr] lg:items-stretch">
          {/* Left card — text */}
          <div className="pm-card flex min-h-[340px] flex-col justify-center gap-5 p-6 sm:p-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-pm-soft px-3 py-1 text-[11px] font-bold text-pm-blue">
              Parishes &amp; Causes
            </span>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-pm-navy md:text-4xl">
              Parishes &amp; causes connected through{" "}
              <span className="pm-gradient-text">purpose.</span>
            </h1>
            <p className="max-w-md text-sm text-pm-muted">
              Discover parishes and causes — and the everyday giving and local support that connect them back to clear, real impact.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#parish-stores" className="pm-btn pm-btn-primary">Explore Parishes &amp; Causes</Link>
              <Link href="/onboarding/parish" className="pm-btn pm-btn-secondary">Register a Parish</Link>
            </div>
          </div>

          {/* Right card — parish photo with overlay */}
          <Link href="/parishes/skd" className="relative isolate overflow-hidden rounded-3xl border border-pm-border shadow-pm-card transition hover:-translate-y-0.5 hover:shadow-pm-soft">
            <Photo
              kind="church"
              src="/brand/skd/church.jpg"
              ratio="auto"
              rounded="rounded-none"
              className="absolute inset-0 -z-10 !rounded-none"
              overlay="none"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/35 via-black/15 to-black/55" />
            <div className="flex h-full flex-col justify-end gap-3 p-6 text-white sm:p-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white/85 backdrop-blur">
                Featured Parish Store
              </span>
              <h2 className="text-2xl font-extrabold leading-tight md:text-3xl">
                Saint Katharine Drexel
              </h2>
              <p className="text-sm text-white/85">Weston, FL</p>
            </div>
          </Link>
        </div>
      </Section>

      <SponsorBanner />

      <Section width="wide" className="!pt-2">
        <SectionHeader
          title="Parish Stores and Causes"
          description="Active parish-led storefronts inside the ParishMart ecosystem."
          right={
            <Link href="/onboarding/parish" className="font-bold text-pm-blue">
              Open your parish store →
            </Link>
          }
        />
        <CardsCarousel>
          <FeaturedCommunityCard
            href="/stores"
            photo="church"
            photoSrc="/brand/skd/church.jpg"
            category="Parish Store"
            title="St. Katharine Drexel"
            description="Our pilot parish community connecting products, giving and local impact."
            location="Weston, FL"
          />
          <FeaturedCommunityCard
            href="/stores"
            photo="stained-glass"
            category="Parish Store"
            title="Sample Parish — Coming Soon"
            description="A new parish onboarding to ParishMart soon. Reserve your store today."
            location="South Florida"
          />
          <FeaturedCommunityCard
            href="/stores"
            photo="altar"
            category="Parish Store"
            title="Network Parish"
            description="Network parish exploring giving campaigns, merch and local partnerships."
            location="Florida"
          />
          <FeaturedCommunityCard
            href="/onboarding/parish"
            photo="cross"
            category="Join the ecosystem"
            title="Open Your Parish Store"
            description="Activate a parish presence on ParishMart with giving campaigns, merch, sponsors and impact dashboards."
            location="Anywhere · Online activation"
          />
        </CardsCarousel>
      </Section>

      <Section width="wide">
        <SectionHeader
          title="Ministries"
          description="Ministries supported by parishes inside ParishMart."
          right={
            <Link href="/communities" className="font-bold text-pm-blue">
              View all →
            </Link>
          }
        />
        <CardsCarousel>
          <FeaturedCommunityCard
            href="/give/cause"
            photo="retreat"
            category="Ministry"
            title="Emmaus Community"
            description="Retreat community with event merch, ministry visibility and fundraising."
            location="SKD · Weston, FL"
          />
          <FeaturedCommunityCard
            href="/give/cause"
            photo="praying"
            category="Ministry"
            title="Youth Ministry"
            description="Formation, retreats and outreach for SKD's young community leaders."
            location="SKD · Weston, FL"
          />
          <FeaturedCommunityCard
            href="/give/cause"
            photo="volunteers"
            category="Cause"
            title="St Vincent de Paul"
            description="Helping families in need through parish-coordinated initiatives."
            location="South Florida"
          />
          <FeaturedCommunityCard
            href="/give/cause"
            photo="stained-glass"
            category="Mission"
            title="Schoenstatt Mission"
            description="Faith-driven mission community connecting supporters with campaigns and events."
            location="South Florida"
          />
        </CardsCarousel>
      </Section>

      <Section width="wide">
        <DarkPanel
          title="Don't see your community?"
          description="ParishMart is built to host any parish, ministry, mission or cause that wants to grow community impact."
          cta="Open Your Store"
          ctaHref="/onboarding/parish"
          ctaSecondary="Talk to us"
          ctaSecondaryHref="/onboarding"
        />
      </Section>

      <SponsorRecruitSection />

      <Footer />
    </>
  );
}
