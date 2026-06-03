"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CardsCarousel({
  children,
  lgCols = 4,
}: {
  children: ReactNode;
  lgCols?: 3 | 4;
}) {
  const lgWidthCls = lgCols === 3 ? "lg:w-[32%]" : "lg:w-[24%]";
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  };

  useEffect(() => {
    updateEdges();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(":scope > *");
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => scrollBy(-1)}
        aria-label="Previous"
        disabled={atStart}
        className="shrink-0 grid h-10 w-10 place-items-center rounded-full border border-pm-border bg-white text-pm-navy shadow-pm-card transition hover:border-pm-blue hover:text-pm-blue disabled:cursor-not-allowed disabled:opacity-0"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden />
      </button>
      <div
        ref={scrollerRef}
        className="flex-1 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Array.isArray(children)
          ? children.map((child, i) => (
              <div
                key={i}
                className={`flex w-[78%] shrink-0 snap-start sm:w-[48%] ${lgWidthCls} [&>*]:w-full`}
              >
                {child}
              </div>
            ))
          : (
            <div className={`flex w-[78%] shrink-0 snap-start sm:w-[48%] ${lgWidthCls} [&>*]:w-full`}>
              {children}
            </div>
          )}
      </div>
      <button
        type="button"
        onClick={() => scrollBy(1)}
        aria-label="Next"
        disabled={atEnd}
        className="shrink-0 grid h-10 w-10 place-items-center rounded-full border border-pm-border bg-white text-pm-navy shadow-pm-card transition hover:border-pm-blue hover:text-pm-blue disabled:cursor-not-allowed disabled:opacity-0"
      >
        <ChevronRight className="h-5 w-5" aria-hidden />
      </button>
    </div>
  );
}
