import { NextResponse } from "next/server";
import { env } from "@/lib/server";

export async function POST(request: Request) {
  const body = await request.json();
  const password = String(body?.password ?? "");
  const expected = env("ADMIN_TOKEN");

  if (!expected || password !== expected) {
    return NextResponse.json({ error: "Invalid admin token." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set("admin_session", expected, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
