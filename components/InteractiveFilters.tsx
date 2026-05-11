"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { useCart } from "./cart/CartContext";

export function FilterChipsClient({
  items,
  defaultActive,
  onChange,
}: {
  items: string[];
  defaultActive?: string;
  onChange?: (value: string) => void;
}) {
  const [active, setActive] = useState(defaultActive ?? items[0] ?? "");
  return (
    <div className="-mx-1 flex gap-2 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {items.map((item) => (
        <button
          key={item}
          type="button"
          className="pm-chip whitespace-nowrap"
          data-active={item === active ? "true" : undefined}
          onClick={() => {
            setActive(item);
            onChange?.(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export function AmountPickerClient({
  amounts = ["$10", "$25", "$50", "$100"],
  defaultActive = "$25",
  cta = "Support Now",
  onSubmit,
  cause,
}: {
  amounts?: string[];
  defaultActive?: string;
  cta?: string;
  onSubmit?: (amount: number) => void;
  cause?: string;
}) {
  const cart = useCart();
  const [active, setActive] = useState(defaultActive);
  const [other, setOther] = useState("");
  const value = other
    ? Number(other.replace(/[^0-9.]/g, ""))
    : Number(active.replace(/[^0-9.]/g, ""));

  const submit = () => {
    if (!value) return;
    if (cause) {
      cart.addDonation({ cause, amount: value });
      cart.showToast(`Added $${value.toFixed(2)} to ${cause}`);
    }
    onSubmit?.(value);
  };

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {amounts.map((a) => (
          <button
            key={a}
            type="button"
            data-active={a === active && !other ? "true" : undefined}
            className="pm-chip !justify-center !py-2.5"
            onClick={() => {
              setActive(a);
              setOther("");
            }}
          >
            {a}
          </button>
        ))}
      </div>
      <input
        value={other}
        onChange={(e) => setOther(e.target.value)}
        inputMode="decimal"
        placeholder="Other amount"
        aria-label="Custom amount"
        className="pm-input rounded-full border border-pm-border bg-white px-4 py-2.5 text-sm shadow-pm-soft"
      />
      <button
        type="button"
        onClick={submit}
        disabled={!value}
        className="pm-btn pm-btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
      >
        {cta}
        {value ? ` · $${value.toFixed(2)}` : ""}
      </button>
      {cause ? (
        <p className="text-center text-[11px] text-pm-muted">
          Goes to <strong className="text-pm-navy">{cause}</strong>
        </p>
      ) : null}
    </div>
  );
}

export function QtyControl({
  value,
  onChange,
  min = 1,
  max = 99,
}: {
  value: number;
  onChange: (n: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-pm-border bg-white px-1 py-0.5 text-sm">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        className="grid h-8 w-8 place-items-center rounded-full text-pm-blue hover:bg-pm-soft"
        aria-label="Decrease"
      >
        <Minus className="h-3.5 w-3.5" aria-hidden />
      </button>
      <span className="w-6 text-center font-bold text-pm-navy">{value}</span>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        className="grid h-8 w-8 place-items-center rounded-full text-pm-blue hover:bg-pm-soft"
        aria-label="Increase"
      >
        <Plus className="h-3.5 w-3.5" aria-hidden />
      </button>
    </div>
  );
}
