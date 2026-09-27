import { NextResponse } from "next/server";
import { escapeHtml, insertRow, sendEmail } from "@/lib/server";

function clean(value: unknown, max = 500) {
  return String(value ?? "").trim().slice(0, max);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = clean(body?.name, 120);
    const email = clean(body?.email, 180);
    const date = clean(body?.date, 30);
    const time = clean(body?.time, 30);
    const topic = clean(body?.topic, 500);

    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { error: "Name, email, preferred date and preferred time are required." },
        { status: 400 }
      );
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return NextResponse.json({ error: "Please choose a valid date." }, { status: 400 });
    }

    if (!/^\d{2}:\d{2}$/.test(time)) {
      return NextResponse.json({ error: "Please choose a valid time." }, { status: 400 });
    }

    await insertRow("call_bookings", {
      name,
      email,
      preferred_date: date,
      preferred_time: time,
      topic,
      status: "pending",
    });

    await sendEmail({
      subject: `Portfolio call request from ${name}`,
      replyTo: email,
      html: `
        <h2>New call request</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Preferred date:</b> ${escapeHtml(date)}</p>
        <p><b>Preferred time:</b> ${escapeHtml(time)}</p>
        <p><b>Topic:</b> ${escapeHtml(topic || "Not provided")}</p>
        <p>Status: pending manual confirmation.</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Booking route failed:", error);
    return NextResponse.json(
      { error: "Booking request could not be submitted. Please email Parth directly." },
      { status: 500 }
    );
  }
}
