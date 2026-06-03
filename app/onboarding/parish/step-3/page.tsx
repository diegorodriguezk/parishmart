"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { ParishLivePreview } from "@/components/onboarding/ParishLivePreview";
import {
  useParish,
  EXPERIENCE_MODULES,
  PARISH_MINISTRIES,
} from "@/components/onboarding/ParishProfileContext";

const STEP_TITLES = ["Profile", "Story", "Modules", "Donations", "Media", "Launch"];

const MODULE_DESC: Record<string, string> = {
  "Shop - Religious and faith gifts": "Rosaries, crucifixes and devotional items.",
  "Shop - Merch": "Parish apparel and community merch.",
  "Give": "Giving campaigns and goals.",
  "Ministries": "Highlight your active ministries.",
  "Local Businesses": "Businesses supporting the parish.",
  "Sponsors": "Local sponsors and offers.",
  "Events": "Upcoming retreats, festivals and gatherings.",
};

export default function ParishStep3() {
  const { profile, toggleList } = useParish();

  return (
    <SellerStepShell
      step={3}
      totalSteps={6}
      allStepTitles={STEP_TITLES}
      badge="Recommended"
      eyebrow="Step 3 of 6 · Modules & Ministries"
      title={<>Choose your <span className="pm-gradient-text">experience modules</span>.</>}
      description="Select the features that appear on your parish store page and the ministries you want to highlight."
      preview={<ParishLivePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="mb-5 flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-pm-border bg-pm-soft text-sm font-extrabold text-pm-blue">
            AI
          </span>
          <div>
            <p className="text-xs font-extrabold text-pm-blue">ParishMart Concierge</p>
            <p className="mt-1 text-sm text-pm-muted">
              Enable the modules you need now. You can add more anytime from your parish dashboard.
            </p>
          </div>
        </div>

        <p className="mb-3 text-xs font-bold text-pm-navy">Experience Modules</p>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {EXPERIENCE_MODULES.map((m) => (
            <label
              key={m}
              className="flex cursor-pointer items-start gap-3 rounded-2xl border border-pm-border bg-pm-soft/40 p-3.5 has-[:checked]:border-pm-blue has-[:checked]:bg-pm-soft"
            >
              <input
                type="checkbox"
                checked={profile.modules.includes(m)}
                onChange={() => toggleList("modules", m)}
                className="mt-0.5"
              />
              <div>
                <p className="text-sm font-bold text-pm-navy">{m}</p>
                <p className="text-xs text-pm-muted">{MODULE_DESC[m]}</p>
              </div>
            </label>
          ))}
        </div>

        <p className="mb-3 mt-7 text-xs font-bold text-pm-navy">
          Ministries <span className="font-normal text-pm-muted">(select all that apply · optional)</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {PARISH_MINISTRIES.map((m) => (
            <label
              key={m}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-pm-border bg-white px-3.5 py-2 text-sm font-medium text-pm-navy has-[:checked]:border-pm-blue has-[:checked]:bg-pm-soft"
            >
              <input
                type="checkbox"
                checked={profile.ministries.includes(m)}
                onChange={() => toggleList("ministries", m)}
                className="sr-only"
              />
              {m}
            </label>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/parish/step-2" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/parish/step-4" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
