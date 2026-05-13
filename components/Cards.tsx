import Link from "next/link";
import { ReactNode } from "react";
import { Photo, PhotoKind } from "./Photo";
import { CauseLogo, CauseKey } from "./CauseLogo";
import { TrustBadge, StarRating } from "./TrustBadge";
import { AddToCartButton } from "./cart/AddToCartButton";

export function ProductCard({
  href = "/shop/product",
  id,
  photo,
  label,
  title,
  meta,
  price,
  rating,
  reviews,
  cause,
  verified = false,
  cta = "Add",
}: {
  href?: string;
  id?: string;
  photo: PhotoKind;
  label?: string;
  title: string;
  meta?: string;
  price?: string;
  rating?: number;
  reviews?: number;
  cause?: string;
  verified?: boolean;
  cta?: string;
}) {
  const numericPrice = price ? Number(price.replace(/[^0-9.]/g, "")) : undefined;
  const productId = id ?? title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <article className="pm-card group flex flex-col overflow-hidden p-3 transition hover:-translate-y-0.5 hover:shadow-pm-soft">
      <Link href={href} className="block">
        <Photo kind={photo} ratio="4/3" rounded="rounded-2xl" />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-3">
        <div className="flex flex-wrap items-center gap-1.5">
          {label ? <span className="pm-label">{label}</span> : null}
          {verified ? <TrustBadge variant="approved" label="Approved" /> : null}
        </div>
        <Link href={href} className="block">
          <h3 className="text-base font-bold text-pm-navy group-hover:text-pm-blue">
            {title}
          </h3>
        </Link>
        {meta ? <p className="text-xs text-pm-muted">{meta}</p> : null}
        {rating ? <StarRating value={rating} count={reviews} /> : null}
        <div className="mt-auto flex items-center justify-between pt-2">
          {price ? (
            <span className="text-sm font-bold text-pm-navy">{price}</span>
          ) : (
            <span />
          )}
          {numericPrice ? (
            <AddToCartButton
              item={{
                id: productId,
                name: title,
                meta,
                price: numericPrice,
                cause,
                photo,
              }}
              size="sm"
              label={cta}
            />
          ) : (
            <Link
              href={href}
              className="pm-btn pm-btn-primary !px-4 !py-1.5 text-xs"
            >
              {cta}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export function CauseCard({
  href = "/give/cause",
  photo,
  cause,
  label,
  title,
  description,
  location,
  raised,
  donors,
  verified = false,
  showMetrics = false,
  cta = "Support Now",
}: {
  href?: string;
  photo: PhotoKind;
  cause?: CauseKey;
  label?: string;
  title: string;
  description?: string;
  location?: string;
  raised?: string;
  donors?: string;
  verified?: boolean;
  showMetrics?: boolean;
  cta?: string;
}) {
  return (
    <article className="pm-card group flex flex-col overflow-hidden p-3 transition hover:-translate-y-0.5 hover:shadow-pm-soft">
      <Link href={href} className="relative block">
        <Photo kind={photo} ratio="4/3" rounded="rounded-2xl" />
        {cause ? (
          <CauseLogo
            cause={cause}
            size="md"
            className="absolute left-3 top-3 ring-2 !ring-white"
          />
        ) : null}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-3">
        <div className="flex flex-wrap items-center gap-1.5">
          {label ? <span className="pm-label">{label}</span> : null}
          {verified ? <TrustBadge variant="verified" label="Verified parish" /> : null}
        </div>
        <Link href={href} className="block">
          <h3 className="text-base font-bold text-pm-navy group-hover:text-pm-blue">
            {title}
          </h3>
        </Link>
        {location ? (
          <p className="text-[11px] font-medium text-pm-blue">{location}</p>
        ) : null}
        {description ? (
          <p className="text-xs text-pm-muted">{description}</p>
        ) : null}
        {showMetrics ? (
          <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-xs text-pm-muted">
            {raised ? (
              <span>
                <strong className="text-pm-navy">{raised}</strong> raised
              </span>
            ) : null}
            {donors ? <span>· {donors}</span> : null}
          </div>
        ) : null}
        <div className="mt-auto pt-2">
          <Link
            href={href}
            className="pm-btn pm-btn-primary !px-4 !py-1.5 text-xs"
          >
            {cta}
          </Link>
        </div>
      </div>
    </article>
  );
}

export function SponsorOfferCard({
  href = "/sponsors/profile",
  photo,
  initials,
  title,
  offer,
  daysLeft,
  isNew,
}: {
  href?: string;
  photo: PhotoKind;
  initials: string;
  title: string;
  offer: string;
  daysLeft?: string;
  isNew?: boolean;
}) {
  return (
    <article className="pm-card group relative flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-pm-soft">
      <Link href={href} className="block">
        <Photo
          kind={photo}
          ratio="4/3"
          rounded="rounded-none"
          className="!rounded-t-[24px] !rounded-b-none"
        />
      </Link>
      <span className="pm-avatar absolute left-3 top-3 !h-8 !w-8 rounded-md text-[10px]">
        {initials}
      </span>
      {isNew ? (
        <span className="absolute right-3 top-3 rounded-full bg-pm-blue px-2 py-1 text-[10px] font-bold text-white">
          New
        </span>
      ) : null}
      <div className="flex flex-col gap-1 p-3">
        <Link href={href} className="block">
          <h3 className="text-sm font-bold text-pm-navy group-hover:text-pm-blue">
            {title}
          </h3>
        </Link>
        <p className="text-base font-extrabold text-pm-blue">{offer}</p>
        <div className="flex items-center justify-between">
          {daysLeft ? (
            <p className="text-xs text-pm-muted">{daysLeft}</p>
          ) : (
            <span />
          )}
          <Link
            href={href}
            className="grid h-7 w-7 place-items-center rounded-full border border-pm-border text-pm-blue hover:bg-pm-soft"
            aria-label="Redeem offer"
          >
            +
          </Link>
        </div>
      </div>
    </article>
  );
}

export function BusinessCard({
  href = "/local-businesses/profile",
  photo,
  initials,
  title,
  description,
  tags,
  offerLabel,
  offer,
  offerDescription,
  impactLabel,
  impactText,
  rating = 4.8,
  reviews = 24,
  primaryCta = "Book",
  secondaryCta = "View",
}: {
  href?: string;
  photo: PhotoKind;
  initials: string;
  title: string;
  description?: string;
  tags?: string[];
  offerLabel?: string;
  offer?: string;
  offerDescription?: string;
  impactLabel?: string;
  impactText?: string;
  rating?: number;
  reviews?: number;
  primaryCta?: string;
  secondaryCta?: string;
}) {
  return (
    <article className="pm-card relative flex flex-col overflow-hidden">
      <Link href={href} className="block">
        <Photo
          kind={photo}
          ratio="16/9"
          rounded="rounded-none"
          className="!rounded-t-[24px] !rounded-b-none"
        />
      </Link>
      <span className="pm-avatar absolute left-4 top-32 !h-10 !w-10 ring-4 ring-white">
        {initials}
      </span>
      <div className="flex flex-1 flex-col gap-3 p-5 pt-7">
        <div>
          <Link href={href} className="block">
            <h3 className="text-base font-bold text-pm-navy hover:text-pm-blue">
              {title}
            </h3>
          </Link>
          {description ? (
            <p className="mt-1 text-xs text-pm-muted">{description}</p>
          ) : null}
        </div>
        {reviews ? (
          <div className="flex flex-wrap items-center gap-2">
            <StarRating value={rating} count={reviews} />
          </div>
        ) : null}
        {tags?.length ? (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <span key={t} className="pm-label !text-[10px]">
                {t}
              </span>
            ))}
          </div>
        ) : null}
        {offer ? (
          <div className="rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan p-3 text-white">
            <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">
              {offerLabel ?? "Parishioner offer"}
            </p>
            <p className="text-lg font-extrabold">{offer}</p>
            {offerDescription ? (
              <p className="text-[11px] opacity-90">{offerDescription}</p>
            ) : null}
          </div>
        ) : null}
        {impactText ? (
          <div className="rounded-2xl border border-pm-border bg-pm-soft/60 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
              {impactLabel ?? "Community impact"}
            </p>
            <p className="text-xs text-pm-ink">{impactText}</p>
          </div>
        ) : null}
        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          <Link
            href={href}
            className="pm-btn pm-btn-primary !px-4 !py-1.5 text-xs"
          >
            {primaryCta}
          </Link>
          <Link
            href={href}
            className="pm-btn pm-btn-secondary !px-4 !py-1.5 text-xs"
          >
            {secondaryCta}
          </Link>
        </div>
      </div>
    </article>
  );
}

export function StatTile({
  label,
  value,
  hint,
}: {
  label?: string;
  value: ReactNode;
  hint?: string;
}) {
  return (
    <div className="pm-card flex flex-col items-start p-4">
      {label ? (
        <span className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
          {label}
        </span>
      ) : null}
      <span className="text-xl font-extrabold text-pm-navy">{value}</span>
      {hint ? <span className="text-xs text-pm-muted">{hint}</span> : null}
    </div>
  );
}

export function NumberStep({
  n,
  title,
  description,
}: {
  n: number;
  title: string;
  description: string;
}) {
  return (
    <div className="pm-card p-5">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-pm-blue to-pm-cyan text-sm font-extrabold text-white">
        {n}
      </span>
      <h3 className="mt-3 text-base font-bold text-pm-navy">{title}</h3>
      <p className="mt-1 text-xs text-pm-muted">{description}</p>
    </div>
  );
}
