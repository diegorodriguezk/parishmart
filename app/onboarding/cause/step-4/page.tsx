"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { CauseLivePreview } from "@/components/onboarding/CauseLivePreview";
import { useCause, STARTER_MERCH } from "@/components/onboarding/CauseProfileContext";
import { Photo } from "@/components/Photo";

const STEP_TITLES = ["Profile", "Story", "Donations", "Media", "Launch"];

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

export default function CauseStep4() {
  const { profile, toggleCollection } = useCause();

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
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Logo / Icon</span>
            <UploadBox label="Upload logo / icon" hint="1:1 · min 400×400px" />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Banner Photo</span>
            <UploadBox label="Upload banner photo" hint="16:9 · min 1280×720px" />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Pictures</span>
            <UploadBox label="Upload pictures" hint="Up to 6 images · JPG or PNG" />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Video <span className="font-normal text-pm-muted">(optional)</span></span>
            <UploadBox label="Upload video or paste link" hint="MP4 or YouTube/Vimeo URL" />
          </label>
        </div>

        {/* STARTER COLLECTION */}
        <p className="mt-8 text-sm font-extrabold text-pm-navy">Select your starter collection</p>
        <p className="mt-1 text-xs text-pm-muted">Choose the merch supporters can buy to fund your cause.</p>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {STARTER_MERCH.map((m) => {
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
