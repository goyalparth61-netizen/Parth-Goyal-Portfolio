"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CalendarDays, Github, Linkedin, Mail, Send, CheckCircle2, Loader2 } from "lucide-react";

const linkedin =
  "https://in.linkedin.com/in/parth-goyal-215231385";
const github =
  "https://github.com/goyalparth61-netizen";
const email =
  "goyalparth61@gmail.com";
const bookingUrl =
  process.env.NEXT_PUBLIC_BOOKING_URL || "";

export default function ContactPanel() {
  const [mode, setMode] = useState<"message" | "call">("message");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function submitMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      subject: String(form.get("subject") || ""),
      message: String(form.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Message failed.");
      setStatus("success");
      event.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Message failed.");
    }
  }

  async function submitCall(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      date: String(form.get("date") || ""),
      time: String(form.get("time") || ""),
      topic: String(form.get("topic") || ""),
    };

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Booking request failed.");
      setStatus("success");
      event.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Booking request failed.");
    }
  }

  return (
    <div className="contact-layout">
      <div className="contact-info">
        <div className="contact-links">
          <a href={`mailto:${email}`}>
            <Mail size={18} />
            <span><small>EMAIL</small>{email}</span>
            <ArrowUpRight size={16} />
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            <span><small>LINKEDIN</small>Parth Goyal</span>
            <ArrowUpRight size={16} />
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <Github size={18} />
            <span><small>GITHUB</small>goyalparth61-netizen</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {bookingUrl ? (
          <a className="booking-link" href={bookingUrl} target="_blank" rel="noreferrer">
            <CalendarDays size={18} />
            <span>
              <small>CALENDAR</small>
              Open my live booking calendar
            </span>
            <ArrowUpRight size={17} />
          </a>
        ) : (
          <div className="booking-link booking-link--disabled">
            <CalendarDays size={18} />
            <span>
              <small>CALENDAR</small>
              Booking calendar can be connected later
            </span>
          </div>
        )}
      </div>

      <div className="contact-form-wrap">
        <div className="contact-tabs">
          <button className={mode === "message" ? "active" : ""} onClick={() => { setMode("message"); setStatus("idle"); }}>
            MESSAGE
          </button>
          <button className={mode === "call" ? "active" : ""} onClick={() => { setMode("call"); setStatus("idle"); }}>
            BOOK A CALL
          </button>
        </div>

        {status === "success" ? (
          <div className="form-success">
            <CheckCircle2 size={30} />
            <h3>{mode === "message" ? "Message received." : "Call request received."}</h3>
            <p>
              It has been sent to Parth&apos;s inbox. You&apos;ll receive a reply at the email you provided.
            </p>
            <button onClick={() => setStatus("idle")}>SEND ANOTHER</button>
          </div>
        ) : mode === "message" ? (
          <form className="contact-form" onSubmit={submitMessage}>
            <div className="form-row">
              <label>NAME<input name="name" required placeholder="Your name" /></label>
              <label>EMAIL<input name="email" type="email" required placeholder="you@example.com" /></label>
            </div>
            <label>SUBJECT<input name="subject" placeholder="What would you like to discuss?" /></label>
            <label>MESSAGE<textarea name="message" required rows={6} placeholder="Write your message…" /></label>
            {status === "error" && <p className="form-error">{error}</p>}
            <button className="form-submit" type="submit" disabled={status === "loading"}>
              {status === "loading" ? <Loader2 className="spin" size={16} /> : <Send size={16} />}
              SEND MESSAGE
            </button>
          </form>
        ) : (
          <form className="contact-form" onSubmit={submitCall}>
            <div className="form-row">
              <label>NAME<input name="name" required placeholder="Your name" /></label>
              <label>EMAIL<input name="email" type="email" required placeholder="you@example.com" /></label>
            </div>
            <div className="form-row">
              <label>DATE<input name="date" type="date" required min={new Date().toISOString().split("T")[0]} /></label>
              <label>TIME<input name="time" type="time" required /></label>
            </div>
            <label>TOPIC<input name="topic" placeholder="What should we discuss?" /></label>
            {status === "error" && <p className="form-error">{error}</p>}
            <button className="form-submit" type="submit" disabled={status === "loading"}>
              {status === "loading" ? <Loader2 className="spin" size={16} /> : <CalendarDays size={16} />}
              REQUEST CALL
            </button>
            <p className="form-note">The selected time is a request. Final confirmation is sent by Parth.</p>
          </form>
        )}
      </div>
    </div>
  );
}
