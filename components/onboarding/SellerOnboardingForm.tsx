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

const VISIBILITY_ORDERS: Record<string, string> = {
  Starter: "24",
  Featured: "42",
  "Premium Placement": "78",
};

const CATEGORY_PHOTO: Record<string, PhotoKind> = {
  Apparel: "apparel",
  "Religious Gifts": "rosary",
  Services: "business",
  Food: "community",
};

export function SellerOnboardingForm() {
  return (
    <OnboardingFormProvider
      initial={{
        business: "Sample Seller",
        category: "Apparel",
        city: "Weston, Florida",
        supports: "SKD Weston",
        format: "Products",
        visibility: "Featured",
      }}
    >
      <SellerInner />
    </OnboardingFormProvider>
  );
}

function SellerInner() {
  return (
    <OnboardingLayout
      kicker="Seller onboarding"
      title={
        <>
          Sell with <span className="pm-gradient-text">purpose</span>
        </>
      }
      intro="Offer products or services that support a cause inside the ParishMart ecosystem."
      steps={[
        {
          n: 1,
          title: "Business Basics",
          description: "Name, category, city and supported community.",
        },
        {
          n: 2,
          title: "Product / Service",
          description: "What you sell and how customers buy it.",
        },
        {
          n: 3,
          title: "Cause Connection",
          description: "Link your sales to a cause or ministry.",
        },
        {
          n: 4,
          title: "Activate",
          description: "Submit for review and go live.",
        },
      ]}
      preview={<SellerPreview />}
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
            options={["Apparel", "Religious Gifts", "Services", "Food"]}
          />
        </FormField>
        <FormField label="City">
          <LiveInput field="city" />
        </FormField>
        <FormField label="Supports">
          <LiveSelect
            field="supports"
            options={["SKD Weston", "Emmaus", "Youth Ministry"]}
          />
        </FormField>
      </div>
      <p className="mt-6 text-xs font-bold text-pm-navy">Selling format</p>
      <div className="mt-2">
        <LiveChips
          field="format"
          options={["Products", "Services", "Bundles", "Custom Offer"]}
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

function SellerPreview() {
  const category = useFieldValue("category");
  const supports = useFieldValue("supports");
  const visibility = useFieldValue("visibility");
  const photo = CATEGORY_PHOTO[category] ?? "apparel";
  const orders = VISIBILITY_ORDERS[visibility] ?? "42";

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
            <LiveInitials field="business" fallback="SS" />
          </span>
          <p className="text-sm font-bold text-pm-navy">
            <LiveText field="business" fallback="Your Business" />
          </p>
          <p className="text-xs text-pm-muted">
            {category} · Supports {supports}
          </p>
          <div className="flex flex-wrap gap-1 pt-1">
            <span className="pm-label">
              <LiveText field="format" />
            </span>
            <span className="pm-label">{visibility}</span>
          </div>
        </div>
      </div>
      <div className="pm-dark-panel p-5">
        <p className="text-xs uppercase tracking-wider text-white/70">
          Estimated monthly orders
        </p>
        <p className="mt-2 text-3xl font-extrabold">{orders}</p>
        <p className="text-xs text-white/70">
          Projected for a {visibility.toLowerCase()} {category.toLowerCase()}{" "}
          seller in <LiveText field="city" />.
        </p>
      </div>
    </>
  );
}
