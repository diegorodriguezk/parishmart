import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section, DarkPanel } from "@/components/Sections";
import { SearchClient } from "@/components/SearchClient";

export const metadata = { title: "Search · ParishMart" };

export default function SearchPage() {
  return (
    <>
      <Header />

      <Section width="wide" className="!pt-12 text-center">
        <div className="mx-auto max-w-2xl">
          <span className="pm-kicker">Smart ecosystem search</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-pm-navy md:text-6xl">
            Search the <span className="pm-gradient-text">ParishMart</span>{" "}
            ecosystem
          </h1>
          <p className="mt-4 text-sm text-pm-muted">
            Find products, services, parish stores, ministries, causes and
            local businesses connected to community impact.
          </p>
          <SearchClient initialQuery="Emmaus" />
        </div>
      </Section>

      <Section width="wide">
        <DarkPanel
          title="No exact match? Keep the journey alive."
          description="When there's no exact result, ParishMart suggests related communities, causes and stores instead of showing a dead end."
        />
      </Section>

      <Footer />
    </>
  );
}
