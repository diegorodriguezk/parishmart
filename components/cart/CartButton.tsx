"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "./CartContext";

export function CartButton({ compact = false }: { compact?: boolean }) {
  const cart = useCart();
  const count = cart.totals.itemCount + cart.donations.length;
  return (
    <button
      onClick={cart.open}
      className={`relative inline-flex items-center gap-2 rounded-full border border-pm-border bg-white px-3 py-2 text-sm font-bold text-pm-navy hover:border-pm-blue hover:text-pm-blue ${
        compact ? "min-w-0" : ""
      }`}
      aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
    >
      <ShoppingCart className="h-4 w-4" aria-hidden />
      {!compact ? <span className="hidden sm:inline">Cart</span> : null}
      {count > 0 ? (
        <span className="grid h-5 min-w-[20px] place-items-center rounded-full bg-gradient-to-br from-pm-blue to-pm-cyan px-1.5 text-[10px] font-extrabold text-white">
          {count}
        </span>
      ) : null}
    </button>
  );
}
