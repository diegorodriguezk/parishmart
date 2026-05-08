type Variant = "verified" | "approved" | "featured" | "secured";

const VARIANTS: Record<Variant, { icon: string; label: string; cls: string }> = {
  verified: {
    icon: "✓",
    label: "Verified parish",
    cls: "bg-pm-soft text-pm-blue border-pm-blue/30",
  },
  approved: {
    icon: "✓",
    label: "Approved seller",
    cls: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  featured: {
    icon: "★",
    label: "Featured",
    cls: "bg-amber-50 text-amber-700 border-amber-200",
  },
  secured: {
    icon: "🔒",
    label: "Secure checkout",
    cls: "bg-slate-50 text-slate-700 border-slate-200",
  },
};

export function TrustBadge({
  variant,
  label,
}: {
  variant: Variant;
  label?: string;
}) {
  const v = VARIANTS[variant];
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${v.cls}`}
    >
      <span aria-hidden>{v.icon}</span>
      {label ?? v.label}
    </span>
  );
}

export function StarRating({
  value,
  count,
}: {
  value: number;
  count?: number;
}) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <span className="inline-flex items-center gap-1 text-xs text-pm-ink">
      <span className="text-amber-500" aria-hidden>
        {"★".repeat(full)}
        {half ? "☆" : ""}
        {"☆".repeat(5 - full - (half ? 1 : 0))}
      </span>
      <span className="font-bold">{value.toFixed(1)}</span>
      {count !== undefined ? (
        <span className="text-pm-muted">({count})</span>
      ) : null}
    </span>
  );
}
