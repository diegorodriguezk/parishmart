import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, SectionHeader } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CollapsibleSection } from "@/components/Collapsible";
import { SponsorOfferCard } from "@/components/Cards";

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

      {/* MAIN LAYOUT — left photo, right details */}
      <Section width="wide" className="!pt-2">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-start">

          {/* LEFT — Photo */}
          <div className="pm-card overflow-hidden p-3">
            <Photo
              kind="business"
              ratio="4/3"
              rounded="rounded-2xl"
              overlay="subtle"
            />
          </div>

          {/* RIGHT — Offer details */}
          <div className="flex flex-col gap-5">
            {/* Company identity */}
            <div className="flex items-center gap-3">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan text-base font-extrabold text-white shadow-pm-soft">
                CH
              </span>
              <div>
                <h1 className="text-xl font-extrabold tracking-tight text-pm-navy">
                  Cleveland Hospital
                </h1>
                <p className="text-[11px] text-pm-muted">
                  Healthcare partner · Mission-aligned sponsor
                </p>
                <div className="mt-1 flex items-center gap-1 text-[11px] text-pm-muted">
                  <MapPin className="h-3 w-3" aria-hidden />
                  Weston, FL · SKD Parish Partner
                </div>
              </div>
            </div>

            {/* Offer pill + headline */}
            <div>
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-pm-blue to-pm-cyan px-4 py-1.5 text-sm font-bold text-white">
                $100 health credit
              </span>
              <p className="mt-3 text-sm text-pm-muted">
                Exclusive wellness benefit available to all SKD parishioners.
                Use toward health screenings, consultations or community
                wellness events hosted by Cleveland Hospital.
              </p>
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap gap-3 text-[11px] text-pm-muted">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" aria-hidden />
                30 days left
              </span>
              <span className="rounded-full border border-pm-border px-2.5 py-0.5">
                Healthcare
              </span>
              <span className="rounded-full border border-pm-border px-2.5 py-0.5">
                SKD Parishioners
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://example.com/offer"
                target="_blank"
                rel="noreferrer"
                className="pm-btn pm-btn-primary"
              >
                Redeem Offer
              </a>
              <Link href="/share-impact" className="pm-btn pm-btn-secondary">
                Share offer
              </Link>
            </div>

            {/* Supports row */}
            <div className="flex items-center gap-2 rounded-2xl border border-pm-border bg-pm-soft/60 px-3 py-2.5">
              <div className="flex flex-1 flex-col">
                <span className="text-[11px] font-bold text-pm-navy">Supports SKD</span>
                <span className="text-[10px] text-pm-muted">Saint Katharine Drexel · Weston, FL</span>
              </div>
              <span className="rounded-full bg-pm-blue px-2.5 py-0.5 text-[10px] font-bold text-white">
                Premium sponsor
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* COLLAPSIBLE SECTIONS */}
      <Section width="wide" className="!pt-2">
        <div className="pm-card divide-y divide-pm-border px-6">
          <CollapsibleSection title="About the company" defaultOpen>
            <p>
              Cleveland Hospital is a leading healthcare provider in South
              Florida, committed to serving faith-based communities. As a
              ParishMart sponsor, they offer free wellness screenings, priority
              appointments and community health days for SKD parishioners and
              their families.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="About the offer">
            <p>
              The $100 health credit applies to any wellness service at
              Cleveland Hospital facilities including preventive screenings,
              nutritional consultations, and community health events. Credit
              must be redeemed within 30 days of activation. One per
              parishioner household.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Terms and conditions">
            <ul className="list-disc pl-4 space-y-1">
              <li>Valid for active SKD parishioners only.</li>
              <li>One redemption per household.</li>
              <li>Cannot be combined with other offers or insurance credits.</li>
              <li>Expires 30 days from the date of redemption.</li>
              <li>Subject to availability of services.</li>
            </ul>
          </CollapsibleSection>
        </div>
      </Section>

      {/* RELATED SPONSOR OFFERS */}
      <Section width="wide">
        <SectionHeader
          title="More sponsor offers"
          description="Other businesses supporting your parish community."
          right={<Link href="/sponsors" className="font-bold text-pm-blue">View all →</Link>}
        />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <SponsorOfferCard photo="retreat" initials="MS" title="Maria's Studios" offer="10% cash back" daysLeft="40d left" />
          <SponsorOfferCard photo="house" initials="BK" title="Community Bank" offer="$50 cash back" daysLeft="32d left" />
          <SponsorOfferCard photo="food" initials="BG" title="Baires Grill" offer="5% cash back" daysLeft="18d left" />
          <SponsorOfferCard photo="merch" initials="PM" title="Pretzelmaker" offer="10% cash back" daysLeft="24d left" isNew />
        </div>
      </Section>

      <Footer />
    </>
  );
}
