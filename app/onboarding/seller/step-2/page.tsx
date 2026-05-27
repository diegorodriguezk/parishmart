import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import {
  SellerPreviewHero,
  SellerPreviewBody,
  PreviewLabel,
} from "@/components/onboarding/SellerPreviewCard";

export const metadata = {
  title: "Step 2 · Brand Story & Community Support · ParishMart",
};

const SUPPORTED_OPTIONS = [
  "Saint Katharine Drexel Parish",
  "SKD Emmaus Ministry",
  "St. Vincent de Paul Weston",
  "Youth Ministry",
  "Buyer selects cause at checkout",
];

const SUPPORT_MODELS = [
  "Part of every purchase supports the community",
  "Membership supports community visibility",
  "Specific campaign supports one cause",
  "Seller chooses a monthly supported cause",
];

export default function SellerStep2() {
  return (
    <SellerStepShell
      step={2}
      eyebrow="Step 2 of 5 · Brand Story & Community Support"
      title={
        <>
          Tell your story. Let AI make it{" "}
          <span className="pm-gradient-text">beautiful</span>.
        </>
      }
      description="Share a few details about your business and choose the parish, cause or ministry your products will support."
      preview={
        <>
          <SellerPreviewHero
            kind="merch"
            initials="HC"
            title="HarpsClub Merch"
            subtitle="Helping communities raise funds through purpose-driven products."
          />
          <SellerPreviewBody>
            <div className="rounded-2xl border border-pm-border bg-pm-soft/50 p-4">
              <PreviewLabel>About the seller</PreviewLabel>
              <p className="mt-2 text-sm text-pm-muted">
                HarpsClub Merch is a custom apparel and merchandise studio
                building branded products for parishes, ministries and faith
                communities — all designed to help raise funds and strengthen
                identity.
              </p>
            </div>
            <div className="rounded-2xl border border-pm-border bg-pm-soft/50 p-4">
              <PreviewLabel>Why we support the community</PreviewLabel>
              <p className="mt-2 text-sm text-pm-muted">
                Through ParishMart, HarpsClub Merch supports Saint Katharine
                Drexel Parish ministries, retreats and outreach programs through
                product sales and campaigns.
              </p>
            </div>
            <blockquote className="border-l-4 border-pm-cyan pl-4">
              <p className="text-sm font-extrabold tracking-tight text-pm-navy">
                &ldquo;A seller with purpose — branded merch that helps faith
                communities grow.&rdquo;
              </p>
              <p className="mt-2 text-xs text-pm-muted">
                Suggested tagline by ParishMart AI
              </p>
            </blockquote>
          </SellerPreviewBody>
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
              Short answers are enough — I&rsquo;ll turn them into polished
              storefront copy, an entrepreneur note and your purpose message.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Community / Parish Supported
            </span>
            <select
              defaultValue={SUPPORTED_OPTIONS[0]}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            >
              {SUPPORTED_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">
              Support Model
            </span>
            <select
              defaultValue={SUPPORT_MODELS[0]}
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            >
              {SUPPORT_MODELS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label className="block sm:col-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">
              About the Seller
            </span>
            <textarea
              rows={3}
              defaultValue="HarpsClub was built from years of experience in corporate apparel, uniforms, decoration and e-commerce. Through ParishMart, the seller helps faith-based and community organizations offer branded merchandise in a simple, scalable and purpose-driven way."
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="block text-xs font-extrabold text-pm-navy">
              Community Support Message
            </span>
            <textarea
              rows={3}
              defaultValue="Products can be connected to parish ministries such as Emmaus, Youth Ministry or St. Vincent de Paul to help generate recurring support through product sales."
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-pm-cyan/30 bg-gradient-to-br from-pm-soft to-white p-4">
          <div>
            <p className="text-sm font-extrabold text-pm-navy">
              AI will draft your seller story
            </p>
            <p className="text-xs text-pm-muted">
              About the Seller, tagline and purpose message.
            </p>
          </div>
          <button
            type="button"
            className="rounded-2xl bg-pm-navy px-4 py-3 text-xs font-extrabold text-white"
          >
            Generate Story
          </button>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/seller/step-1" className="pm-btn pm-btn-secondary">
            Back
          </Link>
          <Link
            href="/onboarding/seller/step-3"
            className="pm-btn pm-btn-primary"
          >
            Continue to Catalog
          </Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
