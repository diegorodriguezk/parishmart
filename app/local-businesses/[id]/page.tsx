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
  return (
    <>
      <Header />
      <ServiceBusinessProfile business={business} />
      <Footer />
    </>
  );
}
