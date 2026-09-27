"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setDark((value) => !value)}
      aria-label="Toggle theme"
    >
      {dark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
