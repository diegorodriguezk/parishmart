import { ParishProfileHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section, SectionHeader } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = {
  title: "Retiro de Emmaus SKD Caballeros · ParishMart Events",
  description:
    "Retiro de Emmaus SKD Caballeros · Agosto 23, 2026. Inscripciones abiertas.",
};

const MAILTO_RESERVE =
  "mailto:hello@parishmart.com?subject=Registro%20Retiro%20Emmaus%20SKD%20Caballeros%20Agosto%2023%202026";
const MAILTO_POLO =
  "mailto:hello@parishmart.com?subject=Polo%20Emmaus%20SKD%20Caballeros";
const MAILTO_QUESTION =
  "mailto:hello@parishmart.com?subject=Pregunta%20Retiro%20Emmaus%20SKD%20Caballeros";

const TAGS = ["Retreat", "Faith", "Brotherhood"];

const DETAILS = [
  { label: "Starts", value: "Sun, Aug 23", note: "8:00 AM" },
  { label: "Ends", value: "Sun, Aug 23", note: "6:00 PM" },
  { label: "Supports", value: "SKD Ministries", note: "Community impact" },
  { label: "Organizer", value: "Emmaus SKD", note: "Men's ministry" },
];

const HELPER = [
  { label: "Registration closes", value: "Aug 16" },
  { label: "Availability", value: "12 spots left" },
  { label: "Need help?", value: "Contact coordinator" },
];

const MINI_CARDS = [
  {
    label: "For",
    title: "Nuevos caminantes",
    body: "Hombres que desean iniciar o renovar su camino de fe junto a la comunidad SKD.",
  },
  {
    label: "Includes",
    title: "Meals + materials",
    body: "Comidas, materiales del retiro, logística del evento y apoyo del equipo Emmaus.",
  },
  {
    label: "Impact",
    title: "SKD Ministries",
    body: "El registro ayuda a sostener la experiencia y puede apoyar becas para caminantes.",
  },
];

const SUPPORT = [
  { title: "Scholarship fund", note: "Becas para caminantes que necesitan apoyo." },
  { title: "Meal sponsor", note: "Patrocinio específico para comidas del retiro." },
  { title: "Prayer intentions", note: "Intenciones que el equipo puede llevar al retiro." },
  { title: "Emmaus updates", note: "Lista para próximos retiros y reuniones de comunidad." },
];

function DateBadge() {
  return (
    <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl border border-pm-border bg-white shadow-pm-soft">
      <p className="text-[10px] font-bold uppercase tracking-wider text-pm-muted">Aug</p>
      <p className="text-2xl font-extrabold leading-none text-pm-navy">23</p>
      <p className="text-[10px] font-bold uppercase tracking-wider text-pm-muted">Sun</p>
    </div>
  );
}

export default function EmmausSkdCaballerosPage() {
  return (
    <>
      <ParishProfileHeader
        parishName="Saint Katharine Drexel"
        storeLabel="Emmaus Retreat Community"
        location="Weston, Florida"
        searchPlaceholder="Search retreats, tickets, ministries..."
        activeTab="events"
      />

      <Section width="wide" className="!py-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Events", href: "/stores/events" },
            { label: "Retiro de Emmaus SKD Caballeros" },
          ]}
        />
      </Section>

      {/* HERO — featured event */}
      <Section id="register" width="wide" className="!pb-2 !pt-0">
        <span className="pm-kicker">Inscripciones abiertas</span>
        <div className="mt-4 pm-card overflow-hidden lg:grid lg:grid-cols-[1fr_1.8fr_auto] lg:items-stretch">
          {/* Photo column */}
          <div className="relative min-h-[220px] overflow-hidden lg:min-h-0">
            <Photo
              kind="retreat"
              ratio="auto"
              rounded="rounded-none"
              className="!rounded-none absolute inset-0 h-full"
              overlay="none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <DateBadge />
            </div>
            <div className="absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1 text-xs font-bold text-white backdrop-blur">
              12 spots left
            </div>
          </div>

          {/* Details column */}
          <div className="flex flex-col gap-4 p-6 sm:p-7">
            <div>
              <span className="pm-label">Retreat</span>
              <h1 className="mt-2 text-2xl font-extrabold leading-tight text-pm-navy md:text-3xl">
                Retiro de Emmaus SKD Caballeros
              </h1>
              <p className="mt-1 text-sm font-semibold text-pm-blue">
                Saint Katharine Drexel Retreat Center · Weston, FL
              </p>
              <p className="mt-2 text-sm text-pm-muted">
                Un día de encuentro, fe y hermandad para hombres que desean vivir la
                experiencia de Emmaus como nuevos caminantes.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {TAGS.map((t) => (
                  <span key={t} className="pm-label">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {DETAILS.map((d) => (
                <div
                  key={d.label}
                  className="rounded-2xl border border-pm-border bg-pm-soft/40 p-3"
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-pm-muted">
                    {d.label}
                  </p>
                  <p className="mt-0.5 text-sm font-extrabold text-pm-navy">{d.value}</p>
                  <p className="text-xs text-pm-muted">{d.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Booking column */}
          <div className="flex flex-col gap-4 border-t border-pm-border p-6 lg:min-w-[260px] lg:border-l lg:border-t-0">
            <div>
              <p className="text-3xl font-extrabold text-pm-navy">$65.00</p>
              <p className="mt-1 text-xs text-pm-muted">
                General Admission · Includes meals, materials and event support.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-pm-border bg-pm-soft/40 px-4 py-2">
              <button type="button" aria-label="Disminuir" className="text-lg font-bold text-pm-navy">
                −
              </button>
              <span className="flex-1 text-center text-sm font-bold">1</span>
              <button type="button" aria-label="Aumentar" className="text-lg font-bold text-pm-navy">
                +
              </button>
            </div>
            <a href={MAILTO_RESERVE} className="pm-btn pm-btn-primary w-full">
              Reserve My Spot
            </a>

            <div className="space-y-2 rounded-2xl border border-pm-border bg-pm-soft/40 p-3 text-xs">
              {HELPER.map((h) => (
                <div key={h.label} className="flex items-center justify-between">
                  <span className="text-pm-muted">{h.label}</span>
                  <strong className="text-pm-navy">{h.value}</strong>
                </div>
              ))}
            </div>

            {/* Add-on */}
            <div className="flex items-center gap-3 rounded-2xl border border-pm-border bg-white p-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pm-soft text-lg font-extrabold text-pm-blue">
                P
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-pm-muted">
                  Add-on
                </p>
                <p className="text-sm font-extrabold text-pm-navy">Polo oficial Emmaus</p>
                <p className="text-xs text-pm-muted">Pickup at retreat</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-sm font-extrabold text-pm-navy">$35</span>
                <a href={MAILTO_POLO} className="pm-btn pm-btn-secondary !px-3 !py-1 text-xs">
                  Add
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ABOUT + QUESTIONS */}
      <Section width="wide" className="!pt-4">
        <div className="grid gap-5 lg:grid-cols-[1.7fr_1fr] lg:items-start">
          {/* Main */}
          <div className="space-y-5">
            <div className="pm-card p-6 sm:p-8">
              <p className="pm-kicker">About the Retreat</p>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight text-pm-navy md:text-3xl">
                Una experiencia de fe, hermandad y encuentro personal.
              </h2>
              <p className="mt-3 text-sm text-pm-muted">
                Emmaus SKD Caballeros invita a nuevos caminantes a vivir un retiro de un
                día para detenerse, escuchar, orar y compartir con otros hombres de la
                comunidad. El retiro está diseñado para crear un espacio sencillo,
                profundo y fraterno, con momentos de reflexión, oración, sacramentos y
                convivencia.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {MINI_CARDS.map((c) => (
                <div key={c.title} className="pm-card p-5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-pm-muted">
                    {c.label}
                  </p>
                  <p className="mt-1 text-base font-extrabold text-pm-navy">{c.title}</p>
                  <p className="mt-2 text-xs text-pm-muted">{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Side */}
          <aside className="space-y-5">
            <div className="pm-card p-6">
              <h2 className="text-lg font-extrabold text-pm-navy">Questions</h2>
              <p className="mt-2 text-sm text-pm-muted">
                Para dudas de elegibilidad, becas o patrocinio, contacta al coordinador
                antes de reservar.
              </p>
              <a href={MAILTO_QUESTION} className="pm-btn pm-btn-secondary mt-4 w-full">
                Ask coordinator
              </a>
            </div>
          </aside>
        </div>
      </Section>

      {/* SUPPORT STRIP */}
      <Section width="wide">
        <span className="pm-kicker">Support the retreat</span>
        <SectionHeader
          title="Simple ways to help"
          description="Opciones conectadas al retiro, pensadas para aportar valor sin sobrecargar la experiencia."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SUPPORT.map((s) => (
            <div key={s.title} className="pm-card p-5">
              <p className="text-base font-extrabold text-pm-navy">{s.title}</p>
              <p className="mt-2 text-xs text-pm-muted">{s.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}
