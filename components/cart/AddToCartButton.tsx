"use client";

import { useCart, CartItem } from "./CartContext";

export function AddToCartButton({
  item,
  size = "md",
  label = "Add",
  fullWidth = false,
}: {
  item: Omit<CartItem, "qty"> & { qty?: number };
  size?: "sm" | "md";
  label?: string;
  fullWidth?: boolean;
}) {
  const cart = useCart();
  const cls =
    size === "sm"
      ? "pm-btn pm-btn-primary !px-4 !py-1.5 text-xs"
      : "pm-btn pm-btn-primary";
  return (
    <button
      type="button"
      onClick={() => {
        cart.addItem(item);
      }}
      className={`${cls} ${fullWidth ? "w-full" : ""}`}
    >
      {label}
    </button>
  );
}

export function AddDonationButton({
  cause,
  amount,
  size = "md",
  label = "Add donation",
  fullWidth = false,
}: {
  cause: string;
  amount: number;
  size?: "sm" | "md";
  label?: string;
  fullWidth?: boolean;
}) {
  const cart = useCart();
  const cls =
    size === "sm"
      ? "pm-btn pm-btn-primary !px-4 !py-1.5 text-xs"
      : "pm-btn pm-btn-primary";
  return (
    <button
      type="button"
      onClick={() => {
        cart.addDonation({ cause, amount });
        cart.showToast(`Added $${amount} to ${cause}`);
      }}
      className={`${cls} ${fullWidth ? "w-full" : ""}`}
    >
      {label}
    </button>
  );
}
