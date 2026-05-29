"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const STARTER_MERCH: { name: string; src: string }[] = [
  { name: "Cause Tee", src: "/brand/products/crew-harps.png" },
  { name: "Hoodie", src: "/brand/products/jacket-men.png" },
  { name: "Tote Bag", src: "/brand/products/tote-harps.png" },
  { name: "Candle", src: "/brand/products/unity-candleholder.jpg" },
  { name: "Cap", src: "/brand/products/cap-harps.png" },
  { name: "Rosary", src: "/brand/products/rosary.jpg" },
  { name: "Keepsake Dish", src: "/brand/products/keepsake-dish.jpg" },
  { name: "Crucifix", src: "/brand/products/saint-benedict-crucifix.jpg" },
];

export type CauseProfile = {
  // step 1 — profile
  causeName: string;
  contactFullName: string;
  category: string;
  phone: string;
  email: string;
  websiteOrSocial: string;
  address: string;
  city: string;
  state: string;
  country: string;
  shortDescription: string;
  associatedParish: string;
  // step 2 — story
  longDescription: string;
  // step 3 — donations & events
  donationTitle: string;
  donationDescription: string;
  eventTitle: string;
  eventLocation: string;
  eventDescription: string;
  eventCategory: string;
  eventPrice: string;
  eventSpots: string;
  // step 4 — collection
  starterCollection: string[];
  // step 5 — launch
  selectedPlan: string;
};

export const DEFAULT_CAUSE: CauseProfile = {
  causeName: "Emmaus Men's Retreat",
  contactFullName: "Fr. John Smith",
  category: "Retreat",
  phone: "(954) 555-0100",
  email: "emmaus@skd.org",
  websiteOrSocial: "emmausretreat.org",
  address: "2501 South Post Road",
  city: "Weston",
  state: "FL",
  country: "United States",
  shortDescription:
    "An annual men's spiritual retreat rooted in community, faith and brotherhood — transforming lives one weekend at a time.",
  associatedParish: "Saint Katharine Drexel Catholic Parish",
  longDescription:
    "The Emmaus Men's Retreat has been a cornerstone of our parish community for over 20 years. What started as a small gathering of 12 men has grown into a movement that has touched the lives of hundreds of fathers, sons and brothers. Each weekend is an invitation to step away from the noise of everyday life, encounter Jesus in community and return to the parish transformed — equipped to be better husbands, fathers and leaders.",
  donationTitle: "Sponsor a Retreatant",
  donationDescription:
    "Cover the cost for a man who can't afford the retreat weekend.",
  eventTitle: "Emmaus Fall Retreat 2026",
  eventLocation: "Saint Katharine Drexel, Weston FL",
  eventDescription:
    "A transformative weekend of prayer, reflection and brotherhood.",
  eventCategory: "Retreat",
  eventPrice: "$150",
  eventSpots: "40",
  starterCollection: ["Cause Tee", "Hoodie", "Tote Bag", "Candle"],
  selectedPlan: "cause",
};

type CauseCtx = {
  profile: CauseProfile;
  update: (patch: Partial<CauseProfile>) => void;
  toggleCollection: (item: string) => void;
};

const Ctx = createContext<CauseCtx | null>(null);
const STORAGE_KEY = "pm.cause-onboarding";

export function CauseProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<CauseProfile>(DEFAULT_CAUSE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setProfile({ ...DEFAULT_CAUSE, ...JSON.parse(stored) });
    } catch { /* ignore */ }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(profile)); } catch { /* ignore */ }
  }, [profile, hydrated]);

  const value = useMemo<CauseCtx>(() => ({
    profile,
    update: (patch) => setProfile((p) => ({ ...p, ...patch })),
    toggleCollection: (item) =>
      setProfile((p) => ({
        ...p,
        starterCollection: p.starterCollection.includes(item)
          ? p.starterCollection.filter((i) => i !== item)
          : [...p.starterCollection, item],
      })),
  }), [profile]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCause() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCause must be used within <CauseProfileProvider>");
  return v;
}
