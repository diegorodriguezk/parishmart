import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import {
  SellerPreviewHero,
  SellerPreviewBody,
  PreviewLabel,
} from "@/components/onboarding/SellerPreviewCard";

export const metadata = {
  title: "Step 5 · Select Seller Membership · ParishMart",
};

const PLANS = [
  {
    name: "Starter Seller",
    price: "$49",
    body: "Best for small sellers or MVP launch.",
    features: [
      "Seller profile",
      "Up to 25 products",
      "Manual product upload",
      "Basic category visibility",
    ],
    cta: "Select Starter",
  },
  {
    name: "Community Seller",
    price: "$99",
    body: "Best for active sellers supporting parishes or causes.",
    features: [
      "Up to 250 products",
      "Storefront story and gallery",
      "Community support badge",
      "CSV import",
      "Higher visibility",
    ],
    cta: "Select Community",
    featured: true,
  },
  {
    name: "Featured Seller",
    price: "$150",
    body: "Premium placement and integrations.",
    features: [
      "Up to 1,000 products",
      "Featured placements",
      "API / Shopify sync request",
      "Parish store placement",
      "Monthly performance summary",
    ],
    cta: "Select Featured",
  },
];

export default function SellerStep5() {
  return (
    <SellerStepShell
      step={5}
      eyebrow="Step 5 of 5 · Review & Activate"
      title={
        <>
          Your store is ready to join the{" "}
          <span className="pm-gradient-text">ParishMart</span> ecosystem.
        </>
      }
      description="Choose your seller membership, approve the terms and submit your storefront for review."
      preview={
        <>
          <SellerPreviewHero
            kind="merch"
            initials="HC"
            title="HarpsClub Merch"
            subtitle="Custom apparel and campaign products supporting Saint Katharine Drexel Parish."
          />
          <SellerPreviewBody>
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-pm-cyan/30 bg-gradient-to-br from-pm-soft to-white p-4">
              <div>
                <PreviewLabel>Supporting</PreviewLabel>
                <p className="mt-1 text-base font-extrabold text-pm-navy">
                  Saint Katharine Drexel Parish
                </p>
                <p className="text-xs text-pm-muted">
                  A portion of every sale supports the parish community.
                </p>
              </div>
              <span className="rounded-xl bg-pm-navy px-2.5 py-2 text-[10px] font-extrabold uppercase tracking-wider text-white">
                Purpose Partner
              </span>
            </div>
            <div className="rounded-2xl border border-pm-border bg-pm-soft/40 p-4">
              <PreviewLabel>Featured Offer</PreviewLabel>
              <p className="mt-1 text-xl font-extrabold text-pm-navy">
                Parish T-Shirt Campaign
              </p>
              <p className="mt-1 text-xs text-pm-muted">
                Bulk pricing from $18 · Made-to-order · Ships directly.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-xl bg-pm-navy px-3 py-1.5 text-[11px] font-extrabold text-white">
                  Shop Products
                </span>
                <span className="rounded-xl border border-pm-border bg-white px-3 py-1.5 text-[11px] font-extrabold text-pm-blue">
                  Start Campaign
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-br from-pm-navy to-pm-blue p-4 text-white">
              <div>
                <p className="text-base font-extrabold leading-tight">
                  Your store is ready to go live.
                </p>
                <p className="mt-1 text-xs text-white/85">
                  ParishMart concierge will review and activate within 24–48
                  hours.
                </p>
              </div>
              <span className="rounded-xl bg-white px-3 py-2 text-[11px] font-extrabold text-pm-navy">
                Launching Soon
              </span>
            </div>
          </SellerPreviewBody>
        </>
      }
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
              Welcome aboard.
            </p>
            <p className="mt-1 text-sm text-pm-muted">
              Your seller storefront, story, products and parish connection are
              ready for activation and review.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-pm-border bg-white p-4">
            <PreviewLabel>Seller</PreviewLabel>
            <p className="mt-1 text-lg font-extrabold leading-tight text-pm-navy">
              HarpsClub Merch
            </p>
            <p className="mt-1 text-xs text-pm-muted">
              1P Partner Seller connected to Saint Katharine Drexel Parish.
            </p>
          </div>
          <div className="rounded-2xl border border-pm-border bg-white p-4">
            <PreviewLabel>Primary Offer</PreviewLabel>
            <p className="mt-1 text-lg font-extrabold leading-tight text-pm-navy">
              Parish T-Shirt Campaign
            </p>
            <p className="mt-1 text-xs text-pm-muted">
              AI-generated CTA optimized for parish engagement.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-3 lg:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col gap-3 rounded-3xl border p-5 ${
                p.featured
                  ? "border-pm-cyan bg-gradient-to-br from-white to-pm-soft shadow-pm-card"
                  : "border-pm-border bg-white"
              }`}
            >
              {p.featured ? (
                <span className="absolute right-4 top-4 rounded-full bg-pm-navy px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                  Recommended
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
              <button
                type="button"
                className={`mt-auto rounded-full px-4 py-3 text-xs font-extrabold ${
                  p.featured
                    ? "bg-pm-navy text-white"
                    : "border border-pm-border bg-white text-pm-navy"
                }`}
              >
                {p.cta}
              </button>
            </div>
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
              ParishMart Seller Terms
            </span>
            , understand my storefront will be reviewed before publication, and
            authorize ParishMart to display my products inside the selected
            parish or community ecosystem.
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
            Activate My Seller Store
          </Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
