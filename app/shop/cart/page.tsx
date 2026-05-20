import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CartView } from "./CartView";

export const metadata = { title: "Cart + Impact · ParishMart" };

export default function CartCheckoutPage() {
  return (
    <>
      <Header />

      <Section width="wide" className="!py-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }, { label: "Cart" }]} />
      </Section>

      <Section width="wide" className="!pt-2 !pb-3">
        <div className="pm-card relative overflow-hidden p-6 sm:p-7">
          <h1 className="text-3xl font-extrabold tracking-tight text-pm-navy md:text-5xl">
            Cart + <span className="pm-gradient-text">Impact</span>
          </h1>
          <p className="mt-3 max-w-lg text-sm text-pm-muted">
            Review your items, add optional support, and see exactly where your
            money goes before checkout.
          </p>
        </div>
      </Section>

      <Section width="wide">
        <CartView />
      </Section>

      <Footer />
    </>
  );
}
