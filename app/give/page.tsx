import Link from "next/link";
import { SubStoreHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import {
  Section,
  SectionHeader,
  FilterChips,
  AmountPicker,
  ProgressBar,
  DarkPanel,
} from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = { title: "Give with Love · SKD Parish Store" };

const CAMPAIGNS = [
  {
    label: "Emmaus",
    title: "Retreat Scholarship Fund",
    desc: "Help someone attend the next Emmaus retreat experience.",
    raised: "$6,200",
    supporters: "42",
    goal: "$10,000",
    pct: 62,
    photo: "retreat",
    related: [
      { p: "apparel", n: "Emmaus T-Shirt", price: "$22" },
      { p: "merch", n: "Emmaus Hoodie", price: "$48" },
      { p: "merch", n: "Emmaus Mug", price: "$14" },
    ],
  },
  {
    label: "Hospitality",
    title: "Meals & Hospitality",
    desc: "Support meals and hospitality during retreat weekends.",
    raised: "$2,100",
    supporters: "18",
    goal: "$5,000",
    pct: 42,
    photo: "communion",
    related: [
      { p: "merch", n: "Emmaus Mug", price: "$14" },
      { p: "apparel", n: "Retreat Tee", price: "$22" },
      { p: "merch", n: "Retreat Hoodie", price: "$48" },
    ],
  },
  {
    label: "Formation",
    title: "Retreat Materials Fund",
    desc: "Help cover retreat guides, formation materials and logistics.",
    raised: "$1,460",
    supporters: "14",
    goal: "$4,000",
    pct: 36,
    photo: "bible",
    related: [
      { p: "apparel", n: "Emmaus Tee", price: "$22" },
      { p: "merch", n: "Coffee Mug", price: "$14" },
      { p: "merch", n: "Emmaus Hoodie", price: "$48" },
    ],
  },
];

export default function GiveHomePage() {
  return (
    <>
      <SubStoreHeader searchPlaceholder="Search causes, donations, merch..." />

      <Section width="wide" className="!py-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Give with Love" }]} />
      </Section>

      <Section width="wide" className="!pb-3 !pt-2">
        <div className="relative isolate overflow-hidden rounded-3xl border border-pm-border shadow-pm-card p-6 sm:p-8 min-h-[260px] sm:min-h-[300px]">
          <Photo kind="house" ratio="auto" rounded="rounded-none" className="absolute inset-0 -z-10 !rounded-none" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-pm-navy md:text-5xl">
                Give with <span className="pm-gradient-text">Love</span>
              </h1>
              <p className="mt-3 text-sm text-pm-muted">
                Choose a cause, support it directly, and discover related
                products that help the same mission.
              </p>
            </div>
            <div className="pm-card !shadow-none p-4">
              <p className="text-xs font-bold text-pm-blue">Simple giving flow</p>
              <p className="text-sm text-pm-navy">
                Cause → Amount → Related products → Share impact
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section width="wide" className="!py-4">
        <div className="pm-card flex flex-wrap items-center gap-3 p-4">
          <p className="text-xs font-bold text-pm-navy">Filter campaigns</p>
          <p className="text-xs text-pm-muted">Find the cause or giving need you want to support.</p>
          <div className="ml-auto" />
          <FilterChips
            items={["All", "Emmaus", "Youth Ministry", "St Vincent de Paul", "Scholarships", "Meals", "Formation", "SKD Needs", "Sponsors"]}
            active="All"
          />
        </div>
      </Section>

      <Section width="wide" className="!pt-2">
        <SectionHeader
          title="Emmaus giving campaigns"
          description="Each campaign includes a simple donation action and related products for cross-selling."
          right={<Link href="/give" className="font-bold text-pm-blue">View all campaigns</Link>}
        />
        <div className="space-y-5">
          {CAMPAIGNS.map((c) => (
            <div key={c.title} className="pm-card grid gap-0 overflow-hidden lg:grid-cols-[260px_1fr_280px]">
              <Photo kind={c.photo as "retreat" | "communion" | "bible"} ratio="auto" rounded="rounded-none" className="!rounded-none h-full" />
              <div className="space-y-3 p-5">
                <span className="pm-label">{c.label}</span>
                <h3 className="text-xl font-extrabold text-pm-navy">{c.title}</h3>
                <p className="text-sm text-pm-muted">{c.desc}</p>
                <ProgressBar value={c.pct} max={100} raised={c.raised} supporters={c.supporters} goal={c.goal} />
                <div>
                  <p className="text-xs font-bold text-pm-navy">Related products</p>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {c.related.map((r) => (
                      <div key={r.n} className="rounded-2xl border border-pm-border p-2">
                        <Photo kind={r.p as "apparel" | "merch"} ratio="1/1" rounded="rounded-xl" />
                        <p className="mt-2 text-xs font-bold text-pm-navy">{r.n}</p>
                        <p className="text-[11px] text-pm-muted">{r.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-3 border-t border-pm-border p-5 lg:border-l lg:border-t-0">
                <p className="text-sm font-bold text-pm-navy">Support this campaign</p>
                <AmountPicker cause={c.title} cta="Add to cart" />
                <Link href="/share-impact" className="pm-btn pm-btn-secondary w-full">
                  Share
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section width="wide">
        <DarkPanel
          title="Giving and shopping work together."
          description="After supporting a cause, parishioners can add related products or share the campaign with the community."
          cta="Continue to Cart"
          ctaHref="/shop/cart"
        />
      </Section>

      <Footer />
    </>
  );
}
