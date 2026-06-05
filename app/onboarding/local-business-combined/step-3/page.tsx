"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { CombinedBizLivePreview } from "@/components/onboarding/CombinedBizLivePreview";
import { useCombinedBiz } from "@/components/onboarding/CombinedBizContext";

const STEP_TITLES = ["Business", "Contact", "Story", "Offerings", "Media"];

const inputCls =
  "mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue";

export default function CombinedStep3() {
  const { profile, update } = useCombinedBiz();

  return (
    <SellerStepShell
      step={3}
      allStepTitles={STEP_TITLES}
      eyebrow="Step 3 of 5 · Story"
      title={
        <>
          Tell your <span className="pm-gradient-text">story</span>.
        </>
      }
      description="Your headline, description, founder and the community you support."
      preview={<CombinedBizLivePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="grid gap-4">
          <label className="block">
            <div className="flex items-baseline justify-between">
              <span className="block text-xs font-extrabold text-pm-navy">
                Business Headline
              </span>
              <span className="text-[10px] font-medium text-pm-muted">
                {profile.headline.length} / 220
              </span>
            </div>
            <input
              maxLength={220}
              value={profile.headline}
              onChange={(e) => update({ headline: e.target.value })}
              className={inputCls}
            />
          </label>

          <label className="block">
            <div className="flex items-baseline justify-between">
              <span className="block text-xs font-extrabold text-pm-navy">
                Business Description
              </span>
              <span className="text-[10px] font-medium text-pm-muted">
                {profile.description.length} / 2,600
              </span>
            </div>
            <textarea
              rows={5}
              maxLength={2600}
              value={profile.description}
              onChange={(e) => update({ description: e.target.value })}
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="block text-xs font-extrabold text-pm-navy">
                Founder Name
              </span>
              <input
                value={profile.founderName}
                onChange={(e) => update({ founderName: e.target.value })}
                className={inputCls}
              />
            </label>
            <label className="block">
              <span className="block text-xs font-extrabold text-pm-navy">
                Parish / Cause Supported
              </span>
              <input
                value={profile.parishSupported}
                onChange={(e) => update({ parishSupported: e.target.value })}
                className={inputCls}
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <div className="flex items-baseline justify-between">
                <span className="block text-xs font-extrabold text-pm-navy">
                  Brief Description of Founder
                </span>
                <span className="text-[10px] font-medium text-pm-muted">
                  {profile.founderDesc.length} / 300
                </span>
              </div>
              <textarea
                rows={3}
                maxLength={300}
                value={profile.founderDesc}
                onChange={(e) => update({ founderDesc: e.target.value })}
                className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
              />
            </label>
            <label className="block">
              <span className="block text-xs font-extrabold text-pm-navy">
                Why do you want to support this community?{" "}
                <span className="font-medium text-pm-muted">(optional)</span>
              </span>
              <textarea
                rows={3}
                value={profile.whySupport}
                onChange={(e) => update({ whySupport: e.target.value })}
                className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="block text-xs font-extrabold text-pm-navy">
                Discount{" "}
                <span className="font-medium text-pm-muted">(optional)</span>
              </span>
              <input
                value={profile.discount}
                onChange={(e) => update({ discount: e.target.value })}
                placeholder="e.g. 15% OFF"
                className={inputCls}
              />
            </label>
            <label className="block">
              <span className="block text-xs font-extrabold text-pm-navy">
                Short Description of Discount{" "}
                <span className="font-medium text-pm-muted">(optional)</span>
              </span>
              <input
                value={profile.discountDesc}
                onChange={(e) => update({ discountDesc: e.target.value })}
                className={inputCls}
              />
            </label>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link
            href="/onboarding/local-business-combined/step-2"
            className="pm-btn pm-btn-secondary"
          >
            Back
          </Link>
          <Link
            href="/onboarding/local-business-combined/step-4"
            className="pm-btn pm-btn-primary"
          >
            Continue
          </Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
