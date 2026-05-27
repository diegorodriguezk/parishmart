import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader } from "@/components/Sections";
import { OnboardingChooser } from "@/components/onboarding/OnboardingChooser";

export const metadata = { title: "Join the ParishMart Ecosystem" };

export default function JoinEcosystemPage() {
  return (
    <>
      <Header />

      <Section width="wide" className="!pt-14 !pb-0">
        <OnboardingChooser />
      </Section>

      <Section width="wide" className="!pt-20">
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
