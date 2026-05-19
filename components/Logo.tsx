import Image from "next/image";
import Link from "next/link";
import { SkdLogo } from "./SkdLogo";

export function LogoMark({
  variant = "color",
  className = "h-10 w-auto",
  priority = false,
}: {
  variant?: "color" | "white";
  className?: string;
  priority?: boolean;
}) {
  const src =
    variant === "white"
      ? "/brand/parishmart-mark-white.png"
      : "/brand/parishmart-mark.png";
  return (
    <Image
      src={src}
      alt="ParishMart · Shop with Purpose. Give with Love."
      width={4885}
      height={917}
      priority={priority}
      className={className}
    />
  );
}

export function Logo({
  href = "/",
  subtitle,
  variant = "color",
}: {
  href?: string;
  subtitle?: string;
  variant?: "color" | "white";
  withText?: boolean;
}) {
  const subColor = variant === "white" ? "text-white/70" : "text-pm-muted";
  return (
    <Link href={href} className="flex items-center gap-3" aria-label="ParishMart home">
      <LogoMark variant={variant} className="h-9 w-auto sm:h-10" priority />
      {subtitle ? (
        <span className={`hidden text-[11px] font-medium leading-tight sm:block ${subColor}`}>
          {subtitle}
        </span>
      ) : null}
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
      <SkdLogo size="md" />
      <div className="hidden flex-col leading-tight sm:flex">
        <span className="text-sm font-bold text-pm-navy">{name}</span>
        <span className="text-[11px] text-pm-muted">{location}</span>
      </div>
    </div>
  );
}
