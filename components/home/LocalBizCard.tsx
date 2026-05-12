import Link from "next/link";
import { MapPin } from "lucide-react";
import { Photo, PhotoKind } from "../Photo";

export type LocalBizCardData = {
  href: string;
  photo: PhotoKind;
  initials: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  subtext?: string;
  cta?: string;
};

export function LocalBizCard(p: LocalBizCardData) {
  return (
    <article className="pm-card relative flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-pm-soft">
      <Link href={p.href} className="block">
        <Photo
          kind={p.photo}
          ratio="4/3"
          rounded="rounded-none"
          className="!rounded-t-[24px] !rounded-b-none"
        />
      </Link>
      <span className="pm-avatar absolute left-4 top-28 !h-11 !w-11 rounded-2xl ring-4 ring-white sm:top-32">
        {p.initials}
      </span>
      <div className="flex flex-1 flex-col gap-2.5 p-5 pt-8">
        <span className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
          {p.category}
        </span>
        <Link href={p.href} className="block">
          <h3 className="text-lg font-extrabold text-pm-navy hover:text-pm-blue">
            {p.title}
          </h3>
        </Link>
        <p className="text-xs text-pm-muted">{p.description}</p>
        {p.tags.length ? (
          <div className="flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span key={t} className="pm-label !text-[10px]">
                {t}
              </span>
            ))}
          </div>
        ) : null}
        <div className="mt-auto flex items-end justify-between gap-3 pt-2">
          <Link
            href={p.href}
            className="text-sm font-bold text-pm-blue hover:text-pm-navy"
          >
            {p.cta ?? "View more"} →
          </Link>
          {p.subtext ? (
            <p className="max-w-[120px] text-right text-[10px] leading-tight text-pm-muted">
              {p.subtext}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export type CommunityCardData = {
  href: string;
  photo: PhotoKind;
  initials: string;
  category: string;
  title: string;
  description: string;
  location?: string;
  tags: string[];
  subtext?: string;
  cta?: string;
};

export function CommunityCard(p: CommunityCardData) {
  return (
    <article className="pm-card relative flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-pm-soft">
      <Link href={p.href} className="block">
        <Photo
          kind={p.photo}
          ratio="4/3"
          rounded="rounded-none"
          className="!rounded-t-[24px] !rounded-b-none"
        />
      </Link>
      <span className="pm-avatar absolute left-4 top-28 !h-11 !w-11 rounded-2xl ring-4 ring-white sm:top-32">
        {p.initials}
      </span>
      <div className="flex flex-1 flex-col gap-2.5 p-5 pt-8">
        <span className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
          {p.category}
        </span>
        <Link href={p.href} className="block">
          <h3 className="text-lg font-extrabold text-pm-navy hover:text-pm-blue">
            {p.title}
          </h3>
        </Link>
        <p className="text-xs text-pm-muted">{p.description}</p>
        {p.location ? (
          <p className="inline-flex items-center gap-1 text-[11px] text-pm-muted">
            <MapPin className="h-3 w-3" aria-hidden />
            {p.location}
          </p>
        ) : null}
        {p.tags.length ? (
          <div className="flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span key={t} className="pm-label !text-[10px]">
                {t}
              </span>
            ))}
          </div>
        ) : null}
        <div className="mt-auto flex items-end justify-between gap-3 pt-2">
          <Link
            href={p.href}
            className="text-sm font-bold text-pm-blue hover:text-pm-navy"
          >
            {p.cta ?? "View community"} →
          </Link>
          {p.subtext ? (
            <p className="max-w-[120px] text-right text-[10px] leading-tight text-pm-muted">
              {p.subtext}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
