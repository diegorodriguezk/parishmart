import Link from "next/link";
import { SubStoreHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Sections";

export const metadata = { title: "Parish Store Template" };

export default function ParishStoreTemplatePage() {
  return (
    <>
      <SubStoreHeader parishName="Template Parish" location="Reusable layout" />

      <Section width="wide">
        <span className="pm-kicker">Reusable Template</span>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-pm-navy md:text-5xl">
          Parish Store <span className="pm-gradient-text">Template</span>
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-pm-muted">
          This becomes the base template for every parish or community store.
          Modules: Hero, Choose how to support, Shop with Purpose, Give with Love,
          Ministries, Local Biz, Sponsors and Impact panel.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/stores" className="pm-btn pm-btn-primary">See SKD as example</Link>
          <Link href="/onboarding/parish" className="pm-btn pm-btn-secondary">Create Parish Store</Link>
        </div>
      </Section>

      <Footer />
    </>
  );
}
