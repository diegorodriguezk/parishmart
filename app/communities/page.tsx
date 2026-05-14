import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import {
  Section,
  SectionHeader,
  FilterChips,
  DarkPanel,
} from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CommunityCard } from "@/components/home/LocalBizCard";

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
        <div className="relative isolate overflow-hidden rounded-3xl border border-pm-border shadow-pm-card p-6 sm:p-10 min-h-[260px]">
          <Photo
            kind="church"
            ratio="auto"
            rounded="rounded-none"
            className="absolute inset-0 -z-10 !rounded-none"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
          <div className="max-w-2xl">
            <span className="pm-kicker">Parishes &amp; Causes</span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-pm-navy md:text-5xl">
              Discover every <span className="pm-gradient-text">community</span>{" "}
              on ParishMart
            </h1>
            <p className="mt-4 max-w-xl text-sm text-pm-muted">
              Parish stores, ministries, missions and causes — all in one place.
              Choose where to shop with purpose, give with love and amplify
              impact.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/stores" className="pm-btn pm-btn-primary">
                Browse Parish Stores
              </Link>
              <Link
                href="/onboarding/parish"
                className="pm-btn pm-btn-secondary"
              >
                Open Your Store
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section width="wide" className="!py-4">
        <FilterChips
          items={[
            "All",
            "Parish Stores",
            "Ministries",
            "Causes",
            "Missions",
            "Retreat Communities",
          ]}
          active="All"
        />
      </Section>

      <Section width="wide" className="!pt-2">
        <SectionHeader
          title="Parish Stores"
          description="Active parish-led storefronts inside the ParishMart ecosystem."
          right={
            <Link href="/onboarding/parish" className="font-bold text-pm-blue">
              Open your parish store →
            </Link>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <CommunityCard
            href="/stores"
            photo="church"
            photoSrc="/brand/skd/church.jpg"
            initials="SKD"
            logoSrc="/brand/skd/logo.png"
            category="Parish Store"
            title="St. Katharine Drexel"
            description="Our pilot parish community connecting products, giving and local impact."
            location="Weston, FL"
            tags={["Pilot parish", "Weston, FL"]}
            subtext="Active pilot"
            cta="View community"
          />
          <CommunityCard
            href="/stores"
            photo="stained-glass"
            initials="ST"
            category="Parish Store"
            title="Sample Parish — Coming Soon"
            description="A new parish onboarding to ParishMart soon. Reserve your store today."
            location="South Florida"
            tags={["Onboarding", "Reserved"]}
            subtext="Joining 2026"
            cta="Learn more"
          />
          <CommunityCard
            href="/stores"
            photo="altar"
            initials="NP"
            category="Parish Store"
            title="Network Parish"
            description="Network parish exploring giving campaigns, merch and local partnerships."
            location="Florida"
            tags={["In review", "Florida"]}
            subtext="Pre-launch"
            cta="Learn more"
          />
          <CommunityCard
            href="/onboarding/parish"
            photo="cross"
            initials="+"
            category="Join the ecosystem"
            title="Open Your Parish Store"
            description="Activate a parish presence on ParishMart with giving campaigns, merch, sponsors and impact dashboards."
            tags={["Free to start", "Approval required"]}
            subtext="Simple onboarding"
            cta="Start activation"
          />
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader
          title="Ministries & Retreat Communities"
          description="Ministries and retreat communities supported by parishes inside ParishMart."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <CommunityCard
            href="/give/cause"
            photo="retreat"
            initials="EM"
            category="Ministry"
            title="Emmaus Community"
            description="Retreat community with event merch, ministry visibility and fundraising."
            tags={["Retreats", "Event merch"]}
            subtext="Community partner"
            cta="View ministry"
          />
          <CommunityCard
            href="/give/cause"
            photo="praying"
            initials="YM"
            category="Ministry"
            title="Youth Ministry"
            description="Formation, retreats and outreach for SKD's young community leaders."
            tags={["Formation", "Outreach"]}
            subtext="Active campaign"
            cta="Support cause"
          />
          <CommunityCard
            href="/give/cause"
            photo="volunteers"
            initials="SV"
            category="Cause"
            title="St Vincent de Paul"
            description="Helping families in need through parish-coordinated initiatives."
            tags={["Helping hands", "Local impact"]}
            subtext="Recurring drive"
            cta="Donate now"
          />
          <CommunityCard
            href="/give/cause"
            photo="stained-glass"
            initials="SCH"
            category="Mission"
            title="Schoenstatt Mission"
            description="Faith-driven mission community connecting supporters with campaigns and events."
            tags={["Mission", "Campaigns"]}
            subtext="Mission fund"
            cta="View cause"
          />
        </div>
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
