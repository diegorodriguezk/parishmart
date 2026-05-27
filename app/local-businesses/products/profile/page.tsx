import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, SectionHeader } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductCard } from "@/components/Cards";
import { LoadMoreGrid } from "@/components/shop/LoadMoreGrid";
import { fetchProducts } from "@/lib/api";

export const metadata = { title: "Harps Club · Product Seller" };

export default async function ProductSellerProfilePage() {
  const products = await fetchProducts({
    ids: [
      "harps-club-tote",
      "harps-club-crewneck",
      "skd-mens-microfleece-jacket",
      "rosary",
      "harps-club-cap",
      "unity-candleholder",
      "saint-benedict-crucifix",
      "saint-joseph-biography",
    ],
  });

  return (
    <>
      <Header />

      <Section width="wide" className="!py-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Local Biz Supporters", href: "/local-businesses" },
            { label: "Harps Club" },
          ]}
        />
      </Section>

      {/* HERO — full-width photo banner */}
      <Section width="wide" className="!pt-2">
        <div className="relative isolate overflow-hidden rounded-3xl border border-pm-border shadow-pm-card">
          <Photo
            kind="merch"
            ratio="auto"
            rounded="rounded-none"
            className="absolute inset-0 -z-10 !rounded-none"
            overlay="none"
          />
          {/* Lighter gradient — photo visible on right, readable on left */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pm-navy/95 via-pm-navy/75 to-transparent" />

          <div className="flex flex-col gap-6 p-8 sm:p-10 lg:flex-row lg:items-stretch lg:justify-between">
            {/* LEFT — name scales dynamically; CTAs pinned to bottom */}
            <div className="flex flex-1 flex-col justify-between gap-6 text-white">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                  Merch &amp; Apparel
                </span>
                <div>
                  <h1
                    className="font-extrabold leading-none tracking-tight"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
                  >
                    Harps <span className="pm-gradient-text">Club</span>
                  </h1>
                  <p className="mt-2 text-sm font-semibold text-white/70">
                    Supporting Saint Katharine Drexel
                  </p>
                  <p className="max-w-xs text-sm leading-relaxed text-white/80">
                  Custom apparel, parish merch, ministry products and
                  campaign-based merchandise designed to help communities raise
                  funds and build identity.
                </p>
                </div>
              </div>
              {/* Description + CTAs pinned to bottom — paragraph width matches button row */}
              <div className="flex flex-col gap-3">
                
                <div className="flex flex-wrap gap-3">
                  <Link href="#products" className="pm-btn pm-btn-primary">
                    Shop Products
                  </Link>
                  <Link href="/stores" className="pm-btn bg-white/15 text-white hover:bg-white/25">
                    See Community Support
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT — founder card: square photo top-left, name top-right, bio below */}
            <div className="pm-card w-full shrink-0 p-5 lg:w-[540px]">
              {/* Top row: photo left + founder info right */}
              <div className="flex items-start gap-4">
                {/* Square photo with rounded edges */}
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan shadow-pm-soft flex items-center justify-center text-xl font-extrabold text-white">
                  SM
                </div>
                {/* Founder label + name */}
                <div className="pt-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                    Founder
                  </p>
                  <p className="mt-1 text-base font-extrabold text-pm-navy">
                    Sarah Martinez
                  </p>
                  <p className="text-[11px] text-pm-muted">
                    Wellness Advocate
                  </p>
                  <p className="text-[11px] text-pm-muted">
                    Founder of Harps Club
                  </p>
                </div>
              </div>
              {/* Bio — full width below */}
              <p className="mt-4 text-sm leading-relaxed text-pm-muted">
                As a mom, wellness advocate and parish volunteer, I created
                Harps Club to make meaningful merchandise accessible for
                families and faith communities.  As a mom, wellness advocate and parish volunteer, I created
                Harps Club to make meaningful merchandise accessible for
                families and faith communities. As a mom, wellness advocate and parish volunteer, I created
                Harps Club to make meaningful merchandise accessible for
                families and faith communities. As a mom, wellness advocate and parish volunteer, I created
                Harps Club to make meaningful merchandise accessible for
                families and faith communities.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ABOUT */}
      <Section width="wide">
        <div className="pm-card overflow-hidden lg:grid lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col justify-center gap-4 p-8">
            <h2 className="text-2xl font-extrabold text-pm-navy">About Our Business</h2>
            <p className="text-sm text-pm-muted">
              Harps Club offers thoughtfully selected community products,
              custom apparel, supplements and healthy essentials for everyday
              parish families.
            </p>
            <p className="text-sm text-pm-muted">
              We partner with trusted suppliers to bring clean, effective and
              reliable products that support better habits and stronger
              communities.
            </p>
            <p className="text-sm text-pm-muted">
              Every purchase helps fund parish programs, family education and
              initiatives that create a meaningful impact.
            </p>
          </div>
          <Photo
            kind="community"
            ratio="auto"
            rounded="rounded-none"
            className="!rounded-none min-h-[300px] !rounded-r-[24px]"
          />
        </div>
      </Section>

      {/* FEATURED PRODUCTS */}
      <Section id="products" width="wide">
        <SectionHeader
          title="Featured products."
          description="Clean product cards with strong images, simple descriptions and clear CTAs."
          right={
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-pm-border bg-white px-3 py-1.5 text-xs font-medium text-pm-navy hover:border-pm-blue"
            >
              Sort: Community relevance
              <ChevronDown className="h-3.5 w-3.5" aria-hidden />
            </button>
          }
        />
        <LoadMoreGrid
          initialCount={4}
          gridClassName="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              photo={p.photo}
              src={p.src}
              label={p.label}
              title={p.name}
              meta={p.meta}
              price={p.price}
              cause={p.cause}
            />
          ))}
        </LoadMoreGrid>
      </Section>

      {/* CTA BANNER */}
      <Section width="wide">
        <div className="pm-dark-panel flex flex-wrap items-center justify-between gap-4 !p-6 sm:!p-8">
          <div className="max-w-xl space-y-2">
            <h3 className="text-2xl font-extrabold">
              Sell products with purpose.
            </h3>
            <p className="text-sm text-white/80">
              Join ParishMart as a Product Seller and connect your catalog to
              communities, parishes and causes that value meaningful impact.
            </p>
          </div>
          <Link href="/onboarding/seller" className="pm-btn bg-white !text-pm-navy shrink-0">
            Become a Seller
          </Link>
        </div>
      </Section>

      <Footer />
    </>
  );
}
