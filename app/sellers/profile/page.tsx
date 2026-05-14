import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, SectionHeader, DarkPanel } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getProduct } from "@/lib/catalog";

export const metadata = { title: "SKD Parish Store · Seller" };

const FEATURED_IDS = [
  "skd-mens-microfleece-jacket",
  "skd-womens-microfleece-jacket",
  "harps-club-tote",
  "harps-club-crewneck",
];
const PRODUCTS = FEATURED_IDS.map((id) => getProduct(id)!);

export default function SellerProfilePage() {
  return (
    <>
      <Header />

      <Section width="wide" className="!py-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Sellers", href: "/local-businesses" },
            { label: "Paleo Life Market" },
          ]}
        />
      </Section>

      {/* HERO */}
      <Section width="wide" className="!pt-2">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <span className="pm-kicker">Product Seller Storefront</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-pm-navy md:text-5xl">
              Shop local products that support your community.
            </h1>
            <p className="mt-4 max-w-md text-sm text-pm-muted">
              A clean storefront for Local Biz product sellers to tell their
              story, showcase their catalog, and give customers a reason to buy
              with purpose.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="#products" className="pm-btn pm-btn-primary">
                Shop Products
              </Link>
              <Link href="#about" className="pm-btn pm-btn-secondary">
                About entrepreneur
              </Link>
            </div>
          </div>
          <div className="pm-card overflow-hidden p-3">
            <Photo kind="food" ratio="16/9" rounded="rounded-2xl" />
            <div className="space-y-3 p-3">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan text-sm font-extrabold text-white shadow-pm-soft">
                  PL
                </span>
                <div>
                  <p className="text-base font-extrabold text-pm-navy">
                    Paleo Life Market
                  </p>
                  <p className="text-[11px] text-pm-muted">
                    Wellness products · Weston, FL
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="pm-label">Local Business Supporter</span>
                <span className="pm-label">Ships in 2-4 days</span>
                <span className="pm-label">Supports SKD Parish</span>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-2">
                {[
                  { v: "120+", l: "Products" },
                  { v: "10%", l: "Community contribution" },
                  { v: "4.8", l: "Community rating" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-2xl border border-pm-border bg-white p-3 text-center"
                  >
                    <p className="text-base font-extrabold text-pm-navy">
                      {s.v}
                    </p>
                    <p className="text-[10px] text-pm-muted">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PRODUCTS */}
      <Section id="products" width="wide">
        <SectionHeader
          title="Featured Products"
          description="Products are organized in a simple catalog. Each item shows price, seller, and how the purchase supports the selected parish or cause."
          right={
            <>
              <span className="pm-chip" data-active="true">Featured</span>
              <span className="pm-chip">Wellness</span>
              <span className="pm-chip">Food</span>
              <span className="pm-chip">Gifts</span>
              <span className="pm-chip">Bundles</span>
              <span className="pm-chip">Best Sellers</span>
            </>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <Link
              key={p.id}
              href="/shop/product"
              className="pm-card group flex flex-col gap-3 overflow-hidden p-3 transition hover:-translate-y-0.5 hover:shadow-pm-soft"
            >
              <Photo
                kind={p.photo}
                src={p.src}
                alt={p.name}
                ratio="1/1"
                rounded="rounded-2xl"
                fit="contain"
                overlay="none"
                className="bg-white"
              />
              <div className="space-y-1.5 px-2 pb-3">
                <p className="line-clamp-2 text-sm font-bold text-pm-navy group-hover:text-pm-blue">
                  {p.name}
                </p>
                <p className="text-[11px] text-pm-muted">{p.seller}</p>
                <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-base font-extrabold text-pm-navy">
                    {p.price}
                  </p>
                  {p.label ? (
                    <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                      {p.label}
                    </span>
                  ) : null}
                </div>
                <span className="pm-btn pm-btn-secondary !w-full !px-3 !py-1.5 text-[11px]">
                  View Product
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* MEET THE SUPPORTER FOUNDER */}
      <Section id="about" width="wide">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <Photo kind="community" ratio="4/3" rounded="rounded-3xl" />
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-pm-navy md:text-3xl">
              Meet the supporter founder
            </h2>
            <p className="mt-3 text-sm text-pm-muted">
              Paleo Life Market is a family-owned wellness business based in
              Weston, Florida focused on healthier living, clean ingredients,
              and community impact. Their mission is not only to sell products,
              but to support families, parishes and local initiatives through
              everyday commerce.
            </p>
            <p className="mt-3 text-sm text-pm-muted">
              Inside ParishMart, sellers become part of a purpose-driven
              ecosystem where each purchase can help support a parish, ministry,
              school or community cause.
            </p>
            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-pm-border bg-white p-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-pm-soft text-[11px] font-bold text-pm-blue">
                Founder
                <br />
                photo
              </span>
              <div>
                <p className="text-base font-extrabold text-pm-navy">
                  Paleo Life Market
                </p>
                <p className="text-xs text-pm-muted">
                  Founder · SKD Parish supporter since 2022.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SELLER PROFILE + ABOUT THE BUSINESS */}
      <Section width="wide">
        <div className="grid gap-4 md:grid-cols-[1fr_1.3fr]">
          <div className="pm-card p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan text-sm font-extrabold text-white shadow-pm-soft">
                PL
              </span>
              <div>
                <p className="text-base font-extrabold text-pm-navy">
                  Paleo Life Market
                </p>
                <p className="text-[11px] text-pm-muted">
                  Wellness business · Community seller
                </p>
              </div>
            </div>
            <dl className="mt-4 space-y-3 text-xs">
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                  Supports
                </dt>
                <dd className="text-pm-navy">Saint Katharine Drexel Parish</dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                  Community Contribution
                </dt>
                <dd className="text-pm-navy">
                  10% of eligible sales help support parish initiatives and
                  local causes.
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                  Business Type
                </dt>
                <dd className="text-pm-navy">
                  Wellness & Healthy Living Products
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                  Shipping
                </dt>
                <dd className="text-pm-navy">
                  Ships across the U.S. within 2-4 business days.
                </dd>
              </div>
            </dl>
          </div>
          <div className="pm-card p-6">
            <h3 className="text-xl font-extrabold text-pm-navy">
              About the Business
            </h3>
            <p className="mt-2 text-sm text-pm-muted">
              Paleo Life Market was created to help families access healthier
              alternatives while supporting meaningful causes through commerce.
              The business started locally in South Florida and now serves
              customers nationwide through ParishMart.
            </p>
            <p className="mt-3 text-sm text-pm-muted">
              The company believes commerce can become a force for good when
              local entrepreneurs, communities, and parishes work together.
              Through ParishMart, each order helps create sustainable support
              for the community.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              {[
                { v: "5+", l: "Years in business" },
                { v: "2,000+", l: "Orders fulfilled" },
                { v: "4.8★", l: "Community rating (optional)" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-pm-border bg-white p-3"
                >
                  <p className="text-lg font-extrabold text-pm-navy">{s.v}</p>
                  <p className="text-[10px] text-pm-muted">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* EVERY PURCHASE CAN SUPPORT A PURPOSE */}
      <Section width="wide">
        <DarkPanel
          title="Every purchase can support a purpose."
          description="At checkout, the customer can see which parish, ministry, school or cause benefits from the purchase. This makes product sellers part of the ParishMart impact ecosystem without confusing the shopping experience."
          cta="Continue Shopping"
          ctaHref="/shop"
        />
      </Section>

      <Footer />
    </>
  );
}
