"use client";

import { useState } from "react";
import { Photo } from "@/components/Photo";
import type { PhotoKind } from "@/components/Photo";

type GalleryItem = {
  id: string;
  src?: string;
  alt: string;
  photo: PhotoKind;
};

export function ProductImageGallery({
  main,
  thumbs,
}: {
  main: GalleryItem;
  thumbs: GalleryItem[];
}) {
  const [active, setActive] = useState<GalleryItem>(main);

  return (
    <div className="space-y-3">
      <Photo
        kind={active.photo}
        src={active.src}
        alt={active.alt}
        ratio="1/1"
        rounded="rounded-3xl"
        fit="contain"
        overlay="none"
        className="bg-white"
      />
      <div className="grid grid-cols-4 gap-2">
        {[main, ...thumbs].map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item)}
            className={`overflow-hidden rounded-xl border-2 transition ${
              active.id === item.id
                ? "border-pm-blue"
                : "border-transparent hover:border-pm-border"
            }`}
          >
            <Photo
              kind={item.photo}
              src={item.src}
              alt={item.alt}
              ratio="1/1"
              rounded="rounded-none"
              fit="contain"
              overlay="none"
              className="!rounded-none bg-white"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
