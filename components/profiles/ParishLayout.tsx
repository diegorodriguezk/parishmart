import type { ReactNode } from "react";
import { ParishProfileHeader } from "@/components/Header";
import type { Parish } from "@/lib/catalog";

export function ParishLayout({
  parish,
  activeTab,
  searchPlaceholder,
  children,
}: {
  parish: Parish;
  activeTab: "shop" | "give" | "ministries" | "local-biz" | "sponsors" | "about";
  searchPlaceholder?: string;
  children: ReactNode;
}) {
  return (
    <>
      <ParishProfileHeader
        parishName={parish.shortName}
        storeLabel="Parish Store"
        location={parish.location}
        searchPlaceholder={searchPlaceholder ?? "Search products, ministries, causes, local businesses..."}
        activeTab={activeTab}
      />
      {children}
    </>
  );
}
