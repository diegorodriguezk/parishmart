import Link from "next/link";
import {
  Search,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  HandHeart,
} from "lucide-react";
import { Photo, type PhotoKind } from "@/components/Photo";
import { Section } from "@/components/Sections";
import { CauseLogo } from "@/components/CauseLogo";
import { SponsorBanner } from "@/components/sponsors/SponsorBanner";
import { SponsorRecruitSection } from "@/components/sponsors/SponsorRecruitSection";
import { fetchCauses } from "@/lib/api";
import type { CauseKey } from "@/lib/catalog";

const STEPS = [
  {
    n: 1,
    title: "Choose your ministry",
    body: "Find a ministry, mission or cause connected to your parish.",
  },
  {
    n: 2,
    title: "Discover active campaigns",
    body: "See ministries, outreach programs and missions you can support.",
  },
  {
    n: 3,
    title: "Give with love",
    body: "Each gift fuels a community mission with real impact.",
  },
];

const SIDEBAR = [
  "All Causes",
  "Supports My Parish",
  "Ministries",
  "Outreach",
  "Youth & Formation",
  "Family Support",
  "Missions",
  "Memorial Funds",
];

const CAUSE_TABS = [
  "All",
  "My Parish",
  "Featured",
  "Most Supported",
  "Newly Launched",
];

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
      "A network supporting mothers, families and the gift of life.",
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
      "Fellows Association of Catholic Entrepreneurs — UNIAPAC USA.",
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

const TRUST = [
  {
    Icon: HandHeart,
    title: "Your gift makes an impact",
    body: "100% of your donation goes to the ministry or cause you choose.",
  },
  {
    Icon: Sparkles,
    title: "Support ministries directly",
    body: "Empower the missions, retreats and outreach your parish runs.",
  },
  {
    Icon: ShieldCheck,
    title: "Trusted & secure",
    body: "Donations are processed by ParishSOFT, the trusted parish platform.",
  },
];

export async function GiveContent({
  heroKicker = "Global Give · Community Ministries",
  heroTitle,
  heroDescription = "Discover ministries, outreach programs and parish causes you can support directly. Every gift connects to a real mission.",
  searchPlaceholder = "Search ministries, causes, missions, city or ZIP",
  causeHref = "https://giving.parishsoft.com/app/giving/stk2501240",
  submitCauseHref = "/onboarding/parish",
  ministriesHref = "/communities",
  parish,
}: {
  heroKicker?: string;
  heroTitle?: React.ReactNode;
  heroDescription?: string;
  searchPlaceholder?: string;
  causeHref?: string;
  submitCauseHref?: string;
  ministriesHref?: string;
  parish?: string;
}) {
  const causes = await fetchCauses();
  const isExternal = /^https?:\/\//.test(causeHref);
  return (
    <>
      {/* HERO */}
      <Section width="wide" className="!py-6">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_1fr] lg:items-stretch">
          {/* Left card */}
          <div className="pm-card flex flex-col gap-5 p-6 sm:p-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-pm-soft px-3 py-1 text-[11px] font-bold text-pm-blue">
              {heroKicker}
            </span>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-pm-navy md:text-4xl">
              {heroTitle ?? (
                <>
                  Give with <span className="pm-gradient-text">love.</span>
                  <br /> Fuel the ministries you{" "}
                  <span className="pm-gradient-text">believe in.</span>
                </>
              )}
            </h1>
            <p className="max-w-md text-sm text-pm-muted">{heroDescription}</p>
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
                placeholder={searchPlaceholder}
                aria-label="Search ministries and causes"
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
              kind="congregation"
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
                Not just a donation. A ministry you fuel.
              </h2>
              <p className="max-w-md text-sm text-white/85">
                See exactly who your gift supports before you give.
              </p>
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

      {/* SPONSOR BANNER */}
      <SponsorBanner />

      {/* FEATURED CAUSES — sidebar + grid */}
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
                    href={ministriesHref}
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
                  Featured causes
                </h2>
                <p className="mt-1 text-sm text-pm-muted">
                  Curated by impact
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
              {CAUSE_TABS.map((t, i) => (
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
              {causes.map((c) => {
                const copy = CAUSE_COPY[c.key];
                const photoKind = copy?.photo ?? "community";
                const linkProps = isExternal
                  ? { target: "_blank", rel: "noreferrer" as const }
                  : {};
                return (
                  <article
                    key={c.key}
                    className="pm-card group flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-pm-soft"
                  >
                    <div className="relative aspect-[4/3] bg-pm-soft">
                      <Photo
                        kind={photoKind}
                        ratio="auto"
                        rounded="rounded-none"
                        className="absolute inset-0 !rounded-none border-0"
                        overlay="none"
                        alt={c.name}
                      />
                      <Link
                        href={causeHref}
                        aria-label={c.name}
                        className="absolute inset-0 z-0"
                        {...linkProps}
                      />
                      <CauseLogo
                        cause={c.key}
                        size="lg"
                        className="absolute bottom-0 right-3 z-10 translate-y-1/4 ring-2 !ring-white"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 px-3 pb-3 pt-8">
                      <div>
                        <Link href={causeHref} className="block" {...linkProps}>
                          <h3 className="text-sm font-extrabold leading-tight text-pm-navy group-hover:text-pm-blue">
                            {c.name}
                          </h3>
                        </Link>
                        {copy?.location ? (
                          <p className="text-[11px] text-pm-muted">
                            {copy.location}
                          </p>
                        ) : null}
                      </div>
                      {copy?.description ? (
                        <p className="line-clamp-2 text-xs text-pm-muted">
                          {copy.description}
                        </p>
                      ) : null}
                      <div className="mt-auto pt-2">
                        <Link
                          href={causeHref}
                          className="pm-btn pm-btn-secondary !px-4 !py-1.5 text-xs"
                          {...linkProps}
                        >
                          Support Now
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
              {/* Submit-a-cause tile mirrors product card slot */}
              <article className="pm-card group flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-pm-soft">
                <div className="relative aspect-[4/3] bg-pm-soft">
                  <Photo
                    kind="church"
                    ratio="auto"
                    rounded="rounded-none"
                    className="absolute inset-0 !rounded-none border-0"
                    overlay="none"
                    alt="Add your cause"
                  />
                  <Link
                    href={submitCauseHref}
                    aria-label="Add your cause"
                    className="absolute inset-0 z-0"
                  />
                  <div className="pointer-events-none absolute left-3 top-3 z-10">
                    <span className="inline-flex items-center rounded-full bg-pm-blue px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      More causes
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <div>
                    <Link href={submitCauseHref} className="block">
                      <h3 className="text-sm font-extrabold leading-tight text-pm-navy group-hover:text-pm-blue">
                        Add your cause
                      </h3>
                    </Link>
                    <p className="text-[11px] text-pm-muted">
                      Open to all parishes
                    </p>
                  </div>
                  <p className="line-clamp-2 text-xs text-pm-muted">
                    Parish ministries and faith-driven causes can launch a
                    campaign on ParishMart.
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-pm-blue">
                      New
                    </span>
                    <Link
                      href={submitCauseHref}
                      className="pm-btn pm-btn-secondary !px-4 !py-1.5 text-xs"
                    >
                      Submit a cause
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            <p className="mt-6 text-xs text-pm-muted">
              <strong className="text-pm-navy">Important:</strong> donation
              cards do not display financial goals, amounts or impact metrics in
              this MVP. The only action is <strong>Support Now</strong>.
            </p>
          </div>
        </div>
      </Section>

      {/* SPONSOR RECRUITMENT — apply to become a ParishMart sponsor */}
      <SponsorRecruitSection />

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
    </>
  );
}
