"use client";

import { Photo, PhotoKind } from "@/components/Photo";
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

const VISIBILITY_REACH: Record<string, string> = {
  Starter: "640",
  Featured: "1.2K",
  "Premium Placement": "3.4K",
};

const CATEGORY_PHOTO: Record<string, PhotoKind> = {
  Photography: "congregation",
  Wellness: "community",
  Restaurants: "food",
  "Real Estate": "house",
  Professional: "business",
};

export function LocalBusinessOnboardingForm() {
  return (
    <OnboardingFormProvider
      initial={{
        business: "Maria's Studios",
        category: "Photography",
        city: "Weston, Florida",
        supports: "Emmaus Men",
        offer: "10% Off",
        visibility: "Featured",
      }}
    >
      <LocalBusinessInner />
    </OnboardingFormProvider>
  );
}

function LocalBusinessInner() {
  return (
    <OnboardingLayout
      kicker="Biz Supporter onboarding"
      title={
        <>
          Grow your business with{" "}
          <span className="pm-gradient-text">purpose</span>
        </>
      }
      intro="Appear inside the ParishMart ecosystem, offer value to parishioners and support a cause or parish in your community."
      steps={[
        {
          n: 1,
          title: "Business Basics",
          description:
            "Business name, category, city and supported community.",
        },
        {
          n: 2,
          title: "Create Offer",
          description: "Coupon, promotion or parishioner benefit.",
        },
        {
          n: 3,
          title: "Preview Listing",
          description: "See how your card appears inside ParishMart.",
        },
        {
          n: 4,
          title: "Activate",
          description: "Submit for review and go live.",
        },
      ]}
      preview={<LocalBusinessPreview />}
    >
      <h2 className="text-2xl font-extrabold text-pm-navy">Business Basics</h2>
      <p className="mt-1 text-sm text-pm-muted">
        Start simple. You can complete advanced details later.
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <FormField label="Business Name">
          <LiveInput field="business" />
        </FormField>
        <FormField label="Category">
          <LiveSelect
            field="category"
            options={[
              "Photography",
              "Wellness",
              "Restaurants",
              "Real Estate",
              "Professional",
            ]}
          />
        </FormField>
        <FormField label="City">
          <LiveInput field="city" />
        </FormField>
        <FormField label="Supports">
          <LiveSelect
            field="supports"
            options={[
              "Emmaus Men",
              "Emmaus Women",
              "Youth Ministry",
              "St Vincent de Paul",
            ]}
          />
        </FormField>
      </div>
      <p className="mt-6 text-xs font-bold text-pm-navy">Parishioner offer</p>
      <div className="mt-2">
        <LiveChips
          field="offer"
          options={[
            "10% Off",
            "Free Consultation",
            "$25 Credit",
            "Cash Back",
            "Custom Offer",
          ]}
        />
      </div>
      <p className="mt-6 text-xs font-bold text-pm-navy">Visibility plan</p>
      <div className="mt-2">
        <LiveChips
          field="visibility"
          options={["Starter", "Featured", "Premium Placement"]}
        />
      </div>
      <FormFooter primaryHref="/onboarding/success" />
    </OnboardingLayout>
  );
}

function LocalBusinessPreview() {
  const category = useFieldValue("category");
  const city = useFieldValue("city");
  const supports = useFieldValue("supports");
  const visibility = useFieldValue("visibility");
  const photo = CATEGORY_PHOTO[category] ?? "business";
  const reach = VISIBILITY_REACH[visibility] ?? "1.2K";

  return (
    <>
      <LivePreviewBadge />
      <div className="pm-card overflow-hidden">
        <Photo
          kind={photo}
          ratio="auto"
          rounded="rounded-none"
          className="h-32 !rounded-t-[24px] !rounded-b-none"
        />
        <div className="space-y-2 p-4">
          <span className="pm-avatar !h-9 !w-9 rounded-xl text-xs">
            <LiveInitials field="business" fallback="LB" />
          </span>
          <p className="text-sm font-bold text-pm-navy">
            <LiveText field="business" fallback="Your Business" />
          </p>
          <p className="text-xs text-pm-muted">
            {category} services supporting {supports} and the SKD community.
          </p>
          <div className="flex flex-wrap gap-1 pt-1">
            <span className="pm-label">{category}</span>
            {city ? <span className="pm-label">{city}</span> : null}
            <span className="pm-label">{supports}</span>
          </div>
        </div>
      </div>
      <div className="pm-card overflow-hidden">
        <div className="bg-gradient-to-br from-pm-blue to-pm-cyan p-4 text-white">
          <p className="text-xs uppercase tracking-wider opacity-80">
            Parishioner offer
          </p>
          <p className="mt-1 text-3xl font-extrabold">
            <LiveText field="offer" fallback="10% OFF" />
          </p>
          <p className="text-xs opacity-80">{visibility}</p>
        </div>
      </div>
      <div className="pm-dark-panel p-5">
        <p className="text-xs uppercase tracking-wider text-white/70">
          Estimated monthly visibility
        </p>
        <p className="mt-2 text-3xl font-extrabold">{reach}</p>
        <p className="text-xs text-white/70">
          Projected impressions for a {visibility.toLowerCase()} listing from
          ParishMart pages and offers.
        </p>
      </div>
    </>
  );
}
