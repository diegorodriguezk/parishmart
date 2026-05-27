import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import {
  SellerPreviewHero,
  SellerPreviewBody,
  PreviewLabel,
} from "@/components/onboarding/SellerPreviewCard";

export const metadata = { title: "Step 1 · Seller Profile · ParishMart" };

const FIELDS = [
  { label: "Seller / Store Name", value: "HarpsClub Merch", type: "input" },
  {
    label: "Seller Type",
    value: "ParishMart 1P Partner",
    type: "select",
    options: [
      "ParishMart 1P Partner",
      "3P Product Seller",
      "Local Business Seller",
      "Cause / Ministry Seller",
    ],
  },
  {
    label: "Main Product Category",
    value: "Merch & Apparel",
    type: "select",
    options: [
      "Merch & Apparel",
      "Religious Products",
      "Wellness",
      "Art & Craft",
      "Printing Solutions",
      "Circular Economy",
    ],
  },
  {
    label: "Product Model",
    value: "Made to Order / Campaigns",
    type: "select",
    options: [
      "Made to Order / Campaigns",
      "Ready to Ship",
      "Customizable",
      "Bulk Lots",
      "Digital / Service Add-on",
    ],
  },
  { label: "Website", value: "harpsclub.com", type: "input" },
  { label: "Contact Email", value: "hello@harpsclub.com", type: "input" },
];

export default function SellerStep1() {
  return (
    <SellerStepShell
      step={1}
      eyebrow="Step 1 of 5 · Seller Profile"
      title={
        <>
          Let&rsquo;s launch your{" "}
          <span className="pm-gradient-text">seller store</span>.
        </>
      }
      description="Define who the seller is, what type of products you offer, and how your storefront should appear inside ParishMart."
      preview={
        <>
          <SellerPreviewHero
            kind="merch"
            initials="HC"
            title="HarpsClub Merch"
            subtitle="Custom apparel and campaign products for community organizations."
          />
          <SellerPreviewBody>
            <div className="flex items-center justify-between gap-3">
              <div>
                <PreviewLabel>Draft Store</PreviewLabel>
                <p className="mt-1 text-base font-extrabold text-pm-navy">
                  Storefront profile
                </p>
              </div>
              <span className="rounded-full bg-pm-soft px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-pm-blue">
                Draft
              </span>
            </div>
            <p className="text-sm text-pm-muted">
              Once you finish the simple seller profile, AI will generate your
              brand story, suggested support models, featured products and
              calls to action.
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="rounded-2xl border border-pm-border bg-pm-soft/50 p-3">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-pm-muted">
                  CTA
                </p>
                <p className="mt-1 text-sm font-extrabold text-pm-navy">
                  Shop Products
                </p>
              </div>
              <div className="rounded-2xl border border-pm-border bg-pm-soft/50 p-3">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-pm-muted">
                  Catalog
                </p>
                <p className="mt-1 text-sm font-extrabold text-pm-navy">
                  Manual + CSV import
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-pm-border bg-pm-soft/40 p-3">
              <p className="text-xs text-pm-muted">
                <span className="font-extrabold text-pm-navy">
                  Seller with Purpose
                </span>
                <br />A simple way to grow while supporting parishes and
                ministries.
              </p>
              <span className="rounded-xl bg-pm-navy px-2.5 py-2 text-[11px] font-extrabold text-white">
                Preview
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
              Start with a few simple answers. I&rsquo;ll personalize the next
              steps and draft your seller storefront automatically.
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
            <span className="block text-xs font-extrabold text-pm-navy">
              Short Store Description
            </span>
            <textarea
              rows={3}
              defaultValue="Custom apparel, parish merch, ministry products and campaign-based merchandise designed to help communities raise funds and build identity."
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
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
