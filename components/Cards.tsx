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
  src,
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
  src?: string;
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
        <Photo
          kind={photo}
          src={src}
          alt={title}
          ratio="4/3"
          rounded="rounded-2xl"
          overlay={src ? "none" : "subtle"}
          fit={src ? "contain" : "cover"}
          className={src ? "bg-white" : ""}
        />
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
        {meta ? <p className="line-clamp-2 text-xs text-pm-muted">{meta}</p> : null}
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
        <Link
          href={href}
          className="pm-btn pm-btn-secondary !w-full !px-3 !py-1.5 text-[11px]"
        >
          View Product
        </Link>
      </div>
    </article>
  );
}

export function CauseCard({
  href = "/give/cause",
  photo,
  cause,
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
  const isExternal = /^https?:\/\//.test(href);
  const LinkOrAnchor = ({
    className,
    children,
  }: {
    className?: string;
    children: ReactNode;
  }) =>
    isExternal ? (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {children}
      </a>
    ) : (
      <Link href={href} className={className}>
        {children}
      </Link>
    );

  return (
    <article className="pm-card group flex flex-col overflow-hidden p-3 transition hover:-translate-y-0.5 hover:shadow-pm-soft">
      <LinkOrAnchor className="relative block">
        <Photo kind={photo} ratio="4/3" rounded="rounded-2xl" />
        {cause ? (
          <CauseLogo
            cause={cause}
            size="lg"
            className="absolute bottom-0 right-3 z-10 translate-y-1/4 ring-2 !ring-white"
          />
        ) : null}
      </LinkOrAnchor>
      <div className="flex flex-1 flex-col gap-2 px-3 pb-3 pt-8">
        {verified ? (
          <div className="flex flex-wrap items-center gap-1.5">
            <TrustBadge variant="verified" label="Verified parish" />
          </div>
        ) : null}
        <LinkOrAnchor className="block">
          <h3 className="text-base font-bold text-pm-navy group-hover:text-pm-blue">
            {title}
          </h3>
        </LinkOrAnchor>
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
          <LinkOrAnchor className="pm-btn pm-btn-secondary !px-4 !py-1.5 text-xs">
            {cta}
          </LinkOrAnchor>
        </div>
      </div>
    </article>
  );
}

export function SponsorOfferCard({
  href = "/sponsors/profile",
  photo,
  initials,
  logoSrc,
  title,
  offer,
  isNew,
}: {
  href?: string;
  photo: PhotoKind;
  initials: string;
  logoSrc?: string;
  title: string;
  offer: string;
  daysLeft?: string;
  isNew?: boolean;
}) {
  return (
    <article className="pm-card group flex flex-col overflow-hidden p-3 transition hover:-translate-y-0.5 hover:shadow-pm-soft">
      <Link href={href} className="relative block">
        <Photo
          kind={photo}
          ratio="4/3"
          rounded="rounded-2xl"
        />
        {isNew ? (
          <span className="absolute left-3 top-3 rounded-full bg-pm-blue px-2.5 py-1 text-[10px] font-bold text-white">
            New
          </span>
        ) : null}
        {logoSrc ? (
          <span className="absolute left-3 top-3 z-10 grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white p-1.5 ring-2 !ring-white shadow-pm-soft">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt={title} className="h-full w-full object-contain" loading="lazy" />
          </span>
        ) : (
          <span className="pm-avatar absolute left-3 top-3 z-10 !h-16 !w-16 rounded-2xl ring-2 !ring-white shadow-pm-soft text-sm">
            {initials}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <Link href={href} className="block">
          <h3 className="text-sm font-bold text-pm-navy group-hover:text-pm-blue">
            {title}
          </h3>
        </Link>
        <p className="text-base font-extrabold text-pm-blue">{offer}</p>
        <div className="mt-auto pt-1">
          <Link href={href} className="text-sm font-bold text-pm-blue hover:text-pm-navy">
            View offer →
          </Link>
        </div>
      </div>
    </article>
  );
}

export function BusinessCard({
  href = "/local-businesses/profile",
  photo,
  photoSrc,
  initials,
  logoSrc,
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
  photoSrc?: string;
  initials: string;
  logoSrc?: string;
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
          src={photoSrc}
          ratio="16/9"
          rounded="rounded-none"
          className="!rounded-t-[24px] !rounded-b-none"
        />
      </Link>
      {logoSrc ? (
        <span className="absolute left-4 top-28 grid !h-16 !w-16 place-items-center overflow-hidden rounded-2xl bg-white p-1.5 ring-4 ring-white shadow-pm-soft">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt={title}
            className="h-full w-full object-contain"
          />
        </span>
      ) : (
        <span className="pm-avatar absolute left-4 top-28 !h-16 !w-16 rounded-2xl ring-4 ring-white">
          {initials}
        </span>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5 pt-12">
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
