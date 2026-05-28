"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type SellerService = {
  title: string;
  description: string;
  price: string;
};

export type SellerProfile = {
  // step 1
  businessName: string;
  contactFullName: string;
  serviceCategory: string;
  phone: string;
  email: string;
  websiteOrSocial: string;
  bestWayToContact: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  businessDescription: string;
  serviceArea: string;
  // step 2
  ownerName: string;
  parishSupported: string;
  aboutOwner: string;
  whySupport: string;
  // step 3
  mainCta: string;
  communityOffer: string;
  offerExpiration: string;
  offerDescription: string;
  bookingLink: string;
  services: SellerService[];
  // step 5
  selectedPlan: string;
};

export const DEFAULT_SELLER_PROFILE: SellerProfile = {
  businessName: "Weston Family Dental",
  contactFullName: "Maria Lopez",
  serviceCategory: "Health & Wellness",
  phone: "(954) 555-0148",
  email: "hello@westonfamilydental.com",
  websiteOrSocial: "westonfamilydental.com",
  bestWayToContact: "Phone",
  address: "2501 South Post Road",
  city: "Weston",
  state: "FL",
  zipCode: "33327",
  country: "United States",
  businessDescription:
    "Weston Family Dental is a local family-owned dental practice serving the Weston community with preventive, cosmetic and emergency dental care for children, adults and seniors. We focus on long-term family relationships, gentle care for kids, and modern technology delivered in a calm and welcoming environment.",
  serviceArea: "Weston, Southwest Ranches, Davie, Pembroke Pines",
  ownerName: "Dr. Maria Lopez",
  parishSupported: "Saint Katharine Drexel Parish",
  aboutOwner:
    "Dr. Maria Lopez is a local dentist and community supporter who believes that strong families and strong local businesses help strengthen parish life.",
  whySupport:
    "We want to serve families in our area and contribute to the parish community through our Local Biz Supporter membership.",
  mainCta: "Request Information",
  communityOffer: "10% off first consultation",
  offerExpiration: "No expiration",
  offerDescription:
    "Schedule your first consultation and receive 10% off as a ParishMart community member.",
  bookingLink: "",
  services: [
    {
      title: "Family Dentistry",
      description:
        "Comprehensive preventive and routine care for the whole family.",
      price: "From $150",
    },
    {
      title: "Emergency Dental Care",
      description: "Same-day appointments for urgent dental needs.",
      price: "Get a Quote",
    },
    {
      title: "Cosmetic Dentistry",
      description: "Smile makeover, whitening and aesthetic dental services.",
      price: "From $250",
    },
  ],
  selectedPlan: "community",
};

type SellerCtx = {
  profile: SellerProfile;
  update: (patch: Partial<SellerProfile>) => void;
  updateService: (index: number, patch: Partial<SellerService>) => void;
  addService: () => void;
};

const Ctx = createContext<SellerCtx | null>(null);
const STORAGE_KEY = "pm.seller-onboarding";

export function SellerProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<SellerProfile>(DEFAULT_SELLER_PROFILE);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setProfile({ ...DEFAULT_SELLER_PROFILE, ...parsed });
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  // Persist on every change after hydration
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch {
      /* ignore */
    }
  }, [profile, hydrated]);

  const value = useMemo<SellerCtx>(
    () => ({
      profile,
      update: (patch) => setProfile((p) => ({ ...p, ...patch })),
      updateService: (index, patch) =>
        setProfile((p) => ({
          ...p,
          services: p.services.map((s, i) =>
            i === index ? { ...s, ...patch } : s,
          ),
        })),
      addService: () =>
        setProfile((p) => ({
          ...p,
          services: [
            ...p.services,
            { title: "", description: "", price: "" },
          ],
        })),
    }),
    [profile],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useSellerProfile() {
  const v = useContext(Ctx);
  if (!v)
    throw new Error(
      "useSellerProfile must be used within <SellerProfileProvider>",
    );
  return v;
}
