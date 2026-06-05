import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Share2,
  Gift,
  Building2,
  Navigation,
  User,
} from "lucide-react";
import { Photo, PhotoKind } from "@/components/Photo";
import { Section } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { Business } from "@/lib/catalog";

function safeHref(url?: string): string | undefined {
  if (!url) return undefined;
  const withScheme = /^https?:\/\//i.test(url) ? url : `https://${url}`;
  try {
    const u = new URL(withScheme);
    return u.protocol === "http:" || u.protocol === "https:" ? withScheme : undefined;
  } catch {
    return undefined;
  }
}

const GALLERY: PhotoKind[] = [
  "business",
  "volunteers",
  "merch",
  "community",
  "apparel",
  "food",
];

const SERVICE_PHOTOS: PhotoKind[] = [
  "business",
  "volunteers",
  "merch",
  "community",
  "apparel",
  "retreat",
];

const FOUNDER_STATS = [
  { value: "10+", label: "Años de experiencia" },
  { value: "250+", label: "Proyectos" },
  { value: "500+", label: "Clientes felices" },
];

export function ServiceBusinessProfile({ business }: { business: Business }) {
  const services = business.services ?? [];
  const websiteHref = safeHref(business.website);
  const phoneDigits = business.phone?.replace(/[^0-9]/g, "");
  const whatsappHref = phoneDigits ? `https://wa.me/${phoneDigits}` : undefined;
  const city = business.location.split(",")[0].trim();
  const founderName = business.founderName ?? business.name;
  const offered = services.length
    ? services
    : [
        {
          name: business.category,
          description: business.description,
          price: "",
        },
      ];

  const contactStrip = [
    { Icon: MessageCircle, label: "La mejor forma de contacto", value: "WhatsApp" },
    { Icon: Phone, label: "Teléfono", value: business.phone ?? "—" },
    { Icon: Mail, label: "Correo", value: business.email ?? "—" },
    { Icon: Globe, label: "Sitio Web", value: business.website ?? "—" },
    { Icon: MapPin, label: "Ciudad", value: city },
    {
      Icon: Navigation,
      label: "Área de Servicio",
      value: `${city} y áreas cercanas`,
    },
  ];

  return (
    <>
      <Section width="wide" className="!py-4">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Local Businesses", href: "/local-businesses" },
            { label: business.name },
          ]}
        />
      </Section>

      {/* HERO */}
      <Section width="wide" className="!pt-2 !pb-0">
        <div className="relative isolate overflow-hidden rounded-3xl border border-pm-border shadow-pm-card min-h-[340px]">
          <Photo
            kind="business"
            ratio="auto"
            rounded="rounded-none"
            className="absolute inset-0 -z-10 !rounded-none"
            overlay="none"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />

          <div className="flex flex-col gap-6 p-7 sm:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              {/* Logo card */}
              <div className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl bg-white p-2 text-center shadow-pm-card">
                {business.logoSrc ? (
                  <Photo
                    kind="business"
                    src={business.logoSrc}
                    alt={business.name}
                    ratio="1/1"
                    rounded="rounded-xl"
                    fit="contain"
                    overlay="none"
                    className="!border-0"
                  />
                ) : (
                  <span className="text-xl font-extrabold tracking-tight text-pm-navy">
                    {business.initials}
                  </span>
                )}
              </div>

              {/* Title block */}
              <div className="flex-1 text-white">
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/75">
                  {business.category}
                </p>
                <h1 className="mt-1 text-3xl font-extrabold tracking-tight md:text-4xl">
                  {business.name}
                </h1>
                <p className="mt-1 max-w-xl text-sm text-white/85">
                  {business.description}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="inline-flex items-center gap-1 text-sm text-white/85">
                    <MapPin className="h-4 w-4" aria-hidden />
                    {business.location}
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={websiteHref ?? "#contacto"}
                target={websiteHref ? "_blank" : undefined}
                rel={websiteHref ? "noreferrer" : undefined}
                className="pm-btn pm-btn-primary !text-white"
              >
                {websiteHref ? "Visitar Sitio Web" : "Contact Us"}
              </a>
              <a
                href={whatsappHref ?? "/share-impact"}
                target={whatsappHref ? "_blank" : undefined}
                rel={whatsappHref ? "noreferrer" : undefined}
                className="pm-btn bg-pm-navy !text-white hover:bg-pm-navy/90 inline-flex items-center gap-2"
              >
                {whatsappHref ? (
                  <>
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    WhatsApp
                  </>
                ) : (
                  <>
                    <Share2 className="h-4 w-4" aria-hidden />
                    Share
                  </>
                )}
              </a>
            </div>
          </div>
        </div>

        {/* CONTACT STRIP */}
        <div className="relative z-10 -mt-6 mx-3 rounded-3xl border border-pm-border bg-white p-5 shadow-pm-card sm:mx-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {contactStrip.map((c) => (
              <div key={c.label} className="flex items-start gap-2.5">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-pm-soft text-pm-blue">
                  <c.Icon className="h-3.5 w-3.5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-pm-muted">
                    {c.label}
                  </p>
                  <p className="truncate text-xs font-semibold text-pm-navy">
                    {c.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* MAIN — about/founder + sidebar */}
      <Section width="wide">
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          {/* LEFT */}
          <div className="space-y-6">
            {/* About */}
            <div className="pm-card p-6 sm:p-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-pm-navy md:text-3xl">
                Sobre {business.name}
              </h2>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-pm-blue">
                {business.category}
              </p>
              <p className="mt-3 text-base font-bold text-pm-navy">
                {business.description}
              </p>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-pm-muted">
                Descripción del Negocio
              </p>
              <p className="mt-2 text-sm text-pm-muted">
                {business.about ?? business.description}
              </p>
            </div>

            {/* Founder */}
            <div className="pm-card p-6 sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-wider text-pm-blue">
                Fundador / a
              </p>
              <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl">
                  <Photo
                    kind="volunteers"
                    ratio="1/1"
                    rounded="rounded-2xl"
                    overlay="none"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="flex items-center gap-2 text-lg font-extrabold text-pm-navy">
                    <User className="h-4 w-4 text-pm-blue" aria-hidden />
                    {founderName}
                  </h3>
                  <p className="text-xs font-semibold text-pm-muted">
                    Fundador/a · Director/a Creativo/a
                  </p>
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-pm-muted">
                    Sobre el / la fundador / a
                  </p>
                  <p className="mt-1 text-sm text-pm-muted">
                    {business.founderShortDesc ??
                      `${founderName} lidera ${business.name}, un negocio local comprometido con la comunidad y con un servicio cercano y de calidad.`}
                  </p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {FOUNDER_STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-pm-border bg-pm-soft/40 p-3 text-center"
                  >
                    <p className="text-xl font-extrabold text-pm-navy">{s.value}</p>
                    <p className="text-[11px] text-pm-muted">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Parish supported */}
            {business.parishSupported ? (
              <div className="pm-card p-6 sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-wider text-pm-blue">
                  Parroquia / Causa que Apoya
                </p>
                <h3 className="mt-2 text-lg font-extrabold text-pm-navy">
                  {business.parishSupported}
                </h3>
                <p className="mt-1 text-sm text-pm-muted">
                  Apoyamos actividades juveniles, formación espiritual y proyectos
                  comunitarios.
                </p>
                <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-pm-muted">
                  ¿Por qué quieres apoyar a esta comunidad?
                </p>
                <p className="mt-1 text-sm text-pm-muted">
                  Creemos firmemente en el poder de la comunidad y en brindar
                  oportunidades. Queremos aportar nuestros talentos para ayudar a
                  crecer y fortalecer nuestra comunidad.
                </p>
              </div>
            ) : null}
          </div>

          {/* RIGHT — sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            {/* Banner */}
            <div className="pm-card overflow-hidden p-0">
              <div className="relative h-36">
                <Photo
                  kind="business"
                  ratio="auto"
                  rounded="rounded-none"
                  className="absolute inset-0 !rounded-none h-full"
                  overlay="subtle"
                />
              </div>
            </div>

            {/* Gallery */}
            <div className="pm-card p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-extrabold text-pm-navy">
                  Galería de Servicios
                </h3>
                <span className="text-xs font-bold text-pm-blue">
                  Ver todas las fotos
                </span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {GALLERY.map((k, i) => (
                  <div
                    key={`${k}-${i}`}
                    className="overflow-hidden rounded-xl"
                  >
                    <Photo kind={k} ratio="1/1" rounded="rounded-xl" overlay="none" />
                  </div>
                ))}
              </div>
            </div>

            {/* Video */}
            <div className="pm-card p-5">
              <h3 className="text-sm font-extrabold text-pm-navy">
                Video <span className="text-pm-muted">(Opcional)</span>
              </h3>
              <div className="relative mt-3 aspect-video overflow-hidden rounded-2xl">
                <Photo
                  kind="volunteers"
                  ratio="auto"
                  rounded="rounded-none"
                  className="absolute inset-0 !rounded-none h-full"
                  overlay="strong"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white shadow-pm-card">
                    <svg
                      className="h-6 w-6 translate-x-0.5 text-pm-blue"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Community discount */}
            <div className="overflow-hidden rounded-3xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-amber-400 text-white">
                  <Gift className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                    Descuento Especial para la Comunidad
                  </p>
                  <p className="text-2xl font-extrabold text-amber-700">15% OFF</p>
                  <p className="mt-1 text-xs text-amber-800/90">
                    Válido para miembros de la comunidad ParishMart. Menciona que nos
                    encontraste en ParishMart para aplicar.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* CONTACT + LOCATION */}
      <Section id="contacto" width="wide">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
          {/* Contact info */}
          <div className="pm-card p-6 sm:p-8">
            <h2 className="text-xl font-extrabold text-pm-navy">
              Información de Contacto
            </h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                { Icon: User, label: "Nombre de Contacto", value: founderName },
                { Icon: Phone, label: "Teléfono", value: business.phone ?? "—" },
                { Icon: Mail, label: "Correo", value: business.email ?? "—" },
                { Icon: Globe, label: "Sitio Web", value: business.website ?? "—" },
                { Icon: MessageCircle, label: "La mejor forma de contacto", value: "WhatsApp" },
                { Icon: MapPin, label: "Ciudad", value: city },
                { Icon: Building2, label: "Estado / Provincia", value: business.location.split(",")[1]?.trim() ?? city },
                { Icon: Navigation, label: "Área de Servicio", value: `${city} y áreas cercanas` },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-2.5">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-pm-soft text-pm-blue">
                    <c.Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[10px] font-bold uppercase tracking-wider text-pm-muted">
                      {c.label}
                    </dt>
                    <dd className="truncate text-sm font-semibold text-pm-navy">
                      {c.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Location / map */}
          <div className="pm-card overflow-hidden p-0">
            <div className="relative min-h-[260px]">
              <Photo
                kind="house"
                ratio="auto"
                rounded="rounded-none"
                className="absolute inset-0 !rounded-none h-full grayscale"
                overlay="subtle"
              />
              <div className="absolute left-4 top-4 rounded-2xl bg-white px-4 py-2 shadow-pm-card">
                <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                  Ubicación
                </p>
                <p className="text-sm font-extrabold text-pm-navy">{business.name}</p>
                <p className="text-[11px] text-pm-muted">{business.location}</p>
              </div>
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(
                  `${business.name} ${business.location}`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-pm-navy shadow-pm-card hover:text-pm-blue"
              >
                <MapPin className="h-3.5 w-3.5 text-pm-blue" aria-hidden />
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICES WE OFFER */}
      <Section width="wide">
        <h2 className="text-2xl font-extrabold tracking-tight text-pm-navy md:text-3xl">
          Servicios que Ofrecemos
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offered.map((s, i) => (
            <article
              key={s.name}
              className="pm-card group flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-pm-soft"
            >
              <div className="relative aspect-[4/3]">
                <Photo
                  kind={SERVICE_PHOTOS[i % SERVICE_PHOTOS.length]}
                  ratio="auto"
                  rounded="rounded-none"
                  className="absolute inset-0 !rounded-none h-full"
                  overlay="none"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1 p-4">
                <h3 className="text-sm font-extrabold text-pm-navy">{s.name}</h3>
                <p className="text-xs text-pm-muted">{s.description}</p>
                {s.price ? (
                  <p className="mt-auto pt-2 text-sm font-extrabold text-pm-blue">
                    {s.price}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section width="wide" className="!pb-12">
        <div className="flex flex-col items-start gap-4 rounded-3xl border border-pm-border bg-gradient-to-r from-pm-navy via-pm-blue to-pm-cyan p-7 text-white shadow-pm-card sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div>
            <h2 className="text-2xl font-extrabold leading-tight">
              ¿Listo para trabajar juntos?
            </h2>
            <p className="mt-1 text-sm text-white/85">
              Creemos imágenes que cuenten tu historia y eleven tu marca.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={websiteHref ?? "#contacto"}
              target={websiteHref ? "_blank" : undefined}
              rel={websiteHref ? "noreferrer" : undefined}
              className="pm-btn bg-white !text-pm-blue hover:bg-white/90"
            >
              {websiteHref ? "Visitar Sitio Web" : "Contact Us"}
            </a>
            <a
              href={whatsappHref ?? "/share-impact"}
              target={whatsappHref ? "_blank" : undefined}
              rel={whatsappHref ? "noreferrer" : undefined}
              className="pm-btn bg-pm-navy !text-white hover:bg-pm-navy/90 inline-flex items-center gap-2"
            >
              {whatsappHref ? (
                <>
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Contactar por WhatsApp
                </>
              ) : (
                <>
                  <Share2 className="h-4 w-4" aria-hidden />
                  Share
                </>
              )}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
