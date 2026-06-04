import Link from "next/link";
import { Heart, Share2 } from "lucide-react";
import { ParishProfileHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = {
  title: "Youth Outreach Program · Saint Katharine Drexel",
};

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
            <p className="text-sm text-pm-muted">
              Helping young people grow in faith, leadership and community
              service through formation, retreats and outreach activities led
              by the SKD youth ministry.
            </p>

            <h2 className="text-2xl font-extrabold leading-tight text-pm-navy md:text-3xl">
              Empower Young Hearts. Build a{" "}
              <span className="pm-gradient-text">Brighter Tomorrow</span>.
            </h2>
            <p className="text-sm text-pm-ink">
              Every donation supports retreats, leadership formation, mentoring
              sessions and community service projects led by SKD&rsquo;s young
              leaders. Together we equip the next generation to live their faith
              with purpose.
            </p>
            <ul className="space-y-2 pl-5 text-sm text-pm-ink [list-style:disc] marker:text-pm-blue">
              {PROGRAM_PILLARS.map((p) => (
                <li key={p.title}>
                  <span className="font-extrabold text-pm-navy">{p.title}.</span>{" "}
                  <span className="text-pm-muted">{p.body}</span>
                </li>
              ))}
            </ul>

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
