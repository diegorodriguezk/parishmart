import Link from "next/link";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { CauseGivePreview } from "@/components/onboarding/OnboardingPreviews";

export const metadata = { title: "Step 2 · Story & Mission · ParishMart" };

const STEP_TITLES = ["Profile", "Story", "Giving", "Launch"];

const CTA_OPTIONS = ["Give Now", "Support the Cause", "Join the Retreat", "Shop & Support", "Share the Impact"];

export default function CauseStep2() {
  return (
    <SellerStepShell
      step={2}
      totalSteps={4}
      allStepTitles={STEP_TITLES}
      badge="Recommended"
      eyebrow="Step 2 of 4 · Story & Mission"
      title={<>Tell your <span className="pm-gradient-text">cause&rsquo;s story</span>.</>}
      description="Share your mission and tagline to connect with supporters. A compelling story increases giving by up to 3×."
      preview={<CauseGivePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="mb-5 flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-pm-border bg-pm-soft text-sm font-extrabold text-pm-blue">
            AI
          </span>
          <div>
            <p className="text-xs font-extrabold text-pm-blue">ParishMart Concierge</p>
            <p className="mt-1 text-sm text-pm-muted">
              Causes with a personal story raise 3× more than those with only a goal amount. Make it human.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Cause Tagline</span>
            <input
              defaultValue="Transforming lives one retreat weekend at a time."
              className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Mission Statement</span>
            <textarea
              rows={3}
              defaultValue="To encounter Jesus Christ in community through a weekend of reflection, brotherhood and renewal — equipping men to be better husbands, fathers and leaders."
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Full Story (optional)</span>
            <textarea
              rows={4}
              defaultValue="The Emmaus Men's Retreat has been a cornerstone of our parish community for over 20 years. What started as a small gathering of 12 men has grown into a movement that has touched the lives of hundreds of fathers, sons and brothers."
              className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
            />
          </label>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Cover Photo</span>
            <div className="mt-1.5 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-pm-border bg-pm-soft/40 p-6 text-center transition-colors hover:border-pm-blue hover:bg-pm-soft">
              <svg className="h-6 w-6 text-pm-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              <p className="text-xs font-bold text-pm-navy">Upload cover photo</p>
              <p className="text-[11px] text-pm-muted">16:9 · min 1280×720px</p>
            </div>
          </label>
          <label className="block">
            <span className="block text-xs font-extrabold text-pm-navy">Cause Logo / Icon (optional)</span>
            <div className="mt-1.5 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-pm-border bg-pm-soft/40 p-6 text-center transition-colors hover:border-pm-blue hover:bg-pm-soft">
              <svg className="h-6 w-6 text-pm-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              <p className="text-xs font-bold text-pm-navy">Upload logo</p>
              <p className="text-[11px] text-pm-muted">1:1 · min 400×400px</p>
            </div>
          </label>
        </div>

        <p className="mb-3 mt-7 text-xs font-bold text-pm-navy">Primary Call to Action</p>
        <div className="flex flex-wrap gap-2">
          {CTA_OPTIONS.map((o) => (
            <label
              key={o}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-pm-border bg-white px-3.5 py-2 text-sm font-medium text-pm-navy has-[:checked]:border-pm-blue has-[:checked]:bg-pm-soft"
            >
              <input type="radio" name="cta" defaultChecked={o === "Give Now"} className="sr-only" />
              {o}
            </label>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/cause/step-1" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/cause/step-3" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}
