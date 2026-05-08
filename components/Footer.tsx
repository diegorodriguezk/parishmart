import Link from "next/link";

const COLS = [
  {
    title: "Explore",
    links: [
      { label: "Shop", href: "/shop" },
      { label: "Give", href: "/give" },
      { label: "Parish Stores", href: "/stores" },
      { label: "Causes", href: "/give" },
      { label: "Local Businesses", href: "/local-businesses" },
    ],
  },
  {
    title: "Join",
    links: [
      { label: "Open Your Store", href: "/onboarding/parish" },
      { label: "Become a Seller", href: "/onboarding/seller" },
      { label: "Become a Sponsor", href: "/onboarding/sponsor" },
      { label: "Launch a Campaign", href: "/onboarding/parish" },
    ],
  },
  {
    title: "Communities",
    links: [
      { label: "SKD Weston", href: "/stores" },
      { label: "Emmaus", href: "/stores" },
      { label: "Schoenstatt", href: "/stores" },
      { label: "FACE", href: "/stores" },
      { label: "Casa Manresa", href: "/stores" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "How It Works", href: "/" },
      { label: "Support", href: "/" },
      { label: "For Parishes", href: "/onboarding/parish" },
      { label: "For Businesses", href: "/onboarding/local-business" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-20 bg-pm-navy text-white">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-14 md:grid-cols-[1.2fr_repeat(4,_1fr)]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 font-extrabold text-white">
              P
            </span>
            <span className="text-xl font-extrabold tracking-tight">ParishMart</span>
          </div>
          <p className="max-w-xs text-sm text-white/70">
            Unifying faith, commerce and compassion to build stronger
            communities.
          </p>
        </div>
        {COLS.map((col) => (
          <div key={col.title} className="space-y-3 text-sm">
            <h4 className="text-base font-bold text-white">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/70 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-white/60">
          <span>© 2026 ParishMart. Shop with Purpose. Give with Love.</span>
          <span>Marketplace · Giving · Parish Stores · Local Supporters</span>
        </div>
      </div>
    </footer>
  );
}
