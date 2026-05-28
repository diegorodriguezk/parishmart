import { notFound } from "next/navigation";
import { fetchCause, fetchParish, fetchProducts, fetchBusinesses } from "@/lib/api";
import { ParishLayout } from "@/components/profiles/ParishLayout";
import { CauseProfile } from "@/components/profiles/CauseProfile";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  const { listCauses } = await import("@/lib/catalog");
  const causes = listCauses();
  return causes
    .filter((c) => c.parishSlug)
    .map((c) => ({ slug: c.parishSlug!, key: c.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; key: string }>;
}) {
  const { key } = await params;
  const cause = await fetchCause(key);
  return { title: cause ? `${cause.name} · ParishMart` : "Cause" };
}

export default async function ParishCausePage({
  params,
}: {
  params: Promise<{ slug: string; key: string }>;
}) {
  const { slug, key } = await params;
  const [cause, parish, businesses] = await Promise.all([
    fetchCause(key),
    fetchParish(slug),
    fetchBusinesses(),
  ]);
  if (!cause || !parish) notFound();
  const products = await fetchProducts({ cause: key, limit: 8 });
  return (
    <>
      <ParishLayout parish={parish} activeTab="give">
        <CauseProfile cause={cause} products={products} businesses={businesses} />
      </ParishLayout>
      <Footer />
    </>
  );
}
