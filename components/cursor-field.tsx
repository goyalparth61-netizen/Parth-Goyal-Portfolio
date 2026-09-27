"use client";

import { useEffect } from "react";

export default function CursorField() {
  useEffect(() => {
    const root = document.documentElement;

    const move = (event: PointerEvent) => {
      root.style.setProperty("--mx", `${event.clientX}px`);
      root.style.setProperty("--my", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return <div className="cursor-field" aria-hidden="true" />;
}
