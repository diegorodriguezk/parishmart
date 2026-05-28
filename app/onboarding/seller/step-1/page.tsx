"use client";

import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { ProductSellerLivePreview } from "@/components/onboarding/ProductSellerLivePreview";
import { useProductSeller } from "@/components/onboarding/ProductSellerContext";

const STEP_TITLES = ["Profile", "Story", "Products", "Media", "Launch"];

const PRODUCT_CATEGORIES = [
  "Merch & Apparel",
  "Health & Wellness",
  "Home & Garden",
  "Books & Education",
  "Food & Beverage",
  "Gifts & Collectibles",
  "Arts & Crafts",
  "Electronics",
  "Sports & Outdoors",
  "Other",
];

export default function SellerStep1() {
  const { profile, update } = useProductSeller();

  return (
    <SellerStepShell
      step={1}
      totalSteps={5}
      allStepTitles={STEP_TITLES}
      badge="Required"
      eyebrow="Step 1 of 5 · Business Profile"
      title={<>Let&rsquo;s create your <span className="pm-gradient-text">product seller page</span>.</>}
      description="Basic information to identify your business, location and what you sell."
      preview={<ProductSellerLivePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="mb-5 flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-pm-border bg-pm-soft text-sm font-extrabold text-pm-blue">AI</span>
          <div>
            <p className="text-xs font-extrabold text-pm-blue">ParishMart Concierge</p>
            <p className="mt-1 text-sm text-pm-muted">Start with the basics — the preview on the right updates live as you type.</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Business Name</span>
            <input value={profile.businessName} onChange={(e) => update({ businessName: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Contact Full Name</span>
            <input value={profile.contactFullName} onChange={(e) => update({ contactFullName: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Products Category</span>
            <select value={profile.productCategory} onChange={(e) => update({ productCategory: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue">
              <option value="">Select category</option>
              {PRODUCT_CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Phone</span>
            <input type="tel" value={profile.phone} onChange={(e) => update({ phone: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Email</span>
            <input type="email" value={profile.email} onChange={(e) => update({ email: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Website or Social Media <span className="font-normal text-pm-muted">(optional)</span>
            </span>
            <input value={profile.websiteOrSocial} onChange={(e) => update({ websiteOrSocial: e.target.value })}
              placeholder="yoursite.com or @handle"
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Address</span>
            <input value={profile.address} onChange={(e) => update({ address: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">City</span>
            <input value={profile.city} onChange={(e) => update({ city: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">State</span>
            <input value={profile.state} onChange={(e) => update({ state: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Zip Code</span>
            <input value={profile.zipCode} onChange={(e) => update({ zipCode: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block sm:col-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">Country</span>
            <input value={profile.country} onChange={(e) => update({ country: e.target.value })}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue" />
          </label>
          <label className="block sm:col-span-2">
            <span className="flex items-center justify-between text-xs font-extrabold text-pm-navy">
              Short Description / Headline
              <span className="font-normal text-pm-muted">{profile.shortDescription.length}/220</span>
            </span>
            <textarea rows={3} maxLength={220}
              value={profile.shortDescription}
              onChange={(e) => update({ shortDescription: e.target.value })}
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue" />
          </label>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/seller" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/seller/step-2" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
