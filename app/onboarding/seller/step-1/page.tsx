import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { Photo } from "@/components/Photo";

export const metadata = { title: "Step 1 · Business Profile · ParishMart" };

const FIELDS = [
  { label: "Business Name", value: "Weston Family Dental", type: "input" },
  { label: "Contact Name", value: "Maria", type: "input" },
  {
    label: "Service Category",
    value: "Health & Wellness",
    type: "select",
    options: [
      "Health & Wellness",
      "Real Estate",
      "Insurance",
      "Legal Services",
      "Home Services",
      "Professional Services",
    ],
  },
  { label: "Phone", value: "(954) 555-0148", type: "input" },
  { label: "Email", value: "hello@westonfamilydental.com", type: "input" },
  {
    label: "Website or Social Media",
    value: "westonfamilydental.com",
    type: "input",
  },
  {
    label: "Best way to contact you",
    value: "Phone",
    type: "select",
    options: ["Phone", "Email", "Website", "Social Media"],
  },
  { label: "Address", value: "2501 South Post Road", type: "input" },
  { label: "City", value: "Weston", type: "input" },
  { label: "State", value: "FL", type: "input" },
  { label: "Zip Code", value: "33327", type: "input" },
  { label: "Country", value: "United States", type: "input" },
];

export default function LocalBizStep1() {
  return (
    <SellerStepShell
      step={1}
      eyebrow="Step 1 of 5 · Business Profile"
      title={
        <>
          Let&rsquo;s create your{" "}
          <span className="pm-gradient-text">service business page</span>.
        </>
      }
      description="Basic information to identify the business, location, service area and main category."
      preview={
        <>
          {/* HERO — photo with white fade + content */}
          <div className="relative min-h-[200px] overflow-hidden">
            <Photo
              kind="business"
              ratio="auto"
              rounded="rounded-none"
              className="!rounded-none absolute inset-0 h-full"
              overlay="none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/10" />
            <div className="relative flex items-start gap-4 p-5">
              <div className="flex flex-1 flex-col gap-2.5">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-pm-blue to-pm-cyan text-xs font-extrabold text-white shadow-pm-soft">
                  MS
                </span>
                <div>
                  <h3 className="text-lg font-extrabold leading-tight tracking-tight text-pm-navy">
                    Maria&rsquo;s Studios
                  </h3>
                  <p className="text-[11px] text-pm-muted">
                    Photography for SKD families, retreats &amp; events.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {["Weston, FL", "Supports Emmaus", "Photography"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-pm-border bg-white px-2 py-0.5 text-[9px] font-medium text-pm-navy"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <span className="cursor-default rounded-full bg-pm-navy px-3 py-1.5 text-[10px] font-extrabold text-white">
                    View Services
                  </span>
                  <span className="cursor-default rounded-full border border-pm-border bg-white px-3 py-1.5 text-[10px] font-extrabold text-pm-navy">
                    Share
                  </span>
                </div>
              </div>
              <div className="w-28 shrink-0 rounded-[20px] border border-pm-border bg-white p-3 shadow-pm-soft">
                <p className="text-[10px] font-extrabold text-pm-navy">
                  Parishioner Coupon
                </p>
                <p className="mt-0.5 text-[9px] text-pm-muted">
                  Exclusive for SKD parishioners.
                </p>
                <div className="mt-2 rounded-xl bg-gradient-to-br from-pm-blue to-pm-cyan p-2.5 text-white">
                  <p className="text-[7px] font-bold uppercase tracking-wider opacity-80">
                    Community offer
                  </p>
                  <p className="text-xl font-extrabold leading-none">10% OFF</p>
                  <p className="mt-0.5 text-[8px] opacity-90">
                    Photography sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FOUNDER — 2 cols text + photo */}
          <div className="grid grid-cols-[1fr_1fr] border-t border-pm-border">
            <div className="flex flex-col justify-center gap-2 p-4">
              <p className="text-[9px] font-bold uppercase tracking-wider text-pm-blue">
                Meet the founder
              </p>
              <p className="text-sm font-extrabold text-pm-navy">
                Maria Gonzalez
              </p>
              <p className="text-[10px] text-pm-muted">
                Founder · Photographer · SKD &amp; Emmaus supporter
              </p>
              <p className="text-[10px] leading-relaxed text-pm-muted">
                Local photographer serving SKD families for over three years,
                capturing weddings, baptisms and retreats.
              </p>
            </div>
            <div className="relative overflow-hidden">
              <Photo
                kind="retreat"
                ratio="auto"
                rounded="rounded-none"
                className="!rounded-none !border-0 absolute inset-0 h-full"
              />
            </div>
          </div>

          {/* SERVICES — video + list */}
          <div className="grid grid-cols-[1fr_1fr] border-t border-pm-border">
            <div className="relative min-h-[130px] overflow-hidden">
              <Photo
                kind="retreat"
                ratio="auto"
                rounded="rounded-none"
                className="!rounded-none absolute inset-0 h-full"
                overlay="strong"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-pm-card">
                  <svg
                    className="h-4 w-4 translate-x-0.5 text-pm-blue"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1 p-4">
              <p className="mb-2 text-[9px] font-bold uppercase tracking-wider text-pm-blue">
                Services
              </p>
              {[
                { name: "Family Photography", price: "From $150" },
                { name: "Retreat Coverage", price: "From $350" },
                { name: "Parish Events", price: "Quote" },
              ].map((s) => (
                <div
                  key={s.name}
                  className="flex items-center justify-between border-b border-pm-border/50 py-1 last:border-0"
                >
                  <p className="text-[10px] font-medium text-pm-navy">
                    {s.name}
                  </p>
                  <span className="text-[10px] font-bold text-pm-blue">
                    {s.price}
                  </span>
                </div>
              ))}
              <span className="mt-2 cursor-default rounded-full bg-pm-navy py-1.5 text-center text-[10px] font-extrabold text-white">
                Contact us
              </span>
            </div>
          </div>
        </>
      }
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="mb-5 flex items-start gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-pm-border bg-pm-soft text-sm font-extrabold text-pm-blue">
            AI
          </span>
          <div>
            <p className="text-xs font-extrabold text-pm-blue">
              ParishMart Concierge
            </p>
            <p className="mt-1 text-sm text-pm-muted">
              Start with a few simple answers. The next steps adapt to your
              service category automatically.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {FIELDS.map((f) => (
            <label key={f.label} className="block">
              <span className="block text-xs font-extrabold text-pm-navy">
                {f.label}
              </span>
              {f.type === "select" ? (
                <select
                  defaultValue={f.value}
                  className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
                >
                  {f.options?.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              ) : (
                <input
                  defaultValue={f.value}
                  className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
                />
              )}
            </label>
          ))}
          <label className="block sm:col-span-2">
            <div className="flex items-baseline justify-between">
              <span className="block text-xs font-extrabold text-pm-navy">
                Headline
              </span>
              <span className="text-[10px] font-medium text-pm-muted">
                Max 220 characters
              </span>
            </div>
            <input
              maxLength={220}
              defaultValue="Trusted family dental care for Weston families — gentle, faith-friendly and built on community."
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block sm:col-span-2">
            <div className="flex items-baseline justify-between">
              <span className="block text-xs font-extrabold text-pm-navy">
                Business Description
              </span>
              <span className="text-[10px] font-medium text-pm-muted">
                Max 2,600 characters
              </span>
            </div>
            <textarea
              rows={5}
              maxLength={2600}
              defaultValue="Weston Family Dental is a local family-owned dental practice serving the Weston community with preventive, cosmetic and emergency dental care for children, adults and seniors. We focus on long-term family relationships, gentle care for kids, and modern technology delivered in a calm and welcoming environment."
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">
              Service Area
            </span>
            <input
              defaultValue="Weston, Southwest Ranches, Davie, Pembroke Pines"
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/seller" className="pm-btn pm-btn-secondary">
            Back
          </Link>
          <Link
            href="/onboarding/seller/step-2"
            className="pm-btn pm-btn-primary"
          >
            Continue
          </Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
