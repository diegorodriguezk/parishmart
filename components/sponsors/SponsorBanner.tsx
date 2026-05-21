import Link from "next/link";
import { ArrowRight, Megaphone } from "lucide-react";
import { Section } from "@/components/Sections";

export function SponsorBanner() {
  return (
    <Section width="wide" className="!py-3">
      <Link
        href="/onboarding/sponsor"
        className="group flex flex-col items-start gap-3 rounded-3xl border border-pm-border bg-gradient-to-r from-pm-navy via-pm-blue to-pm-cyan p-5 text-white shadow-pm-card transition hover:shadow-pm-soft sm:flex-row sm:items-center sm:justify-between sm:p-6"
      >
        <div className="flex items-center gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/15 backdrop-blur">
            <Megaphone className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-white/85">
              Sponsor a parish community
            </p>
            <h3 className="text-base font-extrabold leading-tight sm:text-lg">
              Sponsor your business here — apply to join ParishMart.
            </h3>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-pm-navy transition group-hover:translate-x-0.5">
          Apply now
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      </Link>
    </Section>
  );
}
