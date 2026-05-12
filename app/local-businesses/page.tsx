import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, SectionHeader, FilterChips, DarkPanel } from "@/components/Sections";
import { BusinessCard } from "@/components/Cards";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = { title: "Local Biz Supporters · ParishMart" };

export default function LocalBusinessCategoryPage() {
  return (
    <>
      <Header />

      <Section width="wide" className="!py-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Local Biz Supporters" }]} />
      </Section>

      <Section width="wide" className="!pb-2 !pt-2">
        <div className="relative isolate overflow-hidden rounded-3xl border border-pm-border shadow-pm-card p-6 sm:p-8 min-h-[260px] sm:min-h-[300px]">
          <Photo kind="house" ratio="auto" rounded="rounded-none" className="absolute inset-0 -z-10 !rounded-none" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs font-bold text-pm-blue">
                Weston Town Center · Local Business District
              </p>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-pm-navy md:text-5xl">
                Local Biz <span className="pm-gradient-text">Supporters</span>
              </h1>
              <p className="mt-3 max-w-md text-sm text-pm-muted">
                Discover businesses from the community supporting SKD, Emmaus
                and local parish initiatives through products, services and
                special parishioner offers.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a className="pm-btn pm-btn-primary" href="#featured">Explore Businesses</a>
                <a className="pm-btn pm-btn-secondary" href="/onboarding">Become a Biz Supporter</a>
              </div>
            </div>
            <div className="pm-card !shadow-none p-4">
              <p className="text-xs font-bold text-pm-blue">Support Local</p>
              <p className="mt-1 max-w-xs text-xs text-pm-muted">
                Every booking or purchase helps strengthen businesses supporting the parish community.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section width="wide" className="!py-4">
        <FilterChips
          items={["All", "Photography", "Wellness", "Restaurants", "Real Estate", "Professional"]}
          active="All"
        />
      </Section>

      <Section id="featured" width="wide" className="!pt-2">
        <SectionHeader
          title="Featured Businesses"
          description="Simple, visual and easy-to-scan business discovery experience."
          right={<a href="#" className="font-bold text-pm-blue">View All</a>}
        />
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          <BusinessCard photo="retreat" initials="MS" title="Maria's Studios" description="Photography for families, Emmaus retreats and parish events." tags={["Photography", "Weston, FL", "Supports Emmaus"]} offer="10% OFF" offerDescription="Family & event sessions" impactText="Supports Emmaus retreat memories and parish events." primaryCta="Book" />
          <BusinessCard photo="retreat" initials="CM" title="Casa Manresa" description="Retreats, spiritual formation and community experiences." tags={["Retreats", "Formation", "SKD Partner"]} offer="15% OFF" offerDescription="Selected retreat experiences" impactText="Supports faith formation and local retreat participation." primaryCta="Explore" />
          <BusinessCard photo="house" initials="RE" title="Local Realty Supporter" description="Trusted real estate guidance for parishioners and families." tags={["Real Estate", "Local Biz", "Verified"]} offer="Free" offerLabel="Parishioner offer" offerDescription="Initial consultation" impactText="Supports parish events and community fundraising." primaryCta="Contact" />
          <BusinessCard photo="food" initials="FD" title="Community Food Partner" description="Catering and hospitality services for retreats and events." tags={["Food", "Events", "Emmaus"]} offer="$25 OFF" offerDescription="Catering packages" impactText="Provides support for ministry and fundraising events." primaryCta="Order" />
          <BusinessCard photo="business" initials="LF" title="Legal & Finance" description="Professional services helping families and businesses." tags={["Professional", "Family Services", "Verified"]} offer="20% OFF" offerDescription="Selected consultations" impactText="Contributes to parish community initiatives." primaryCta="Book" />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          <BusinessCard photo="business" initials="WL" title="Wellness Partner" description="Health and wellness support for parishioners and families." tags={["Wellness", "Family", "Community"]} offer="20% OFF" offerDescription="Selected wellness sessions" impactText="Promotes healthier and stronger local communities." primaryCta="Book" />
        </div>
      </Section>

      <Section width="wide">
        <DarkPanel
          title="Become a Biz Supporter"
          description="Offer services to the community while supporting ministries, causes and parish initiatives."
          cta="Join Us"
          ctaHref="/onboarding"
        />
      </Section>

      <Footer />
    </>
  );
}
