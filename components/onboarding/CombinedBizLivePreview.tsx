"use client";

import { Gift, MapPin } from "lucide-react";
import { Photo } from "@/components/Photo";
import { useCombinedBiz } from "./CombinedBizContext";

export function CombinedBizLivePreview() {
  const { profile } = useCombinedBiz();
  const initials = profile.businessName
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0] ?? "")
    .join("")
    .toUpperCase();
  const location = [profile.city, profile.state].filter(Boolean).join(", ");

  return (
    <div className="text-sm">
      {/* Hero */}
      <div className="relative isolate min-h-[180px] overflow-hidden">
        <Photo
          kind="business"
          ratio="auto"
          rounded="rounded-none"
          className="absolute inset-0 -z-10 !rounded-none h-full"
          overlay="none"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
        <div className="flex h-full flex-col gap-3 p-5 text-white">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-sm font-extrabold text-pm-navy">
            {initials || "B"}
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-white/75">
              {profile.mainCategory || profile.offerType}
            </p>
            <p className="text-xl font-extrabold leading-tight">
              {profile.businessName || "Your business"}
            </p>
            <p className="mt-0.5 max-w-xs text-xs text-white/85">
              {profile.headline}
            </p>
            {location ? (
              <p className="mt-1 inline-flex items-center gap-1 text-xs text-white/85">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                {location}
              </p>
            ) : null}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-4 p-5">
        {profile.discount ? (
          <div className="flex items-start gap-3 rounded-2xl border border-pm-blue/20 bg-pm-soft p-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-pm-blue text-white">
              <Gift className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                Special Community Discount
              </p>
              <p className="text-base font-extrabold text-pm-blue">
                {profile.discount}
              </p>
              {profile.discountDesc ? (
                <p className="text-[11px] text-pm-navy/80">
                  {profile.discountDesc}
                </p>
              ) : null}
            </div>
          </div>
        ) : null}

        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-pm-muted">
            About
          </p>
          <p className="mt-1 line-clamp-4 text-xs text-pm-muted">
            {profile.description}
          </p>
        </div>

        {profile.founderName ? (
          <div className="rounded-2xl border border-pm-border bg-white p-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
              Founder
            </p>
            <p className="text-sm font-extrabold text-pm-navy">
              {profile.founderName}
            </p>
            <p className="line-clamp-2 text-[11px] text-pm-muted">
              {profile.founderDesc}
            </p>
          </div>
        ) : null}

        {profile.offerings.length ? (
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-pm-muted">
              {profile.offerType === "Products" ? "Products" : "Offerings"}
            </p>
            <div className="mt-2 grid gap-2">
              {profile.offerings.slice(0, 4).map((o, i) => (
                <div
                  key={`${o.title}-${i}`}
                  className="flex items-center gap-3 rounded-xl border border-pm-border bg-white p-2"
                >
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg">
                    <Photo kind="merch" ratio="1/1" rounded="rounded-lg" overlay="none" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold text-pm-navy">
                      {o.title || "Untitled"}
                    </p>
                    <p className="truncate text-[11px] text-pm-muted">
                      {o.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {profile.parishSupported ? (
          <p className="text-[11px] text-pm-muted">
            Supports{" "}
            <span className="font-bold text-pm-blue">
              {profile.parishSupported}
            </span>
          </p>
        ) : null}
      </div>
    </div>
  );
}
