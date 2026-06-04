import { ParishProfileHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, ProgressBar } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AddToCartButton } from "@/components/cart/AddToCartButton";

export const metadata = {
  title: "Retreat Scholarship Fund · Saint Katharine Drexel",
  description:
    "Help someone attend the next Emmaus retreat. A simple giving experience connected to Emmaus merch, support fees and shareable impact.",
};

const GIFTS = ["$30", "$65", "$90", "$120"];
const ACTIVE_GIFT = "$65";

const FACTS = [
  { label: "Campaign type", value: "Scholarship" },
  { label: "Parish", value: "Emmaus SKD Weston" },
  { label: "Current impact", value: "$6,200 raised" },
  { label: "Connected products", value: "Merch collection" },
];

const STATS = [
  { label: "Donation", value: ACTIVE_GIFT },
  { label: "Platform", value: "18%" },
  { label: "Impact", value: "Emmaus" },
];

const ADDONS = [
  { label: "Donation", title: "General gift", note: "$25" },
  { label: "Apparel", title: "Emmaus T-Shirt", note: "Supports fund · $22" },
  { label: "Drinkware", title: "Emmaus Mug", note: "Suggested add-on · $14" },
];

const RELATED = [
  {
    label: "Apparel",
    title: "Emmaus T-Shirt",
    desc: "Premium retreat merch that supports the Emmaus fund.",
    price: "$22",
    src: "/brand/products/crew-harps.png",
  },
  {
    label: "Drinkware",
    title: "Emmaus Mug",
    desc: "A simple gift for donors who want a keepsake.",
    price: "$14",
    src: "/brand/products/unity-candleholder.jpg",
  },
  {
    label: "Apparel",
    title: "Emmaus Hoodie",
    desc: "Premium retreat merch connected to the mission.",
    price: "$48",
    src: "/brand/products/crew-harps.png",
  },
  {
    label: "Apparel",
    title: "Emmaus Cap",
    desc: "Casual retreat merch for weekends and events.",
    price: "$18",
    src: "/brand/products/tote-harps.png",
  },
];

const CAMPAIGNS = [
  {
    label: "Hospitality",
    title: "Meals & Hospitality",
    desc: "Support meals and hospitality for retreat weekends.",
    price: "$20",
  },
  {
    label: "Materials",
    title: "Materials Fund",
    desc: "Materials, supplies and retreat resources.",
    price: "$10",
  },
  {
    label: "Retreat",
    title: "General Retreat Fund",
    desc: "General support for the Emmaus retreat experience.",
    price: "$25",
  },
  {
    label: "Youth",
    title: "Youth Ministry",
    desc: "Formation and outreach for SKD young leaders.",
    price: "$25",
  },
];

export default function RetreatScholarshipFundPage() {
  return (
    <>
      <ParishProfileHeader
        parishName="Saint Katharine Drexel"
        storeLabel="Parish Store"
        location="Weston, Florida"
        searchPlaceholder="Search SKD ministries, causes and ways to give…"
        activeTab="give"
      />

      <Section width="wide" className="!py-4">
        <Breadcrumbs
          items={[
            { label: "Give with Love", href: "/stores/give" },
            { label: "Emmaus", href: "/stores/give" },
            { label: "Retreat Scholarship Fund" },
          ]}
        />
      </Section>

      {/* HERO — story (left) + giving card (right) */}
      <Section width="wide" className="!pt-0">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          {/* Left — story */}
          <div className="space-y-4">
            <div className="pm-card overflow-hidden p-0">
              <div className="relative aspect-[16/9]">
                <Photo
                  kind="retreat"
                  ratio="auto"
                  rounded="rounded-none"
                  className="!rounded-none absolute inset-0 h-full"
                  overlay="subtle"
                />
              </div>
              <div className="p-6 sm:p-7">
                <h2 className="text-xl font-extrabold text-pm-navy md:text-2xl">
                  Help someone attend the next Emmaus retreat
                </h2>
                <p className="mt-2 text-sm text-pm-muted">
                  Your support helps remove financial barriers for parishioners who
                  want to participate in a retreat experience.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {FACTS.map((f) => (
                <div key={f.label} className="pm-card p-5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-pm-muted">
                    {f.label}
                  </p>
                  <p className="mt-1 text-base font-extrabold text-pm-navy">
                    {f.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — giving card */}
          <aside className="pm-card p-6 sm:p-7 lg:sticky lg:top-24">
            <span className="pm-label">Emmaus Giving Campaign</span>
            <h1 className="mt-2 text-2xl font-extrabold leading-tight text-pm-navy md:text-3xl">
              Retreat Scholarship Fund
            </h1>
            <p className="mt-2 text-sm text-pm-muted">
              A simple giving experience connected to Emmaus merch, support fees and
              shareable impact.
            </p>

            <div className="mt-4">
              <ProgressBar
                value={6200}
                max={12000}
                raised="$6,200"
                goal="$12,000"
                supporters="48"
              />
            </div>

            <div className="mt-5 rounded-2xl border border-pm-border bg-pm-soft/40 p-4">
              <p className="text-sm font-bold text-pm-navy">Choose your gift</p>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {GIFTS.map((g) => (
                  <button
                    key={g}
                    type="button"
                    aria-pressed={g === ACTIVE_GIFT}
                    className={`rounded-xl border px-2 py-2 text-sm font-bold transition ${
                      g === ACTIVE_GIFT
                        ? "border-pm-blue bg-pm-blue text-white"
                        : "border-pm-border bg-white text-pm-navy hover:border-pm-blue"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
              <a href="/give/checkout" className="pm-btn pm-btn-primary mt-3 w-full">
                Support Now
              </a>
            </div>

            <div className="mt-4 rounded-2xl border border-pm-border p-4">
              <p className="text-sm font-bold text-pm-navy">Support ParishMart</p>
              <p className="mt-1 text-xs text-pm-muted">
                Like a subscription, this optional contribution helps cover platform
                and payment costs so more parishes can use ParishMart.
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-pm-border bg-pm-soft/40 p-2 text-center"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-pm-muted">
                      {s.label}
                    </p>
                    <p className="mt-0.5 text-sm font-extrabold text-pm-navy">
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* MERCH ADD-ON BANNER */}
      <Section width="wide" className="!py-4">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-pm-navy to-pm-blue p-6 text-white sm:p-8">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white/85 backdrop-blur">
                Optional
              </span>
              <h2 className="mt-3 text-xl font-extrabold md:text-2xl">
                Add Emmaus merch to your support
              </h2>
              <p className="mt-1 max-w-xl text-sm text-white/80">
                After choosing a gift, shoppers can add related products that support
                the same Emmaus mission.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {ADDONS.map((a) => (
                  <div
                    key={a.title}
                    className="rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">
                      {a.label}
                    </p>
                    <p className="text-sm font-extrabold">{a.title}</p>
                    <p className="text-xs text-white/75">{a.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="/shop/cart"
              className="pm-btn bg-white !text-pm-blue hover:bg-white/90"
            >
              Add T-Shirt + Mug · $39
            </a>
          </div>
        </div>
      </Section>

      {/* RELATED PRODUCTS */}
      <Section width="wide" className="!pt-4">
        <h2 className="text-2xl font-extrabold tracking-tight text-pm-navy md:text-3xl">
          Related products
        </h2>
        <p className="mt-1 text-sm text-pm-muted">
          Products shown here are contextual to Emmaus and should feel like helpful
          add-ons, not distractions.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RELATED.map((p) => (
            <article
              key={p.title}
              className="pm-card group flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-pm-soft"
            >
              <div className="relative aspect-[4/3] bg-pm-soft">
                <Photo
                  kind="merch"
                  src={p.src}
                  ratio="auto"
                  rounded="rounded-none"
                  className="absolute inset-0 !rounded-none border-0 bg-white"
                  overlay="none"
                  fit="contain"
                  alt={p.title}
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <div>
                  <span className="pm-label w-fit">{p.label}</span>
                  <h3 className="mt-1 text-sm font-extrabold leading-tight text-pm-navy">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-pm-muted">{p.desc}</p>
                </div>
                <div className="mt-auto flex items-center justify-between pt-1">
                  <span className="text-sm font-extrabold text-pm-navy">
                    {p.price}
                  </span>
                  <AddToCartButton
                    item={{
                      id: p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
                      name: p.title,
                      meta: "Emmaus merch",
                      price: Number(p.price.replace(/[^0-9.]/g, "")) || 0,
                      photo: p.src,
                      parish: "skd",
                    }}
                    size="sm"
                    label="Add"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* OTHER CAMPAIGNS */}
      <Section width="wide" className="!pt-4">
        <h2 className="text-2xl font-extrabold tracking-tight text-pm-navy md:text-3xl">
          Other Emmaus campaigns
        </h2>
        <p className="mt-1 text-sm text-pm-muted">
          Keep donors inside the same ministry ecosystem.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CAMPAIGNS.map((c) => (
            <article key={c.title} className="pm-card flex flex-col gap-2 p-5">
              <span className="pm-label w-fit">{c.label}</span>
              <h3 className="text-base font-extrabold leading-tight text-pm-navy">
                {c.title}
              </h3>
              <p className="text-xs text-pm-muted">{c.desc}</p>
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="text-sm font-extrabold text-pm-navy">{c.price}</span>
                <a href="/give/checkout" className="pm-btn pm-btn-primary !px-4 !py-1.5 text-xs">
                  Give
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* GIVING PREVIEW BAR */}
      <Section width="wide" className="!pt-2">
        <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-pm-border bg-pm-soft/50 p-4 sm:flex-row">
          <p className="text-sm text-pm-muted">
            <span className="font-bold text-pm-navy">Giving preview:</span>{" "}
            {ACTIVE_GIFT} to Retreat Scholarship Fund · Optional platform support 18%
          </p>
          <a href="/shop/cart" className="pm-btn pm-btn-primary w-full sm:w-auto">
            Continue to Cart
          </a>
        </div>
      </Section>

      <Footer />
    </>
  );
}
