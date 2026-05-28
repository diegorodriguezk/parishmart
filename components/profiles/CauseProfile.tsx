import Link from "next/link";
import { Clock, Minus, Plus } from "lucide-react";
import { Photo } from "@/components/Photo";
import {
  Section,
  SectionHeader,
  DarkPanel,
} from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LocalBizCard } from "@/components/home/LocalBizCard";
import { CardsCarousel } from "@/components/CardsCarousel";
import type { Cause, Product, Business } from "@/lib/catalog";

const SUPPORTER_PHOTOS = ["community", "business", "merch"] as const;

export function CauseProfile({
  cause,
  products,
  businesses,
}: {
  cause: Cause;
  products: Product[];
  businesses: Business[];
}) {
  const MERCH = products.map((p) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    desc: p.meta,
    photo: p.photo,
    src: p.src,
  }));
  const SUPPORTERS = businesses.slice(0, 3);

  return (
    <>
      <Section width="wide" className="!py-4">
        <Breadcrumbs
          items={[
            { label: "SKD Store", href: "/stores" },
            { label: "Causes", href: "/give" },
            { label: cause.name },
          ]}
        />
      </Section>

      <Section width="wide" className="!pt-2">
        <div className="relative isolate overflow-hidden rounded-3xl border border-pm-border shadow-pm-card p-6 sm:p-10 min-h-[360px]">
          <Photo
            kind="retreat"
            ratio="auto"
            rounded="rounded-none"
            className="absolute inset-0 -z-10 !rounded-none"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pm-navy/90 via-pm-navy/70 to-transparent" />
          <div className="flex flex-wrap items-end justify-between gap-6 text-white">
            <div className="max-w-xl">
              <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold">
                Saint Katharine Drexel · {cause.name} Ministry
              </span>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
                {cause.tagline ?? `Walk with Christ. Support ${cause.name}.`}
              </h1>
              <p className="mt-4 max-w-md text-sm text-white/85">
                {cause.description ?? ""}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://giving.parishsoft.com/app/giving/stk2501240"
                  target="_blank"
                  rel="noreferrer"
                  className="pm-btn pm-btn-primary"
                >
                  Support Now
                </a>
                <Link href="#merch" className="pm-btn bg-white/15 text-white hover:bg-white/25">
                  Shop {cause.name} Merch
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/95 p-4 text-pm-navy">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan text-xs font-extrabold text-white">
                {cause.name.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase()}
              </span>
              <div>
                <p className="text-sm font-bold">{cause.name}{cause.parishSlug ? ` · ${cause.parishSlug.toUpperCase()}` : ""}</p>
                <p className="text-[11px] text-pm-muted">
                  Retreat ministry connected to the SKD parish community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section width="wide" className="!pt-3">
        <div className="flex flex-wrap gap-2">
          {["Overview", "Giving", "Merch", "Local Supporters"].map(
            (t, i) => (
              <span
                key={t}
                className="pm-chip"
                data-active={i === 0 ? "true" : undefined}
              >
                {t}
              </span>
            ),
          )}
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader
          title={`About ${cause.name}`}
          description="This section tells the story of the cause in a warm and simple way, without overwhelming the user."
        />
        <div className="pm-card overflow-hidden p-0 lg:grid lg:grid-cols-[1.05fr_.95fr] lg:items-stretch">
          <div className="space-y-4 p-6 text-sm text-pm-ink sm:p-7">
            <p>
              {cause.description ?? ""}
            </p>
            <p>
              Through ParishMart, {cause.name} can share its mission, promote ministry
              merchandise and guide supporters to the official SKD giving
              experience.
            </p>
          </div>
          <Photo
            kind="retreat"
            ratio="auto"
            rounded="rounded-none"
            className="!rounded-none h-full min-h-[280px] lg:!rounded-r-[24px]"
          />
        </div>
      </Section>

      <Section width="wide">
        <div className="pm-card overflow-hidden p-0 lg:grid lg:grid-cols-[1.05fr_.95fr]">
          <Photo
            kind="praying"
            ratio="auto"
            rounded="rounded-none"
            className="!rounded-none h-full min-h-[280px] lg:!rounded-l-[24px]"
          />
          <div className="space-y-3 p-6 sm:p-7">
            <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
              Phase 1 · Redirect to Church Giving
            </span>
            <h3 className="text-xl font-extrabold text-pm-navy">
              Support {cause.name} directly through SKD
            </h3>
            <p className="text-sm text-pm-muted">
              In this first phase, ParishMart does not process {cause.name} donations.
              Instead, we guide supporters to the official SKD giving page so
              the donation remains inside the church&rsquo;s existing system.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="https://giving.parishsoft.com/app/giving/stk2501240"
                target="_blank"
                rel="noreferrer"
                className="pm-btn pm-btn-primary"
              >
                Support Now
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section width="wide">
        <div className="pm-card overflow-hidden p-0 lg:grid lg:grid-cols-[1fr_1.25fr]">
          {/* Left — photo with overlays */}
          <div className="relative isolate min-h-[320px] lg:min-h-[420px]">
            <Photo
              kind="retreat"
              ratio="auto"
              rounded="rounded-none"
              className="!rounded-none absolute inset-0 -z-10 h-full lg:!rounded-l-[24px]"
              overlay="none"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/55 via-black/15 to-transparent lg:!rounded-l-[24px]" />
            <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-pm-blue backdrop-blur sm:left-5 sm:top-5">
              Event of the Month
            </span>
            <div className="absolute bottom-4 left-4 flex flex-col items-center rounded-2xl bg-white px-6 py-4 text-center shadow-pm-card sm:bottom-5 sm:left-5">
              <span className="text-xs font-bold uppercase tracking-wider text-pm-blue">
                Jun
              </span>
              <span className="text-5xl font-extrabold leading-none text-pm-navy">
                14
              </span>
              <span className="mt-1 text-xs font-bold uppercase tracking-wider text-pm-muted">
                Sat
              </span>
            </div>
            <span className="absolute bottom-5 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-pm-navy backdrop-blur sm:bottom-6 sm:right-5">
              <Clock className="h-3 w-3 text-pm-blue" aria-hidden />
              12 spots left
            </span>
          </div>

          {/* Right — event content */}
          <div className="grid gap-5 p-6 sm:p-7 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-3">
              <span className="inline-flex items-center rounded-full bg-pm-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                Featured Event
              </span>
              <div>
                <h3 className="text-xl font-extrabold leading-tight text-pm-navy">
                  {cause.name} Men&rsquo;s Retreat
                </h3>
                <p className="mt-1 text-[11px] font-medium text-pm-blue">
                  Saint Katharine Drexel Retreat Center · Weston, FL
                </p>
              </div>
              <p className="text-sm text-pm-muted">
                A weekend of encounter, faith and brotherhood. Join us for
                talks, prayer, sacraments and community.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="pm-label !text-[10px]">Retreat</span>
                <span className="pm-label !text-[10px]">Faith</span>
                <span className="pm-label !text-[10px]">Brotherhood</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="rounded-2xl border border-pm-border bg-white p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                    Starts
                  </p>
                  <p className="mt-1 text-sm font-extrabold text-pm-navy">
                    Fri, Jun 14
                  </p>
                  <p className="text-[11px] text-pm-muted">6:00 PM</p>
                </div>
                <div className="rounded-2xl border border-pm-border bg-white p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                    Ends
                  </p>
                  <p className="mt-1 text-sm font-extrabold text-pm-navy">
                    Sun, Jun 16
                  </p>
                  <p className="text-[11px] text-pm-muted">4:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-pm-border bg-pm-soft/40 p-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                  From
                </p>
                <p className="text-2xl font-extrabold leading-none text-pm-navy">
                  $65.00
                </p>
                <p className="mt-1 text-xs font-bold text-pm-navy">
                  General Admission
                </p>
                <p className="text-[11px] text-pm-muted">
                  Includes meals, materials and lodging.
                </p>
              </div>
              <div className="flex items-center justify-between rounded-full border border-pm-border bg-white px-2 py-1">
                <button
                  type="button"
                  aria-label="Decrease"
                  className="grid h-7 w-7 place-items-center rounded-full text-pm-blue hover:bg-pm-soft"
                >
                  <Minus className="h-3.5 w-3.5" aria-hidden />
                </button>
                <span className="text-sm font-bold text-pm-navy">1</span>
                <button
                  type="button"
                  aria-label="Increase"
                  className="grid h-7 w-7 place-items-center rounded-full text-pm-blue hover:bg-pm-soft"
                >
                  <Plus className="h-3.5 w-3.5" aria-hidden />
                </button>
              </div>
              <button
                type="button"
                className="pm-btn pm-btn-primary w-full"
              >
                Reserve My Spot
              </button>
            </div>
          </div>
        </div>
      </Section>

      <Section id="merch" width="wide">
        <SectionHeader
          title={`${cause.name} Merch`}
          description="Merch should feel like belonging, not just products. Keep it simple: shirts, hoodies, hats and retreat campaign items."
          right={
            <Link href="/shop/listing" className="font-bold text-pm-blue">
              View All Merch
            </Link>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MERCH.map((m) => (
            <Link
              key={m.id}
              href={`/shop/products/${m.id}`}
              className="pm-card group flex flex-col gap-3 overflow-hidden p-3 transition hover:-translate-y-0.5 hover:shadow-pm-soft"
            >
              <Photo
                kind={m.photo}
                src={m.src}
                alt={m.name}
                ratio="1/1"
                rounded="rounded-2xl"
                fit="contain"
                overlay="none"
                className="bg-white"
              />
              <div className="space-y-1.5 px-2 pb-2">
                <p className="line-clamp-2 text-sm font-bold text-pm-navy group-hover:text-pm-blue">
                  {m.name}
                </p>
                <p className="line-clamp-2 text-[11px] text-pm-muted">{m.desc}</p>
                <div className="flex items-center justify-between pt-1">
                  <p className="text-sm font-extrabold text-pm-navy">
                    {m.price}
                  </p>
                  <span className="pm-btn pm-btn-primary !px-4 !py-1.5 text-xs">
                    Add
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader
          title="Community Supporters"
          description="Optional but powerful: local businesses and sponsors can appear here as supporters of this cause."
        />
        <CardsCarousel lgCols={3}>
          {SUPPORTERS.map((b, i) => (
            <LocalBizCard
              key={b.id}
              href={`/local-businesses/${b.id}`}
              photo={SUPPORTER_PHOTOS[i % SUPPORTER_PHOTOS.length]}
              initials={b.initials}
              logoSrc={b.logoSrc}
              category={b.category}
              title={b.name}
              description={b.description}
              tags={[]}
              subtext={b.location}
            />
          ))}
        </CardsCarousel>
      </Section>

      <Section width="wide">
        <DarkPanel
          title={`${cause.name} · Saint Katharine Drexel`}
          description="Cause storefront powered by ParishMart."
          cta="Support Now"
          ctaHref="https://giving.parishsoft.com/app/giving/stk2501240"
        />
      </Section>
    </>
  );
}
