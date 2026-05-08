export function ImpactBreakdown({
  amount,
  causePct = 10,
  platformPct = 4,
  causeName = "Emmaus Retreat Fund",
  compact = false,
}: {
  amount: number;
  causePct?: number;
  platformPct?: number;
  causeName?: string;
  compact?: boolean;
}) {
  const cause = (amount * causePct) / 100;
  const platform = (amount * platformPct) / 100;
  const seller = amount - cause - platform;
  const sellerPct = 100 - causePct - platformPct;

  return (
    <div className={`rounded-2xl border border-pm-border bg-white ${compact ? "p-3" : "p-4"}`}>
      <div className="flex items-center justify-between gap-2">
        <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
          Where your money goes
        </p>
        <p className="text-[10px] text-pm-muted">on ${amount.toFixed(2)}</p>
      </div>
      <div className="mt-2 flex h-2.5 w-full overflow-hidden rounded-full bg-pm-soft">
        <span
          className="block h-full bg-gradient-to-r from-pm-blue to-pm-cyan"
          style={{ width: `${causePct}%` }}
          aria-label={`${causePct}% to cause`}
        />
        <span
          className="block h-full bg-pm-navy"
          style={{ width: `${platformPct}%` }}
          aria-label={`${platformPct}% to platform`}
        />
        <span
          className="block h-full bg-pm-soft"
          style={{ width: `${sellerPct}%` }}
          aria-label={`${sellerPct}% to seller`}
        />
      </div>
      <ul className="mt-3 grid gap-1.5 text-[11px] sm:grid-cols-3">
        <li className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-pm-blue to-pm-cyan" />
          <span className="text-pm-muted">
            <strong className="text-pm-navy">${cause.toFixed(2)}</strong> · {causeName}
          </span>
        </li>
        <li className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-pm-navy" />
          <span className="text-pm-muted">
            <strong className="text-pm-navy">${platform.toFixed(2)}</strong> · ParishMart
          </span>
        </li>
        <li className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full border border-pm-border bg-pm-soft" />
          <span className="text-pm-muted">
            <strong className="text-pm-navy">${seller.toFixed(2)}</strong> · Seller
          </span>
        </li>
      </ul>
    </div>
  );
}
