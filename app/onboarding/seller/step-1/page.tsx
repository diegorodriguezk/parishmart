import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import {
  SellerPreviewHero,
  SellerPreviewBody,
  PreviewLabel,
} from "@/components/onboarding/SellerPreviewCard";

export const metadata = { title: "Step 1 · Business Profile · ParishMart" };

const FIELDS = [
  { label: "Business Name", value: "Weston Family Dental", type: "input" },
  { label: "Contact Name", value: "Maria", type: "input" },
  { label: "Contact Last Name", value: "Lopez", type: "input" },
  {
    label: "Service Category",
    value: "Health & Wellness",
    type: "select",
    options: [
      "Health & Wellness",
      "Real Estate",
      "Insurance",
      "Legal Services",
      "Home Services",
      "Professional Services",
    ],
  },
  { label: "Phone", value: "(954) 555-0148", type: "input" },
  { label: "Email", value: "hello@westonfamilydental.com", type: "input" },
  {
    label: "Website or Social Media",
    value: "westonfamilydental.com",
    type: "input",
  },
  {
    label: "Best way to contact you",
    value: "Phone",
    type: "select",
    options: ["Phone", "Email", "Website", "Social Media"],
  },
  { label: "Address", value: "2501 South Post Road", type: "input" },
  { label: "City", value: "Weston", type: "input" },
  { label: "State", value: "FL", type: "input" },
  { label: "Zip Code", value: "33327", type: "input" },
  { label: "Country", value: "United States", type: "input" },
];

export default function LocalBizStep1() {
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
      preview={
        <>
          <SellerPreviewHero
            kind="business"
            initials="FD"
            title="Weston Family Dental"
            subtitle="Family dental practice serving Weston, FL."
          />
          <SellerPreviewBody>
            <div className="flex items-center justify-between gap-3">
              <div>
                <PreviewLabel>Draft Profile</PreviewLabel>
                <p className="mt-1 text-base font-extrabold text-pm-navy">
                  Business profile
                </p>
              </div>
              <span className="rounded-full bg-pm-soft px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-pm-blue">
                Draft
              </span>
            </div>
            <p className="text-sm text-pm-muted">
              Once you finish the simple business profile, the page will start
              showing as a Local Biz Supporter in the community directory.
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="rounded-2xl border border-pm-border bg-pm-soft/50 p-3">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-pm-muted">
                  Category
                </p>
                <p className="mt-1 text-sm font-extrabold text-pm-navy">
                  Health &amp; Wellness
                </p>
              </div>
              <div className="rounded-2xl border border-pm-border bg-pm-soft/50 p-3">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-pm-muted">
                  Location
                </p>
                <p className="mt-1 text-sm font-extrabold text-pm-navy">
                  Weston, FL
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-pm-border bg-pm-soft/40 p-3">
              <p className="text-xs text-pm-muted">
                <span className="font-extrabold text-pm-navy">
                  Service area:
                </span>
                <br />
                Weston, Southwest Ranches, Davie, Pembroke Pines.
              </p>
              <span className="rounded-xl bg-pm-navy px-2.5 py-2 text-[11px] font-extrabold text-white">
                Step 2
              </span>
            </div>
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
              Start with a few simple answers. The next steps adapt to your
              service category automatically.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {FIELDS.map((f) => (
            <label key={f.label} className="block">
              <span className="block text-xs font-extrabold text-pm-navy">
                {f.label}
              </span>
              {f.type === "select" ? (
                <select
                  defaultValue={f.value}
                  className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
                >
                  {f.options?.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              ) : (
                <input
                  defaultValue={f.value}
                  className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
                />
              )}
            </label>
          ))}
          <label className="block sm:col-span-2">
            <div className="flex items-baseline justify-between">
              <span className="block text-xs font-extrabold text-pm-navy">
                Headline
              </span>
              <span className="text-[10px] font-medium text-pm-muted">
                Max 220 characters
              </span>
            </div>
            <input
              maxLength={220}
              defaultValue="Trusted family dental care for Weston families — gentle, faith-friendly and built on community."
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block sm:col-span-2">
            <div className="flex items-baseline justify-between">
              <span className="block text-xs font-extrabold text-pm-navy">
                Business Description
              </span>
              <span className="text-[10px] font-medium text-pm-muted">
                Max 2,600 characters
              </span>
            </div>
            <textarea
              rows={5}
              maxLength={2600}
              defaultValue="Weston Family Dental is a local family-owned dental practice serving the Weston community with preventive, cosmetic and emergency dental care for children, adults and seniors. We focus on long-term family relationships, gentle care for kids, and modern technology delivered in a calm and welcoming environment."
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">
              Service Area
            </span>
            <input
              defaultValue="Weston, Southwest Ranches, Davie, Pembroke Pines"
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
