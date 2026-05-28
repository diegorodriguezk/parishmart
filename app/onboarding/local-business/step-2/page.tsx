"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { SellerLivePreview } from "@/components/onboarding/SellerLivePreview";
import { useSellerProfile } from "@/components/onboarding/SellerProfileContext";

const SUPPORTED_OPTIONS = [
  "Saint Katharine Drexel Parish",
  "SKD Emmaus Ministry",
  "St. Vincent de Paul Weston",
  "Youth Ministry",
];

export default function LocalBizStep2() {
  const { profile, update } = useSellerProfile();

  return (
    <SellerStepShell
      step={2}
      eyebrow="Step 2 of 5 · Owner Story & Community"
      title={
        <>
          Humanize the page with the{" "}
          <span className="pm-gradient-text">owner&rsquo;s story</span>.
        </>
      }
      description="Tell us who runs the business and which parish, cause or ministry you want to support."
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
              A short owner story turns a directory listing into a trusted
              local supporter. The preview updates as you type.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Founder Name
            </span>
            <input
              value={profile.ownerName}
              onChange={(e) => update({ ownerName: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Parish / Cause Supported
            </span>
            <select
              value={profile.parishSupported}
              onChange={(e) => update({ parishSupported: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            >
              {SUPPORTED_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label className="block sm:col-span-2">
            <div className="flex items-baseline justify-between">
              <span className="block text-xs font-extrabold text-pm-navy">
                About the Founder
              </span>
              <span className="text-[10px] font-medium text-pm-muted">
                {profile.aboutOwner.length} / 300
              </span>
            </div>
            <textarea
              rows={3}
              maxLength={300}
              value={profile.aboutOwner}
              onChange={(e) => update({ aboutOwner: e.target.value })}
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">
              Why do you want to support this community?
            </span>
            <textarea
              rows={3}
              value={profile.whySupport}
              onChange={(e) => update({ whySupport: e.target.value })}
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/local-business/step-1" className="pm-btn pm-btn-secondary">
            Back
          </Link>
          <Link
            href="/onboarding/local-business/step-3"
            className="pm-btn pm-btn-primary"
          >
            Continue
          </Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
