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

export const metadata = { title: "Seller Onboarding · ParishMart" };

export default function SellerOnboardingPage() {
  return (
    <>
      <OnboardingHeader subtitle="Seller Activation" />

      <OnboardingLayout
        kicker="Seller onboarding"
        title={
          <>
            Sell with <span className="pm-gradient-text">purpose</span>
          </>
        }
        intro="Offer products or services that support a cause inside the ParishMart ecosystem."
        steps={[
          { n: 1, title: "Business Basics", description: "Name, category, city and supported community." },
          { n: 2, title: "Product / Service", description: "What you sell and how customers buy it." },
          { n: 3, title: "Cause Connection", description: "Link your sales to a cause or ministry." },
          { n: 4, title: "Activate", description: "Submit for review and go live." },
        ]}
        preview={
          <>
            <div className="pm-card overflow-hidden">
              <Photo kind="apparel" ratio="auto" rounded="rounded-none" className="h-32 !rounded-t-[24px] !rounded-b-none" />
              <div className="space-y-2 p-4">
                <span className="pm-avatar !h-9 !w-9 rounded-xl text-xs">SS</span>
                <p className="text-sm font-bold text-pm-navy">Sample Seller</p>
                <p className="text-xs text-pm-muted">Custom retreat apparel · Supports SKD</p>
              </div>
            </div>
            <div className="pm-dark-panel p-5">
              <p className="text-xs uppercase tracking-wider text-white/70">
                Estimated monthly orders
              </p>
              <p className="mt-2 text-3xl font-extrabold">42</p>
              <p className="text-xs text-white/70">Projected based on parish size and category.</p>
            </div>
          </>
        }
      >
        <h2 className="text-2xl font-extrabold text-pm-navy">Business Basics</h2>
        <p className="mt-1 text-sm text-pm-muted">Start simple. You can complete advanced details later.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <FormField label="Business Name"><FormInput defaultValue="Sample Seller" /></FormField>
          <FormField label="Category"><FormSelect options={["Apparel", "Religious Gifts", "Services", "Food"]} /></FormField>
          <FormField label="City"><FormInput defaultValue="Weston, Florida" /></FormField>
          <FormField label="Supports"><FormSelect options={["SKD Weston", "Emmaus", "Youth Ministry"]} /></FormField>
        </div>
        <p className="mt-6 text-xs font-bold text-pm-navy">Selling format</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {["Products", "Services", "Bundles", "Custom Offer"].map((c, i) => (
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
