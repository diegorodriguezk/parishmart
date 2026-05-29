import type { ReactNode } from "react";
import { CauseProfileProvider } from "@/components/onboarding/CauseProfileContext";

export default function CauseOnboardingLayout({ children }: { children: ReactNode }) {
  return <CauseProfileProvider>{children}</CauseProfileProvider>;
}
