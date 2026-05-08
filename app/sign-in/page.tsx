import Link from "next/link";
import { Section } from "@/components/Sections";
import { Footer } from "@/components/Footer";

export const metadata = { title: "Sign in · ParishMart" };

export default function SignInPage() {
  return (
    <>
      <header className="border-b border-pm-border/70 bg-white">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-pm-blue to-pm-cyan font-extrabold text-white shadow-pm-soft">
              P
            </span>
            <span className="text-lg font-extrabold tracking-tight text-pm-navy">
              ParishMart
            </span>
          </Link>
          <Link href="/" className="text-sm font-semibold text-pm-muted hover:text-pm-navy">
            Back to home
          </Link>
        </div>
      </header>

      <Section className="!max-w-md !py-16">
        <h1 className="text-3xl font-extrabold tracking-tight text-pm-navy md:text-4xl">
          Sign in to <span className="pm-gradient-text">ParishMart</span>
        </h1>
        <p className="mt-3 text-sm text-pm-muted">
          Access your parish, store, donations and dashboards.
        </p>

        <form
          className="mt-6 space-y-4"
          action="/dashboard"
          method="get"
        >
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-bold text-pm-navy">Email</span>
            <input
              type="email"
              required
              placeholder="you@parish.org"
              className="rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm shadow-pm-soft focus:border-pm-blue focus:outline-none"
            />
          </label>
          <button type="submit" className="pm-btn pm-btn-primary w-full">
            Send magic link
          </button>
          <div className="flex items-center gap-3 text-xs text-pm-muted">
            <span className="h-px flex-1 bg-pm-border" />
            <span>or</span>
            <span className="h-px flex-1 bg-pm-border" />
          </div>
          <button type="button" className="pm-btn pm-btn-secondary w-full">
            Continue with Google
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-pm-muted">
          New to ParishMart?{" "}
          <Link href="/onboarding" className="font-bold text-pm-blue">
            Join the ecosystem
          </Link>
        </p>
      </Section>

      <Footer />
    </>
  );
}
