import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { SponsorProfilePreview } from "@/components/onboarding/OnboardingPreviews";

export const metadata = { title: "Step 3 · Community Offer · ParishMart" };

const STEP_TITLES = ["Profile", "Story", "Offer", "Support", "Launch"];

const OFFER_TYPES = ["Discount", "Cash Back", "Free Service Credit", "Bundled Package", "Community Benefit", "Other"];
const CTA_OPTIONS = ["Request Information", "Redeem Offer", "Contact Sponsor", "Visit Website", "Schedule Appointment"];

export default function SponsorStep3() {
  return (
    <SellerStepShell
      step={3}
      totalSteps={5}
      allStepTitles={STEP_TITLES}
      badge="Recommended"
      eyebrow="Step 3 of 5 · Community Offer"
      title={<>Create a <span className="pm-gradient-text">benefit for parishioners</span>.</>}
      description="A simple offer or benefit for parishioners, families or community members. Optional but strongly recommended."
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
              Sponsors with a community offer receive 6× more clicks. Even a simple benefit like free information counts.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Offer Type</span>
            <select
              defaultValue="Discount"
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            >
              {OFFER_TYPES.map((o) => <option key={o}>{o}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Offer Title (shown on card)</span>
            <input
              defaultValue="$100 Health Credit"
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">Offer Description</span>
            <textarea
              rows={3}
              defaultValue="Participating parish communities can receive up to $100 in annual preventive care services at no cost to the parishioner."
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
        </div>

        <p className="mb-3 mt-7 text-xs font-bold text-pm-navy">Primary Call to Action</p>
        <div className="flex flex-wrap gap-2">
          {CTA_OPTIONS.map((o) => (
            <label
              key={o}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-pm-border bg-white px-3.5 py-2 text-sm font-medium text-pm-navy has-[:checked]:border-pm-blue has-[:checked]:bg-pm-soft"
            >
              <input type="radio" name="cta" defaultChecked={o === "Request Information"} className="sr-only" />
              {o}
            </label>
          ))}
        </div>

        <label className="mt-5 block">
          <span className="block text-xs font-extrabold text-pm-navy">CTA Link (URL)</span>
          <input
            defaultValue="https://clevelandhospital.com/parishes"
            className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
          />
        </label>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/sponsor/step-2" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/sponsor/step-4" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
