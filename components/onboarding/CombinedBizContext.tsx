"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CombinedOffering = {
  title: string;
  description: string;
};

export type OfferType = "Products" | "Services" | "Both";

export type CombinedBizProfile = {
  // Step 1 — Business
  businessName: string;
  contactFullName: string;
  offerType: OfferType;
  mainCategory: string;
  bestWayToContact: string;
  // Step 2 — Contact & Location
  address: string;
  phone: string;
  email: string;
  website: string;
  socialMedia: string;
  city: string;
  state: string;
  country: string;
  // Step 3 — Story
  headline: string;
  description: string;
  founderName: string;
  founderDesc: string;
  parishSupported: string;
  whySupport: string;
  discount: string;
  discountDesc: string;
  // Step 4 — Offerings
  offerings: CombinedOffering[];
  // Step 5 — Media
  videoLink: string;
  // Step 6 — Plan
  selectedPlan: string;
};

export const DEFAULT_COMBINED_PROFILE: CombinedBizProfile = {
  businessName: "Maria's Studios",
  contactFullName: "Maria Gonzalez",
  offerType: "Both",
  mainCategory: "Professional Services",
  bestWayToContact: "WhatsApp",
  address: "2501 South Post Road",
  phone: "(954) 555-0200",
  email: "hello@mariastudios.com",
  website: "mariastudios.com",
  socialMedia: "@mariastudios",
  city: "Weston",
  state: "FL",
  country: "United States",
  headline:
    "Photography and visual content for families, retreats and parish events.",
  description:
    "Maria's Studios combines creativity, technique and passion to capture meaningful moments. We offer a personal service, taking care of every detail to deliver results that communicate, connect and last. From family sessions to full event coverage, we help the community preserve the moments that matter.",
  founderName: "Maria Gonzalez",
  founderDesc:
    "Founder and creative director with over 10 years of experience in commercial and portrait photography.",
  parishSupported: "Saint Katharine Drexel",
  whySupport:
    "We believe in the power of community and want to share our talents to help it grow.",
  discount: "15% OFF",
  discountDesc: "For ParishMart community members on family and event sessions.",
  offerings: [
    {
      title: "Family Photography",
      description: "Indoor and outdoor family portraits.",
    },
    {
      title: "Event Coverage",
      description: "Full coverage for retreats, galas and parish events.",
    },
    {
      title: "Brand Content",
      description: "Product and brand content for local businesses.",
    },
  ],
  videoLink: "",
  selectedPlan: "community",
};

type CombinedCtx = {
  profile: CombinedBizProfile;
  update: (patch: Partial<CombinedBizProfile>) => void;
  updateOffering: (index: number, patch: Partial<CombinedOffering>) => void;
  addOffering: () => void;
  removeOffering: (index: number) => void;
};

const Ctx = createContext<CombinedCtx | null>(null);
const STORAGE_KEY = "pm.combined-biz-onboarding";

export function CombinedBizProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<CombinedBizProfile>(
    DEFAULT_COMBINED_PROFILE,
  );
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setProfile({ ...DEFAULT_COMBINED_PROFILE, ...parsed });
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch {
      /* ignore */
    }
  }, [profile, hydrated]);

  const value = useMemo<CombinedCtx>(
    () => ({
      profile,
      update: (patch) => setProfile((p) => ({ ...p, ...patch })),
      updateOffering: (index, patch) =>
        setProfile((p) => ({
          ...p,
          offerings: p.offerings.map((o, i) =>
            i === index ? { ...o, ...patch } : o,
          ),
        })),
      addOffering: () =>
        setProfile((p) => ({
          ...p,
          offerings: [...p.offerings, { title: "", description: "" }],
        })),
      removeOffering: (index) =>
        setProfile((p) => ({
          ...p,
          offerings: p.offerings.filter((_, i) => i !== index),
        })),
    }),
    [profile],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCombinedBiz() {
  const v = useContext(Ctx);
  if (!v)
    throw new Error("useCombinedBiz must be used within <CombinedBizProvider>");
  return v;
}
