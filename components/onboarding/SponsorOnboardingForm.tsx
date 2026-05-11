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
  useFieldValue,
} from "./OnboardingForm";
import { LivePreviewBadge } from "./ParishOnboardingForm";

const PLACEMENT_REACH: Record<string, string> = {
  "Premium Banner": "18K",
  "Featured Card": "12K",
  "Standard Listing": "6K",
};

export function SponsorOnboardingForm() {
  return (
    <OnboardingFormProvider
      initial={{
        brand: "Cleveland Hospital",
        category: "Healthcare",
        focus: "SKD Weston",
        goal: "Brand awareness",
        placement: "Premium Banner",
        offerType: "Cash Back",
      }}
    >
      <SponsorInner />
    </OnboardingFormProvider>
  );
}

function SponsorInner() {
  return (
    <OnboardingLayout
      kicker="Sponsor onboarding"
      title={
        <>
          Grow community visibility with{" "}
          <span className="pm-gradient-text">purpose</span>
        </>
      }
      intro="Reach parish communities through featured banners and parishioner offers while supporting causes that matter."
      steps={[
        {
          n: 1,
          title: "Sponsor Basics",
          description: "Brand info, category and parish focus.",
        },
        {
          n: 2,
          title: "Banner & Offer",
          description: "Premium banner, offer details and goal.",
        },
        {
          n: 3,
          title: "Preview Placement",
          description: "See how the sponsor placement looks.",
        },
        {
          n: 4,
          title: "Activate",
          description: "Submit for review and go live.",
        },
      ]}
      preview={<SponsorPreview />}
    >
      <h2 className="text-2xl font-extrabold text-pm-navy">Sponsor Basics</h2>
      <p className="mt-1 text-sm text-pm-muted">
        Tell us about your brand and how you want to show up inside ParishMart.
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <FormField label="Brand Name">
          <LiveInput field="brand" />
        </FormField>
        <FormField label="Category">
          <LiveSelect
            field="category"
            options={[
              "Healthcare",
              "Financial Services",
              "Education",
              "Family Services",
            ]}
          />
        </FormField>
        <FormField label="Parish Focus">
          <LiveSelect
            field="focus"
            options={["SKD Weston", "Emmaus", "FACE", "Casa Manresa"]}
          />
        </FormField>
        <FormField label="Goal">
          <LiveSelect
            field="goal"
            options={[
              "Brand awareness",
              "Parishioner offers",
              "Community programs",
            ]}
          />
        </FormField>
      </div>
      <p className="mt-6 text-xs font-bold text-pm-navy">Banner placement</p>
      <div className="mt-2">
        <LiveChips
          field="placement"
          options={["Premium Banner", "Featured Card", "Standard Listing"]}
        />
      </div>
      <p className="mt-6 text-xs font-bold text-pm-navy">Offer type</p>
      <div className="mt-2">
        <LiveChips
          field="offerType"
          options={[
            "Cash Back",
            "Discount",
            "Free Service Credit",
            "Bundled Package",
          ]}
        />
      </div>
      <FormFooter
        primaryHref="/onboarding/success"
        primary="Submit Sponsor Request"
      />
    </OnboardingLayout>
  );
}

function SponsorPreview() {
  const category = useFieldValue("category");
  const focus = useFieldValue("focus");
  const placement = useFieldValue("placement");
  const reach = PLACEMENT_REACH[placement] ?? "12K";

  return (
    <>
      <LivePreviewBadge />
      <div className="pm-card overflow-hidden">
        <Photo
          kind="business"
          ratio="auto"
          rounded="rounded-none"
          className="h-32 !rounded-t-[24px] !rounded-b-none"
        />
        <div className="space-y-2 p-4">
          <span className="pm-avatar !h-9 !w-9 rounded-xl text-xs">
            <LiveInitials field="brand" fallback="SP" />
          </span>
          <p className="text-sm font-bold text-pm-navy">
            <LiveText field="brand" fallback="Your Brand" />
          </p>
          <p className="text-xs text-pm-muted">
            {category} partner supporting {focus} parish and parish families.
          </p>
          <div className="flex flex-wrap gap-1 pt-1">
            <span className="pm-label">{placement}</span>
            <span className="pm-label">
              <LiveText field="offerType" />
            </span>
          </div>
        </div>
      </div>
      <div className="pm-card overflow-hidden">
        <div className="bg-gradient-to-br from-pm-blue to-pm-cyan p-4 text-white">
          <p className="text-xs uppercase tracking-wider opacity-80">
            Sponsor offer
          </p>
          <p className="mt-1 text-3xl font-extrabold">
            <LiveText field="offerType" />
          </p>
          <p className="text-xs opacity-80">{placement}</p>
        </div>
      </div>
      <div className="pm-dark-panel p-5">
        <p className="text-xs uppercase tracking-wider text-white/70">
          Estimated quarterly reach
        </p>
        <p className="mt-2 text-3xl font-extrabold">{reach}</p>
        <p className="text-xs text-white/70">
          Projected impressions for {placement.toLowerCase()} across {focus} and
          partner parishes.
        </p>
      </div>
    </>
  );
}
