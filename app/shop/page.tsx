import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShopContent } from "@/components/shop/ShopContent";

export const metadata = { title: "Shop · ParishMart" };

export default function ShopPage() {
  return (
    <>
      <Header />
      <ShopContent />
      <Footer />
    </>
  );
}
