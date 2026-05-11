import { OnboardingHeader } from "@/components/Header";
import { MinimalFooter } from "@/components/MinimalFooter";
import { SponsorOnboardingForm } from "@/components/onboarding/SponsorOnboardingForm";

export const metadata = { title: "Sponsor Onboarding · ParishMart" };

export default function SponsorOnboardingPage() {
  return (
    <>
      <OnboardingHeader subtitle="Sponsor Activation" />
      <SponsorOnboardingForm />
      <MinimalFooter />
    </>
  );
}
