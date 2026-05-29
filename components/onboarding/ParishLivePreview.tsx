"use client";

import { Photo } from "@/components/Photo";
import { useParish } from "./ParishProfileContext";

const STOPWORDS = new Set(["catholic", "parish", "church", "the", "of", "and", "&"]);

function parishInitials(name: string): string {
  const words = name
    .trim()
    .split(/\s+/)
    .filter((w) => w && !STOPWORDS.has(w.toLowerCase()));
  if (!words.length) return "PM";
  return words.slice(0, 3).map((w) => w[0]?.toUpperCase() ?? "").join("");
}

function shortName(name: string): string {
  return name.replace(/\s*Catholic Parish$/i, "").replace(/\s*Parish$/i, "").trim();
}

export function ParishLivePreview() {
  const { profile } = useParish();
  const initials = parishInitials(profile.parishName);
  const display = shortName(profile.parishName);
  const location = [profile.city, profile.state].filter(Boolean).join(", ");

  return (
    <>
      {/* Hero: left info + right photo */}
      <div className="grid grid-cols-[1fr_1fr]">
        <div className="flex flex-col gap-2.5 p-4">
          <div className="flex items-center gap-1.5">
            <span className="grid h-6 w-6 shrink-0 place-items-center overflow-hidden rounded-md border border-pm-border bg-pm-soft text-[8px] font-extrabold text-pm-navy">
              {initials}
            </span>
            <div>
              <p className="text-[8px] font-bold text-pm-navy">
                {display || "Your Parish"}
              </p>
              {location && <p className="text-[8px] text-pm-muted">{location}</p>}
            </div>
          </div>
          <h3 className="text-sm font-extrabold leading-tight tracking-tight text-pm-navy">
            {profile.tagline || (
              <span className="text-pm-muted">Your parish tagline.</span>
            )}
          </h3>
          <div className="flex gap-3">
            <div>
              <p className="text-sm font-extrabold text-pm-navy">$2.4K</p>
              <p className="text-[7px] uppercase tracking-wider text-pm-muted">
                Raised
              </p>
            </div>
            <div>
              <p className="text-sm font-extrabold text-pm-navy">8</p>
              <p className="text-[7px] uppercase tracking-wider text-pm-muted">
                Ministries
              </p>
            </div>
            <div>
              <p className="text-sm font-extrabold text-pm-navy">3</p>
              <p className="text-[7px] uppercase tracking-wider text-pm-muted">
                Campaigns
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <span className="cursor-default rounded-full bg-pm-navy px-2.5 py-1.5 text-[9px] font-extrabold text-white">
              {profile.primaryCta || "Shop with Parish"}
            </span>
            <span className="cursor-default rounded-full border border-pm-border bg-white px-2.5 py-1.5 text-[9px] font-extrabold text-pm-navy">
              Give with Love
            </span>
          </div>
        </div>
        {/* Right: congregation photo */}
        <div className="relative overflow-hidden rounded-tr-[28px]">
          <Photo
            kind="congregation"
            ratio="auto"
            rounded="rounded-none"
            className="absolute inset-0 !rounded-none h-full"
          />
        </div>
      </div>

      {/* About */}
      {profile.shortDescription && (
        <div className="border-t border-pm-border p-4">
          <p className="text-[9px] font-bold uppercase tracking-wider text-pm-muted">
            About the Parish
          </p>
          <p className="mt-1.5 line-clamp-3 text-[11px] leading-relaxed text-pm-muted">
            {profile.shortDescription}
          </p>
        </div>
      )}

      {/* Products mini-grid */}
      <div className="border-t border-pm-border p-3">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[9px] font-bold uppercase tracking-wider text-pm-muted">
            Featured Products
          </p>
          <span className="cursor-default text-[9px] text-pm-blue">
            View all →
          </span>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-pm-border"
            >
              <Photo
                kind="merch"
                ratio="1/1"
                rounded="rounded-none"
                className="!rounded-none"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
