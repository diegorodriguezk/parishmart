import Link from "next/link";
import { SubStoreHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, SectionHeader } from "@/components/Sections";

export const metadata = { title: "Maria's Studios · Local Business" };

export default function LocalBusinessProfilePage() {
  return (
    <>
      <SubStoreHeader />

      <Section width="wide">
        <div className="pm-card grid gap-0 overflow-hidden lg:grid-cols-[1.05fr_.95fr]">
          <Photo kind="business" ratio="auto" rounded="rounded-none" className="!rounded-none h-full min-h-[320px]" />
          <div className="space-y-4 p-7">
            <div className="flex items-center gap-3">
              <span className="pm-avatar !h-12 !w-12 rounded-2xl">MS</span>
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-pm-navy">
                  Maria&rsquo;s Studios
                </h1>
                <p className="text-xs text-pm-muted">Weston, FL · Photography · Supports Emmaus</p>
              </div>
            </div>
            <p className="text-sm text-pm-muted">
              Photography services for parish events, retreat memories and SKD
              family celebrations. Trusted local supporter with parishioner
              benefits.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Photography", "Family", "Retreats", "Emmaus"].map((t) => (
                <span key={t} className="pm-label">{t}</span>
              ))}
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan p-4 text-white">
              <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">Parishioner offer</p>
              <p className="text-2xl font-extrabold">10% OFF</p>
              <p className="text-xs opacity-90">Family events and retreat sessions.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/shop/product" className="pm-btn pm-btn-primary">View Services</Link>
              <Link href="/share-impact" className="pm-btn pm-btn-secondary">Share business</Link>
            </div>
          </div>
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader title="Recent work" description="Examples of services connected to SKD parish life." />
        <div className="grid gap-4 md:grid-cols-3">
          {(["retreat", "community", "volunteers"] as const).map((p, i) => (
            <Photo key={i} kind={p} ratio="4/3" rounded="rounded-2xl" />
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}
