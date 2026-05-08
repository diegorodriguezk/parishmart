import Link from "next/link";
import { ReactNode } from "react";
import { Photo } from "./Photo";

export type OnboardingStep = {
  n: number;
  title: string;
  description: string;
};

export function OnboardingLayout({
  kicker,
  title,
  intro,
  steps,
  children,
  preview,
}: {
  kicker: string;
  title: ReactNode;
  intro: string;
  steps: OnboardingStep[];
  children: ReactNode;
  preview: ReactNode;
}) {
  return (
    <main className="mx-auto grid max-w-[1320px] gap-6 px-6 py-10 lg:grid-cols-[260px_1fr_320px]">
      <aside className="pm-card h-fit p-5">
        <h3 className="text-sm font-bold text-pm-navy">Activation Flow</h3>
        <ol className="mt-4 space-y-4">
          {steps.map((s) => (
            <li key={s.n} className="flex gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-pm-blue to-pm-cyan text-xs font-extrabold text-white">
                {s.n}
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-pm-navy">{s.title}</span>
                <span className="text-xs text-pm-muted">{s.description}</span>
              </div>
            </li>
          ))}
        </ol>
      </aside>

      <section className="space-y-6">
        <div className="relative isolate overflow-hidden rounded-3xl border border-pm-border shadow-pm-card p-6 sm:p-8 min-h-[220px]">
          <Photo
            kind="business"
            ratio="auto"
            rounded="rounded-none"
            className="absolute inset-0 -z-10 !rounded-none"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/95 via-white/80 to-white/40" />
          <span className="pm-kicker">{kicker}</span>
          <h1 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-pm-navy md:text-4xl">
            {title}
          </h1>
          <p className="mt-2 max-w-xl text-sm text-pm-muted">{intro}</p>
        </div>
        <div className="pm-card p-7">{children}</div>
      </section>

      <aside className="space-y-5">{preview}</aside>
    </main>
  );
}

export function FormField({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-bold text-pm-navy">{label}</span>
      {children}
    </label>
  );
}

export function FormInput({
  defaultValue,
  placeholder,
}: {
  defaultValue?: string;
  placeholder?: string;
}) {
  return (
    <input
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="rounded-2xl border border-pm-border bg-white px-4 py-2.5 text-sm text-pm-ink shadow-pm-soft focus:border-pm-blue focus:outline-none"
    />
  );
}

export function FormSelect({
  options,
  defaultValue,
}: {
  options: string[];
  defaultValue?: string;
}) {
  return (
    <select
      defaultValue={defaultValue}
      className="rounded-2xl border border-pm-border bg-white px-4 py-2.5 text-sm text-pm-ink shadow-pm-soft focus:border-pm-blue focus:outline-none"
    >
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );
}

export function FormFooter({
  primary = "Continue",
  primaryHref,
  secondary = "Save Draft",
}: {
  primary?: string;
  primaryHref: string;
  secondary?: string;
}) {
  return (
    <div className="flex items-center gap-3 pt-2">
      <Link href={primaryHref} className="pm-btn pm-btn-primary">
        {primary}
      </Link>
      <button type="button" className="pm-btn pm-btn-secondary">
        {secondary}
      </button>
    </div>
  );
}
