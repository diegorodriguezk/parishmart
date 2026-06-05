"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { CauseLivePreview } from "@/components/onboarding/CauseLivePreview";
import { MediaUploadCard } from "@/components/onboarding/MediaUploadCard";
import { useCause } from "@/components/onboarding/CauseProfileContext";

const STEP_TITLES = ["Profile", "Story", "Donations", "Events", "Media"];

const MEDIA_CARDS = [
  {
    eyebrow: "Logo / Icon",
    title: "Cause Logo or Icon",
    description:
      "Upload a square or horizontal logo. A clean mark helps your page look professional.",
    action: "Upload Logo",
    badge: "Recommended",
  },
  {
    eyebrow: "Banner",
    title: "Banner Photo",
    description:
      "A wide cover photo for the top of your cause page that explains your mission.",
    action: "Upload Photo",
    badge: "Recommended",
  },
  {
    eyebrow: "Pictures",
    title: "Cause Pictures",
    description:
      "Add up to 6 photos of your community, events or the impact you create.",
    action: "Add Photos",
    badge: "Optional",
  },
];

export default function CauseStep5() {
  const { profile, update } = useCause();

  return (
    <SellerStepShell
      step={5}
      totalSteps={5}
      allStepTitles={STEP_TITLES}
      badge="Final"
      eyebrow="Step 5 of 5 · Media"
      title={
        <>
          Add your <span className="pm-gradient-text">media</span>.
        </>
      }
      description="Upload your visuals and share a video link. Then submit your cause page for review."
      preview={<CauseLivePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="mb-5 flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-pm-border bg-pm-soft text-sm font-extrabold text-pm-blue">
            AI
          </span>
          <div>
            <p className="text-xs font-extrabold text-pm-blue">
              ParishMart Concierge
            </p>
            <p className="mt-1 text-sm text-pm-muted">
              Pages with a logo, banner and photos convert visitors into
              supporters faster.
            </p>
          </div>
        </div>

        <p className="text-sm font-extrabold text-pm-navy">Media</p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          {MEDIA_CARDS.map((c) => (
            <MediaUploadCard key={c.eyebrow} {...c} />
          ))}
        </div>

        <label className="mt-4 block">
          <span className="block text-xs font-extrabold text-pm-navy">
            Video{" "}
            <span className="font-normal text-pm-muted">
              (optional · share link)
            </span>
          </span>
          <input
            value={profile.videoLink}
            onChange={(e) => update({ videoLink: e.target.value })}
            placeholder="Paste a YouTube or Vimeo link…"
            className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
          />
        </label>

        <label className="mt-6 flex items-start gap-2 text-xs text-pm-ink">
          <input type="checkbox" className="mt-0.5" required />
          <span>
            I have read and agree to the{" "}
            <a href="#" className="font-bold text-pm-blue underline">
              ParishMart cause terms &amp; conditions
            </a>
            .
          </span>
        </label>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/cause/step-4" className="pm-btn pm-btn-secondary">
            Back
          </Link>
          <Link href="/onboarding/success" className="pm-btn pm-btn-primary">
            Submit for Approval
          </Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
