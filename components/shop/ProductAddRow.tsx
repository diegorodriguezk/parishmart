"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";
import { useCart, type CartItem } from "@/components/cart/CartContext";

export function ProductAddRow({
  item,
}: {
  item: Omit<CartItem, "qty">;
}) {
  const [qty, setQty] = useState(1);
  const cart = useCart();

  return (
    <div className="flex items-center gap-2">
      {/* Quantity counter */}
      <div className="flex items-center rounded-full border border-pm-border bg-white shadow-pm-soft">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="flex h-10 w-10 items-center justify-center rounded-l-full text-lg font-bold text-pm-navy transition hover:bg-pm-soft disabled:opacity-40"
          disabled={qty <= 1}
        >
          −
        </button>
        <span className="w-8 select-none text-center text-sm font-extrabold text-pm-navy">
          {qty}
        </span>
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => setQty((q) => q + 1)}
          className="flex h-10 w-10 items-center justify-center rounded-r-full text-lg font-bold text-pm-navy transition hover:bg-pm-soft"
        >
          +
        </button>
      </div>

      {/* Add button */}
      <button
        type="button"
        onClick={() => cart.addItem({ ...item, qty })}
        className="pm-btn pm-btn-primary"
      >
        Add{qty > 1 ? ` (${qty})` : ""}
      </button>

      {/* Share button */}
      <button
        type="button"
        onClick={() => navigator.share?.({ title: item.name, url: window.location.href })}
        className="pm-btn pm-btn-secondary inline-flex items-center gap-1.5"
      >
        <Share2 className="h-4 w-4" aria-hidden />
        Share
      </button>
    </div>
  );
}
