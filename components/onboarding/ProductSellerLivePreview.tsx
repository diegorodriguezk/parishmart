"use client";

import { Photo } from "@/components/Photo";
import { useProductSeller } from "./ProductSellerContext";

function initials(name: string, fallback = "HC"): string {
  const parts = name.trim().split(/\s+/).filter(Boolean).slice(0, 2);
  if (!parts.length) return fallback;
  return parts.map((w) => w[0]?.toUpperCase() ?? "").join("") || fallback;
}

export function ProductSellerLivePreview() {
  const { profile } = useProductSeller();

  const bizInitials = initials(profile.businessName);
  const founderInitials = initials(profile.founderName, "SM");
  const parishShort = profile.parishSupported
    .replace(/^Saint Katharine Drexel( Parish)?$/i, "SKD")
    .replace(/ Parish$/, "")
    .trim();

  return (
    <>
      {/* HERO — dark navy banner with merch photo */}
      <div className="relative min-h-[210px] overflow-hidden">
        <Photo
          kind="merch"
          ratio="auto"
          rounded="rounded-none"
          className="!rounded-none absolute inset-0 h-full"
          overlay="none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pm-navy/95 via-pm-navy/80 to-transparent" />

        <div className="relative flex h-full gap-3 p-4">
          {/* Left: category + logo + name + parish + description + CTAs */}
          <div className="flex flex-1 flex-col justify-between gap-2 text-white">
            <div className="flex flex-col gap-1.5">
              {profile.productCategory && (
                <span className="text-[8px] font-bold uppercase tracking-widest text-white/50">
                  {profile.productCategory}
                </span>
              )}
              {/* Logo badge */}
              <div className="mb-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white shadow-pm-soft">
                <span className="pm-gradient-text text-[9px] font-extrabold">{bizInitials}</span>
              </div>
              <p className="text-lg font-extrabold leading-none tracking-tight">
                {profile.businessName || (
                  <span className="text-white/40">Business Name</span>
                )}
              </p>
              {parishShort && (
                <p className="text-[9px] font-semibold text-white/60">
                  Supporting {parishShort}
                </p>
              )}
              {profile.shortDescription && (
                <p className="line-clamp-2 text-[9px] leading-relaxed text-white/70">
                  {profile.shortDescription}
                </p>
              )}
            </div>
            <div className="flex gap-1.5">
              <span className="cursor-default rounded-full bg-pm-blue px-2.5 py-1 text-[9px] font-extrabold text-white">
                Shop Products
              </span>
              <span className="cursor-default rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[9px] font-extrabold text-white">
                See Community
              </span>
            </div>
          </div>

          {/* Right: founder card */}
          <div className="w-36 shrink-0 self-center rounded-[16px] border border-pm-border bg-white p-3 shadow-pm-soft">
            <div className="flex items-start gap-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pm-blue to-pm-cyan text-[10px] font-extrabold text-white shadow-pm-soft">
                {founderInitials}
              </div>
              <div className="min-w-0">
                <p className="text-[8px] font-bold uppercase tracking-wider text-pm-blue">Founder</p>
                <p className="mt-0.5 truncate text-[10px] font-extrabold text-pm-navy">
                  {profile.founderName || "Founder Name"}
                </p>
                {profile.productCategory && (
                  <p className="text-[8px] text-pm-muted">{profile.productCategory}</p>
                )}
              </div>
            </div>
            {profile.founderShortDesc && (
              <p className="mt-2 line-clamp-3 text-[8px] leading-relaxed text-pm-muted">
                {profile.founderShortDesc}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ABOUT — long description */}
      {profile.longDescription && (
        <div className="border-t border-pm-border p-4">
          <p className="text-[9px] font-bold uppercase tracking-wider text-pm-blue">
            About Our Business
          </p>
          <p className="mt-1.5 line-clamp-3 text-[10px] leading-relaxed text-pm-muted">
            {profile.longDescription}
          </p>
        </div>
      )}

      {/* PRODUCTS GRID */}
      <div className="border-t border-pm-border p-3">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[9px] font-bold uppercase tracking-wider text-pm-muted">
            Featured Products
          </p>
          <span className="cursor-default text-[9px] text-pm-blue">View all →</span>
        </div>
        {profile.products.length > 0 ? (
          <div className="grid grid-cols-4 gap-1.5">
            {profile.products.slice(0, 4).map((p, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-pm-border">
                <Photo kind="merch" ratio="1/1" rounded="rounded-none" className="!rounded-none" />
                {p.title && (
                  <div className="p-1">
                    <p className="truncate text-[8px] font-bold text-pm-navy">{p.title}</p>
                    {p.price && <p className="text-[8px] text-pm-blue">{p.price}</p>}
                  </div>
                )}
              </div>
            ))}
            {/* Fill remaining slots with placeholders */}
            {Array.from({ length: Math.max(0, 4 - profile.products.length) }).map((_, i) => (
              <div key={`ph-${i}`} className="overflow-hidden rounded-xl border border-dashed border-pm-border bg-pm-soft/40">
                <div className="aspect-square" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-1.5">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-dashed border-pm-border bg-pm-soft/40">
                <div className="aspect-square" />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
