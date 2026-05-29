import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Photo } from "@/components/Photo";
import { Section } from "@/components/Sections";

const BENEFITS = [
  {
    title: "Reach an engaged community",
    body: "Connect with parishioners who choose to support businesses that give back.",
  },
  {
    title: "Visible parish-level sponsorship",
    body: "Your brand shown on parish stores, ministries and Local Biz pages.",
  },
  {
    title: "Measurable community impact",
    body: "Track contributions, exposure and engagement with each parish you sponsor.",
  },
  {
    title: "Trusted, mission-aligned partners",
    body: "Show parishioners you stand behind faith, family and community values.",
  },
];

export function SponsorRecruitSection() {
  return (
    <Section width="wide">
      <div className="grid gap-3 lg:grid-cols-[1fr_1fr]">
        <Link
          href="/onboarding/sponsor"
          className="group relative isolate flex min-h-[260px] flex-col justify-end overflow-hidden rounded-3xl border border-pm-border p-5 text-white shadow-pm-card sm:p-6"
        >
          <Photo
            kind="business"
            ratio="auto"
            rounded="rounded-none"
            className="absolute inset-0 -z-10 !rounded-none"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white/85 backdrop-blur">
            Sponsorships
          </span>
          <h3 className="mt-2 text-2xl font-extrabold leading-tight text-white">
            Sponsor your business here
          </h3>
          <p className="mt-1 max-w-sm text-xs text-white/85">
            Apply to become a ParishMart sponsor and reach parishes, ministries
            and local causes aligned with your brand.
          </p>
          <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-pm-navy">
            Apply now
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </span>
        </Link>
        <div className="grid gap-3 sm:grid-cols-2">
          {BENEFITS.map((b) => (
            <div key={b.title} className="pm-card p-4">
              <h4 className="text-sm font-extrabold text-pm-navy">{b.title}</h4>
              <p className="mt-1 text-xs text-pm-muted">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
