import { notFound } from "next/navigation";
import { fetchSponsor } from "@/lib/api";
import { SponsorProfile } from "@/components/profiles/SponsorProfile";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  const { SPONSORS } = await import("@/lib/catalog");
  return SPONSORS.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const sponsor = await fetchSponsor(id);
  return { title: sponsor ? `${sponsor.name} · Sponsor · ParishMart` : "Sponsor" };
}

export default async function SponsorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const sponsor = await fetchSponsor(id);
  if (!sponsor) notFound();
  return (
    <>
      <Header />
      <SponsorProfile sponsor={sponsor} />
      <Footer />
    </>
  );
}
