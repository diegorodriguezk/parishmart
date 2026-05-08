import { OnboardingHeader } from "@/components/Header";
import { MinimalFooter } from "@/components/MinimalFooter";
import { Photo } from "@/components/Photo";
import {
  OnboardingLayout,
  FormField,
  FormInput,
  FormSelect,
  FormFooter,
} from "@/components/OnboardingLayout";

export const metadata = { title: "Parish / Cause Activation · ParishMart" };

export default function ParishOnboardingPage() {
  return (
    <>
      <OnboardingHeader subtitle="Parish / Cause Activation" />

      <OnboardingLayout
        kicker="Parish / Cause onboarding"
        title={
          <>
            Activate your <span className="pm-gradient-text">community page</span>
          </>
        }
        intro="Create a parish, ministry or cause presence where supporters can shop, give, sponsor, share and grow community impact."
        steps={[
          { n: 1, title: "Community Basics", description: "Name, type, city and parish/cause identity." },
          { n: 2, title: "Select Modules", description: "Shop, Give, Sponsors, Ministries or Local Biz." },
          { n: 3, title: "Preview Page", description: "See the parish or cause experience before launch." },
          { n: 4, title: "Activate", description: "Submit for approval and complete advanced setup later." },
        ]}
        preview={
          <>
            <div className="pm-card overflow-hidden">
              <Photo kind="people" ratio="auto" rounded="rounded-none" className="h-32 !rounded-t-[24px] !rounded-b-none" />
              <div className="space-y-2 p-4">
                <span className="pm-avatar !h-9 !w-9 rounded-xl text-xs">EM</span>
                <p className="text-sm font-bold text-pm-navy">Emmaus SKD Weston</p>
                <p className="text-xs text-pm-muted">A retreat community supporting faith, friendship and service through giving, merch and sponsors.</p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {["Giving", "Merch", "Local Biz"].map((t) => (
                    <span key={t} className="pm-label">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="pm-dark-panel p-5">
              <p className="text-xs uppercase tracking-wider text-white/70">Projected monthly impact</p>
              <p className="mt-2 text-3xl font-extrabold">$1.8K</p>
              <p className="text-xs text-white/70">Estimated support through giving, merch purchases and local sponsor participation.</p>
            </div>
            <div className="pm-card p-5">
              <p className="text-sm font-bold text-pm-navy">What appears after approval?</p>
              <ul className="mt-3 space-y-2 text-xs text-pm-muted">
                {["Cause / ministry page", "Giving campaigns", "Merch and product cards", "Impact dashboard"].map((t) => (
                  <li key={t} className="rounded-2xl border border-pm-border bg-white p-2.5 text-pm-ink">{t}</li>
                ))}
              </ul>
            </div>
          </>
        }
      >
        <h2 className="text-2xl font-extrabold text-pm-navy">Community Basics</h2>
        <p className="mt-1 text-sm text-pm-muted">Start with identity and purpose. Donation/payment setup can be completed later.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <FormField label="Community / Cause Name"><FormInput defaultValue="Emmaus SKD Weston" /></FormField>
          <FormField label="Type"><FormSelect options={["Ministry / Cause", "Parish", "Retreat", "Mission"]} /></FormField>
          <FormField label="City / Parish"><FormInput defaultValue="Weston, Florida · SKD" /></FormField>
          <FormField label="Main Goal"><FormSelect options={["Support retreat scholarships", "Fund youth ministry", "Grow community visibility"]} /></FormField>
        </div>

        <p className="mt-7 text-xs font-bold text-pm-navy">Experience modules</p>
        <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3">
          {[
            { l: "Shop", t: "Merch Store", d: "Products and retreat merch.", on: true },
            { l: "Give", t: "Giving Campaigns", d: "Campaigns and impact goals.", on: true },
            { l: "Sponsors", t: "Sponsor Offers", d: "Local sponsors and offers." },
            { l: "Community", t: "Local Biz", d: "Businesses supporting the cause.", on: true },
            { l: "Story", t: "Testimonials", d: "Photos, videos and reviews." },
            { l: "Share", t: "Impact Sharing", d: "Viral share cards." },
          ].map((m) => (
            <div key={m.t} className={`rounded-2xl p-4 ${m.on ? "border-2 border-pm-blue bg-pm-soft" : "border border-pm-border bg-white"}`}>
              <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">{m.l}</p>
              <p className="mt-1 text-sm font-extrabold text-pm-navy">{m.t}</p>
              <p className="text-[11px] text-pm-muted">{m.d}</p>
            </div>
          ))}
        </div>

        <p className="mt-7 text-xs font-bold text-pm-navy">Primary call to action</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {["Give with Love", "Shop with Purpose", "Sponsor This Cause", "Share the Impact"].map((c, i) => (
            <span key={c} className="pm-chip" data-active={i === 0 ? "true" : undefined}>{c}</span>
          ))}
        </div>

        <FormFooter primaryHref="/onboarding/success" />
      </OnboardingLayout>

      <MinimalFooter />
    </>
  );
}
