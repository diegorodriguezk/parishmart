"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { ParishLivePreview } from "@/components/onboarding/ParishLivePreview";
import { useParish } from "@/components/onboarding/ParishProfileContext";

const STEP_TITLES = ["Profile", "Story", "Modules", "Donations", "Media", "Launch"];

const CTA_OPTIONS = ["Shop with Parish", "Give with Love", "Support a Cause", "Join a Ministry", "Share the Impact"];

export default function ParishStep2() {
  const { profile, update } = useParish();

  return (
    <SellerStepShell
      step={2}
      totalSteps={6}
      allStepTitles={STEP_TITLES}
      badge="Recommended"
      eyebrow="Step 2 of 6 · Story & Mission"
      title={<>Tell your <span className="pm-gradient-text">parish&rsquo;s story</span>.</>}
      description="Share your tagline, mission and mass schedule that represent your community in the ParishMart ecosystem."
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
              A strong tagline and mission attract supporters and local businesses to your community page.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Parish Tagline</span>
            <input value={profile.tagline} onChange={(e) => update({ tagline: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block">
            <span className="flex items-center justify-between text-xs font-extrabold text-pm-navy">
              Parish Short Description / Mission Statement
              <span className="font-normal text-pm-muted">{profile.shortDescription.length}/220</span>
            </span>
            <textarea rows={3} maxLength={220} value={profile.shortDescription} onChange={(e) => update({ shortDescription: e.target.value })}
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block">
            <span className="flex items-center justify-between text-xs font-extrabold text-pm-navy">
              Parish Long Description
              <span className="font-normal text-pm-muted">{profile.longDescription.length}/2600</span>
            </span>
            <textarea rows={9} maxLength={2600} value={profile.longDescription} onChange={(e) => update({ longDescription: e.target.value })}
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Mass Schedule</span>
            <input value={profile.massSchedule} onChange={(e) => update({ massSchedule: e.target.value })}
              placeholder="Sat 5:00 PM · Sun 8:00 & 10:00 AM · Daily 8:30 AM"
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
        </div>

        <p className="mb-3 mt-7 text-xs font-bold text-pm-navy">Primary Call to Action</p>
        <div className="flex flex-wrap gap-2">
          {CTA_OPTIONS.map((o) => (
            <label
              key={o}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-pm-border bg-white px-3.5 py-2 text-sm font-medium text-pm-navy has-[:checked]:border-pm-blue has-[:checked]:bg-pm-soft"
            >
              <input type="radio" name="cta" checked={profile.primaryCta === o} onChange={() => update({ primaryCta: o })} className="sr-only" />
              {o}
            </label>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/parish/step-1" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/parish/step-3" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
