"use client";

import { useEffect, useState } from "react";

type InboxData = {
  questions: Array<{ id: string; created_at: string; question: string; answer: string; model?: string }>;
  messages: Array<{ id: string; created_at: string; name: string; email: string; subject: string; message: string }>;
  bookings: Array<{ id: string; created_at: string; name: string; email: string; preferred_date: string; preferred_time: string; topic?: string; status: string }>;
};

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState<InboxData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function login(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: token }),
    });

    const result = await response.json();

    if (!response.ok) {
      setError(result.error || "Login failed.");
      setLoading(false);
      return;
    }

    setLoggedIn(true);
    await loadInbox();
    setLoading(false);
  }

  async function loadInbox() {
    const response = await fetch("/api/admin/inbox", { cache: "no-store" });
    const result = await response.json();

    if (!response.ok) {
      setError(result.error || "Could not load inbox.");
      return;
    }

    setData(result);
  }

  useEffect(() => {
    loadInbox().then(() => setLoggedIn(true)).catch(() => undefined);
  }, []);

  if (!loggedIn || !data) {
    return (
      <main className="admin-page">
        <div className="admin-login">
          <span>PG / ADMIN</span>
          <h1>Portfolio backend</h1>
          <p>Enter your ADMIN_TOKEN to view AI questions, messages, and call requests.</p>
          <form onSubmit={login}>
            <input
              type="password"
              value={token}
              onChange={(event) => setToken(event.target.value)}
              placeholder="ADMIN_TOKEN"
              required
            />
            <button disabled={loading}>{loading ? "CHECKING…" : "OPEN INBOX"}</button>
          </form>
          {error && <small>{error}</small>}
        </div>
      </main>
    );
  }

  return (
    <main className="admin-page">
      <header className="admin-header">
        <div>
          <span>PG / ADMIN</span>
          <h1>Portfolio inbox</h1>
        </div>
        <button onClick={loadInbox}>REFRESH</button>
      </header>

      <section className="admin-grid">
        <article className="admin-card">
          <div className="admin-card__head">
            <h2>AI QUESTIONS</h2>
            <b>{data.questions.length}</b>
          </div>
          <div className="admin-list">
            {data.questions.length === 0 ? (
              <p className="admin-empty">No AI questions yet.</p>
            ) : data.questions.map((item) => (
              <div className="admin-item" key={item.id}>
                <small>{new Date(item.created_at).toLocaleString()}</small>
                <strong>{item.question}</strong>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="admin-card">
          <div className="admin-card__head">
            <h2>MESSAGES</h2>
            <b>{data.messages.length}</b>
          </div>
          <div className="admin-list">
            {data.messages.length === 0 ? (
              <p className="admin-empty">No messages yet.</p>
            ) : data.messages.map((item) => (
              <div className="admin-item" key={item.id}>
                <small>{new Date(item.created_at).toLocaleString()}</small>
                <strong>{item.name} · {item.email}</strong>
                <b>{item.subject}</b>
                <p>{item.message}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="admin-card admin-card--wide">
          <div className="admin-card__head">
            <h2>CALL REQUESTS</h2>
            <b>{data.bookings.length}</b>
          </div>
          <div className="admin-list">
            {data.bookings.length === 0 ? (
              <p className="admin-empty">No call requests yet.</p>
            ) : data.bookings.map((item) => (
              <div className="admin-item" key={item.id}>
                <small>{new Date(item.created_at).toLocaleString()}</small>
                <strong>{item.name} · {item.email}</strong>
                <b>{item.preferred_date} at {item.preferred_time} · {item.status}</b>
                <p>{item.topic || "No topic provided."}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
