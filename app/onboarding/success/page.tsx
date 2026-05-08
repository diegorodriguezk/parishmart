import Link from "next/link";
import { ActivationHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, DarkPanel } from "@/components/Sections";

export const metadata = { title: "Activation Submitted · ParishMart" };

export default function ActivationSuccessPage() {
  return (
    <>
      <ActivationHeader />

      <Section width="wide">
        <div className="pm-card relative grid gap-0 overflow-hidden lg:grid-cols-[1.4fr_1fr]">
          <Photo kind="house" ratio="auto" rounded="rounded-none" className="!rounded-none h-full min-h-[320px]" />
          <div className="absolute inset-0 -z-0 bg-gradient-to-r from-white/30 to-transparent lg:from-transparent lg:to-white/20" />
          <div className="relative space-y-4 p-7">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan text-2xl font-extrabold text-white">
              ✓
            </span>
            <span className="pm-label">Activation submitted</span>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-pm-navy md:text-5xl">
              Your profile is{" "}
              <span className="pm-gradient-text">almost live</span>
            </h1>
            <p className="text-sm text-pm-muted">
              Your ParishMart profile has been created and is now awaiting
              approval. You can preview it, complete optional details, and
              prepare to launch inside the ecosystem.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/local-businesses/profile" className="pm-btn pm-btn-primary">Preview Profile</Link>
              <Link href="/onboarding/local-business" className="pm-btn pm-btn-secondary">Complete Profile</Link>
              <Link href="/share-impact" className="pm-btn pm-btn-secondary">Invite Team</Link>
            </div>
          </div>
          <div className="absolute right-6 top-6 hidden w-72 lg:block">
            <div className="pm-card overflow-hidden">
              <div className="px-4 pt-4 text-xs font-bold text-pm-navy">Profile preview</div>
              <Photo kind="business" ratio="16/9" rounded="rounded-none" className="!rounded-none mt-3" />
              <div className="space-y-2 p-4">
                <span className="pm-avatar !h-9 !w-9 rounded-xl text-xs">MS</span>
                <p className="text-sm font-bold text-pm-navy">Maria's Studios</p>
                <p className="text-xs text-pm-muted">Local Biz Supporter · Weston, FL · Supports Emmaus</p>
                <div className="flex items-center justify-between rounded-2xl border border-pm-border bg-white p-2 text-xs">
                  <span className="text-pm-muted">Status</span>
                  <span className="font-bold text-pm-blue">Pending Approval</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section width="wide">
        <h2 className="text-2xl font-extrabold tracking-tight text-pm-navy">What happens next?</h2>
        <p className="mt-1 text-sm text-pm-muted">Keep the user confident, informed and moving forward.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-4">
          {[
            { n: 1, t: "Review", d: "ParishMart reviews the profile, offer and community connection." },
            { n: 2, t: "Complete", d: "Add logo, photos, bio, certificates, services or products later." },
            { n: 3, t: "Approve", d: "Once approved, your profile appears in the correct ParishMart category." },
            { n: 4, t: "Go Live", d: "Start receiving visibility, leads, bookings, sales or community support." },
          ].map((s) => (
            <div key={s.n} className="pm-card p-5">
              <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan text-white">{s.n}</span>
              <h3 className="mt-3 text-base font-bold text-pm-navy">{s.t}</h3>
              <p className="mt-1 text-xs text-pm-muted">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section width="wide">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="pm-card p-6">
            <h3 className="text-lg font-bold text-pm-navy">Recommended next steps</h3>
            <p className="mt-1 text-xs text-pm-muted">These can be completed now or later from your dashboard.</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { t: "Upload logo", d: "Make your card recognizable.", tag: "Optional" },
                { t: "Add photos", d: "Improve trust and conversion.", tag: "Recommended" },
                { t: "Add certificates / awards", d: "Build credibility.", tag: "Optional" },
                { t: "Add video intro", d: "Help users know your story.", tag: "Later" },
              ].map((s) => (
                <li key={s.t} className="flex items-start justify-between gap-3 rounded-2xl border border-pm-border bg-white p-3">
                  <div>
                    <p className="text-sm font-bold text-pm-navy">{s.t}</p>
                    <p className="text-xs text-pm-muted">{s.d}</p>
                  </div>
                  <span className="pm-label">{s.tag}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pm-card p-6">
            <h3 className="text-lg font-bold text-pm-navy">Approval timeline</h3>
            <p className="mt-1 text-xs text-pm-muted">A simple timeline helps avoid anxiety and confusion.</p>
            <ol className="mt-4 space-y-3">
              {[
                { t: "Profile created", d: "Your activation was submitted successfully." },
                { t: "ParishMart review", d: "Usually completed within 24–48 hours." },
                { t: "Approval notification", d: "You receive a confirmation when the profile is live." },
                { t: "Live ecosystem placement", d: "Your profile appears in category pages, search and related community pages." },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-3">
                  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold ${i === 0 ? "bg-gradient-to-br from-pm-blue to-pm-cyan text-white" : "border border-pm-border text-pm-blue"}`}>
                    {i === 0 ? "✓" : i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-pm-navy">{s.t}</p>
                    <p className="text-xs text-pm-muted">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section width="wide">
        <DarkPanel
          title="Keep building your presence"
          description="Profiles with complete visuals, clear offers and community story convert better."
          cta="Go to Dashboard"
          ctaHref="/dashboard"
          ctaSecondary="View Public Preview"
          ctaSecondaryHref="/local-businesses/profile"
        />
      </Section>

      <Footer />
    </>
  );
}
