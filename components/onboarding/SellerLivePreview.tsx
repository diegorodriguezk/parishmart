"use client";

import { Photo } from "@/components/Photo";
import { useSellerProfile } from "./SellerProfileContext";

function initialsOf(name: string, fallback = "MS"): string {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);
  if (!parts.length) return fallback;
  return parts.map((w) => w[0]?.toUpperCase() ?? "").join("") || fallback;
}

export function SellerLivePreview() {
  const { profile } = useSellerProfile();

  const initials = initialsOf(profile.businessName);
  const cityState = [profile.city, profile.state].filter(Boolean).join(", ");
  const supportsTag = profile.parishSupported
    ? `Supports ${profile.parishSupported.replace(/^Saint Katharine Drexel Parish$/i, "SKD").replace(/Parish$/, "").trim() || "SKD"}`
    : "";
  const tags = [cityState, supportsTag, profile.serviceCategory].filter(
    Boolean,
  );

  const ownerName = profile.ownerName || profile.contactFullName;
  const ownerRole = profile.serviceCategory
    ? `${profile.serviceCategory} · ${profile.parishSupported ? "Community supporter" : "Local business"}`
    : "Local business owner";

  return (
    <>
      {/* HERO */}
      <div className="relative min-h-[200px] overflow-hidden">
        <Photo
          kind="business"
          ratio="auto"
          rounded="rounded-none"
          className="!rounded-none absolute inset-0 h-full"
          overlay="none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/10" />
        <div className="relative flex items-start gap-4 p-5">
          <div className="flex flex-1 flex-col gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan text-xs font-extrabold text-white shadow-pm-soft">
              {initials}
            </span>
            <div>
              <h3 className="text-lg font-extrabold leading-tight tracking-tight text-pm-navy">
                {profile.businessName || "Your Business Name"}
              </h3>
              <p className="line-clamp-2 text-[11px] text-pm-muted">
                {profile.businessDescription ||
                  "Tell us about your business — your description will appear here."}
              </p>
            </div>
            {tags.length ? (
              <div className="flex flex-wrap gap-1">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-pm-border bg-white px-2 py-0.5 text-[9px] font-medium text-pm-navy"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
            <div className="flex gap-2">
              <span className="cursor-default rounded-full bg-pm-navy px-3 py-1.5 text-[10px] font-extrabold text-white">
                {profile.mainCta || "View Services"}
              </span>
              <span className="cursor-default rounded-full border border-pm-border bg-white px-3 py-1.5 text-[10px] font-extrabold text-pm-navy">
                Share
              </span>
            </div>
          </div>
          {profile.communityOffer ? (
            <div className="w-28 shrink-0 rounded-[20px] border border-pm-border bg-white p-3 shadow-pm-soft">
              <p className="text-[10px] font-extrabold text-pm-navy">
                Parishioner Coupon
              </p>
              <p className="mt-0.5 line-clamp-2 text-[9px] text-pm-muted">
                {profile.offerDescription || "Exclusive community offer."}
              </p>
              <div className="mt-2 rounded-xl bg-gradient-to-br from-pm-blue to-pm-cyan p-2.5 text-white">
                <p className="text-[7px] font-bold uppercase tracking-wider opacity-80">
                  Community offer
                </p>
                <p className="line-clamp-1 text-xs font-extrabold leading-none">
                  {profile.communityOffer}
                </p>
                {profile.offerExpiration ? (
                  <p className="mt-0.5 text-[8px] opacity-90">
                    {profile.offerExpiration}
                  </p>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* FOUNDER */}
      <div className="grid grid-cols-[1fr_1fr] border-t border-pm-border">
        <div className="flex flex-col justify-center gap-2 p-4">
          <p className="text-[9px] font-bold uppercase tracking-wider text-pm-blue">
            Meet the founder
          </p>
          <p className="text-sm font-extrabold text-pm-navy">{ownerName}</p>
          <p className="text-[10px] text-pm-muted">{ownerRole}</p>
          <p className="line-clamp-3 text-[10px] leading-relaxed text-pm-muted">
            {profile.aboutOwner ||
              "Add a short story about the founder so parishioners can connect with the person behind the business."}
          </p>
        </div>
        <div className="relative overflow-hidden">
          <Photo
            kind="retreat"
            ratio="auto"
            rounded="rounded-none"
            className="!rounded-none !border-0 absolute inset-0 h-full"
          />
        </div>
      </div>

      {/* SERVICES */}
      <div className="grid grid-cols-[1fr_1fr] border-t border-pm-border">
        <div className="relative min-h-[140px] overflow-hidden">
          <Photo
            kind="retreat"
            ratio="auto"
            rounded="rounded-none"
            className="!rounded-none absolute inset-0 h-full"
            overlay="strong"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-pm-card">
              <svg
                className="h-4 w-4 translate-x-0.5 text-pm-blue"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1 p-4">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-wider text-pm-blue">
            Services
          </p>
          {profile.services.length ? (
            profile.services.slice(0, 4).map((s, i) => (
              <div
                key={`${s.title}-${i}`}
                className="flex items-center justify-between gap-2 border-b border-pm-border/50 py-1 last:border-0"
              >
                <p className="line-clamp-1 text-[10px] font-medium text-pm-navy">
                  {s.title || `Service ${i + 1}`}
                </p>
                <span className="shrink-0 text-[10px] font-bold text-pm-blue">
                  {s.price || "Quote"}
                </span>
              </div>
            ))
          ) : (
            <p className="text-[10px] text-pm-muted">
              Add services to see them here.
            </p>
          )}
          <span className="mt-2 cursor-default rounded-full bg-pm-navy py-1.5 text-center text-[10px] font-extrabold text-white">
            Contact us
          </span>
        </div>
      </div>
    </>
  );
}
