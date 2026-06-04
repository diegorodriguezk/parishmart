import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Photo } from "@/components/Photo";
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
        <div className="pm-card relative isolate overflow-hidden p-6 sm:p-9">
          <Photo
            kind="weston"
            ratio="auto"
            rounded="rounded-none"
            className="absolute inset-0 -z-10 h-full !rounded-none"
            overlay="none"
            alt="Weston, Florida"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pm-navy/90 via-pm-navy/75 to-pm-navy/40" />
          <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Cart + <span className="pm-gradient-text">Impact</span>
          </h1>
          <p className="mt-3 max-w-lg text-sm text-white/85">
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
