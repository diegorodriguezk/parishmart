"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart/CartContext";
import { Photo, PhotoKind } from "@/components/Photo";
import { ImpactBreakdown } from "@/components/ImpactBreakdown";
import { TrustBadge } from "@/components/TrustBadge";
import { QtyControl } from "@/components/InteractiveFilters";

export function CartView() {
  const cart = useCart();

  if (cart.items.length === 0 && cart.donations.length === 0) {
    return (
      <div className="pm-card p-10 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-pm-soft text-pm-blue">
          <ShoppingBag className="h-7 w-7" aria-hidden />
        </span>
        <p className="mt-3 text-lg font-bold text-pm-navy">Your cart is empty</p>
        <p className="mt-1 text-sm text-pm-muted">
          Add products that support a cause or make a direct donation.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <Link href="/shop" className="pm-btn pm-btn-primary">
            Start Shopping
          </Link>
          <Link href="/give" className="pm-btn pm-btn-secondary">
            Browse Causes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
      <div className="space-y-5">
        <div className="pm-card p-5 sm:p-6">
          <h3 className="text-lg font-bold text-pm-navy">Your cart</h3>
          <p className="mt-1 text-xs text-pm-muted">
            Products and optional impact connected to causes you choose.
          </p>
          <div className="mt-4 space-y-3">
            {cart.items.map((it) => (
              <div
                key={it.id}
                className="flex flex-col gap-3 rounded-2xl border border-pm-border bg-white p-3 sm:flex-row sm:items-center"
              >
                <div className="h-20 w-20 shrink-0 sm:h-16 sm:w-16">
                  <Photo
                    kind={(it.photo as PhotoKind) ?? "merch"}
                    ratio="1/1"
                    rounded="rounded-xl"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-pm-navy">{it.name}</p>
                  {it.meta ? (
                    <p className="text-xs text-pm-muted">{it.meta}</p>
                  ) : null}
                  {it.cause ? (
                    <p className="mt-0.5 text-[11px] text-pm-blue">
                      Supports {it.cause}
                    </p>
                  ) : null}
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <QtyControl
                      value={it.qty}
                      onChange={(n) => cart.updateQty(it.id, n)}
                    />
                    <button
                      onClick={() => cart.removeItem(it.id)}
                      className="text-xs text-pm-muted hover:text-pm-navy"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="text-base font-extrabold text-pm-navy sm:text-right">
                  ${(it.price * it.qty).toFixed(2)}
                </p>
              </div>
            ))}
            {cart.donations.map((d) => (
              <div
                key={d.cause}
                className="flex items-center justify-between gap-3 rounded-2xl border border-pm-border bg-pm-soft/60 p-3"
              >
                <div>
                  <p className="text-sm font-bold text-pm-navy">{d.cause}</p>
                  <p className="text-xs text-pm-muted">One-time donation</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-base font-extrabold text-pm-navy">
                    ${d.amount.toFixed(2)}
                  </p>
                  <button
                    onClick={() => cart.removeDonation(d.cause)}
                    className="text-xs text-pm-muted hover:text-pm-navy"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pm-card p-5 sm:p-6">
          <h3 className="text-lg font-bold text-pm-navy">Support ParishMart</h3>
          <p className="mt-1 text-xs text-pm-muted">
            Like a restaurant tip, this optional contribution helps cover platform,
            payment and community support costs.
          </p>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {[15, 18, 20, 0].map((pct) => (
              <button
                key={pct}
                onClick={() => cart.setSupportPct(pct)}
                data-active={cart.supportPct === pct ? "true" : undefined}
                className="pm-chip flex-col !rounded-2xl !py-3"
              >
                <span className="text-sm font-extrabold">
                  {pct === 0 ? "Skip" : `${pct}%`}
                </span>
                <span className="text-[11px] opacity-80">
                  {pct === 0
                    ? "$0.00"
                    : `$${((cart.totals.subtotal + cart.totals.donations) * pct / 100).toFixed(2)}`}
                </span>
              </button>
            ))}
          </div>
        </div>

        <ImpactBreakdown
          amount={cart.totals.subtotal + cart.totals.donations}
          causePct={10}
          platformPct={4}
          causeName="Selected causes"
        />
      </div>

      <aside className="space-y-5">
        <div className="pm-card p-5 sm:p-6">
          <h3 className="text-lg font-bold text-pm-navy">Order summary</h3>
          <dl className="mt-4 divide-y divide-pm-border text-sm">
            <div className="flex justify-between py-2">
              <dt className="text-pm-muted">Products subtotal</dt>
              <dd className="font-bold text-pm-navy">
                ${cart.totals.subtotal.toFixed(2)}
              </dd>
            </div>
            <div className="flex justify-between py-2">
              <dt className="text-pm-muted">Donations</dt>
              <dd className="font-bold text-pm-navy">
                ${cart.totals.donations.toFixed(2)}
              </dd>
            </div>
            <div className="flex justify-between py-2">
              <dt className="text-pm-muted">
                Platform support ({cart.supportPct}%)
              </dt>
              <dd className="font-bold text-pm-navy">
                ${cart.totals.support.toFixed(2)}
              </dd>
            </div>
            <div className="flex justify-between py-2">
              <dt className="text-pm-muted">Estimated tax</dt>
              <dd className="font-bold text-pm-navy">$0.00</dd>
            </div>
            <div className="flex justify-between py-2">
              <dt className="text-pm-muted">Shipping</dt>
              <dd className="font-bold text-pm-navy">Calculated next</dd>
            </div>
          </dl>
          <div className="mt-3 flex items-center justify-between border-t border-pm-border pt-3">
            <span className="text-sm font-extrabold text-pm-navy">Total</span>
            <span className="text-2xl font-extrabold text-pm-navy">
              ${cart.totals.total.toFixed(2)}
            </span>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <TrustBadge variant="secured" />
            <span className="text-[11px] text-pm-muted">256-bit SSL · Stripe</span>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <Link href="/share-impact" className="pm-btn pm-btn-primary">
              Continue to Checkout
            </Link>
            <Link href="/shop" className="pm-btn pm-btn-secondary">
              Keep Shopping
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
