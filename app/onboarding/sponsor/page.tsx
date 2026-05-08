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

export const metadata = { title: "Sponsor Onboarding · ParishMart" };

export default function SponsorOnboardingPage() {
  return (
    <>
      <OnboardingHeader subtitle="Sponsor Activation" />

      <OnboardingLayout
        kicker="Sponsor onboarding"
        title={
          <>
            Grow community visibility with <span className="pm-gradient-text">purpose</span>
          </>
        }
        intro="Reach parish communities through featured banners and parishioner offers while supporting causes that matter."
        steps={[
          { n: 1, title: "Sponsor Basics", description: "Brand info, category and parish focus." },
          { n: 2, title: "Banner & Offer", description: "Premium banner, offer details and goal." },
          { n: 3, title: "Preview Placement", description: "See how the sponsor placement looks." },
          { n: 4, title: "Activate", description: "Submit for review and go live." },
        ]}
        preview={
          <>
            <div className="pm-card overflow-hidden">
              <Photo kind="business" ratio="auto" rounded="rounded-none" className="h-32 !rounded-t-[24px] !rounded-b-none" />
              <div className="space-y-2 p-4">
                <span className="pm-avatar !h-9 !w-9 rounded-xl text-xs">CH</span>
                <p className="text-sm font-bold text-pm-navy">Cleveland Hospital</p>
                <p className="text-xs text-pm-muted">Healthcare partner supporting wellness and parish families.</p>
              </div>
            </div>
            <div className="pm-dark-panel p-5">
              <p className="text-xs uppercase tracking-wider text-white/70">Estimated quarterly reach</p>
              <p className="mt-2 text-3xl font-extrabold">12K</p>
              <p className="text-xs text-white/70">Projected impressions across SKD and partner parishes.</p>
            </div>
          </>
        }
      >
        <h2 className="text-2xl font-extrabold text-pm-navy">Sponsor Basics</h2>
        <p className="mt-1 text-sm text-pm-muted">Tell us about your brand and how you want to show up inside ParishMart.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <FormField label="Brand Name"><FormInput defaultValue="Cleveland Hospital" /></FormField>
          <FormField label="Category"><FormSelect options={["Healthcare", "Financial Services", "Education", "Family Services"]} /></FormField>
          <FormField label="Parish Focus"><FormSelect options={["SKD Weston", "Emmaus", "FACE", "Casa Manresa"]} /></FormField>
          <FormField label="Goal"><FormSelect options={["Brand awareness", "Parishioner offers", "Community programs"]} /></FormField>
        </div>
        <p className="mt-6 text-xs font-bold text-pm-navy">Banner placement</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {["Premium Banner", "Featured Card", "Standard Listing"].map((c, i) => (
            <span key={c} className="pm-chip" data-active={i === 0 ? "true" : undefined}>{c}</span>
          ))}
        </div>
        <p className="mt-6 text-xs font-bold text-pm-navy">Offer type</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {["Cash Back", "Discount", "Free Service Credit", "Bundled Package"].map((c, i) => (
            <span key={c} className="pm-chip" data-active={i === 0 ? "true" : undefined}>{c}</span>
          ))}
        </div>
        <FormFooter primaryHref="/onboarding/success" primary="Submit Sponsor Request" />
      </OnboardingLayout>

      <MinimalFooter />
    </>
  );
}
