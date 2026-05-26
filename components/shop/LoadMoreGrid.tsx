"use client";

import { Children, useState } from "react";
import { ChevronDown } from "lucide-react";

export function LoadMoreGrid({
  children,
  initialCount = 4,
  step,
  gridClassName,
}: {
  children: React.ReactNode;
  initialCount?: number;
  step?: number;
  gridClassName?: string;
}) {
  const all = Children.toArray(children);
  const inc = step ?? initialCount;
  const [count, setCount] = useState(initialCount);
  const visible = all.slice(0, count);
  const hasMore = count < all.length;

  return (
    <div>
      <div className={gridClassName}>{visible}</div>
      {hasMore && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setCount((c) => Math.min(c + inc, all.length))}
            className="inline-flex items-center gap-2 rounded-full border border-pm-border bg-white px-5 py-2.5 text-sm font-medium text-pm-navy hover:border-pm-blue"
          >
            View more ({all.length - count} remaining)
            <ChevronDown className="h-4 w-4 text-pm-muted" aria-hidden />
          </button>
        </div>
      )}
    </div>
  );
}
