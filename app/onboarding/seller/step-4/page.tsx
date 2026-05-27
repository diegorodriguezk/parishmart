import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import {
  SellerPreviewHero,
  SellerPreviewBody,
  PreviewLabel,
} from "@/components/onboarding/SellerPreviewCard";

export const metadata = {
  title: "Step 4 · Storefront Media & Preview · ParishMart",
};

const UPLOADS = [
  { label: "Seller Logo", hint: "PNG, JPG or SVG", required: true },
  { label: "Cover Image", hint: "Brand or products photo", required: true },
  { label: "Owner / Team Photo", hint: "Optional, builds trust" },
  { label: "Gallery", hint: "Product lifestyle photos" },
];

export default function SellerStep4() {
  return (
    <SellerStepShell
      step={4}
      eyebrow="Step 4 of 5 · Storefront Media & Preview"
      title={
        <>
          Make your storefront feel{" "}
          <span className="pm-gradient-text">real and ready</span>.
        </>
      }
      description="Upload the visual assets that bring your seller storefront to life. Skip anything optional and finish later."
      preview={
        <>
          <SellerPreviewHero
            kind="merch"
            initials="HC"
            title="HarpsClub Merch"
            subtitle="Local seller supporting Saint Katharine Drexel Parish."
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
                  Now your store feels real and trustworthy.
                </p>
              </div>
              <span className="rounded-full bg-pm-soft px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-pm-blue">
                Ready
              </span>
            </div>
            <div className="rounded-2xl border border-pm-cyan/30 bg-gradient-to-br from-pm-soft to-white p-4">
              <PreviewLabel>Featured Product</PreviewLabel>
              <p className="mt-1 text-base font-extrabold text-pm-navy">
                Parish T-Shirt Campaign
              </p>
              <p className="mt-1 text-xs text-pm-muted">
                Made-to-order parish merch from $18. Ships directly to
                parishioners.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-xl bg-pm-navy px-3 py-1.5 text-[11px] font-extrabold text-white">
                  Shop Products
                </span>
                <span className="rounded-xl border border-pm-border bg-white px-3 py-1.5 text-[11px] font-extrabold text-pm-blue">
                  Start Campaign
                </span>
              </div>
            </div>
            <p className="text-xs text-pm-muted">
              ParishMart concierge can approve, edit and publish your
              storefront after review.
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
              I&rsquo;ll use your logo, photos and gallery to create a polished
              storefront that looks trustworthy from day one.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {UPLOADS.map((u) => (
            <div
              key={u.label}
              className="flex min-h-[150px] flex-col justify-between rounded-2xl border border-dashed border-pm-blue/40 bg-gradient-to-b from-white to-pm-soft p-4 transition hover:-translate-y-0.5 hover:border-pm-blue hover:shadow-pm-soft"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-pm-soft text-xs font-extrabold text-pm-blue">
                  {u.label.split(" ")[0].slice(0, 4).toUpperCase()}
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold ${
                    u.required
                      ? "bg-pm-soft text-pm-blue"
                      : "bg-pm-border/40 text-pm-muted"
                  }`}
                >
                  {u.required ? "Required" : "Optional"}
                </span>
              </div>
              <div>
                <p className="text-sm font-extrabold text-pm-navy">{u.label}</p>
                <p className="mt-1 text-xs text-pm-muted">{u.hint}</p>
                <span className="mt-3 inline-flex w-fit items-center rounded-xl border border-pm-border bg-white px-3 py-2 text-xs font-extrabold text-pm-blue">
                  Upload
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Main CTA
            </span>
            <select
              defaultValue="Shop Products"
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            >
              <option>Shop Products</option>
              <option>Request Information</option>
              <option>Start Campaign</option>
              <option>Contact Seller</option>
            </select>
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Store Visibility
            </span>
            <select
              defaultValue="Public after approval"
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            >
              <option>Public after approval</option>
              <option>Private preview only</option>
              <option>Parish-specific store only</option>
            </select>
          </label>
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
