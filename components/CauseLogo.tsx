export type CauseKey =
  | "christ-care-for-all"
  | "face"
  | "goyito"
  | "cam"
  | "forta"
  | "marys-hope"
  | "mater-18"
  | "miami-presente"
  | "missionaries-of-hope"
  | "saint-vincent-de-paul"
  | "schoenstatt-miami";

type CauseInfo = {
  name: string;
  src: string;
  background: "white" | "dark";
};

export const CAUSES: Record<CauseKey, CauseInfo> = {
  "christ-care-for-all": {
    name: "Christlike Care for All",
    src: "/brand/causes/christ-care-for-all.jpg",
    background: "white",
  },
  face: {
    name: "FACE",
    src: "/brand/causes/face.jpeg",
    background: "white",
  },
  goyito: {
    name: "Goyito Was Here",
    src: "/brand/causes/goyito.png",
    background: "white",
  },
  cam: {
    name: "CAM",
    src: "/brand/causes/cam.png",
    background: "dark",
  },
  forta: {
    name: "FORTA · Fortalecimiento Matrimonial",
    src: "/brand/causes/forta.png",
    background: "white",
  },
  "marys-hope": {
    name: "Mary's Hope Network",
    src: "/brand/causes/marys-hope.png",
    background: "white",
  },
  "mater-18": {
    name: "Mater 18",
    src: "/brand/causes/mater-18.png",
    background: "white",
  },
  "miami-presente": {
    name: "Miami Presente",
    src: "/brand/causes/miami-presente.png",
    background: "white",
  },
  "missionaries-of-hope": {
    name: "Missionaries of Hope",
    src: "/brand/causes/missionaries-of-hope.png",
    background: "dark",
  },
  "saint-vincent-de-paul": {
    name: "St. Vincent de Paul",
    src: "/brand/causes/saint-vincent-de-paul.jpg",
    background: "white",
  },
  "schoenstatt-miami": {
    name: "Schoenstatt Miami",
    src: "/brand/causes/schoenstatt-miami.jpeg",
    background: "white",
  },
};

export function CauseLogo({
  cause,
  size = "md",
  className = "",
}: {
  cause: CauseKey;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const info = CAUSES[cause];
  const sizeCls =
    size === "sm"
      ? "h-10 w-10"
      : size === "lg"
        ? "h-20 w-20"
        : size === "xl"
          ? "h-28 w-28"
          : "h-14 w-14";
  const bgCls =
    info.background === "dark"
      ? "bg-pm-navy ring-pm-navy/20"
      : "bg-white ring-pm-border";
  return (
    <span
      className={`grid shrink-0 place-items-center overflow-hidden rounded-2xl p-1.5 ring-1 shadow-pm-soft ${sizeCls} ${bgCls} ${className}`}
      title={info.name}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={info.src}
        alt={info.name}
        className="h-full w-full object-contain"
        loading="lazy"
      />
    </span>
  );
}
