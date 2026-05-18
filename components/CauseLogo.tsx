import { CAUSES, type CauseKey } from "@/lib/catalog";

export type { CauseKey };

export function CauseLogo({
  cause,
  size = "md",
  className = "",
}: {
  cause: CauseKey;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const info = CAUSES[cause];
  const sizeCls =
    size === "sm"
      ? "h-10 w-10"
      : size === "lg"
        ? "h-20 w-20"
        : size === "xl"
          ? "h-28 w-28"
          : "h-14 w-14";
  const bgCls =
    info.background === "dark"
      ? "bg-pm-navy ring-pm-navy/20"
      : "bg-white ring-pm-border";
  return (
    <span
      className={`grid shrink-0 place-items-center overflow-hidden rounded-2xl p-1.5 ring-1 shadow-pm-soft ${sizeCls} ${bgCls} ${className}`}
      title={info.name}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={info.logoSrc}
        alt={info.name}
        className="h-full w-full object-contain"
        loading="lazy"
      />
    </span>
  );
}
