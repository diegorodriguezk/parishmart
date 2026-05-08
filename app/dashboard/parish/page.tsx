import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader } from "@/components/Sections";
import { StatTile } from "@/components/Cards";

export const metadata = { title: "Parish Dashboard · ParishMart" };

export default function ParishDashboardPage() {
  return (
    <>
      <Header />

      <Section width="wide" className="!pt-12">
        <span className="pm-kicker">Parish Dashboard</span>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-pm-navy md:text-5xl">
          Impact &amp; <span className="pm-gradient-text">community</span>
        </h1>
      </Section>

      <Section width="wide">
        <div className="grid gap-4 md:grid-cols-4">
          <StatTile label="Total impact" value="$2,430" hint="This month" />
          <StatTile label="Active causes" value="5" hint="2 newly added" />
          <StatTile label="Local supporters" value="14" hint="3 sponsors, 11 businesses" />
          <StatTile label="Approval rate" value="98%" hint="Quality reviewed" />
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader title="Causes performance" description="Active campaigns and their progress." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Youth Ministry", v: "$7,850", g: "$12,000", pct: 65 },
            { t: "Emmaus Retreat Fund", v: "$6,230", g: "$10,000", pct: 62 },
            { t: "St Vincent de Paul", v: "$5,420", g: "$8,000", pct: 67 },
          ].map((c) => (
            <div key={c.t} className="pm-card p-5">
              <p className="text-base font-bold text-pm-navy">{c.t}</p>
              <p className="mt-2 text-sm text-pm-muted">{c.v} of {c.g}</p>
              <div className="pm-progress mt-3">
                <span style={{ width: `${c.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}
