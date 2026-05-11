import { OnboardingHeader } from "@/components/Header";
import { MinimalFooter } from "@/components/MinimalFooter";
import { LocalBusinessOnboardingForm } from "@/components/onboarding/LocalBusinessOnboardingForm";

export const metadata = { title: "Local Business Onboarding · ParishMart" };

export default function LocalBusinessOnboardingPage() {
  return (
    <>
      <OnboardingHeader subtitle="Biz Supporter Activation" />
      <LocalBusinessOnboardingForm />
      <MinimalFooter />
    </>
  );
}
