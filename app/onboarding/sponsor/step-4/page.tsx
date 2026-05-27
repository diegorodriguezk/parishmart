import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { SponsorProfilePreview } from "@/components/onboarding/OnboardingPreviews";

export const metadata = { title: "Step 4 · Support Area · ParishMart" };

const STEP_TITLES = ["Profile", "Story", "Offer", "Support", "Launch"];

const SCOPE_OPTIONS = ["Specific Parish", "Specific Cause", "City / Local Area", "Diocese", "Regional", "National"];
const PARISH_OPTIONS = ["Saint Katharine Drexel Catholic Parish", "Casa Manresa", "Emmaus Community", "St. Vincent de Paul", "Other"];
const CAUSE_OPTIONS = ["General Parish Support", "Youth Ministry", "Emmaus Retreat", "St Vincent de Paul", "Mission Fund", "Other"];

export default function SponsorStep4() {
  return (
    <SellerStepShell
      step={4}
      totalSteps={5}
      allStepTitles={STEP_TITLES}
      badge="Required"
      eyebrow="Step 4 of 5 · Support Area"
      title={<>Choose where your <span className="pm-gradient-text">profile appears</span>.</>}
      description="Select the parish, cause, or geographic area where you want your sponsor profile to be visible."
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
              Start local for maximum relevance. You can expand your support area after launch.
            </p>
          </div>
        </div>

        <p className="mb-3 text-xs font-bold text-pm-navy">Support scope</p>
        <div className="flex flex-wrap gap-2">
          {SCOPE_OPTIONS.map((o) => (
            <label
              key={o}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-pm-border bg-white px-3.5 py-2 text-sm font-medium text-pm-navy has-[:checked]:border-pm-blue has-[:checked]:bg-pm-soft"
            >
              <input type="radio" name="scope" defaultChecked={o === "Specific Parish"} className="sr-only" />
              {o}
            </label>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Preferred Parish or Community</span>
            <select
              defaultValue={PARISH_OPTIONS[0]}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            >
              {PARISH_OPTIONS.map((p) => <option key={p}>{p}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Preferred Cause (optional)</span>
            <select
              defaultValue={CAUSE_OPTIONS[0]}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            >
              {CAUSE_OPTIONS.map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/sponsor/step-3" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/sponsor/step-5" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
