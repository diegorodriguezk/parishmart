"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Building2,
  Heart,
  ShoppingBag,
  Star,
  Package,
  Briefcase,
  ArrowLeft,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step1Option = {
  id: string;
  Icon: LucideIcon;
  badge: string;
  title: string;
  description: string;
  href: string | null;
};

type Step2Option = {
  id: string;
  Icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

const STEP1: Step1Option[] = [
  {
    id: "parish",
    Icon: Building2,
    badge: "Parish",
    title: "Parish",
    description:
      "Activate your parish community, open a store and launch giving campaigns connected to your ministries.",
    href: "/onboarding/parish",
  },
  {
    id: "cause",
    Icon: Heart,
    badge: "Ministry",
    title: "Cause or Ministry",
    description:
      "Launch giving campaigns and impact pages for ministries, retreats and missions inside the ecosystem.",
    href: "/onboarding/cause",
  },
  {
    id: "seller-biz",
    Icon: ShoppingBag,
    badge: "Seller / Business",
    title: "Seller or Business",
    description:
      "Sell products or offer services — connected to causes your customers and community care about.",
    href: null,
  },
  {
    id: "sponsor",
    Icon: Star,
    badge: "Sponsor",
    title: "Sponsor",
    description:
      "Promote your brand while supporting parishes, ministries and community causes with parishioner benefits.",
    href: "/onboarding/sponsor",
  },
];

const STEP2: Step2Option[] = [
  {
    id: "products",
    Icon: Package,
    title: "I sell products",
    description:
      "Physical or digital items connected to a parish cause. Set up a product storefront.",
    href: "/onboarding/seller",
  },
  {
    id: "services",
    Icon: Briefcase,
    title: "I offer services",
    description:
      "A local business with parishioner benefits, service listings and community visibility.",
    href: "/onboarding/local-business",
  },
];

function IconBadge({ Icon }: { Icon: LucideIcon }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan text-white">
      <Icon className="h-5 w-5" aria-hidden />
    </div>
  );
}

export function OnboardingChooser() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);

  function handleSelect1(opt: Step1Option) {
    if (opt.href) {
      router.push(opt.href);
    } else {
      setStep(2);
    }
  }

  function handleSelect2(opt: Step2Option) {
    router.push(opt.href);
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Step 1 */}
      {step === 1 && (
        <div key="step1" className="onboarding-step space-y-8">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-pm-blue">
              Let&apos;s get you started
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-pm-navy sm:text-4xl">
              What best describes your role?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-pm-muted">
              Choose the option that fits you best. Each path has a tailored
              activation experience.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {STEP1.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelect1(opt)}
                className="pm-card flex cursor-pointer flex-col gap-3 p-7 text-left transition-all duration-200 hover:-translate-y-0.5 hover:!border-pm-blue/40 hover:!shadow-pm-soft"
              >
                <div className="flex items-start justify-between">
                  <IconBadge Icon={opt.Icon} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                    {opt.badge}
                  </p>
                  <p className="mt-0.5 text-lg font-extrabold text-pm-navy">
                    {opt.title}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-pm-muted">
                  {opt.description}
                </p>
                <p className="mt-auto text-sm font-bold text-pm-blue">
                  Select {opt.href === null ? "→ more options" : "→"}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 — Seller / Business sub-question */}
      {step === 2 && (
        <div key="step2" className="onboarding-step space-y-8">
          <div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-pm-blue hover:text-pm-navy"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back
            </button>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-pm-muted">
              Step 2 of 2 · Seller or Business
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-pm-navy sm:text-4xl">
              What best describes what you offer?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-pm-muted">
              This helps us point you to the right setup flow. You can always
              expand your presence later.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STEP2.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelect2(opt)}
                className="pm-card flex cursor-pointer flex-col gap-3 p-6 text-left transition-all duration-200 hover:-translate-y-0.5 hover:!border-pm-blue/40 hover:!shadow-pm-soft"
              >
                <div className="flex items-start justify-between">
                  <IconBadge Icon={opt.Icon} />
                </div>
                <p className="text-base font-extrabold text-pm-navy">
                  {opt.title}
                </p>
                <p className="text-sm leading-relaxed text-pm-muted">
                  {opt.description}
                </p>
                <p className="mt-auto text-sm font-bold text-pm-blue">
                  Select →
                </p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
