import Link from "next/link";
import { Photo } from "@/components/Photo";
import { Section } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CollapsibleDescription } from "@/components/Collapsible";
import type { Business } from "@/lib/catalog";

export function ServiceBusinessProfile({ business }: { business: Business }) {
  const services = business.services ?? [];

  return (
    <>
      <Section width="wide" className="!py-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Local Biz Supporters", href: "/local-businesses" },
            { label: business.name },
          ]}
        />
      </Section>

      {/* HERO — full-width photo banner */}
      <Section width="wide" className="!pt-2">
        <div className="relative isolate overflow-hidden rounded-3xl border border-pm-border shadow-pm-card min-h-[320px]">
          {/* Background photo */}
          <Photo
            kind="business"
            ratio="auto"
            rounded="rounded-none"
            className="absolute inset-0 -z-10 !rounded-none"
            overlay="none"
          />
          {/* White fade from left */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/95 via-white/80 to-white/10" />

          <div className="flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT — business info */}
            <div className="flex max-w-xl flex-col gap-5">
              {/* Logo */}
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan text-base font-extrabold text-white shadow-pm-soft">
                {business.initials}
              </span>

              {/* Name */}
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight text-pm-navy md:text-5xl">
                  {business.name}
                </h1>
                {business.parishSupported && (
                  <Link
                    href="/give/cause"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-pm-blue hover:underline"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-pm-cyan" />
                    Supporting {business.parishSupported}
                  </Link>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-pm-muted">
                {business.about ?? business.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {[business.location, business.category].map((t) => (
                  <span key={t} className="pm-label">{t}</span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a href="#services" className="pm-btn pm-btn-primary">View Services</a>
                <Link href="/share-impact" className="pm-btn pm-btn-secondary">Share</Link>
              </div>
            </div>

            {/* RIGHT — Parishioner coupon card */}
            <div className="pm-card w-full shrink-0 space-y-3 p-5 lg:w-72">
              <div>
                <h3 className="text-lg font-extrabold text-pm-navy">Parishioner Coupon</h3>
                <p className="mt-1 text-xs text-pm-muted">
                  Exclusive benefit for SKD parishioners and Emmaus members.
                </p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan p-4 text-white">
                <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">
                  Community offer
                </p>
                <p className="text-3xl font-extrabold">10% OFF</p>
                <p className="mt-1 text-xs opacity-90">
                  Family, retreat and event photography sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FOUNDER — full-width two column */}
      <Section width="wide">
        <div className="pm-card overflow-hidden lg:grid lg:grid-cols-[1fr_1fr]">
          {/* Left — founder story */}
          <div className="flex flex-col justify-center gap-5 p-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                Meet the founder
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-pm-navy">
                {business.founderName ?? business.name}
              </h2>
              <p className="mt-0.5 text-sm text-pm-muted">
                {business.founderShortDesc ?? "Founder · SKD community supporter"}
              </p>
            </div>
            <p className="text-sm text-pm-muted">
              {business.about ?? business.description}
            </p>
          </div>

          {/* Right — founder photo, locked 1:1 so any upload crops predictably */}
          <div className="relative aspect-[4/3] lg:aspect-square lg:self-start overflow-hidden rounded-b-[24px] lg:rounded-b-none lg:rounded-r-[24px]">
            <Photo
              kind="people"
              ratio="auto"
              rounded="rounded-none"
              className="absolute inset-0 !rounded-none !border-0 h-full"
            />
          </div>
        </div>
      </Section>

      {/* SERVICES — two separate cards */}
      <Section width="wide">
        <div id="services" className="grid gap-4 lg:grid-cols-[1fr_1fr] lg:items-stretch">
          {/* Left card — video */}
          <div className="pm-card overflow-hidden">
            <div className="relative h-full min-h-[360px]">
              <Photo
                kind="retreat"
                ratio="auto"
                rounded="rounded-none"
                className="absolute inset-0 !rounded-none h-full"
                overlay="strong"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-white shadow-pm-card">
                  <svg className="h-7 w-7 translate-x-0.5 text-pm-blue" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Right card — services */}
          <div className="pm-card flex flex-col gap-5 p-7">
            {/* Logo + headline */}
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan text-sm font-extrabold text-white shadow-pm-soft">
                {business.initials}
              </span>
              <h2 className="text-xl font-extrabold leading-tight text-pm-navy">
                Services that help communities preserve meaningful moments.
              </h2>
            </div>

            <p className="text-sm text-pm-muted">
              {business.description}
            </p>

            {/* Services list — single card / row list / capped list */}
            {services.length === 1 ? (
              <div className="rounded-2xl border border-pm-border bg-gradient-to-br from-pm-soft to-white p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">Featured Service</p>
                    <p className="text-lg font-extrabold text-pm-navy">{services[0].name}</p>
                    <p className="text-xs text-pm-muted">{services[0].description}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-pm-blue px-3 py-1 text-xs font-extrabold text-white">
                    {services[0].price}
                  </span>
                </div>
              </div>
            ) : services.length === 0 ? null : (
              <div className="divide-y divide-pm-border rounded-2xl border border-pm-border">
                {services.slice(0, 5).map((s) => (
                  <div key={s.name} className="flex items-center justify-between px-4 py-3">
                    <div>
                      <p className="text-sm font-bold text-pm-navy">{s.name}</p>
                      <p className="text-[11px] text-pm-muted">{s.description}</p>
                    </div>
                    <span className="shrink-0 text-xs font-bold text-pm-blue">{s.price}</span>
                  </div>
                ))}
                {services.length > 5 && (
                  <div className="px-4 py-2.5 text-center">
                    <span className="text-xs font-bold text-pm-blue">
                      +{services.length - 5} more services
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* CTA */}
            <div className="mt-auto pt-2">
              {business.website ? (
                <a href={business.website} target="_blank" rel="noreferrer" className="pm-btn pm-btn-primary">
                  Contact us
                </a>
              ) : business.email ? (
                <a href={`mailto:${business.email}`} className="pm-btn pm-btn-primary">
                  Contact us
                </a>
              ) : (
                <a href="https://example.com" target="_blank" rel="noreferrer" className="pm-btn pm-btn-primary">
                  Contact us
                </a>
              )}
            </div>
          </div>
        </div>
      </Section>

      <Section width="wide">
        <div className="pm-dark-panel !p-6 sm:!p-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-extrabold">
              Are you a business that supports community?
            </h2>
            <p className="mt-1 text-sm text-white/80">
              Join ParishMart as a Local Biz Supporter and connect your products
              or services to parishes, causes and trusted local discovery.
            </p>
          </div>
          <Link
            href="/onboarding/local-business"
            className="pm-btn bg-white !text-pm-navy shrink-0"
          >
            Become a Local Biz
          </Link>
        </div>
      </Section>
    </>
  );
}
