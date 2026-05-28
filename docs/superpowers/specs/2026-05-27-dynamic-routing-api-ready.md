# Dynamic Routing & API-Ready Data Layer

**Date:** 2026-05-27  
**Status:** Approved  
**Goal:** Replace all hardcoded static profile pages with dynamic routes and lock down the entity contract so the frontend can switch from catalog seed data to a real backend by setting one environment variable.

---

## Background

The project already has a data-switching mechanism in `lib/api.ts`: when `NEXT_PUBLIC_API_BASE` is set it fetches from an external API; when not set it falls back to `lib/catalog.ts`. API routes exist for products, businesses, parishes, and causes. However:

- All profile pages are static (single hardcoded entity per route)
- Sponsors are entirely absent from the data layer
- Business type is not discriminated (`kind` field missing)
- Causes have no parish affiliation field
- No dynamic route can render multiple entities of any type

---

## Entity Contract

The backend must implement to these TypeScript types. Any deviation requires a coordinated change to both `lib/catalog.ts` and the consuming pages.

### `Business` — add `kind` discriminator
```ts
type Business = {
  // ...existing fields...
  kind: "service" | "product-seller"
}
```
Existing businesses in catalog: Harps Club → `"product-seller"`, Maria Studios → `"service"`.

### `Cause` — add optional parish affiliation
```ts
type Cause = {
  // ...existing fields...
  parishSlug?: string   // when set, cause lives inside the parish environment
}
```
Existing causes in catalog: Emmaus → `parishSlug: "skd"`.

### `Sponsor` — new entity
```ts
type Sponsor = {
  id: string
  name: string
  tagline: string
  description: string
  logoSrc?: string
  bannerSrc?: string
  website?: string
  category: string        // e.g. "Healthcare", "Education", "Finance"
  location: string
  contact: {
    name: string
    email: string
    phone?: string
  }
}
```

### `Product` and `Parish` — no changes needed.

---

## Route Structure

### New dynamic routes

| Route | Replaces (static) | Notes |
|---|---|---|
| `/parishes/[slug]` | `/stores` | Parish storefront |
| `/local-businesses/[id]` | `/local-businesses/*/profile` (3 pages) | Kind-discriminated |
| `/parishes/[slug]/causes/[id]` | `/give/cause` | Parish-scoped cause |
| `/causes/[id]` | — (no standalone existed) | Standalone cause |
| `/sponsors/[id]` | `/sponsors/profile` | Always standalone |
| `/shop/products/[id]` | `/shop/product` | Product detail |

### Redirects for retired static paths

| Old path | Redirects to |
|---|---|
| `/stores` | `/parishes/skd` |
| `/local-businesses/products/profile` | `/local-businesses/harps-club` |
| `/local-businesses/services/profile` | `/local-businesses/maria-studios` |
| `/local-businesses/profile` | `/local-businesses/maria-studios` |
| `/give/cause` | `/parishes/skd/causes/emmaus` |
| `/shop/product` | `/shop/products/skd-mens-microfleece-jacket` |
| `/sponsors/profile` | `/sponsors/[id-of-first-seed-sponsor]` (ID set when catalog entry is added) |

### List/index pages — stay as-is, links updated

- `/local-businesses` — already calls `fetchBusinesses()`; update card links to `/local-businesses/[id]`
- `/shop/listing` — update product links to `/shop/products/[id]`
- `/sponsors` — wire in `fetchSponsors()`
- `/give` — wire in `fetchCauses()`

---

## Data Layer Changes

### `lib/catalog.ts`
- Set `kind` on all entries in `BUSINESSES`
- Set `parishSlug` on affiliated entries in `CAUSES`
- Add `SPONSORS` array (2–3 seed entries) matching `Sponsor` type
- Export `Sponsor` type, `listSponsors()`, `getSponsor(id)`

### `lib/api.ts`
- Add `fetchSponsors(): Promise<Sponsor[]>`
- Add `fetchSponsor(id: string): Promise<Sponsor | null>`
- Update `fetchCauses(opts?: { parishSlug?: string })` to support parish filter
- All new functions follow the existing local/external pattern:
  ```ts
  if (!externalBase()) return localSponsors()
  return apiFetch('/api/sponsors')
  ```

### New API route handlers
- `app/api/sponsors/route.ts` — `GET /api/sponsors` → `{ sponsors, count }`
- `app/api/sponsors/[id]/route.ts` — `GET /api/sponsors/[id]` → `{ sponsor }`
- Update `app/api/causes/route.ts` — support `?parishSlug=` query param

---

## Component Architecture

Static profile page content is extracted into named components under `components/profiles/`. Page files contain only data fetching and routing logic.

### Extracted components

| Component | Extracted from |
|---|---|
| `components/profiles/ParishStorefront.tsx` | `app/stores/page.tsx` |
| `components/profiles/ServiceBusinessProfile.tsx` | `app/local-businesses/services/profile/page.tsx` |
| `components/profiles/ProductSellerProfile.tsx` | `app/local-businesses/products/profile/page.tsx` |
| `components/profiles/CauseProfile.tsx` | `app/give/cause/page.tsx` |
| `components/profiles/SponsorProfile.tsx` | `app/sponsors/profile/page.tsx` |
| `components/profiles/ProductDetail.tsx` | `app/shop/product/page.tsx` |

### Business kind discrimination

`app/local-businesses/[id]/page.tsx`:
```ts
const business = await fetchBusiness(params.id)
if (!business) notFound()
if (business.kind === "service") return <ServiceBusinessProfile business={business} />
if (business.kind === "product-seller") return <ProductSellerProfile business={business} />
```

### Parish-scoped vs standalone causes

Both routes render `<CauseProfile cause={cause} />`. The parish-scoped route additionally fetches the parish and wraps the page in `<ParishLayout parish={parish}>`, providing the parish nav, branding, and community context. The standalone `/causes/[id]` renders without that wrapper.

### `generateStaticParams`

Every dynamic page exports `generateStaticParams` pulling from the catalog, so pages pre-render at build time with the seed entities. When `NEXT_PUBLIC_API_BASE` is set the catalog IDs are not representative of the real data set, so pages also export `dynamicParams = true` (Next.js default) to allow server-side rendering of any ID not in the static list. A `force-dynamic` escape hatch is not needed — Next.js will fall through to SSR for unknown params automatically.

```ts
// Example: /local-businesses/[id]/page.tsx
export async function generateStaticParams() {
  const businesses = await fetchBusinesses()
  return businesses.map(b => ({ id: b.id }))
}
```

---

## Implementation Sequence

1. **Contract** — Update `Business` and `Cause` types in catalog.ts; add `Sponsor` type + seed data
2. **API layer** — Add sponsor routes and fetch functions; update causes route for `parishSlug` filter
3. **Extract components** — Move profile page content into `components/profiles/`
4. **New dynamic routes** — Build pages one entity at a time: parishes → businesses → causes → sponsors → products
5. **Update list pages** — Wire `fetchSponsors`/`fetchCauses` into `/sponsors` and `/give`; update all card links
6. **Redirects** — Add Next.js redirects in `next.config.ts` for all retired static paths
7. **Delete static pages** — Remove retired profile pages once redirects are in place

---

## Out of Scope

- Authentication / authorization
- Onboarding form submission to backend (separate concern)
- Search across entities
- Pagination on list pages
- Image upload / CDN integration
