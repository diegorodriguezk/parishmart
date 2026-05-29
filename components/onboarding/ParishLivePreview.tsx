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
              <p className="text-sm font-extrabold text-pm-navy">{profile.ministries.length}</p>
              <p className="text-[7px] uppercase tracking-wider text-pm-muted">
                Ministries
              </p>
            </div>
            <div>
              <p className="text-sm font-extrabold text-pm-navy">{profile.modules.length}</p>
              <p className="text-[7px] uppercase tracking-wider text-pm-muted">
                Modules
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

      {/* Mass schedule */}
      {profile.massSchedule && (
        <div className="border-t border-pm-border px-4 py-2.5">
          <p className="text-[8px] font-bold uppercase tracking-wider text-pm-blue">Mass Schedule</p>
          <p className="mt-0.5 text-[10px] text-pm-muted">{profile.massSchedule}</p>
        </div>
      )}

      {/* About */}
      {(profile.shortDescription || profile.longDescription) && (
        <div className="border-t border-pm-border p-4">
          <p className="text-[9px] font-bold uppercase tracking-wider text-pm-muted">
            About the Parish
          </p>
          {profile.shortDescription && (
            <p className="mt-1.5 line-clamp-2 text-[10px] font-semibold leading-relaxed text-pm-navy">
              {profile.shortDescription}
            </p>
          )}
          {profile.longDescription && (
            <p className="mt-1 line-clamp-3 text-[11px] leading-relaxed text-pm-muted">
              {profile.longDescription}
            </p>
          )}
        </div>
      )}

      {/* Modules chips */}
      {profile.modules.length > 0 && (
        <div className="border-t border-pm-border p-4">
          <p className="mb-1.5 text-[9px] font-bold uppercase tracking-wider text-pm-muted">
            Explore
          </p>
          <div className="flex flex-wrap gap-1">
            {profile.modules.map((m) => (
              <span key={m} className="rounded-full border border-pm-border bg-pm-soft/60 px-2 py-0.5 text-[8px] font-semibold text-pm-navy">
                {m}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Donation card */}
      {profile.donationTitle && (
        <div className="border-t border-pm-border p-4">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-wider text-pm-muted">
            Donations
          </p>
          <div className="flex items-center gap-3 rounded-2xl border border-pm-border bg-pm-soft/40 p-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-pm-blue to-pm-cyan text-white">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 21s-7-4.35-9.5-8.5C.5 9 2 5.5 5.5 5.5c2 0 3.2 1.2 4 2.3.8-1.1 2-2.3 4-2.3C20 5.5 21.5 9 19.5 12.5 17 16.65 12 21 12 21z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="truncate text-[11px] font-extrabold text-pm-navy">{profile.donationTitle}</p>
              {profile.donationDescription && (
                <p className="line-clamp-2 text-[9px] leading-relaxed text-pm-muted">
                  {profile.donationDescription}
                </p>
              )}
            </div>
            <span className="ml-auto shrink-0 cursor-default rounded-full bg-pm-navy px-2.5 py-1 text-[9px] font-extrabold text-white">
              Give
            </span>
          </div>
        </div>
      )}

      {/* Upcoming event */}
      {profile.eventTitle && (
        <div className="border-t border-pm-border p-4">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-wider text-pm-muted">
            Upcoming Event
          </p>
          <div className="overflow-hidden rounded-2xl border border-pm-border">
            <div className="relative h-16">
              <Photo kind="congregation" ratio="auto" rounded="rounded-none" className="absolute inset-0 !rounded-none h-full" overlay="subtle" />
            </div>
            <div className="p-3">
              <div className="flex items-start justify-between gap-2">
                <p className="text-[11px] font-extrabold text-pm-navy">{profile.eventTitle}</p>
                {profile.eventPrice && (
                  <span className="shrink-0 text-[10px] font-extrabold text-pm-blue">{profile.eventPrice}</span>
                )}
              </div>
              {profile.eventLocation && (
                <p className="text-[9px] text-pm-muted">{profile.eventLocation}</p>
              )}
              {profile.eventSpots && (
                <p className="mt-1 text-[8px] font-semibold uppercase tracking-wider text-pm-muted">
                  {profile.eventSpots} spots available
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Featured products mini-grid */}
      <div className="border-t border-pm-border p-3">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[9px] font-bold uppercase tracking-wider text-pm-muted">
            Featured Products
          </p>
          <span className="cursor-default text-[9px] text-pm-blue">View all →</span>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-pm-border">
              <Photo kind="merch" ratio="1/1" rounded="rounded-none" className="!rounded-none" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
