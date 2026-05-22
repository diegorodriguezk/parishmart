import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CollapsibleDescription } from "@/components/Collapsible";

export const metadata = { title: "Maria's Studios · Local Business" };

const SERVICES = [
  { name: "Family Photography", desc: "Outdoor or studio session · 45 min", price: "From $150" },
  { name: "Emmaus Retreat Coverage", desc: "Retreat storytelling, group photos", price: "From $350" },
  { name: "Parish Event Coverage", desc: "Mass, ministry events, fundraising", price: "Quote" },
];

export default function LocalBusinessProfilePage() {
  return (
    <>
      <Header />

      <Section width="wide" className="!py-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Local Biz Supporters", href: "/local-businesses" },
            { label: "Maria's Studios" },
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
                MS
              </span>

              {/* Name */}
              <h1 className="text-4xl font-extrabold tracking-tight text-pm-navy md:text-5xl">
                Maria&rsquo;s <span className="pm-gradient-text">Studios</span>
              </h1>

              {/* Description */}
              <p className="text-sm text-pm-muted">
                Photography for SKD families, Emmaus retreats and parish events.
                A local business helping the community preserve meaningful moments.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["Weston, FL", "Supports Emmaus", "Photography"].map((t) => (
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
                Maria Gonzalez
              </h2>
              <p className="mt-0.5 text-sm text-pm-muted">
                Founder · Photographer · SKD and Emmaus supporter
              </p>
            </div>
            <p className="text-sm text-pm-muted">
              Maria has been serving the SKD community for over three years,
              capturing weddings, baptisms, retreat groups and ministry
              gatherings with a warm, community-first approach. Her work is
              rooted in faith and a genuine love for preserving meaningful
              moments for local families.
            </p>
          </div>

          {/* Right — large founder photo */}
          <Photo
            kind="people"
            ratio="auto"
            rounded="rounded-none"
            className="!rounded-none min-h-[340px] !rounded-r-[24px]"
          />
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
                MS
              </span>
              <h2 className="text-xl font-extrabold leading-tight text-pm-navy">
                Services that help communities preserve meaningful moments.
              </h2>
            </div>

            <p className="text-sm text-pm-muted">
              Custom photography packages for parish events, retreat memories
              and SKD family celebrations.
            </p>

            {/* Services list */}
            <div className="divide-y divide-pm-border rounded-2xl border border-pm-border">
              {SERVICES.map((s) => (
                <div key={s.name} className="flex items-center justify-between px-4 py-3">
                  <div>
                    <p className="text-sm font-bold text-pm-navy">{s.name}</p>
                    <p className="text-[11px] text-pm-muted">{s.desc}</p>
                  </div>
                  <span className="text-xs font-bold text-pm-blue shrink-0">{s.price}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto pt-2">
              <a href="https://example.com" target="_blank" rel="noreferrer" className="pm-btn pm-btn-primary">
                Visit us
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
