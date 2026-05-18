import { NextResponse } from "next/server";
import { PRODUCTS, type ProductCategory } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const idsParam = searchParams.get("ids");
  const category = searchParams.get("category") as ProductCategory | null;
  const seller = searchParams.get("seller");
  const limitParam = searchParams.get("limit");
  const cause = searchParams.get("cause");

  let items = PRODUCTS;

  if (idsParam) {
    const ids = idsParam.split(",").map((s) => s.trim());
    const byId = new Map(items.map((p) => [p.id, p]));
    items = ids.map((id) => byId.get(id)).filter(Boolean) as typeof PRODUCTS;
  }
  if (category) items = items.filter((p) => p.category === category);
  if (seller) items = items.filter((p) => p.seller === seller);
  if (cause) items = items.filter((p) => p.cause === cause);

  const limit = limitParam ? Math.max(0, Number(limitParam)) : undefined;
  if (limit !== undefined) items = items.slice(0, limit);

  return NextResponse.json({ products: items, count: items.length });
}
