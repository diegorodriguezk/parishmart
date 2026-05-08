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

export const metadata = { title: "Local Business Onboarding · ParishMart" };

export default function LocalBusinessOnboardingPage() {
  return (
    <>
      <OnboardingHeader subtitle="Biz Supporter Activation" />

      <OnboardingLayout
        kicker="Biz Supporter onboarding"
        title={
          <>
            Grow your business with <span className="pm-gradient-text">purpose</span>
          </>
        }
        intro="Appear inside the ParishMart ecosystem, offer value to parishioners and support a cause or parish in your community."
        steps={[
          { n: 1, title: "Business Basics", description: "Business name, category, city and supported community." },
          { n: 2, title: "Create Offer", description: "Coupon, promotion or parishioner benefit." },
          { n: 3, title: "Preview Listing", description: "See how your card appears inside ParishMart." },
          { n: 4, title: "Activate", description: "Submit for review and go live." },
        ]}
        preview={
          <>
            <div className="pm-card overflow-hidden">
              <Photo kind="business" ratio="auto" rounded="rounded-none" className="h-32 !rounded-t-[24px] !rounded-b-none" />
              <div className="space-y-2 p-4">
                <span className="pm-avatar !h-9 !w-9 rounded-xl text-xs">MS</span>
                <p className="text-sm font-bold text-pm-navy">Maria's Studios</p>
                <p className="text-xs text-pm-muted">Photography services supporting Emmaus retreats and the SKD community.</p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {["Photography", "Weston", "Emmaus"].map((t) => (
                    <span key={t} className="pm-label">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="pm-card overflow-hidden">
              <div className="bg-gradient-to-br from-pm-blue to-pm-cyan p-4 text-white">
                <p className="text-xs uppercase tracking-wider opacity-80">Parishioner offer</p>
                <p className="mt-1 text-3xl font-extrabold">10% OFF</p>
                <p className="text-xs opacity-80">Featured</p>
              </div>
            </div>
            <div className="pm-dark-panel p-5">
              <p className="text-xs uppercase tracking-wider text-white/70">Estimated monthly visibility</p>
              <p className="mt-2 text-3xl font-extrabold">1.2K</p>
              <p className="text-xs text-white/70">Projected impressions from ParishMart listings, offers and community pages.</p>
            </div>
          </>
        }
      >
        <h2 className="text-2xl font-extrabold text-pm-navy">Business Basics</h2>
        <p className="mt-1 text-sm text-pm-muted">Start simple. You can complete advanced details later.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <FormField label="Business Name"><FormInput defaultValue="Maria's Studios" /></FormField>
          <FormField label="Category"><FormSelect options={["Photography", "Wellness", "Restaurants", "Real Estate", "Professional"]} /></FormField>
          <FormField label="City"><FormInput defaultValue="Weston, Florida" /></FormField>
          <FormField label="Supports"><FormSelect options={["Emmaus Men", "Emmaus Women", "Youth Ministry", "St Vincent de Paul"]} /></FormField>
        </div>
        <p className="mt-6 text-xs font-bold text-pm-navy">Parishioner offer</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {["10% Off", "Free Consultation", "$25 Credit", "Cash Back", "Custom Offer"].map((c, i) => (
            <span key={c} className="pm-chip" data-active={i === 0 ? "true" : undefined}>{c}</span>
          ))}
        </div>
        <p className="mt-6 text-xs font-bold text-pm-navy">Visibility plan</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {["Starter", "Featured", "Premium Placement"].map((c, i) => (
            <span key={c} className="pm-chip" data-active={i === 1 ? "true" : undefined}>{c}</span>
          ))}
        </div>
        <FormFooter primaryHref="/onboarding/success" />
      </OnboardingLayout>

      <MinimalFooter />
    </>
  );
}
