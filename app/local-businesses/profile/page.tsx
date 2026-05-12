import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, SectionHeader } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CollapsibleDescription } from "@/components/Collapsible";

export const metadata = { title: "Maria's Studios · Local Business" };

const SERVICES = [
  {
    name: "Family Photography",
    desc: "Outdoor or studio session · 45 minutes",
    price: "From $150",
  },
  {
    name: "Emmaus Retreat Coverage",
    desc: "Retreat storytelling, group photos and moments",
    price: "From $350",
  },
  {
    name: "Parish Event Coverage",
    desc: "Mass, ministry events, fundraising activities",
    price: "Quote",
  },
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

      {/* HERO */}
      <Section width="wide" className="!pt-2">
        <div className="pm-card grid gap-0 overflow-hidden lg:grid-cols-[1.05fr_.95fr]">
          <Photo
            kind="business"
            ratio="auto"
            rounded="rounded-none"
            className="!rounded-none h-full min-h-[320px]"
          />
          <div className="space-y-4 p-7">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan text-sm font-extrabold text-white shadow-pm-soft">
                MS
              </span>
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-pm-navy">
                  Maria&rsquo;s Studios
                </h1>
                <p className="text-xs text-pm-muted">
                  Weston, FL · Photography · Supports Emmaus
                </p>
              </div>
            </div>
            <CollapsibleDescription
              text="Photography services for parish events, retreat memories and SKD family celebrations. Trusted local supporter with parishioner benefits. Maria has been serving the SKD community since 2022, capturing weddings, baptisms, retreat groups and ministry gatherings with a warm, community-first approach."
              previewLines={2}
            />
            <div className="flex flex-wrap gap-2">
              {["Photography", "Family", "Retreats", "Emmaus"].map((t) => (
                <span key={t} className="pm-label">
                  {t}
                </span>
              ))}
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan p-4 text-white">
              <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">
                Parishioner offer
              </p>
              <p className="text-2xl font-extrabold">10% OFF</p>
              <p className="text-xs opacity-90">
                Family events and retreat sessions.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="#services" className="pm-btn pm-btn-primary">
                View Services
              </Link>
              <Link
                href="/share-impact"
                className="pm-btn pm-btn-secondary"
              >
                Share business
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICES + OWNER */}
      <Section width="wide">
        <div className="grid gap-4 lg:grid-cols-2">
          <div id="services" className="pm-card p-6">
            <h2 className="text-xl font-extrabold text-pm-navy">Services</h2>
            <p className="mt-1 text-xs text-pm-muted">
              Description of the services Maria offers, with optional pricing.
            </p>
            <ul className="mt-4 space-y-2">
              {SERVICES.map((s) => (
                <li
                  key={s.name}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-pm-border bg-white p-3"
                >
                  <div>
                    <p className="text-sm font-bold text-pm-navy">{s.name}</p>
                    <p className="text-[11px] text-pm-muted">{s.desc}</p>
                  </div>
                  <span className="text-sm font-extrabold text-pm-blue">
                    {s.price}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="https://example.com"
              className="mt-4 inline-flex text-sm font-bold text-pm-blue hover:underline"
            >
              Visit business website →
            </a>
          </div>

          <div className="pm-card p-6">
            <h2 className="text-xl font-extrabold text-pm-navy">
              Meet the supporter founder
            </h2>
            <p className="mt-1 text-xs text-pm-muted">
              Maria is a local photographer serving families, ministries and
              parish events with a warm, community-first approach.
            </p>
            <div className="mt-4 flex items-center gap-4 rounded-2xl border border-pm-border bg-white p-4">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-pm-soft text-xs font-bold text-pm-blue">
                Founder
                <br />
                photo
              </span>
              <div>
                <p className="text-base font-extrabold text-pm-navy">
                  Maria Gonzalez
                </p>
                <p className="text-xs text-pm-muted">
                  Founder · Photographer · SKD and Emmaus supporter since 2022.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* WHERE & PARISH CONNECTION */}
      <Section width="wide">
        <SectionHeader
          title="Where & Parish Connection"
          description="Maria's Studios serves families and ministries around SKD Weston and supports Emmaus retreat activities."
        />
        <div className="pm-card overflow-hidden lg:grid lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-2 p-6">
            <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
              Location
            </p>
            <p className="text-lg font-extrabold text-pm-navy">
              Weston, Florida
            </p>
            <p className="text-xs text-pm-muted">
              SKD Parish Community · Address available on request.
            </p>
            <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-pm-blue">
              Supports
            </p>
            <p className="text-sm font-bold text-pm-navy">
              Emmaus retreat coverage and discount for SKD parishioners.
            </p>
          </div>
          <Photo kind="house" ratio="16/9" rounded="rounded-none" className="!rounded-r-[24px]" />
        </div>
      </Section>

      {/* CONTACT */}
      <Section width="wide">
        <div className="pm-dark-panel flex flex-wrap items-center justify-between gap-4 !p-6 sm:!p-8">
          <div className="max-w-xl space-y-2">
            <h3 className="text-2xl font-extrabold">
              Ready to book Maria&rsquo;s Studios?
            </h3>
            <p className="text-sm text-white/80">
              Use the SKD parishioner coupon and support a local business that
              supports the community.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://example.com/contact"
              className="pm-btn bg-white text-pm-navy"
            >
              Contact us
            </a>
            <a
              href="https://example.com/coupon"
              className="pm-btn bg-white/15 text-white hover:bg-white/25"
            >
              Claim 10% coupon
            </a>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
