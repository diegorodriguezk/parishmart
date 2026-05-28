import Link from "next/link";
import {
  Search,
  Building2,
  HandHeart,
  ShoppingBag,
  Briefcase,
  Megaphone,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, SectionHeader } from "@/components/Sections";
import { ProductCard, CauseCard } from "@/components/Cards";
import { LiveProofTicker, Testimonial } from "@/components/SocialProof";
import { LocalBizCard } from "@/components/home/LocalBizCard";
import { fetchProducts, fetchBusinesses } from "@/lib/api";

export const metadata = { title: "Home | ParishMart" };

const PARISHSOFT_GIVE_URL = "https://giving.parishsoft.com/app/giving/stk2501240";

const SPONSORS = [
  { name: "Cleveland Hospital", initials: "CH" },
  { name: "Community Bank", initials: "BK" },
  { name: "Baires Grill", initials: "BG" },
  { name: "Maria's Studios", initials: "MS" },
  { name: "Casa Manresa", initials: "CM" },
  { name: "Simplisafe", initials: "SS" },
  { name: "Pretzelmaker", initials: "PM" },
  { name: "Family Streaming", initials: "TV" },
];

const FEATURED_STORES = [
  {
    photo: "church" as const,
    src: "/brand/skd/church.jpg" as string | undefined,
    label: "Featured Parish",
    title: "St. Katharine Drexel",
    location: "Weston, FL",
    text: "Products, donations, campaigns and community supporters for SKD parish.",
    href: "/stores",
  },
  {
    photo: "retreat" as const,
    src: undefined as string | undefined,
    label: "Retreat Community",
    title: "Emmaus SKD Weston",
    location: "SKD · Weston, FL",
    text: "Separate experiences for Emmaus Men and Emmaus Women retreat communities.",
    href: "/give/cause",
  },
  {
    photo: "stained-glass" as const,
    src: undefined as string | undefined,
    label: "Causes & Communities",
    title: "Schoenstatt, FACE & Casa Manresa",
    location: "South Florida",
    text: "Faith-driven communities, retreats and entrepreneurs connected to impact.",
    href: "/communities",
  },
];

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
                {[
                  { l: "Impact to date", v: "$2.4K" },
                  { l: "Local businesses", v: "5" },
                  { l: "Active causes", v: "8" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-2xl border border-pm-border bg-white p-3"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                      {s.l}
                    </p>
                    <p className="text-base font-extrabold text-pm-navy">
                      {s.v}
                    </p>
                  </div>
                ))}
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
                  Support Now
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
          description="Three roles, one mission — pick the path that fits how you want to participate."
        />
        <div className="space-y-4">
          {[
            {
              kicker: "Parishes & causes lead the mission",
              title: "Build your community and make an impact.",
              description:
                "Open a storefront for your parish, ministry or cause. Launch campaigns, sell products, promote events and engage supporters around your mission.",
              options: [
                {
                  Icon: Building2,
                  title: "Parish",
                  description:
                    "Launch your parish storefront and unite your community around giving, products and ministries.",
                  cta: "Start Parish",
                  href: "/onboarding/parish",
                },
                {
                  Icon: HandHeart,
                  title: "Cause / Ministry",
                  description:
                    "Activate your ministry, retreat or cause with campaigns, supporters and meaningful commerce.",
                  cta: "Start Cause",
                  href: "/onboarding/parish",
                },
              ],
            },
            {
              kicker: "Businesses activate the economy",
              title: "Grow your business with purpose.",
              description:
                "Offer products or services while supporting the communities your customers care about.",
              options: [
                {
                  Icon: ShoppingBag,
                  title: "Product Seller",
                  description:
                    "Sell products that support parishes, causes and communities.",
                  cta: "Sell Products",
                  href: "/onboarding/seller",
                },
                {
                  Icon: Briefcase,
                  title: "Service Business",
                  description:
                    "Offer services and connect with local faith-driven communities.",
                  cta: "Offer Services",
                  href: "/onboarding/local-business",
                },
              ],
            },
            {
              kicker: "Sponsors fuel the movement",
              title: "Sponsor with purpose.",
              description:
                "Grow visibility in faith-driven communities while helping fund missions, youth programs and local causes.",
              options: [
                {
                  Icon: Megaphone,
                  title: "Brand Sponsor",
                  description:
                    "Sponsor parishes, retreats and missions while building your brand within faith-driven audiences.",
                  cta: "Become a Sponsor",
                  href: "/onboarding/sponsor",
                },
                {
                  Icon: Sparkles,
                  title: "Strategic Partner",
                  description:
                    "Bring ParishMart to a diocese, network or larger community of faith-driven organizations.",
                  cta: "Talk to Partnerships",
                  href: "/partners",
                },
              ],
            },
          ].map((step, idx) => (
            <div
              key={step.title}
              className="pm-card relative overflow-hidden p-6 sm:p-8"
            >
              <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:items-center">
                <div>
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-pm-blue">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-pm-blue text-[11px] text-white">
                      {idx + 1}
                    </span>
                    {step.kicker}
                  </span>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-pm-navy md:text-[26px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-pm-muted">
                    {step.description}
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {step.options.map((opt) => (
                    <div
                      key={opt.title}
                      className="flex flex-col rounded-2xl border border-pm-border bg-white/80 p-5 transition hover:-translate-y-0.5 hover:shadow-pm-soft"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-pm-soft text-pm-blue">
                        <opt.Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h4 className="mt-3 text-base font-extrabold text-pm-navy">
                        {opt.title}
                      </h4>
                      <p className="mt-1 text-xs text-pm-muted">
                        {opt.description}
                      </p>
                      <Link
                        href={opt.href}
                        className="mt-3 inline-flex text-sm font-bold text-pm-blue"
                      >
                        {opt.cta} →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {idx === 0 ? (
                <div className="relative z-[1] mt-7 border-t border-pm-border/60 pt-6">
                  <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-pm-muted">
                        <span
                          className="h-2 w-2 rounded-full bg-emerald-500"
                          aria-hidden
                        />
                        Already on ParishMart
                      </span>
                      <h4 className="mt-1 text-lg font-extrabold text-pm-navy">
                        Featured stores
                      </h4>
                      <p className="text-xs text-pm-muted">
                        Parishes, ministries and causes already live in the
                        marketplace.
                      </p>
                    </div>
                    <Link
                      href="/communities"
                      className="text-sm font-bold text-pm-blue hover:underline"
                    >
                      View all →
                    </Link>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {FEATURED_STORES.map((s) => (
                      <article
                        key={s.title}
                        className="pm-card group flex flex-col overflow-hidden p-3 transition hover:-translate-y-0.5 hover:shadow-pm-soft"
                      >
                        <Link href={s.href} className="block">
                          <Photo
                            kind={s.photo}
                            src={s.src}
                            ratio="4/3"
                            rounded="rounded-2xl"
                          />
                        </Link>
                        <div className="flex flex-1 flex-col gap-2 p-3">
                          {s.label ? (
                            <span className="pm-label w-fit">{s.label}</span>
                          ) : null}
                          <Link href={s.href} className="block">
                            <h5 className="text-base font-bold text-pm-navy group-hover:text-pm-blue">
                              {s.title}
                            </h5>
                          </Link>
                          <p className="text-[11px] font-medium text-pm-blue">{s.location}</p>
                          <p className="line-clamp-2 text-xs text-pm-muted">
                            {s.text}
                          </p>
                          <div className="mt-auto pt-2">
                            <Link
                              href={s.href}
                              className="text-sm font-bold text-pm-blue hover:text-pm-navy"
                            >
                              View store →
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                </div>
              ) : null}

              {idx === 2 ? (
                <div className="relative z-[1] mt-7 border-t border-pm-border/60 pt-6">
                  <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-pm-muted">
                        <span
                          className="h-2 w-2 rounded-full bg-emerald-500"
                          aria-hidden
                        />
                        Backing the mission
                      </span>
                      <h4 className="mt-1 text-lg font-extrabold text-pm-navy">
                        Preferred Partners
                      </h4>
                      <p className="text-xs text-pm-muted">
                        Sponsors already supporting parishes, missions and
                        community causes.
                      </p>
                    </div>
                    <Link
                      href="/sponsors"
                      className="text-sm font-bold text-pm-blue hover:underline"
                    >
                      View all →
                    </Link>
                  </div>
                  <ul className="flex flex-wrap items-center gap-x-10 gap-y-6 sm:gap-x-14">
                    {SPONSORS.map((s) => (
                      <li
                        key={s.initials}
                        title={s.name}
                        className="text-base font-bold tracking-tight text-pm-muted/80 grayscale transition hover:text-pm-navy hover:grayscale-0 md:text-lg"
                      >
                        {s.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {idx === 1 ? (
                <div className="relative z-[1] mt-7 border-t border-pm-border/60 pt-6">
                  <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-pm-muted">
                        <span
                          className="h-2 w-2 rounded-full bg-emerald-500"
                          aria-hidden
                        />
                        Activating the local economy
                      </span>
                      <h4 className="mt-1 text-lg font-extrabold text-pm-navy">
                        Local Businesses
                      </h4>
                      <p className="text-xs text-pm-muted">
                        Trusted local businesses already supporting parish
                        communities.
                      </p>
                    </div>
                    <Link
                      href="/local-businesses"
                      className="text-sm font-bold text-pm-blue hover:underline"
                    >
                      View all →
                    </Link>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {businesses
                      .filter((b) => b.id !== "maria-studios" && b.id !== "meraki")
                      .map((b, i) => (
                      <LocalBizCard
                        key={b.id}
                        href={`/local-businesses/${b.id}`}
                        photo={
                          i === 0
                            ? "community"
                            : i === 1
                              ? "business"
                              : "merch"
                        }
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
                  </div>
                </div>
              ) : null}

              <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br from-pm-cyan/20 to-transparent blur-2xl" />
            </div>
          ))}
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
          title="Shop with Purpose"
          description="Products from sellers and businesses already on the marketplace."
          right={
            <Link href="/shop" className="font-bold text-pm-blue">
              View all →
            </Link>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
            <Link href="/give" className="font-bold text-pm-blue">
              View all →
            </Link>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

      <Footer />
    </>
  );
}
