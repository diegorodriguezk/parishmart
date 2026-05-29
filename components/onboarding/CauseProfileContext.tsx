"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CauseProfile = {
  // step 1
  causeName: string;
  leadName: string;
  contactEmail: string;
  parishConnection: string;
  shortDescription: string;
  category: string;
  // step 2
  tagline: string;
  mission: string;
  fullStory: string;
  primaryCta: string;
  // step 3
  givingGoal: string;
  endDate: string;
  givingSlug: string;
  // step 4
  selectedPlan: string;
};

export const DEFAULT_CAUSE: CauseProfile = {
  causeName: "Emmaus Men's Retreat",
  leadName: "Fr. John Smith",
  contactEmail: "emmaus@skd.org",
  parishConnection: "Saint Katharine Drexel Catholic Parish",
  shortDescription:
    "An annual men's spiritual retreat rooted in community, faith and brotherhood — transforming lives one weekend at a time.",
  category: "Retreat",
  tagline: "Transforming lives one retreat weekend at a time.",
  mission:
    "To encounter Jesus Christ in community through a weekend of reflection, brotherhood and renewal — equipping men to be better husbands, fathers and leaders.",
  fullStory:
    "The Emmaus Men's Retreat has been a cornerstone of our parish community for over 20 years. What started as a small gathering of 12 men has grown into a movement that has touched the lives of hundreds of fathers, sons and brothers.",
  primaryCta: "Give Now",
  givingGoal: "5000",
  endDate: "2026-10-31",
  givingSlug: "emmaus-mens-retreat",
  selectedPlan: "cause",
};

type CauseCtx = {
  profile: CauseProfile;
  update: (patch: Partial<CauseProfile>) => void;
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
  }), [profile]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCause() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCause must be used within <CauseProfileProvider>");
  return v;
}
