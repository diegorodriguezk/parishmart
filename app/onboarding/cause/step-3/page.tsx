"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { CauseLivePreview } from "@/components/onboarding/CauseLivePreview";
import { useCause } from "@/components/onboarding/CauseProfileContext";

const STEP_TITLES = ["Profile", "Story", "Giving", "Launch"];

const PRESET_AMOUNTS = ["$25", "$50", "$100", "$250", "$500", "Custom"];

const GIVING_TIERS = [
  { key: "supporter",  label: "Supporter",  amount: "$25",  perk: "Name on thank-you board" },
  { key: "champion",  label: "Champion",   amount: "$100", perk: "Retreat program listing" },
  { key: "patron",    label: "Patron",     amount: "$250", perk: "Special recognition + gift" },
];

export default function CauseStep3() {
  const { profile, update } = useCause();

  return (
    <SellerStepShell
      step={3}
      totalSteps={4}
      allStepTitles={STEP_TITLES}
      badge="Important"
      eyebrow="Step 3 of 4 · Giving Setup"
      title={<>Set up your <span className="pm-gradient-text">giving campaign</span>.</>}
      description="Define your goal, campaign end date and optional giving tiers to encourage higher donations."
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
              Campaigns with giving tiers raise 40% more on average. Add at least one tier to unlock the achievement badge.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Giving Goal ($)</span>
            <input
              type="number"
              value={profile.givingGoal}
              onChange={(e) => update({ givingGoal: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Campaign End Date</span>
            <input
              type="date"
              value={profile.endDate}
              onChange={(e) => update({ endDate: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
        </div>

        <p className="mb-3 mt-7 text-xs font-bold text-pm-navy">Quick-Give Amounts</p>
        <div className="flex flex-wrap gap-2">
          {PRESET_AMOUNTS.map((a) => (
            <label
              key={a}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-pm-border bg-white px-3.5 py-2 text-sm font-medium text-pm-navy has-[:checked]:border-pm-blue has-[:checked]:bg-pm-soft"
            >
              <input type="checkbox" defaultChecked={["$25", "$50", "$100", "$250"].includes(a)} className="sr-only" />
              {a}
            </label>
          ))}
        </div>

        <p className="mb-3 mt-7 text-xs font-bold text-pm-navy">Giving Tiers (optional)</p>
        <div className="grid gap-2.5 sm:grid-cols-3">
          {GIVING_TIERS.map((t) => (
            <label
              key={t.key}
              className="flex cursor-pointer flex-col gap-2 rounded-2xl border border-pm-border bg-pm-soft/40 p-4 has-[:checked]:border-pm-blue has-[:checked]:bg-pm-soft"
            >
              <input type="checkbox" defaultChecked className="sr-only" />
              <p className="text-sm font-bold text-pm-navy">{t.label}</p>
              <p className="text-2xl font-extrabold text-pm-blue">{t.amount}</p>
              <p className="text-xs text-pm-muted">{t.perk}</p>
            </label>
          ))}
        </div>

        <label className="mt-6 block">
          <span className="block text-xs font-extrabold text-pm-navy">Giving Page URL (auto-generated)</span>
          <div className="mt-1.5 flex items-center gap-2 rounded-2xl border border-pm-border bg-pm-soft/40 px-4 py-3">
            <span className="text-xs text-pm-muted">parishmart.com/give/</span>
            <input
              value={profile.givingSlug}
              onChange={(e) => update({ givingSlug: e.target.value })}
              className="flex-1 bg-transparent text-sm text-pm-ink outline-none"
            />
          </div>
        </label>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/cause/step-2" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/cause/step-4" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
