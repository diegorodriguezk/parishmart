import Link from "next/link";
import {
  Search,
  Heart,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  HandHeart,
} from "lucide-react";
import { Photo, type PhotoKind } from "@/components/Photo";
import { Section } from "@/components/Sections";
import { SponsorBanner } from "@/components/sponsors/SponsorBanner";
import { SponsorRecruitSection } from "@/components/sponsors/SponsorRecruitSection";

const STEPS = [
  {
    n: 1,
    title: "Choose your parish",
    body: "Explore ministries by parish, cause, city or community.",
  },
  {
    n: 2,
    title: "Find your ministry",
    body: "Retreats, formation, outreach, music, liturgy and more.",
  },
  {
    n: 3,
    title: "Serve with love",
    body: "Step into a ministry that calls you to live your faith.",
  },
];

const SIDEBAR = [
  "All Ministries",
  "Supports My Parish",
  "Formation",
  "Retreats",
  "Outreach",
  "Liturgy & Music",
  "Family & Youth",
  "Missions",
];

const MINISTRY_TABS = [
  "All",
  "Supports My Parish",
  "Active Now",
  "New",
  "Most Popular",
];

type MinistryBadge = {
  label: string;
};

const FEATURED: {
  badge: MinistryBadge;
  title: string;
  parish: string;
  description: string;
  photo: PhotoKind;
}[] = [
  {
    badge: { label: "Retreat" },
    title: "Emmaus Community",
    parish: "SKD · Weston, FL",
    description:
      "Retreat community with event merch, ministry visibility and fundraising.",
    photo: "retreat",
  },
  {
    badge: { label: "Ministry" },
    title: "Youth Ministry",
    parish: "SKD · Weston, FL",
    description:
      "Formation, retreats and outreach for SKD's young community leaders.",
    photo: "praying",
  },
  {
    badge: { label: "Outreach" },
    title: "St Vincent de Paul",
    parish: "South Florida",
    description:
      "Helping families in need through parish-coordinated initiatives.",
    photo: "volunteers",
  },
  {
    badge: { label: "Mission" },
    title: "Schoenstatt Mission",
    parish: "South Florida",
    description:
      "Faith-driven mission community connecting supporters with campaigns and events.",
    photo: "stained-glass",
  },
  {
    badge: { label: "Formation" },
    title: "Adult Faith Formation",
    parish: "SKD · Weston, FL",
    description:
      "Bible studies, OCIA and lifelong learning groups for parishioners.",
    photo: "bible",
  },
  {
    badge: { label: "Liturgy" },
    title: "Music Ministry",
    parish: "SKD · Weston, FL",
    description:
      "Choirs, instrumentalists and cantors serving every weekend Mass.",
    photo: "chalice",
  },
];

const TRUST = [
  {
    Icon: HandHeart,
    title: "Your service makes an impact",
    body: "Ministries are the heart of every parish community.",
  },
  {
    Icon: Sparkles,
    title: "Find your calling",
    body: "From retreats to outreach, there's a ministry for every gift.",
  },
  {
    Icon: ShieldCheck,
    title: "Trusted & parish-led",
    body: "Each ministry is endorsed by the parish it serves.",
  },
];

function MinistryBadgePill({ label }: MinistryBadge) {
  return (
    <span className="inline-flex items-center rounded-full bg-pm-navy px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
      {label}
    </span>
  );
}

export function MinistriesContent({
  heroKicker = "Ministries · Explore your parish",
  heroTitle,
  heroDescription = "Find the ministries, retreats and outreach communities at your parish. Step into formation, service and faith with your community.",
  searchPlaceholder = "Search ministries, retreats, missions and outreach…",
  listingHref = "/communities",
  ministryHref = "/give/cause",
}: {
  heroKicker?: string;
  heroTitle?: React.ReactNode;
  heroDescription?: string;
  searchPlaceholder?: string;
  listingHref?: string;
  ministryHref?: string;
  parish?: string;
}) {
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
                  Ministries with{" "}
                  <span className="pm-gradient-text">purpose.</span>
                  <br /> Serve your{" "}
                  <span className="pm-gradient-text">community.</span>
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
                aria-label="Search ministries"
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
              kind="community"
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
                Not just what you join. Who you walk with.
              </h2>
              <p className="max-w-md text-sm text-white/85">
                Make ministries visible across the parish community.
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

      {/* FEATURED MINISTRIES — sidebar + grid */}
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
                    href={listingHref}
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
                  Featured ministries
                </h2>
                <p className="mt-1 text-sm text-pm-muted">
                  Curated by parish
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
              {MINISTRY_TABS.map((t, i) => (
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
              {FEATURED.map((m) => (
                <article
                  key={m.title}
                  className="pm-card group flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-pm-soft"
                >
                  <div className="relative aspect-[4/3] bg-pm-soft">
                    <Photo
                      kind={m.photo}
                      ratio="auto"
                      rounded="rounded-none"
                      className="absolute inset-0 !rounded-none border-0"
                      overlay="none"
                      alt={m.title}
                    />
                    <Link
                      href={ministryHref}
                      aria-label={m.title}
                      className="absolute inset-0 z-0"
                    />
                    <div className="pointer-events-none absolute left-3 top-3 z-10">
                      <MinistryBadgePill {...m.badge} />
                    </div>
                    <button
                      type="button"
                      aria-label="Save"
                      className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full border border-pm-border bg-white text-pm-muted hover:text-pm-blue"
                    >
                      <Heart className="h-4 w-4" aria-hidden />
                    </button>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-4">
                    <div>
                      <Link href={ministryHref} className="block">
                        <h3 className="text-sm font-extrabold leading-tight text-pm-navy group-hover:text-pm-blue">
                          {m.title}
                        </h3>
                      </Link>
                      <p className="text-[11px] font-medium text-pm-blue">
                        {m.parish}
                      </p>
                      <p className="mt-1 line-clamp-2 text-[11px] text-pm-muted">
                        {m.description}
                      </p>
                    </div>
                    <div className="mt-auto pt-1">
                      <Link
                        href={ministryHref}
                        className="text-sm font-bold text-pm-blue hover:text-pm-navy"
                      >
                        View ministry →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SPONSOR RECRUITMENT */}
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
