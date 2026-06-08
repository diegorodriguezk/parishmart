"use client";

import { useEffect, useState } from "react";

const PROOFS = [
  "Maria from Weston just supported Youth Ministry · 2 min ago",
  "Carlos donated $50 to Emmaus Retreat Fund · 6 min ago",
  "Familia Rodriguez bought an Emmaus T-Shirt · 11 min ago",
  "Cleveland Hospital boosted SKD wellness · 18 min ago",
  "Casa Manresa added a retreat experience · 24 min ago",
  "Anonymous gave to St Vincent de Paul · 31 min ago",
];

export function LiveProofTicker() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = window.setInterval(
      () => setIdx((i) => (i + 1) % PROOFS.length),
      4000,
    );
    return () => window.clearInterval(t);
  }, []);
  return (
    <div className="pm-card flex items-center gap-3 px-4 py-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-50">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
      </span>
      <p className="truncate text-xs text-pm-ink sm:text-sm">
        <strong className="text-pm-navy">Welcome!</strong> ·{" "}
        <span className="text-pm-muted">{PROOFS[idx]}</span>
      </p>
    </div>
  );
}

export function ParishStats({
  title = "ParishMart Impact",
  description = "Cumulative activity across the platform.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-pm-navy md:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-1 text-sm text-pm-muted">{description}</p>
          ) : null}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { v: "$48.6K", l: "Raised through ParishMart" },
          { v: "1,240", l: "Parishioner supporters" },
          { v: "92", l: "Active businesses" },
          { v: "98%", l: "Approval rate" },
        ].map((s) => (
          <div key={s.l} className="pm-card p-4 text-center sm:text-left">
            <p className="text-xl font-extrabold text-pm-navy sm:text-2xl">
              {s.v}
            </p>
            <p className="mt-1 text-[11px] text-pm-muted">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Testimonial({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <figure className="pm-card p-5">
      <blockquote className="text-sm text-pm-ink">"{quote}"</blockquote>
      <figcaption className="mt-3 flex items-center gap-3">
        <span className="pm-avatar !h-9 !w-9 rounded-xl text-xs">
          {author
            .split(" ")
            .map((s) => s[0])
            .slice(0, 2)
            .join("")}
        </span>
        <div>
          <p className="text-xs font-bold text-pm-navy">{author}</p>
          <p className="text-[11px] text-pm-muted">{role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
