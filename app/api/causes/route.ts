import { NextResponse } from "next/server";
import { listCauses } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parishSlug = searchParams.get("parishSlug") ?? undefined;
  const causes = listCauses(parishSlug ? { parishSlug } : undefined);
  return NextResponse.json({ causes, count: causes.length });
}
