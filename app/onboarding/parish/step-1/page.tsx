"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { ParishLivePreview } from "@/components/onboarding/ParishLivePreview";
import { useParish, type ParishProfile } from "@/components/onboarding/ParishProfileContext";

const STEP_TITLES = ["Profile", "Story", "Modules", "Donations", "Media", "Launch"];

const FIELDS: { label: string; key: keyof ParishProfile; type?: string; span?: boolean; optional?: boolean }[] = [
  { label: "Parish Name",      key: "parishName", span: true },
  { label: "Address",          key: "address", span: true },
  { label: "City",             key: "city" },
  { label: "State",            key: "state" },
  { label: "Country",          key: "country", span: true },
  { label: "Contact Full Name", key: "contactFullName" },
  { label: "Phone",            key: "phone", type: "tel" },
  { label: "Email",            key: "email", type: "email" },
  { label: "Website or Social Media", key: "websiteOrSocial", optional: true },
  { label: "Father Name",      key: "fatherName", span: true },
];

export default function ParishStep1() {
  const { profile, update } = useParish();

  return (
    <SellerStepShell
      step={1}
      totalSteps={6}
      allStepTitles={STEP_TITLES}
      badge="Required"
      eyebrow="Step 1 of 6 · Parish Profile"
      title={<>Activate your <span className="pm-gradient-text">parish community</span>.</>}
      description="Basic information to create your parish store page — the preview on the right updates live as you type."
      preview={<ParishLivePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="mb-5 flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-pm-border bg-pm-soft text-sm font-extrabold text-pm-blue">
            AI
          </span>
          <div>
            <p className="text-xs font-extrabold text-pm-blue">ParishMart Concierge</p>
            <p className="mt-1 text-sm text-pm-muted">
              Start with the basics. You can add your story, modules, donations, events and media in the next steps.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {FIELDS.map((f) => (
            <label key={f.key} className={f.span ? "block sm:col-span-2" : "block"}>
              <span className="block text-xs font-extrabold text-pm-navy">
                {f.label}
                {f.optional && <span className="font-normal text-pm-muted"> (optional)</span>}
              </span>
              <input
                type={f.type ?? "text"}
                value={profile[f.key] as string}
                onChange={(e) => update({ [f.key]: e.target.value })}
                className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
              />
            </label>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/parish" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/parish/step-2" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
