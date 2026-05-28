"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Heart, Sparkles, Star, Check } from "lucide-react";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { SellerLivePreview } from "@/components/onboarding/SellerLivePreview";
import { useSellerProfile } from "@/components/onboarding/SellerProfileContext";

type Highlight = { Icon: LucideIcon; title: string; body: string };
type Plan = {
  id: string;
  badge?: { label: string; tone: "blue" | "amber" | "navy" };
  name: string;
  description: string;
  price: string;
  oldPrice?: string;
  priceSuffix?: string;
  priceCaption?: string;
  priceNote?: string;
  features: string[];
  highlights?: Highlight[];
  cta: string;
};

const BADGE_TONE: Record<NonNullable<Plan["badge"]>["tone"], string> = {
  blue: "bg-pm-soft text-pm-blue",
  amber: "bg-amber-50 text-amber-700",
  navy: "bg-pm-navy/10 text-pm-navy",
};

const PLANS: Plan[] = [
  {
    id: "founding",
    badge: { label: "Early Adopter", tone: "blue" },
    name: "Founding Supporter",
    description:
      "For selected businesses invited to help launch the first ParishMart community experience.",
    price: "$0",
    priceSuffix: "/ pilot",
    priceCaption: "Complimentary during launch phase",
    features: [
      "Business profile",
      "Logo and short description",
      "Community visibility",
      "Founding Supporter badge",
      "Basic CTA button",
      "Early access to future features",
    ],
    highlights: [
      {
        Icon: Star,
        title: "Best for launch",
        body: "Designed to build early visibility, validate the experience, and create social proof.",
      },
    ],
    cta: "Request Invitation",
  },
  {
    id: "community",
    badge: { label: "Products", tone: "amber" },
    name: "Community Seller",
    description:
      "For businesses that want to sell products through ParishMart with checkout and order flow.",
    price: "$49.99",
    oldPrice: "$149/mo",
    priceSuffix: "/ month",
    priceCaption: "Founding Launch Pricing",
    priceNote: "Plus Commerce with Purpose transaction fee.",
    features: [
      "Seller storefront",
      "Product listings",
      "Integrated checkout",
      "Order notifications",
      "Product category placement",
      "Business storytelling page",
      "Community impact contribution built in",
    ],
    highlights: [
      {
        Icon: Heart,
        title: "Community Impact",
        body: "50% of your monthly membership directly supports the parish or cause you select.",
      },
      {
        Icon: Sparkles,
        title: "Commerce with Purpose",
        body: "Transactions also help support payment processing, the selected parish or cause, and the ParishMart platform.",
      },
    ],
    cta: "Start Selling",
  },
  {
    id: "featured",
    name: "Featured Supporter",
    description:
      "Best for businesses that want premium placement and stronger visibility.",
    price: "$150",
    priceSuffix: "/ month",
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

function PlanCard({
  plan,
  isSelected,
  onSelect,
}: {
  plan: Plan;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`relative flex flex-col gap-4 rounded-3xl border p-6 text-left transition ${
        isSelected
          ? "border-pm-blue bg-gradient-to-br from-white to-pm-soft shadow-pm-card"
          : "border-pm-border bg-white hover:-translate-y-0.5 hover:border-pm-blue/40 hover:shadow-pm-soft"
      }`}
    >
      {/* Badge / Selected pill */}
      <div className="flex items-center justify-between gap-3">
        {plan.badge ? (
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider ${BADGE_TONE[plan.badge.tone]}`}
          >
            {plan.badge.label}
          </span>
        ) : (
          <span />
        )}
        {isSelected ? (
          <span className="rounded-full bg-pm-blue px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
            Selected
          </span>
        ) : null}
      </div>

      {/* Title + description */}
      <div>
        <p className="text-2xl font-extrabold tracking-tight text-pm-navy">
          {plan.name}
        </p>
        <p className="mt-1 text-xs text-pm-muted">{plan.description}</p>
      </div>

      {/* Price block */}
      <div className="border-t border-pm-border pt-4">
        {plan.oldPrice ? (
          <p className="text-xs font-medium text-pm-muted line-through">
            {plan.oldPrice}
          </p>
        ) : null}
        <p className="text-4xl font-extrabold leading-none tracking-tight text-pm-navy">
          {plan.price}
          {plan.priceSuffix ? (
            <span className="ml-1.5 text-xs font-bold text-pm-muted">
              {plan.priceSuffix}
            </span>
          ) : null}
        </p>
        {plan.priceCaption ? (
          <p className="mt-2 text-xs font-extrabold text-pm-blue">
            {plan.priceCaption}
          </p>
        ) : null}
        {plan.priceNote ? (
          <p className="mt-1 text-[11px] text-pm-muted">{plan.priceNote}</p>
        ) : null}
      </div>

      {/* Features */}
      <div>
        <p className="text-[10px] font-extrabold uppercase tracking-wider text-pm-muted">
          Includes
        </p>
        <ul className="mt-2 grid gap-1.5 text-xs text-pm-ink">
          {plan.features.map((f) => (
            <li key={f} className="inline-flex items-start gap-1.5">
              <Check
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-pm-blue"
                strokeWidth={2.5}
                aria-hidden
              />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Highlights */}
      {plan.highlights && plan.highlights.length > 0 ? (
        <div className="grid gap-2">
          {plan.highlights.map((h) => (
            <div
              key={h.title}
              className="flex items-start gap-3 rounded-2xl border border-pm-border bg-pm-soft/50 p-3"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-pm-blue ring-1 ring-pm-border">
                <h.Icon className="h-3.5 w-3.5" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-extrabold text-pm-navy">
                  {h.title}
                </p>
                <p className="mt-0.5 text-[11px] leading-relaxed text-pm-muted">
                  {h.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {/* CTA */}
      <span className="mt-auto rounded-full bg-pm-navy py-3 text-center text-xs font-extrabold text-white">
        {isSelected ? "Selected" : plan.cta}
      </span>
    </button>
  );
}

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

        <div className="grid gap-4 lg:grid-cols-2">
          {PLANS.map((p) => (
            <PlanCard
              key={p.id}
              plan={p}
              isSelected={profile.selectedPlan === p.id}
              onSelect={() => update({ selectedPlan: p.id })}
            />
          ))}
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
