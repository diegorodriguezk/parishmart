"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Briefcase, Package } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Logo } from "@/components/Logo";

type Option = {
  id: string;
  Icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

const OPTIONS: Option[] = [
  {
    id: "services",
    Icon: Briefcase,
    title: "I offer services",
    description:
      "A local business with parishioner benefits, service listings and community visibility.",
    href: "/onboarding/seller/step-1",
  },
  {
    id: "products",
    Icon: Package,
    title: "I sell products",
    description:
      "Physical or digital items connected to a parish cause. Set up a product storefront.",
    href: "/onboarding/local-business/step-1",
  },
];

function IconBadge({ Icon }: { Icon: LucideIcon }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan text-white">
      <Icon className="h-5 w-5" aria-hidden />
    </div>
  );
}

export default function SellerTypeChooser() {
  const router = useRouter();

  return (
    <main className="min-h-dvh bg-gradient-to-br from-white via-pm-soft to-white">
      <div className="mx-auto max-w-[1320px] px-4 py-8 sm:px-6 lg:py-12">
        <div className="mb-8 flex items-center justify-between gap-3">
          <Logo />
          <Link
            href="/onboarding"
            className="hidden text-sm font-bold text-pm-blue hover:underline sm:inline"
          >
            Save &amp; Exit
          </Link>
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          <Link
            href="/onboarding/seller"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-pm-blue hover:text-pm-navy"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back
          </Link>

          <div className="text-center">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-pm-muted">
              Step 2 of 2 · Seller or Business
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-pm-navy sm:text-4xl">
              What best describes what you offer?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-pm-muted">
              This helps us point you to the right setup flow. You can always
              expand your presence later.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => router.push(opt.href)}
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
      </div>
    </main>
  );
}
