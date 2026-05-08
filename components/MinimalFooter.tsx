import Link from "next/link";

export function MinimalFooter() {
  return (
    <footer className="border-t border-pm-border bg-white py-6">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-6 text-xs text-pm-muted sm:flex-row">
        <span>© 2026 ParishMart · Secure checkout powered by Stripe</span>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-pm-navy">Help</Link>
          <Link href="/" className="hover:text-pm-navy">Terms</Link>
          <Link href="/" className="hover:text-pm-navy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
