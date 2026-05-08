import { ReactNode } from "react";

export type PhotoKind =
  | "church"
  | "church-interior"
  | "stained-glass"
  | "altar"
  | "congregation"
  | "praying"
  | "retreat"
  | "community"
  | "volunteers"
  | "food-drive"
  | "rosary"
  | "bible"
  | "cross"
  | "communion"
  | "chalice"
  | "apparel"
  | "merch"
  | "business"
  | "food"
  | "house";

const SOURCES: Record<PhotoKind, string> = {
  church:
    "https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?auto=format&fit=crop&w=1600&q=80",
  "church-interior":
    "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=1600&q=80",
  "stained-glass":
    "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=1600&q=80",
  altar:
    "https://images.unsplash.com/photo-1711386161147-7aa5e378530a?auto=format&fit=crop&w=1600&q=80",
  congregation:
    "https://images.unsplash.com/photo-1474814947326-d835369963a5?auto=format&fit=crop&w=1600&q=80",
  praying:
    "https://images.unsplash.com/photo-1551199452-efc7acc857b4?auto=format&fit=crop&w=1600&q=80",
  retreat:
    "https://images.unsplash.com/photo-1550096141-1b21804f1812?auto=format&fit=crop&w=1600&q=80",
  community:
    "https://images.unsplash.com/photo-1550096141-7263640aa48c?auto=format&fit=crop&w=1600&q=80",
  volunteers:
    "https://images.unsplash.com/photo-1699422697971-34ac6eec8ebc?auto=format&fit=crop&w=1600&q=80",
  "food-drive":
    "https://images.unsplash.com/photo-1550096197-9fececec9ca5?auto=format&fit=crop&w=1600&q=80",
  rosary:
    "https://images.unsplash.com/photo-1606513542745-97629752a13b?auto=format&fit=crop&w=1600&q=80",
  bible:
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1600&q=80",
  cross:
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80",
  communion:
    "https://images.unsplash.com/photo-1499097505928-42fd92ac09f1?auto=format&fit=crop&w=1600&q=80",
  chalice:
    "https://images.unsplash.com/photo-1549508477-3e484818ba7d?auto=format&fit=crop&w=1600&q=80",
  apparel:
    "https://images.unsplash.com/photo-1542060748-10c28b62716f?auto=format&fit=crop&w=1600&q=80",
  merch:
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=80",
  business:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  food:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
  house:
    "https://images.unsplash.com/photo-1647579350413-a6ada4e480ed?auto=format&fit=crop&w=1600&q=80",
};

type LegacyKind = "people";
const LEGACY: Record<LegacyKind, PhotoKind> = { people: "retreat" };

export function Photo({
  kind,
  ratio = "16/9",
  className = "",
  rounded = "rounded-2xl",
  children,
  src,
  alt,
  overlay = "subtle",
}: {
  kind: PhotoKind | LegacyKind;
  ratio?: string;
  className?: string;
  rounded?: string;
  children?: ReactNode;
  src?: string;
  alt?: string;
  overlay?: "none" | "subtle" | "strong";
}) {
  const resolved: PhotoKind =
    (LEGACY as Record<string, PhotoKind>)[kind] ?? (kind as PhotoKind);
  const finalSrc = src ?? SOURCES[resolved];
  const hasAbsolute = /\babsolute\b/.test(className);
  const positionCls = hasAbsolute ? "" : "relative";
  const sizeStyle =
    hasAbsolute || ratio === "auto"
      ? undefined
      : { aspectRatio: ratio };
  return (
    <div
      data-photo={resolved}
      className={`${positionCls} overflow-hidden border border-pm-border ${rounded} ${className}`}
      style={sizeStyle}
    >
      <div className="relative h-full w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={finalSrc}
          alt={alt ?? resolved}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {overlay !== "none" ? (
          <div
            className={`pointer-events-none absolute inset-0 ${
              overlay === "strong"
                ? "bg-gradient-to-t from-black/55 via-black/15 to-transparent"
                : "bg-gradient-to-t from-black/25 via-transparent to-transparent"
            }`}
          />
        ) : null}
        {children ? (
          <div className="absolute inset-0 flex flex-col justify-end text-white">
            <div className="relative">{children}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
