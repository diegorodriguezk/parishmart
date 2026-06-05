"use client";

import { Photo } from "@/components/Photo";
import { useCause } from "./CauseProfileContext";

function shortParish(name: string): string {
  return name
    .replace(/\s*Catholic Parish$/i, "")
    .replace(/\s*Parish$/i, "")
    .trim();
}

export function CauseLivePreview() {
  const { profile } = useCause();
  const parish = shortParish(profile.associatedParish);
  const donation = profile.donations[0];
  const event = profile.events[0];

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
          <div className="mt-10 text-white">
            <h3 className="text-lg font-extrabold leading-tight">
              {profile.causeName || (
                <span className="text-white/50">Your Cause Name</span>
              )}
            </h3>
            {(profile.tagline || profile.shortDescription) && (
              <p className="mt-1 line-clamp-2 text-[11px] text-white/80">
                {profile.tagline || profile.shortDescription}
              </p>
            )}
            <div className="mt-3 flex gap-2">
              <span className="cursor-default rounded-full bg-pm-blue px-3 py-1.5 text-[10px] font-extrabold text-white">
                Donate Now
              </span>
              <span className="cursor-default rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[10px] font-extrabold text-white backdrop-blur">
                Learn More
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* About — mission + long description */}
      {(profile.shortDescription || profile.longDescription) && (
        <div className="border-t border-pm-border p-4">
          <p className="text-[9px] font-bold uppercase tracking-wider text-pm-blue">
            About {profile.causeName || "the Cause"}
          </p>
          {profile.shortDescription && (
            <p className="mt-1.5 line-clamp-2 text-[10px] font-semibold leading-relaxed text-pm-navy">
              {profile.shortDescription}
            </p>
          )}
          {profile.longDescription && (
            <p className="mt-1 line-clamp-4 text-[11px] leading-relaxed text-pm-muted">
              {profile.longDescription}
            </p>
          )}
        </div>
      )}

      {/* Donations */}
      {donation?.title && (
        <div className="border-t border-pm-border p-4">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-wider text-pm-muted">
            Donations{" "}
            {profile.donations.length > 1
              ? `(${profile.donations.length})`
              : ""}
          </p>
          <div className="flex items-center gap-3 rounded-2xl border border-pm-border bg-pm-soft/40 p-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-pm-blue to-pm-cyan text-white">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 21s-7-4.35-9.5-8.5C.5 9 2 5.5 5.5 5.5c2 0 3.2 1.2 4 2.3.8-1.1 2-2.3 4-2.3C20 5.5 21.5 9 19.5 12.5 17 16.65 12 21 12 21z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="truncate text-[11px] font-extrabold text-pm-navy">
                {donation.title}
              </p>
              {donation.description && (
                <p className="line-clamp-2 text-[9px] leading-relaxed text-pm-muted">
                  {donation.description}
                </p>
              )}
            </div>
            <span className="ml-auto shrink-0 cursor-default rounded-full bg-pm-navy px-2.5 py-1 text-[9px] font-extrabold text-white">
              Give
            </span>
          </div>
        </div>
      )}

      {/* Upcoming events */}
      {event?.title && (
        <div className="border-t border-pm-border p-4">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-wider text-pm-muted">
            Upcoming Event{profile.events.length > 1 ? `s (${profile.events.length})` : ""}
          </p>
          <div className="overflow-hidden rounded-2xl border border-pm-border">
            <div className="relative h-16">
              <Photo
                kind="retreat"
                ratio="auto"
                rounded="rounded-none"
                className="absolute inset-0 !rounded-none h-full"
                overlay="subtle"
              />
            </div>
            <div className="p-3">
              <div className="flex items-start justify-between gap-2">
                <p className="text-[11px] font-extrabold text-pm-navy">
                  {event.title}
                </p>
                {event.price && (
                  <span className="shrink-0 text-[10px] font-extrabold text-pm-blue">
                    {event.price}
                  </span>
                )}
              </div>
              {event.location && (
                <p className="text-[9px] text-pm-muted">{event.location}</p>
              )}
              {event.spots && (
                <p className="mt-1 text-[8px] font-semibold uppercase tracking-wider text-pm-muted">
                  {event.spots} spots available
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
