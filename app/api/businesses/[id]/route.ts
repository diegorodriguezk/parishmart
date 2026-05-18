import { NextResponse } from "next/server";
import { getBusiness } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const business = getBusiness(id);
  if (!business) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }
  return NextResponse.json({ business });
}
