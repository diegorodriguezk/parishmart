"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { ParishLivePreview } from "@/components/onboarding/ParishLivePreview";
import { MediaUploadCard } from "@/components/onboarding/MediaUploadCard";
import { useParish } from "@/components/onboarding/ParishProfileContext";

const STEP_TITLES = ["Profile", "Story", "Modules", "Donations", "Media", "Launch"];

const EVENT_CATEGORIES = ["Retreat", "Workshop", "Fundraiser", "Service", "Social", "Other"];

export default function ParishStep4() {
  const { profile, update } = useParish();

  return (
    <SellerStepShell
      step={4}
      totalSteps={6}
      allStepTitles={STEP_TITLES}
      badge="Important"
      eyebrow="Step 4 of 6 · Donations & Events"
      title={<>Set up <span className="pm-gradient-text">donations and events</span>.</>}
      description="Add a donation ask supporters can rally around and an upcoming event for your community to join."
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
              A clear donation ask plus an upcoming event gives parishioners two easy ways to engage.
            </p>
          </div>
        </div>

        {/* DONATIONS */}
        <p className="text-sm font-extrabold text-pm-navy">Donations</p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <div className="grid content-start gap-4">
            <label className="block">
              <span className="flex items-center justify-between text-xs font-extrabold text-pm-navy">
                Title
                <span className="font-normal text-pm-muted">{profile.donationTitle.length}/30</span>
              </span>
              <input maxLength={30} value={profile.donationTitle} onChange={(e) => update({ donationTitle: e.target.value })}
                className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
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
          <MediaUploadCard
            eyebrow="Donation"
            title="Donation Image"
            description="A square image that represents this donation ask — the people or program it funds."
            action="Upload Image"
            badge="Optional"
          />
        </div>

        {/* UPCOMING EVENTS */}
        <p className="mt-8 text-sm font-extrabold text-pm-navy">Upcoming Events</p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <div className="grid content-start gap-4">
            <label className="block">
              <span className="flex items-center justify-between text-xs font-extrabold text-pm-navy">
                Title
                <span className="font-normal text-pm-muted">{profile.eventTitle.length}/30</span>
              </span>
              <input maxLength={30} value={profile.eventTitle} onChange={(e) => update({ eventTitle: e.target.value })}
                className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
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
          <MediaUploadCard
            eyebrow="Event"
            title="Event Image"
            description="A wide cover photo for this event — 16:9 works best for the event banner."
            action="Upload Image"
            badge="Optional"
          />
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
          <Link href="/onboarding/parish/step-3" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/parish/step-5" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
