"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { SellerLivePreview } from "@/components/onboarding/SellerLivePreview";
import { useSellerProfile } from "@/components/onboarding/SellerProfileContext";

const SERVICE_CATEGORIES = [
  "Health & Wellness",
  "Real Estate",
  "Insurance",
  "Legal Services",
  "Home Services",
  "Professional Services",
];

const CONTACT_METHODS = ["Phone", "Email", "Website", "Social Media"];

export default function LocalBizStep1() {
  const { profile, update } = useSellerProfile();

  return (
    <SellerStepShell
      step={1}
      eyebrow="Step 1 of 5 · Business Profile"
      title={
        <>
          Let&rsquo;s create your{" "}
          <span className="pm-gradient-text">service business page</span>.
        </>
      }
      description="Basic information to identify the business, location, service area and main category."
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
              Start with a few simple answers. The next steps adapt to your
              service category automatically.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Business Name
            </span>
            <input
              value={profile.businessName}
              onChange={(e) => update({ businessName: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Contact Full Name
            </span>
            <input
              value={profile.contactFullName}
              onChange={(e) => update({ contactFullName: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Service Category
            </span>
            <select
              value={profile.serviceCategory}
              onChange={(e) => update({ serviceCategory: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            >
              {SERVICE_CATEGORIES.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Phone
            </span>
            <input
              value={profile.phone}
              onChange={(e) => update({ phone: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Email
            </span>
            <input
              value={profile.email}
              onChange={(e) => update({ email: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Website or Social Media
            </span>
            <input
              value={profile.websiteOrSocial}
              onChange={(e) => update({ websiteOrSocial: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Best way to contact you
            </span>
            <select
              value={profile.bestWayToContact}
              onChange={(e) => update({ bestWayToContact: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            >
              {CONTACT_METHODS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Address
            </span>
            <input
              value={profile.address}
              onChange={(e) => update({ address: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              City
            </span>
            <input
              value={profile.city}
              onChange={(e) => update({ city: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              State
            </span>
            <input
              value={profile.state}
              onChange={(e) => update({ state: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Zip Code
            </span>
            <input
              value={profile.zipCode}
              onChange={(e) => update({ zipCode: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Country
            </span>
            <input
              value={profile.country}
              onChange={(e) => update({ country: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block sm:col-span-2">
            <div className="flex items-baseline justify-between">
              <span className="block text-xs font-extrabold text-pm-navy">
                Business Description
              </span>
              <span className="text-[10px] font-medium text-pm-muted">
                {profile.businessDescription.length} / 2,600
              </span>
            </div>
            <textarea
              rows={5}
              maxLength={2600}
              value={profile.businessDescription}
              onChange={(e) => update({ businessDescription: e.target.value })}
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">
              Service Area
            </span>
            <input
              value={profile.serviceArea}
              onChange={(e) => update({ serviceArea: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/seller" className="pm-btn pm-btn-secondary">
            Back
          </Link>
          <Link
            href="/onboarding/seller/step-2"
            className="pm-btn pm-btn-primary"
          >
            Continue
          </Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
