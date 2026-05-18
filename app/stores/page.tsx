import Link from "next/link";
import { ParishProfileHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { SkdLogo } from "@/components/SkdLogo";
import { Section, SectionHeader, DarkPanel } from "@/components/Sections";
import { ProductCard, BusinessCard } from "@/components/Cards";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyTabs } from "@/components/StickyTabs";
import { fetchProducts, fetchBusinesses, fetchParish } from "@/lib/api";

export const metadata = { title: "SKD Parish Storefront" };

export default async function ParishStoreSKDPage() {
  const [featured, businesses, parish] = await Promise.all([
    fetchProducts({
      ids: [
        "skd-mens-microfleece-jacket",
        "rosary",
        "harps-club-tote",
        "saint-benedict-crucifix",
      ],
    }),
    fetchBusinesses(),
    fetchParish("skd"),
  ]);
  void parish;
  return (
    <>
      <ParishProfileHeader
        parishName="SKD Parish Store"
        parishInitials="SKD"
        location="Weston, Florida"
        searchPlaceholder="Search store, products, services..."
      />

      <Section width="wide" className="!py-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Parish Stores", href: "/stores" }, { label: "St. Katharine Drexel" }]} />
      </Section>

      <Section width="wide" className="!pb-2 !pt-2">
        <div className="pm-card relative grid gap-0 overflow-hidden lg:grid-cols-[1.4fr_1fr]">
          <Photo
            kind="church"
            src="/brand/skd/church.jpg"
            alt="Saint Katharine Drexel Catholic Parish, Weston FL"
            ratio="auto"
            rounded="rounded-none"
            className="!rounded-none h-[360px]"
          />
          <div className="space-y-4 p-7">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-pm-navy md:text-4xl">
              The parish at the{" "}
              <span className="pm-gradient-text">center</span> of the community.
            </h1>
            <p className="text-sm text-pm-muted">
              "We are one Body, one Spirit, one Family actively ministering to
              the spiritual needs of all as we journey together in the Name of
              Jesus Christ."
            </p>
            <div className="flex items-start gap-3 rounded-2xl border border-pm-border bg-white p-3">
              <SkdLogo size="md" />
              <div>
                <p className="text-sm font-bold text-pm-navy">St. Katharine Drexel Catholic Parish</p>
                <p className="text-[11px] text-pm-muted">2501 South Post Road, Weston, FL 33327</p>
                <p className="text-[11px] text-pm-muted">Pastor: Fr. Omar Ayubi V.F. · (954) 389-5003</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { l: "Parish impact", v: "$2.4K" },
                { l: "Active causes", v: "5" },
                { l: "Supporters", v: "8" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-pm-border bg-white p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">{s.l}</p>
                  <p className="text-base font-extrabold text-pm-navy">{s.v}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/shop" className="pm-btn pm-btn-primary">Shop with Purpose</Link>
              <Link href="/give" className="pm-btn pm-btn-secondary">Give with Love</Link>
            </div>
          </div>
        </div>
      </Section>

      <StickyTabs
        items={[
          { id: "about", label: "About" },
          { id: "shop", label: "Shop" },
          { id: "give", label: "Give" },
          { id: "ministries", label: "Ministries" },
          { id: "local-biz", label: "Local Biz" },
          { id: "sponsors", label: "Sponsors" },
          { id: "impact", label: "Impact" },
        ]}
        topOffset={64}
      />

      <Section id="about" width="wide">
        <div className="grid gap-4 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="pm-card p-6">
            <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">About the parish</p>
            <h3 className="mt-2 text-lg font-bold text-pm-navy">The cornerstone of Weston's Catholic Community</h3>
            <p className="mt-2 text-sm text-pm-muted">
              St. Katharine Drexel Catholic Parish serves the Weston community
              through liturgy, formation, pastoral care and active ministry.
              Through ParishMart, parishioners can shop with purpose, support
              causes and engage with sponsors and local businesses aligned with
              the parish mission.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <a href="https://www.skdrexel.org" target="_blank" rel="noreferrer" className="pm-chip">skdrexel.org</a>
              <a href="https://www.facebook.com/SKDWeston" target="_blank" rel="noreferrer" className="pm-chip">Facebook</a>
              <a href="https://www.instagram.com/skdrexel/" target="_blank" rel="noreferrer" className="pm-chip">Instagram</a>
            </div>
          </div>

          <div className="pm-card p-6">
            <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">Mass schedule</p>
            <h3 className="mt-2 text-lg font-bold text-pm-navy">Weekly liturgy</h3>
            <ul className="mt-3 space-y-2 text-xs text-pm-ink">
              <li className="flex items-start justify-between gap-3 rounded-2xl border border-pm-border bg-white p-2.5">
                <span className="font-bold text-pm-navy">Mon – Fri</span>
                <span className="text-pm-muted">7:30 AM · 8:30 AM · 7:00 PM</span>
              </li>
              <li className="flex items-start justify-between gap-3 rounded-2xl border border-pm-border bg-white p-2.5">
                <span className="font-bold text-pm-navy">Saturday</span>
                <span className="text-pm-muted">8:00 AM · 5:00 PM · 6:45 PM</span>
              </li>
              <li className="flex items-start justify-between gap-3 rounded-2xl border border-pm-border bg-white p-2.5">
                <span className="font-bold text-pm-navy">Sunday</span>
                <span className="text-pm-muted">10 AM · 12 PM · 2 PM · 5 PM · 6:45 PM</span>
              </li>
            </ul>
          </div>

          <div className="pm-card p-6">
            <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">Active ministries</p>
            <h3 className="mt-2 text-lg font-bold text-pm-navy">Where you can serve &amp; grow</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Formation",
                "Liturgy",
                "Parish Life",
                "Pastoral Care",
                "Spirituality",
                "Faith Formation (Children & OCIA)",
              ].map((m) => (
                <span key={m} className="pm-label">{m}</span>
              ))}
            </div>
            <p className="mt-3 text-xs text-pm-muted">
              Source: <a href="https://www.skdrexel.org" className="text-pm-blue" target="_blank" rel="noreferrer">skdrexel.org</a>
            </p>
          </div>
        </div>
      </Section>

      <Section id="shop" width="wide">
        <SectionHeader
          title="Choose how to support SKD"
          description="The store starts with two simple paths: buy something meaningful or give directly to a ministry."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { p: "rosary", h: "Products & services that support SKD.", d: "Faith merchandise, retreat products, religious gifts and local services connected to parish impact.", cta: "Shop with Purpose", href: "/shop" },
            { p: "praying", h: "Support ministries, missions and causes.", d: "Give directly to Youth Ministry, Emmaus, St Vincent de Paul or other parish ministries.", cta: "Give with Love", href: "/give" },
          ].map((c) => (
            <Link key={c.h} href={c.href} className="pm-card relative overflow-hidden p-0 transition hover:-translate-y-0.5">
              <Photo kind={c.p as "rosary" | "praying"} ratio="16/9" rounded="rounded-none" className="!rounded-t-[24px] !rounded-b-none" />
              <div className="space-y-3 p-6">
                <h3 className="text-xl font-extrabold text-pm-navy">{c.h}</h3>
                <p className="text-sm text-pm-muted">{c.d}</p>
                <span className="pm-btn pm-btn-primary !px-4 !py-2 text-sm">{c.cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader
          title="Shop with Purpose"
          description="Featured products and services connected to SKD, ministries and community impact."
          right={
            <>
              <Link href="/shop" className="font-bold text-pm-blue">View all products</Link>
              <Link href="/onboarding/seller" className="text-pm-muted">Become a seller</Link>
            </>
          }
        />
        <div className="grid gap-4 md:grid-cols-4">
          {featured.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              photo={p.photo}
              src={p.src}
              label={p.label}
              title={p.name}
              meta={p.meta}
              price={p.price}
              cause={p.cause}
            />
          ))}
        </div>
      </Section>

      <Section id="give" width="wide">
        <SectionHeader
          title="Give with Love"
          description="Active giving campaigns inside the SKD parish ecosystem."
          right={
            <>
              <Link href="/give" className="font-bold text-pm-blue">View all causes</Link>
              <Link href="/onboarding/parish" className="text-pm-muted">Launch campaign</Link>
            </>
          }
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { l: "Youth Ministry", t: "Support Youth Ministry", d: "Help fund formation, retreats and leadership activities." },
            { l: "Emmaus", t: "Emmaus Retreat Fund", d: "Support scholarships, formation and retreat logistics." },
            { l: "Helping Hands", t: "St Vincent de Paul", d: "Support families in need with parish-collected initiatives." },
          ].map((c) => (
            <div key={c.t} className="pm-card flex flex-col gap-3 overflow-hidden p-3">
              <Photo kind={c.l === "Youth Ministry" ? "retreat" : c.l === "Emmaus" ? "community" : "volunteers"} ratio="16/9" rounded="rounded-2xl" />
              <div className="space-y-2 px-2">
                <span className="pm-label">{c.l}</span>
                <h3 className="text-base font-bold text-pm-navy">{c.t}</h3>
                <p className="text-xs text-pm-muted">{c.d}</p>
                <Link href="/give/cause" className="pm-btn pm-btn-primary !px-4 !py-1.5 text-xs">Support Now</Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="ministries" width="wide">
        <SectionHeader
          title="Ministries & Causes"
          description="Each ministry can have its own page, giving campaigns, sponsors and impact."
          right={<Link href="/give" className="font-bold text-pm-blue">View ministry list · Open a ministry page</Link>}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { p: "stained-glass", l: "Ministry", t: "Emmaus SKD Weston", d: "Separate paths for Men and Women retreats with products, campaigns and community support." },
            { p: "praying", l: "Cause", t: "Youth Ministry", d: "Formation, events, youth merchandise and sponsors connected to youth formation." },
          ].map((m) => (
            <div key={m.t} className="pm-card flex items-center gap-4 p-4">
              <div className="h-32 w-32 shrink-0">
                <Photo kind={m.p as "stained-glass" | "praying"} ratio="1/1" rounded="rounded-2xl" />
              </div>
              <div className="space-y-2">
                <span className="pm-label">{m.l}</span>
                <h3 className="text-base font-bold text-pm-navy">{m.t}</h3>
                <p className="text-xs text-pm-muted">{m.d}</p>
                <Link href="/give/cause" className="pm-btn pm-btn-primary !px-4 !py-1.5 text-xs">
                  Visit {m.l}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="local-biz" width="wide">
        <SectionHeader
          title="Local Biz Supporters"
          description="Local businesses become visible inside the parish ecosystem while supporting SKD causes."
          right={
            <>
              <Link href="/local-businesses" className="font-bold text-pm-blue">View all supporters</Link>
              <Link href="/onboarding/local-business" className="text-pm-muted">Become a local business</Link>
            </>
          }
        />
        <div className="grid gap-4 md:grid-cols-4">
          {businesses.map((b, i) => (
            <BusinessCard
              key={b.id}
              photo={i === 0 ? "community" : i === 1 ? "business" : "merch"}
              initials={b.initials}
              logoSrc={b.logoSrc}
              title={b.name}
              description={b.description}
              offer="10% benefit"
              offerDescription="For SKD parishioners"
              impactText={`Supports SKD and ${b.category.toLowerCase()} programs.`}
            />
          ))}
          <BusinessCard
            photo="business"
            initials="SP"
            title="Featured Sponsor"
            description="Featured local sponsor supporting parish causes."
            offer="$25 OFF"
            offerDescription="Limited time offer"
            impactText="Community sponsor visibility."
            href="/sponsors/profile"
          />
        </div>
      </Section>

      <Section id="sponsors" width="wide">
        <SectionHeader
          title="Sponsors & Parishioner Benefits"
          description="Sponsors support SKD while parishioners receive meaningful benefits, discounts and trusted local services."
          right={<Link href="/sponsors" className="font-bold text-pm-blue">Become a Sponsor</Link>}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { ini: "MS", n: "Maria's Studios", d: "Family, retreat and parish event photography for the SKD community.", offer: "10% parishioner benefit" },
            { ini: "CM", n: "Casa Manresa", d: "Retreat programs and services connected to spiritual formation.", offer: "15% retreat support benefit" },
            { ini: "FS", n: "Featured Local Sponsor", d: "Mission-aligned business supporting parish causes.", offer: "Up to 8% community offer" },
          ].map((s) => (
            <div key={s.ini} className="pm-card flex flex-col gap-3 p-5">
              <span className="pm-avatar">{s.ini}</span>
              <h3 className="text-base font-bold text-pm-navy">{s.n}</h3>
              <p className="text-xs text-pm-muted">{s.d}</p>
              <div className="rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan p-3 text-white">
                <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">Parishioner offer</p>
                <p className="text-sm font-extrabold">{s.offer}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="impact" width="wide">
        <DarkPanel
          title="Impact is the center of the parish store."
          description="Every product, donation, sponsor and local business action should connect back to measurable parish impact."
        >
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wider text-white/70">Total parish impact</p>
              <p className="mt-2 text-3xl font-extrabold">$2,430</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wider text-white/70">Visibility per month</p>
              <p className="mt-2 text-3xl font-extrabold">$1,870</p>
            </div>
          </div>
          <Link href="/dashboard/parish" className="pm-btn mt-5 inline-flex bg-white text-pm-navy">
            View Impact Report
          </Link>
        </DarkPanel>
      </Section>

      <Section width="wide">
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { t: "Shop with Purpose", d: "Buy products and services for the parish community.", c: "/shop", v: "primary" as const },
            { t: "Give with Love", d: "Support ministries, causes and parish needs.", c: "/give", v: "secondary" as const },
            { t: "Sell with Purpose", d: "Offer products or services to the parish community.", c: "/onboarding/seller", v: "secondary" as const },
          ].map((s) => (
            <div key={s.t} className="pm-card p-5">
              <h3 className="text-base font-bold text-pm-navy">{s.t}</h3>
              <p className="mt-1 text-xs text-pm-muted">{s.d}</p>
              <Link href={s.c} className={`pm-btn ${s.v === "primary" ? "pm-btn-primary" : "pm-btn-secondary"} mt-3 inline-flex`}>
                Open
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}
