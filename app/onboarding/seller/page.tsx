import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import {
  SellerPreviewBody,
  SellerPreviewHero,
  PreviewLabel,
} from "@/components/onboarding/SellerPreviewCard";

export const metadata = { title: "Become a Product Seller · ParishMart" };

const VALUE_CARDS = [
  {
    title: "Storefront + catalog",
    body: "Launch a branded seller store with products, campaigns and offers.",
  },
  {
    title: "Generate sales",
    body: "Get discovered by parishioners across parish stores and community pages.",
  },
  {
    title: "Support a community",
    body: "Every sale or membership can support a parish, ministry or cause.",
  },
  {
    title: "AI concierge setup",
    body: "Concierge-assisted activation across 5 simple steps.",
  },
];

const TRUST_CARDS = [
  {
    kicker: "Catalog Flexibility",
    title: "Built for any seller",
    body: "Made-to-order campaigns, ready-to-ship products, customizable items or digital add-ons.",
  },
  {
    kicker: "Founding Seller",
    title: "Early supporter visibility",
    body: "Founding sellers get preferred placement during the initial launch phase.",
  },
  {
    kicker: "Concierge Model",
    title: "Done-with-you setup",
    body: "ParishMart helps finish, polish, approve and activate your storefront.",
  },
];

const STEPS = [
  {
    n: 1,
    title: "Seller Profile",
    body: "Set up store name, type, category and product model.",
    badge: "Required",
  },
  {
    n: 2,
    title: "Brand Story & Community Support",
    body: "Tell your story and choose the parish, ministry or cause you support.",
    badge: "AI Draft",
  },
  {
    n: 3,
    title: "Product Catalog Setup",
    body: "Manual products, CSV import, Shopify or API sync.",
    badge: "Catalog",
  },
  {
    n: 4,
    title: "Storefront Media & Preview",
    body: "Upload logo, cover, owner photo and gallery. Review the storefront preview.",
    badge: "Preview",
  },
  {
    n: 5,
    title: "Select Seller Membership",
    body: "Pick a plan: Starter, Community or Featured. Approve terms and submit.",
    badge: "Ready",
  },
];

export default function SellerOnboardingIntro() {
  return (
    <main className="min-h-dvh bg-gradient-to-br from-white via-pm-soft to-white">
      <div className="mx-auto grid max-w-[1320px] gap-0 px-4 py-8 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:py-12">
        {/* LEFT */}
        <section className="flex flex-col lg:pr-8">
          <div className="mb-10 flex items-center justify-between gap-3">
            <Logo />
            <Link
              href="/contact-us"
              className="hidden rounded-full border border-pm-border bg-white px-3 py-2 text-xs font-extrabold text-pm-blue shadow-pm-soft hover:border-pm-blue sm:inline"
            >
              Need help? Book a 10-min setup call
            </Link>
          </div>

          <article className="rounded-[28px] border border-pm-border bg-white/85 p-6 shadow-pm-card backdrop-blur sm:p-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-pm-soft px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-pm-blue">
              <span className="h-2 w-2 rounded-full bg-pm-cyan shadow-[0_0_0_5px_rgba(69,177,225,.18)]" />
              Product Seller Onboarding · AI Concierge
            </span>
            <h1 className="mt-4 max-w-[640px] text-4xl font-extrabold leading-tight tracking-tight text-pm-navy md:text-5xl">
              Launch your{" "}
              <span className="pm-gradient-text">seller store</span> while
              supporting your community.
            </h1>
            <p className="mt-4 max-w-[600px] text-sm text-pm-muted md:text-base">
              Create a branded ParishMart seller storefront, connect your
              catalog, choose how your products support a parish or cause, and
              activate with concierge support in 5 simple steps.
            </p>

            <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {VALUE_CARDS.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-pm-border bg-pm-soft/50 p-4"
                >
                  <p className="text-sm font-extrabold text-pm-navy">
                    {v.title}
                  </p>
                  <p className="mt-1 text-xs text-pm-muted">{v.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-1">
              <Link
                href="/onboarding/seller/step-1"
                className="pm-btn pm-btn-primary inline-flex items-center gap-1.5"
              >
                Launch My Seller Store
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <p className="max-w-sm text-xs text-pm-muted">
                No long forms. Skip non-essential items and finish with
                concierge support.
              </p>
            </div>
          </article>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {TRUST_CARDS.map((t) => (
              <div
                key={t.kicker}
                className="rounded-2xl border border-pm-border bg-white p-4 shadow-pm-soft"
              >
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-pm-blue">
                  {t.kicker}
                </p>
                <p className="mt-1.5 text-base font-extrabold text-pm-navy">
                  {t.title}
                </p>
                <p className="mt-1 text-xs text-pm-muted">{t.body}</p>
              </div>
            ))}
          </div>

          <article className="mt-6 rounded-[28px] border border-pm-border bg-white/85 p-6 shadow-pm-soft backdrop-blur sm:p-7">
            <div className="mb-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-pm-navy">
                  Simple 5-step activation
                </h2>
                <p className="mt-1 max-w-[470px] text-sm text-pm-muted">
                  AI builds the storefront while the seller answers a few
                  simple questions. Skip anything optional.
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-700">
                Founding Seller
              </span>
            </div>

            <ol className="grid gap-2.5">
              {STEPS.map((s) => (
                <li
                  key={s.n}
                  className="grid grid-cols-[40px_1fr_auto] items-center gap-3 rounded-2xl border border-pm-border bg-pm-soft/50 p-3.5"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-pm-soft text-sm font-extrabold text-pm-blue">
                    {s.n}
                  </span>
                  <div>
                    <p className="text-sm font-extrabold leading-tight text-pm-navy">
                      {s.title}
                    </p>
                    <p className="text-xs text-pm-muted">{s.body}</p>
                  </div>
                  <span className="rounded-full bg-pm-soft px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-pm-blue">
                    {s.badge}
                  </span>
                </li>
              ))}
            </ol>
          </article>
        </section>

        {/* RIGHT — preview */}
        <aside className="mt-6 flex items-start justify-center lg:mt-0 lg:items-center lg:pl-4">
          <div className="w-full max-w-[540px]">
            <div className="mb-3 flex items-center justify-between px-1">
              <span className="text-[11px] font-extrabold uppercase tracking-[.16em] text-pm-blue">
                Enhanced Final Preview
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-pm-muted">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_5px_rgba(16,185,129,.15)]" />
                Ready to convert
              </span>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-pm-border bg-white shadow-pm-card">
              <SellerPreviewHero
                kind="merch"
                title="HarpsClub Merch"
                subtitle="Custom apparel and campaign-based products for parishes, ministries and community causes."
              />
              <SellerPreviewBody>
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-pm-border bg-pm-soft/40 p-4">
                  <div>
                    <PreviewLabel>Supporting</PreviewLabel>
                    <p className="mt-1 text-base font-extrabold text-pm-navy">
                      Saint Katharine Drexel Parish
                    </p>
                    <p className="text-xs text-pm-muted">
                      A portion of every sale supports the parish community.
                    </p>
                  </div>
                  <span className="rounded-xl bg-pm-navy px-2.5 py-2 text-[10px] font-extrabold uppercase tracking-wider text-white">
                    Purpose Partner
                  </span>
                </div>

                <div className="rounded-2xl border border-pm-border bg-pm-soft/50 p-4">
                  <PreviewLabel>Featured Offer</PreviewLabel>
                  <p className="mt-1 text-xl font-extrabold text-pm-navy">
                    Parish T-Shirt Campaign
                  </p>
                  <p className="mt-1 text-xs text-pm-muted">
                    Bulk campaign pricing from $18. Made-to-order and shipped
                    directly to parishioners.
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

                <div className="rounded-2xl border border-pm-border bg-white p-4">
                  <p className="text-sm font-extrabold text-pm-navy">
                    Included with Membership
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-pm-muted">
                    {[
                      "Seller storefront",
                      "Catalog & inventory",
                      "Parish visibility",
                      "Featured offers",
                      "Lead generation",
                      "Concierge support",
                    ].map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center gap-1.5 font-bold"
                      >
                        <span className="grid h-4 w-4 place-items-center rounded-full bg-pm-soft text-[10px] font-extrabold text-pm-blue">
                          ✓
                        </span>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-br from-pm-navy to-pm-blue p-4 text-white">
                  <div>
                    <p className="text-base font-extrabold leading-tight">
                      Activate as Founding Seller
                    </p>
                    <p className="mt-1 text-xs text-white/85">
                      Submit for review and go live within 24–48 hours.
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-extrabold leading-none">$99</p>
                    <p className="text-[10px] text-white/75">per month</p>
                  </div>
                </div>
              </SellerPreviewBody>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
