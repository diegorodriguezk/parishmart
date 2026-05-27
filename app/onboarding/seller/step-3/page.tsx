import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import {
  SellerPreviewHero,
  SellerPreviewBody,
  PreviewLabel,
} from "@/components/onboarding/SellerPreviewCard";

export const metadata = {
  title: "Step 3 · Product Catalog Setup · ParishMart",
};

const CATALOG_METHODS = [
  {
    title: "Manual Products",
    body: "Add products one by one. Best for MVP launch, small catalogs and campaigns.",
    active: true,
  },
  {
    title: "CSV Import",
    body: "Upload a spreadsheet with SKU, title, price, images, inventory and categories.",
  },
  {
    title: "Shopify / API Sync",
    body: "Connect Shopify, Amazon, vendor APIs or future PML integrations.",
  },
];

const UPLOADS = [
  { label: "Product Images", hint: "Upload photos" },
  { label: "CSV File", hint: "Optional import" },
  { label: "Logo / Artwork", hint: "For custom products" },
  { label: "Catalog Rules", hint: "Pricing · MOQ · inventory" },
];

const PRODUCT_ROWS = [
  {
    name: "Parish T-Shirt Campaign",
    cat: "Merch",
    price: "From $18",
    model: "Made to Order",
  },
  {
    name: "Ministry Hoodie",
    cat: "Apparel",
    price: "From $38",
    model: "Campaign",
  },
  {
    name: "Community Hat",
    cat: "Accessories",
    price: "From $22",
    model: "Custom",
  },
];

export default function SellerStep3() {
  return (
    <SellerStepShell
      step={3}
      eyebrow="Step 3 of 5 · Product Catalog Setup"
      title={
        <>
          Connect your{" "}
          <span className="pm-gradient-text">products</span> in minutes.
        </>
      }
      description="Choose how you want to add products to your catalog: manual upload, CSV import, Shopify sync or API connection."
      preview={
        <>
          <SellerPreviewHero
            kind="merch"
            initials="HC"
            title="HarpsClub Merch"
            subtitle="Featured products from your seller storefront."
          />
          <SellerPreviewBody>
            <PreviewLabel>Featured Products</PreviewLabel>
            <div className="grid grid-cols-2 gap-3">
              {[
                { t: "Parish T-Shirt", k: "merch" as const, src: "/brand/products/crew-harps.png" },
                { t: "Community Tote", k: "merch" as const, src: "/brand/products/tote-harps.png" },
                { t: "Community Cap", k: "merch" as const, src: "/brand/products/cap-harps.png" },
                { t: "Ministry Hoodie", k: "merch" as const, src: "/brand/products/crew-harps.png" },
              ].map((p) => (
                <div
                  key={p.t}
                  className="overflow-hidden rounded-2xl border border-pm-border bg-white"
                >
                  <div className="aspect-[4/3] bg-pm-soft" />
                  <div className="p-2">
                    <p className="text-[11px] font-extrabold text-pm-navy">
                      {p.t}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-pm-border bg-pm-soft/40 p-3">
              <p className="text-xs text-pm-muted">
                <span className="font-extrabold text-pm-navy">
                  Catalog connected:
                </span>
                <br />3 draft products ready for activation.
              </p>
              <span className="rounded-xl bg-pm-navy px-3 py-2 text-[11px] font-extrabold text-white">
                Step 4
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
              Pick the way you want to load products. You can mix manual,
              campaigns and imports anytime.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {CATALOG_METHODS.map((m) => (
            <div
              key={m.title}
              className={`rounded-2xl border p-4 transition ${
                m.active
                  ? "border-pm-cyan bg-gradient-to-br from-white to-pm-soft shadow-pm-soft"
                  : "border-pm-border bg-white"
              }`}
            >
              {m.active ? (
                <span className="mb-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-pm-blue to-pm-cyan text-[11px] font-extrabold text-white">
                  ✓
                </span>
              ) : null}
              <p className="text-sm font-extrabold text-pm-navy">{m.title}</p>
              <p className="mt-1 text-xs text-pm-muted">{m.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {UPLOADS.map((u) => (
            <div
              key={u.label}
              className="grid min-h-[120px] place-items-center rounded-2xl border border-dashed border-pm-blue/40 bg-pm-soft/50 p-4 text-center"
            >
              <div>
                <p className="text-sm font-extrabold text-pm-navy">{u.label}</p>
                <p className="mt-1 text-xs text-pm-muted">{u.hint}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-pm-border">
          <div className="grid grid-cols-[1.4fr_.8fr_.7fr_.7fr_.7fr] gap-3 border-b border-pm-border bg-pm-soft px-4 py-3 text-[10px] font-extrabold uppercase tracking-wider text-pm-blue">
            <span>Product</span>
            <span>Category</span>
            <span>Price</span>
            <span>Model</span>
            <span>Status</span>
          </div>
          {PRODUCT_ROWS.map((r) => (
            <div
              key={r.name}
              className="grid grid-cols-[1.4fr_.8fr_.7fr_.7fr_.7fr] items-center gap-3 border-b border-pm-border px-4 py-3 text-xs text-pm-muted last:border-b-0"
            >
              <span className="font-extrabold text-pm-navy">{r.name}</span>
              <span>{r.cat}</span>
              <span>{r.price}</span>
              <span>{r.model}</span>
              <span className="inline-flex w-fit rounded-full bg-pm-soft px-2 py-0.5 text-[10px] font-extrabold text-pm-blue">
                Draft
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/seller/step-2" className="pm-btn pm-btn-secondary">
            Back
          </Link>
          <Link
            href="/onboarding/seller/step-4"
            className="pm-btn pm-btn-primary"
          >
            Continue to Storefront Media
          </Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
