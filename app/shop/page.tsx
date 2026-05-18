import Link from "next/link";
import { SubStoreHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, SectionHeader, FilterChips } from "@/components/Sections";
import { ProductCard, BusinessCard, SponsorOfferCard } from "@/components/Cards";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { fetchProducts, fetchBusinesses } from "@/lib/api";

export const metadata = { title: "Shop · SKD Parish Store" };

export default async function ShopCategoryPage() {
  const [religiousGifts, parishMerch, businesses] = await Promise.all([
    fetchProducts({
      ids: [
        "rosary",
        "unity-candleholder",
        "saint-benedict-crucifix",
        "saint-joseph-biography",
      ],
    }),
    fetchProducts({
      ids: [
        "skd-mens-microfleece-jacket",
        "skd-womens-microfleece-jacket",
        "harps-club-crewneck",
        "harps-club-tote",
      ],
    }),
    fetchBusinesses(),
  ]);
  return (
    <>
      <SubStoreHeader />

      <Section width="wide" className="!py-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shop with Purpose" }]} />
      </Section>

      <Section width="wide" className="!pb-2 !pt-2">
        <div className="relative isolate overflow-hidden rounded-3xl border border-pm-border shadow-pm-card p-6 sm:p-8 min-h-[260px] sm:min-h-[300px]">
          <Photo
            kind="church"
            src="/brand/skd/church.jpg"
            alt="Saint Katharine Drexel Catholic Parish, Weston FL"
            ratio="auto"
            rounded="rounded-none"
            className="absolute inset-0 -z-10 !rounded-none"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-pm-navy md:text-5xl">
                Shop by{" "}
                <span className="pm-gradient-text">purpose</span>, category and
                community.
              </h1>
              <p className="mt-4 text-sm text-pm-muted">
                A simple way to discover religious gifts, parish merch, local
                services and sponsor promotions that support St. Katharine
                Drexel.
              </p>
            </div>
            <div className="pm-card !shadow-none p-4">
              <p className="text-xs font-bold text-pm-blue">4 simple sections</p>
              <p className="text-sm text-pm-navy">
                Religious Gifts · Parish Merch · Local Biz Supporters · Sponsors
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section width="wide" className="!py-4">
        <FilterChips
          items={["All", "Religious Gifts", "Parish Merch", "Services", "Sponsors"]}
          active="All"
        />
      </Section>

      <Section width="wide" className="!pt-2">
        <SectionHeader
          title="Religious Gifts"
          description="Faith-inspired products for homes, celebrations, ministries and parish life."
          right={
            <>
              <span className="pm-chip" data-active="true">Featured</span>
              <span className="pm-chip">Gifts</span>
              <span className="pm-chip">Home</span>
              <span className="pm-chip">All</span>
            </>
          }
        />
        <div className="grid gap-4 md:grid-cols-4">
          {religiousGifts.map((p) => (
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
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader
          title="Parish Merch"
          description="Customized products for retreats, ministries, events and the parish community."
          right={
            <>
              <span className="pm-chip" data-active="true">Apparel</span>
              <span className="pm-chip">Retreats</span>
              <span className="pm-chip">Bundles</span>
              <span className="pm-chip">Events</span>
            </>
          }
        />
        <div className="grid gap-4 md:grid-cols-4">
          {parishMerch.map((p) => (
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
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[
            { tag: "Suggested add-on", text: "Add $5 to Youth Ministry to cart." },
            { tag: "Bundle idea", text: "Pair T-Shirt + Tote Bag for retreat events." },
            { tag: "Cause support", text: "Selected SKUs · Emmaus Mission · St Vincent de Paul." },
          ].map((c) => (
            <div key={c.tag} className="pm-card p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                {c.tag}
              </p>
              <p className="mt-1 text-sm text-pm-ink">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader
          title="Local Biz Supporters"
          description="Products and services from the community for the community."
          right={
            <>
              <span className="pm-chip" data-active="true">All</span>
              <span className="pm-chip">Services</span>
              <span className="pm-chip">Events</span>
              <span className="pm-chip">Professional</span>
            </>
          }
        />
        <div className="grid gap-4 md:grid-cols-4">
          {businesses.map((b, i) => (
            <BusinessCard
              key={b.id}
              photo={i === 0 ? "community" : i === 1 ? "business" : "merch"}
              initials={b.initials}
              logoSrc={b.logoSrc}
              title={b.name}
              description={b.description}
              tags={[b.category, b.location, "SKD Supporter"]}
              offer="10% benefit"
              offerDescription={`For SKD parishioners`}
              impactText={`Supports SKD parish and ${b.category.toLowerCase()} programs.`}
            />
          ))}
          <BusinessCard
            photo="business"
            initials="+"
            title="Become a Supporter"
            description="Add your local business and offer a parishioner benefit."
            tags={["Open to all"]}
            offer="Apply"
            offerDescription="Onboarding takes minutes"
            impactText="Reach parishioners and support a cause through commerce."
            href="/onboarding/local-business"
          />
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader
          title="Sponsors"
          description="Companies that support the parish and offer special discounts to parishioners."
          right={
            <>
              <span className="pm-chip" data-active="true">Featured</span>
              <span className="pm-chip">Discounts</span>
              <span className="pm-chip">Cash Back</span>
            </>
          }
        />
        <div className="grid gap-4 md:grid-cols-4">
          <SponsorOfferCard photo="business" initials="FS" title="Featured Sponsor" offer="$25 OFF" daysLeft="Up to 8% parishioner benefit" />
          <SponsorOfferCard photo="house" initials="FA" title="Family Services Sponsor" offer="10% OFF" daysLeft="Selected family services" />
          <SponsorOfferCard photo="business" initials="CS" title="Community Sponsor" offer="$50 OFF" daysLeft="Selected community offers" />
          <SponsorOfferCard photo="retreat" initials="BS" title="Become a Sponsor" offer="Apply" daysLeft="Join the ecosystem" isNew />
        </div>
      </Section>

      <Section width="wide">
        <div className="pm-card flex flex-wrap items-center justify-between gap-4 p-5">
          <p className="text-sm text-pm-muted">
            <strong className="text-pm-navy">Shopping with purpose.</strong>{" "}
            Every section helps parishioners discover products, services and
            offers connected to SKD impact.
          </p>
          <Link href="/shop/cart" className="pm-btn pm-btn-primary">
            View Cart
          </Link>
        </div>
      </Section>

      <Footer />
    </>
  );
}
