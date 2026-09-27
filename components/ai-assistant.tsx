"use client";

import { FormEvent, useState } from "react";
import { Bot, MessageCircle, Send, X, Loader2 } from "lucide-react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi — I’m Parth AI. Ask me about Parth’s projects, skills, cybersecurity work, or how to contact him.",
    },
  ]);

  async function submit(event: FormEvent) {
    event.preventDefault();
    const message = input.trim();
    if (!message || loading) return;

    setInput("");
    setMessages((current) => [...current, { role: "user", content: message }]);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to contact Parth AI.");
      }

      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.answer },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "Parth AI is unavailable right now.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {open && (
        <section className="ai-panel" aria-label="Parth AI assistant">
          <div className="ai-panel__top">
            <div>
              <div className="ai-panel__identity">
                <span className="ai-panel__dot" />
                PARTH AI
              </div>
              <small>Portfolio intelligence layer</small>
            </div>
            <button className="icon-button" onClick={() => setOpen(false)} aria-label="Close AI">
              <X size={18} />
            </button>
          </div>

          <div className="ai-panel__messages">
            {messages.map((item, index) => (
              <div
                key={index}
                className={`ai-message ai-message--${item.role}`}
              >
                {item.content}
              </div>
            ))}

            {loading && (
              <div className="ai-message ai-message--assistant ai-message--loading">
                <Loader2 size={15} className="spin" />
                Thinking…
              </div>
            )}
          </div>

          <form className="ai-panel__form" onSubmit={submit}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about Parth…"
              maxLength={1200}
              aria-label="Ask Parth AI"
            />
            <button type="submit" disabled={loading || !input.trim()} aria-label="Send question">
              <Send size={16} />
            </button>
          </form>
        </section>
      )}

      {!open && (
        <button className="ai-fab" onClick={() => setOpen(true)} aria-label="Open Parth AI">
          <Bot size={18} />
          <span>ASK PARTH AI</span>
          <MessageCircle size={15} />
        </button>
      )}
    </>
  );
}
