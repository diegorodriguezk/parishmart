import Link from "next/link";
import { SubStoreHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, SectionHeader, FilterChips } from "@/components/Sections";
import { ProductCard, BusinessCard, SponsorOfferCard } from "@/components/Cards";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = { title: "Shop · SKD Parish Store" };

export default function ShopCategoryPage() {
  return (
    <>
      <SubStoreHeader />

      <Section width="wide" className="!py-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shop with Purpose" }]} />
      </Section>

      <Section width="wide" className="!pb-2 !pt-2">
        <div className="relative isolate overflow-hidden rounded-3xl border border-pm-border shadow-pm-card p-6 sm:p-8 min-h-[260px] sm:min-h-[300px]">
          <Photo kind="church" ratio="auto" rounded="rounded-none" className="absolute inset-0 -z-10 !rounded-none" />
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
          items={["All", "Religious Gifts", "Parish Merch", "Local Biz Supporters", "Sponsors"]}
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
          <ProductCard photo="rosary" label="Youth Ministry" title="Rosary Bracelet" meta="A faith-inspired gift connected to Youth Ministry impact." price="$25" />
          <ProductCard photo="bible" label="Religious Gift" title="Prayer Card Set" meta="Simple devotional gifts for families and parishioners." price="$18" />
          <ProductCard photo="cross" label="Celebration" title="First Communion Gift" meta="A curated religious gift for sacramental celebrations." price="$34" />
          <ProductCard photo="chalice" label="Parish Support" title="Parish Support Kit" meta="A simple digital product to support parish initiatives." price="$10" />
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
          <ProductCard photo="apparel" label="Emmaus" title="Emmaus Retreat T-Shirt" meta="Custom retreat apparel supporting formation and events." price="$22" />
          <ProductCard photo="merch" label="Parish Merch" title="SKD Hoodie" meta="Comfort merch for parish events and community gatherings." price="$48" />
          <ProductCard photo="apparel" label="Parish Merch" title="Ministry Tote Bag" meta="Customized item for ministries, retreats and family events." price="$19" />
          <ProductCard photo="community" label="Parish Merch" title="Retreat Support Kit" meta="Simple bundle for retreat participants and volunteers." price="$45" />
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
          <BusinessCard photo="business" initials="MS" title="Maria's Studios" description="Photography for parish events, retreats and families." tags={["Photography", "Weston, FL", "Supports Emmaus"]} offer="10% benefit" offerDescription="Family & event sessions" impactText="Supports Emmaus retreat memories and parish events." />
          <BusinessCard photo="people" initials="CM" title="Casa Manresa" description="Retreats, spiritual formation and community experiences." tags={["Retreats", "Formation", "SKD Partner"]} offer="15% benefit" offerDescription="Selected retreat experiences" impactText="Supports faith formation and local retreat participation." />
          <BusinessCard photo="house" initials="LR" title="Local Realty Supporter" description="Trusted community business supporting parish causes." tags={["Real Estate"]} offer="Free consult" offerDescription="Initial consultation" impactText="Free consult for SKD parishioners and families." />
          <BusinessCard photo="business" initials="SB" title="Local Business Service" description="Professional service offered to the SKD community." tags={["Professional"]} offer="Offer" offerDescription="Community offer" impactText="Promotes healthier and stronger local communities." />
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
          <SponsorOfferCard photo="people" initials="BS" title="Become a Sponsor" offer="Apply" daysLeft="Join the ecosystem" isNew />
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
