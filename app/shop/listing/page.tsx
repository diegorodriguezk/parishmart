import Link from "next/link";
import { SubStoreHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader, FilterChips } from "@/components/Sections";
import { ProductCard } from "@/components/Cards";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = { title: "Product Listing · ParishMart" };

export default function ProductListingPage() {
  return (
    <>
      <SubStoreHeader />

      <Section width="wide" className="!py-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shop with Purpose", href: "/shop" }, { label: "Religious Gifts" }]} />
      </Section>

      <Section width="wide" className="!pb-2 !pt-2">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="pm-kicker">Search Experience</span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-pm-navy md:text-5xl">
              Product <span className="pm-gradient-text">Listing</span>
            </h1>
          </div>
          <Link href="/search" className="pm-btn pm-btn-secondary">
            Open Smart Search →
          </Link>
        </div>
      </Section>

      <Section width="wide" className="!py-4">
        <FilterChips
          items={["All", "Religious Gifts", "Apparel", "Retreats", "Local Services", "Sponsors"]}
          active="All"
        />
      </Section>

      <Section width="wide" className="!pt-2">
        <SectionHeader title="Trending products" description="Curated picks across the SKD ecosystem." />
        <div className="grid gap-4 md:grid-cols-3">
          <ProductCard photo="apparel" label="Supports SKD Youth" title="Emmaus Retreat T-Shirt" meta="Custom retreat apparel · Supports formation." price="$22" />
          <ProductCard photo="merch" label="Religious Gift" title="Rosary Gift Box" meta="Faith-inspired gift · Ships from local seller." price="$34" />
          <ProductCard photo="business" label="Local Service" title="Family Photography Session" meta="$150 · Maria's Studios · Supports a cause." price="$150" />
          <ProductCard photo="church" label="Bundle" title="SKD Community Bundle" meta="Curated bundle for parishioners and supporters." price="$39" />
          <ProductCard photo="merch" label="Apparel" title="Parish Hoodie" meta="Premium upgrade for community gatherings." price="$48" />
          <ProductCard photo="retreat" label="Retreat" title="Retreat Support Kit" meta="A simple bundle for retreat participants." price="$45" />
        </div>
      </Section>

      <Footer />
    </>
  );
}
