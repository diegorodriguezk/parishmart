import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { ParishStorePreview } from "@/components/onboarding/OnboardingPreviews";

export const metadata = { title: "Step 1 · Parish Profile · ParishMart" };

const STEP_TITLES = ["Profile", "Story", "Modules", "Launch"];

export default function ParishStep1() {
  return (
    <SellerStepShell
      step={1}
      totalSteps={4}
      allStepTitles={STEP_TITLES}
      badge="Required"
      eyebrow="Step 1 of 4 · Parish Profile"
      title={<>Activate your <span className="pm-gradient-text">parish community</span>.</>}
      description="Basic information to create your parish store page — where supporters can shop, give and discover your community."
      preview={<ParishStorePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="mb-5 flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-pm-border bg-pm-soft text-sm font-extrabold text-pm-blue">
            AI
          </span>
          <div>
            <p className="text-xs font-extrabold text-pm-blue">ParishMart Concierge</p>
            <p className="mt-1 text-sm text-pm-muted">
              Start simple. Giving setup and ministry details can be completed after your page goes live.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { label: "Parish Name",     defaultValue: "Saint Katharine Drexel Catholic Parish" },
            { label: "City",            defaultValue: "Weston" },
            { label: "State",           defaultValue: "FL" },
            { label: "Zip Code",        defaultValue: "33327" },
            { label: "Address",         defaultValue: "2501 South Post Road" },
            { label: "Phone",           defaultValue: "(954) 555-0100" },
            { label: "Email",           defaultValue: "contact@skd.org" },
            { label: "Website",         defaultValue: "https://skd.org" },
            { label: "Contact Name",    defaultValue: "Fr. John Smith" },
            { label: "Contact Email",   defaultValue: "pastor@skd.org" },
          ].map((f) => (
            <label key={f.label} className="block">
              <span className="block text-xs font-extrabold text-pm-navy">{f.label}</span>
              <input
                defaultValue={f.defaultValue}
                className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
              />
            </label>
          ))}
          <label className="block sm:col-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">Short Parish Description</span>
            <textarea
              rows={3}
              defaultValue="The cornerstone of Weston's Catholic community. Saint Katharine Drexel Parish serves families through formation, prayer and service."
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/parish" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/parish/step-2" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
