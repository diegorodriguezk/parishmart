import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader, DarkPanel } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = { title: "Partners · ParishMart" };

export default function PartnersPage() {
  return (
    <>
      <Header />
      <Section width="wide" className="!py-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Partners" }]} />
      </Section>
      <Section width="wide">
        <SectionHeader
          title="Partners"
          description="Faith-driven organizations, dioceses and ecosystem partners helping ParishMart grow."
        />
        <p className="text-sm text-pm-muted">
          Partner directory and case studies coming soon.
        </p>
      </Section>
      <Section width="wide">
        <DarkPanel
          title="Become a ParishMart partner"
          description="Bring ParishMart to your parish, diocese or community network."
          cta="Contact us"
          ctaHref="/contact-us"
        />
      </Section>
      <Footer />
    </>
  );
}
