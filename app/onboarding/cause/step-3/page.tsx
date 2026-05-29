"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { CauseLivePreview } from "@/components/onboarding/CauseLivePreview";
import { useCause } from "@/components/onboarding/CauseProfileContext";

const STEP_TITLES = ["Profile", "Story", "Donations", "Media", "Launch"];

const EVENT_CATEGORIES = ["Retreat", "Workshop", "Fundraiser", "Service", "Social", "Other"];

function UploadBox({ label, hint }: { label: string; hint: string }) {
  return (
    <div className="mt-1.5 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-pm-border bg-pm-soft/40 p-6 text-center transition-colors hover:border-pm-blue hover:bg-pm-soft">
      <svg className="h-6 w-6 text-pm-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
      </svg>
      <p className="text-xs font-bold text-pm-navy">{label}</p>
      <p className="text-[11px] text-pm-muted">{hint}</p>
    </div>
  );
}

export default function CauseStep3() {
  const { profile, update } = useCause();

  return (
    <SellerStepShell
      step={3}
      totalSteps={5}
      allStepTitles={STEP_TITLES}
      badge="Important"
      eyebrow="Step 3 of 5 · Donations & Events"
      title={<>Set up <span className="pm-gradient-text">donations and events</span>.</>}
      description="Add a donation ask supporters can rally around and an upcoming event for your community to join."
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
              A clear donation ask plus an upcoming event gives supporters two easy ways to engage.
            </p>
          </div>
        </div>

        {/* DONATIONS */}
        <p className="text-sm font-extrabold text-pm-navy">Donations</p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="flex items-center justify-between text-xs font-extrabold text-pm-navy">
              Title
              <span className="font-normal text-pm-muted">{profile.donationTitle.length}/30</span>
            </span>
            <input maxLength={30} value={profile.donationTitle} onChange={(e) => update({ donationTitle: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block row-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">Donation Image</span>
            <UploadBox label="Upload donation image" hint="1:1 · min 400×400px" />
          </label>
          <label className="block">
            <span className="flex items-center justify-between text-xs font-extrabold text-pm-navy">
              Brief description
              <span className="font-normal text-pm-muted">{profile.donationDescription.length}/100</span>
            </span>
            <textarea rows={2} maxLength={100} value={profile.donationDescription} onChange={(e) => update({ donationDescription: e.target.value })}
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue" />
          </label>
        </div>

        {/* UPCOMING EVENTS */}
        <p className="mt-8 text-sm font-extrabold text-pm-navy">Upcoming Events</p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="flex items-center justify-between text-xs font-extrabold text-pm-navy">
              Title
              <span className="font-normal text-pm-muted">{profile.eventTitle.length}/30</span>
            </span>
            <input maxLength={30} value={profile.eventTitle} onChange={(e) => update({ eventTitle: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block row-span-3">
            <span className="block text-xs font-extrabold text-pm-navy">Event Image</span>
            <UploadBox label="Upload event image" hint="16:9 · min 1280×720px" />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Location</span>
            <input value={profile.eventLocation} onChange={(e) => update({ eventLocation: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block">
            <span className="flex items-center justify-between text-xs font-extrabold text-pm-navy">
              Brief description
              <span className="font-normal text-pm-muted">{profile.eventDescription.length}/100</span>
            </span>
            <textarea rows={2} maxLength={100} value={profile.eventDescription} onChange={(e) => update({ eventDescription: e.target.value })}
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue" />
          </label>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Event Category <span className="font-normal text-pm-muted">(optional)</span></span>
            <select value={profile.eventCategory} onChange={(e) => update({ eventCategory: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue">
              <option value="">Select category</option>
              {EVENT_CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Price</span>
            <input value={profile.eventPrice} onChange={(e) => update({ eventPrice: e.target.value })}
              placeholder="$0 or Free"
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Available Spots <span className="font-normal text-pm-muted">(optional)</span></span>
            <input type="number" value={profile.eventSpots} onChange={(e) => update({ eventSpots: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/cause/step-2" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/cause/step-4" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
