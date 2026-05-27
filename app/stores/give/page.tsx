import { ParishProfileHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GiveContent } from "@/components/give/GiveContent";

export const metadata = { title: "Give · Saint Katharine Drexel" };

export default function StoresGivePage() {
  return (
    <>
      <ParishProfileHeader
        parishName="Saint Katharine Drexel"
        storeLabel="Parish Store"
        location="Weston, Florida"
        searchPlaceholder="Search SKD ministries, causes and ways to give…"
        activeTab="give"
      />
      <GiveContent
        heroKicker="SKD Parish Store · Give with Love"
        heroTitle={
          <>
            Give to <span className="pm-gradient-text">SKD.</span>
            <br /> Fuel the ministries you{" "}
            <span className="pm-gradient-text">love.</span>
          </>
        }
        heroDescription="Choose a ministry, mission or outreach at Saint Katharine Drexel and support it directly. 100% of your gift goes where you direct it."
        searchPlaceholder="Search SKD ministries, causes, missions and outreach"
        causeHref="/stores/give/giving"
        ministriesHref="/stores"
        parish="skd"
      />
      <Footer />
    </>
  );
}
