"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { MediaUploadCard } from "@/components/onboarding/MediaUploadCard";
import { CombinedBizLivePreview } from "@/components/onboarding/CombinedBizLivePreview";
import { useCombinedBiz } from "@/components/onboarding/CombinedBizContext";

const STEP_TITLES = ["Business", "Contact", "Story", "Offerings", "Media"];

const MEDIA = [
  {
    eyebrow: "Brand",
    title: "Logo",
    description: "A square logo for your business profile and cards.",
    action: "Upload Logo",
    badge: "Recommended",
  },
  {
    eyebrow: "Brand",
    title: "Banner",
    description: "A wide hero image shown at the top of your business page.",
    action: "Upload Banner",
    badge: "Recommended",
  },
  {
    eyebrow: "People",
    title: "Founder Profile Picture",
    description: "A friendly photo of the founder for the story section.",
    action: "Upload Photo",
    badge: "Optional",
  },
  {
    eyebrow: "Catalog",
    title: "Pictures of Offerings",
    description: "Photos of your products or services for the gallery.",
    action: "Upload Pictures",
    badge: "Optional",
  },
];

export default function CombinedStep5() {
  const { profile, update } = useCombinedBiz();

  return (
    <SellerStepShell
      step={5}
      allStepTitles={STEP_TITLES}
      eyebrow="Step 5 of 5 · Media"
      title={
        <>
          Add your <span className="pm-gradient-text">media</span>.
        </>
      }
      description="Upload your visuals and share a video link. Then submit your page for review."
      preview={<CombinedBizLivePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="grid gap-4 sm:grid-cols-2">
          {MEDIA.map((m) => (
            <MediaUploadCard key={m.title} {...m} />
          ))}
        </div>

        <label className="mt-4 block">
          <span className="block text-xs font-extrabold text-pm-navy">
            Video <span className="font-medium text-pm-muted">(share link only)</span>
          </span>
          <input
            value={profile.videoLink}
            onChange={(e) => update({ videoLink: e.target.value })}
            placeholder="Paste a YouTube or Vimeo link…"
            className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
          />
        </label>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link
            href="/onboarding/local-business-combined/step-4"
            className="pm-btn pm-btn-secondary"
          >
            Back
          </Link>
          <Link href="/onboarding/success" className="pm-btn pm-btn-primary">
            Submit for review
          </Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
