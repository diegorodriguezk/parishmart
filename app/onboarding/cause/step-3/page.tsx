"use client";

import Link from "next/link";
import { Plus, Trash2, ImagePlus } from "lucide-react";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { CauseLivePreview } from "@/components/onboarding/CauseLivePreview";
import { useCause } from "@/components/onboarding/CauseProfileContext";

const STEP_TITLES = ["Profile", "Story", "Donations", "Events", "Media"];

const inputCls =
  "mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue";

export default function CauseStep3() {
  const { profile, updateDonation, addDonation, removeDonation } = useCause();

  return (
    <SellerStepShell
      step={3}
      totalSteps={5}
      allStepTitles={STEP_TITLES}
      badge="Important"
      eyebrow="Step 3 of 5 · Donations"
      title={
        <>
          Set up your <span className="pm-gradient-text">donations</span>.
        </>
      }
      description="Add one or more donation asks supporters can rally around. Each can include a short description and an image."
      preview={<CauseLivePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="mb-5 flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-pm-border bg-pm-soft text-sm font-extrabold text-pm-blue">
            AI
          </span>
          <div>
            <p className="text-xs font-extrabold text-pm-blue">
              ParishMart Concierge
            </p>
            <p className="mt-1 text-sm text-pm-muted">
              A clear, specific donation ask raises more than a generic goal.
              You can add several.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {profile.donations.map((d, i) => (
            <div
              key={i}
              className="rounded-2xl border border-pm-border bg-white p-4 shadow-pm-soft"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-pm-blue">
                  Donation {i + 1}
                </span>
                {profile.donations.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeDonation(i)}
                    aria-label={`Remove donation ${i + 1}`}
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
                  aria-label="Upload donation image"
                >
                  <ImagePlus className="h-5 w-5" aria-hidden />
                </button>
                <div className="grid flex-1 gap-3">
                  <label className="block">
                    <span className="flex items-center justify-between text-xs font-extrabold text-pm-navy">
                      Title
                      <span className="font-normal text-pm-muted">
                        {d.title.length}/30
                      </span>
                    </span>
                    <input
                      maxLength={30}
                      value={d.title}
                      onChange={(e) =>
                        updateDonation(i, { title: e.target.value })
                      }
                      className={inputCls}
                    />
                  </label>
                  <label className="block">
                    <span className="flex items-center justify-between text-xs font-extrabold text-pm-navy">
                      Brief description
                      <span className="font-normal text-pm-muted">
                        {d.description.length}/100
                      </span>
                    </span>
                    <textarea
                      rows={2}
                      maxLength={100}
                      value={d.description}
                      onChange={(e) =>
                        updateDonation(i, { description: e.target.value })
                      }
                      className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
                    />
                  </label>
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addDonation}
            className="inline-flex items-center gap-2 rounded-2xl border border-dashed border-pm-border bg-white px-4 py-3 text-sm font-bold text-pm-blue hover:border-pm-blue hover:bg-pm-soft"
          >
            <Plus className="h-4 w-4" aria-hidden />
            Add another donation
          </button>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/cause/step-2" className="pm-btn pm-btn-secondary">
            Back
          </Link>
          <Link href="/onboarding/cause/step-4" className="pm-btn pm-btn-primary">
            Continue
          </Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
