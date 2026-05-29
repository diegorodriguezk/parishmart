import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { SponsorProfilePreview } from "@/components/onboarding/OnboardingPreviews";

export const metadata = { title: "Step 2 · Purpose & Story · ParishMart" };

const STEP_TITLES = ["Profile", "Story", "Offer", "Support", "Launch"];

export default function SponsorStep2() {
  return (
    <SellerStepShell
      step={2}
      totalSteps={5}
      allStepTitles={STEP_TITLES}
      badge="Recommended"
      eyebrow="Step 2 of 5 · Purpose & Story"
      title={<>Tell the community <span className="pm-gradient-text">why you support them</span>.</>}
      description="Upload your logo, add a cover image and share a short message about why your business supports this community."
      preview={<SponsorProfilePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="mb-5 flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-pm-border bg-pm-soft text-sm font-extrabold text-pm-blue">
            AI
          </span>
          <div>
            <p className="text-xs font-extrabold text-pm-blue">ParishMart Concierge</p>
            <p className="mt-1 text-sm text-pm-muted">
              Sponsors with a purpose statement and logo get 4× more engagement on their offers.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { label: "Sponsor Logo",  hint: "PNG/SVG · transparent · 400×400 · Required" },
            { label: "Cover Image",   hint: "JPG · 1600×900 · Optional — used as sponsor banner" },
          ].map((u) => (
            <div
              key={u.label}
              className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-pm-border bg-pm-soft/30 p-5 text-center"
            >
              <div className="mb-2 grid h-10 w-10 place-items-center rounded-2xl bg-pm-soft text-pm-blue">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
              </div>
              <p className="text-sm font-bold text-pm-navy">Upload {u.label}</p>
              <p className="mt-1 text-[11px] text-pm-muted">{u.hint}</p>
            </div>
          ))}
        </div>

        <label className="mt-5 block">
          <span className="block text-xs font-extrabold text-pm-navy">Purpose Message</span>
          <span className="mt-0.5 block text-[11px] text-pm-muted">Why does your business support this community?</span>
          <textarea
            rows={4}
            defaultValue="We are proud to support parishes and causes that use evidence-based care and meaningful relationships to strengthen family well-being, engagement and long-term health."
            className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
          />
        </label>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/sponsor/step-1" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/sponsor/step-3" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
