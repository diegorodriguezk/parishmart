import Link from "next/link";
import { Search } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, SectionHeader, DarkPanel } from "@/components/Sections";
import { ProductCard, CauseCard, StatTile } from "@/components/Cards";
import { LiveProofTicker, Testimonial } from "@/components/SocialProof";
import { LocalBizCard, CommunityCard } from "@/components/home/LocalBizCard";
import { fetchProducts, fetchBusinesses } from "@/lib/api";

export const metadata = { title: "Home | ParishMart" };

const PARISHSOFT_GIVE_URL = "https://giving.parishsoft.com/app/giving/stk2501240";

export default async function HomePage() {
  const [featured, businesses] = await Promise.all([
    fetchProducts({
      ids: [
        "skd-mens-microfleece-jacket",
        "rosary",
        "harps-club-tote",
        "saint-benedict-crucifix",
      ],
    }),
    fetchBusinesses(),
  ]);
  return (
    <>
      <Header />

      <Section width="wide" className="!py-8 sm:!py-12">
        <div className="grid gap-8 md:grid-cols-[1.05fr_.95fr] md:items-center md:gap-10">
          <div>
            <span className="pm-kicker">Faith-driven commerce platform</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-pm-navy sm:text-5xl md:text-[64px]">
              Shop with <span className="pm-gradient-text">Purpose.</span>
              <br /> Give with <span className="pm-gradient-text">Love.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-pm-muted">
              ParishMart connects parish stores, causes, local businesses and
              supporters in one simple community marketplace.
            </p>
            <p className="mt-3 max-w-xl text-base font-medium text-pm-ink">
              Discover products, services, businesses, and causes that support
              communities through commerce and giving.
            </p>

            <form
              action="/search"
              method="get"
              role="search"
              className="mt-6 flex items-center gap-2 rounded-full border border-pm-border bg-white px-3 py-1.5 shadow-pm-soft focus-within:border-pm-blue"
            >
              <Search className="ml-1 h-5 w-5 shrink-0 text-pm-muted" aria-hidden />
              <input
                name="q"
                aria-label="Search ParishMart"
                placeholder="Search products, causes, businesses, gifts and services…"
                className="pm-input h-10 w-full min-w-0 px-1 text-sm"
              />
              <button type="submit" className="pm-btn pm-btn-primary !px-5 !py-2 text-sm">
                Search
              </button>
            </form>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/shop" className="pm-btn pm-btn-primary">
                Start Shopping
              </Link>
              <Link href="/give" className="pm-btn pm-btn-secondary">
                Give Now
              </Link>
              <Link href="/onboarding" className="pm-btn pm-btn-ghost">
                Join Us →
              </Link>
            </div>
          </div>
          <div className="pm-card overflow-hidden p-3">
            <div className="relative">
              <Photo
                kind="church"
                src="/brand/skd/church.jpg"
                alt="Saint Katharine Drexel Catholic Parish, Weston FL"
                ratio="16/9"
                rounded="rounded-2xl"
              />
              <span className="pm-label absolute left-4 top-4 !bg-white/85">
                Featured Parish Store
              </span>
            </div>
            <div className="space-y-3 p-4">
              <h3 className="text-2xl font-extrabold text-pm-navy">
                St. Katharine Drexel
              </h3>
              <p className="text-sm text-pm-muted">
                Supporting ministries, causes and local community impact
                through products, services and giving.
              </p>
              <div className="grid grid-cols-3 gap-2 pt-2">
                <StatTile value="$2,430" hint="Impact this month" />
                <StatTile value="48" hint="Recent orders" />
                <StatTile value="5" hint="Active causes" />
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <Link
                  href="/stores"
                  className="pm-btn pm-btn-primary !px-4 !py-2 text-sm"
                >
                  Visit Store
                </Link>
                <Link
                  href="/give/cause"
                  className="pm-btn pm-btn-secondary !px-4 !py-2 text-sm"
                >
                  Support SKD
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <LiveProofTicker />
        </div>
      </Section>

      {/* QA: "ParishMart Impact" stats temporarily hidden per Observaciones 3.0 */}

      <Section width="wide">
        <SectionHeader
          title="Join the ParishMart Ecosystem"
          description="Three simple ways to participate: open a community store, sell with purpose, or sponsor meaningful local impact."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              tag: "P",
              title: "For Parishes & Causes",
              description:
                "Open a store, receive support and activate your community around products, campaigns and ministries.",
              cta: "Open Your Store →",
              href: "/onboarding/parish",
            },
            {
              tag: "S",
              title: "For Sellers & Businesses",
              description:
                "Offer products or services while supporting a parish, ministry, retreat or cause your customers care about.",
              cta: "Become a Seller →",
              href: "/onboarding/seller",
            },
            {
              tag: "S",
              title: "For Sponsors",
              description:
                "Grow visibility in faith-driven communities while helping fund missions, youth programs and local causes.",
              cta: "Become a Sponsor →",
              href: "/onboarding/sponsor",
            },
          ].map((c) => (
            <div key={c.title} className="pm-card relative overflow-hidden p-6">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-pm-blue to-pm-cyan text-sm font-extrabold text-white">
                {c.tag}
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-pm-navy">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-pm-muted">{c.description}</p>
              <Link
                href={c.href}
                className="mt-4 inline-flex text-sm font-bold text-pm-blue"
              >
                {c.cta}
              </Link>
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br from-pm-cyan/30 to-transparent blur-2xl" />
            </div>
          ))}
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader
          title="Featured Parish Stores"
          description="Explore parish, ministry and cause stores already connected to the ParishMart ecosystem."
          right={
            <>
              <Link
                href="/communities"
                className="font-bold text-pm-blue"
              >
                View all stores
              </Link>
              <Link
                href="/onboarding/parish"
                className="text-pm-muted"
              >
                Open your parish store
              </Link>
            </>
          }
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              photo: "church" as const,
              src: "/brand/skd/church.jpg",
              label: "Featured Parish",
              title: "St. Katharine Drexel",
              href: "/stores",
              text: "Products, donations, campaigns and community supporters for SKD parish.",
            },
            {
              photo: "retreat" as const,
              src: undefined,
              label: "Retreat Community",
              title: "Emmaus SKD Weston",
              href: "/give/cause",
              text: "Separate experiences for Emmaus Men and Emmaus Women retreat communities.",
            },
            {
              photo: "stained-glass" as const,
              src: undefined,
              label: undefined,
              title: "Schoenstatt, FACE & Casa Manresa",
              href: "/communities",
              text: "Faith-driven communities, retreats and entrepreneurs connected to impact.",
            },
          ].map((s, i) => (
            <article
              key={i}
              className="pm-card flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-pm-soft"
            >
              <Link href={s.href} className="block">
                <Photo
                  kind={s.photo}
                  src={s.src}
                  ratio="16/9"
                  rounded="rounded-none"
                  className="!rounded-t-[24px] !rounded-b-none"
                />
              </Link>
              <div className="flex flex-1 flex-col gap-2 p-5">
                {s.label ? <span className="pm-label">{s.label}</span> : null}
                <Link href={s.href}>
                  <h3 className="text-lg font-extrabold text-pm-navy hover:text-pm-blue">
                    {s.title}
                  </h3>
                </Link>
                <p className="text-xs text-pm-muted">{s.text}</p>
                <div className="mt-auto pt-3">
                  <Link
                    href={s.href}
                    className="pm-btn pm-btn-primary !px-4 !py-1.5 text-xs"
                  >
                    View
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader
          title="Shop with Purpose"
          description="Buy products and services while supporting a parish, ministry, cause or mission."
          right={
            <>
              <span className="pm-chip" data-active="true">
                Products
              </span>
              <span className="pm-chip">Services</span>
              <Link
                href="/onboarding/seller"
                className="font-bold text-pm-blue"
              >
                Sell products or services →
              </Link>
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

      <Section width="wide">
        <SectionHeader
          title="Give with Love"
          description="Support campaigns from parishes, ministries, retreats and community causes."
          right={
            <>
              <Link href="/give" className="font-bold text-pm-blue">
                View All Givings
              </Link>
              <Link href="/onboarding/parish" className="text-pm-muted">
                Launch a giving campaign
              </Link>
            </>
          }
        />
        <div className="grid gap-4 md:grid-cols-4">
          <CauseCard
            photo="volunteers"
            cause="saint-vincent-de-paul"
            label="Helping Hands"
            title="St. Vincent de Paul"
            description="Helping families in need in our community."
            location="SKD · Weston, FL"
            href={PARISHSOFT_GIVE_URL}
          />
          <CauseCard
            photo="community"
            cause="marys-hope"
            label="Family Support"
            title="Mary's Hope Network"
            description="Supporting mothers, families and the gift of life."
            location="South Florida"
            href={PARISHSOFT_GIVE_URL}
          />
          <CauseCard
            photo="praying"
            cause="christ-care-for-all"
            label="Compassion"
            title="Christlike Care for All"
            description="Bringing Christ's compassion to those in need."
            location="Catholic community"
            href={PARISHSOFT_GIVE_URL}
          />
          <CauseCard
            photo="stained-glass"
            cause="schoenstatt-miami"
            label="Mission"
            title="Schoenstatt Miami"
            description="Light and path toward the Merciful Father."
            location="Miami, FL"
            href={PARISHSOFT_GIVE_URL}
          />
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader
          title="Local Businesses & Sponsors"
          description="Trusted local businesses and sponsors supporting parish communities through products, services and offers."
          right={
            <>
              <Link
                href="/local-businesses"
                className="font-bold text-pm-blue"
              >
                View all supporters
              </Link>
              <Link
                href="/onboarding/local-business"
                className="text-pm-muted"
              >
                Become a local business →
              </Link>
            </>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              tags={[]}
              subtext={b.location}
              cta="View more"
            />
          ))}
          <LocalBizCard
            href="/onboarding/local-business"
            photo="business"
            initials="+"
            category="Join the ecosystem"
            title="Become a Local Business Supporter"
            description="Offer products or services, gain visibility and support a parish cause with every sale or membership."
            tags={[]}
            subtext="Simple onboarding"
            cta="Apply now"
          />
        </div>
      </Section>

      <Section width="wide">
        <div className="pm-dark-panel !p-6 sm:!p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold leading-tight md:text-3xl">
                How It Works
              </h2>
              <p className="mt-2 text-sm text-white/85 md:text-base">
                Three simple steps. Infinite impact.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  {
                    n: 1,
                    t: "Choose a parish or cause",
                    d: "Select the community, ministry, retreat or mission you want to support.",
                  },
                  {
                    n: 2,
                    t: "Shop, give or partner",
                    d: "Buy products, request services, make a donation or become a sponsor.",
                  },
                  {
                    n: 3,
                    t: "Create real impact",
                    d: "Every transaction helps generate measurable value for the community.",
                  },
                ].map((s) => (
                  <div
                    key={s.n}
                    className="rounded-2xl border border-white/15 bg-white/5 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 text-xs font-extrabold">
                        {s.n}
                      </span>
                      <span className="text-sm font-bold">{s.t}</span>
                    </div>
                    <p className="mt-2 text-xs text-white/75">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-video overflow-hidden rounded-2xl border border-white/15 bg-black">
              <iframe
                src="https://www.youtube-nocookie.com/embed/95emlzl9IBE?list=PLyUuquHB9XCeh_YKam0wQtM-hzMCZ8PNz&rel=0"
                title="ParishMart"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader
          title="Communities Already Participating"
          description="Proof points from the current ParishMart ecosystem."
          right={
            <Link href="/communities" className="font-bold text-pm-blue">
              View all communities →
            </Link>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <CommunityCard
            href="/stores"
            photo="church"
            photoSrc="/brand/skd/church.jpg"
            initials="SKD"
            logoSrc="/brand/skd/logo.png"
            category="Parish Store"
            title="St. Katharine Drexel"
            description="Our first parish community using ParishMart to connect products, giving and local impact."
            location="Weston, FL"
            tags={[]}
            subtext="Active pilot"
            cta="View more"
          />
          <CommunityCard
            href="/communities"
            photo="retreat"
            initials="EM"
            category="Ministry"
            title="Emmaus Community"
            description="Retreat community creating opportunities for event products, ministry visibility and fundraising."
            location="Weston, FL"
            tags={[]}
            subtext="Community partner"
            cta="View more"
          />
          <CommunityCard
            href="/communities"
            photo="stained-glass"
            initials="SCH"
            category="Cause / Mission"
            title="Schoenstatt Mission"
            description="A faith-driven mission community connecting supporters with meaningful campaigns and events."
            location="South Florida"
            tags={[]}
            subtext="Cause supporter"
            cta="View more"
          />
          <CommunityCard
            href="/onboarding/sponsor"
            photo="business"
            initials="SP"
            category="Sponsor"
            title="Founding Sponsor"
            description="Early sponsors can support parish events, ministries and causes while gaining trusted community visibility."
            location="Florida"
            tags={[]}
            subtext="Early access"
            cta="Become sponsor"
          />
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader
          title="What parishioners say"
          description="Real stories from supporters and parish leaders inside the ecosystem."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <Testimonial
            quote="Buying retreat shirts through ParishMart actually funded scholarships for two teenagers from our parish. That's commerce with purpose."
            author="Maria Rodriguez"
            role="Parishioner · SKD Weston"
          />
          <Testimonial
            quote="As a local photographer, ParishMart connected me with retreat groups I never would have reached. Real ROI plus mission."
            author="Carlos Silva"
            role="Maria's Studios · Local Biz"
          />
          <Testimonial
            quote="The transparency on where every dollar goes is what made our parish council say yes. Easier than running a separate bake sale."
            author="Fr. Omar Ayubi"
            role="Pastor · St. Katharine Drexel"
          />
        </div>
      </Section>

      <Section width="wide">
        <DarkPanel
          title="Ready to make an impact?"
          description="Sells your products, offer your services or become a sponsor."
          cta="Join Us"
          ctaHref="/onboarding"
        />
      </Section>

      <Footer />
    </>
  );
}
