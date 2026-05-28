"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { ProductSellerLivePreview } from "@/components/onboarding/ProductSellerLivePreview";
import { useProductSeller } from "@/components/onboarding/ProductSellerContext";

const STEP_TITLES = ["Profile", "Story", "Products", "Media", "Launch"];

export default function SellerStep2() {
  const { profile, update } = useProductSeller();

  return (
    <SellerStepShell
      step={2}
      totalSteps={5}
      allStepTitles={STEP_TITLES}
      badge="Recommended"
      eyebrow="Step 2 of 5 · Story & Founder"
      title={<>Tell your <span className="pm-gradient-text">story</span>.</>}
      description="Share your full business story, founder background and the community cause you support."
      preview={<ProductSellerLivePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="mb-5 flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-pm-border bg-pm-soft text-sm font-extrabold text-pm-blue">AI</span>
          <div>
            <p className="text-xs font-extrabold text-pm-blue">ParishMart Concierge</p>
            <p className="mt-1 text-sm text-pm-muted">A personal story increases trust and community support. The preview updates in real time.</p>
          </div>
        </div>

        <div className="grid gap-4">
          <label className="block">
            <span className="flex items-center justify-between text-xs font-extrabold text-pm-navy">
              About Our Business
              <span className="font-normal text-pm-muted">{profile.longDescription.length}/2600</span>
            </span>
            <textarea rows={5} maxLength={2600}
              value={profile.longDescription}
              onChange={(e) => update({ longDescription: e.target.value })}
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue" />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="block text-xs font-extrabold text-pm-navy">Founder Name</span>
              <input value={profile.founderName} onChange={(e) => update({ founderName: e.target.value })}
                className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
            </label>
            <label className="block">
              <span className="block text-xs font-extrabold text-pm-navy">Parish / Cause Supported</span>
              <input value={profile.parishSupported} onChange={(e) => update({ parishSupported: e.target.value })}
                placeholder="e.g. Saint Katharine Drexel"
                className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
            </label>
          </div>

          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Why do you want to support this community? <span className="font-normal text-pm-muted">(optional)</span>
            </span>
            <textarea rows={2}
              value={profile.whySupport}
              onChange={(e) => update({ whySupport: e.target.value })}
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue" />
          </label>

          <label className="block">
            <span className="flex items-center justify-between text-xs font-extrabold text-pm-navy">
              Short Founder Description
              <span className="font-normal text-pm-muted">{profile.founderShortDesc.length}/300</span>
            </span>
            <textarea rows={3} maxLength={300}
              value={profile.founderShortDesc}
              onChange={(e) => update({ founderShortDesc: e.target.value })}
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue" />
          </label>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/seller/step-1" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/seller/step-3" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
