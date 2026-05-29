"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ParishProfile = {
  // step 1
  parishName: string;
  city: string;
  state: string;
  zipCode: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  contactName: string;
  contactEmail: string;
  shortDescription: string;
  // step 2
  pastorName: string;
  diocese: string;
  mission: string;
  tagline: string;
  primaryCta: string;
};

export const DEFAULT_PARISH: ParishProfile = {
  parishName: "Saint Katharine Drexel Catholic Parish",
  city: "Weston",
  state: "FL",
  zipCode: "33327",
  address: "2501 South Post Road",
  phone: "(954) 555-0100",
  email: "contact@skd.org",
  website: "https://skd.org",
  contactName: "Fr. John Smith",
  contactEmail: "pastor@skd.org",
  shortDescription:
    "The cornerstone of Weston's Catholic community. Saint Katharine Drexel Parish serves families through formation, prayer and service.",
  pastorName: "Fr. John Smith",
  diocese: "Archdiocese of Miami",
  mission:
    "To accompany all people in their encounter with Jesus Christ through the sacraments, community and service.",
  tagline: "The parish at the center of the community.",
  primaryCta: "Shop with Parish",
};

type ParishCtx = {
  profile: ParishProfile;
  update: (patch: Partial<ParishProfile>) => void;
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
  }), [profile]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useParish() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useParish must be used within <ParishProfileProvider>");
  return v;
}
