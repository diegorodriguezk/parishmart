"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { ParishLivePreview } from "@/components/onboarding/ParishLivePreview";
import { useParish, type ParishProfile } from "@/components/onboarding/ParishProfileContext";

const STEP_TITLES = ["Profile", "Story", "Modules", "Launch"];

const FIELDS: { label: string; key: keyof ParishProfile; type?: string }[] = [
  { label: "Parish Name",   key: "parishName" },
  { label: "City",          key: "city" },
  { label: "State",         key: "state" },
  { label: "Zip Code",      key: "zipCode" },
  { label: "Address",       key: "address" },
  { label: "Phone",         key: "phone", type: "tel" },
  { label: "Email",         key: "email", type: "email" },
  { label: "Website",       key: "website" },
  { label: "Contact Name",  key: "contactName" },
  { label: "Contact Email", key: "contactEmail", type: "email" },
];

export default function ParishStep1() {
  const { profile, update } = useParish();

  return (
    <SellerStepShell
      step={1}
      totalSteps={4}
      allStepTitles={STEP_TITLES}
      badge="Required"
      eyebrow="Step 1 of 4 · Parish Profile"
      title={<>Activate your <span className="pm-gradient-text">parish community</span>.</>}
      description="Basic information to create your parish store page — where supporters can shop, give and discover your community."
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
              Start simple — the preview on the right updates live as you type.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {FIELDS.map((f) => (
            <label key={f.key} className="block">
              <span className="block text-xs font-extrabold text-pm-navy">{f.label}</span>
              <input
                type={f.type ?? "text"}
                value={profile[f.key]}
                onChange={(e) => update({ [f.key]: e.target.value })}
                className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
              />
            </label>
          ))}
          <label className="block sm:col-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">Short Parish Description</span>
            <textarea
              rows={3}
              value={profile.shortDescription}
              onChange={(e) => update({ shortDescription: e.target.value })}
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/parish" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/parish/step-2" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
