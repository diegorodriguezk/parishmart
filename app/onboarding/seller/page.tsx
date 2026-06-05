import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Logo } from "@/components/Logo";

export const metadata = { title: "Become a Local Biz Supporter · ParishMart" };

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
                  href="/onboarding/local-business-combined"
                  className="pm-btn pm-btn-dark inline-flex items-center gap-1.5"
                >
                  Start with Concierge
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/onboarding/local-business-combined"
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

      </div>
    </main>
  );
}
