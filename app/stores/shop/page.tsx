import { ParishProfileHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShopContent } from "@/components/shop/ShopContent";

export const metadata = { title: "Shop · Saint Katharine Drexel" };

export default function StoresShopPage() {
  return (
    <>
      <ParishProfileHeader
        parishName="Saint Katharine Drexel"
        storeLabel="Parish Store"
        location="Weston, Florida"
        searchPlaceholder="Search products, ministries, causes, local businesses..."
        activeTab="shop"
      />
      <ShopContent
        heroKicker="SKD Parish Store · Shop with Purpose"
        heroTitle={
          <>
            Shop <span className="pm-gradient-text">SKD.</span>
            <br /> Support your{" "}
            <span className="pm-gradient-text">parish.</span>
          </>
        }
        heroDescription="Find religious gifts, parish merch, sponsors and Local Biz supporters connected to Saint Katharine Drexel. Every purchase contributes to ministries and community causes."
        searchPlaceholder="Search SKD products, ministries, causes, local businesses..."
      />
      <Footer />
    </>
  );
}
