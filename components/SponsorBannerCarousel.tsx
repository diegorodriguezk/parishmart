"use client";

import { useEffect, useState } from "react";
import { Photo, PhotoKind } from "./Photo";

type Banner = {
  kind: PhotoKind;
  kicker: string;
  title: string;
  description: string;
  offer: string;
  offerCaption: string;
};

const DEFAULT_BANNERS: Banner[] = [
  {
    kind: "business",
    kicker: "Featured Sponsor",
    title: "Cleveland Hospital",
    description: "Healthcare partner supporting SKD families with wellness initiatives.",
    offer: "$100 health credit",
    offerCaption: "Available for SKD parishioners.",
  },
  {
    kind: "house",
    kicker: "Banner 2 · Spring campaign",
    title: "Family wellness with Cleveland Hospital",
    description: "Free health screenings and family wellness sessions for parishioners this spring.",
    offer: "Free screening",
    offerCaption: "Selected weekends · April–June.",
  },
  {
    kind: "community",
    kicker: "Banner 3 · Community days",
    title: "Walk-in care for the parish community",
    description: "Cleveland Hospital sponsors community health days inside the SKD parish.",
    offer: "Community day",
    offerCaption: "Open to all SKD families.",
  },
];

export function SponsorBannerCarousel({
  banners = DEFAULT_BANNERS,
}: {
  banners?: Banner[];
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = window.setInterval(
      () => setIdx((i) => (i + 1) % banners.length),
      6000,
    );
    return () => window.clearInterval(t);
  }, [banners.length]);

  const b = banners[idx];

  return (
    <div className="pm-dark-panel relative overflow-hidden !p-0">
      <div className="absolute inset-0 -z-0 opacity-30">
        <Photo kind={b.kind} ratio="auto" rounded="rounded-none" className="!rounded-none h-full" />
      </div>
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-6 p-6 sm:p-10">
        <div className="space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">
            {b.kicker}
          </p>
          <h2 className="text-2xl font-extrabold md:text-3xl">{b.title}</h2>
          <p className="max-w-md text-sm text-white/80">{b.description}</p>
        </div>
        <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-right">
          <p className="text-[10px] uppercase tracking-wider text-white/70">
            Featured sponsor benefit
          </p>
          <p className="mt-1 text-3xl font-extrabold">{b.offer}</p>
          <p className="text-xs text-white/70">{b.offerCaption}</p>
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-center gap-2 pb-4">
        {banners.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIdx(i)}
            aria-label={`Show banner ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-6 bg-white" : "w-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
