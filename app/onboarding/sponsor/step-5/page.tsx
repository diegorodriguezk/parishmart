import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { SponsorProfilePreview } from "@/components/onboarding/OnboardingPreviews";

export const metadata = { title: "Step 5 · Launch Plan · ParishMart" };

const STEP_TITLES = ["Profile", "Story", "Offer", "Support", "Launch"];

const PLANS = [
  {
    key: "community",
    name: "Community Sponsor",
    price: "$150",
    tag: "Local sponsors",
    reach: "1.5K",
    features: ["Basic profile", "Logo placement", "Contact button", "1 offer"],
  },
  {
    key: "featured",
    name: "Featured Sponsor",
    price: "$300",
    tag: "Recommended",
    recommended: true,
    reach: "5K",
    features: ["Featured card", "Up to 3 photos", "Higher placement", "Basic reporting"],
  },
  {
    key: "premier",
    name: "Premier Sponsor",
    price: "$500",
    tag: "Strategic / regional",
    reach: "18K",
    features: ["Multi-page visibility", "Video / message", "Campaign placement", "Monthly report"],
  },
];

export default function SponsorStep5() {
  return (
    <SellerStepShell
      step={5}
      totalSteps={5}
      allStepTitles={STEP_TITLES}
      badge="Final"
      eyebrow="Step 5 of 5 · Launch Plan"
      title={<>Select your <span className="pm-gradient-text">sponsor plan</span>.</>}
      description="Start with Community to test results. Upgrade to Featured or Premier as your visibility needs grow."
      preview={<SponsorProfilePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="mb-6 flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-pm-border bg-pm-soft text-sm font-extrabold text-pm-blue">
            AI
          </span>
          <div>
            <p className="text-xs font-extrabold text-pm-blue">ParishMart Concierge</p>
            <p className="mt-1 text-sm text-pm-muted">
              Payment activates your sponsor page after a quick review. Most sponsors see their first offer redemptions within 14 days.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {PLANS.map((p) => (
            <label
              key={p.key}
              className="relative flex cursor-pointer flex-col gap-3 rounded-[22px] border border-pm-border bg-white p-5 has-[:checked]:border-pm-blue has-[:checked]:bg-pm-soft has-[:checked]:shadow-pm-soft"
            >
              <input type="radio" name="plan" defaultChecked={p.key === "featured"} className="sr-only" />
              {p.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-pm-blue px-3 py-0.5 text-[10px] font-extrabold text-white">
                  Recommended
                </span>
              )}
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-pm-blue">{p.tag}</p>
                <p className="mt-1 text-base font-extrabold text-pm-navy">{p.name}</p>
                <p className="mt-2 text-3xl font-extrabold text-pm-navy">
                  {p.price}<span className="text-xs font-medium text-pm-muted"> /mo</span>
                </p>
                <p className="mt-1 text-[11px] text-pm-muted">~{p.reach} monthly impressions</p>
              </div>
              <ul className="space-y-1 text-xs text-pm-ink">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-1.5">
                    <span className="mt-0.5 text-pm-blue">·</span> {f}
                  </li>
                ))}
              </ul>
            </label>
          ))}
        </div>

        <label className="mt-6 flex items-start gap-2 text-xs text-pm-ink">
          <input type="checkbox" className="mt-0.5" required />
          <span>
            I have read and agree to the{" "}
            <a href="#" className="font-bold text-pm-blue underline">
              ParishMart sponsor terms &amp; conditions
            </a>
            .
          </span>
        </label>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/sponsor/step-4" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/success" className="pm-btn pm-btn-primary">
            Continue to Payment &amp; Launch
          </Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
