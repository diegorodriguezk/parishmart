import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { ParishStorePreview } from "@/components/onboarding/OnboardingPreviews";

export const metadata = { title: "Step 3 · Ministries & Modules · ParishMart" };

const STEP_TITLES = ["Profile", "Story", "Modules", "Launch"];

const MODULES = [
  { key: "shop",      label: "Shop",       desc: "Products and retreat merch." },
  { key: "give",      label: "Give",       desc: "Giving campaigns and goals." },
  { key: "sponsors",  label: "Sponsors",   desc: "Local sponsors and offers." },
  { key: "community", label: "Local Biz",  desc: "Businesses supporting the cause." },
  { key: "story",     label: "Story",      desc: "Photos, videos and reviews." },
  { key: "share",     label: "Share",      desc: "Viral impact sharing cards." },
];

const MINISTRIES = [
  "Emmaus Men", "Emmaus Women", "Youth Ministry", "St. Vincent de Paul",
  "RCIA", "Baptism Prep", "Marriage Prep", "Prayer Group", "Choir", "Other",
];

export default function ParishStep3() {
  return (
    <SellerStepShell
      step={3}
      totalSteps={4}
      allStepTitles={STEP_TITLES}
      badge="Recommended"
      eyebrow="Step 3 of 4 · Ministries & Modules"
      title={<>Choose your <span className="pm-gradient-text">experience modules</span>.</>}
      description="Select the features that appear on your parish store page and which active ministries to highlight."
      preview={<ParishStorePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="mb-5 flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-pm-border bg-pm-soft text-sm font-extrabold text-pm-blue">
            AI
          </span>
          <div>
            <p className="text-xs font-extrabold text-pm-blue">ParishMart Concierge</p>
            <p className="mt-1 text-sm text-pm-muted">
              Enable modules you need now. You can add more anytime from your parish dashboard.
            </p>
          </div>
        </div>

        <p className="mb-3 text-xs font-bold text-pm-navy">Experience modules</p>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {MODULES.map((m) => (
            <label
              key={m.key}
              className="flex cursor-pointer items-start gap-3 rounded-2xl border border-pm-border bg-pm-soft/40 p-3.5 has-[:checked]:border-pm-blue has-[:checked]:bg-pm-soft"
            >
              <input
                type="checkbox"
                defaultChecked={["shop", "give", "community"].includes(m.key)}
                className="mt-0.5"
              />
              <div>
                <p className="text-sm font-bold text-pm-navy">{m.label}</p>
                <p className="text-xs text-pm-muted">{m.desc}</p>
              </div>
            </label>
          ))}
        </div>

        <p className="mb-3 mt-7 text-xs font-bold text-pm-navy">Active Ministries</p>
        <div className="flex flex-wrap gap-2">
          {MINISTRIES.map((m) => (
            <label
              key={m}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-pm-border bg-white px-3.5 py-2 text-sm font-medium text-pm-navy has-[:checked]:border-pm-blue has-[:checked]:bg-pm-soft"
            >
              <input
                type="checkbox"
                defaultChecked={["Emmaus Men", "Emmaus Women", "Youth Ministry"].includes(m)}
                className="sr-only"
              />
              {m}
            </label>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/parish/step-2" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/parish/step-4" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
