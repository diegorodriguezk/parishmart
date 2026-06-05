"use client";

import Link from "next/link";
import { Plus, Trash2, ImagePlus } from "lucide-react";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { CombinedBizLivePreview } from "@/components/onboarding/CombinedBizLivePreview";
import { useCombinedBiz } from "@/components/onboarding/CombinedBizContext";

const STEP_TITLES = ["Business", "Contact", "Story", "Offerings", "Media"];

const inputCls =
  "mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue";

export default function CombinedStep4() {
  const { profile, updateOffering, addOffering, removeOffering } =
    useCombinedBiz();

  const noun = profile.offerType === "Services" ? "service" : "offering";

  return (
    <SellerStepShell
      step={4}
      allStepTitles={STEP_TITLES}
      eyebrow="Step 4 of 5 · Offerings"
      title={
        <>
          List your <span className="pm-gradient-text">offerings</span>.
        </>
      }
      description="Add the products or services you offer. Each one can include a short description and a photo."
      preview={<CombinedBizLivePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="space-y-4">
          {profile.offerings.map((o, i) => (
            <div
              key={i}
              className="rounded-2xl border border-pm-border bg-white p-4 shadow-pm-soft"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-pm-blue">
                  {noun} {i + 1}
                </span>
                {profile.offerings.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeOffering(i)}
                    aria-label={`Remove ${noun} ${i + 1}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-pm-muted hover:text-pm-navy"
                  >
                    <Trash2 className="h-3.5 w-3.5" aria-hidden />
                    Remove
                  </button>
                )}
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl border border-dashed border-pm-border bg-pm-soft/50 text-pm-blue hover:border-pm-blue"
                  aria-label="Add photo"
                >
                  <ImagePlus className="h-5 w-5" aria-hidden />
                </button>
                <div className="grid flex-1 gap-3">
                  <label className="block">
                    <div className="flex items-baseline justify-between">
                      <span className="block text-xs font-extrabold text-pm-navy">
                        Title
                      </span>
                      <span className="text-[10px] font-medium text-pm-muted">
                        {o.title.length} / 30
                      </span>
                    </div>
                    <input
                      maxLength={30}
                      value={o.title}
                      onChange={(e) =>
                        updateOffering(i, { title: e.target.value })
                      }
                      className={inputCls}
                    />
                  </label>
                  <label className="block">
                    <div className="flex items-baseline justify-between">
                      <span className="block text-xs font-extrabold text-pm-navy">
                        Brief description
                      </span>
                      <span className="text-[10px] font-medium text-pm-muted">
                        {o.description.length} / 100
                      </span>
                    </div>
                    <input
                      maxLength={100}
                      value={o.description}
                      onChange={(e) =>
                        updateOffering(i, { description: e.target.value })
                      }
                      className={inputCls}
                    />
                  </label>
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addOffering}
            className="inline-flex items-center gap-2 rounded-2xl border border-dashed border-pm-border bg-white px-4 py-3 text-sm font-bold text-pm-blue hover:border-pm-blue hover:bg-pm-soft"
          >
            <Plus className="h-4 w-4" aria-hidden />
            Add another {noun}
          </button>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link
            href="/onboarding/local-business-combined/step-3"
            className="pm-btn pm-btn-secondary"
          >
            Back
          </Link>
          <Link
            href="/onboarding/local-business-combined/step-5"
            className="pm-btn pm-btn-primary"
          >
            Continue
          </Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
