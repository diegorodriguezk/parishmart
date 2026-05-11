import { OnboardingHeader } from "@/components/Header";
import { MinimalFooter } from "@/components/MinimalFooter";
import { ParishOnboardingForm } from "@/components/onboarding/ParishOnboardingForm";

export const metadata = { title: "Parish / Cause Activation · ParishMart" };

export default function ParishOnboardingPage() {
  return (
    <>
      <OnboardingHeader subtitle="Parish / Cause Activation" />
      <ParishOnboardingForm />
      <MinimalFooter />
    </>
  );
}
