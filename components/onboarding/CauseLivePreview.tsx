"use client";

import { Photo } from "@/components/Photo";
import { useCause } from "./CauseProfileContext";

function shortParish(name: string): string {
  return name.replace(/\s*Catholic Parish$/i, "").replace(/\s*Parish$/i, "").trim();
}

function formatGoal(value: string): string {
  const n = Number(value.replace(/[^0-9.]/g, ""));
  if (!n) return "—";
  if (n >= 1000) {
    const k = n / 1000;
    return `$${Number.isInteger(k) ? k : k.toFixed(1)}K`;
  }
  return `$${n}`;
}

export function CauseLivePreview() {
  const { profile } = useCause();
  const parish = shortParish(profile.parishConnection);

  return (
    <>
      {/* Dark banner */}
      <div className="relative min-h-[200px] overflow-hidden">
        <Photo
          kind="retreat"
          ratio="auto"
          rounded="rounded-none"
          className="absolute inset-0 !rounded-none h-full"
          overlay="strong"
        />
        <div className="relative flex h-full flex-col justify-between p-4">
          {/* Top breadcrumb badges */}
          <div className="flex flex-wrap items-center gap-1.5">
            {parish && (
              <span className="rounded-full border border-white/30 bg-white/10 px-2 py-0.5 text-[9px] font-bold text-white backdrop-blur">
                {parish}
              </span>
            )}
            {profile.category && (
              <span className="rounded-full border border-white/30 bg-white/10 px-2 py-0.5 text-[9px] font-bold text-white backdrop-blur">
                {profile.category}
              </span>
            )}
          </div>
          {/* Bottom: headline + CTAs */}
          <div className="mt-12 text-white">
            <h3 className="text-lg font-extrabold leading-tight">
              {profile.causeName || <span className="text-white/50">Your Cause Name</span>}
            </h3>
            {(profile.tagline || profile.shortDescription) && (
              <p className="mt-1 line-clamp-2 text-[11px] text-white/80">
                {profile.tagline || profile.shortDescription}
              </p>
            )}
            <div className="mt-3 flex gap-2">
              <span className="cursor-default rounded-full bg-pm-blue px-3 py-1.5 text-[10px] font-extrabold text-white">
                {profile.primaryCta || "Give Now"}
              </span>
              <span className="cursor-default rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[10px] font-extrabold text-white backdrop-blur">
                Shop &amp; Support
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats + about */}
      <div className="space-y-4 p-4">
        <div className="flex gap-5">
          <div>
            <p className="text-sm font-extrabold text-pm-navy">47</p>
            <p className="text-[8px] uppercase tracking-wider text-pm-muted">
              Supporters
            </p>
          </div>
          <div>
            <p className="text-sm font-extrabold text-pm-navy">{formatGoal(profile.givingGoal)}</p>
            <p className="text-[8px] uppercase tracking-wider text-pm-muted">
              Goal
            </p>
          </div>
          <div>
            <p className="text-sm font-extrabold text-pm-navy">12</p>
            <p className="text-[8px] uppercase tracking-wider text-pm-muted">
              Local Supporters
            </p>
          </div>
        </div>
        {(profile.mission || profile.fullStory) && (
          <div>
            <p className="text-[9px] font-bold uppercase tracking-wider text-pm-blue">
              About {profile.causeName || "the Cause"}
            </p>
            <p className="mt-1.5 line-clamp-4 text-[11px] leading-relaxed text-pm-muted">
              {profile.mission || profile.fullStory}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
