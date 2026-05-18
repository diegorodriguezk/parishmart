import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader, DarkPanel } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = { title: "How It Works · ParishMart" };

const STEPS = [
  {
    n: 1,
    t: "Choose a parish or cause",
    d: "Pick the parish, ministry or community cause you want to support.",
  },
  {
    n: 2,
    t: "Shop, give or partner",
    d: "Buy products, make a donation or apply to become a seller or sponsor.",
  },
  {
    n: 3,
    t: "Create real impact",
    d: "Every transaction turns into measurable value for the community.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <Section width="wide" className="!py-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "How It Works" }]} />
      </Section>
      <Section width="wide">
        <SectionHeader
          title="How ParishMart works"
          description="Three simple steps. Infinite impact."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="pm-card p-6">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-pm-blue to-pm-cyan text-sm font-extrabold text-white">
                {s.n}
              </span>
              <h3 className="mt-3 text-lg font-extrabold text-pm-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-pm-muted">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section width="wide">
        <DarkPanel
          title="Ready to join the ecosystem?"
          description="Open a parish store, sell with purpose or sponsor meaningful local impact."
          cta="Join Us"
          ctaHref="/onboarding"
        />
      </Section>
      <Footer />
    </>
  );
}
