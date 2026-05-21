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

export const metadata = {
  title: "Communities · Parishes & Causes · ParishMart",
};

export default function CommunitiesPage() {
  return (
    <>
      <Header />

      <Section width="wide" className="!py-4">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Communities" }]}
        />
      </Section>

      <Section width="wide" className="!pt-2 !pb-3">
        <div className="pm-card relative grid gap-0 overflow-hidden lg:grid-cols-[1.5fr_1fr]">
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
            <span className="pm-kicker w-fit">Communities</span>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-pm-navy md:text-5xl">
              Communities connected through{" "}
              <span className="pm-gradient-text">purpose.</span>
            </h1>
            <p className="max-w-md text-sm text-pm-muted">
              Discover parishes, causes and communities — and the everyday
              giving and local support that connect them back to clear, real
              impact.
            </p>
          </div>

          <div className="p-4 sm:p-6 lg:py-6 lg:pl-0 lg:pr-6">
            <Link
              href="/stores"
              className="relative isolate block min-h-[220px] overflow-hidden rounded-3xl border border-pm-border shadow-pm-card transition hover:-translate-y-0.5 hover:shadow-pm-soft lg:min-h-[280px]"
            >
              <Photo
                kind="church"
                src="/brand/skd/church.jpg"
                ratio="auto"
                rounded="rounded-none"
                className="absolute inset-0 -z-10 !rounded-none border-0"
                overlay="none"
              />
              <span className="pm-label absolute left-4 top-4 sm:left-5 sm:top-5">
                Featured Parish Store
              </span>
            </Link>
          </div>
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

      <Footer />
    </>
  );
}
