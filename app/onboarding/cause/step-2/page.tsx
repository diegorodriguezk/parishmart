"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { CauseLivePreview } from "@/components/onboarding/CauseLivePreview";
import { useCause } from "@/components/onboarding/CauseProfileContext";

const STEP_TITLES = ["Profile", "Story", "Donations", "Media", "Launch"];

export default function CauseStep2() {
  const { profile, update } = useCause();

  return (
    <SellerStepShell
      step={2}
      totalSteps={5}
      allStepTitles={STEP_TITLES}
      badge="Recommended"
      eyebrow="Step 2 of 5 · Story & Mission"
      title={<>Tell your <span className="pm-gradient-text">cause&rsquo;s story</span>.</>}
      description="Share the full story behind your cause. A compelling story increases giving by up to 3×."
      preview={<CauseLivePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="mb-5 flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-pm-border bg-pm-soft text-sm font-extrabold text-pm-blue">
            AI
          </span>
          <div>
            <p className="text-xs font-extrabold text-pm-blue">ParishMart Concierge</p>
            <p className="mt-1 text-sm text-pm-muted">
              Causes with a personal story raise 3× more than those with only a goal amount. Make it human.
            </p>
          </div>
        </div>

        <label className="block">
          <span className="flex items-center justify-between text-xs font-extrabold text-pm-navy">
            Long Description
            <span className="font-normal text-pm-muted">{profile.longDescription.length}/2600</span>
          </span>
          <textarea
            rows={12}
            maxLength={2600}
            value={profile.longDescription}
            onChange={(e) => update({ longDescription: e.target.value })}
            className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
          />
        </label>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/cause/step-1" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/cause/step-3" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
