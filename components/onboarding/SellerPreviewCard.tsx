import { Photo, type PhotoKind } from "@/components/Photo";
import { ReactNode } from "react";

export function SellerPreviewHero({
  kind = "merch",
  src,
  initials = "HC",
  label = "1P Partner Seller",
  title,
  subtitle,
}: {
  kind?: PhotoKind;
  src?: string;
  initials?: string;
  label?: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative isolate h-[210px]">
      <Photo
        kind={kind}
        src={src}
        ratio="auto"
        rounded="rounded-none"
        className="!rounded-none absolute inset-0 -z-10 h-full"
        overlay="none"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
      <span className="absolute -bottom-7 left-5 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-pm-navy to-pm-blue text-base font-extrabold text-white ring-4 ring-white shadow-pm-card">
        {initials}
      </span>
      <div className="flex h-full flex-col justify-end p-5 text-white">
        <span className="inline-flex w-fit items-center rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
          {label}
        </span>
        <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight">
          {title}
        </h2>
        <p className="text-xs text-white/85">{subtitle}</p>
      </div>
    </div>
  );
}

export function SellerPreviewBody({ children }: { children: ReactNode }) {
  return <div className="space-y-4 px-5 pb-5 pt-10">{children}</div>;
}

export function PreviewLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] font-extrabold uppercase tracking-wider text-pm-blue">
      {children}
    </p>
  );
}
