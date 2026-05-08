import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, SectionHeader, DarkPanel } from "@/components/Sections";
import {
  ProductCard,
  CauseCard,
  StatTile,
} from "@/components/Cards";
import { LiveProofTicker, ParishStats, Testimonial } from "@/components/SocialProof";

export const metadata = { title: "Home | ParishMart" };

export default function HomePage() {
  return (
    <>
      <Header />

      <Section width="wide" className="!py-10 sm:!py-14">
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
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/shop" className="pm-btn pm-btn-primary">
                Start Shopping
              </Link>
              <Link href="/give" className="pm-btn pm-btn-secondary">
                Give Now
              </Link>
              <Link href="/onboarding/parish" className="pm-btn pm-btn-ghost">
                Open your Parish Store →
              </Link>
            </div>
          </div>
          <div className="pm-card overflow-hidden p-3">
            <Photo kind="church" ratio="16/9" rounded="rounded-2xl">
              <span className="pm-label absolute left-4 top-4 !bg-white/85">
                Featured Parish Store
              </span>
            </Photo>
            <div className="space-y-3 p-4">
              <h3 className="text-2xl font-extrabold text-pm-navy">
                St. Katharine Drexel
              </h3>
              <p className="text-sm text-pm-muted">
                Supporting ministries, causes and local community impact through
                products, services and giving.
              </p>
              <div className="grid grid-cols-3 gap-2 pt-2">
                <StatTile value="$2,430" hint="Impact this month" />
                <StatTile value="48" hint="Recent orders" />
                <StatTile value="5" hint="Active causes" />
              </div>
              <div className="flex gap-2 pt-1">
                <Link href="/stores" className="pm-btn pm-btn-primary !px-4 !py-2 text-sm">
                  Visit Store
                </Link>
                <Link href="/give/cause" className="pm-btn pm-btn-secondary !px-4 !py-2 text-sm">
                  Support SKD
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-2 rounded-full border border-pm-border bg-white p-2 shadow-pm-soft">
          <input
            className="pm-input flex-1 px-4 py-2"
            placeholder="Search products, services, parish stores, causes or local businesses…"
            aria-label="Search"
          />
          <Link href="/search" className="pm-btn pm-btn-primary !px-4 sm:!px-5">
            <span className="hidden sm:inline">Search</span>
            <span className="sm:hidden" aria-hidden>🔍</span>
          </Link>
        </div>

        <div className="mt-6">
          <LiveProofTicker />
        </div>
      </Section>

      <Section width="wide" className="!py-6">
        <ParishStats />
      </Section>

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
              title: "For Sellers & Local Businesses",
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
              <Link href="/stores" className="font-bold text-pm-blue">
                View all stores
              </Link>
              <Link href="/onboarding/parish" className="text-pm-muted">
                Open your parish store
              </Link>
            </>
          }
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { photo: "church", label: "Featured Parish", title: "St. Katharine Drexel", text: "Products, donations, campaigns and community supporters for SKD parish.", l: "Impact", lv: "$2,430", r: "Causes", rv: "5" },
            { photo: "retreat", label: "Retreat Community", title: "Emmaus SKD Weston", text: "Separate experiences for Emmaus Men and Emmaus Women retreat communities.", l: "Stores", lv: "2", r: "Status", rv: "Active" },
            { photo: "stained-glass", label: "Mission Partners", title: "Schoenstatt, FACE & Casa Manresa", text: "Faith-driven communities, retreats and entrepreneurs connected to impact.", l: "Partners", lv: "3", r: "Launch", rv: "New" },
          ].map((s, i) => (
            <Link key={i} href="/stores" className="pm-card overflow-hidden transition hover:-translate-y-0.5 hover:shadow-pm-soft">
              <Photo kind={s.photo as "church" | "retreat" | "stained-glass"} ratio="16/9" rounded="rounded-none" className="!rounded-t-[24px] !rounded-b-none" />
              <div className="space-y-2 p-5">
                <span className="pm-label">{s.label}</span>
                <h3 className="text-lg font-extrabold text-pm-navy">{s.title}</h3>
                <p className="text-xs text-pm-muted">{s.text}</p>
                <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                  <div>
                    <p className="text-[10px] font-bold uppercase text-pm-blue">{s.l}</p>
                    <p className="text-base font-extrabold text-pm-navy">{s.lv}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase text-pm-blue">{s.r}</p>
                    <p className="text-base font-extrabold text-pm-navy">{s.rv}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader
          title="Shop with Purpose"
          description="Buy products and services while supporting a parish, ministry, cause or mission."
          right={
            <>
              <span className="pm-chip" data-active="true">Products</span>
              <span className="pm-chip">Services</span>
              <span className="pm-chip">Local Businesses</span>
              <Link href="/onboarding/seller" className="font-bold text-pm-blue">
                Sell products or services →
              </Link>
            </>
          }
        />
        <div className="grid gap-4 md:grid-cols-4">
          <ProductCard photo="apparel" label="Supports SKD" title="Emmaus Retreat T-Shirt" meta="Custom apparel for retreats, ministries and events." price="$22.00" />
          <ProductCard photo="rosary" label="Religious Gift" title="Rosary Bracelet" meta="Faith-inspired gifts for celebrations and blessings." price="$25.00" />
          <ProductCard photo="business" label="Local Business" title="Maria's Studios" meta="Photography services for parish events and retreats." price="From $150" />
          <ProductCard photo="bible" label="Service" title="Retreat Planning" meta="Services connected to Casa Manresa and community programs." cta="Request" />
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader
          title="Give with Love"
          description="Support campaigns from parishes, ministries, retreats and community causes."
          right={
            <>
              <Link href="/give" className="font-bold text-pm-blue">
                View all causes
              </Link>
              <Link href="/onboarding/parish" className="text-pm-muted">
                Launch a giving campaign
              </Link>
            </>
          }
        />
        <div className="grid gap-4 md:grid-cols-4">
          <CauseCard photo="retreat" label="Youth Ministry" title="Support Youth Ministry" description="Building tomorrow's leaders in faith." raised="$7,850" donors="45 donors" />
          <CauseCard photo="volunteers" label="Helping Hands" title="St Vincent de Paul" description="Helping families in need in our community." raised="$5,420" donors="32 donors" />
          <CauseCard photo="community" label="Retreats" title="Emmaus Retreat" description="Support upcoming retreat experiences and formation." raised="$6,230" donors="41 donors" />
          <CauseCard photo="chalice" label="Mission" title="Schoenstatt Mission Fund" description="Support missionary outreach and pilgrimage programs." raised="$8,910" donors="62 donors" />
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader
          title="Local Businesses & Sponsors"
          description="Businesses and sponsors strengthen parish communities while growing visibility with aligned supporters."
          right={
            <>
              <Link href="/local-businesses" className="font-bold text-pm-blue">
                View all
              </Link>
              <Link href="/onboarding/local-business" className="text-pm-muted">
                Become a business or sponsor →
              </Link>
            </>
          }
        />
        <div className="grid gap-4 md:grid-cols-5">
          {[
            { ini: "MS", name: "Maria's Studios", desc: "Photography for families, retreats and parish events." },
            { ini: "CM", name: "Casa Manresa", desc: "Retreat programs and spiritual formation services." },
            { ini: "FE", name: "FACE", desc: "Catholic entrepreneurs supporting community impact." },
            { ini: "SP", name: "Community Sponsor", desc: "Featured local sponsor for parish and cause visibility." },
            { ini: "LB", name: "Local Business", desc: "Offer services while supporting your favorite cause." },
          ].map((b) => (
            <div key={b.ini} className="pm-card flex flex-col gap-3 p-5">
              <span className="pm-avatar">{b.ini}</span>
              <h3 className="text-base font-bold text-pm-navy">{b.name}</h3>
              <p className="text-xs text-pm-muted">{b.desc}</p>
              <Link href="/local-businesses/profile" className="mt-auto text-sm font-bold text-pm-blue">
                View profile →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section width="wide">
        <DarkPanel
          title="How It Works"
          description="Three simple steps. Infinite impact."
        >
          <div className="mt-6 grid gap-3">
            {[
              { n: 1, t: "Choose a parish or cause", d: "Select the community, ministry, retreat or mission you want to support." },
              { n: 2, t: "Shop, give or partner", d: "Buy products, request services, make a donation or become a sponsor." },
              { n: 3, t: "Create real impact", d: "Every transaction helps generate measurable value for the community." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-white/15 bg-white/5 p-4">
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
        </DarkPanel>
      </Section>

      <Section width="wide">
        <SectionHeader
          title="Communities Already Participating"
          description="Proof points from the current ParishMart ecosystem."
        />
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {[
            { code: "SKD", name: "SKD Weston" },
            { code: "EM", name: "Emmaus Men" },
            { code: "EW", name: "Emmaus Women" },
            { code: "SV", name: "St Vincent de Paul" },
            { code: "YM", name: "Youth Ministry" },
            { code: "SC", name: "Schoenstatt" },
            { code: "FE", name: "FACE" },
            { code: "CM", name: "Casa Manresa" },
          ].map((c) => (
            <div key={c.code} className="pm-card flex items-center gap-3 p-4">
              <span className="pm-label">{c.code}</span>
              <span className="text-sm font-bold text-pm-navy">{c.name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader
          title="What parishioners say"
          description="Real stories from supporters and parish leaders inside the ecosystem."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <Testimonial quote="Buying retreat shirts through ParishMart actually funded scholarships for two teenagers from our parish. That's commerce with purpose." author="Maria Rodriguez" role="Parishioner · SKD Weston" />
          <Testimonial quote="As a local photographer, ParishMart connected me with retreat groups I never would have reached. Real ROI plus mission." author="Carlos Silva" role="Maria's Studios · Local Biz" />
          <Testimonial quote="The transparency on where every dollar goes is what made our parish council say yes. Easier than running a separate bake sale." author="Fr. Omar Ayubi" role="Pastor · St. Katharine Drexel" />
        </div>
      </Section>

      <Section width="wide">
        <DarkPanel
          title="Ready to make an impact?"
          description="Open a parish store, sell products or services, launch a campaign, or become a sponsor."
          cta="Get Started Today"
          ctaHref="/onboarding"
          ctaSecondary="Open Your Store"
          ctaSecondaryHref="/onboarding/parish"
        />
      </Section>

      <Footer />
    </>
  );
}
