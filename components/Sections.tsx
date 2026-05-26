import Link from "next/link";
import { ReactNode } from "react";
import { FilterChipsClient, AmountPickerClient } from "./InteractiveFilters";

export function Section({
  children,
  className = "",
  width = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  width?: "default" | "wide";
  id?: string;
}) {
  const max = width === "wide" ? "max-w-[1280px]" : "max-w-[1180px]";
  return (
    <section
      id={id}
      className={`mx-auto ${max} px-4 py-8 sm:px-6 sm:py-10 ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  title,
  description,
  right,
}: {
  title: ReactNode;
  description?: ReactNode;
  right?: ReactNode;
}) {
  return (
    <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-2xl font-extrabold tracking-tight text-pm-navy md:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-1 max-w-2xl text-sm text-pm-muted">{description}</p>
        ) : null}
      </div>
      {right ? (
        <div className="-mx-1 flex gap-3 overflow-x-auto px-1 text-sm sm:mx-0 sm:flex-wrap sm:gap-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {right}
        </div>
      ) : null}
    </div>
  );
}

export function FilterChips({
  items,
  active,
}: {
  items: string[];
  active?: string;
}) {
  return <FilterChipsClient items={items} defaultActive={active ?? items[0]} />;
}

export function DarkPanel({
  title,
  description,
  children,
  cta,
  ctaHref,
  ctaSecondary,
  ctaSecondaryHref,
  className = "",
}: {
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  cta?: string;
  ctaHref?: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
  className?: string;
}) {
  return (
    <div className={`pm-dark-panel ${className} !p-6 sm:!p-10`}>
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-2xl font-extrabold leading-tight md:text-3xl">{title}</h2>
          {description ? (
            <p className="text-sm text-white/85 md:text-base">{description}</p>
          ) : null}
          {children}
        </div>
        {cta ? (
          <div className="flex flex-wrap gap-3">
            {ctaSecondary && ctaSecondaryHref ? (
              /^https?:\/\//.test(ctaSecondaryHref) ? (
                <a
                  href={ctaSecondaryHref}
                  target="_blank"
                  rel="noreferrer"
                  className="pm-btn bg-white/10 text-white hover:bg-white/20"
                >
                  {ctaSecondary}
                </a>
              ) : (
                <Link
                  href={ctaSecondaryHref}
                  className="pm-btn bg-white/10 text-white hover:bg-white/20"
                >
                  {ctaSecondary}
                </Link>
              )
            ) : null}
            {ctaHref && /^https?:\/\//.test(ctaHref) ? (
              <a
                href={ctaHref}
                target="_blank"
                rel="noreferrer"
                className="pm-btn bg-white !text-pm-blue"
              >
                {cta}
              </a>
            ) : (
              <Link
                href={ctaHref ?? "#"}
                className="pm-btn bg-white !text-pm-blue"
              >
                {cta}
              </Link>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function PillButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "ghost";
}) {
  const cls =
    variant === "primary"
      ? "pm-btn pm-btn-primary"
      : variant === "secondary"
        ? "pm-btn pm-btn-secondary"
        : variant === "dark"
          ? "pm-btn pm-btn-dark"
          : "pm-btn pm-btn-ghost";
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function AmountPicker(props: {
  amounts?: string[];
  active?: string;
  cta?: string;
  cause?: string;
}) {
  return (
    <AmountPickerClient
      amounts={props.amounts}
      defaultActive={props.active}
      cta={props.cta}
      cause={props.cause}
    />
  );
}

export function ProgressBar({
  value,
  max,
  raised,
  goal,
  supporters,
}: {
  value: number;
  max: number;
  raised?: string;
  goal?: string;
  supporters?: string;
}) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="space-y-2">
      <div className="pm-progress" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <span style={{ width: `${pct}%` }} />
      </div>
      <div className="flex flex-wrap gap-3 text-xs text-pm-muted">
        {raised ? (
          <span>
            <strong className="text-pm-navy">{raised}</strong> raised
          </span>
        ) : null}
        {supporters ? <span>{supporters} supporters</span> : null}
        {goal ? <span>Goal: {goal}</span> : null}
      </div>
    </div>
  );
}
