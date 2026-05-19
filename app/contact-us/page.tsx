import Link from "next/link";
import {
  Mail,
  Handshake,
  LifeBuoy,
  PackageSearch,
  HelpCircle,
} from "lucide-react";

type IconProps = { className?: string };

function FacebookIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.6V4.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4v2.4H7.6V14h2.7v8h3.2z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM3.25 8.5h3.5V20h-3.5V8.5zM9.5 8.5H13v1.7h.05c.49-.85 1.7-1.95 3.5-1.95 3.74 0 4.45 2.36 4.45 5.43V20h-3.5v-5.3c0-1.27-.02-2.9-1.78-2.9-1.78 0-2.05 1.36-2.05 2.8V20H9.5V8.5z" />
    </svg>
  );
}
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader, DarkPanel } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = {
  title: "Contact Us · ParishMart",
  description:
    "Reach the ParishMart team. Get help with your account, orders or partnerships — or follow us on social media.",
};

const CHANNELS = [
  {
    Icon: Mail,
    title: "Customer Support",
    description:
      "Questions about your order, account, returns or anything that needs a human.",
    cta: "support@parishmart.com",
    href: "mailto:support@parishmart.com",
  },
  {
    Icon: Handshake,
    title: "Partnerships & Sponsorships",
    description:
      "Talk to us about parish onboarding, diocese deployments or becoming a sponsor.",
    cta: "info@parishmart.com",
    href: "mailto:info@parishmart.com",
  },
];

const INQUIRIES = [
  "Parish inquiries",
  "Cause / Ministry launches",
  "Diocese deployments",
  "Seller & business partnerships",
  "Sponsor opportunities",
  "Strategic partnerships",
  "Customer support",
  "Returns & order assistance",
  "Technical support",
];

const SOCIAL = [
  {
    Icon: FacebookIcon,
    label: "Facebook",
    handle: "@myparishmart",
    href: "https://www.facebook.com/myparishmart",
  },
  {
    Icon: InstagramIcon,
    label: "Instagram",
    handle: "@myparishmart",
    href: "https://www.instagram.com/myparishmart",
  },
  {
    Icon: LinkedinIcon,
    label: "LinkedIn",
    handle: "/parishmart",
    href: "https://www.linkedin.com/company/parishmart/",
  },
];

const QUICK_LINKS = [
  {
    Icon: PackageSearch,
    title: "Track an order",
    description: "Check the status of a recent purchase.",
    href: "https://shop.parishmart.com/orders/tracking",
    external: true,
  },
  {
    Icon: HelpCircle,
    title: "FAQs",
    description: "Answers to the most common questions from shoppers and parishes.",
    href: "https://shop.parishmart.com/faqs",
    external: true,
  },
  {
    Icon: LifeBuoy,
    title: "Help Center",
    description: "Browse guides for shoppers, sellers and parish stores.",
    href: "/how-it-works",
    external: false,
  },
];

export default function ContactUsPage() {
  return (
    <>
      <Header />

      <Section width="wide" className="!py-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
      </Section>

      {/* HERO */}
      <Section width="wide" className="!pt-2">
        <div className="pm-card overflow-hidden p-6 sm:p-10">
          <span className="pm-kicker">Contact Us</span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-pm-navy md:text-4xl">
            We&rsquo;re here to help — let&rsquo;s start a conversation.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-pm-muted md:text-base">
            Whether you&rsquo;re a shopper, a parish, a seller or a future partner,
            the ParishMart team would love to hear from you. Pick the channel that
            fits best and we&rsquo;ll get back to you as soon as we can.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="mailto:support@parishmart.com"
              className="pm-btn pm-btn-primary"
            >
              Email Support
            </a>
            <a
              href="mailto:info@parishmart.com"
              className="pm-btn pm-btn-secondary"
            >
              Partnership Inquiries
            </a>
          </div>
        </div>
      </Section>

      {/* CHANNELS */}
      <Section width="wide">
        <SectionHeader
          title="Get in touch"
          description="Two simple ways to reach the team — pick the inbox that matches your question."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {CHANNELS.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="pm-card group flex flex-col gap-3 p-6 transition hover:-translate-y-0.5 hover:shadow-pm-soft"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan text-white shadow-pm-soft">
                <c.Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-lg font-extrabold text-pm-navy">{c.title}</h3>
              <p className="text-sm text-pm-muted">{c.description}</p>
              <span className="mt-2 text-sm font-bold text-pm-blue group-hover:text-pm-navy">
                {c.cta} →
              </span>
            </a>
          ))}
        </div>
      </Section>

      {/* INQUIRY TYPES */}
      <Section width="wide">
        <SectionHeader
          title="What can we help with?"
          description="ParishMart supports a wide ecosystem — every inquiry below routes to the right team."
        />
        <div className="pm-card p-6 sm:p-8">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {INQUIRIES.map((i) => (
              <li
                key={i}
                className="flex items-center gap-3 rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm font-medium text-pm-ink"
              >
                <span className="h-2 w-2 rounded-full bg-pm-blue" aria-hidden />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* QUICK LINKS */}
      <Section width="wide">
        <SectionHeader
          title="Self-service & resources"
          description="Looking for something quick? These links may save you a message."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {QUICK_LINKS.map((q) =>
            q.external ? (
              <a
                key={q.title}
                href={q.href}
                target="_blank"
                rel="noreferrer"
                className="pm-card group flex flex-col gap-3 p-5 transition hover:-translate-y-0.5 hover:shadow-pm-soft"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-pm-soft text-pm-blue">
                  <q.Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-extrabold text-pm-navy">
                  {q.title}
                </h3>
                <p className="text-xs text-pm-muted">{q.description}</p>
                <span className="mt-1 text-xs font-bold text-pm-blue group-hover:text-pm-navy">
                  Open →
                </span>
              </a>
            ) : (
              <Link
                key={q.title}
                href={q.href}
                className="pm-card group flex flex-col gap-3 p-5 transition hover:-translate-y-0.5 hover:shadow-pm-soft"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-pm-soft text-pm-blue">
                  <q.Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-extrabold text-pm-navy">
                  {q.title}
                </h3>
                <p className="text-xs text-pm-muted">{q.description}</p>
                <span className="mt-1 text-xs font-bold text-pm-blue group-hover:text-pm-navy">
                  Explore →
                </span>
              </Link>
            ),
          )}
        </div>
      </Section>

      {/* SOCIAL */}
      <Section width="wide">
        <SectionHeader
          title="Follow ParishMart"
          description="Join the conversation and stay up to date with new parishes, causes and stories."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="pm-card group flex items-center gap-4 p-5 transition hover:-translate-y-0.5 hover:shadow-pm-soft"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-pm-navy text-white">
                <s.Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-extrabold text-pm-navy">
                  {s.label}
                </span>
                <span className="text-xs text-pm-muted group-hover:text-pm-blue">
                  {s.handle}
                </span>
              </span>
            </a>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section width="wide">
        <DarkPanel
          title="Still have a question? We&rsquo;d love to help."
          description="Send us a note and our team will reach out as soon as we can."
          cta="Email Support"
          ctaHref="mailto:support@parishmart.com"
          ctaSecondary="Partnership Inquiries"
          ctaSecondaryHref="mailto:info@parishmart.com"
        />
      </Section>

      <Footer />
    </>
  );
}
