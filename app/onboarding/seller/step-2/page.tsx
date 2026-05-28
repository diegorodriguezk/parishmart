import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { LocalBizServicePreview } from "@/components/onboarding/OnboardingPreviews";

export const metadata = { title: "Step 2 · Owner Story · ParishMart" };

const STEP_TITLES = ["Profile", "Story", "Services", "Media", "Launch"];

const PARISH_OPTIONS = [
  "Saint Katharine Drexel Parish",
  "SKD Emmaus Ministry",
  "St. Vincent de Paul Weston",
  "Youth Ministry",
  "Other",
];

export default function LocalBizStep2() {
  return (
    <SellerStepShell
      step={2}
      totalSteps={5}
      allStepTitles={STEP_TITLES}
      badge="Recommended"
      eyebrow="Step 2 of 5 · Owner Story"
      title={<>Humanize the page with the <span className="pm-gradient-text">owner&rsquo;s story</span>.</>}
      description="Tell us who runs the business and which parish, cause or ministry you want to support."
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
              A short owner story turns a directory listing into a trusted local supporter. I&rsquo;ll help polish the copy automatically.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Owner / Contact Name</span>
            <input
              defaultValue="Maria Gonzalez"
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Parish / Cause Supported</span>
            <select
              defaultValue={PARISH_OPTIONS[0]}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            >
              {PARISH_OPTIONS.map((o) => <option key={o}>{o}</option>)}
            </select>
          </label>
          <label className="block sm:col-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">About the Owner</span>
            <textarea
              rows={3}
              defaultValue="Maria Gonzalez is a local photographer and community supporter who believes in preserving meaningful moments for SKD families and retreat groups."
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">Why do you want to support this community?</span>
            <textarea
              rows={3}
              defaultValue="We want to serve families in our area and contribute to the parish community through our Local Biz Supporter membership."
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/seller/step-1" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/seller/step-3" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
