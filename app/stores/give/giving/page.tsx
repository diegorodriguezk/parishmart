import Link from "next/link";
import { Star, Heart, Share2, ShieldCheck } from "lucide-react";
import { ParishProfileHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, SectionHeader } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = {
  title: "Youth Outreach Program · Saint Katharine Drexel",
};

const IMPACT_STATS = [
  { l: "Youth served", v: "180+" },
  { l: "Retreats hosted", v: "8" },
  { l: "Volunteer hours", v: "1,240" },
  { l: "Service projects", v: "12" },
];

const PROGRAM_PILLARS = [
  {
    title: "Weekend retreats",
    body: "Encounter, prayer and community for high-schoolers across the year.",
  },
  {
    title: "Leadership formation",
    body: "Mentorship and small-group formation rooted in the Gospel.",
  },
  {
    title: "Community service",
    body: "Outreach projects led by the youth in the parish neighborhood.",
  },
  {
    title: "Sacramental preparation",
    body: "Faith formation for confirmation and active sacramental life.",
  },
];

const STORIES = [
  {
    photo: "praying" as const,
    kicker: "Testimony · Maria, 16",
    title: "A new beginning",
    body: "&ldquo;This program gave me a community that lifts me up and helps me grow in faith.&rdquo;",
  },
  {
    photo: "retreat" as const,
    kicker: "Testimony · Diego, 17",
    title: "Stronger together",
    body: "&ldquo;Retreats helped me discover that faith is a journey we walk with others.&rdquo;",
  },
  {
    photo: "congregation" as const,
    kicker: "Testimony · Sofia, 15",
    title: "Called to serve",
    body: "&ldquo;I found purpose by serving the youngest kids in our community.&rdquo;",
  },
];

export default function StoresGivingCampaignPage() {
  return (
    <>
      <ParishProfileHeader
        parishName="Saint Katharine Drexel"
        storeLabel="Parish Store"
        location="Weston, Florida"
        searchPlaceholder="Search SKD ministries, causes and ways to give…"
        activeTab="give"
      />

      <Section width="wide" className="!py-4">
        <Breadcrumbs
          items={[
            { label: "SKD Store", href: "/stores" },
            { label: "Give", href: "/stores/give" },
            { label: "Youth Outreach Program" },
          ]}
        />
      </Section>

      {/* HERO */}
      <Section width="wide" className="!pt-2 !pb-3">
        <div className="pm-card relative grid gap-0 overflow-hidden lg:grid-cols-[1fr_1fr]">
          {/* Left — photo */}
          <div className="relative isolate min-h-[360px]">
            <Photo
              kind="volunteers"
              ratio="auto"
              rounded="rounded-none"
              className="!rounded-none absolute inset-0 -z-10 h-full lg:!rounded-l-[24px]"
              overlay="none"
            />
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-pm-blue backdrop-blur sm:left-5 sm:top-5">
              <ShieldCheck className="h-3 w-3" aria-hidden />
              Verified Cause
            </span>
          </div>

          {/* Right — content */}
          <div className="flex flex-col gap-4 p-6 sm:p-8">
            <span className="pm-label w-fit">Featured Cause</span>
            <div>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-pm-navy md:text-4xl">
                Youth{" "}
                <span className="pm-gradient-text">Outreach Program</span>
              </h1>
              <p className="mt-1 text-[12px] font-medium text-pm-blue">
                Saint Katharine Drexel Parish · Weston, FL
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 fill-pm-blue text-pm-blue"
                  />
                ))}
              </div>
              <span className="font-bold text-pm-navy">5.0</span>
              <span className="text-pm-muted">· 124 supporters</span>
            </div>
            <p className="text-sm text-pm-muted">
              Helping young people grow in faith, leadership and community
              service through formation, retreats and outreach activities led
              by the SKD youth ministry.
            </p>

            <div>
              <div className="flex items-end justify-between text-xs">
                <span className="text-sm font-extrabold text-pm-navy">
                  $18,420 raised
                </span>
                <span className="text-pm-muted">of $25,000 goal</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-pm-soft">
                <div className="h-full w-[73%] rounded-full bg-gradient-to-r from-pm-blue to-pm-cyan" />
              </div>
              <p className="mt-2 text-[11px] text-pm-muted">
                73% funded · 28 days left
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <button
                type="button"
                className="pm-btn pm-btn-primary inline-flex items-center gap-1.5"
              >
                <Heart className="h-4 w-4" aria-hidden />
                Support Now
              </button>
              <button
                type="button"
                className="pm-btn pm-btn-secondary inline-flex items-center gap-1.5"
              >
                <Share2 className="h-4 w-4" aria-hidden />
                Share
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* TABS */}
      <Section width="wide" className="!pt-3">
        <div className="flex flex-wrap gap-2">
          {["Overview", "Story", "Updates", "Supporters"].map((t, i) => (
            <span
              key={t}
              className="pm-chip"
              data-active={i === 0 ? "true" : undefined}
            >
              {t}
            </span>
          ))}
        </div>
      </Section>

      {/* PROGRAM OVERVIEW */}
      <Section width="wide">
        <div className="pm-card overflow-hidden p-0 lg:grid lg:grid-cols-[1.05fr_.95fr] lg:items-stretch">
          <div className="space-y-4 p-6 text-sm text-pm-ink sm:p-7">
            <h2 className="text-2xl font-extrabold leading-tight text-pm-navy md:text-3xl">
              Empower Young Hearts. Build a{" "}
              <span className="pm-gradient-text">Brighter Tomorrow</span>.
            </h2>
            <p>
              Every donation supports retreats, leadership formation, mentoring
              sessions and community service projects led by SKD&rsquo;s young
              leaders. Together we equip the next generation to live their
              faith with purpose.
            </p>
            <ul className="space-y-2.5">
              {PROGRAM_PILLARS.map((p) => (
                <li
                  key={p.title}
                  className="flex items-start gap-3 rounded-2xl border border-pm-border bg-white p-3"
                >
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-pm-soft text-pm-blue">
                    <Heart className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-pm-navy">
                      {p.title}
                    </p>
                    <p className="text-[11px] text-pm-muted">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Photo
            kind="community"
            ratio="auto"
            rounded="rounded-none"
            className="!rounded-none h-full min-h-[280px] lg:!rounded-r-[24px]"
          />
        </div>
      </Section>

      {/* IMPACT STATS */}
      <Section width="wide" className="!pt-3">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {IMPACT_STATS.map((s) => (
            <div
              key={s.l}
              className="rounded-2xl border border-pm-border bg-white p-4"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                {s.l}
              </p>
              <p className="mt-1 text-2xl font-extrabold leading-none text-pm-navy">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* A STORY OF HOPE */}
      <Section width="wide">
        <SectionHeader
          title="A Story of Hope"
          description="A glimpse at how the Youth Outreach Program is changing lives at SKD."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((s) => (
            <article
              key={s.title}
              className="pm-card group flex flex-col overflow-hidden p-3 transition hover:-translate-y-0.5 hover:shadow-pm-soft"
            >
              <Photo
                kind={s.photo}
                ratio="4/3"
                rounded="rounded-2xl"
              />
              <div className="flex flex-1 flex-col gap-2 p-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                  {s.kicker}
                </span>
                <h3 className="text-base font-bold text-pm-navy">{s.title}</h3>
                <p
                  className="text-xs italic text-pm-muted"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* CTA STRIP */}
      <Section width="wide" className="!pb-12">
        <div className="pm-card flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h3 className="text-xl font-extrabold leading-tight text-pm-navy">
              Be part of the journey.
            </h3>
            <p className="mt-1 text-sm text-pm-muted">
              Your gift makes a direct impact on the youth of SKD&rsquo;s
              parish community.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button type="button" className="pm-btn pm-btn-primary">
              Support Now
            </button>
            <Link href="/stores/give" className="pm-btn pm-btn-secondary">
              Explore other causes
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
