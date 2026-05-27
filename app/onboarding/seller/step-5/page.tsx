import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import {
  SellerPreviewHero,
  SellerPreviewBody,
  PreviewLabel,
} from "@/components/onboarding/SellerPreviewCard";

export const metadata = {
  title: "Step 5 · Select Membership Plan · ParishMart",
};

const PLANS = [
  {
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
      preview={
        <>
          <SellerPreviewHero
            kind="business"
            initials="FD"
            title="Weston Family Dental"
            subtitle="Trusted family dental care · Supporting Saint Katharine Drexel Parish."
          />
          <SellerPreviewBody>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3 text-sm font-extrabold text-amber-700">
              10% off first consultation
            </div>
            <div>
              <PreviewLabel>Services</PreviewLabel>
              <div className="mt-2 grid gap-2 text-xs font-extrabold text-pm-navy">
                {["Family Dentistry", "Emergency Dental Care", "Cosmetic Dentistry"].map(
                  (s) => (
                    <span
                      key={s}
                      className="rounded-2xl border border-pm-border bg-pm-soft/60 p-2.5"
                    >
                      {s}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="rounded-2xl border border-pm-border bg-pm-soft/40 p-4">
              <PreviewLabel>Community Support</PreviewLabel>
              <p className="mt-2 text-xs text-pm-muted">
                This business supports Saint Katharine Drexel through its
                ParishMart membership.
              </p>
            </div>
            <span className="block rounded-full bg-pm-navy py-3 text-center text-sm font-extrabold text-white">
              Request Information
            </span>
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
              Almost there.
            </p>
            <p className="mt-1 text-sm text-pm-muted">
              Your business profile, owner story, services and community
              support are ready. Select a plan to submit for activation.
            </p>
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-3">
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
