import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import {
  SellerPreviewHero,
  SellerPreviewBody,
  PreviewLabel,
} from "@/components/onboarding/SellerPreviewCard";

export const metadata = {
  title: "Step 4 · Media, Trust & Preview · ParishMart",
};

const UPLOADS = [
  { label: "Business Logo", hint: "PNG, JPG or SVG" },
  { label: "Cover Photo", hint: "Business, team or location" },
  { label: "Owner Photo", hint: "Professional profile image" },
  { label: "Gallery Photos", hint: "Office, team, work samples" },
  { label: "Certifications", hint: "Licenses, awards, documents" },
  { label: "Reviews", hint: "Google link or testimonials" },
];

export default function LocalBizStep4() {
  return (
    <SellerStepShell
      step={4}
      eyebrow="Step 4 of 5 · Media, Trust & Preview"
      title={
        <>
          Add the visual{" "}
          <span className="pm-gradient-text">trust elements</span> people
          look for.
        </>
      }
      description="Upload visual assets and trust elements. The public page preview updates as the business completes the fields."
      preview={
        <>
          <SellerPreviewHero
            kind="business"
            initials="FD"
            title="Weston Family Dental"
            subtitle="Trusted family dental care · Supporting SKD Parish."
          />
          <SellerPreviewBody>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-2xl border border-pm-border bg-pm-soft"
                />
              ))}
            </div>
            <div className="flex items-center justify-between gap-3">
              <div>
                <PreviewLabel>Page Preview</PreviewLabel>
                <p className="mt-1 text-base font-extrabold text-pm-navy">
                  Your page now feels real and trustworthy.
                </p>
              </div>
              <span className="rounded-full bg-pm-soft px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-pm-blue">
                Ready
              </span>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3 text-sm font-extrabold text-amber-700">
              10% off first consultation
            </div>
            <p className="text-xs text-pm-muted">
              ParishMart concierge can approve, edit and publish your page
              after review.
            </p>
          </SellerPreviewBody>
        </>
      }
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
              Logo, photos and credentials transform a directory listing into a
              trusted local business page.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {UPLOADS.map((u) => (
            <div
              key={u.label}
              className="grid min-h-[128px] place-items-center rounded-2xl border border-dashed border-pm-blue/40 bg-pm-soft/50 p-4 text-center transition hover:-translate-y-0.5 hover:border-pm-blue hover:shadow-pm-soft"
            >
              <div>
                <p className="text-sm font-extrabold text-pm-navy">
                  {u.label}
                </p>
                <p className="mt-1 text-xs text-pm-muted">{u.hint}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/seller/step-3" className="pm-btn pm-btn-secondary">
            Back
          </Link>
          <Link
            href="/onboarding/seller/step-5"
            className="pm-btn pm-btn-primary"
          >
            Continue to Membership
          </Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
