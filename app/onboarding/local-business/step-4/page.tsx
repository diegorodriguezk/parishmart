import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { LocalBizServicePreview } from "@/components/onboarding/OnboardingPreviews";

export const metadata = { title: "Step 4 · Media & Trust · ParishMart" };

const STEP_TITLES = ["Profile", "Story", "Services", "Media", "Launch"];

const UPLOADS = [
  { label: "Business Logo",  hint: "PNG/SVG · transparent · 400×400",   note: "Required" },
  { label: "Banner Photo",   hint: "JPG · 1600×900 · landscape",         note: "Required" },
  { label: "Founder Photo",  hint: "JPG · 800×800 · square",             note: "Recommended" },
  { label: "Gallery Photos", hint: "JPG · up to 4 images · 800×600",     note: "Optional" },
];

export default function LocalBizStep4() {
  return (
    <SellerStepShell
      step={4}
      totalSteps={5}
      allStepTitles={STEP_TITLES}
      badge="Important"
      eyebrow="Step 4 of 5 · Media & Trust"
      title={<>Upload <span className="pm-gradient-text">media &amp; trust signals</span>.</>}
      description="Logo, cover photo, founder photo and gallery. Pages with photos get 5× more profile visits."
      preview={<LocalBizServicePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="mb-5 flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-pm-border bg-pm-soft text-sm font-extrabold text-pm-blue">
            AI
          </span>
          <div>
            <p className="text-xs font-extrabold text-pm-blue">ParishMart Concierge</p>
            <p className="mt-1 text-sm text-pm-muted">
              Upload your logo and banner now. You can add gallery photos and founder shots after activation.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {UPLOADS.map((u) => (
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
              <p className="mt-0.5 text-[11px] text-pm-muted">{u.hint}</p>
              <span
                className={`mt-2 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${
                  u.note === "Required"
                    ? "bg-pm-blue/10 text-pm-blue"
                    : u.note === "Recommended"
                    ? "bg-amber-50 text-amber-700"
                    : "bg-pm-soft text-pm-muted"
                }`}
              >
                {u.note}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/local-business/step-3" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/local-business/step-5" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
