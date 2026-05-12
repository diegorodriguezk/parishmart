import { SubStoreHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import {
  Section,
  SectionHeader,
  FilterChips,
  DarkPanel,
} from "@/components/Sections";
import { CauseCard } from "@/components/Cards";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = { title: "Give with Love · SKD Parish Store" };

export default function GiveHomePage() {
  return (
    <>
      <SubStoreHeader searchPlaceholder="Search causes, ministries, outreach, youth groups..." />

      <Section width="wide" className="!py-4">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Give with Love" }]}
        />
      </Section>

      <Section width="wide" className="!pb-3 !pt-2">
        <div className="relative isolate overflow-hidden rounded-3xl border border-pm-border shadow-pm-card p-6 sm:p-10 min-h-[260px]">
          <Photo
            kind="congregation"
            ratio="auto"
            rounded="rounded-none"
            className="absolute inset-0 -z-10 !rounded-none"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pm-navy/90 via-pm-navy/70 to-transparent" />
          <div className="max-w-xl text-white">
            <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold">
              Saint Katharine Drexel · Weston, FL
            </span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
              Support the ministries that bring SKD to life.
            </h1>
            <p className="mt-4 max-w-md text-sm text-white/85">
              Discover ministries, outreach programs and parish causes connected
              to the SKD community.
            </p>
          </div>
        </div>
      </Section>

      <Section width="wide" className="!py-4">
        <FilterChips
          items={[
            "All Causes",
            "Ministries",
            "Youth",
            "Outreach",
            "Community",
            "Volunteer",
          ]}
          active="All Causes"
        />
      </Section>

      <Section width="wide" className="!pt-2">
        <SectionHeader
          title="Featured Causes"
          description="Simple, clean and emotional ministry cards with a single CTA."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <CauseCard
            photo="retreat"
            label="Retreat Ministry"
            title="Emmaus Men"
            description="Faith, brotherhood, retreats and spiritual growth for men in the SKD community."
            location="Weston, FL"
          />
          <CauseCard
            photo="community"
            label="Retreat Ministry"
            title="Emmaus Women"
            description="Women growing in faith, service, friendship and parish connection."
            location="Weston, FL"
          />
          <CauseCard
            photo="volunteers"
            label="Outreach"
            title="St. Vincent de Paul"
            description="Helping families in need through food, support and community care."
            location="SKD"
          />
          <CauseCard
            photo="praying"
            label="Youth Ministry"
            title="Youth Ministry"
            description="Faith formation, leadership opportunities and outreach for SKD youth."
            location="SKD"
          />
          <CauseCard
            photo="congregation"
            label="Community"
            title="Knights of Columbus"
            description="Serving the parish through charity, fraternity and community projects."
            location="SKD"
          />
          <CauseCard
            photo="community"
            label="Family Ministry"
            title="Family Ministry"
            description="Programs and activities helping families grow together in faith."
            location="SKD"
          />
          <CauseCard
            photo="bible"
            label="Faith Formation"
            title="Faith Formation"
            description="Catechesis, sacramental preparation and parish learning experiences."
            location="SKD"
          />
          <CauseCard
            photo="church"
            label="Parish Events"
            title="Parish Events"
            description="Festivals, campaigns and community drives across the parish."
            location="SKD"
          />
        </div>
        <p className="mt-6 text-xs text-pm-muted">
          <strong className="text-pm-navy">Important:</strong> donation cards do
          not display financial goals, donation amounts or impact metrics in
          this MVP. The only action is <strong>Support Now</strong>, redirecting
          to ParishSOFT.
        </p>
      </Section>

      <Section width="wide">
        <DarkPanel
          title="Giving and shopping work together."
          description="After supporting a cause, parishioners can shop related merch or share the cause with the community."
          cta="Browse Merch"
          ctaHref="/shop"
        />
      </Section>

      <Footer />
    </>
  );
}
