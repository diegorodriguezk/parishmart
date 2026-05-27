import Link from "next/link";
import { ReactNode } from "react";
import { Logo } from "@/components/Logo";

export function SellerStepShell({
  step,
  totalSteps = 5,
  eyebrow,
  title,
  description,
  children,
  preview,
}: {
  step: number;
  totalSteps?: number;
  eyebrow: string;
  title: ReactNode;
  description: string;
  children: ReactNode;
  preview: ReactNode;
}) {
  return (
    <main className="min-h-dvh bg-gradient-to-br from-white via-pm-soft to-white">
      <div className="mx-auto grid min-h-dvh max-w-[1320px] gap-0 px-4 sm:px-6 lg:grid-cols-[1.02fr_.98fr]">
        {/* LEFT */}
        <section className="flex flex-col py-8 lg:pr-8">
          <div className="mb-10 flex items-center justify-between gap-3">
            <Logo />
            <Link
              href="/onboarding"
              className="hidden text-sm font-bold text-pm-blue hover:underline sm:inline"
            >
              Save &amp; Exit
            </Link>
          </div>

          {/* Progress steps */}
          <div className="mb-7 flex w-full max-w-[460px] gap-2">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <span
                key={i}
                className={`h-1.5 flex-1 rounded-full ${
                  i < step
                    ? "bg-gradient-to-r from-pm-blue to-pm-cyan"
                    : "bg-pm-border"
                }`}
              />
            ))}
          </div>

          {/* Eyebrow */}
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-pm-soft px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-pm-blue">
            <span className="grid h-2 w-2 place-items-center rounded-full bg-pm-cyan shadow-[0_0_0_5px_rgba(69,177,225,.18)]" />
            {eyebrow}
          </span>

          <h1 className="mt-4 max-w-[680px] text-4xl font-extrabold leading-tight tracking-tight text-pm-navy md:text-5xl">
            {title}
          </h1>

          <p className="mt-4 max-w-[610px] text-base text-pm-muted md:text-lg">
            {description}
          </p>

          <div className="mt-7 flex-1">{children}</div>
        </section>

        {/* RIGHT — preview */}
        <aside className="flex items-start justify-center py-8 lg:items-center lg:py-12">
          <div className="w-full max-w-[540px]">
            <div className="mb-3 flex items-center justify-between px-1">
              <span className="text-[11px] font-extrabold uppercase tracking-[.16em] text-pm-blue">
                AI Generated Preview
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
