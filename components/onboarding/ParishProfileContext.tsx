"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const EXPERIENCE_MODULES = [
  "Shop - Religious and faith gifts",
  "Shop - Merch",
  "Give",
  "Ministries",
  "Local Businesses",
  "Sponsors",
  "Events",
];

export const PARISH_MINISTRIES = [
  "Emmaus Men",
  "Emmaus Women",
  "Youth Ministry",
  "St. Vincent de Paul",
  "RCIA",
  "Baptism Prep",
  "Marriage Prep",
  "Prayer Group",
  "Choir",
  "Other",
];

export type ParishListField = "modules" | "ministries";

export type ParishProfile = {
  // step 1 — profile
  parishName: string;
  address: string;
  city: string;
  state: string;
  country: string;
  contactFullName: string;
  phone: string;
  email: string;
  websiteOrSocial: string;
  fatherName: string;
  // step 2 — story
  tagline: string;
  shortDescription: string;
  longDescription: string;
  primaryCta: string;
  massSchedule: string;
  // step 3 — modules
  modules: string[];
  ministries: string[];
  // step 4 — donations & events
  donationTitle: string;
  donationDescription: string;
  eventTitle: string;
  eventLocation: string;
  eventDescription: string;
  eventCategory: string;
  eventPrice: string;
  eventSpots: string;
  // step 6 — launch
  selectedPlan: string;
};

export const DEFAULT_PARISH: ParishProfile = {
  parishName: "Saint Katharine Drexel Catholic Parish",
  address: "2501 South Post Road",
  city: "Weston",
  state: "FL",
  country: "United States",
  contactFullName: "Fr. John Smith",
  phone: "(954) 555-0100",
  email: "contact@skd.org",
  websiteOrSocial: "skd.org",
  fatherName: "Fr. John Smith",
  tagline: "The parish at the center of the community.",
  shortDescription:
    "The cornerstone of Weston's Catholic community, serving families through formation, prayer and service.",
  longDescription:
    "Saint Katharine Drexel Catholic Parish has been the heart of Weston's Catholic community for decades. We accompany all people in their encounter with Jesus Christ through the sacraments, faith formation, prayer and service. From our thriving ministries to our outreach programs, we strive to build a community where every family feels welcome, supported and called to serve.",
  primaryCta: "Shop with Parish",
  massSchedule: "Sat 5:00 PM · Sun 8:00, 10:00 AM & 12:00 PM · Daily 8:30 AM",
  modules: ["Shop - Merch", "Give", "Ministries", "Local Businesses"],
  ministries: ["Emmaus Men", "Emmaus Women", "Youth Ministry"],
  donationTitle: "Building Restoration Fund",
  donationDescription: "Help us restore the parish hall for the next generation of families.",
  eventTitle: "Parish Fall Festival 2026",
  eventLocation: "Saint Katharine Drexel, Weston FL",
  eventDescription: "A weekend of food, faith and community for the whole family.",
  eventCategory: "Social",
  eventPrice: "Free",
  eventSpots: "",
  selectedPlan: "parish",
};

type ParishCtx = {
  profile: ParishProfile;
  update: (patch: Partial<ParishProfile>) => void;
  toggleList: (field: ParishListField, item: string) => void;
};

const Ctx = createContext<ParishCtx | null>(null);
const STORAGE_KEY = "pm.parish-onboarding";

export function ParishProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<ParishProfile>(DEFAULT_PARISH);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setProfile({ ...DEFAULT_PARISH, ...JSON.parse(stored) });
    } catch { /* ignore */ }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(profile)); } catch { /* ignore */ }
  }, [profile, hydrated]);

  const value = useMemo<ParishCtx>(() => ({
    profile,
    update: (patch) => setProfile((p) => ({ ...p, ...patch })),
    toggleList: (field, item) =>
      setProfile((p) => ({
        ...p,
        [field]: p[field].includes(item)
          ? p[field].filter((i) => i !== item)
          : [...p[field], item],
      })),
  }), [profile]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useParish() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useParish must be used within <ParishProfileProvider>");
  return v;
}
