import { NextResponse } from "next/server";
import { escapeHtml, insertRow, sendEmail } from "@/lib/server";

function clean(value: unknown, max = 2000) {
  return String(value ?? "").trim().slice(0, max);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = clean(body?.name, 120);
    const email = clean(body?.email, 180);
    const subject = clean(body?.subject, 180) || "New portfolio message";
    const message = clean(body?.message, 4000);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailLooksValid) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }

    await insertRow("contact_messages", {
      name,
      email,
      subject,
      message,
    });

    await sendEmail({
      subject: `Portfolio: ${subject}`,
      replyTo: email,
      html: `
        <h2>New portfolio message</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Subject:</b> ${escapeHtml(subject)}</p>
        <p><b>Message:</b></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact route failed:", error);
    return NextResponse.json(
      { error: "Message could not be sent. Please email Parth directly." },
      { status: 500 }
    );
  }
}
