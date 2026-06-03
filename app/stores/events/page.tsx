import Link from "next/link";
import { ParishProfileHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, SectionHeader } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = { title: "Events · Saint Katharine Drexel" };

const FILTERS = ["All", "Retreats", "Family", "Workshops", "Youth", "Fundraisers"];

const FEATURED_EVENT = {
  category: "Retreat",
  title: "Emmaus Men's Retreat",
  location: "Saint Katharine Drexel Retreat Center · Weston, FL",
  description:
    "A weekend of encounter, faith and brotherhood. Join us for talks, prayer, sacraments and community.",
  tags: ["Retreat", "Faith", "Brotherhood"],
  starts: { day: "Sun, Aug 23", time: "8:00 AM" },
  ends: { day: "Sun, Aug 23", time: "6:00 PM" },
  supports: { org: "SKD Ministries", note: "Community impact" },
  organizer: { name: "Emmaus SKD", note: "Men's ministry" },
  price: "$65.00",
  priceNote: "General Admission · Includes meals, materials and event support.",
  spotsLeft: 12,
  month: "AUG",
  day: "23",
  weekday: "SUN",
};

const UPCOMING_EVENTS = [
  {
    month: "AUG", day: "23", weekday: "SUN",
    category: "Retreat", title: "Emmaus Men's Retreat",
    description: "Faith, brotherhood and community for SKD parishioners.",
    price: "$65",
    filter: "Retreats",
  },
  {
    month: "SEP", day: "12", weekday: "SAT",
    category: "Family", title: "Parish Community Day",
    description: "Families, ministries and local businesses together after Mass.",
    price: "Free",
    filter: "Family",
  },
  {
    month: "OCT", day: "04", weekday: "SUN",
    category: "Workshop", title: "Local Biz Onboarding",
    description: "Help entrepreneurs join ParishMart and support their community.",
    price: "$25",
    filter: "Workshops",
  },
  {
    month: "NOV", day: "08", weekday: "SAT",
    category: "Youth", title: "Youth Ministry Fundraiser",
    description: "A community experience supporting youth programs and causes.",
    price: "$15",
    filter: "Youth",
  },
];

function DateBadge({ month, day, weekday }: { month: string; day: string; weekday: string }) {
  return (
    <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl border border-pm-border bg-white shadow-pm-soft">
      <p className="text-[10px] font-bold uppercase tracking-wider text-pm-muted">{month}</p>
      <p className="text-2xl font-extrabold leading-none text-pm-navy">{day}</p>
      <p className="text-[10px] font-bold uppercase tracking-wider text-pm-muted">{weekday}</p>
    </div>
  );
}

export default function StoresEventsPage() {
  return (
    <>
      <ParishProfileHeader
        parishName="Saint Katharine Drexel"
        storeLabel="Parish Store"
        location="Weston, Florida"
        searchPlaceholder="Search events, ministries, causes..."
        activeTab="shop"
      />

      <Section width="wide" className="!py-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Parish Store", href: "/parishes/skd" },
            { label: "Events" },
          ]}
        />
      </Section>

      {/* HERO — two cards */}
      <Section width="wide" className="!pb-2 !pt-0">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_1fr] lg:items-stretch">
          <div className="pm-card flex min-h-[340px] flex-col justify-center gap-5 p-6 sm:p-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-pm-soft px-3 py-1 text-[11px] font-bold text-pm-blue">
              Parish Events
            </span>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-pm-navy md:text-4xl">
              Events that <span className="pm-gradient-text">activate community.</span>
            </h1>
            <p className="max-w-md text-sm text-pm-muted">
              Retreats, parish activities, fundraising events, workshops and family experiences connected to causes, local businesses and sponsors.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#upcoming" className="pm-btn pm-btn-primary">View Upcoming Events</Link>
            </div>
          </div>

          <Link
            href="/parishes/skd"
            className="relative isolate overflow-hidden rounded-3xl border border-pm-border shadow-pm-card transition hover:-translate-y-0.5 hover:shadow-pm-soft"
          >
            <Photo
              kind="church"
              src="/brand/skd/church.jpg"
              ratio="auto"
              rounded="rounded-none"
              className="absolute inset-0 -z-10 !rounded-none"
              overlay="none"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/35 via-black/15 to-black/55" />
            <div className="flex h-full flex-col justify-end gap-3 p-6 text-white sm:p-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white/85 backdrop-blur">
                Featured Parish Store
              </span>
              <h2 className="text-2xl font-extrabold leading-tight md:text-3xl">
                Saint Katharine Drexel
              </h2>
              <p className="text-sm text-white/85">Weston, FL</p>
            </div>
          </Link>
        </div>
      </Section>

      {/* FEATURED EVENT */}
      <Section width="wide" className="!pt-3">
        <span className="pm-kicker">Event of the Month</span>
        <div className="mt-4 pm-card overflow-hidden lg:grid lg:grid-cols-[1fr_1.8fr_auto] lg:items-stretch">
          {/* Photo column */}
          <div className="relative min-h-[200px] overflow-hidden lg:min-h-0">
            <Photo kind="retreat" ratio="auto" rounded="rounded-none" className="!rounded-none absolute inset-0 h-full" overlay="none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <DateBadge month={FEATURED_EVENT.month} day={FEATURED_EVENT.day} weekday={FEATURED_EVENT.weekday} />
            </div>
            <div className="absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1 text-xs font-bold text-white backdrop-blur">
              {FEATURED_EVENT.spotsLeft} spots left
            </div>
          </div>

          {/* Details column */}
          <div className="flex flex-col gap-4 p-6 sm:p-7">
            <div>
              <span className="pm-label">{FEATURED_EVENT.category}</span>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight text-pm-navy md:text-3xl">
                {FEATURED_EVENT.title}
              </h2>
              <p className="mt-1 text-sm font-semibold text-pm-blue">{FEATURED_EVENT.location}</p>
              <p className="mt-2 text-sm text-pm-muted">{FEATURED_EVENT.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {FEATURED_EVENT.tags.map((t) => (
                  <span key={t} className="pm-label">{t}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-pm-border bg-pm-soft/40 p-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-pm-muted">Starts</p>
                <p className="mt-0.5 text-sm font-extrabold text-pm-navy">{FEATURED_EVENT.starts.day}</p>
                <p className="text-xs text-pm-muted">{FEATURED_EVENT.starts.time}</p>
              </div>
              <div className="rounded-2xl border border-pm-border bg-pm-soft/40 p-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-pm-muted">Ends</p>
                <p className="mt-0.5 text-sm font-extrabold text-pm-navy">{FEATURED_EVENT.ends.day}</p>
                <p className="text-xs text-pm-muted">{FEATURED_EVENT.ends.time}</p>
              </div>
              <div className="rounded-2xl border border-pm-border bg-pm-soft/40 p-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-pm-muted">Supports</p>
                <p className="mt-0.5 text-sm font-extrabold text-pm-navy">{FEATURED_EVENT.supports.org}</p>
                <p className="text-xs text-pm-muted">{FEATURED_EVENT.supports.note}</p>
              </div>
              <div className="rounded-2xl border border-pm-border bg-pm-soft/40 p-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-pm-muted">Organizer</p>
                <p className="mt-0.5 text-sm font-extrabold text-pm-navy">{FEATURED_EVENT.organizer.name}</p>
                <p className="text-xs text-pm-muted">{FEATURED_EVENT.organizer.note}</p>
              </div>
            </div>
          </div>

          {/* Booking column */}
          <div className="flex flex-col gap-4 border-t border-pm-border p-6 lg:border-l lg:border-t-0 lg:min-w-[200px]">
            <div>
              <p className="text-xs font-bold text-pm-muted">From</p>
              <p className="text-3xl font-extrabold text-pm-navy">{FEATURED_EVENT.price}</p>
              <p className="mt-1 text-xs text-pm-muted">{FEATURED_EVENT.priceNote}</p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-pm-border bg-pm-soft/40 px-4 py-2">
              <button type="button" className="text-lg font-bold text-pm-navy">−</button>
              <span className="flex-1 text-center text-sm font-bold">1</span>
              <button type="button" className="text-lg font-bold text-pm-navy">+</button>
            </div>
            <button type="button" className="pm-btn pm-btn-primary w-full">Reserve My Spot</button>
            <button type="button" className="pm-btn pm-btn-secondary w-full">Become a Sponsor</button>
          </div>
        </div>
      </Section>

      {/* UPCOMING EVENTS */}
      <Section id="upcoming" width="wide">
        <span className="pm-kicker">Upcoming Events</span>
        <SectionHeader
          title="Events that activate community"
          description="Retreats, parish activities, fundraising events, workshops and family experiences connected to causes, local businesses and sponsors."
        />
        {/* Filter chips */}
        <div className="mb-6 flex flex-wrap gap-2">
          {FILTERS.map((f, i) => (
            <span
              key={f}
              className={`cursor-default rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                i === 0
                  ? "bg-pm-navy text-white"
                  : "border border-pm-border bg-white text-pm-navy hover:border-pm-blue hover:text-pm-blue"
              }`}
            >
              {f}
            </span>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {UPCOMING_EVENTS.map((ev) => (
            <div key={ev.title} className="pm-card flex flex-col overflow-hidden p-0">
              <div className="relative min-h-[160px] overflow-hidden">
                <Photo kind="retreat" ratio="auto" rounded="rounded-none" className="!rounded-none absolute inset-0 h-full" overlay="subtle" />
                <div className="absolute left-4 top-4">
                  <DateBadge month={ev.month} day={ev.day} weekday={ev.weekday} />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <span className="pm-label w-fit">{ev.category}</span>
                <h3 className="text-base font-extrabold text-pm-navy">{ev.title}</h3>
                <p className="text-xs text-pm-muted">{ev.description}</p>
                <div className="mt-auto flex items-center justify-between pt-3">
                  <Link href="#" className="text-sm font-bold text-pm-blue hover:text-pm-navy">View Event →</Link>
                  <span className="text-sm font-extrabold text-pm-navy">{ev.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* MORE THAN A CALENDAR */}
      <Section width="wide">
        <span className="pm-kicker">What every event page should include</span>
        <SectionHeader title="More than an event calendar" description="ParishMart Events should convert community activity into registrations, sponsorships, product sales and support for causes." />
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { title: "Parish / Cause", desc: "Who the event supports, donation link, ministry profile and impact story." },
            { title: "Local Businesses", desc: "Products or services related to the event: food, printing, wellness, classes or gifts." },
            { title: "Sponsors", desc: "Visibility packages: event sponsor, meal sponsor, family sponsor or community sponsor." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-pm-border bg-white p-5 shadow-pm-soft">
              <h3 className="text-base font-extrabold text-pm-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-pm-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SPONSOR OPPORTUNITIES */}
      <Section width="wide">
        <span className="pm-kicker">Sponsor Opportunities</span>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-pm-navy md:text-4xl">
          Let businesses support events with purpose
        </h2>
        <p className="mt-2 max-w-xl text-sm text-pm-muted">
          Suggested sponsorship tiers: Community Sponsor $100, Event Sponsor $250, Presenting Sponsor $500.
        </p>
        <div className="mt-5">
          <button type="button" className="pm-btn pm-btn-primary">Request Sponsor Info</button>
        </div>
      </Section>

      {/* SUBMIT AN EVENT */}
      <Section width="wide">
        <span className="pm-kicker">Submit an Event</span>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-pm-navy md:text-4xl">
          Allow parishes, ministries and causes to publish events
        </h2>
        <p className="mt-2 max-w-xl text-sm text-pm-muted">
          For Phase 1, keep this as a simple lead form: event name, date, location, organizer, parish/cause, image, description, CTA link and sponsor needs.
        </p>
        <div className="mt-5">
          <button type="button" className="pm-btn pm-btn-primary">Submit Event Form</button>
        </div>
      </Section>

      <Footer />
    </>
  );
}
