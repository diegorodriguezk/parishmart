import { NextResponse } from "next/server";
import { listCauses } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export async function GET() {
  const causes = listCauses();
  return NextResponse.json({ causes, count: causes.length });
}
