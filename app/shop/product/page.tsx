import Link from "next/link";
import { SubStoreHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TrustBadge, StarRating } from "@/components/TrustBadge";
import { ImpactBreakdown } from "@/components/ImpactBreakdown";
import { AddToCartButton, AddDonationButton } from "@/components/cart/AddToCartButton";

export const metadata = { title: "Emmaus Retreat T-Shirt · SKD Parish Store" };

export default function ProductDetailPage() {
  return (
    <>
      <SubStoreHeader />

      <Section width="wide" className="!py-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Shop with Purpose", href: "/shop" },
            { label: "Emmaus Merch", href: "/shop/listing" },
            { label: "Emmaus Retreat T-Shirt" },
          ]}
        />
      </Section>

      <Section width="wide" className="!pt-2">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <div className="space-y-3">
            <Photo kind="apparel" ratio="1/1" rounded="rounded-3xl" />
            <div className="grid grid-cols-4 gap-2">
              {(["apparel", "merch", "community", "rosary"] as const).map((p, i) => (
                <Photo key={i} kind={p} ratio="1/1" rounded="rounded-xl" />
              ))}
            </div>
            <div className="pm-card mt-4 p-5">
              <h3 className="text-base font-bold text-pm-navy">
                Product &amp; cause details
              </h3>
              <p className="mt-1 text-xs text-pm-muted">
                Everything in this product page is connected to Emmaus and the
                SKD parish community.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  { l: "Product type", t: "Customized parish merch", d: "Retreat T-Shirt for Emmaus participants, volunteers and supporters." },
                  { l: "Cause supported", t: "Emmaus Retreat Fund", d: "Supports retreat formation, materials, meals and scholarships." },
                  { l: "Impact rule", t: "10% supports Emmaus", d: "A portion of every purchase contributes to the retreat mission." },
                  { l: "Recommended add-ons", t: "Mug · Cap · Hoodie", d: "Simple upsells from the same Emmaus collection." },
                ].map((b) => (
                  <div key={b.l} className="rounded-2xl border border-pm-border bg-white p-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                      {b.l}
                    </p>
                    <p className="mt-1 text-sm font-bold text-pm-navy">{b.t}</p>
                    <p className="mt-1 text-xs text-pm-muted">{b.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="pm-card p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="pm-label">Supports Emmaus Retreat Fund</span>
                <TrustBadge variant="approved" label="Approved seller" />
              </div>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-pm-navy md:text-4xl">
                Emmaus Retreat T-Shirt
              </h1>
              <div className="mt-2">
                <StarRating value={4.8} count={42} />
              </div>
              <p className="mt-2 text-sm text-pm-muted">
                Customized retreat apparel for SKD Emmaus participants, team
                members and parish supporters.
              </p>
              <p className="mt-4 text-3xl font-extrabold text-pm-navy">$22.00</p>

              <div className="mt-4">
                <ImpactBreakdown amount={22} causePct={10} platformPct={4} causeName="Emmaus Retreat Fund" />
              </div>

              <div className="mt-5 space-y-2">
                <p className="text-xs font-bold text-pm-navy">Color</p>
                <div className="flex flex-wrap gap-2">
                  {["Navy", "White", "Heather Gray"].map((c, i) => (
                    <span key={c} className="pm-chip" data-active={i === 0 ? "true" : undefined}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-xs font-bold text-pm-navy">Size</p>
                <div className="flex flex-wrap gap-2">
                  {["S", "M", "L", "XL", "2XL"].map((s, i) => (
                    <span
                      key={s}
                      className="pm-chip min-w-[44px] !justify-center"
                      data-active={i === 1 ? "true" : undefined}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <AddToCartButton
                  item={{
                    id: "emmaus-tee",
                    name: "Emmaus Retreat T-Shirt",
                    meta: "Navy · M",
                    price: 22,
                    cause: "Emmaus Retreat Fund",
                    photo: "apparel",
                  }}
                  fullWidth
                />
                <Link href="/shop/cart" className="pm-btn pm-btn-secondary w-full">
                  Buy Now
                </Link>
              </div>
            </div>

            <div className="pm-card p-5">
              <h3 className="text-base font-bold text-pm-navy">
                Complete your Emmaus set
              </h3>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {[
                  { id: "emmaus-mug", p: "merch", n: "Emmaus Mug", price: 14 },
                  { id: "emmaus-cap", p: "apparel", n: "Emmaus Cap", price: 18 },
                  { id: "emmaus-hoodie", p: "merch", n: "Emmaus Hoodie", price: 48 },
                ].map((u) => (
                  <div key={u.id} className="space-y-2">
                    <Photo kind={u.p as "merch" | "apparel"} ratio="1/1" rounded="rounded-xl" />
                    <p className="text-xs font-bold text-pm-navy">{u.n}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] text-pm-muted">+${u.price}</p>
                      <AddToCartButton
                        item={{
                          id: u.id,
                          name: u.n,
                          price: u.price,
                          cause: "Emmaus Retreat Fund",
                          photo: u.p,
                        }}
                        size="sm"
                        label="Add"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pm-card p-5">
              <h3 className="text-base font-bold text-pm-navy">
                Support Emmaus
              </h3>
              <p className="mt-1 text-xs text-pm-muted">
                Add a donation to the Emmaus retreat mission before checkout.
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[10, 20, 50, 100].map((amt) => (
                  <AddDonationButton
                    key={amt}
                    cause="Emmaus Retreat Fund"
                    amount={amt}
                    size="sm"
                    label={`+$${amt}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
