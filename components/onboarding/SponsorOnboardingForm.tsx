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
  useSetField,
} from "./OnboardingForm";
import { LivePreviewBadge } from "./ParishOnboardingForm";

const PLAN_REACH: Record<string, string> = {
  Community: "1.5K",
  Featured: "5K",
  Premier: "18K",
};

const PLANS = [
  {
    key: "Community",
    name: "Community Sponsor",
    price: "$150",
    tag: "Local sponsors",
    features: ["Basic profile", "Logo placement", "Contact button", "One offer"],
  },
  {
    key: "Featured",
    name: "Featured Sponsor",
    price: "$300",
    tag: "Recommended",
    features: [
      "Featured card",
      "Up to 3 photos",
      "Higher placement",
      "Basic reporting",
    ],
  },
  {
    key: "Premier",
    name: "Premier Sponsor",
    price: "$500",
    tag: "Strategic / regional",
    features: [
      "Multi-page visibility",
      "Video / message",
      "Campaign placement",
      "Monthly report",
    ],
  },
];

export function SponsorOnboardingForm() {
  return (
    <OnboardingFormProvider
      initial={{
        brand: "Ministry Brands",
        category: "Technology & Church Solutions",
        contactName: "Sponsor contact person",
        contactEmail: "name@company.com",
        website: "https://www.ministrybrands.com",
        phone: "(000) 000-0000",
        description:
          "Ministry Brands helps churches and faith-based organizations simplify administration, giving and community management through technology.",
        purposeMessage:
          "We are proud to support parishes and causes that use technology to strengthen engagement, giving and mission-driven impact.",
        offerType: "Discount",
        offerTitle: "Exclusive community benefit",
        offerDescription:
          "Participating parish causes can request more information about available solutions and special partner benefits.",
        ctaLabel: "Request Information",
        ctaUrl: "https://www.ministrybrands.com/parishes",
        supportArea: "Specific Parish",
        preferredParish: "Saint Katharine Drexel Catholic Parish",
        preferredCause: "General Parish Support",
        plan: "Featured",
      }}
    >
      <SponsorInner />
    </OnboardingFormProvider>
  );
}

function SponsorInner() {
  return (
    <OnboardingLayout
      kicker="Sponsor Supporter onboarding"
      title={
        <>
          Create your sponsor page and{" "}
          <span className="pm-gradient-text">support a community</span> with
          purpose.
        </>
      }
      intro="Complete a few simple steps. ParishMart will generate a sponsor profile that can appear inside parish stores, cause pages and community supporter sections."
      steps={[
        {
          n: 1,
          title: "Business Profile",
          description: "Basic sponsor details.",
        },
        {
          n: 2,
          title: "Story & Media",
          description: "Logo, photos and purpose.",
        },
        {
          n: 3,
          title: "Community Offer",
          description: "Coupon, benefit or CTA.",
        },
        {
          n: 4,
          title: "Support Area",
          description: "Parish, cause or region.",
        },
        {
          n: 5,
          title: "Membership Plan",
          description: "Select plan and launch.",
        },
      ]}
      preview={<SponsorPreview />}
    >
      <h2 className="text-2xl font-extrabold text-pm-navy">1. Business Profile</h2>
      <p className="mt-1 text-sm text-pm-muted">
        Tell the community who you are and how they can recognize your business.
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <FormField label="Business Name">
          <LiveInput field="brand" />
        </FormField>
        <FormField label="Business Category">
          <LiveSelect
            field="category"
            options={[
              "Technology & Church Solutions",
              "Healthcare",
              "Financial Services",
              "Family Services",
              "Education",
              "Travel & Hospitality",
              "Other",
            ]}
          />
        </FormField>
        <FormField label="Contact Name">
          <LiveInput field="contactName" />
        </FormField>
        <FormField label="Contact Email">
          <LiveInput field="contactEmail" />
        </FormField>
        <FormField label="Website">
          <LiveInput field="website" />
        </FormField>
        <FormField label="Phone">
          <LiveInput field="phone" />
        </FormField>
      </div>
      <div className="mt-4">
        <FormField label="Short Business Description">
          <LiveInput field="description" />
        </FormField>
      </div>

      <h2 className="mt-10 text-2xl font-extrabold text-pm-navy">
        2. Story & Media
      </h2>
      <p className="mt-1 text-sm text-pm-muted">
        Add your logo, photos and a short message about why you support this
        community.
      </p>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {[
          { label: "Sponsor Logo", hint: "PNG, JPG or SVG recommended" },
          { label: "Cover Image", hint: "Optional · used as sponsor banner" },
        ].map((u) => (
          <div
            key={u.label}
            className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-pm-border bg-pm-soft/30 p-5 text-center"
          >
            <p className="text-sm font-bold text-pm-navy">Upload {u.label}</p>
            <p className="mt-1 text-[11px] text-pm-muted">{u.hint}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <FormField label="Purpose Message">
          <LiveInput field="purposeMessage" />
        </FormField>
      </div>

      <h2 className="mt-10 text-2xl font-extrabold text-pm-navy">
        3. Community Offer
      </h2>
      <p className="mt-1 text-sm text-pm-muted">
        Create a simple benefit for parishioners, families or community
        members. Optional but recommended.
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <FormField label="Offer Type">
          <LiveSelect
            field="offerType"
            options={[
              "Discount",
              "Cash Back",
              "Free Service Credit",
              "Bundled Package",
              "Community Benefit",
              "Other",
            ]}
          />
        </FormField>
        <FormField label="Offer Title">
          <LiveInput field="offerTitle" />
        </FormField>
      </div>
      <div className="mt-4">
        <FormField label="Offer Description">
          <LiveInput field="offerDescription" />
        </FormField>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <FormField label="Primary Call to Action">
          <LiveSelect
            field="ctaLabel"
            options={[
              "Request Information",
              "Redeem Offer",
              "Contact Sponsor",
              "Visit Website",
            ]}
          />
        </FormField>
        <FormField label="CTA Link">
          <LiveInput field="ctaUrl" placeholder="https://" />
        </FormField>
      </div>

      <h2 className="mt-10 text-2xl font-extrabold text-pm-navy">
        4. Support Area
      </h2>
      <p className="mt-1 text-sm text-pm-muted">
        Choose where your sponsor profile should appear.
      </p>
      <div className="mt-3">
        <LiveChips
          field="supportArea"
          options={[
            "Specific Parish",
            "Specific Cause",
            "City / Local Area",
            "Diocese",
            "Regional",
            "National",
          ]}
        />
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <FormField label="Preferred Parish or Community">
          <LiveSelect
            field="preferredParish"
            options={[
              "Saint Katharine Drexel Catholic Parish",
              "Casa Manresa",
              "Emmaus Community",
              "Other",
            ]}
          />
        </FormField>
        <FormField label="Preferred Cause">
          <LiveSelect
            field="preferredCause"
            options={[
              "General Parish Support",
              "Youth Ministry",
              "Emmaus Retreat",
              "St Vincent de Paul",
              "Mission Fund",
            ]}
          />
        </FormField>
      </div>

      <h2 className="mt-10 text-2xl font-extrabold text-pm-navy">
        5. Membership Plan
      </h2>
      <p className="mt-1 text-sm text-pm-muted">
        Start simple. You can upgrade visibility later as results grow.
      </p>
      <div className="mt-4">
        <SponsorPlanPicker />
      </div>

      <label className="mt-7 flex items-start gap-2 text-xs text-pm-ink">
        <input type="checkbox" className="mt-0.5" required />
        <span>
          I have read and agree to the{" "}
          <a href="#" className="font-bold text-pm-blue underline">
            ParishMart sponsor terms & conditions
          </a>
          .
        </span>
      </label>

      <FormFooter
        primaryHref="/onboarding/success"
        primary="Continue to Payment & Launch"
      />
    </OnboardingLayout>
  );
}

function SponsorPlanPicker() {
  const plan = useFieldValue("plan");
  const setField = useSetField();
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {PLANS.map((p) => {
        const active = plan === p.key;
        return (
          <button
            key={p.key}
            type="button"
            onClick={() => setField("plan", p.key)}
            className={`rounded-2xl border p-5 text-left transition ${
              active
                ? "border-pm-blue bg-pm-soft shadow-pm-card"
                : "border-pm-border bg-white hover:border-pm-blue/50"
            }`}
          >
            <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
              {p.tag}
            </p>
            <p className="mt-1 text-base font-extrabold text-pm-navy">{p.name}</p>
            <p className="mt-2 text-3xl font-extrabold text-pm-navy">
              {p.price}
              <span className="text-xs font-medium text-pm-muted"> /month</span>
            </p>
            <ul className="mt-3 space-y-1 text-xs text-pm-ink">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-1">
                  <span className="text-pm-blue">·</span> {f}
                </li>
              ))}
            </ul>
          </button>
        );
      })}
    </div>
  );
}

function SponsorPreview() {
  const offer = useFieldValue("offerTitle");
  const ctaLabel = useFieldValue("ctaLabel");
  const plan = useFieldValue("plan");

  return (
    <>
      <LivePreviewBadge />
      <div className="pm-card overflow-hidden">
        <Photo
          kind="business"
          ratio="auto"
          rounded="rounded-none"
          className="h-28 !rounded-t-[24px] !rounded-b-none"
        />
        <div className="space-y-2 p-4">
          <span className="pm-avatar !h-9 !w-9 rounded-xl text-xs">
            <LiveInitials field="brand" fallback="SP" />
          </span>
          <p className="text-sm font-bold text-pm-navy">
            <LiveText field="brand" fallback="Your Brand" />
          </p>
          <p className="text-[11px] text-pm-muted">
            <LiveText field="category" />
          </p>
          <p className="text-xs text-pm-muted">
            <LiveText field="description" />
          </p>
          <div className="rounded-xl bg-pm-soft/70 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
              Community benefit
            </p>
            <p className="mt-1 text-sm font-bold text-pm-navy">{offer}</p>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="pm-btn pm-btn-primary !px-3 !py-1.5 text-[11px]">
              {ctaLabel || "Request Info"}
            </span>
            <span className="pm-btn pm-btn-secondary !px-3 !py-1.5 text-[11px]">
              Visit Website
            </span>
          </div>
        </div>
      </div>
      <div className="pm-dark-panel p-5">
        <p className="text-xs uppercase tracking-wider text-white/70">
          Estimated quarterly reach
        </p>
        <p className="mt-2 text-3xl font-extrabold">
          {PLAN_REACH[plan] ?? "5K"}
        </p>
        <p className="text-xs text-white/70">
          Projected impressions for a {plan.toLowerCase()} plan.
        </p>
      </div>
    </>
  );
}
