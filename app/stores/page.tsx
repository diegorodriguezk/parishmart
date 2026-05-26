import Link from "next/link";
import { ParishProfileHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { SkdLogo } from "@/components/SkdLogo";
import { Section, SectionHeader } from "@/components/Sections";
import { FeaturedCommunityCard, LocalBizCard } from "@/components/home/LocalBizCard";
import { ProductCard, CauseCard } from "@/components/Cards";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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
        parishName="Saint Katharine Drexel"
        storeLabel="Parish Store"
        location="Weston, Florida"
        searchPlaceholder="Search products, ministries, causes, local businesses..."
        activeTab="shop"
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
            rounded="rounded-b-3xl"
            className="h-full w-full object-cover"
            objectPosition="center"
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
                { l: "Impact to date", v: "$2.4K" },
                { l: "Local businesses", v: "5" },
                { l: "Active causes", v: "8" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-pm-border bg-white p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">{s.l}</p>
                  <p className="text-base font-extrabold text-pm-navy">{s.v}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/stores/shop" className="pm-btn pm-btn-primary">Shop with Purpose</Link>
              <Link href="/stores/give" className="pm-btn pm-btn-secondary">Give with Love</Link>
            </div>
          </div>
        </div>
      </Section>


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

      <Section width="wide">
        <SectionHeader
          title="Choose how to support SKD"
          description="Three simple paths: buy something meaningful, give directly to a ministry, or discover community supporters."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { p: "rosary" as const, kicker: "Shop", h: "Religious Gifts", d: "Faith-centered products that support the parish.", href: "/shop" },
            { p: "praying" as const, kicker: "Give", h: "Parish Causes", d: "Support ministries, missions and urgent needs.", href: "/stores/give" },
            { p: "business" as const, kicker: "Local Biz", h: "Community Supporters", d: "Discover businesses connected to SKD.", href: "/local-businesses" },
          ].map((c) => (
            <Link key={c.h} href={c.href} className="pm-card group relative overflow-hidden p-0 transition hover:-translate-y-0.5">
              <Photo kind={c.p} ratio="16/9" rounded="rounded-none" className="!rounded-t-[24px] !rounded-b-none" />
              <div className="space-y-2 p-6">
                <p className="text-[11px] font-bold uppercase tracking-wider text-pm-blue">{c.kicker}</p>
                <h3 className="text-xl font-extrabold text-pm-navy group-hover:text-pm-blue">{c.h}</h3>
                <p className="text-sm text-pm-muted">{c.d}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="shop" width="wide">
        <SectionHeader
          title="Shop with Purpose"
          description="Featured products and services connected to SKD, ministries and community impact."
          right={
            <>
              <Link href="/stores/shop" className="font-bold text-pm-blue">View all products</Link>
              <Link href="/onboarding/seller" className="text-pm-muted">Become a seller</Link>
            </>
          }
        />
        <div className="grid gap-4 md:grid-cols-4">
          {featured.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              href="/stores/shop"
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
              <Link href="/stores/give" className="font-bold text-pm-blue">View all causes</Link>
              <Link href="/onboarding/parish" className="text-pm-muted">Launch campaign</Link>
            </>
          }
        />
        <div className="grid gap-4 md:grid-cols-3">
          <CauseCard
            href="/give/cause"
            photo="retreat"
            cause="mater-18"
            title="Support Youth Ministry"
            description="Help fund formation, retreats and leadership activities."
            location="SKD · Weston, FL"
          />
          <CauseCard
            href="/give/cause"
            photo="community"
            cause="schoenstatt-miami"
            title="Emmaus Retreat Fund"
            description="Support scholarships, formation and retreat logistics."
            location="SKD · Weston, FL"
          />
          <CauseCard
            href="/give/cause"
            photo="volunteers"
            cause="saint-vincent-de-paul"
            title="St Vincent de Paul"
            description="Support families in need with parish-collected initiatives."
            location="SKD · Weston, FL"
          />
        </div>
      </Section>

      <Section id="ministries" width="wide">
        <SectionHeader
          title="Ministries & Causes"
          description="Each ministry can have its own page, giving campaigns, sponsors and impact."
          right={<Link href="/stores/give" className="font-bold text-pm-blue">View ministry list · Open a ministry page</Link>}
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { p: "stained-glass" as const, l: "Ministry", t: "Emmaus SKD Weston", d: "Separate paths for Men and Women retreats with products, campaigns and community support." },
            { p: "praying" as const, l: "Cause", t: "Youth Ministry", d: "Formation, events, youth merchandise and sponsors connected to youth formation." },
          ].map((m) => (
            <FeaturedCommunityCard
              key={m.t}
              href="/give/cause"
              photo={m.p}
              category={m.l}
              title={m.t}
              description={m.d}
              location="SKD · Weston, FL"
            />
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
            <LocalBizCard
              key={b.id}
              href={b.href}
              photo={i === 0 ? "community" : i === 1 ? "business" : "merch"}
              initials={b.initials}
              logoSrc={b.logoSrc}
              category={b.category}
              title={b.name}
              description={b.description}
              subtext={b.location}
              tags={[]}
            />
          ))}
          <LocalBizCard
            href="/sponsors/profile"
            photo="business"
            initials="SP"
            category="Featured Sponsor"
            title="Featured Sponsor"
            description="Featured local sponsor supporting parish causes."
            subtext="$25 OFF · Limited time"
            tags={[]}
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
            { p: "business" as const, n: "Maria's Studios", d: "Family, retreat and parish event photography for the SKD community.", offer: "10% parishioner benefit" },
            { p: "praying" as const, n: "Casa Manresa", d: "Retreat programs and services connected to spiritual formation.", offer: "15% retreat support benefit" },
            { p: "community" as const, n: "Featured Local Sponsor", d: "Mission-aligned business supporting parish causes.", offer: "Up to 8% community offer" },
          ].map((s) => (
            <FeaturedCommunityCard
              key={s.n}
              href="/sponsors/profile"
              photo={s.p}
              category="Sponsor"
              title={s.n}
              description={s.d}
              location={s.offer}
            />
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}
