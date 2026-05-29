"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { CauseLivePreview } from "@/components/onboarding/CauseLivePreview";
import { useCause } from "@/components/onboarding/CauseProfileContext";

const STEP_TITLES = ["Profile", "Story", "Giving", "Launch"];

const CATEGORIES = ["Retreat", "Youth Ministry", "Social Justice", "Mission Trip", "Formation", "Other"];

export default function CauseStep1() {
  const { profile, update } = useCause();

  return (
    <SellerStepShell
      step={1}
      totalSteps={4}
      allStepTitles={STEP_TITLES}
      badge="Required"
      eyebrow="Step 1 of 4 · Cause Profile"
      title={<>Activate your <span className="pm-gradient-text">cause or ministry</span>.</>}
      description="Basic information to create your cause page — where supporters can give, shop and rally around your community initiative."
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
              Start with the basics — the preview on the right updates live as you type.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block sm:col-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">Cause / Ministry Name</span>
            <input
              value={profile.causeName}
              onChange={(e) => update({ causeName: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Lead Person Name</span>
            <input
              value={profile.leadName}
              onChange={(e) => update({ leadName: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Contact Email</span>
            <input
              type="email"
              value={profile.contactEmail}
              onChange={(e) => update({ contactEmail: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">Parish Connection (optional)</span>
            <input
              value={profile.parishConnection}
              onChange={(e) => update({ parishConnection: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">Short Description</span>
            <textarea
              rows={3}
              value={profile.shortDescription}
              onChange={(e) => update({ shortDescription: e.target.value })}
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
        </div>

        <p className="mb-3 mt-7 text-xs font-bold text-pm-navy">Category</p>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <label
              key={c}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-pm-border bg-white px-3.5 py-2 text-sm font-medium text-pm-navy has-[:checked]:border-pm-blue has-[:checked]:bg-pm-soft"
            >
              <input
                type="radio"
                name="category"
                checked={profile.category === c}
                onChange={() => update({ category: c })}
                className="sr-only"
              />
              {c}
            </label>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/cause/step-2" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
