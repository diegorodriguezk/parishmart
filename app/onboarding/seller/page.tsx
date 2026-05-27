import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import {
  SellerPreviewBody,
  SellerPreviewHero,
  PreviewLabel,
} from "@/components/onboarding/SellerPreviewCard";

export const metadata = { title: "Become a Local Biz Supporter · ParishMart" };

const VALUE_CARDS = [
  {
    title: "Trusted public profile",
    body: "A professional ParishMart page that helps families discover your services.",
  },
  {
    title: "Generate leads",
    body: "Receive requests, calls and bookings from parishioners and community members.",
  },
  {
    title: "Support a community",
    body: "Connect your business to a parish, ministry or cause and show it on your page.",
  },
  {
    title: "Step-by-step setup",
    body: "5 simple steps with live preview. Skip anything optional.",
  },
];

const TRUST_CARDS = [
  {
    kicker: "Service Categories",
    title: "Built for service businesses",
    body: "Wellness, real estate, insurance, legal, home services, and professional services.",
  },
  {
    kicker: "Founding Supporter",
    title: "Early supporter visibility",
    body: "Founding businesses get preferred placement during the initial launch phase.",
  },
  {
    kicker: "Concierge Model",
    title: "Done-with-you setup",
    body: "ParishMart helps finish, polish, approve and activate your business page.",
  },
];

const STEPS = [
  {
    n: 1,
    title: "Business Profile",
    body: "Name, service category, contact info, location and short description.",
    badge: "Required",
  },
  {
    n: 2,
    title: "Owner Story & Community",
    body: "Humanize the page with the owner story and the parish or cause you support.",
    badge: "Recommended",
  },
  {
    n: 3,
    title: "Services, Offer & CTA",
    body: "Add services you provide, a community offer and the main call to action.",
    badge: "Required",
  },
  {
    n: 4,
    title: "Media, Trust & Preview",
    body: "Upload logo, cover, owner photo, gallery, certifications and reviews.",
    badge: "Important",
  },
  {
    n: 5,
    title: "Select Membership Plan",
    body: "Starter, Community or Featured. Payment activates the page after approval.",
    badge: "Final",
  },
];

export default function LocalBizOnboardingIntro() {
  return (
    <main className="min-h-dvh bg-gradient-to-br from-white via-pm-soft to-white">
      <div className="mx-auto grid max-w-[1320px] gap-0 px-4 py-8 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:py-12">
        {/* LEFT */}
        <section className="flex flex-col lg:pr-8">
          <div className="mb-10 flex items-center justify-between gap-3">
            <Logo />
            <Link
              href="/contact-us"
              className="hidden rounded-full border border-pm-border bg-white px-3 py-2 text-xs font-extrabold text-pm-blue shadow-pm-soft hover:border-pm-blue sm:inline"
            >
              Need help? Book a 10-min setup call
            </Link>
          </div>

          <article className="rounded-[28px] border border-pm-border bg-white/85 p-6 shadow-pm-card backdrop-blur sm:p-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-pm-soft px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-pm-blue">
              <span className="h-2 w-2 rounded-full bg-pm-cyan shadow-[0_0_0_5px_rgba(69,177,225,.18)]" />
              Local Biz Services Onboarding · Step-by-step
            </span>
            <h1 className="mt-4 max-w-[640px] text-4xl font-extrabold leading-tight tracking-tight text-pm-navy md:text-5xl">
              Create your{" "}
              <span className="pm-gradient-text">service business page</span>{" "}
              in 5 simple steps.
            </h1>
            <p className="mt-4 max-w-[600px] text-sm text-pm-muted md:text-base">
              Build a trusted public profile, tell your story, show your
              services, support a parish or cause, and select your ParishMart
              membership plan.
            </p>

            <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {VALUE_CARDS.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-pm-border bg-pm-soft/50 p-4"
                >
                  <p className="text-sm font-extrabold text-pm-navy">
                    {v.title}
                  </p>
                  <p className="mt-1 text-xs text-pm-muted">{v.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-1">
              <Link
                href="/onboarding/seller/step-1"
                className="pm-btn pm-btn-primary inline-flex items-center gap-1.5"
              >
                Launch My Business Page
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <p className="max-w-sm text-xs text-pm-muted">
                Skip non-essential items and finish with ParishMart concierge
                support.
              </p>
            </div>
          </article>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {TRUST_CARDS.map((t) => (
              <div
                key={t.kicker}
                className="rounded-2xl border border-pm-border bg-white p-4 shadow-pm-soft"
              >
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-pm-blue">
                  {t.kicker}
                </p>
                <p className="mt-1.5 text-base font-extrabold text-pm-navy">
                  {t.title}
                </p>
                <p className="mt-1 text-xs text-pm-muted">{t.body}</p>
              </div>
            ))}
          </div>

          <article className="mt-6 rounded-[28px] border border-pm-border bg-white/85 p-6 shadow-pm-soft backdrop-blur sm:p-7">
            <div className="mb-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-pm-navy">
                  Simple 5-step activation
                </h2>
                <p className="mt-1 max-w-[470px] text-sm text-pm-muted">
                  The business answers simple questions while the page builds
                  itself. Skip anything optional.
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-700">
                Founding Supporter
              </span>
            </div>

            <ol className="grid gap-2.5">
              {STEPS.map((s) => (
                <li
                  key={s.n}
                  className="grid grid-cols-[40px_1fr_auto] items-center gap-3 rounded-2xl border border-pm-border bg-pm-soft/50 p-3.5"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-pm-soft text-sm font-extrabold text-pm-blue">
                    {s.n}
                  </span>
                  <div>
                    <p className="text-sm font-extrabold leading-tight text-pm-navy">
                      {s.title}
                    </p>
                    <p className="text-xs text-pm-muted">{s.body}</p>
                  </div>
                  <span className="rounded-full bg-pm-soft px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-pm-blue">
                    {s.badge}
                  </span>
                </li>
              ))}
            </ol>
          </article>
        </section>

        {/* RIGHT — preview */}
        <aside className="mt-6 flex items-start justify-center lg:mt-0 lg:items-center lg:pl-4">
          <div className="w-full max-w-[540px]">
            <div className="mb-3 flex items-center justify-between px-1">
              <span className="text-[11px] font-extrabold uppercase tracking-[.16em] text-pm-blue">
                Live Preview
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-pm-muted">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_5px_rgba(16,185,129,.15)]" />
                Updating live
              </span>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-pm-border bg-white shadow-pm-card">
              <SellerPreviewHero
                kind="business"
                initials="FD"
                title="Weston Family Dental"
                subtitle="Family dental care for Weston families · Supporting Saint Katharine Drexel Parish."
              />
              <SellerPreviewBody>
                <div className="flex flex-wrap gap-2">
                  {["Verified", "Family Owned", "Supports SKD"].map((b) => (
                    <span
                      key={b}
                      className="rounded-full bg-pm-soft px-2.5 py-1 text-[11px] font-extrabold text-pm-blue"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3 text-sm font-extrabold text-amber-700">
                  10% off first consultation
                </div>

                <div>
                  <PreviewLabel>Services</PreviewLabel>
                  <div className="mt-2 grid gap-2 text-xs font-extrabold text-pm-navy">
                    {[
                      "Family Dentistry",
                      "Emergency Dental Care",
                      "Cosmetic Dentistry",
                    ].map((s) => (
                      <span
                        key={s}
                        className="rounded-2xl border border-pm-border bg-pm-soft/60 p-2.5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-pm-border bg-pm-soft/40 p-4">
                  <PreviewLabel>Community Support</PreviewLabel>
                  <p className="mt-2 text-xs text-pm-muted">
                    This business supports Saint Katharine Drexel through its
                    ParishMart membership.
                  </p>
                </div>

                <span className="block rounded-full bg-pm-navy py-3 text-center text-sm font-extrabold text-white">
                  Request Information
                </span>
              </SellerPreviewBody>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
