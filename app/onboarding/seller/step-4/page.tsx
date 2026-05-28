import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { ProductSellerLivePreview } from "@/components/onboarding/ProductSellerLivePreview";

export const metadata = { title: "Step 4 · Media · ParishMart" };

const STEP_TITLES = ["Profile", "Story", "Products", "Media", "Launch"];

const UPLOADS = [
  { label: "Business Logo", hint: "PNG, JPG or SVG" },
  { label: "Banner / Cover Photo", hint: "Business, team or products" },
  { label: "Founder Profile Picture", hint: "Professional headshot" },
  { label: "Business Pictures", hint: "Products or workspace · up to 3" },
  { label: "Video", hint: "Optional · 30–60 sec intro · MP4" },
];

export default function SellerStep4() {
  return (
    <SellerStepShell
      step={4}
      totalSteps={5}
      allStepTitles={STEP_TITLES}
      badge="Recommended"
      eyebrow="Step 4 of 5 · Media"
      title={<>Add the visual <span className="pm-gradient-text">trust elements</span> people look for.</>}
      description="Upload your logo, photos and a short intro video. Pages with photos get significantly more engagement."
      preview={<ProductSellerLivePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="mb-5 flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-pm-border bg-pm-soft text-sm font-extrabold text-pm-blue">AI</span>
          <div>
            <p className="text-xs font-extrabold text-pm-blue">ParishMart Concierge</p>
            <p className="mt-1 text-sm text-pm-muted">
              A logo, banner and founder photo transform a listing into a trusted business page.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {UPLOADS.map((u) => (
            <div
              key={u.label}
              className="grid min-h-[128px] cursor-pointer place-items-center rounded-2xl border border-dashed border-pm-blue/40 bg-pm-soft/50 p-4 text-center transition hover:-translate-y-0.5 hover:border-pm-blue hover:shadow-pm-soft"
            >
              <div>
                <p className="text-sm font-extrabold text-pm-navy">{u.label}</p>
                <p className="mt-1 text-xs text-pm-muted">{u.hint}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/seller/step-3" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/seller/step-5" className="pm-btn pm-btn-primary">Continue to Launch</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
