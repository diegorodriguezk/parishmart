import Link from "next/link";
import { SubStoreHeader } from "@/components/Header";
import { MinimalFooter } from "@/components/MinimalFooter";
import { TrustBadge } from "@/components/TrustBadge";
import { ImpactBreakdown } from "@/components/ImpactBreakdown";
import { Section, AmountPicker } from "@/components/Sections";

export const metadata = { title: "Donation Checkout · ParishMart" };

export default function DonationCheckoutPage() {
  return (
    <>
      <SubStoreHeader />

      <Section width="wide" className="!pb-3">
        <span className="pm-kicker">Donation Checkout</span>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-pm-navy md:text-5xl">
          Complete your <span className="pm-gradient-text">gift</span>
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-pm-muted">
          Prototype only. Donation routing and receipts should follow the
          nonprofit/payment compliance flow.
        </p>
      </Section>

      <Section width="wide">
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="pm-card p-6">
            <h3 className="text-lg font-bold text-pm-navy">Choose amount</h3>
            <div className="mt-4">
              <AmountPicker amounts={["$25", "$50", "$100", "$250"]} active="$50" />
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <input className="rounded-2xl border border-pm-border bg-white px-4 py-2.5 text-sm shadow-pm-soft focus:border-pm-blue focus:outline-none" placeholder="Full name" />
              <input className="rounded-2xl border border-pm-border bg-white px-4 py-2.5 text-sm shadow-pm-soft focus:border-pm-blue focus:outline-none" placeholder="Email for receipt" />
              <input className="rounded-2xl border border-pm-border bg-white px-4 py-2.5 text-sm shadow-pm-soft focus:border-pm-blue focus:outline-none md:col-span-2" placeholder="Card information (placeholder)" />
            </div>
          </div>
          <aside className="space-y-4">
            <div className="pm-card p-6">
              <h3 className="text-lg font-bold text-pm-navy">Gift summary</h3>
              <dl className="mt-4 divide-y divide-pm-border text-sm">
                <div className="flex justify-between py-2">
                  <dt className="text-pm-muted">Cause</dt>
                  <dd className="font-bold text-pm-navy">Youth Ministry</dd>
                </div>
                <div className="flex justify-between py-2">
                  <dt className="text-pm-muted">Amount</dt>
                  <dd className="font-bold text-pm-navy">$50.00</dd>
                </div>
                <div className="flex justify-between py-2">
                  <dt className="text-pm-muted">Platform support (4%)</dt>
                  <dd className="font-bold text-pm-navy">$2.00</dd>
                </div>
              </dl>
              <div className="mt-3 flex justify-between border-t border-pm-border pt-3">
                <span className="text-sm font-extrabold text-pm-navy">Total</span>
                <span className="text-xl font-extrabold text-pm-navy">$52.00</span>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <TrustBadge variant="secured" />
                <span className="text-[11px] text-pm-muted">256-bit SSL · PCI Stripe</span>
              </div>
              <p className="mt-3 text-[11px] text-pm-muted">
                Receipt sent to your email. Tax-deductible to the extent allowed by law.
              </p>
              <Link href="/share-impact" className="pm-btn pm-btn-primary mt-4 w-full">
                Confirm Gift
              </Link>
            </div>
            <ImpactBreakdown amount={50} causePct={96} platformPct={4} causeName="Youth Ministry" />
          </aside>
        </div>
      </Section>

      <MinimalFooter />
    </>
  );
}
