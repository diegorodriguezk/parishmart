import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader } from "@/components/Sections";

export const metadata = { title: "Dashboard Overview · ParishMart" };

export default function DashboardOverviewPage() {
  return (
    <>
      <Header />

      <Section width="wide" className="!pt-12">
        <span className="pm-kicker">Admin Architecture</span>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-pm-navy md:text-5xl">
          Dashboard <span className="pm-gradient-text">Overview</span>
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-pm-muted">
          Reference dashboards for sellers, parishes and sponsors. Each role has
          its own metrics, products and community visibility.
        </p>
      </Section>

      <Section width="wide">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t: "Seller Dashboard", d: "Products, orders, payouts and supported causes.", href: "/dashboard/seller", k: "Seller" },
            { t: "Parish Dashboard", d: "Impact, causes and community activity.", href: "/dashboard/parish", k: "Parish" },
            { t: "Sponsor Dashboard", d: "Campaigns, placements and metrics.", href: "/dashboard/sponsor", k: "Sponsor" },
          ].map((c) => (
            <Link key={c.t} href={c.href} className="pm-card p-6 transition hover:-translate-y-0.5 hover:shadow-pm-soft">
              <span className="pm-label">{c.k}</span>
              <h3 className="mt-3 text-lg font-bold text-pm-navy">{c.t}</h3>
              <p className="mt-1 text-sm text-pm-muted">{c.d}</p>
              <span className="mt-3 inline-flex font-bold text-pm-blue">Open dashboard →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}
