import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  try {
    const rows = await prisma.$queryRawUnsafe<{ now: Date }[]>("select now()");
    return NextResponse.json({ ok: true, dbTime: rows?.[0]?.now ?? null });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message ?? "DB error" }, { status: 500 });
  }
}
