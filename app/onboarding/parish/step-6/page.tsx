"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { ParishLivePreview } from "@/components/onboarding/ParishLivePreview";
import { useParish } from "@/components/onboarding/ParishProfileContext";

const STEP_TITLES = ["Profile", "Story", "Modules", "Donations", "Media", "Launch"];

const PLANS = [
  {
    key: "community",
    name: "Community",
    price: "Free",
    tag: "Get started",
    features: ["Basic parish page", "1 active campaign", "Shop module", "Give module"],
  },
  {
    key: "parish",
    name: "Parish Plus",
    price: "$79",
    tag: "Recommended",
    recommended: true,
    features: ["Full parish store", "Unlimited campaigns", "All modules", "Analytics dashboard"],
  },
  {
    key: "diocese",
    name: "Diocese",
    price: "Custom",
    tag: "For dioceses",
    features: ["Multi-parish management", "Dedicated support", "Custom integrations", "White-label options"],
  },
];

export default function ParishStep6() {
  const { profile, update } = useParish();

  return (
    <SellerStepShell
      step={6}
      totalSteps={6}
      allStepTitles={STEP_TITLES}
      badge="Final"
      eyebrow="Step 6 of 6 · Launch"
      title={<>Submit for review and <span className="pm-gradient-text">go live</span>.</>}
      description="Select a plan and submit your parish page for review. Your page goes live within 24 hours of approval."
      preview={<ParishLivePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="mb-6 flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-pm-border bg-pm-soft text-sm font-extrabold text-pm-blue">
            AI
          </span>
          <div>
            <p className="text-xs font-extrabold text-pm-blue">ParishMart Concierge</p>
            <p className="mt-1 text-sm text-pm-muted">
              Start with Community (free) to get your page live. You can upgrade to Parish Plus for the full experience at any time.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {PLANS.map((p) => (
            <label
              key={p.key}
              className="relative flex cursor-pointer flex-col gap-3 rounded-[22px] border border-pm-border bg-white p-5 has-[:checked]:border-pm-blue has-[:checked]:bg-pm-soft has-[:checked]:shadow-pm-soft"
            >
              <input
                type="radio"
                name="plan"
                checked={profile.selectedPlan === p.key}
                onChange={() => update({ selectedPlan: p.key })}
                className="sr-only"
              />
              {p.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-pm-blue px-3 py-0.5 text-[10px] font-extrabold text-white">
                  Recommended
                </span>
              )}
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-pm-blue">{p.tag}</p>
                <p className="mt-1 text-base font-extrabold text-pm-navy">{p.name}</p>
                <p className="mt-2 text-3xl font-extrabold text-pm-navy">
                  {p.price}
                  {p.price !== "Free" && p.price !== "Custom" && (
                    <span className="text-xs font-medium text-pm-muted"> /mo</span>
                  )}
                </p>
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
              ParishMart parish terms &amp; conditions
            </a>
            .
          </span>
        </label>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/parish/step-5" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/success" className="pm-btn pm-btn-primary">
            Submit for Approval
          </Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
