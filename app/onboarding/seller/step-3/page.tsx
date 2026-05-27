import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import {
  SellerPreviewHero,
  SellerPreviewBody,
  PreviewLabel,
} from "@/components/onboarding/SellerPreviewCard";

export const metadata = {
  title: "Step 3 · Services, Offer & CTA · ParishMart",
};

const SERVICES = [
  "Family Dentistry",
  "Emergency Dental Care",
  "Cosmetic Dentistry",
  "Children's Dentistry",
];

export default function LocalBizStep3() {
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
      preview={
        <>
          <SellerPreviewHero
            kind="business"
            initials="FD"
            title="Weston Family Dental"
            subtitle="Trusted family dental care · Supporting SKD Parish."
          />
          <SellerPreviewBody>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <PreviewLabel>Community Offer</PreviewLabel>
              <p className="mt-1 text-base font-extrabold text-amber-700">
                10% off first consultation
              </p>
              <p className="text-xs text-amber-700/70">No expiration</p>
            </div>
            <div>
              <PreviewLabel>Services</PreviewLabel>
              <div className="mt-2 grid gap-2 text-xs font-extrabold text-pm-navy">
                {SERVICES.map((s) => (
                  <span
                    key={s}
                    className="rounded-2xl border border-pm-border bg-pm-soft/60 p-2.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <span className="block rounded-full bg-pm-navy py-3 text-center text-sm font-extrabold text-white">
              Request Information
            </span>
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
              The community offer becomes the primary conversion hook. Keep it
              simple and easy to claim.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Main CTA
            </span>
            <select
              defaultValue="Request Information"
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            >
              <option>Request Information</option>
              <option>Call Business</option>
              <option>Book Appointment</option>
              <option>Visit Website</option>
            </select>
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Community Offer
            </span>
            <input
              defaultValue="10% off first consultation"
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Offer Expiration
            </span>
            <input
              defaultValue="No expiration"
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Booking Link
            </span>
            <input
              placeholder="Optional booking URL"
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue placeholder:text-pm-muted/70"
            />
          </label>
          <div className="sm:col-span-2">
            <p className="text-xs font-extrabold text-pm-navy">
              Services Offered
            </p>
            <div className="mt-2 grid gap-2.5 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <span
                  key={s}
                  className="flex items-center justify-between gap-2 rounded-2xl border border-pm-border bg-pm-soft/50 px-3.5 py-3 text-sm font-extrabold text-pm-blue"
                >
                  {s}
                  <span className="grid h-5 w-5 place-items-center rounded-full border border-pm-border bg-white text-[10px] font-extrabold text-pm-cyan">
                    ✓
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/seller/step-2" className="pm-btn pm-btn-secondary">
            Back
          </Link>
          <Link
            href="/onboarding/seller/step-4"
            className="pm-btn pm-btn-primary"
          >
            Continue
          </Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
