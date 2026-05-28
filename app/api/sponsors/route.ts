import { NextResponse } from "next/server";
import { SPONSORS } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ sponsors: SPONSORS, count: SPONSORS.length });
}
