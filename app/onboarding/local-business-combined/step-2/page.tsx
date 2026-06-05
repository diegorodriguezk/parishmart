"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { CombinedBizLivePreview } from "@/components/onboarding/CombinedBizLivePreview";
import { useCombinedBiz } from "@/components/onboarding/CombinedBizContext";

const STEP_TITLES = ["Business", "Contact", "Story", "Offerings", "Media", "Plans"];

const inputCls =
  "mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue";

export default function CombinedStep2() {
  const { profile, update } = useCombinedBiz();

  return (
    <SellerStepShell
      step={2}
      totalSteps={6}
      allStepTitles={STEP_TITLES}
      eyebrow="Step 2 of 6 · Contact & Location"
      title={
        <>
          How can people{" "}
          <span className="pm-gradient-text">reach and find you</span>?
        </>
      }
      description="Contact details and location. Address uses Google Places to keep it accurate."
      preview={<CombinedBizLivePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block sm:col-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">
              Business Address
            </span>
            <input
              value={profile.address}
              onChange={(e) => update({ address: e.target.value })}
              placeholder="Start typing your address…"
              className={inputCls}
            />
            <span className="mt-1 block text-[10px] text-pm-muted">
              Google Places autocomplete
            </span>
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Phone Number
            </span>
            <input
              value={profile.phone}
              onChange={(e) => update({ phone: e.target.value })}
              className={inputCls}
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Email Address
            </span>
            <input
              value={profile.email}
              onChange={(e) => update({ email: e.target.value })}
              className={inputCls}
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Website{" "}
              <span className="font-medium text-pm-muted">(optional)</span>
            </span>
            <input
              value={profile.website}
              onChange={(e) => update({ website: e.target.value })}
              className={inputCls}
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Social Media{" "}
              <span className="font-medium text-pm-muted">(optional)</span>
            </span>
            <input
              value={profile.socialMedia}
              onChange={(e) => update({ socialMedia: e.target.value })}
              className={inputCls}
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              City
            </span>
            <input
              value={profile.city}
              onChange={(e) => update({ city: e.target.value })}
              className={inputCls}
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              State
            </span>
            <input
              value={profile.state}
              onChange={(e) => update({ state: e.target.value })}
              className={inputCls}
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Country
            </span>
            <input
              value={profile.country}
              onChange={(e) => update({ country: e.target.value })}
              className={inputCls}
            />
          </label>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link
            href="/onboarding/local-business-combined/step-1"
            className="pm-btn pm-btn-secondary"
          >
            Back
          </Link>
          <Link
            href="/onboarding/local-business-combined/step-3"
            className="pm-btn pm-btn-primary"
          >
            Continue
          </Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
