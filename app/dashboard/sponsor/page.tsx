import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader } from "@/components/Sections";
import { StatTile } from "@/components/Cards";

export const metadata = { title: "Sponsor Dashboard · ParishMart" };

export default function SponsorDashboardPage() {
  return (
    <>
      <Header />

      <Section width="wide" className="!pt-12">
        <span className="pm-kicker">Sponsor Dashboard</span>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-pm-navy md:text-5xl">
          Campaigns &amp; <span className="pm-gradient-text">reach</span>
        </h1>
      </Section>

      <Section width="wide">
        <div className="grid gap-4 md:grid-cols-4">
          <StatTile label="Active campaigns" value="3" hint="1 premium banner" />
          <StatTile label="Reach" value="12.4K" hint="+18% vs last quarter" />
          <StatTile label="Redeemed offers" value="284" hint="By 162 parishioners" />
          <StatTile label="Causes supported" value="4" hint="SKD, Emmaus, FACE, CM" />
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader title="Placements" description="Where your sponsor cards and banners appear." />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { t: "Premium banner · SKD Parish Store", d: "Top-of-page placement on SKD store and ministries.", v: "Active" },
            { t: "Sponsor Offer · Cleveland Hospital", d: "$100 health screening credit, listed in Sponsor Offers grid.", v: "Active" },
            { t: "Featured card · Emmaus campaigns", d: "Sponsor card alongside related giving campaigns.", v: "Scheduled" },
            { t: "Standard listing · Local Biz directory", d: "Visible across local business category page.", v: "Active" },
          ].map((p) => (
            <div key={p.t} className="pm-card flex items-start justify-between gap-3 p-5">
              <div>
                <p className="text-base font-bold text-pm-navy">{p.t}</p>
                <p className="text-xs text-pm-muted">{p.d}</p>
              </div>
              <span className="pm-label">{p.v}</span>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}
