import { ParishProfileHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShopContent } from "@/components/shop/ShopContent";

export const metadata = { title: "Ministries · Saint Katharine Drexel" };

export default function StoresMinistriesPage() {
  return (
    <>
      <ParishProfileHeader
        parishName="Saint Katharine Drexel"
        storeLabel="Parish Store"
        location="Weston, Florida"
        searchPlaceholder="Search ministries, retreats, missions and outreach…"
        activeTab="ministries"
      />
      <ShopContent
        heroKicker="SKD Parish Store · Explore Ministries"
        heroTitle={
          <>
            Ministries of <span className="pm-gradient-text">SKD.</span>
            <br /> Find your{" "}
            <span className="pm-gradient-text">purpose.</span>
          </>
        }
        heroDescription="Discover the ministries, retreats and outreach communities at Saint Katharine Drexel. Each one connects parishioners with formation, service and faith."
        searchPlaceholder="Search SKD ministries, retreats, missions and outreach…"
        parish="skd"
      />
      <Footer />
    </>
  );
}
