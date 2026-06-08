"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { SearchAutocomplete } from "@/components/SearchAutocomplete";

/**
 * Global header search. Clicking the icon expands an inline search field with a
 * results dropdown (no navigation to open). Submitting runs the full /search;
 * the close button collapses it back to the icon.
 */
export function HeaderSearch({
  placeholder = "Search products, causes, businesses, gifts and services…",
}: {
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);

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
    <SearchAutocomplete
      placeholder={placeholder}
      autoFocus
      onClose={() => setOpen(false)}
      className="w-[min(460px,72vw)]"
    />
  );
}
