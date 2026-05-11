"use client";

import { Photo } from "@/components/Photo";
import {
  OnboardingLayout,
  FormField,
  FormFooter,
} from "@/components/OnboardingLayout";
import {
  OnboardingFormProvider,
  LiveInput,
  LiveSelect,
  LiveChips,
  LiveText,
  LiveInitials,
  LiveToggles,
  useFieldValue,
  useMultiValue,
} from "./OnboardingForm";

const MODULES = [
  {
    key: "shop",
    label: "Shop",
    title: "Merch Store",
    description: "Products and retreat merch.",
  },
  {
    key: "give",
    label: "Give",
    title: "Giving Campaigns",
    description: "Campaigns and impact goals.",
  },
  {
    key: "sponsors",
    label: "Sponsors",
    title: "Sponsor Offers",
    description: "Local sponsors and offers.",
  },
  {
    key: "community",
    label: "Community",
    title: "Local Biz",
    description: "Businesses supporting the cause.",
  },
  {
    key: "story",
    label: "Story",
    title: "Testimonials",
    description: "Photos, videos and reviews.",
  },
  {
    key: "share",
    label: "Share",
    title: "Impact Sharing",
    description: "Viral share cards.",
  },
];

const MODULE_LABEL: Record<string, string> = {
  shop: "Merch",
  give: "Giving",
  sponsors: "Sponsors",
  community: "Local Biz",
  story: "Story",
  share: "Share",
};

export function ParishOnboardingForm() {
  return (
    <OnboardingFormProvider
      initial={{
        name: "Emmaus SKD Weston",
        type: "Ministry / Cause",
        city: "Weston, Florida · SKD",
        goal: "Support retreat scholarships",
        cta: "Give with Love",
      }}
      initialMulti={{ modules: ["shop", "give", "community"] }}
    >
      <ParishInner />
    </OnboardingFormProvider>
  );
}

function ParishInner() {
  return (
    <OnboardingLayout
      kicker="Parish / Cause onboarding"
      title={
        <>
          Activate your{" "}
          <span className="pm-gradient-text">community page</span>
        </>
      }
      intro="Create a parish, ministry or cause presence where supporters can shop, give, sponsor, share and grow community impact."
      steps={[
        {
          n: 1,
          title: "Community Basics",
          description: "Name, type, city and parish/cause identity.",
        },
        {
          n: 2,
          title: "Select Modules",
          description: "Shop, Give, Sponsors, Ministries or Local Biz.",
        },
        {
          n: 3,
          title: "Preview Page",
          description: "See the parish or cause experience before launch.",
        },
        {
          n: 4,
          title: "Activate",
          description:
            "Submit for approval and complete advanced setup later.",
        },
      ]}
      preview={<ParishPreview />}
    >
      <h2 className="text-2xl font-extrabold text-pm-navy">
        Community Basics
      </h2>
      <p className="mt-1 text-sm text-pm-muted">
        Start with identity and purpose. Donation/payment setup can be
        completed later.
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <FormField label="Community / Cause Name">
          <LiveInput field="name" />
        </FormField>
        <FormField label="Type">
          <LiveSelect
            field="type"
            options={["Ministry / Cause", "Parish", "Retreat", "Mission"]}
          />
        </FormField>
        <FormField label="City / Parish">
          <LiveInput field="city" />
        </FormField>
        <FormField label="Main Goal">
          <LiveSelect
            field="goal"
            options={[
              "Support retreat scholarships",
              "Fund youth ministry",
              "Grow community visibility",
            ]}
          />
        </FormField>
      </div>

      <p className="mt-7 text-xs font-bold text-pm-navy">Experience modules</p>
      <LiveToggles field="modules" options={MODULES} />

      <p className="mt-7 text-xs font-bold text-pm-navy">
        Primary call to action
      </p>
      <div className="mt-2">
        <LiveChips
          field="cta"
          options={[
            "Give with Love",
            "Shop with Purpose",
            "Sponsor This Cause",
            "Share the Impact",
          ]}
        />
      </div>

      <FormFooter primaryHref="/onboarding/success" />
    </OnboardingLayout>
  );
}

function ParishPreview() {
  const type = useFieldValue("type");
  const city = useFieldValue("city");
  const goal = useFieldValue("goal");
  const modules = useMultiValue("modules");

  const description = `A ${type.toLowerCase()} in ${city} focused on ${goal.toLowerCase()}.`;

  return (
    <>
      <LivePreviewBadge />
      <div className="pm-card overflow-hidden">
        <Photo
          kind="congregation"
          ratio="auto"
          rounded="rounded-none"
          className="h-32 !rounded-t-[24px] !rounded-b-none"
        />
        <div className="space-y-2 p-4">
          <span className="pm-avatar !h-9 !w-9 rounded-xl text-xs">
            <LiveInitials field="name" fallback="PM" />
          </span>
          <p className="text-sm font-bold text-pm-navy">
            <LiveText field="name" fallback="Your Community" />
          </p>
          <p className="text-xs text-pm-muted">{description}</p>
          <div className="flex flex-wrap gap-1 pt-1">
            {modules.length === 0 ? (
              <span className="text-[11px] italic text-pm-muted">
                Select at least one module to enable
              </span>
            ) : (
              modules.map((m) => (
                <span key={m} className="pm-label">
                  {MODULE_LABEL[m] ?? m}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="pm-dark-panel p-5">
        <p className="text-xs uppercase tracking-wider text-white/70">
          Primary CTA
        </p>
        <p className="mt-2 text-2xl font-extrabold">
          <LiveText field="cta" fallback="Give with Love" />
        </p>
        <p className="mt-1 text-xs text-white/70">
          This is the first action supporters see on your community page.
        </p>
      </div>
      <div className="pm-card p-5">
        <p className="text-sm font-bold text-pm-navy">
          What appears after approval?
        </p>
        <ul className="mt-3 space-y-2 text-xs text-pm-muted">
          {[
            "Cause / ministry page",
            "Giving campaigns",
            "Merch and product cards",
            "Impact dashboard",
          ].map((t) => (
            <li
              key={t}
              className="rounded-2xl border border-pm-border bg-white p-2.5 text-pm-ink"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function LivePreviewBadge() {
  return (
    <div className="flex items-center justify-between gap-2 rounded-full border border-pm-border bg-white px-3 py-1.5 text-[11px] font-bold text-pm-muted shadow-pm-soft">
      <span className="inline-flex items-center gap-1.5">
        <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-50">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
        </span>
        Live preview
      </span>
      <span className="text-pm-blue">updates as you type</span>
    </div>
  );
}
