import Link from "next/link";
import {
  HandHeart,
  ShoppingBag,
  Building2,
  Sparkles,
  HeartHandshake,
  Compass,
  ShieldCheck,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, SectionHeader, DarkPanel } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = {
  title: "About Us · ParishMart",
  description:
    "ParishMart is the first Catholic marketplace that connects parishes, causes and faith-driven entrepreneurs. Shop with purpose, give with love.",
};

const PILLARS = [
  {
    Icon: ShoppingBag,
    title: "For Shoppers",
    body: "Discover meaningful, purpose-driven products and services that reflect your beliefs and support your community. Every purchase becomes a way to give back — helping fund parish programs, empower local businesses, and support meaningful missions.",
  },
  {
    Icon: Building2,
    title: "For Sellers & Local Businesses",
    body: "Reach a dedicated audience that values mission-driven commerce. Every product or service sold grows your business while contributing to the greater good — doing well while doing good.",
  },
  {
    Icon: HandHeart,
    title: "For Parishes & Causes",
    body: "Activate sustainable support for your mission. Generate year-round revenue through mission-aligned commerce — without inventory or operational burden.",
  },
];

const VALUES = [
  {
    Icon: HeartHandshake,
    title: "Community first",
    body: "ParishMart is from the community, for the community — a place where faith becomes action and generosity becomes a way of life.",
  },
  {
    Icon: ShieldCheck,
    title: "Trust & integrity",
    body: "We support vetted, values-aligned local businesses — safeguarding trust and mission integrity in every transaction.",
  },
  {
    Icon: Sparkles,
    title: "Purpose-driven",
    body: "Inspiring others by living our values. Turning everyday actions into meaningful impact, every day.",
  },
  {
    Icon: Compass,
    title: "Mission-aligned commerce",
    body: "Designed around parish life, ministries and diocesan structures — supporting sustainable growth while preserving pastoral focus.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <Header />

      <Section width="wide" className="!py-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
      </Section>

      {/* HERO */}
      <Section width="wide" className="!pb-3 !pt-2">
        <div className="relative isolate overflow-hidden rounded-3xl border border-pm-border shadow-pm-card p-6 sm:p-10 min-h-[320px]">
          <Photo
            kind="church"
            src="/brand/skd/church.jpg"
            ratio="auto"
            rounded="rounded-none"
            className="absolute inset-0 -z-10 !rounded-none"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pm-navy/90 via-pm-navy/70 to-transparent" />
          <div className="max-w-2xl text-white">
            <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
              About ParishMart
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Shop with <span className="pm-gradient-text">Purpose.</span>
              <br /> Give with <span className="pm-gradient-text">Love.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/90">
              ParishMart is the first Catholic marketplace that connects parishes,
              causes and faith-driven entrepreneurs — a new revenue and engagement
              ecosystem that helps parishes and causes turn commerce into recurring
              support and stronger communities.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/onboarding" className="pm-btn pm-btn-primary">
                Join Us
              </Link>
              <Link
                href="/communities"
                className="pm-btn bg-white/15 text-white hover:bg-white/25"
              >
                Explore communities
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* MISSION + VISION */}
      <Section width="wide">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="pm-card p-6 sm:p-8">
            <span className="pm-kicker">Our Mission</span>
            <h2 className="mt-3 text-2xl font-extrabold text-pm-navy md:text-3xl">
              Commerce with conscience.
            </h2>
            <p className="mt-3 text-sm text-pm-muted">
              At ParishMart, we strive to turn everyday transactions into
              opportunities to support missions, empower entrepreneurs and uplift
              those called to serve.
            </p>
            <p className="mt-3 text-sm text-pm-muted">
              A portion of every transaction flows back to strengthen the
              mission — transforming everyday purchases into sustainable support.
            </p>
          </div>
          <div className="pm-card p-6 sm:p-8">
            <span className="pm-kicker">Our Vision</span>
            <h2 className="mt-3 text-2xl font-extrabold text-pm-navy md:text-3xl">
              A movement of purpose-driven generosity.
            </h2>
            <p className="mt-3 text-sm text-pm-muted">
              To inspire a movement where purpose-driven commerce fuels generosity
              — enabling missions to flourish, communities to thrive and local
              businesses to succeed through shared purpose and meaningful support.
            </p>
            <p className="mt-3 text-sm text-pm-muted">
              Enabling individuals and organizations to thrive with purpose.
            </p>
          </div>
        </div>
      </Section>

      {/* STORY */}
      <Section width="wide">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <span className="pm-kicker">Our Story</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-pm-navy md:text-4xl">
              Connecting the dots with <span className="pm-gradient-text">purpose</span>.
            </h2>
            <p className="mt-4 text-sm text-pm-muted">
              ParishMart was born from a simple insight: parishes, missionaries
              and faith-driven entrepreneurs were already serving their
              communities — they just needed a way for everyday commerce to
              support that work in a sustainable, organized way.
            </p>
            <p className="mt-3 text-sm text-pm-muted">
              We are not asking you to build anything. We are activating what is
              already built. Through ParishMart, we offer an ecosystem for
              parishes, non-profits and small businesses to generate income with
              purpose — a space where every transaction supports something
              greater.
            </p>
            <p className="mt-3 text-sm text-pm-muted">
              When you buy, sell or support ParishMart, you help build stronger
              communities and bring faith to life through action.
            </p>
          </div>
          <Photo kind="community" ratio="4/3" rounded="rounded-3xl" />
        </div>
      </Section>

      {/* THREE PILLARS */}
      <Section width="wide">
        <SectionHeader
          title="Built for the whole ecosystem"
          description="Three simple ways to participate — every role makes the mission stronger."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.title} className="pm-card p-6">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan text-white shadow-pm-soft">
                <p.Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-pm-navy">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-pm-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* VALUES */}
      <Section width="wide">
        <SectionHeader
          title="What we stand for"
          description="The values guiding every decision inside ParishMart."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.title} className="pm-card p-5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-pm-soft text-pm-blue">
                <v.Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-3 text-base font-extrabold text-pm-navy">
                {v.title}
              </h3>
              <p className="mt-1 text-xs text-pm-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TRUSTED BY */}
      <Section width="wide">
        <SectionHeader
          title="Trusted by parishes and apostolic movements"
          description="ParishMart is helping faith-driven communities turn engagement into tangible support."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <figure className="pm-card p-6">
            <blockquote className="text-sm leading-relaxed text-pm-ink">
              &ldquo;More than a platform, ParishMart became a providential tool
              for our mission — enabling fundraising, uniting missionaries
              across the country, and generating tangible support. It has become
              a strategic tool that strengthens our mission, transforming
              community engagement into sustainable, tangible support for our
              causes.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-xs font-bold uppercase tracking-wider text-pm-blue">
              Schoenstatt Apostolic Movement · Miami
            </figcaption>
          </figure>
          <figure className="pm-card p-6">
            <blockquote className="text-sm leading-relaxed text-pm-ink">
              &ldquo;As ParishMart began to take shape, we launched a pilot
              online store for our parish. I saw how a simple, well-structured
              initiative aligned with the mission of the Church can evangelize
              through action — strengthening parish life and generating
              resources in an organized and transparent way, always in service
              of the pastoral mission.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-xs font-bold uppercase tracking-wider text-pm-blue">
              Saint Katharine Drexel Parish · Weston, FL
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* FOUNDERS */}
      <Section width="wide">
        <div className="grid gap-8 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <Photo kind="retreat" ratio="4/3" rounded="rounded-3xl" />
          <div>
            <span className="pm-kicker">From the founders</span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-pm-navy md:text-3xl">
              Lay missionaries placing talents at the service of the mission.
            </h2>
            <p className="mt-4 text-sm text-pm-muted">
              &ldquo;We are members of the Schoenstatt Apostolic Movement in
              Miami. In our journey of faith as lay missionaries, we strive to
              place our talents and resources at the service of the mission,
              wherever God and Our Blessed Mother lead us.&rdquo;
            </p>
            <p className="mt-3 text-sm text-pm-muted">
              &ldquo;Through ParishMart, we want to share that experience: to
              offer an ecosystem for parishes, non-profits and small businesses
              to generate income with purpose, and to build a space where every
              transaction supports something greater.&rdquo;
            </p>
            <p className="mt-4 text-[11px] font-bold uppercase tracking-wider text-pm-blue">
              María Angélica Valencia &amp; Vicente Miralles
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section width="wide">
        <DarkPanel
          title="Together, let's make commerce a force for good."
          description="Empowering parishes, causes and local entrepreneurs. Every purchase uplifts parishes, empowers entrepreneurs and supports missions."
          cta="Join Us"
          ctaHref="/onboarding"
          ctaSecondary="Explore the marketplace"
          ctaSecondaryHref="/shop"
        />
      </Section>

      <Footer />
    </>
  );
}
