import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader, FilterChips } from "@/components/Sections";
import { ProductCard } from "@/components/Cards";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { fetchProducts } from "@/lib/api";

export const metadata = { title: "Product Listing · ParishMart" };

export default async function ProductListingPage() {
  const products = await fetchProducts({ limit: 9 });
  return (
    <>
      <Header />

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
        </div>
      </Section>

      <Footer />
    </>
  );
}
