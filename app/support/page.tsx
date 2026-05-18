import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = { title: "Support · ParishMart" };

export default function SupportPage() {
  return (
    <>
      <Header />
      <Section width="wide" className="!py-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Support" }]} />
      </Section>
      <Section width="wide">
        <SectionHeader
          title="Support"
          description="Get help with your account, orders, parish stores, donations or onboarding."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="pm-card p-6">
            <h3 className="text-lg font-extrabold text-pm-navy">Help Center</h3>
            <p className="mt-2 text-sm text-pm-muted">
              Common questions about shopping, giving, parish stores and seller onboarding.
            </p>
            <Link href="/" className="mt-4 inline-flex text-sm font-bold text-pm-blue">
              Browse FAQs →
            </Link>
          </div>
          <div className="pm-card p-6">
            <h3 className="text-lg font-extrabold text-pm-navy">Contact us</h3>
            <p className="mt-2 text-sm text-pm-muted">
              Send a message and our team will reach out to help.
            </p>
            <a
              href="mailto:hello@parishmart.com"
              className="mt-4 inline-flex text-sm font-bold text-pm-blue"
            >
              hello@parishmart.com →
            </a>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}
