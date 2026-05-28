import type { ReactNode } from "react";
import { SellerProfileProvider } from "@/components/onboarding/SellerProfileContext";

export default function SellerOnboardingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <SellerProfileProvider>{children}</SellerProfileProvider>;
}
