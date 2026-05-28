import type { ReactNode } from "react";
import { ProductSellerProvider } from "@/components/onboarding/ProductSellerContext";

export default function SellerOnboardingLayout({ children }: { children: ReactNode }) {
  return <ProductSellerProvider>{children}</ProductSellerProvider>;
}
