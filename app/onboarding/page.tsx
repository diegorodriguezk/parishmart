import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader } from "@/components/Sections";

export const metadata = { title: "Join the ParishMart Ecosystem" };

const PLAYERS = [
  {
    badge: "Parish",
    title: "Parish",
    description:
      "Activate your parish community, open a store and launch giving campaigns connected to your ministries.",
    cta: "Activate Parish",
    href: "/onboarding/parish",
  },
  {
    badge: "Cause",
    title: "Cause / Ministry",
    description:
      "Launch giving campaigns and impact pages for ministries, retreats and missions inside the ecosystem.",
    cta: "Activate Cause",
    href: "/onboarding/parish",
  },
  {
    badge: "Seller",
    title: "Seller — Products",
    description:
      "Sell products connected to a cause that your customers care about.",
    cta: "Become a Seller",
    href: "/onboarding/seller",
  },
  {
    badge: "Local Biz",
    title: "Business Supporter — Services",
    description:
      "Join as a mission-aligned business and offer services with parishioner benefits and visibility.",
    cta: "Join as Business",
    href: "/onboarding/local-business",
  },
  {
    badge: "Sponsor",
    title: "Sponsor",
    description:
      "Promote your brand while supporting parishes, ministries and community causes.",
    cta: "Become a Sponsor",
    href: "/onboarding/sponsor",
  },
];

export default function JoinEcosystemPage() {
  return (
    <>
      <Header />

      <Section width="wide" className="!pt-12">
        <div className="text-center">
          <span className="pm-kicker">Join the Ecosystem</span>
          <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-pm-navy md:text-6xl">
            Choose how you want to{" "}
            <span className="pm-gradient-text">participate</span>.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-pm-muted">
            Each player sees a clear value proposition and a direct path to
            activate inside the ParishMart ecosystem.
          </p>
        </div>
      </Section>

      <Section width="wide">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {PLAYERS.map((p) => (
            <Link key={p.title} href={p.href} className="pm-card flex flex-col gap-3 p-6 transition hover:-translate-y-0.5 hover:shadow-pm-soft">
              <span className="pm-label">{p.badge}</span>
              <h3 className="text-lg font-bold text-pm-navy">{p.title}</h3>
              <p className="text-xs text-pm-muted">{p.description}</p>
              <span className="pm-btn pm-btn-primary mt-auto">{p.cta}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader
          title="What happens after you sign up?"
          description="A consistent activation flow for every player."
        />
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { n: 1, t: "Activate", d: "Tell us about your business, parish or sponsorship goals." },
            { n: 2, t: "Configure", d: "Add offers, products, services or campaigns." },
            { n: 3, t: "Approve", d: "Light review for trust, alignment and quality." },
            { n: 4, t: "Go Live", d: "Appear in stores, search results and parish pages." },
          ].map((s) => (
            <div key={s.n} className="pm-card p-5">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-pm-blue to-pm-cyan text-sm font-extrabold text-white">
                {s.n}
              </span>
              <h3 className="mt-3 text-base font-bold text-pm-navy">{s.t}</h3>
              <p className="mt-1 text-xs text-pm-muted">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}
