"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { SellerLivePreview } from "@/components/onboarding/SellerLivePreview";
import { useSellerProfile } from "@/components/onboarding/SellerProfileContext";

export default function LocalBizStep3() {
  const { profile, update, updateService, addService } = useSellerProfile();

  return (
    <SellerStepShell
      step={3}
      eyebrow="Step 3 of 5 · Services, Offer & CTA"
      title={
        <>
          Show your{" "}
          <span className="pm-gradient-text">services and offer</span>.
        </>
      }
      description="Add the services you provide, create a simple community offer, and choose the main call to action."
      preview={<SellerLivePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="mb-5 flex items-start gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-pm-border bg-pm-soft text-sm font-extrabold text-pm-blue">
            AI
          </span>
          <div>
            <p className="text-xs font-extrabold text-pm-blue">
              ParishMart Concierge
            </p>
            <p className="mt-1 text-sm text-pm-muted">
              Services and offer become the primary conversion hooks. The
              preview on the right updates as you type.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block sm:col-span-2">
            <div className="flex items-baseline justify-between">
              <span className="block text-xs font-extrabold text-pm-navy">
                Community Offer / Discount
              </span>
              <span className="text-[10px] font-medium text-pm-muted">
                Optional
              </span>
            </div>
            <input
              value={profile.communityOffer}
              onChange={(e) => update({ communityOffer: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block sm:col-span-2">
            <div className="flex items-baseline justify-between">
              <span className="block text-xs font-extrabold text-pm-navy">
                Short Description of Discount
              </span>
              <span className="text-[10px] font-medium text-pm-muted">
                {profile.offerDescription.length} / 220
              </span>
            </div>
            <textarea
              rows={2}
              maxLength={220}
              value={profile.offerDescription}
              onChange={(e) => update({ offerDescription: e.target.value })}
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <div className="sm:col-span-2">
            <div className="flex items-baseline justify-between">
              <p className="text-xs font-extrabold text-pm-navy">
                Services Offered
              </p>
              <span className="text-[10px] font-medium text-pm-muted">
                Title (30 ch) · Description (100 ch) · Price
              </span>
            </div>
            <div className="mt-2 grid gap-3">
              {profile.services.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-pm-border bg-pm-soft/40 p-4"
                >
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-pm-blue">
                      Service {i + 1}
                    </span>
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-[10px] font-extrabold text-pm-cyan ring-1 ring-pm-border">
                      ✓
                    </span>
                  </div>
                  <div className="grid gap-2.5 sm:grid-cols-[1.2fr_2fr_1fr]">
                    <label className="block">
                      <span className="block text-[10px] font-extrabold uppercase tracking-wider text-pm-muted">
                        Title
                      </span>
                      <input
                        maxLength={30}
                        value={s.title}
                        onChange={(e) =>
                          updateService(i, { title: e.target.value })
                        }
                        className="mt-1 w-full rounded-xl border border-pm-border bg-white px-3 py-2 text-xs font-extrabold text-pm-navy outline-none focus:border-pm-blue"
                      />
                    </label>
                    <label className="block">
                      <span className="block text-[10px] font-extrabold uppercase tracking-wider text-pm-muted">
                        Brief description
                      </span>
                      <input
                        maxLength={100}
                        value={s.description}
                        onChange={(e) =>
                          updateService(i, { description: e.target.value })
                        }
                        className="mt-1 w-full rounded-xl border border-pm-border bg-white px-3 py-2 text-xs text-pm-ink outline-none focus:border-pm-blue"
                      />
                    </label>
                    <label className="block">
                      <span className="block text-[10px] font-extrabold uppercase tracking-wider text-pm-muted">
                        Price
                      </span>
                      <input
                        value={s.price}
                        onChange={(e) =>
                          updateService(i, { price: e.target.value })
                        }
                        placeholder="From $150 · Get a Quote"
                        className="mt-1 w-full rounded-xl border border-pm-border bg-white px-3 py-2 text-xs font-bold text-pm-blue outline-none focus:border-pm-blue"
                      />
                    </label>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addService}
                className="rounded-2xl border border-dashed border-pm-blue/40 bg-pm-soft/30 px-4 py-3 text-xs font-extrabold text-pm-blue transition hover:border-pm-blue hover:bg-pm-soft/60"
              >
                + Add another service
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/local-business/step-2" className="pm-btn pm-btn-secondary">
            Back
          </Link>
          <Link
            href="/onboarding/local-business/step-4"
            className="pm-btn pm-btn-primary"
          >
            Continue
          </Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
