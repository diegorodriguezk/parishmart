import type { ReactNode } from "react";
import { ParishProfileProvider } from "@/components/onboarding/ParishProfileContext";

export default function ParishOnboardingLayout({ children }: { children: ReactNode }) {
  return <ParishProfileProvider>{children}</ParishProfileProvider>;
}
