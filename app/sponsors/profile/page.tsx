import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, SectionHeader, DarkPanel } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CollapsibleDescription } from "@/components/Collapsible";

export const metadata = { title: "Cleveland Hospital · Sponsor Profile" };

export default function SponsorProfilePage() {
  return (
    <>
      <Header />

      <Section width="wide" className="!py-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Sponsor Offers", href: "/sponsors" },
            { label: "Cleveland Hospital" },
          ]}
        />
      </Section>

      <Section width="wide" className="!pt-2">
        <div className="pm-card grid gap-0 overflow-hidden lg:grid-cols-[1.05fr_.95fr]">
          <Photo
            kind="business"
            ratio="auto"
            rounded="rounded-none"
            className="!rounded-none h-full min-h-[320px]"
          />
          <div className="space-y-4 p-7">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan text-sm font-extrabold text-white shadow-pm-soft">
                CH
              </span>
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-pm-navy">
                  Cleveland Hospital
                </h1>
                <p className="text-xs text-pm-muted">
                  Healthcare partner · Mission-aligned sponsor
                </p>
              </div>
            </div>
            <CollapsibleDescription
              text="Sponsor landing page with offer, community commitment and CTA. Cleveland Hospital supports SKD parishioners with health screenings, wellness programs and community events. Active across two SKD ministries with featured premium banner placement and quarterly community days."
              previewLines={2}
            />
            <div className="rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan p-4 text-white">
              <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">
                Featured sponsor benefit
              </p>
              <p className="text-2xl font-extrabold">$100 health credit</p>
              <p className="text-xs opacity-90">
                Available for SKD parishioners.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://example.com/offer"
                className="pm-btn pm-btn-primary"
              >
                Redeem Offer
              </a>
              <Link href="/share-impact" className="pm-btn pm-btn-secondary">
                Share offer
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section width="wide">
        <SectionHeader
          title="Sponsor commitment"
          description="What this sponsor supports across the parish ecosystem."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              l: "Causes supported",
              t: "Youth Ministry, Wellness",
              d: "Active across two SKD ministries.",
            },
            {
              l: "Visibility",
              t: "Premium banner",
              d: "Featured at the top of Sponsor Offers.",
            },
            {
              l: "Reach",
              t: "1,200+ parishioners",
              d: "Estimated monthly impressions.",
            },
          ].map((c) => (
            <div key={c.l} className="pm-card p-5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                {c.l}
              </p>
              <p className="mt-1 text-base font-bold text-pm-navy">{c.t}</p>
              <p className="text-xs text-pm-muted">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section width="wide">
        <DarkPanel
          title="Want your sponsor placement here?"
          description="Become a featured sponsor and own the premium banner across SKD."
          cta="Become a Sponsor"
          ctaHref="/onboarding/sponsor"
        />
      </Section>

      <Footer />
    </>
  );
}
