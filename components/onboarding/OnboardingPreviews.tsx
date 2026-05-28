/**
 * Live preview panels for each onboarding flow.
 * Each component mirrors the key visual sections of its destination page
 * at a compressed scale that fits inside the 520px preview card.
 */
import { Photo } from "@/components/Photo";

/* ─────────────────────────────────────────────
   PRODUCT SELLER — mirrors /local-businesses/products/profile
   ───────────────────────────────────────────── */
export function ProductSellerPreview() {
  return (
    <>
      {/* Hero: dark navy banner with merch photo + left gradient */}
      <div className="relative min-h-[210px] overflow-hidden">
        <Photo
          kind="merch"
          ratio="auto"
          rounded="rounded-none"
          className="absolute inset-0 !rounded-none h-full"
          overlay="none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pm-navy/95 via-pm-navy/80 to-transparent" />

        <div className="relative flex h-full gap-3 p-4">
          {/* Left: logo + name + tagline + CTAs */}
          <div className="flex flex-1 flex-col justify-between gap-2 text-white">
            <div className="flex flex-col gap-1.5">
              <span className="text-[8px] font-bold uppercase tracking-widest text-white/50">
                Merch &amp; Apparel
              </span>
              {/* Logo badge */}
              <div className="mb-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white shadow-pm-soft">
                <span className="pm-gradient-text text-[9px] font-extrabold">HC</span>
              </div>
              <p className="text-lg font-extrabold leading-none tracking-tight">
                Harps <span className="pm-gradient-text">Club</span>
              </p>
              <p className="text-[9px] font-semibold text-white/60">
                Supporting Saint Katharine Drexel
              </p>
              <p className="text-[9px] leading-relaxed text-white/70">
                Custom apparel, parish merch and ministry products.
              </p>
            </div>
            <div className="flex gap-1.5">
              <span className="cursor-default rounded-full bg-pm-blue px-2.5 py-1 text-[9px] font-extrabold text-white">
                Shop Products
              </span>
              <span className="cursor-default rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[9px] font-extrabold text-white">
                See Community
              </span>
            </div>
          </div>

          {/* Right: founder card */}
          <div className="w-36 shrink-0 self-center rounded-[16px] border border-pm-border bg-white p-3 shadow-pm-soft">
            <div className="flex items-start gap-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pm-blue to-pm-cyan text-[10px] font-extrabold text-white shadow-pm-soft">
                SM
              </div>
              <div>
                <p className="text-[8px] font-bold uppercase tracking-wider text-pm-blue">Founder</p>
                <p className="mt-0.5 text-[10px] font-extrabold text-pm-navy">Sarah Martinez</p>
                <p className="text-[8px] text-pm-muted">Wellness Advocate</p>
              </div>
            </div>
            <p className="mt-2 text-[8px] leading-relaxed text-pm-muted line-clamp-3">
              As a mom and parish volunteer, I created Harps Club to make meaningful merch accessible for faith communities.
            </p>
          </div>
        </div>
      </div>

      {/* Products mini-grid */}
      <div className="border-t border-pm-border p-3">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[9px] font-bold uppercase tracking-wider text-pm-muted">Featured Products</p>
          <span className="cursor-default text-[9px] text-pm-blue">View all →</span>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-pm-border">
              <Photo kind="merch" ratio="1/1" rounded="rounded-none" className="!rounded-none" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   LOCAL BUSINESS (services) — mirrors /local-businesses/services/profile
   ───────────────────────────────────────────── */
export function LocalBizServicePreview() {
  return (
    <>
      {/* Hero: white-fade gradient over photo */}
      <div className="relative min-h-[200px] overflow-hidden">
        <Photo
          kind="business"
          ratio="auto"
          rounded="rounded-none"
          className="absolute inset-0 !rounded-none h-full"
          overlay="none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/10" />

        <div className="relative flex items-start gap-4 p-5">
          {/* Left: logo + name + tags + CTAs */}
          <div className="flex flex-1 flex-col gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan text-xs font-extrabold text-white shadow-pm-soft">
              MS
            </span>
            <div>
              <h3 className="text-lg font-extrabold leading-tight tracking-tight text-pm-navy">
                Maria&rsquo;s Studios
              </h3>
              <p className="text-[11px] text-pm-muted">
                Photography for SKD families, retreats &amp; events.
              </p>
            </div>
            <div className="flex flex-wrap gap-1">
              {["Weston, FL", "Supports Emmaus", "Photography"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-pm-border bg-white px-2 py-0.5 text-[9px] font-medium text-pm-navy"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <span className="cursor-default rounded-full bg-pm-navy px-3 py-1.5 text-[10px] font-extrabold text-white">
                View Services
              </span>
              <span className="cursor-default rounded-full border border-pm-border bg-white px-3 py-1.5 text-[10px] font-extrabold text-pm-navy">
                Share
              </span>
            </div>
          </div>

          {/* Right: Parishioner Coupon card */}
          <div className="w-28 shrink-0 rounded-[20px] border border-pm-border bg-white p-3 shadow-pm-soft">
            <p className="text-[10px] font-extrabold text-pm-navy">
              Parishioner Coupon
            </p>
            <p className="mt-0.5 text-[9px] text-pm-muted">
              Exclusive for SKD parishioners.
            </p>
            <div className="mt-2 rounded-xl bg-gradient-to-br from-pm-blue to-pm-cyan p-2.5 text-white">
              <p className="text-[7px] font-bold uppercase tracking-wider opacity-80">
                Community offer
              </p>
              <p className="text-xl font-extrabold leading-none">10% OFF</p>
              <p className="mt-0.5 text-[8px] opacity-90">
                Photography sessions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Founder section: two-column */}
      <div className="grid grid-cols-[1fr_1fr] border-t border-pm-border">
        <div className="flex flex-col justify-center gap-2 p-4">
          <p className="text-[9px] font-bold uppercase tracking-wider text-pm-blue">
            Meet the founder
          </p>
          <p className="text-sm font-extrabold text-pm-navy">Maria Gonzalez</p>
          <p className="text-[10px] text-pm-muted">
            Founder · Photographer · SKD &amp; Emmaus supporter
          </p>
          <p className="text-[10px] leading-relaxed text-pm-muted">
            Local photographer serving SKD families for over three years,
            capturing weddings, baptisms and retreats.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-br-none">
          <Photo
            kind="people"
            ratio="auto"
            rounded="rounded-none"
            className="absolute inset-0 !rounded-none !border-0 h-full"
          />
        </div>
      </div>

      {/* Services section: video left + list right */}
      <div className="grid grid-cols-[1fr_1fr] border-t border-pm-border">
        <div className="relative min-h-[130px] overflow-hidden">
          <Photo
            kind="retreat"
            ratio="auto"
            rounded="rounded-none"
            className="absolute inset-0 !rounded-none h-full"
            overlay="strong"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-pm-card">
              <svg
                className="h-4 w-4 translate-x-0.5 text-pm-blue"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1 p-4">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-wider text-pm-blue">
            Services
          </p>
          {[
            { name: "Family Photography", price: "From $150" },
            { name: "Retreat Coverage", price: "From $350" },
            { name: "Parish Events", price: "Quote" },
          ].map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-between border-b border-pm-border/50 py-1 last:border-0"
            >
              <p className="text-[10px] font-medium text-pm-navy">{s.name}</p>
              <span className="text-[10px] font-bold text-pm-blue">
                {s.price}
              </span>
            </div>
          ))}
          <span className="mt-2 cursor-default rounded-full bg-pm-navy py-1.5 text-center text-[10px] font-extrabold text-white">
            Contact us
          </span>
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   SPONSOR — mirrors /sponsors/profile
   ───────────────────────────────────────────── */
export function SponsorProfilePreview() {
  return (
    <>
      {/* Two-column hero: wide photo + info */}
      <div className="grid grid-cols-[1fr_1.1fr]">
        {/* Left: photo */}
        <div className="relative min-h-[200px] overflow-hidden">
          <Photo
            kind="business"
            ratio="auto"
            rounded="rounded-none"
            className="absolute inset-0 !rounded-none h-full"
            overlay="subtle"
          />
        </div>
        {/* Right: sponsor details */}
        <div className="flex flex-col gap-2.5 p-4">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-pm-border bg-white text-[10px] font-extrabold text-pm-navy shadow-pm-soft">
            CH
          </span>
          <div>
            <p className="text-xs font-extrabold text-pm-navy">
              Cleveland Hospital
            </p>
            <p className="text-[10px] text-pm-muted">
              Healthcare · Weston, FL
            </p>
          </div>
          <div className="flex flex-wrap gap-1">
            {["All SKD parishioners", "500 Members"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-pm-border bg-white px-1.5 py-0.5 text-[8px] font-medium text-pm-navy"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="rounded-xl bg-gradient-to-br from-pm-blue to-pm-cyan p-2.5 text-white">
            <p className="text-[7px] font-bold uppercase tracking-wider opacity-80">
              Exclusive benefit
            </p>
            <p className="text-base font-extrabold leading-tight">
              $100 health credit
            </p>
          </div>
          <div className="flex gap-1.5">
            <span className="cursor-default rounded-full bg-pm-navy px-2.5 py-1.5 text-[10px] font-extrabold text-white">
              Redeem Offer
            </span>
            <span className="cursor-default rounded-full border border-pm-border bg-white px-2.5 py-1.5 text-[10px] font-extrabold text-pm-navy">
              Share offer
            </span>
          </div>
        </div>
      </div>

      {/* About sections */}
      <div className="space-y-3 border-t border-pm-border p-4">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-wider text-pm-blue">
            About the Company
          </p>
          <p className="mt-1.5 text-[11px] leading-relaxed text-pm-muted">
            A leading healthcare provider in South Florida, committed to
            serving faith-based communities through integrated, compassionate
            care programs.
          </p>
        </div>
        <div>
          <p className="text-[9px] font-bold uppercase tracking-wider text-pm-blue">
            About the Offer
          </p>
          <p className="mt-1.5 text-[11px] leading-relaxed text-pm-muted">
            Participating parish communities can receive up to $100 in annual
            preventive care services at no cost.
          </p>
        </div>
        <div className="flex items-center justify-between rounded-2xl border border-pm-border bg-pm-soft/50 px-3 py-2.5">
          <p className="text-[10px] font-bold text-pm-navy">
            Terms &amp; conditions
          </p>
          <span className="text-[10px] text-pm-blue">View →</span>
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   PARISH — mirrors /stores (parish store page)
   ───────────────────────────────────────────── */
export function ParishStorePreview() {
  return (
    <>
      {/* Hero: left info + right photo */}
      <div className="grid grid-cols-[1fr_1fr]">
        <div className="flex flex-col gap-2.5 p-4">
          <div className="flex items-center gap-1.5">
            <span className="grid h-6 w-6 shrink-0 place-items-center overflow-hidden rounded-md border border-pm-border bg-pm-soft text-[8px] font-extrabold text-pm-navy">
              SKD
            </span>
            <div>
              <p className="text-[8px] font-bold text-pm-navy">
                Saint Katharine Drexel
              </p>
              <p className="text-[8px] text-pm-muted">Weston, Florida</p>
            </div>
          </div>
          <h3 className="text-sm font-extrabold leading-tight tracking-tight text-pm-navy">
            The parish at the{" "}
            <span className="pm-gradient-text">center</span> of the community.
          </h3>
          <div className="flex gap-3">
            <div>
              <p className="text-sm font-extrabold text-pm-navy">$2.4K</p>
              <p className="text-[7px] uppercase tracking-wider text-pm-muted">
                Raised
              </p>
            </div>
            <div>
              <p className="text-sm font-extrabold text-pm-navy">8</p>
              <p className="text-[7px] uppercase tracking-wider text-pm-muted">
                Ministries
              </p>
            </div>
            <div>
              <p className="text-sm font-extrabold text-pm-navy">3</p>
              <p className="text-[7px] uppercase tracking-wider text-pm-muted">
                Campaigns
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <span className="cursor-default rounded-full bg-pm-navy px-2.5 py-1.5 text-[9px] font-extrabold text-white">
              Shop with Parish
            </span>
            <span className="cursor-default rounded-full border border-pm-border bg-white px-2.5 py-1.5 text-[9px] font-extrabold text-pm-navy">
              Give with Love
            </span>
          </div>
        </div>
        {/* Right: congregation photo */}
        <div className="relative overflow-hidden rounded-tr-[28px]">
          <Photo
            kind="congregation"
            ratio="auto"
            rounded="rounded-none"
            className="absolute inset-0 !rounded-none h-full"
          />
        </div>
      </div>

      {/* About */}
      <div className="border-t border-pm-border p-4">
        <p className="text-[9px] font-bold uppercase tracking-wider text-pm-muted">
          About the Parish
        </p>
        <p className="mt-1.5 text-[11px] leading-relaxed text-pm-muted">
          The cornerstone of Weston&rsquo;s Catholic community. Saint
          Katharine Drexel serves families through formation, prayer and
          service.
        </p>
      </div>

      {/* Products mini-grid */}
      <div className="border-t border-pm-border p-3">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[9px] font-bold uppercase tracking-wider text-pm-muted">
            Featured Products
          </p>
          <span className="cursor-default text-[9px] text-pm-blue">
            View all →
          </span>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-pm-border"
            >
              <Photo
                kind="merch"
                ratio="1/1"
                rounded="rounded-none"
                className="!rounded-none"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   CAUSE — mirrors /give/cause
   ───────────────────────────────────────────── */
export function CauseGivePreview() {
  return (
    <>
      {/* Dark banner */}
      <div className="relative min-h-[200px] overflow-hidden">
        <Photo
          kind="retreat"
          ratio="auto"
          rounded="rounded-none"
          className="absolute inset-0 !rounded-none h-full"
          overlay="strong"
        />
        <div className="relative flex h-full flex-col justify-between p-4">
          {/* Top breadcrumb badges */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="rounded-full border border-white/30 bg-white/10 px-2 py-0.5 text-[9px] font-bold text-white backdrop-blur">
              Saint Katharine Drexel
            </span>
            <span className="rounded-full border border-white/30 bg-white/10 px-2 py-0.5 text-[9px] font-bold text-white backdrop-blur">
              Emmaus History
            </span>
          </div>
          {/* Bottom: headline + CTAs */}
          <div className="mt-12 text-white">
            <h3 className="text-lg font-extrabold leading-tight">
              Walk with Christ. Support Emmaus.
            </h3>
            <p className="mt-1 text-[11px] text-white/80">
              A retreat experience that transforms lives through faith and
              community.
            </p>
            <div className="mt-3 flex gap-2">
              <span className="cursor-default rounded-full bg-pm-blue px-3 py-1.5 text-[10px] font-extrabold text-white">
                Support Now
              </span>
              <span className="cursor-default rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[10px] font-extrabold text-white backdrop-blur">
                Shop Emmaus Merch
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats + about */}
      <div className="space-y-4 p-4">
        <div className="flex gap-5">
          <div>
            <p className="text-sm font-extrabold text-pm-navy">47</p>
            <p className="text-[8px] uppercase tracking-wider text-pm-muted">
              Supporters
            </p>
          </div>
          <div>
            <p className="text-sm font-extrabold text-pm-navy">$2.8K</p>
            <p className="text-[8px] uppercase tracking-wider text-pm-muted">
              Raised
            </p>
          </div>
          <div>
            <p className="text-sm font-extrabold text-pm-navy">12</p>
            <p className="text-[8px] uppercase tracking-wider text-pm-muted">
              Local Supporters
            </p>
          </div>
        </div>
        <div>
          <p className="text-[9px] font-bold uppercase tracking-wider text-pm-blue">
            About Emmaus
          </p>
          <p className="mt-1.5 text-[11px] leading-relaxed text-pm-muted">
            The Emmaus Retreat is an invitation to step away from the noise of
            everyday life, encounter Jesus and return to the parish community
            transformed.
          </p>
        </div>
      </div>
    </>
  );
}
