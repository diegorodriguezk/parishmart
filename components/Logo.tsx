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
      alt="ParishMart"
      width={2545}
      height={3872}
      priority={priority}
      className={className}
    />
  );
}

export function Logo({
  href = "/",
  subtitle,
  variant = "color",
  withText = true,
}: {
  href?: string;
  subtitle?: string;
  variant?: "color" | "white";
  withText?: boolean;
}) {
  const textColor = variant === "white" ? "text-white" : "text-pm-navy";
  const subColor = variant === "white" ? "text-white/70" : "text-pm-muted";
  return (
    <Link href={href} className="flex items-center gap-2.5" aria-label="ParishMart home">
      <LogoMark variant={variant} className="h-10 w-auto" priority />
      {withText ? (
        <span className="flex flex-col leading-tight">
          <span className={`text-lg font-extrabold tracking-tight ${textColor}`}>
            ParishMart
          </span>
          {subtitle ? (
            <span className={`text-[11px] font-medium ${subColor}`}>
              {subtitle}
            </span>
          ) : null}
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
