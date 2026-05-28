import { notFound } from "next/navigation";
import { fetchProduct, fetchProducts } from "@/lib/api";
import { ProductDetail } from "@/components/profiles/ProductDetail";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const RELATED_LIMIT = 3;

export async function generateStaticParams() {
  const { PRODUCTS } = await import("@/lib/catalog");
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchProduct(id);
  return { title: product ? `${product.name} · ParishMart` : "Product" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchProduct(id);
  if (!product) notFound();
  const allRelated = await fetchProducts({ category: product.category, limit: RELATED_LIMIT + 1 });
  const related = allRelated.filter((r) => r.id !== id).slice(0, RELATED_LIMIT);
  return (
    <>
      <Header />
      <ProductDetail product={product} related={related} />
      <Footer />
    </>
  );
}
