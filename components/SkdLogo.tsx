export function SkdLogo({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const sizeCls =
    size === "sm"
      ? "h-9 w-9"
      : size === "lg"
        ? "h-16 w-16"
        : size === "xl"
          ? "h-24 w-24"
          : "h-11 w-11";
  return (
    <span
      className={`grid shrink-0 place-items-center overflow-hidden rounded-full bg-white p-0.5 ring-1 ring-pm-border shadow-pm-soft ${sizeCls} ${className}`}
      title="Saint Katharine Drexel Catholic Parish · Weston, FL"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/skd/logo.png"
        alt="Saint Katharine Drexel Catholic Parish"
        className="h-full w-full object-contain"
      />
    </span>
  );
}
