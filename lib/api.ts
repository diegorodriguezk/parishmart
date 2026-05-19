import { headers } from "next/headers";
import {
  BUSINESSES,
  CAUSES,
  PARISHES,
  PRODUCTS,
  getBusiness,
  getCause,
  getParish,
  getProduct,
  listCauses,
  listParishes,
  type Business,
  type Cause,
  type Parish,
  type Product,
  type ProductCategory,
} from "./catalog";

function externalBase(): string | null {
  const override = process.env.NEXT_PUBLIC_API_BASE;
  return override ? override.replace(/\/$/, "") : null;
}

async function apiBase(): Promise<string> {
  const ext = externalBase();
  if (ext) return ext;
  try {
    const h = await headers();
    const host = h.get("host");
    if (host) {
      const proto = h.get("x-forwarded-proto") ?? "http";
      return `${proto}://${host}`;
    }
  } catch {
    // headers() throws outside of a request scope — fall through
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

async function apiFetch<T>(
  path: string,
  init: RequestInit & { revalidate?: number } = {},
): Promise<T> {
  const base = await apiBase();
  const url = `${base}${path}`;
  const { revalidate, ...rest } = init;
  const res = await fetch(url, {
    ...rest,
    next: revalidate !== undefined ? { revalidate } : undefined,
    cache: revalidate === undefined ? "no-store" : undefined,
  });
  if (!res.ok) {
    if (res.status === 404) return null as T;
    throw new Error(`API ${res.status} ${url}`);
  }
  return (await res.json()) as T;
}

function localProducts(opts?: {
  ids?: string[];
  category?: ProductCategory;
  seller?: string;
  cause?: string;
  limit?: number;
}): Product[] {
  let items = PRODUCTS;
  if (opts?.ids?.length) {
    const byId = new Map(items.map((p) => [p.id, p]));
    items = opts.ids
      .map((id) => byId.get(id))
      .filter((p): p is Product => Boolean(p));
  }
  if (opts?.category) items = items.filter((p) => p.category === opts.category);
  if (opts?.seller) items = items.filter((p) => p.seller === opts.seller);
  if (opts?.cause) items = items.filter((p) => p.cause === opts.cause);
  if (opts?.limit !== undefined) items = items.slice(0, opts.limit);
  return items;
}

export async function fetchProducts(opts?: {
  ids?: string[];
  category?: ProductCategory;
  seller?: string;
  cause?: string;
  limit?: number;
}): Promise<Product[]> {
  if (!externalBase()) return localProducts(opts);
  const qs = new URLSearchParams();
  if (opts?.ids?.length) qs.set("ids", opts.ids.join(","));
  if (opts?.category) qs.set("category", opts.category);
  if (opts?.seller) qs.set("seller", opts.seller);
  if (opts?.cause) qs.set("cause", opts.cause);
  if (opts?.limit !== undefined) qs.set("limit", String(opts.limit));
  const path = `/api/products${qs.toString() ? `?${qs}` : ""}`;
  const data = await apiFetch<{ products: Product[] }>(path);
  return data?.products ?? [];
}

export async function fetchProduct(id: string): Promise<Product | null> {
  if (!externalBase()) return getProduct(id) ?? null;
  const data = await apiFetch<{ product: Product } | null>(
    `/api/products/${encodeURIComponent(id)}`,
  );
  return data?.product ?? null;
}

export async function fetchBusinesses(): Promise<Business[]> {
  if (!externalBase()) return BUSINESSES;
  const data = await apiFetch<{ businesses: Business[] }>("/api/businesses");
  return data?.businesses ?? [];
}

export async function fetchBusiness(id: string): Promise<Business | null> {
  if (!externalBase()) return getBusiness(id) ?? null;
  const data = await apiFetch<{ business: Business } | null>(
    `/api/businesses/${encodeURIComponent(id)}`,
  );
  return data?.business ?? null;
}

export async function fetchCauses(): Promise<Cause[]> {
  if (!externalBase()) return listCauses();
  const data = await apiFetch<{ causes: Cause[] }>("/api/causes");
  return data?.causes ?? [];
}

export async function fetchCause(key: string): Promise<Cause | null> {
  if (!externalBase()) return getCause(key) ?? null;
  const data = await apiFetch<{ cause: Cause } | null>(
    `/api/causes/${encodeURIComponent(key)}`,
  );
  return data?.cause ?? null;
}

export async function fetchParish(slug: string): Promise<Parish | null> {
  if (!externalBase()) return getParish(slug) ?? null;
  const data = await apiFetch<{ parish: Parish } | null>(
    `/api/parishes/${encodeURIComponent(slug)}`,
  );
  return data?.parish ?? null;
}

export async function fetchParishes(): Promise<Parish[]> {
  if (!externalBase()) return listParishes();
  const data = await apiFetch<{ parishes: Parish[] }>("/api/parishes");
  return data?.parishes ?? [];
}

// Silence unused-import warnings — keeps CAUSES/PARISHES exports loadable
// for callers that may reach for the raw map in the future.
void CAUSES;
void PARISHES;
