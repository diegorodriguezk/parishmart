import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader } from "@/components/Sections";
import { StatTile } from "@/components/Cards";

export const metadata = { title: "Seller Dashboard · ParishMart" };

export default function SellerDashboardPage() {
  return (
    <>
      <Header />

      <Section width="wide" className="!pt-12">
        <span className="pm-kicker">Seller Dashboard</span>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-pm-navy md:text-5xl">
          Products &amp; <span className="pm-gradient-text">payouts</span>
        </h1>
      </Section>

      <Section width="wide">
        <div className="grid gap-4 md:grid-cols-4">
          <StatTile label="Orders this month" value="48" hint="+12 vs last month" />
          <StatTile label="Revenue" value="$2,180" hint="$420 to causes" />
          <StatTile label="Active products" value="14" hint="2 pending review" />
          <StatTile label="Community supported" value="SKD" hint="3 ministries" />
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader title="Recent orders" description="Latest activity across products and services." />
        <div className="pm-card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-pm-soft text-left text-xs uppercase tracking-wider text-pm-blue">
              <tr>
                <th className="px-4 py-3">Order</th>
                <th className="px-4 py-3">Item</th>
                <th className="px-4 py-3">Cause</th>
                <th className="px-4 py-3">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pm-border">
              {[
                ["#1042", "Emmaus Retreat T-Shirt × 2", "Emmaus Retreat Fund", "$44.00"],
                ["#1041", "Rosary Bracelet", "Youth Ministry", "$25.00"],
                ["#1040", "Family Photography Session", "Maria's Studios", "$150.00"],
              ].map((row) => (
                <tr key={row[0]} className="text-pm-ink">
                  {row.map((c) => (
                    <td key={c} className="px-4 py-3">{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Footer />
    </>
  );
}
