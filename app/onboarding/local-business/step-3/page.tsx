import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { LocalBizServicePreview } from "@/components/onboarding/OnboardingPreviews";

export const metadata = { title: "Step 3 · Services & Offer · ParishMart" };

const STEP_TITLES = ["Profile", "Story", "Services", "Media", "Launch"];

const OFFER_OPTIONS = ["10% Off", "Free Consultation", "$25 Credit", "Free First Session", "Custom Offer"];

export default function LocalBizStep3() {
  return (
    <SellerStepShell
      step={3}
      totalSteps={5}
      allStepTitles={STEP_TITLES}
      badge="Required"
      eyebrow="Step 3 of 5 · Services & Offer"
      title={<>Add your <span className="pm-gradient-text">services, offer &amp; CTA</span>.</>}
      description="Add services you provide, a community offer for parishioners and the main call to action."
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
              List your key services and create a simple offer for parishioners. Offers increase profile conversions by up to 3×.
            </p>
          </div>
        </div>

        <p className="mb-3 text-xs font-bold text-pm-navy">Services offered</p>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { name: "Family Photography", price: "From $150", checked: true },
            { name: "Emmaus Retreat Coverage", price: "From $350", checked: true },
            { name: "Parish Event Coverage", price: "Quote", checked: true },
            { name: "Baptism / First Communion", price: "From $200", checked: false },
            { name: "Quinceañera", price: "From $300", checked: false },
            { name: "Custom Package", price: "Quote", checked: false },
          ].map((s) => (
            <label
              key={s.name}
              className="flex cursor-pointer items-start gap-2 rounded-2xl border border-pm-border bg-pm-soft/40 p-3"
            >
              <input type="checkbox" defaultChecked={s.checked} className="mt-0.5" />
              <div>
                <p className="text-xs font-bold text-pm-navy">{s.name}</p>
                <p className="text-[11px] text-pm-muted">{s.price}</p>
              </div>
            </label>
          ))}
        </div>

        <p className="mb-3 mt-7 text-xs font-bold text-pm-navy">Parishioner offer</p>
        <div className="flex flex-wrap gap-2">
          {OFFER_OPTIONS.map((o) => (
            <label
              key={o}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-pm-border bg-white px-3.5 py-2 text-sm font-medium text-pm-navy has-[:checked]:border-pm-blue has-[:checked]:bg-pm-soft"
            >
              <input type="radio" name="offer" defaultChecked={o === "10% Off"} className="sr-only" />
              {o}
            </label>
          ))}
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Starting price</span>
            <input
              defaultValue="From $150"
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Booking / Contact link</span>
            <input
              defaultValue="https://mariastudios.com/contact"
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/local-business/step-2" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/local-business/step-4" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
