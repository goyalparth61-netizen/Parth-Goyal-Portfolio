"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowRight, Command, Search, X } from "lucide-react";

const commands = [
  { label: "Jump to About", href: "#about", key: "A" },
  { label: "View selected work", href: "#work", key: "W" },
  { label: "Open GitHub signal", href: "#github", key: "G" },
  { label: "Launch Cyber Lab", href: "#lab", key: "L" },
  { label: "Contact Parth", href: "#contact", key: "C" },
  { label: "Open resume", href: "/resume", key: "R" },
];

export default function CommandBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filtered = commands.filter((command) =>
    command.label.toLowerCase().includes(query.toLowerCase())
  );

  function submit(event: FormEvent) {
    event.preventDefault();
    const first = filtered[0];
    if (!first) return;

    setOpen(false);
    setQuery("");
    window.location.href = first.href;
  }

  return (
    <>
      <button className="command-trigger" onClick={() => setOpen(true)} aria-label="Open quick navigation">
        <Command size={13} />
        <span>QUICK NAV</span>
        <kbd>⌘K</kbd>
      </button>

      {open && (
        <div className="command-overlay" onMouseDown={() => setOpen(false)}>
          <div className="command-modal" onMouseDown={(event) => event.stopPropagation()}>
            <div className="command-modal__top">
              <Search size={16} />
              <form onSubmit={submit}>
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Jump anywhere…"
                />
              </form>
              <button onClick={() => setOpen(false)} aria-label="Close quick navigation">
                <X size={16} />
              </button>
            </div>

            <div className="command-list">
              {filtered.map((command) => (
                <a
                  key={command.href}
                  href={command.href}
                  onClick={() => setOpen(false)}
                >
                  <span>{command.label}</span>
                  <i>{command.key}</i>
                  <ArrowRight size={14} />
                </a>
              ))}

              {!filtered.length && (
                <div className="command-empty">No matching destination.</div>
              )}
            </div>

            <div className="command-footer">
              <span>ENTER / OPEN</span>
              <span>ESC / CLOSE</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
