import Link from "next/link";

export function Logo({ href = "/", subtitle }: { href?: string; subtitle?: string }) {
  return (
    <Link href={href} className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-pm-blue to-pm-cyan font-extrabold text-white shadow-pm-soft">
        P
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-lg font-extrabold tracking-tight text-pm-navy">
          ParishMart
        </span>
        {subtitle ? (
          <span className="text-[11px] font-medium text-pm-muted">{subtitle}</span>
        ) : null}
      </span>
    </Link>
  );
}

export function SubStoreBadge({
  name,
  location,
}: {
  name: string;
  location: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-pm-soft text-xs font-extrabold text-pm-blue ring-1 ring-pm-border">
        SKD
      </span>
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-bold text-pm-navy">{name}</span>
        <span className="text-[11px] text-pm-muted">{location}</span>
      </div>
    </div>
  );
}
