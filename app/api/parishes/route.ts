import { NextResponse } from "next/server";
import { listParishes } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export async function GET() {
  const parishes = listParishes();
  return NextResponse.json({ parishes, count: parishes.length });
}
