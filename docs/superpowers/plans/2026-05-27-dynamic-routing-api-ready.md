# Dynamic Routing & API-Ready Data Layer — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all static profile pages with dynamic routes and extend the entity contract so the frontend switches from catalog seed data to a live backend by setting `NEXT_PUBLIC_API_BASE`.

**Architecture:** The existing `lib/api.ts` local/external switch is preserved and extended. Static profile page content is extracted into `components/profiles/` components that receive their entity as a prop. Dynamic `[param]` page files handle data fetching and `generateStaticParams`. The backend team implements against the TypeScript types locked down in `lib/catalog.ts`.

**Tech Stack:** Next.js 16 App Router, React 19 server components, TypeScript 5, Tailwind CSS v4

> **Dev server:** All Playwright verification steps require the dev server to be running. Start it once with `npm run dev` and leave it running for the duration. Kill it only after Task 22 verification.

---

## File Map

**Modified**
- `lib/catalog.ts` — extend Business/Cause types; add Sponsor type + seed; open CauseKey; update product seller refs
- `lib/api.ts` — add fetchSponsors/fetchSponsor; update fetchCauses with parishSlug filter
- `app/api/causes/route.ts` — add parishSlug query param filter
- `next.config.ts` — add redirects array
- `app/local-businesses/page.tsx` — update card hrefs to `/local-businesses/${b.id}`
- `app/sponsors/page.tsx` — wire fetchSponsors, update card hrefs to `/sponsors/${s.id}`
- `app/give/page.tsx` — update causeHref to dynamic value

**New**
- `app/api/sponsors/route.ts`
- `app/api/sponsors/[id]/route.ts`
- `components/profiles/ParishLayout.tsx`
- `components/profiles/ParishStorefront.tsx`
- `components/profiles/ServiceBusinessProfile.tsx`
- `components/profiles/ProductSellerProfile.tsx`
- `components/profiles/CauseProfile.tsx`
- `components/profiles/SponsorProfile.tsx`
- `components/profiles/ProductDetail.tsx`
- `app/parishes/[slug]/page.tsx`
- `app/local-businesses/[id]/page.tsx`
- `app/parishes/[slug]/causes/[key]/page.tsx`
- `app/causes/[key]/page.tsx`
- `app/sponsors/[id]/page.tsx`
- `app/shop/products/[id]/page.tsx`

**Deleted (Task 21)**
- `app/stores/page.tsx`
- `app/local-businesses/services/profile/page.tsx`
- `app/local-businesses/products/profile/page.tsx`
- `app/local-businesses/profile/page.tsx`
- `app/give/cause/page.tsx`
- `app/sponsors/profile/page.tsx`
- `app/shop/product/page.tsx`

---

## Task 1: Extend Business type and update BUSINESSES seed data

**Files:**
- Modify: `lib/catalog.ts`

- [ ] **Step 1: Add `kind` to the Business type and extend with profile fields**

Open `lib/catalog.ts`. Replace the existing `Business` type and update `BUSINESSES`. The `href` field is removed — hrefs are now computed as `/local-businesses/${b.id}`.

Add a `ServiceEntry` type just above `Business`:

```ts
export type ServiceEntry = {
  name: string;
  description: string;
  price: string;
};
```

Replace the `Business` type with:

```ts
export type Business = {
  id: string;
  kind: "service" | "product-seller";
  name: string;
  initials: string;
  logoSrc: string;
  category: string;
  location: string;
  description: string;
  // Profile fields (optional; populate for seed entities, required from backend)
  about?: string;
  parishSupported?: string;
  email?: string;
  phone?: string;
  website?: string;
  // service-specific
  services?: ServiceEntry[];
  // product-seller-specific (products fetched via fetchProducts({ seller: id }))
  founderName?: string;
  founderShortDesc?: string;
};
```

- [ ] **Step 2: Verify TypeScript errors reveal every BUSINESSES entry that needs updating**

```bash
cd /Users/jrmotta/Documents/Harold/Front_Parishmart/parishmart
npx tsc --noEmit --skipLibCheck 2>&1 | grep "catalog.ts"
```

Expected: errors on every BUSINESSES entry (missing `kind`, unexpected `href`).

- [ ] **Step 3: Update every BUSINESSES entry — add `kind`, remove `href`, add profile data**

Replace the full `BUSINESSES` array. Update all existing entries (add `kind` to each, remove `href`). For harps-club and maria-studios, add the profile fields that the extracted components will use. Example showing the pattern for the two main seed entities:

```ts
export const BUSINESSES: Business[] = [
  {
    id: "harps-club",
    kind: "product-seller",
    name: "Harps Club",
    initials: "HC",
    logoSrc: "",
    category: "Merch & Apparel",
    location: "South Florida",
    description: "Custom apparel, parish merch and ministry products designed to help communities raise funds and build identity.",
    about: "Harps Club offers thoughtfully curated community products, custom apparel and healthy essentials for everyday parish families. We partner with trusted suppliers to bring clean, effective and reliable products that support better habits and stronger communities. Every purchase helps fund parish programs and family education.",
    parishSupported: "Saint Katharine Drexel",
    website: "harpsclub.com",
    founderName: "Sarah Martinez",
    founderShortDesc: "As a mom, wellness advocate and parish volunteer, Sarah created Harps Club to make meaningful merchandise accessible for families and faith communities.",
  },
  {
    id: "maria-studios",
    kind: "service",
    name: "Maria's Studios",
    initials: "MS",
    logoSrc: "",
    category: "Photography",
    location: "Weston, FL",
    description: "Photography services for parish events, retreats and SKD family celebrations.",
    about: "Maria's Studios has been serving the SKD community for over a decade, capturing the moments that matter most — from baptisms and quinceañeras to Emmaus retreats and parish galas.",
    parishSupported: "Saint Katharine Drexel",
    email: "hello@mariastudios.com",
    phone: "(954) 555-0200",
    website: "mariastudios.com",
    services: [
      { name: "Family Photography", description: "Indoor and outdoor family portraits.", price: "From $150" },
      { name: "Emmaus Retreat Coverage", description: "Full event coverage for men's and women's retreats.", price: "From $350" },
      { name: "Parish Event Coverage", description: "Galas, quinceañeras and community events.", price: "Quote" },
      { name: "Baptism / First Communion", description: "Sacramental milestone photography.", price: "From $200" },
      { name: "Quinceañera", description: "Full day coverage packages.", price: "From $300" },
    ],
  },
  // Apply the same pattern to all remaining entries (aquatic-adventures-fl, etc.):
  // - Add `kind: "service" | "product-seller"`
  // - Remove `href`
  // - Optionally add profile fields
  {
    id: "aquatic-adventures-fl",
    kind: "service",
    name: "Aquatic Adventures FL",
    initials: "AA",
    logoSrc: "",
    category: "Style & Goods",
    location: "Doral, FL",
    description: "Handcrafted goods and lifestyle products from a local supporter.",
  },
];
```

- [ ] **Step 4: Update Product seller refs to use Business IDs**

In the `PRODUCTS` array, `seller` fields currently use human-readable names (e.g., `"Harps Club"`). Update them to use Business IDs so `fetchProducts({ seller: "harps-club" })` works:

Find every `seller:` in PRODUCTS and update:
- `seller: "Harps Club"` → `seller: "harps-club"`
- `seller: "SKD Parish Store"` → `seller: "skd-parish-store"`

(These seller IDs must also exist as Business entries or be understood as non-business sellers.)

- [ ] **Step 5: Verify TypeScript compiles cleanly**

```bash
npx tsc --noEmit --skipLibCheck 2>&1 | grep -v "node_modules\|\.next"
```

Expected: zero errors.

- [ ] **Step 6: Commit**

```bash
git add lib/catalog.ts
git commit -m "contract: extend Business type with kind and profile fields, update seed data"
```

---

## Task 2: Update Cause type — add parishSlug, add emmaus entry

**Files:**
- Modify: `lib/catalog.ts`

- [ ] **Step 1: Open CauseKey to string and add parishSlug to Cause type**

In `lib/catalog.ts`, replace:

```ts
export type CauseKey =
  | "christ-care-for-all"
  | "face"
  // ... (the full union)
  | "schoenstatt-miami";
```

With:

```ts
export type CauseKey = string;
```

This makes the catalog open to backend-defined keys while preserving runtime behavior.

Add `parishSlug` and profile fields to `Cause`:

```ts
export type Cause = {
  key: CauseKey;
  name: string;
  logoSrc: string;
  background: "white" | "dark";
  parishSlug?: string;   // when present, cause lives inside the parish environment
  tagline?: string;
  description?: string;
};
```

- [ ] **Step 2: Add emmaus to CAUSES and set parishSlug on affiliated causes**

In the `CAUSES` Record, add:

```ts
emmaus: {
  key: "emmaus",
  name: "Emmaus Retreat",
  logoSrc: "/brand/causes/emmaus.png",
  background: "white",
  parishSlug: "skd",
  tagline: "A journey of faith, renewal, friendship and service.",
  description: "The Emmaus Retreat is an invitation to step away from the noise of everyday life and encounter Jesus in a personal and transformative way. Inspired by the Road to Emmaus, the ministry helps men and women rediscover faith, strengthen community, and return with a renewed desire to serve the parish.",
},
```

If any existing causes are affiliated with SKD (e.g., "face", "forta"), add `parishSlug: "skd"` to those entries too.

- [ ] **Step 3: Update listCauses to support parishSlug filter**

The `listCauses()` helper currently returns all causes. Update it to accept an optional filter:

```ts
export function listCauses(opts?: { parishSlug?: string }): Cause[] {
  const all = Object.values(CAUSES);
  if (opts?.parishSlug) return all.filter((c) => c.parishSlug === opts.parishSlug);
  return all;
}
```

- [ ] **Step 4: Verify TypeScript compiles**

```bash
npx tsc --noEmit --skipLibCheck 2>&1 | grep -v "node_modules\|\.next"
```

Expected: zero errors.

- [ ] **Step 5: Commit**

```bash
git add lib/catalog.ts
git commit -m "contract: add parishSlug to Cause, add emmaus seed entry, open CauseKey"
```

---

## Task 3: Add Sponsor type and seed data to catalog.ts

**Files:**
- Modify: `lib/catalog.ts`

- [ ] **Step 1: Add Sponsor type at the end of the type definitions section**

```ts
export type Sponsor = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logoSrc?: string;
  bannerSrc?: string;
  website?: string;
  category: string;
  location: string;
  offer?: string;           // e.g. "$100 credit"
  offerDaysLeft?: string;   // e.g. "30d left"
  contact: {
    name: string;
    email: string;
    phone?: string;
  };
};
```

- [ ] **Step 2: Add SPONSORS array with 3 seed entries**

```ts
export const SPONSORS: Sponsor[] = [
  {
    id: "cleveland-hospital",
    name: "Cleveland Hospital",
    tagline: "World-class care for your family.",
    description: "Cleveland Hospital provides comprehensive healthcare services to SKD parishioners and the broader South Florida community. As a ParishMart sponsor, they offer a $100 care credit toward your first visit.",
    category: "Healthcare",
    location: "Weston, FL",
    offer: "$100 credit",
    offerDaysLeft: "30d left",
    contact: { name: "Community Relations", email: "community@clevelandhospital.com", phone: "(954) 555-0300" },
  },
  {
    id: "casa-manresa",
    name: "Casa Manresa",
    tagline: "Retreat programs for spiritual formation.",
    description: "Casa Manresa offers retreat programs and spiritual direction connected to the Ignatian tradition. SKD parishioners receive a 15% benefit on retreat registrations.",
    category: "Spiritual Formation",
    location: "Miami, FL",
    offer: "15% retreat benefit",
    offerDaysLeft: "60d left",
    contact: { name: "Retreat Office", email: "retreats@casamanresa.org" },
  },
  {
    id: "community-bank-weston",
    name: "Community Bank Weston",
    tagline: "Banking built around your community.",
    description: "Community Bank Weston is a locally-owned financial institution supporting parish families with personal banking, mortgages and small business services.",
    category: "Finance",
    location: "Weston, FL",
    offer: "$50 cash back",
    offerDaysLeft: "32d left",
    contact: { name: "Branch Manager", email: "weston@communitybank.com", phone: "(954) 555-0400" },
  },
];
```

- [ ] **Step 3: Add helper functions**

```ts
export function listSponsors(): Sponsor[] {
  return SPONSORS;
}

export function getSponsor(id: string): Sponsor | undefined {
  return SPONSORS.find((s) => s.id === id);
}
```

- [ ] **Step 4: Verify TypeScript compiles**

```bash
npx tsc --noEmit --skipLibCheck 2>&1 | grep -v "node_modules\|\.next"
```

- [ ] **Step 5: Commit**

```bash
git add lib/catalog.ts
git commit -m "contract: add Sponsor type and seed data"
```

---

## Task 4: Update lib/api.ts — fetchSponsors, fetchSponsor, fetchCauses filter

**Files:**
- Modify: `lib/api.ts`

- [ ] **Step 1: Update imports from catalog**

Add to the existing import from `"./catalog"`:

```ts
import {
  // ...existing imports...
  SPONSORS,
  getSponsor,
  listSponsors,
  type Sponsor,
} from "./catalog";
```

Also update the `listCauses` import call — it now accepts an opts param.

- [ ] **Step 2: Add local sponsor helpers (above the fetchSponsors export)**

```ts
function localSponsors(): Sponsor[] {
  return listSponsors();
}
```

- [ ] **Step 3: Add fetchSponsors and fetchSponsor**

After `fetchCauses`, add:

```ts
export async function fetchSponsors(): Promise<Sponsor[]> {
  if (!externalBase()) return localSponsors();
  const data = await apiFetch<{ sponsors: Sponsor[] }>("/api/sponsors");
  return data?.sponsors ?? [];
}

export async function fetchSponsor(id: string): Promise<Sponsor | null> {
  if (!externalBase()) return getSponsor(id) ?? null;
  const data = await apiFetch<{ sponsor: Sponsor } | null>(
    `/api/sponsors/${encodeURIComponent(id)}`,
  );
  return data?.sponsor ?? null;
}
```

- [ ] **Step 4: Update fetchCauses to support parishSlug filter**

Replace the existing `fetchCauses`:

```ts
export async function fetchCauses(opts?: { parishSlug?: string }): Promise<Cause[]> {
  if (!externalBase()) return listCauses(opts);
  const qs = new URLSearchParams();
  if (opts?.parishSlug) qs.set("parishSlug", opts.parishSlug);
  const path = `/api/causes${qs.toString() ? `?${qs}` : ""}`;
  const data = await apiFetch<{ causes: Cause[] }>(path);
  return data?.causes ?? [];
}
```

- [ ] **Step 5: Drop the void SPONSORS silencer — it's now used**

Remove the line:
```ts
void SPONSORS;
```
(The existing `void CAUSES; void PARISHES;` silencers can stay if they're still needed.)

- [ ] **Step 6: Verify TypeScript compiles**

```bash
npx tsc --noEmit --skipLibCheck 2>&1 | grep -v "node_modules\|\.next"
```

- [ ] **Step 7: Commit**

```bash
git add lib/api.ts
git commit -m "api: add fetchSponsors/fetchSponsor, add parishSlug filter to fetchCauses"
```

---

## Task 5: Add sponsor API route handlers

**Files:**
- Create: `app/api/sponsors/route.ts`
- Create: `app/api/sponsors/[id]/route.ts`

- [ ] **Step 1: Create `app/api/sponsors/route.ts`**

```ts
import { NextResponse } from "next/server";
import { SPONSORS } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ sponsors: SPONSORS, count: SPONSORS.length });
}
```

- [ ] **Step 2: Create `app/api/sponsors/[id]/route.ts`**

```ts
import { NextResponse } from "next/server";
import { getSponsor } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const sponsor = getSponsor(id);
  if (!sponsor) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ sponsor });
}
```

- [ ] **Step 3: Verify routes respond correctly** (dev server must be running)

```bash
curl -s http://localhost:3000/api/sponsors | jq '.count'
curl -s http://localhost:3000/api/sponsors/cleveland-hospital | jq '.sponsor.name'
```

Expected output:
```
3
"Cleveland Hospital"
```

- [ ] **Step 4: Commit**

```bash
git add app/api/sponsors/
git commit -m "api: add /api/sponsors and /api/sponsors/[id] route handlers"
```

---

## Task 6: Update causes API route to support parishSlug filter

**Files:**
- Modify: `app/api/causes/route.ts`

- [ ] **Step 1: Update the GET handler to read parishSlug from query params**

Replace the contents of `app/api/causes/route.ts`:

```ts
import { NextResponse } from "next/server";
import { listCauses } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parishSlug = searchParams.get("parishSlug") ?? undefined;
  const causes = listCauses(parishSlug ? { parishSlug } : undefined);
  return NextResponse.json({ causes, count: causes.length });
}
```

- [ ] **Step 2: Verify filter works**

```bash
npm run dev &
sleep 5
curl -s "http://localhost:3000/api/causes?parishSlug=skd" | jq '.count'
curl -s "http://localhost:3000/api/causes" | jq '.count'
```

Expected: first returns only SKD-affiliated causes (emmaus + any others with parishSlug "skd"), second returns all causes.

- [ ] **Step 3: Commit**

```bash
git add app/api/causes/route.ts
git commit -m "api: add parishSlug filter to /api/causes"
```

---

## Task 7: Extract ParishLayout wrapper component

**Files:**
- Create: `components/profiles/ParishLayout.tsx`

- [ ] **Step 1: Create `components/profiles/ParishLayout.tsx`**

This wraps content in the parish nav/header context used by cause pages scoped to a parish. It uses `ParishProfileHeader` from `@/components/Header` — already used in `give/cause/page.tsx`.

```tsx
import type { ReactNode } from "react";
import { ParishProfileHeader } from "@/components/Header";
import type { Parish } from "@/lib/catalog";

export function ParishLayout({
  parish,
  children,
}: {
  parish: Parish;
  children: ReactNode;
}) {
  return (
    <>
      <ParishProfileHeader
        parishName={parish.name}
        storeLabel="Parish Store"
        location={parish.location ?? ""}
        searchPlaceholder="Search products, ministries, causes…"
      />
      {children}
    </>
  );
}
```

Note: `ParishProfileHeader` prop names are defined in `@/components/Header`. Check `app/give/cause/page.tsx` for the exact props currently passed — align with that usage.

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit --skipLibCheck 2>&1 | grep -v "node_modules\|\.next"
```

- [ ] **Step 3: Commit**

```bash
git add components/profiles/ParishLayout.tsx
git commit -m "profiles: add ParishLayout wrapper component"
```

---

## Task 8: Extract ParishStorefront component

**Files:**
- Create: `components/profiles/ParishStorefront.tsx`

- [ ] **Step 1: Create `components/profiles/ParishStorefront.tsx`**

Copy the JSX from `app/stores/page.tsx` into this component. The component accepts `parish`, `products`, and `businesses` as props so the page file only handles fetching.

```tsx
import type { Parish, Product, Business } from "@/lib/catalog";
// copy all other imports from app/stores/page.tsx here

export function ParishStorefront({
  parish,
  products,
  businesses,
}: {
  parish: Parish;
  products: Product[];
  businesses: Business[];
}) {
  return (
    // paste the full JSX from app/stores/page.tsx's return statement here,
    // replacing hardcoded parish name / location with parish.name / parish.location,
    // and using the products/businesses props instead of the fetched vars
  );
}
```

Key substitutions when extracting:
- Replace `"Saint Katharine Drexel"` with `{parish.name}`
- Replace `"Weston, Florida"` with `{parish.location}`
- Replace hardcoded `href="/local-businesses/profile"` with `href={/local-businesses/${b.id}}`
- Replace hardcoded `href="/sponsors/profile"` with `href={/sponsors/${s.id}}` where s is a sponsor entity (leave placeholder or use first sponsor for now)
- Replace hardcoded `href="/give/cause"` with `href={/parishes/${parish.slug}/causes/emmaus}`

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit --skipLibCheck 2>&1 | grep -v "node_modules\|\.next"
```

- [ ] **Step 3: Commit**

```bash
git add components/profiles/ParishStorefront.tsx
git commit -m "profiles: extract ParishStorefront component"
```

---

## Task 9: Extract ServiceBusinessProfile component

**Files:**
- Create: `components/profiles/ServiceBusinessProfile.tsx`

- [ ] **Step 1: Create `components/profiles/ServiceBusinessProfile.tsx`**

Copy the JSX from `app/local-businesses/services/profile/page.tsx` into this component. Accept `business: Business` as the prop.

```tsx
import type { Business } from "@/lib/catalog";
// copy all other imports from the static services profile page

export function ServiceBusinessProfile({ business }: { business: Business }) {
  return (
    // paste the full JSX from the static page's return statement,
    // replacing hardcoded values with business.* fields
  );
}
```

Key substitutions:
- Replace `"Maria's Studios"` with `{business.name}`
- Replace `"Weston, FL · Photography"` with `{business.location} · {business.category}`
- Replace `"Supporting Emmaus Men's Retreat"` with `{business.parishSupported ?? ""}`
- Replace hardcoded SERVICES array with `{(business.services ?? []).map(...)}`
- Replace contact info with `{business.phone}`, `{business.email}`, `{business.website}`
- Replace about text with `{business.about ?? business.description}`

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit --skipLibCheck 2>&1 | grep -v "node_modules\|\.next"
```

- [ ] **Step 3: Commit**

```bash
git add components/profiles/ServiceBusinessProfile.tsx
git commit -m "profiles: extract ServiceBusinessProfile component"
```

---

## Task 10: Extract ProductSellerProfile component

**Files:**
- Create: `components/profiles/ProductSellerProfile.tsx`

- [ ] **Step 1: Create `components/profiles/ProductSellerProfile.tsx`**

Copy the JSX from `app/local-businesses/products/profile/page.tsx`. Accept `business: Business` and `products: Product[]` as props (products fetched by the page with `fetchProducts({ seller: business.id })`).

```tsx
import type { Business, Product } from "@/lib/catalog";
// copy all other imports from the static products profile page

export function ProductSellerProfile({
  business,
  products,
}: {
  business: Business;
  products: Product[];
}) {
  return (
    // paste JSX, replacing hardcoded values
  );
}
```

Key substitutions:
- Replace `"Harps Club"` with `{business.name}`
- Replace `"South Florida · Custom Merch"` with `{business.location} · {business.category}`
- Replace `"HC"` initials with `{business.initials}`
- Replace `"Supporting Saint Katharine Drexel"` with `{business.parishSupported ? \`Supporting ${business.parishSupported}\` : ""}`
- Replace hardcoded `description` text with `{business.about ?? business.description}`
- Replace `"Sarah Martinez"` with `{business.founderName ?? ""}`
- Replace founder short desc with `{business.founderShortDesc ?? ""}`
- Pass `products` prop to the product grid rendering

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit --skipLibCheck 2>&1 | grep -v "node_modules\|\.next"
```

- [ ] **Step 3: Commit**

```bash
git add components/profiles/ProductSellerProfile.tsx
git commit -m "profiles: extract ProductSellerProfile component"
```

---

## Task 11: Extract CauseProfile component

**Files:**
- Create: `components/profiles/CauseProfile.tsx`

- [ ] **Step 1: Create `components/profiles/CauseProfile.tsx`**

Copy the JSX from `app/give/cause/page.tsx` (excluding the `ParishProfileHeader` — that's provided by `ParishLayout`). Accept `cause`, `products`, and `businesses` as props.

```tsx
import type { Cause, Product, Business } from "@/lib/catalog";
// copy all other imports from give/cause/page.tsx except ParishProfileHeader

export function CauseProfile({
  cause,
  products,
  businesses,
}: {
  cause: Cause;
  products: Product[];
  businesses: Business[];
}) {
  return (
    // paste the JSX from give/cause/page.tsx's return statement,
    // omitting the <ParishProfileHeader> (provided by ParishLayout)
    // replacing hardcoded "Emmaus" with {cause.name}
    // replacing hardcoded description with {cause.description ?? ""}
    // replacing hardcoded tagline with {cause.tagline ?? ""}
    // keeping products/businesses from props
  );
}
```

Key substitutions:
- `"Emmaus · Cause"` → `{cause.name} · Cause`
- `"Emmaus Retreat"` heading → `{cause.name}`
- `"The Emmaus Retreat is…"` description → `{cause.description ?? ""}`
- `"A journey of faith…"` tagline → `{cause.tagline ?? ""}`
- Products grid already uses the `products` variable from `fetchProducts` — replace with the `products` prop
- Businesses list already uses `businesses.slice(0, 3)` — replace with `businesses` prop

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit --skipLibCheck 2>&1 | grep -v "node_modules\|\.next"
```

- [ ] **Step 3: Commit**

```bash
git add components/profiles/CauseProfile.tsx
git commit -m "profiles: extract CauseProfile component"
```

---

## Task 12: Extract SponsorProfile component

**Files:**
- Create: `components/profiles/SponsorProfile.tsx`

- [ ] **Step 1: Create `components/profiles/SponsorProfile.tsx`**

Copy the JSX from `app/sponsors/profile/page.tsx`. Accept `sponsor: Sponsor` as prop.

```tsx
import type { Sponsor } from "@/lib/catalog";
// copy all other imports from sponsors/profile/page.tsx

export function SponsorProfile({ sponsor }: { sponsor: Sponsor }) {
  return (
    // paste JSX from the static page's return statement,
    // replacing hardcoded values
  );
}
```

Key substitutions:
- `"Cleveland Hospital"` → `{sponsor.name}`
- `"World-class care…"` tagline → `{sponsor.tagline}`
- `"$100 credit"` offer → `{sponsor.offer ?? ""}`
- `"30 days left"` → `{sponsor.offerDaysLeft ?? ""}`
- `"Healthcare"` category chip → `{sponsor.category}`
- Contact info → `{sponsor.contact.name}`, `{sponsor.contact.email}`, `{sponsor.contact.phone}`
- Website → `{sponsor.website ?? ""}`
- About/description → `{sponsor.description}`

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit --skipLibCheck 2>&1 | grep -v "node_modules\|\.next"
```

- [ ] **Step 3: Commit**

```bash
git add components/profiles/SponsorProfile.tsx
git commit -m "profiles: extract SponsorProfile component"
```

---

## Task 13: Extract ProductDetail component

**Files:**
- Create: `components/profiles/ProductDetail.tsx`

- [ ] **Step 1: Create `components/profiles/ProductDetail.tsx`**

Copy the JSX from `app/shop/product/page.tsx`. Accept `product: Product` and `related: Product[]` as props.

```tsx
import type { Product } from "@/lib/catalog";
// copy all other imports from shop/product/page.tsx

export function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  // The numericPrice calculation moves here from the page file:
  const numericPrice = Number(product.price.replace(/[^0-9.]/g, ""));

  return (
    // paste JSX from app/shop/product/page.tsx's return,
    // using product and related props
    // update related product hrefs from "/shop/product" to `/shop/products/${r.id}`
    // update breadcrumb "Parish Merch" link to remain "/shop/listing"
  );
}
```

Key substitutions:
- All references to the hardcoded `PRODUCT_ID` / `product` variable → `product` prop
- All references to `related` → `related` prop
- Hardcoded `href="/shop/product"` in related product links → `href={/shop/products/${r.id}}`

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit --skipLibCheck 2>&1 | grep -v "node_modules\|\.next"
```

- [ ] **Step 3: Commit**

```bash
git add components/profiles/ProductDetail.tsx
git commit -m "profiles: extract ProductDetail component"
```

---

## Task 14: Create /parishes/[slug]/page.tsx dynamic route

**Files:**
- Create: `app/parishes/[slug]/page.tsx`

- [ ] **Step 1: Create the dynamic parish page**

```tsx
import { notFound } from "next/navigation";
import { fetchParish, fetchProducts, fetchBusinesses } from "@/lib/api";
import { ParishStorefront } from "@/components/profiles/ParishStorefront";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  const { listParishes } = await import("@/lib/catalog");
  return listParishes().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const parish = await fetchParish(slug);
  return { title: parish ? `${parish.name} Parish Store · ParishMart` : "Parish Store" };
}

export default async function ParishPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [parish, businesses] = await Promise.all([
    fetchParish(slug),
    fetchBusinesses(),
  ]);
  if (!parish) notFound();

  // Featured products: fetch from catalog by parish slug
  // For now, SKD parish uses its known product IDs; when backend is live,
  // the API will accept a parish filter.
  const products = await fetchProducts({ limit: 6 });

  return (
    <>
      <Header />
      <ParishStorefront parish={parish} products={products} businesses={businesses} />
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify the page loads in the browser**

```bash
playwright-cli open http://localhost:3000/parishes/skd
playwright-cli screenshot --filename=parish-skd.png
playwright-cli close
```

Expected: the same content currently at `/stores` now loads at `/parishes/skd`.

- [ ] **Step 3: Commit**

```bash
git add app/parishes/
git commit -m "route: /parishes/[slug] dynamic parish storefront"
```

---

## Task 15: Create /local-businesses/[id]/page.tsx dynamic route

**Files:**
- Create: `app/local-businesses/[id]/page.tsx`

- [ ] **Step 1: Create the dynamic business page**

```tsx
import { notFound } from "next/navigation";
import { fetchBusiness, fetchProducts } from "@/lib/api";
import { ServiceBusinessProfile } from "@/components/profiles/ServiceBusinessProfile";
import { ProductSellerProfile } from "@/components/profiles/ProductSellerProfile";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  const { BUSINESSES } = await import("@/lib/catalog");
  return BUSINESSES.map((b) => ({ id: b.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const business = await fetchBusiness(id);
  return { title: business ? `${business.name} · ParishMart` : "Local Business" };
}

export default async function LocalBusinessPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const business = await fetchBusiness(id);
  if (!business) notFound();

  if (business.kind === "product-seller") {
    const products = await fetchProducts({ seller: id });
    return (
      <>
        <Header />
        <ProductSellerProfile business={business} products={products} />
        <Footer />
      </>
    );
  }

  // kind === "service"
  return (
    <>
      <Header />
      <ServiceBusinessProfile business={business} />
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify both business kinds load**

```bash
playwright-cli open http://localhost:3000/local-businesses/maria-studios
playwright-cli screenshot --filename=biz-service.png
playwright-cli goto http://localhost:3000/local-businesses/harps-club
playwright-cli screenshot --filename=biz-product-seller.png
playwright-cli close
```

Expected: Maria Studios renders service profile, Harps Club renders product seller profile.

- [ ] **Step 3: Commit**

```bash
git add "app/local-businesses/[id]/"
git commit -m "route: /local-businesses/[id] kind-discriminated business profile"
```

---

## Task 16: Create parish-scoped cause route /parishes/[slug]/causes/[key]/page.tsx

**Files:**
- Create: `app/parishes/[slug]/causes/[key]/page.tsx`

- [ ] **Step 1: Create the parish-scoped cause page**

```tsx
import { notFound } from "next/navigation";
import { fetchCause, fetchParish, fetchProducts, fetchBusinesses } from "@/lib/api";
import { ParishLayout } from "@/components/profiles/ParishLayout";
import { CauseProfile } from "@/components/profiles/CauseProfile";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  const { listCauses } = await import("@/lib/catalog");
  const causes = listCauses();
  return causes
    .filter((c) => c.parishSlug)
    .map((c) => ({ slug: c.parishSlug!, key: c.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; key: string }>;
}) {
  const { key } = await params;
  const cause = await fetchCause(key);
  return { title: cause ? `${cause.name} · ParishMart` : "Cause" };
}

export default async function ParishCausePage({
  params,
}: {
  params: Promise<{ slug: string; key: string }>;
}) {
  const { slug, key } = await params;
  const [cause, parish, businesses] = await Promise.all([
    fetchCause(key),
    fetchParish(slug),
    fetchBusinesses(),
  ]);
  if (!cause || !parish) notFound();

  const products = await fetchProducts({ cause: key, limit: 8 });

  return (
    <>
      <ParishLayout parish={parish}>
        <CauseProfile cause={cause} products={products} businesses={businesses} />
      </ParishLayout>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify the page loads**

```bash
playwright-cli open http://localhost:3000/parishes/skd/causes/emmaus
playwright-cli screenshot --filename=cause-emmaus.png
playwright-cli close
```

Expected: Emmaus cause page loads inside the SKD parish environment.

- [ ] **Step 3: Commit**

```bash
git add "app/parishes/[slug]/causes/"
git commit -m "route: /parishes/[slug]/causes/[key] parish-scoped cause page"
```

---

## Task 17: Create standalone cause route /causes/[key]/page.tsx

**Files:**
- Create: `app/causes/[key]/page.tsx`

- [ ] **Step 1: Create the standalone cause page**

```tsx
import { notFound } from "next/navigation";
import { fetchCause, fetchProducts, fetchBusinesses } from "@/lib/api";
import { CauseProfile } from "@/components/profiles/CauseProfile";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  const { listCauses } = await import("@/lib/catalog");
  // Only standalone causes (no parishSlug) get a static param here.
  // Parish-scoped causes are handled by /parishes/[slug]/causes/[key].
  const causes = listCauses();
  return causes.filter((c) => !c.parishSlug).map((c) => ({ key: c.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const cause = await fetchCause(key);
  return { title: cause ? `${cause.name} · ParishMart` : "Cause" };
}

export default async function StandaloneCausePage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const [cause, businesses] = await Promise.all([
    fetchCause(key),
    fetchBusinesses(),
  ]);
  if (!cause) notFound();

  const products = await fetchProducts({ cause: key, limit: 8 });

  return (
    <>
      <Header />
      <CauseProfile cause={cause} products={products} businesses={businesses} />
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify with a standalone cause**

```bash
playwright-cli open http://localhost:3000/causes/face
playwright-cli screenshot --filename=cause-face.png
playwright-cli close
```

Expected: FACE cause page loads with standard header (no parish environment).

- [ ] **Step 3: Commit**

```bash
git add "app/causes/"
git commit -m "route: /causes/[key] standalone cause page"
```

---

## Task 18: Create /sponsors/[id]/page.tsx dynamic route

**Files:**
- Create: `app/sponsors/[id]/page.tsx`

- [ ] **Step 1: Create the dynamic sponsor page**

```tsx
import { notFound } from "next/navigation";
import { fetchSponsor } from "@/lib/api";
import { SponsorProfile } from "@/components/profiles/SponsorProfile";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  const { SPONSORS } = await import("@/lib/catalog");
  return SPONSORS.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const sponsor = await fetchSponsor(id);
  return { title: sponsor ? `${sponsor.name} · Sponsor · ParishMart` : "Sponsor" };
}

export default async function SponsorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const sponsor = await fetchSponsor(id);
  if (!sponsor) notFound();

  return (
    <>
      <Header />
      <SponsorProfile sponsor={sponsor} />
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify**

```bash
playwright-cli open http://localhost:3000/sponsors/cleveland-hospital
playwright-cli screenshot --filename=sponsor-cleveland.png
playwright-cli close
```

- [ ] **Step 3: Commit**

```bash
git add "app/sponsors/[id]/"
git commit -m "route: /sponsors/[id] dynamic sponsor profile"
```

---

## Task 19: Create /shop/products/[id]/page.tsx dynamic route

**Files:**
- Create: `app/shop/products/[id]/page.tsx`

- [ ] **Step 1: Create the dynamic product page**

```tsx
import { notFound } from "next/navigation";
import { fetchProduct, fetchProducts } from "@/lib/api";
import { ProductDetail } from "@/components/profiles/ProductDetail";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const RELATED_LIMIT = 3;

export async function generateStaticParams() {
  const { PRODUCTS } = await import("@/lib/catalog");
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchProduct(id);
  return { title: product ? `${product.name} · ParishMart` : "Product" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchProduct(id);
  if (!product) notFound();

  // Fetch related products: same category, excluding the current product
  const related = await fetchProducts({ category: product.category, limit: RELATED_LIMIT + 1 });
  const relatedFiltered = related.filter((r) => r.id !== id).slice(0, RELATED_LIMIT);

  return (
    <>
      <Header />
      <ProductDetail product={product} related={relatedFiltered} />
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify**

```bash
playwright-cli open "http://localhost:3000/shop/products/skd-mens-microfleece-jacket"
playwright-cli screenshot --filename=product-jacket.png
playwright-cli close
```

- [ ] **Step 3: Commit**

```bash
git add "app/shop/products/"
git commit -m "route: /shop/products/[id] dynamic product detail"
```

---

## Task 20: Update list/index pages with dynamic hrefs

**Files:**
- Modify: `app/local-businesses/page.tsx`
- Modify: `app/sponsors/page.tsx`
- Modify: `app/give/page.tsx`

- [ ] **Step 1: Update `app/local-businesses/page.tsx`**

a) The "Profile type examples" section has two hardcoded `<Link href="/local-businesses/services/profile">` and `<Link href="/local-businesses/products/profile">`. Replace with:
```tsx
<Link href="/local-businesses/maria-studios" ...>
<Link href="/local-businesses/harps-club" ...>
```

b) In the businesses list rendered from `fetchBusinesses()`, find where business card `href` is set. Replace `b.href` (the now-removed field) or any hardcoded path with:
```tsx
href={`/local-businesses/${b.id}`}
```

- [ ] **Step 2: Update `app/sponsors/page.tsx`**

a) Import `fetchSponsors` and `Sponsor`:
```tsx
import { fetchSponsors } from "@/lib/api";
import type { Sponsor } from "@/lib/catalog";
```

b) Change the page to `async` and fetch sponsors:
```tsx
export default async function SponsorsCategoryPage() {
  const sponsors = await fetchSponsors();
  // ...
}
```

c) Replace the hardcoded `<SponsorOfferCard>` list with a map over `sponsors`:
```tsx
{sponsors.map((s) => (
  <Link key={s.id} href={`/sponsors/${s.id}`}>
    <SponsorOfferCard
      compact
      photo="business"
      initials={s.name.slice(0, 2).toUpperCase()}
      title={s.name}
      offer={s.offer ?? ""}
      daysLeft={s.offerDaysLeft ?? ""}
    />
  </Link>
))}
```

d) Remove the hardcoded `<SponsorBannerCarousel>` static entries if they reference non-dynamic sponsors.

- [ ] **Step 3: Update `app/give/page.tsx`**

The page currently passes `causeHref="/stores/give/giving"` to `<GiveContent>`. Update to `/parishes/skd/causes/emmaus`:

```tsx
<GiveContent causeHref="/parishes/skd/causes/emmaus" />
```

(A future improvement would fetch causes and pass the first SKD cause dynamically; hardcoding the primary cause slug is acceptable for now.)

- [ ] **Step 4: Verify all three pages load**

```bash
playwright-cli open http://localhost:3000/local-businesses
playwright-cli screenshot --filename=list-businesses.png
playwright-cli goto http://localhost:3000/sponsors
playwright-cli screenshot --filename=list-sponsors.png
playwright-cli goto http://localhost:3000/give
playwright-cli screenshot --filename=give.png
playwright-cli close
```

- [ ] **Step 5: Commit**

```bash
git add app/local-businesses/page.tsx app/sponsors/page.tsx app/give/page.tsx
git commit -m "list pages: update hrefs to dynamic routes, wire fetchSponsors"
```

---

## Task 21: Add redirects in next.config.ts

**Files:**
- Modify: `next.config.ts`

- [ ] **Step 1: Add a `redirects` function to `next.config.ts`**

Replace the file contents:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/stores", destination: "/parishes/skd", permanent: true },
      { source: "/local-businesses/products/profile", destination: "/local-businesses/harps-club", permanent: true },
      { source: "/local-businesses/services/profile", destination: "/local-businesses/maria-studios", permanent: true },
      { source: "/local-businesses/profile", destination: "/local-businesses/maria-studios", permanent: true },
      { source: "/give/cause", destination: "/parishes/skd/causes/emmaus", permanent: true },
      { source: "/shop/product", destination: "/shop/products/skd-mens-microfleece-jacket", permanent: true },
      { source: "/sponsors/profile", destination: "/sponsors/cleveland-hospital", permanent: true },
    ];
  },
};

export default nextConfig;
```

- [ ] **Step 2: Verify redirects work**

```bash
playwright-cli open http://localhost:3000/stores
playwright-cli eval "window.location.href"
```

Expected: `http://localhost:3000/parishes/skd` (after redirect).

```bash
playwright-cli goto http://localhost:3000/give/cause
playwright-cli eval "window.location.href"
playwright-cli close
```

Expected: `http://localhost:3000/parishes/skd/causes/emmaus`.

- [ ] **Step 3: Commit**

```bash
git add next.config.ts
git commit -m "redirects: map all retired static paths to dynamic equivalents"
```

---

## Task 22: Delete retired static pages

**Files:**
- Delete: `app/stores/page.tsx`
- Delete: `app/local-businesses/services/profile/page.tsx`
- Delete: `app/local-businesses/products/profile/page.tsx`
- Delete: `app/local-businesses/profile/page.tsx`
- Delete: `app/give/cause/page.tsx`
- Delete: `app/sponsors/profile/page.tsx`
- Delete: `app/shop/product/page.tsx`

- [ ] **Step 1: Remove parent directories where appropriate, individual files otherwise**

```bash
cd /Users/jrmotta/Documents/Harold/Front_Parishmart/parishmart
rm app/stores/page.tsx
rm -r app/local-businesses/services/profile
rm -r app/local-businesses/products/profile
rm -r app/local-businesses/profile
rm app/give/cause/page.tsx
rm -r app/sponsors/profile
rm app/shop/product/page.tsx
```

Note: Only delete the `profile` subdirectories, not parent directories — `/local-businesses`, `/give`, `/sponsors`, and `/shop` still have pages.

- [ ] **Step 2: Verify TypeScript compiles with no errors from deleted files**

```bash
npx tsc --noEmit --skipLibCheck 2>&1 | grep -v "node_modules\|\.next"
```

Expected: zero errors. Any error here means a remaining file still imports from a deleted one — fix each before proceeding.

- [ ] **Step 3: Run full browser smoke test**

```bash
playwright-cli open http://localhost:3000/parishes/skd
playwright-cli screenshot --filename=final-parish.png
playwright-cli goto http://localhost:3000/local-businesses/harps-club
playwright-cli screenshot --filename=final-biz-product.png
playwright-cli goto http://localhost:3000/local-businesses/maria-studios
playwright-cli screenshot --filename=final-biz-service.png
playwright-cli goto http://localhost:3000/parishes/skd/causes/emmaus
playwright-cli screenshot --filename=final-cause-parish.png
playwright-cli goto http://localhost:3000/causes/face
playwright-cli screenshot --filename=final-cause-standalone.png
playwright-cli goto http://localhost:3000/sponsors/cleveland-hospital
playwright-cli screenshot --filename=final-sponsor.png
playwright-cli goto "http://localhost:3000/shop/products/skd-mens-microfleece-jacket"
playwright-cli screenshot --filename=final-product.png
playwright-cli close
```

Expected: all 7 pages render without errors.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "cleanup: remove retired static profile pages"
```

---

## Verification Checklist

After all 22 tasks are complete:

- [ ] `NEXT_PUBLIC_API_BASE` is unset → site serves from catalog seed data, all dynamic routes load
- [ ] All 6 new dynamic routes respond: `/parishes/skd`, `/local-businesses/harps-club`, `/local-businesses/maria-studios`, `/parishes/skd/causes/emmaus`, `/causes/face`, `/sponsors/cleveland-hospital`, `/shop/products/skd-mens-microfleece-jacket`
- [ ] All 7 redirects return 301 to correct destinations
- [ ] `npx tsc --noEmit --skipLibCheck` exits clean
- [ ] `/api/sponsors` returns 3 sponsors
- [ ] `/api/causes?parishSlug=skd` returns only SKD-affiliated causes
