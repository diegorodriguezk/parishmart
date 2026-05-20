"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShoppingBag,
  Heart,
  Users,
  Store,
  Award,
  type LucideIcon,
} from "lucide-react";

const ITEMS: { href: string; label: string; Icon: LucideIcon }[] = [
  { href: "/shop", label: "Shop", Icon: ShoppingBag },
  { href: "/give", label: "Give", Icon: Heart },
  { href: "/communities", label: "Communities", Icon: Users },
  { href: "/local-businesses", label: "Local Businesses", Icon: Store },
  { href: "/sponsors", label: "Sponsors", Icon: Award },
];

export function PrimaryNav({ className = "" }: { className?: string }) {
  const pathname = usePathname() ?? "";
  return (
    <nav
      className={`flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {ITEMS.map(({ href, label, Icon }) => {
        const isActive =
          pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm font-bold transition ${
              isActive
                ? "border-pm-navy bg-pm-navy text-white"
                : "border-pm-border bg-white text-pm-navy hover:border-pm-blue hover:text-pm-blue"
            }`}
          >
            <Icon className="h-4 w-4" aria-hidden />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
