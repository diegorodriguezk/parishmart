import { notFound } from "next/navigation";
import { fetchCause, fetchProducts, fetchBusinesses } from "@/lib/api";
import { CauseProfile } from "@/components/profiles/CauseProfile";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  const { listCauses } = await import("@/lib/catalog");
  const causes = listCauses();
  return causes.filter((c) => !c.parishSlug).map((c) => ({ key: c.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const cause = await fetchCause(key);
  return { title: cause ? `${cause.name} · ParishMart` : "Cause" };
}

export default async function StandaloneCausePage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const [cause, businesses] = await Promise.all([
    fetchCause(key),
    fetchBusinesses(),
  ]);
  if (!cause) notFound();
  const products = await fetchProducts({ cause: key, limit: 8 });
  return (
    <>
      <Header />
      <CauseProfile cause={cause} products={products} businesses={businesses} />
      <Footer />
    </>
  );
}
