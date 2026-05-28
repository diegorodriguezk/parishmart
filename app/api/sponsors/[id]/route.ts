import { NextResponse } from "next/server";
import { getSponsor } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const sponsor = getSponsor(id);
  if (!sponsor) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ sponsor });
}
