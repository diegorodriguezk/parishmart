"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { CauseLivePreview } from "@/components/onboarding/CauseLivePreview";
import { useCause } from "@/components/onboarding/CauseProfileContext";

const STEP_TITLES = ["Profile", "Story", "Donations", "Events", "Media"];

const CATEGORIES = ["Retreat", "Youth Ministry", "Social Justice", "Mission Trip", "Formation", "Other"];

export default function CauseStep1() {
  const { profile, update } = useCause();

  return (
    <SellerStepShell
      step={1}
      totalSteps={5}
      allStepTitles={STEP_TITLES}
      badge="Required"
      eyebrow="Step 1 of 5 · Cause Profile"
      title={<>Activate your <span className="pm-gradient-text">cause or ministry</span>.</>}
      description="Basic information to create your cause page — the preview on the right updates live as you type."
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
              Start with the basics. You can add your story, donations, events and media in the next steps.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Cause / Ministry Name</span>
            <input value={profile.causeName} onChange={(e) => update({ causeName: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Contact Full Name</span>
            <input value={profile.contactFullName} onChange={(e) => update({ contactFullName: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Category</span>
            <select value={profile.category} onChange={(e) => update({ category: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue">
              <option value="">Select category</option>
              {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Address</span>
            <input value={profile.address} onChange={(e) => update({ address: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Phone</span>
            <input type="tel" value={profile.phone} onChange={(e) => update({ phone: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Email</span>
            <input type="email" value={profile.email} onChange={(e) => update({ email: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block sm:col-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">
              Website or Social Media <span className="font-normal text-pm-muted">(optional)</span>
            </span>
            <input value={profile.websiteOrSocial} onChange={(e) => update({ websiteOrSocial: e.target.value })}
              placeholder="yoursite.org or @handle"
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">City</span>
            <input value={profile.city} onChange={(e) => update({ city: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">State</span>
            <input value={profile.state} onChange={(e) => update({ state: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block sm:col-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">Country</span>
            <input value={profile.country} onChange={(e) => update({ country: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/cause/step-2" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
