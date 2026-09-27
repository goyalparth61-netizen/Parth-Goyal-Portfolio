import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { env, selectRows } from "@/lib/server";

function authorized() {
  const token = cookies().get("admin_session")?.value;
  return Boolean(token && env("ADMIN_TOKEN") && token === env("ADMIN_TOKEN"));
}

export async function GET() {
  if (!authorized()) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const [questions, messages, bookings] = await Promise.all([
      selectRows("ai_questions", 100),
      selectRows("contact_messages", 100),
      selectRows("call_bookings", 100),
    ]);

    return NextResponse.json({ questions, messages, bookings });
  } catch (error) {
    console.error("Inbox load failed:", error);
    return NextResponse.json(
      { error: "Backend storage is not configured or could not be reached." },
      { status: 500 }
    );
  }
}
