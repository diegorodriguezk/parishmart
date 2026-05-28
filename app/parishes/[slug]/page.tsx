import { notFound } from "next/navigation";
import { fetchParish, fetchProducts, fetchBusinesses } from "@/lib/api";
import { ParishStorefront } from "@/components/profiles/ParishStorefront";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  const { listParishes } = await import("@/lib/catalog");
  return listParishes().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const parish = await fetchParish(slug);
  return { title: parish ? `${parish.name} Parish Store · ParishMart` : "Parish Store" };
}

export default async function ParishPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [parish, businesses] = await Promise.all([
    fetchParish(slug),
    fetchBusinesses(),
  ]);
  if (!parish) notFound();
  const products = await fetchProducts({ limit: 6 });
  return (
    <>
      <Header />
      <ParishStorefront parish={parish} products={products} businesses={businesses} />
      <Footer />
    </>
  );
}
