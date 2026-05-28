"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { SellerLivePreview } from "@/components/onboarding/SellerLivePreview";
import { useSellerProfile } from "@/components/onboarding/SellerProfileContext";

const PLANS = [
  {
    id: "starter",
    name: "Starter Supporter",
    price: "$49",
    body: "Best for businesses that want a basic presence in the community directory.",
    features: [
      "Public business profile",
      "Parish/cause supporter badge",
      "Contact CTA",
      "Basic category listing",
    ],
    cta: "Select Starter",
  },
  {
    id: "community",
    name: "Community Supporter",
    price: "$99",
    body: "Best for active local businesses that want better visibility and an offer/coupon.",
    features: [
      "Everything in Starter",
      "Featured offer/coupon",
      "Owner story section",
      "Gallery and testimonials",
      "Higher category visibility",
    ],
    cta: "Select Community",
    featured: true,
  },
  {
    id: "featured",
    name: "Featured Supporter",
    price: "$150",
    body: "Best for businesses that want premium placement and stronger visibility.",
    features: [
      "Everything in Community",
      "Featured placement",
      "Parish store footer placement",
      "Priority support",
      "Monthly performance summary",
    ],
    cta: "Select Featured",
  },
];

export default function LocalBizStep5() {
  const { profile, update } = useSellerProfile();

  return (
    <SellerStepShell
      step={5}
      eyebrow="Step 5 of 5 · Review & Activate"
      title={
        <>
          Choose your{" "}
          <span className="pm-gradient-text">membership plan</span> and
          activate.
        </>
      }
      description="The monthly plan controls visibility, placement and support level. Payment activates the Local Biz Service page after approval."
      preview={<SellerLivePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="mb-5 flex items-start gap-4 rounded-2xl border border-pm-cyan/30 bg-gradient-to-br from-pm-soft to-white p-4">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-pm-border bg-white text-lg font-extrabold text-pm-blue">
            ✓
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-pm-blue">
              Activation Ready
            </p>
            <p className="mt-1 text-2xl font-extrabold leading-tight tracking-tight text-pm-navy">
              Almost there.
            </p>
            <p className="mt-1 text-sm text-pm-muted">
              Your business profile, owner story, services and community
              support are ready. Select a plan to submit for activation.
            </p>
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-3">
          {PLANS.map((p) => {
            const isSelected = profile.selectedPlan === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => update({ selectedPlan: p.id })}
                className={`relative flex flex-col gap-3 rounded-3xl border p-5 text-left transition ${
                  isSelected
                    ? "border-pm-blue bg-gradient-to-br from-white to-pm-soft shadow-pm-card"
                    : p.featured
                    ? "border-pm-cyan bg-gradient-to-br from-white to-pm-soft shadow-pm-card"
                    : "border-pm-border bg-white hover:-translate-y-0.5 hover:border-pm-blue/40 hover:shadow-pm-soft"
                }`}
              >
                {p.featured && !isSelected ? (
                  <span className="absolute right-4 top-4 rounded-full bg-pm-navy px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                    Recommended
                  </span>
                ) : null}
                {isSelected ? (
                  <span className="absolute right-4 top-4 rounded-full bg-pm-blue px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                    Selected
                  </span>
                ) : null}
                <p className="pr-24 text-lg font-extrabold tracking-tight text-pm-navy">
                  {p.name}
                </p>
                <p className="text-3xl font-extrabold leading-none text-pm-navy">
                  {p.price}
                  <span className="ml-1 text-xs font-bold text-pm-muted">
                    / month
                  </span>
                </p>
                <p className="text-xs text-pm-muted">{p.body}</p>
                <ul className="grid gap-1.5 text-xs text-pm-muted">
                  {p.features.map((f) => (
                    <li key={f}>✓ {f}</li>
                  ))}
                </ul>
                <span
                  className={`mt-auto rounded-full px-4 py-3 text-center text-xs font-extrabold ${
                    isSelected || p.featured
                      ? "bg-pm-navy text-white"
                      : "border border-pm-border bg-white text-pm-navy"
                  }`}
                >
                  {isSelected ? "Selected" : p.cta}
                </span>
              </button>
            );
          })}
        </div>

        <label className="mt-5 flex items-start gap-3 rounded-2xl border border-pm-border bg-pm-soft/40 p-4">
          <input
            type="checkbox"
            defaultChecked
            className="mt-1 h-4 w-4 accent-pm-blue"
          />
          <p className="text-xs text-pm-muted">
            I agree to the{" "}
            <span className="font-extrabold text-pm-navy">
              ParishMart Local Biz Terms
            </span>
            , understand my business will be reviewed before publication, and
            authorize ParishMart to display my page inside the selected parish
            or community ecosystem.
          </p>
        </label>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/seller/step-4" className="pm-btn pm-btn-secondary">
            Back
          </Link>
          <Link
            href="/onboarding/success"
            className="pm-btn pm-btn-primary"
          >
            Continue to Payment &amp; Submit for Approval
          </Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
