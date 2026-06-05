"use client";

import Link from "next/link";
import { Plus, Trash2, ImagePlus } from "lucide-react";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { CauseLivePreview } from "@/components/onboarding/CauseLivePreview";
import { useCause } from "@/components/onboarding/CauseProfileContext";

const STEP_TITLES = ["Profile", "Story", "Donations", "Events", "Media"];

const EVENT_CATEGORIES = [
  "Retreat",
  "Workshop",
  "Fundraiser",
  "Service",
  "Social",
  "Other",
];

const inputCls =
  "mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue";

export default function CauseStep4() {
  const { profile, updateEvent, addEvent, removeEvent } = useCause();

  return (
    <SellerStepShell
      step={4}
      totalSteps={5}
      allStepTitles={STEP_TITLES}
      badge="Recommended"
      eyebrow="Step 4 of 5 · Upcoming Events"
      title={
        <>
          Add your <span className="pm-gradient-text">upcoming events</span>.
        </>
      }
      description="Optional. Add events your community can join — each with dates, location, price and details."
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
              Events give supporters a reason to show up. You can add as many as
              you like, or skip this step.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {profile.events.map((ev, i) => (
            <div
              key={i}
              className="rounded-2xl border border-pm-border bg-white p-4 shadow-pm-soft"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-pm-blue">
                  Event {i + 1}
                </span>
                <button
                  type="button"
                  onClick={() => removeEvent(i)}
                  aria-label={`Remove event ${i + 1}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-pm-muted hover:text-pm-navy"
                >
                  <Trash2 className="h-3.5 w-3.5" aria-hidden />
                  Remove
                </button>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl border border-dashed border-pm-border bg-pm-soft/50 text-pm-blue hover:border-pm-blue"
                  aria-label="Upload event image"
                >
                  <ImagePlus className="h-5 w-5" aria-hidden />
                </button>
                <div className="grid flex-1 gap-3">
                  <label className="block">
                    <span className="flex items-center justify-between text-xs font-extrabold text-pm-navy">
                      Title
                      <span className="font-normal text-pm-muted">
                        {ev.title.length}/30
                      </span>
                    </span>
                    <input
                      maxLength={30}
                      value={ev.title}
                      onChange={(e) => updateEvent(i, { title: e.target.value })}
                      className={inputCls}
                    />
                  </label>
                  <label className="block">
                    <span className="block text-xs font-extrabold text-pm-navy">
                      Location
                    </span>
                    <input
                      value={ev.location}
                      onChange={(e) =>
                        updateEvent(i, { location: e.target.value })
                      }
                      className={inputCls}
                    />
                  </label>
                </div>
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="block text-xs font-extrabold text-pm-navy">
                    Start Date &amp; Time
                  </span>
                  <input
                    type="datetime-local"
                    value={ev.startDateTime}
                    onChange={(e) =>
                      updateEvent(i, { startDateTime: e.target.value })
                    }
                    className={inputCls}
                  />
                </label>
                <label className="block">
                  <span className="block text-xs font-extrabold text-pm-navy">
                    End Date &amp; Time
                  </span>
                  <input
                    type="datetime-local"
                    value={ev.endDateTime}
                    onChange={(e) =>
                      updateEvent(i, { endDateTime: e.target.value })
                    }
                    className={inputCls}
                  />
                </label>
              </div>

              <label className="mt-3 block">
                <span className="flex items-center justify-between text-xs font-extrabold text-pm-navy">
                  Brief description
                  <span className="font-normal text-pm-muted">
                    {ev.briefDescription.length}/100
                  </span>
                </span>
                <textarea
                  rows={2}
                  maxLength={100}
                  value={ev.briefDescription}
                  onChange={(e) =>
                    updateEvent(i, { briefDescription: e.target.value })
                  }
                  className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
                />
              </label>

              <label className="mt-3 block">
                <span className="flex items-center justify-between text-xs font-extrabold text-pm-navy">
                  Long description
                  <span className="font-normal text-pm-muted">
                    {ev.longDescription.length}/100
                  </span>
                </span>
                <textarea
                  rows={3}
                  maxLength={100}
                  value={ev.longDescription}
                  onChange={(e) =>
                    updateEvent(i, { longDescription: e.target.value })
                  }
                  className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
                />
              </label>

              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                <label className="block">
                  <span className="block text-xs font-extrabold text-pm-navy">
                    Price
                  </span>
                  <input
                    value={ev.price}
                    onChange={(e) => updateEvent(i, { price: e.target.value })}
                    placeholder="$0 or Free"
                    className={inputCls}
                  />
                </label>
                <label className="block">
                  <span className="block text-xs font-extrabold text-pm-navy">
                    Available Spots
                  </span>
                  <input
                    type="number"
                    value={ev.spots}
                    onChange={(e) => updateEvent(i, { spots: e.target.value })}
                    className={inputCls}
                  />
                </label>
                <label className="block">
                  <span className="block text-xs font-extrabold text-pm-navy">
                    Category
                  </span>
                  <select
                    value={ev.category}
                    onChange={(e) =>
                      updateEvent(i, { category: e.target.value })
                    }
                    className={inputCls}
                  >
                    <option value="">Select</option>
                    {EVENT_CATEGORIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addEvent}
            className="inline-flex items-center gap-2 rounded-2xl border border-dashed border-pm-border bg-white px-4 py-3 text-sm font-bold text-pm-blue hover:border-pm-blue hover:bg-pm-soft"
          >
            <Plus className="h-4 w-4" aria-hidden />
            Add another event
          </button>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/cause/step-3" className="pm-btn pm-btn-secondary">
            Back
          </Link>
          <Link href="/onboarding/cause/step-5" className="pm-btn pm-btn-primary">
            Continue
          </Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
