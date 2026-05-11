import { OnboardingHeader } from "@/components/Header";
import { MinimalFooter } from "@/components/MinimalFooter";
import { SellerOnboardingForm } from "@/components/onboarding/SellerOnboardingForm";

export const metadata = { title: "Seller Onboarding · ParishMart" };

export default function SellerOnboardingPage() {
  return (
    <>
      <OnboardingHeader subtitle="Seller Activation" />
      <SellerOnboardingForm />
      <MinimalFooter />
    </>
  );
}
