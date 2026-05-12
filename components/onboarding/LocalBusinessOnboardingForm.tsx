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
        address: "123 Town Center Dr",
        city: "Weston",
        state: "Florida",
        phone: "(954) 555-0142",
        contactName: "Maria Gonzalez",
        contactEmail: "hello@mariastudios.com",
        founderName: "Maria Gonzalez",
        founderBio: "Local photographer serving SKD families since 2022.",
        servicesDesc: "Family sessions · Retreat coverage · Event photography",
        servicesPrice: "From $150",
        website: "https://www.mariastudios.com",
        social: "@mariastudios",
        contactUrl: "https://www.mariastudios.com/contact",
        supports: "Emmaus Men",
        offer: "10% Off",
        visibility: "Featured",
        membership: "Featured",
        terms: "false",
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
        <FormField label="Address">
          <LiveInput field="address" placeholder="Street address" />
        </FormField>
        <FormField label="Phone">
          <LiveInput field="phone" placeholder="(000) 000-0000" />
        </FormField>
        <FormField label="City">
          <LiveInput field="city" />
        </FormField>
        <FormField label="State">
          <LiveSelect
            field="state"
            options={["Florida", "Texas", "California", "New York", "Other"]}
          />
        </FormField>
        <FormField label="Contact Name">
          <LiveInput field="contactName" />
        </FormField>
        <FormField label="Contact Email">
          <LiveInput field="contactEmail" placeholder="hello@example.com" />
        </FormField>
        <FormField label="Website">
          <LiveInput field="website" placeholder="https://" />
        </FormField>
        <FormField label="Social handle (optional)">
          <LiveInput field="social" placeholder="@yourbusiness" />
        </FormField>
        <FormField label="Contact Us link">
          <LiveInput field="contactUrl" placeholder="https://your-site.com/contact" />
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

      <p className="mt-7 text-xs font-bold text-pm-navy">Media uploads</p>
      <div className="mt-2 grid gap-3 md:grid-cols-3">
        {[
          { label: "Logo", hint: "PNG/SVG · transparent · 512×512" },
          { label: "Banner photo", hint: "JPG · 1920×720" },
          { label: "Founder photo", hint: "JPG · 800×800" },
        ].map((u) => (
          <div
            key={u.label}
            className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-pm-border bg-pm-soft/30 p-4 text-center"
          >
            <p className="text-sm font-bold text-pm-navy">Upload {u.label}</p>
            <p className="mt-1 text-[11px] text-pm-muted">{u.hint}</p>
          </div>
        ))}
      </div>

      <p className="mt-7 text-xs font-bold text-pm-navy">Founder details</p>
      <div className="mt-2 grid gap-4 md:grid-cols-2">
        <FormField label="Founder name">
          <LiveInput field="founderName" />
        </FormField>
        <FormField label="Founder bio (short)">
          <LiveInput field="founderBio" />
        </FormField>
      </div>

      <p className="mt-7 text-xs font-bold text-pm-navy">Services & pricing</p>
      <div className="mt-2 grid gap-4 md:grid-cols-2">
        <FormField label="Services description">
          <LiveInput
            field="servicesDesc"
            placeholder="What services do you offer?"
          />
        </FormField>
        <FormField label="Starting price (optional)">
          <LiveInput field="servicesPrice" placeholder="From $150 / Quote" />
        </FormField>
      </div>

      <p className="mt-7 text-xs font-bold text-pm-navy">Parishioner offer</p>
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

      <p className="mt-7 text-xs font-bold text-pm-navy">Membership plan</p>
      <div className="mt-2">
        <LiveChips
          field="membership"
          options={["Starter", "Featured", "Premium Placement"]}
        />
      </div>

      <label className="mt-7 flex items-start gap-2 text-xs text-pm-ink">
        <input type="checkbox" className="mt-0.5" required />
        <span>
          I have read and agree to the{" "}
          <a href="#" className="font-bold text-pm-blue underline">
            ParishMart terms & conditions
          </a>
          .
        </span>
      </label>

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
