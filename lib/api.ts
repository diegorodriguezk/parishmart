import { headers } from "next/headers";
import type {
  Business,
  Cause,
  Parish,
  Product,
  ProductCategory,
} from "./catalog";

async function apiBase(): Promise<string> {
  const override = process.env.NEXT_PUBLIC_API_BASE;
  if (override) return override.replace(/\/$/, "");
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

export async function fetchProducts(opts?: {
  ids?: string[];
  category?: ProductCategory;
  seller?: string;
  cause?: string;
  limit?: number;
}): Promise<Product[]> {
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
  const data = await apiFetch<{ product: Product } | null>(
    `/api/products/${encodeURIComponent(id)}`,
  );
  return data?.product ?? null;
}

export async function fetchBusinesses(): Promise<Business[]> {
  const data = await apiFetch<{ businesses: Business[] }>("/api/businesses");
  return data?.businesses ?? [];
}

export async function fetchBusiness(id: string): Promise<Business | null> {
  const data = await apiFetch<{ business: Business } | null>(
    `/api/businesses/${encodeURIComponent(id)}`,
  );
  return data?.business ?? null;
}

export async function fetchCauses(): Promise<Cause[]> {
  const data = await apiFetch<{ causes: Cause[] }>("/api/causes");
  return data?.causes ?? [];
}

export async function fetchCause(key: string): Promise<Cause | null> {
  const data = await apiFetch<{ cause: Cause } | null>(
    `/api/causes/${encodeURIComponent(key)}`,
  );
  return data?.cause ?? null;
}

export async function fetchParish(slug: string): Promise<Parish | null> {
  const data = await apiFetch<{ parish: Parish } | null>(
    `/api/parishes/${encodeURIComponent(slug)}`,
  );
  return data?.parish ?? null;
}

export async function fetchParishes(): Promise<Parish[]> {
  const data = await apiFetch<{ parishes: Parish[] }>("/api/parishes");
  return data?.parishes ?? [];
}
