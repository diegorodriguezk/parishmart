"use client";

import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";

/**
 * Global header search. Clicking the icon expands an inline search field
 * in place (no navigation). Submitting runs the search on the /search results
 * page; pressing Escape or the close button collapses it back to the icon.
 */
export function HeaderSearch({
  placeholder = "Search products, causes, businesses, gifts and services…",
}: {
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open search"
        aria-expanded={false}
        className="hidden h-10 w-10 place-items-center rounded-full border border-pm-border bg-white text-pm-navy hover:border-pm-blue hover:text-pm-blue sm:grid"
      >
        <Search className="h-4 w-4" aria-hidden />
      </button>
    );
  }

  return (
    <form
      action="/search"
      method="get"
      role="search"
      className="flex items-center gap-2 rounded-full border border-pm-blue bg-white px-3 py-1 shadow-pm-soft"
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <Search className="h-4 w-4 shrink-0 text-pm-muted" aria-hidden />
      <input
        ref={inputRef}
        name="q"
        className="pm-input h-9 w-44 px-1 text-sm sm:w-72"
        placeholder={placeholder}
        aria-label="Search"
      />
      <button
        type="submit"
        className="pm-btn pm-btn-dark !px-3 !py-1.5 text-xs sm:!px-4 sm:text-sm"
      >
        Search
      </button>
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Close search"
        className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-pm-muted hover:bg-pm-soft hover:text-pm-navy"
      >
        <X className="h-4 w-4" aria-hidden />
      </button>
    </form>
  );
}
