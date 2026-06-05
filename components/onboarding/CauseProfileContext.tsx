"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CauseDonation = {
  title: string;
  description: string;
};

export type CauseEvent = {
  title: string;
  location: string;
  startDateTime: string;
  endDateTime: string;
  briefDescription: string;
  longDescription: string;
  price: string;
  spots: string;
  category: string;
};

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
  // step 2 — story
  tagline: string;
  shortDescription: string;
  associatedParish: string;
  longDescription: string;
  // step 3 — donations
  donations: CauseDonation[];
  // step 4 — upcoming events
  events: CauseEvent[];
  // step 5 — media
  videoLink: string;
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
  tagline: "Transforming lives one retreat weekend at a time.",
  shortDescription:
    "An annual men's spiritual retreat rooted in community, faith and brotherhood — transforming lives one weekend at a time.",
  associatedParish: "Saint Katharine Drexel Catholic Parish",
  longDescription:
    "The Emmaus Men's Retreat has been a cornerstone of our parish community for over 20 years. What started as a small gathering of 12 men has grown into a movement that has touched the lives of hundreds of fathers, sons and brothers. Each weekend is an invitation to step away from the noise of everyday life, encounter Jesus in community and return to the parish transformed — equipped to be better husbands, fathers and leaders.",
  donations: [
    {
      title: "Sponsor a Retreatant",
      description: "Cover the cost for a man who can't afford the retreat weekend.",
    },
    {
      title: "Retreat Materials Fund",
      description: "Help provide books, meals and supplies for the weekend.",
    },
  ],
  events: [
    {
      title: "Emmaus Fall Retreat 2026",
      location: "Saint Katharine Drexel, Weston FL",
      startDateTime: "2026-10-16T18:00",
      endDateTime: "2026-10-18T16:00",
      briefDescription:
        "A transformative weekend of prayer, reflection and brotherhood.",
      longDescription:
        "Three days of talks, prayer, sacraments and community to grow in faith.",
      price: "$150",
      spots: "40",
      category: "Retreat",
    },
  ],
  videoLink: "",
};

type CauseCtx = {
  profile: CauseProfile;
  update: (patch: Partial<CauseProfile>) => void;
  updateDonation: (index: number, patch: Partial<CauseDonation>) => void;
  addDonation: () => void;
  removeDonation: (index: number) => void;
  updateEvent: (index: number, patch: Partial<CauseEvent>) => void;
  addEvent: () => void;
  removeEvent: (index: number) => void;
};

const Ctx = createContext<CauseCtx | null>(null);
const STORAGE_KEY = "pm.cause-onboarding";

const EMPTY_DONATION: CauseDonation = { title: "", description: "" };
const EMPTY_EVENT: CauseEvent = {
  title: "",
  location: "",
  startDateTime: "",
  endDateTime: "",
  briefDescription: "",
  longDescription: "",
  price: "",
  spots: "",
  category: "",
};

export function CauseProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<CauseProfile>(DEFAULT_CAUSE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setProfile({ ...DEFAULT_CAUSE, ...JSON.parse(stored) });
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

  const value = useMemo<CauseCtx>(
    () => ({
      profile,
      update: (patch) => setProfile((p) => ({ ...p, ...patch })),
      updateDonation: (index, patch) =>
        setProfile((p) => ({
          ...p,
          donations: p.donations.map((d, i) =>
            i === index ? { ...d, ...patch } : d,
          ),
        })),
      addDonation: () =>
        setProfile((p) => ({
          ...p,
          donations: [...p.donations, { ...EMPTY_DONATION }],
        })),
      removeDonation: (index) =>
        setProfile((p) => ({
          ...p,
          donations: p.donations.filter((_, i) => i !== index),
        })),
      updateEvent: (index, patch) =>
        setProfile((p) => ({
          ...p,
          events: p.events.map((e, i) => (i === index ? { ...e, ...patch } : e)),
        })),
      addEvent: () =>
        setProfile((p) => ({
          ...p,
          events: [...p.events, { ...EMPTY_EVENT }],
        })),
      removeEvent: (index) =>
        setProfile((p) => ({
          ...p,
          events: p.events.filter((_, i) => i !== index),
        })),
    }),
    [profile],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCause() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCause must be used within <CauseProfileProvider>");
  return v;
}
