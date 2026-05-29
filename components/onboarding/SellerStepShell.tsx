"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { Check } from "lucide-react";

const DEFAULT_STEP_TITLES = ["Profile", "Story", "Services", "Media", "Launch"];

export function SellerStepShell({
  step,
  totalSteps = 5,
  allStepTitles,
  eyebrow,
  title,
  description,
  children,
  preview,
}: {
  step: number;
  totalSteps?: number;
  allStepTitles?: string[];
  badge?: "Required" | "Recommended" | "Important" | "Final";
  eyebrow: string;
  title: ReactNode;
  description: string;
  children: ReactNode;
  preview: ReactNode;
}) {
  const titles = allStepTitles ?? DEFAULT_STEP_TITLES.slice(0, totalSteps);
  const pathname = usePathname() ?? "";
  const basePath = pathname.replace(/\/step-\d+\/?$/, "");

  return (
    <main className="min-h-dvh bg-gradient-to-br from-white via-pm-soft to-white">
      <div className="mx-auto grid min-h-dvh max-w-[1320px] gap-0 px-4 sm:px-6 lg:grid-cols-[1.02fr_.98fr]">

        {/* ── LEFT ── */}
        <section className="flex flex-col py-8 lg:pr-8">

          {/* Top bar */}
          <div className="mb-10 flex items-center justify-between gap-3">
            <Logo />
          </div>

          {/* Step label */}
          <div className="mb-4 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full bg-pm-soft px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-pm-blue">
              <span className="h-2 w-2 rounded-full bg-pm-cyan shadow-[0_0_0_5px_rgba(69,177,225,.18)]" />
              {eyebrow}
            </span>
          </div>

          {/* Numbered step progress */}
          <div className="mb-8 flex max-w-[440px] items-start">
            {Array.from({ length: totalSteps }).map((_, i) => {
              const n = i + 1;
              const isDone = n < step;
              const isActive = n === step;
              const href = `${basePath}/step-${n}`;
              return (
                <Fragment key={i}>
                  {/* Circle + label (clickable) */}
                  <Link
                    href={href}
                    aria-label={`Go to step ${n}: ${titles[i] ?? `Step ${n}`}`}
                    aria-current={isActive ? "step" : undefined}
                    className="group flex shrink-0 flex-col items-center gap-1.5 rounded-lg transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-pm-blue focus-visible:ring-offset-2"
                  >
                    <span
                      className={[
                        "grid h-7 w-7 place-items-center rounded-full text-[11px] font-extrabold transition-all group-hover:scale-110",
                        isActive
                          ? "bg-gradient-to-br from-pm-blue to-pm-cyan text-white shadow-[0_0_0_4px_rgba(69,177,225,.18)]"
                          : isDone
                          ? "bg-pm-blue/15 text-pm-blue"
                          : "border border-pm-border bg-white text-pm-muted group-hover:border-pm-blue group-hover:text-pm-blue",
                      ].join(" ")}
                    >
                      {isDone ? (
                        <Check className="h-3 w-3" strokeWidth={2.5} />
                      ) : (
                        n
                      )}
                    </span>
                    <span
                      className={[
                        "hidden text-[9px] font-bold uppercase tracking-wider lg:block",
                        isActive
                          ? "text-pm-blue"
                          : isDone
                          ? "text-pm-blue/60"
                          : "text-pm-muted group-hover:text-pm-blue",
                      ].join(" ")}
                    >
                      {titles[i] ?? `Step ${n}`}
                    </span>
                  </Link>
                  {/* Connecting line */}
                  {i < totalSteps - 1 && (
                    <span
                      aria-hidden
                      className={[
                        "mx-2 mt-3.5 h-px flex-1",
                        n < step ? "bg-pm-blue/30" : "bg-pm-border",
                      ].join(" ")}
                    />
                  )}
                </Fragment>
              );
            })}
          </div>

          {/* Headline */}
          <h1 className="max-w-[680px] text-4xl font-extrabold leading-tight tracking-tight text-pm-navy md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-[610px] text-base text-pm-muted md:text-lg">
            {description}
          </p>

          <div className="mt-7 flex-1">{children}</div>
        </section>

        {/* ── RIGHT — sticky preview ── */}
        <aside className="flex items-start justify-center py-8 lg:sticky lg:top-8 lg:max-h-[calc(100vh-2rem)] lg:self-start lg:overflow-y-auto lg:py-12">
          <div className="w-full max-w-[520px]">
            <div className="mb-3 flex items-center justify-between px-1">
              <span className="text-[11px] font-extrabold uppercase tracking-[.16em] text-pm-blue">
                Live Preview
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-pm-muted">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_5px_rgba(16,185,129,.15)]" />
                Updating live
              </span>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-pm-border bg-white shadow-pm-card">
              {preview}
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
}
