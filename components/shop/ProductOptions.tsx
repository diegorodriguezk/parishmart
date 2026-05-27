"use client";

import { useState } from "react";

const COLORS = [
  { name: "Black", bg: "bg-black" },
  { name: "Navy", bg: "bg-[#1a2d5a]" },
  { name: "Heather Gray", bg: "bg-[#9ca3af]" },
];

const SIZES = ["S", "M", "L", "XL", "2XL"];

export function ProductColorPicker({
  onSelect,
}: {
  onSelect?: (colorName: string) => void;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-wrap gap-2">
      {COLORS.map((c, i) => (
        <button
          key={c.name}
          type="button"
          title={c.name}
          aria-label={c.name}
          onClick={() => {
            setActive(i);
            onSelect?.(c.name);
          }}
          className={`h-7 w-7 rounded-full border-2 transition ${c.bg} ${
            active === i
              ? "border-pm-blue ring-2 ring-pm-blue/30"
              : "border-white ring-1 ring-pm-border hover:ring-pm-blue"
          }`}
        />
      ))}
    </div>
  );
}

export function ProductSizePicker() {
  const [active, setActive] = useState(1);

  return (
    <div className="flex flex-wrap gap-2">
      {SIZES.map((s, i) => (
        <button
          key={s}
          type="button"
          onClick={() => setActive(i)}
          className="pm-chip min-w-[44px] !justify-center"
          data-active={active === i ? "true" : undefined}
        >
          {s}
        </button>
      ))}
    </div>
  );
}
