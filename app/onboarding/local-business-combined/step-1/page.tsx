"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { CombinedBizLivePreview } from "@/components/onboarding/CombinedBizLivePreview";
import {
  useCombinedBiz,
  type OfferType,
} from "@/components/onboarding/CombinedBizContext";

const STEP_TITLES = ["Business", "Contact", "Story", "Offerings", "Media"];

const PRODUCT_CATEGORIES = [
  "Apparel & Merch",
  "Religious Gifts",
  "Food",
  "Home & Living",
  "Technology",
  "Health & Wellness",
  "Beauty",
  "Kids & Family",
  "Sports & Travel",
  "Handmade & Local",
  "Business & Office",
  "Seasonal",
];

const SERVICE_CATEGORIES = [
  "Professional Services",
  "Home Services",
  "Health & Wellness",
  "Beauty & Personal Care",
  "Food & Catering",
  "Events & Celebrations",
  "Technology & Creative",
  "Travel & Recreation",
  "Education & Family",
  "Faith & Community",
];

const OFFER_TYPES: OfferType[] = ["Products", "Services", "Both"];
const CONTACT_METHODS = ["WhatsApp", "Phone", "Email", "Website", "Social Media"];

const inputCls =
  "mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue";

export default function CombinedStep1() {
  const { profile, update } = useCombinedBiz();

  return (
    <SellerStepShell
      step={1}
      allStepTitles={STEP_TITLES}
      eyebrow="Step 1 of 5 · Business"
      title={
        <>
          Let&rsquo;s create your{" "}
          <span className="pm-gradient-text">business page</span>.
        </>
      }
      description="Tell us about your business and what you offer. The next steps adapt to your selection automatically."
      preview={<CombinedBizLivePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="mb-5 flex items-start gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-pm-border bg-pm-soft text-sm font-extrabold text-pm-blue">
            AI
          </span>
          <div>
            <p className="text-xs font-extrabold text-pm-blue">
              ParishMart Concierge
            </p>
            <p className="mt-1 text-sm text-pm-muted">
              Start with a few simple answers. Your category options change
              based on what you offer.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Business Name
            </span>
            <input
              value={profile.businessName}
              onChange={(e) => update({ businessName: e.target.value })}
              className={inputCls}
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Contact Full Name
            </span>
            <input
              value={profile.contactFullName}
              onChange={(e) => update({ contactFullName: e.target.value })}
              className={inputCls}
            />
          </label>

          <div className="block sm:col-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">
              What does your business offer?
            </span>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {OFFER_TYPES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => update({ offerType: t })}
                  aria-pressed={profile.offerType === t}
                  className={`rounded-2xl border px-3 py-2.5 text-sm font-bold transition ${
                    profile.offerType === t
                      ? "border-pm-blue bg-pm-blue text-white"
                      : "border-pm-border bg-white text-pm-navy hover:border-pm-blue"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <label className="block sm:col-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">
              Main Category
            </span>
            <select
              value={profile.mainCategory}
              onChange={(e) => update({ mainCategory: e.target.value })}
              className={inputCls}
            >
              {(profile.offerType === "Products" ||
                profile.offerType === "Both") && (
                <optgroup label="Products">
                  {PRODUCT_CATEGORIES.map((o) => (
                    <option key={`p-${o}`}>{o}</option>
                  ))}
                </optgroup>
              )}
              {(profile.offerType === "Services" ||
                profile.offerType === "Both") && (
                <optgroup label="Services">
                  {SERVICE_CATEGORIES.map((o) => (
                    <option key={`s-${o}`}>{o}</option>
                  ))}
                </optgroup>
              )}
            </select>
          </label>

          <label className="block sm:col-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">
              Best way to contact you
            </span>
            <select
              value={profile.bestWayToContact}
              onChange={(e) => update({ bestWayToContact: e.target.value })}
              className={inputCls}
            >
              {CONTACT_METHODS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link
            href="/onboarding/local-business-combined"
            className="pm-btn pm-btn-secondary"
          >
            Back
          </Link>
          <Link
            href="/onboarding/local-business-combined/step-2"
            className="pm-btn pm-btn-primary"
          >
            Continue
          </Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
