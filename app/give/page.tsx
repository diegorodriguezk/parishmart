import { Header } from "@/components/Header";
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
import { fetchCauses } from "@/lib/api";
import type { PhotoKind } from "@/components/Photo";
import type { CauseKey } from "@/lib/catalog";

export const metadata = { title: "Give with Love · ParishMart" };

type CauseCopy = {
  photo: PhotoKind;
  label: string;
  description: string;
  location: string;
};

const CAUSE_COPY: Record<CauseKey, CauseCopy> = {
  "saint-vincent-de-paul": {
    photo: "volunteers",
    label: "Outreach",
    description:
      "Helping families in need through food, support and community care.",
    location: "SKD · Weston, FL",
  },
  "marys-hope": {
    photo: "community",
    label: "Family Support",
    description:
      "A community network supporting mothers, families and the gift of life.",
    location: "South Florida",
  },
  "christ-care-for-all": {
    photo: "praying",
    label: "Compassion",
    description:
      "Bringing Christ's compassion to those in need through care and accompaniment.",
    location: "Catholic community",
  },
  "schoenstatt-miami": {
    photo: "stained-glass",
    label: "Spiritual Formation",
    description:
      "Light and path toward the Merciful Father. 15 years of mission in Miami.",
    location: "Miami, FL",
  },
  "miami-presente": {
    photo: "church",
    label: "Local Mission",
    description:
      "Anchored in the Covenant — a Schoenstatt initiative serving Miami.",
    location: "Miami, FL",
  },
  "mater-18": {
    photo: "community",
    label: "Youth",
    description:
      "Marian youth movement forming young hearts in faith and mission.",
    location: "Miami, FL",
  },
  forta: {
    photo: "retreat",
    label: "Family Ministry",
    description:
      "Fortalecimiento Matrimonial — Schoenstatt's ministry for couples and marriages.",
    location: "Schoenstatt",
  },
  face: {
    photo: "business",
    label: "Entrepreneurs",
    description:
      "Fellows Association of Catholic Entrepreneurs — UNIAPAC USA. Faith-driven business community.",
    location: "USA",
  },
  "missionaries-of-hope": {
    photo: "bible",
    label: "Mission",
    description:
      "Bringing hope through mission, evangelization and accompaniment.",
    location: "Catholic mission",
  },
  cam: {
    photo: "congregation",
    label: "Apostolate",
    description:
      "A Catholic apostolic movement serving parishes and the wider Church.",
    location: "Miami, FL",
  },
  goyito: {
    photo: "house",
    label: "Memorial",
    description:
      "A cause carrying forward Goyito's memory through service and community.",
    location: "Community-led",
  },
};

const PARISHSOFT_GIVE_URL = "https://giving.parishsoft.com/app/giving/stk2501240";

export default async function GiveHomePage() {
  const causes = await fetchCauses();
  return (
    <>
      <Header />

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
          {causes.map((c) => {
            const copy = CAUSE_COPY[c.key];
            return (
              <CauseCard
                key={c.key}
                photo={copy?.photo ?? "community"}
                cause={c.key}
                label={copy?.label ?? "Cause"}
                title={c.name}
                description={copy?.description}
                location={copy?.location}
                href={PARISHSOFT_GIVE_URL}
              />
            );
          })}
          <CauseCard
            photo="church"
            label="More causes"
            title="Add your cause"
            description="Parish ministries and faith-driven causes can launch a campaign on ParishMart."
            location="Open to all parishes"
            cta="Submit a cause"
            href="/onboarding/parish"
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
