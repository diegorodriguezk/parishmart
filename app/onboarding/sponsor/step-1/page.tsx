import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { SponsorProfilePreview } from "@/components/onboarding/OnboardingPreviews";

export const metadata = { title: "Step 1 · Company Profile · ParishMart" };

const STEP_TITLES = ["Profile", "Story", "Offer", "Support", "Launch"];

const CATEGORIES = [
  "Healthcare",
  "Technology & Church Solutions",
  "Financial Services",
  "Legal Services",
  "Real Estate",
  "Insurance",
  "Education",
  "Family Services",
  "Travel & Hospitality",
  "Other",
];

export default function SponsorStep1() {
  return (
    <SellerStepShell
      step={1}
      totalSteps={5}
      allStepTitles={STEP_TITLES}
      badge="Required"
      eyebrow="Step 1 of 5 · Company Profile"
      title={<>Create your <span className="pm-gradient-text">sponsor profile</span> and support a community.</>}
      description="Tell the community who you are, how they can find you and what category best describes your business."
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
              ParishMart will generate a sponsor profile that appears inside parish stores, cause pages and community sections.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { label: "Brand / Business Name",  defaultValue: "Cleveland Hospital" },
            { label: "Contact Name",            defaultValue: "Dr. Sarah Williams" },
            { label: "Contact Email",           defaultValue: "partnerships@clevelandhospital.com" },
            { label: "Phone",                   defaultValue: "(954) 555-0200" },
            { label: "Website",                 defaultValue: "https://clevelandhospital.com" },
          ].map((f) => (
            <label key={f.label} className="block">
              <span className="block text-xs font-extrabold text-pm-navy">{f.label}</span>
              <input
                defaultValue={f.defaultValue}
                className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
              />
            </label>
          ))}
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Business Category</span>
            <select
              defaultValue="Healthcare"
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            >
              {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>
          <label className="block sm:col-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">Short Business Description</span>
            <textarea
              rows={3}
              defaultValue="A leading healthcare provider in South Florida committed to serving faith-based communities through integrated, compassionate care."
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/sponsor" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/sponsor/step-2" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
