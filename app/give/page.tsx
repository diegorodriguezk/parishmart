import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GiveContent } from "@/components/give/GiveContent";

export const metadata = { title: "Give with Love · ParishMart" };

export default function GiveHomePage() {
  return (
    <>
      <Header />
      <GiveContent causeHref="/parishes/skd/causes/emmaus" />
      <Footer />
    </>
  );
}
