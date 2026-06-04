"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart/CartContext";
import { Photo, PhotoKind } from "@/components/Photo";
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
    <div className="mx-auto max-w-3xl">
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
                <div className="h-24 w-24 shrink-0 sm:h-28 sm:w-28">
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

          <div className="mt-5 border-t border-pm-border pt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-extrabold text-pm-navy">Subtotal</span>
              <span className="text-2xl font-extrabold text-pm-navy">
                ${(cart.totals.subtotal + cart.totals.donations).toFixed(2)}
              </span>
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Link
                href="/share-impact"
                className="pm-btn pm-btn-primary sm:flex-1"
              >
                Continue to Checkout
              </Link>
              <Link href="/shop" className="pm-btn pm-btn-secondary sm:flex-1">
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
}
