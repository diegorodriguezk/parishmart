"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { CauseLivePreview } from "@/components/onboarding/CauseLivePreview";
import { useCause, STARTER_MERCH } from "@/components/onboarding/CauseProfileContext";
import { MediaUploadCard } from "@/components/onboarding/MediaUploadCard";
import { Photo } from "@/components/Photo";

const STEP_TITLES = ["Profile", "Story", "Donations", "Media", "Launch"];

const MEDIA_CARDS = [
  {
    eyebrow: "Logo / Icon",
    title: "Cause Logo or Icon",
    description: "Upload a square or horizontal logo. A clean mark helps your page look professional.",
    action: "Upload Logo",
    badge: "Required",
  },
  {
    eyebrow: "Banner",
    title: "Banner Photo",
    description: "A wide cover photo for the top of your cause page that explains your mission.",
    action: "Upload Photo",
    badge: "Required",
  },
  {
    eyebrow: "Pictures",
    title: "Cause Pictures",
    description: "Add up to 6 photos of your community, events or the impact you create.",
    action: "Add Photos",
    badge: "Optional",
  },
];

export default function CauseStep4() {
  const { profile, toggleCollection, setShowFaithGifts } = useCause();
  const visibleMerch = STARTER_MERCH.filter((m) => profile.showFaithGifts || !m.faith);

  return (
    <SellerStepShell
      step={4}
      totalSteps={5}
      allStepTitles={STEP_TITLES}
      badge="Recommended"
      eyebrow="Step 4 of 5 · Media & Collection"
      title={<>Add <span className="pm-gradient-text">media and merch</span>.</>}
      description="Upload your visuals and pick a starter merch collection supporters can buy to back your cause."
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
              Pages with a logo, banner and a starter merch collection convert visitors into supporters faster.
            </p>
          </div>
        </div>

        {/* MEDIA */}
        <p className="text-sm font-extrabold text-pm-navy">Media</p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          {MEDIA_CARDS.map((c) => (
            <MediaUploadCard key={c.eyebrow} {...c} />
          ))}
        </div>

        {/* FAITH GIFTS TOGGLE */}
        <div className="mt-8 flex items-center justify-between gap-4 rounded-2xl border border-pm-border bg-pm-soft/40 p-4">
          <div>
            <p className="text-sm font-bold text-pm-navy">Do you want to showcase religious and faith gifts?</p>
            <p className="mt-0.5 text-xs text-pm-muted">
              Adds rosaries, crucifixes, candles and devotional keepsakes to your starter collection.
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={profile.showFaithGifts}
            aria-label="Showcase religious and faith gifts"
            onClick={() => setShowFaithGifts(!profile.showFaithGifts)}
            className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
              profile.showFaithGifts ? "bg-pm-blue" : "bg-pm-border"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                profile.showFaithGifts ? "translate-x-5" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>

        {/* STARTER COLLECTION */}
        <p className="mt-6 text-sm font-extrabold text-pm-navy">Select your starter collection</p>
        <p className="mt-1 text-xs text-pm-muted">Choose the merch supporters can buy to fund your cause.</p>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {visibleMerch.map((m) => {
            const selected = profile.starterCollection.includes(m.name);
            return (
              <button
                key={m.name}
                type="button"
                onClick={() => toggleCollection(m.name)}
                aria-pressed={selected}
                className={`group flex flex-col overflow-hidden rounded-2xl border text-left transition ${
                  selected ? "border-pm-blue ring-2 ring-pm-blue/30" : "border-pm-border hover:border-pm-blue"
                }`}
              >
                <div className="relative aspect-square bg-white">
                  <Photo
                    kind="merch"
                    src={m.src}
                    ratio="auto"
                    rounded="rounded-none"
                    className="absolute inset-0 !rounded-none border-0"
                    overlay="none"
                    fit="contain"
                    alt={m.name}
                  />
                  {selected && (
                    <span className="absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-pm-blue text-white">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  )}
                </div>
                <span className="px-2.5 py-2 text-xs font-bold text-pm-navy">{m.name}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/cause/step-3" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/cause/step-5" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
