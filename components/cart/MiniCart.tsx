"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "./CartContext";

export function MiniCart() {
  const cart = useCart();

  useEffect(() => {
    if (!cart.isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") cart.close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cart]);

  if (!cart.isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-label="Cart">
      <button
        aria-label="Close cart overlay"
        onClick={cart.close}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />
      <aside className="absolute right-0 top-0 flex h-dvh w-full max-w-[420px] flex-col bg-white shadow-2xl">
        <header className="flex items-center justify-between border-b border-pm-border px-5 py-4">
          <div>
            <p className="text-sm font-bold text-pm-navy">Your cart</p>
            <p className="text-xs text-pm-muted">
              {cart.totals.itemCount} item{cart.totals.itemCount === 1 ? "" : "s"}
              {cart.donations.length ? ` · ${cart.donations.length} donation` : ""}
            </p>
          </div>
          <button
            onClick={cart.close}
            className="grid h-9 w-9 place-items-center rounded-full border border-pm-border text-pm-muted hover:text-pm-navy"
            aria-label="Close cart"
          >
            ✕
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {cart.items.length === 0 && cart.donations.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="text-2xl">🛍️</p>
              <p className="mt-2 text-sm font-bold text-pm-navy">
                Your cart is empty
              </p>
              <p className="mt-1 max-w-[260px] text-xs text-pm-muted">
                Add products that support a cause or make a direct donation.
              </p>
              <Link
                href="/shop"
                onClick={cart.close}
                className="pm-btn pm-btn-primary mt-4"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.items.length > 0 ? (
                <section>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-pm-blue">
                    Products
                  </p>
                  <ul className="space-y-2">
                    {cart.items.map((it) => (
                      <li
                        key={it.id}
                        className="flex items-start gap-3 rounded-2xl border border-pm-border bg-white p-3"
                      >
                        <div className="flex-1">
                          <p className="text-sm font-bold text-pm-navy">
                            {it.name}
                          </p>
                          {it.meta ? (
                            <p className="text-xs text-pm-muted">{it.meta}</p>
                          ) : null}
                          {it.cause ? (
                            <p className="mt-1 text-[11px] text-pm-blue">
                              Supports {it.cause}
                            </p>
                          ) : null}
                          <div className="mt-2 inline-flex items-center gap-1 rounded-full border border-pm-border bg-white text-xs">
                            <button
                              onClick={() => cart.updateQty(it.id, it.qty - 1)}
                              className="grid h-7 w-7 place-items-center text-pm-blue"
                              aria-label="Decrease quantity"
                            >
                              −
                            </button>
                            <span className="px-2 font-bold text-pm-navy">
                              {it.qty}
                            </span>
                            <button
                              onClick={() => cart.updateQty(it.id, it.qty + 1)}
                              className="grid h-7 w-7 place-items-center text-pm-blue"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                            <button
                              onClick={() => cart.removeItem(it.id)}
                              className="ml-2 px-2 text-pm-muted hover:text-pm-navy"
                              aria-label="Remove"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <p className="text-sm font-extrabold text-pm-navy">
                          ${(it.price * it.qty).toFixed(2)}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
              {cart.donations.length > 0 ? (
                <section>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-pm-blue">
                    Donations
                  </p>
                  <ul className="space-y-2">
                    {cart.donations.map((d) => (
                      <li
                        key={d.cause}
                        className="flex items-center justify-between gap-3 rounded-2xl border border-pm-border bg-pm-soft/60 p-3"
                      >
                        <div>
                          <p className="text-sm font-bold text-pm-navy">
                            {d.cause}
                          </p>
                          <p className="text-[11px] text-pm-muted">
                            One-time gift
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-extrabold text-pm-navy">
                            ${d.amount.toFixed(2)}
                          </p>
                          <button
                            onClick={() => cart.removeDonation(d.cause)}
                            className="text-xs text-pm-muted hover:text-pm-navy"
                            aria-label={`Remove ${d.cause}`}
                          >
                            ✕
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>
          )}
        </div>

        {(cart.items.length > 0 || cart.donations.length > 0) && (
          <footer className="border-t border-pm-border px-5 py-4">
            <dl className="space-y-1.5 text-sm">
              <div className="flex justify-between text-pm-muted">
                <dt>Subtotal</dt>
                <dd>${cart.totals.subtotal.toFixed(2)}</dd>
              </div>
              {cart.totals.donations > 0 ? (
                <div className="flex justify-between text-pm-muted">
                  <dt>Donations</dt>
                  <dd>${cart.totals.donations.toFixed(2)}</dd>
                </div>
              ) : null}
              <div className="flex justify-between text-pm-muted">
                <dt>Platform support ({cart.supportPct}%)</dt>
                <dd>${cart.totals.support.toFixed(2)}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-pm-border pt-2">
                <dt className="text-base font-extrabold text-pm-navy">Total</dt>
                <dd className="text-base font-extrabold text-pm-navy">
                  ${cart.totals.total.toFixed(2)}
                </dd>
              </div>
            </dl>
            <div className="mt-3 flex flex-col gap-2">
              <Link
                href="/shop/cart"
                onClick={cart.close}
                className="pm-btn pm-btn-primary"
              >
                Continue to Checkout
              </Link>
              <Link
                href="/shop"
                onClick={cart.close}
                className="pm-btn pm-btn-secondary"
              >
                Keep Shopping
              </Link>
            </div>
          </footer>
        )}
      </aside>
    </div>
  );
}

export function CartToast() {
  const cart = useCart();
  if (!cart.toast) return null;
  return (
    <div className="pointer-events-none fixed bottom-4 left-1/2 z-[70] -translate-x-1/2 px-4">
      <div className="rounded-full bg-pm-navy px-5 py-3 text-sm font-bold text-white shadow-2xl">
        {cart.toast}
      </div>
    </div>
  );
}
