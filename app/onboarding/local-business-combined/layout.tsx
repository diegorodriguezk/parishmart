import type { ReactNode } from "react";
import { CombinedBizProvider } from "@/components/onboarding/CombinedBizContext";

export default function CombinedBizOnboardingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <CombinedBizProvider>{children}</CombinedBizProvider>;
}
