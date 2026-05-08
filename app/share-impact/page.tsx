import Link from "next/link";
import { SubStoreHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, SectionHeader, DarkPanel } from "@/components/Sections";

export const metadata = { title: "Share the Impact · ParishMart" };

export default function ShareImpactPage() {
  return (
    <>
      <SubStoreHeader searchPlaceholder="Search causes, merch, communities..." />

      <Section width="wide" className="!pb-2">
        <div className="pm-card grid gap-0 overflow-hidden lg:grid-cols-[1.4fr_1fr]">
          <div className="relative">
            <Photo kind="house" ratio="auto" rounded="rounded-none" className="!rounded-none h-full min-h-[280px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Share the <span className="text-pm-cyan">Impact</span>
              </h1>
              <p className="mt-3 max-w-md text-sm text-white/85">
                Your order helped support Emmaus and the SKD community. Invite
                others to shop with purpose and grow the impact together.
              </p>
            </div>
          </div>
          <div className="space-y-3 p-6">
            <h3 className="text-base font-bold text-pm-navy">Impact generated today</h3>
            <p className="text-xs text-pm-muted">Your purchase and contribution created measurable community impact.</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { l: "Products", v: "2", d: "Emmaus merch" },
                { l: "Giving", v: "$20", d: "Emmaus donation" },
                { l: "Total", v: "$59.60", d: "Community impact" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-pm-border bg-white p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">{s.l}</p>
                  <p className="text-base font-extrabold text-pm-navy">{s.v}</p>
                  <p className="text-[10px] text-pm-muted">{s.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex flex-col gap-2">
              <button className="pm-btn pm-btn-primary">Share with Friends</button>
              <button className="pm-btn pm-btn-secondary">Invite Your Community</button>
            </div>
          </div>
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader
          title="Help grow the mission"
          description="Simple actions that help Emmaus, SKD and ParishMart reach more people."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t: "Share your purchase", d: "Invite friends and family to support Emmaus through shopping and giving.", c: "Share Impact", v: "primary" as const },
            { t: "Support again", d: "Continue supporting Emmaus with another contribution or sponsor referral.", c: "Give Again", v: "secondary" as const },
            { t: "Bring your community", d: "Invite your parish, ministry or local business to join ParishMart.", c: "Invite Community", v: "secondary" as const },
          ].map((c) => (
            <div key={c.t} className="pm-card p-5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-pm-blue to-pm-cyan text-white">
                ★
              </span>
              <h3 className="mt-3 text-base font-bold text-pm-navy">{c.t}</h3>
              <p className="mt-1 text-xs text-pm-muted">{c.d}</p>
              <button className={`pm-btn ${c.v === "primary" ? "pm-btn-primary" : "pm-btn-secondary"} mt-3`}>{c.c}</button>
            </div>
          ))}
        </div>
      </Section>

      <Section width="wide">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            { p: "house", t: "Emmaus Retreat", k: "SKD Weston · Community Impact", body: "Your impact helped support:", desc: "Retreat formation, scholarships, hospitality and future Emmaus experiences for the SKD community.", stats: [ { l: "Cause", v: "Emmaus" }, { l: "Giving", v: "$20" }, { l: "Products", v: "2" } ], primary: "Share to WhatsApp", secondary: "Share to Instagram" },
            { p: "people", t: "Emmaus Community", k: "Retreat · Fellowship · Impact", body: "Help us grow more communities", desc: "Every share helps more parishes, ministries, sponsors and local businesses discover ParishMart.", stats: [ { l: "Parish", v: "SKD" }, { l: "Community", v: "Weston" }, { l: "Mission", v: "Grow" } ], primary: "Invite a Parish", secondary: "Invite a Business" },
          ].map((c) => (
            <div key={c.t} className="pm-card overflow-hidden">
              <Photo kind={c.p as "house" | "people"} ratio="16/9" rounded="rounded-none" className="!rounded-t-[24px] !rounded-b-none" />
              <div className="space-y-3 p-5">
                <h3 className="text-lg font-extrabold text-pm-navy">{c.t}</h3>
                <p className="text-xs font-bold text-pm-blue">{c.k}</p>
                <p className="text-sm font-bold text-pm-navy">{c.body}</p>
                <p className="text-xs text-pm-muted">{c.desc}</p>
                <div className="grid grid-cols-3 gap-2">
                  {c.stats.map((s) => (
                    <div key={s.l} className="rounded-2xl border border-pm-border p-2">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">{s.l}</p>
                      <p className="text-sm font-extrabold text-pm-navy">{s.v}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <button className="pm-btn pm-btn-primary">{c.primary}</button>
                  <button className="pm-btn pm-btn-secondary">{c.secondary}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section width="wide">
        <DarkPanel
          title="Commerce with purpose spreads through community."
          description="ParishMart grows when parishioners share causes, invite businesses and help communities discover new ways to support each other."
          cta="Continue Exploring"
          ctaHref="/"
          ctaSecondary="Open Your Store"
          ctaSecondaryHref="/onboarding/parish"
        />
      </Section>

      <Footer />
    </>
  );
}
