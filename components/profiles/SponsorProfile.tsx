import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { Photo } from "@/components/Photo";
import { Section } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CollapsibleSection } from "@/components/Collapsible";
import type { Sponsor } from "@/lib/catalog";

function safeHref(url?: string): string | undefined {
  if (!url) return undefined;
  const withScheme = /^https?:\/\//i.test(url) ? url : `https://${url}`;
  try {
    const u = new URL(withScheme);
    return u.protocol === "http:" || u.protocol === "https:" ? withScheme : undefined;
  } catch {
    return undefined;
  }
}

export function SponsorProfile({ sponsor }: { sponsor: Sponsor }) {
  return (
    <>
      <Section width="wide" className="!py-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Sponsor Offers", href: "/sponsors" },
            { label: sponsor.name },
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

          {/* RIGHT — Offer details wrapped in pm-card */}
          <div className="pm-card flex flex-col gap-5 p-6">
            {/* Company identity */}
            <div className="flex items-center gap-3">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan text-base font-extrabold text-white shadow-pm-soft">
                {sponsor.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
              </span>
              <div>
                <h1 className="text-xl font-extrabold tracking-tight text-pm-navy">
                  {sponsor.name}
                </h1>
                <p className="text-[11px] text-pm-muted">
                  {sponsor.category} partner · Mission-aligned sponsor
                </p>
                <div className="mt-1 flex items-center gap-1 text-[11px] text-pm-muted">
                  <MapPin className="h-3 w-3" aria-hidden />
                  {sponsor.location} · SKD Parish Partner
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-pm-muted">
              {sponsor.description}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap gap-3 text-[11px] text-pm-muted">
              {sponsor.offerDaysLeft && (
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" aria-hidden />
                  {sponsor.offerDaysLeft}
                </span>
              )}
              <span className="rounded-full border border-pm-border px-2.5 py-0.5">
                {sponsor.category}
              </span>
              <span className="rounded-full border border-pm-border px-2.5 py-0.5">
                SKD Parishioners
              </span>
            </div>

            {/* Offer — full-width prominent block before CTAs */}
            {sponsor.offer && (
              <div className="w-full rounded-2xl px-6 py-4" style={{ backgroundColor: "#006699" }}>
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/75">
                  Featured Sponsor Benefit
                </p>
                <p className="mt-1 text-2xl font-extrabold text-white">{sponsor.offer}</p>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href={safeHref(sponsor.website) ?? "https://example.com"}
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
          </div>
        </div>
      </Section>

      {/* COLLAPSIBLE SECTIONS */}
      <Section width="wide" className="!pt-2">
        <div className="pm-card divide-y divide-pm-border px-6">
          <CollapsibleSection title="About the company" defaultOpen>
            <p>
              {sponsor.description}
            </p>
          </CollapsibleSection>

          {sponsor.offer && (
            <CollapsibleSection title="About the offer">
              <p>
                The {sponsor.offer} applies to any wellness service at{" "}
                {sponsor.name} facilities. Credit must be redeemed within{" "}
                {sponsor.offerDaysLeft ?? "30 days"} of activation. One per
                parishioner household.
              </p>
            </CollapsibleSection>
          )}

          <CollapsibleSection title="Terms and conditions">
            <ul className="list-disc pl-4 space-y-1">
              <li>Valid for active SKD parishioners only.</li>
              <li>One redemption per household.</li>
              <li>Cannot be combined with other offers or insurance credits.</li>
              <li>Expires {sponsor.offerDaysLeft ?? "30 days"} from the date of redemption.</li>
              <li>Subject to availability of services.</li>
            </ul>
          </CollapsibleSection>
        </div>
      </Section>

      {/* Related sponsors: wire when relatedSponsors prop is available */}
    </>
  );
}
