import Link from "next/link";
import { SubStoreHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import {
  Section,
  AmountPicker,
} from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = { title: "Support Youth Ministry · Cause" };

export default function CauseDetailPage() {
  return (
    <>
      <SubStoreHeader />

      <Section width="wide" className="!py-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Give with Love", href: "/give" }, { label: "Youth Ministry" }]} />
      </Section>

      <Section width="wide" className="!pt-2">
        <div className="pm-card grid gap-0 overflow-hidden lg:grid-cols-[1.1fr_.9fr]">
          <div className="p-6 sm:p-7">
            <span className="pm-kicker">Cause Detail</span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-pm-navy md:text-5xl">
              Support <span className="pm-gradient-text">Youth Ministry</span>
            </h1>
            <p className="mt-3 max-w-lg text-sm text-pm-muted">
              Clear cause story and trust information. The full campaign supports
              formation, retreats and outreach for SKD young leaders.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/give/checkout" className="pm-btn pm-btn-primary">Support Now</Link>
              <Link href="/share-impact" className="pm-btn pm-btn-secondary">Share campaign</Link>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-pm-border bg-white p-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">Cause</p>
                <p className="text-sm font-bold text-pm-navy">Youth Ministry</p>
                <p className="text-[11px] text-pm-muted">SKD · Weston, FL</p>
              </div>
              <div className="rounded-2xl border border-pm-border bg-white p-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">Impact</p>
                <p className="text-sm font-bold text-pm-navy">Formation, retreats, outreach</p>
              </div>
            </div>
          </div>
          <div className="space-y-3 p-6 sm:p-7">
            <Photo kind="praying" ratio="4/3" rounded="rounded-2xl" />
            <div className="pm-card !shadow-none p-4">
              <p className="text-sm font-bold text-pm-navy">Support this campaign</p>
              <p className="mt-1 text-xs text-pm-muted">
                Donations are processed by the parish&rsquo;s official giving
                system (ParishSOFT).
              </p>
              <div className="mt-3">
                <AmountPicker cause="Youth Ministry" cta="Support Now" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
