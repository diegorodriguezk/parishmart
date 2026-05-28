import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Logo } from "@/components/Logo";

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
      <div className="mx-auto max-w-[1320px] px-4 py-8 sm:px-6 lg:py-12">
        {/* Top bar */}
        <div className="mb-8 flex items-center justify-between gap-3">
          <Logo />
          <Link
            href="/contact-us"
            className="hidden rounded-full border border-pm-border bg-white px-3 py-2 text-xs font-extrabold text-pm-blue shadow-pm-soft hover:border-pm-blue sm:inline"
          >
            Need help? Book a 10-min setup call
          </Link>
        </div>

        {/* AI-FIRST BANNER */}
        <section className="overflow-hidden rounded-[28px] border border-pm-border bg-gradient-to-br from-white via-pm-soft to-white shadow-pm-card">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-10 lg:p-10">
            {/* Left — copy & CTAs */}
            <div className="flex flex-col gap-5">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-pm-soft px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[.18em] text-pm-blue">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                AI-First Assisted Form
              </span>
              <h1 className="max-w-[540px] text-4xl font-extrabold leading-[1.05] tracking-tight text-pm-navy md:text-5xl">
                Set up your seller profile without feeling like you are filling
                a CRM.
              </h1>
              <p className="max-w-[520px] text-sm text-pm-muted md:text-base">
                Instead of forcing users to choose between &ldquo;AI&rdquo; and
                &ldquo;Manual,&rdquo; the Concierge guides them naturally while
                the form stays visible, editable and under their control.
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <Link
                  href="/onboarding/seller/step-1"
                  className="pm-btn pm-btn-dark inline-flex items-center gap-1.5"
                >
                  Start with Concierge
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/onboarding/seller/step-1"
                  className="pm-btn pm-btn-secondary"
                >
                  Prefer manual setup
                </Link>
              </div>
              <p className="text-[11px] text-pm-muted">
                <span className="font-extrabold text-pm-navy">
                  Recommended default:
                </span>{" "}
                AI assistance on by default. Manual remains available as a
                secondary path.
              </p>
            </div>

            {/* Right — AI assistant card */}
            <div className="rounded-3xl border border-pm-border bg-white/90 p-5 shadow-pm-soft backdrop-blur sm:p-6">
              <div className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-pm-cyan to-pm-blue text-white shadow-[0_18px_40px_rgba(5,126,162,.25)]">
                <Sparkles className="h-6 w-6" aria-hidden />
              </div>
              <p className="text-lg font-extrabold tracking-tight text-pm-navy">
                Hi, I&rsquo;ll help you set up your store.
              </p>
              <div className="mt-4 rounded-2xl border border-pm-border bg-pm-soft/60 p-3.5 text-xs leading-relaxed text-pm-muted">
                You can answer by typing, speaking, or editing the form
                directly. I&rsquo;ll suggest your category, description and
                preview.
              </div>
              <div className="mt-4 rounded-2xl border border-pm-border bg-white p-3.5">
                <p className="text-xs font-extrabold text-pm-navy">
                  First question:
                </p>
                <p className="mt-1 text-sm text-pm-muted">
                  What is the name of your business?
                </p>
              </div>
              <div className="mt-4">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-pm-soft">
                  <div className="h-full w-[20%] rounded-full bg-gradient-to-r from-pm-blue to-pm-cyan" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value cards */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_CARDS.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-pm-border bg-white p-4 shadow-pm-soft"
            >
              <p className="text-sm font-extrabold text-pm-navy">{v.title}</p>
              <p className="mt-1 text-xs text-pm-muted">{v.body}</p>
            </div>
          ))}
        </div>

        {/* Trust strip */}
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

        {/* Flow card */}
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
      </div>
    </main>
  );
}
