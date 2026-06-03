"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { ParishLivePreview } from "@/components/onboarding/ParishLivePreview";
import { MediaUploadCard } from "@/components/onboarding/MediaUploadCard";

const STEP_TITLES = ["Profile", "Story", "Modules", "Donations", "Media", "Launch"];

const MEDIA_CARDS = [
  {
    eyebrow: "Logo / Icon",
    title: "Parish Logo or Icon",
    description: "Upload a square or horizontal logo. A clean mark helps your page look professional.",
    action: "Upload Logo",
    badge: "Required",
  },
  {
    eyebrow: "Banner",
    title: "Banner Photo",
    description: "A wide cover photo for the top of your parish page that represents your community.",
    action: "Upload Photo",
    badge: "Required",
  },
  {
    eyebrow: "Pictures",
    title: "Parish Pictures",
    description: "Add up to 6 photos of your parish, ministries, events or the community you serve.",
    action: "Add Photos",
    badge: "Optional",
  },
];

export default function ParishStep5() {
  return (
    <SellerStepShell
      step={5}
      totalSteps={6}
      allStepTitles={STEP_TITLES}
      badge="Recommended"
      eyebrow="Step 5 of 6 · Media"
      title={<>Add your <span className="pm-gradient-text">parish visuals</span>.</>}
      description="Upload your logo, banner and photos so your parish page feels welcoming and recognizable."
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
              Pages with a logo and banner convert visitors into parishioners and supporters faster.
            </p>
          </div>
        </div>

        <p className="text-sm font-extrabold text-pm-navy">Media</p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          {MEDIA_CARDS.map((c) => (
            <MediaUploadCard key={c.eyebrow} {...c} />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/parish/step-4" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/parish/step-6" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
