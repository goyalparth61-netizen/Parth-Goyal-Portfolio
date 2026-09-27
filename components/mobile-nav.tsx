"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["ABOUT", "#about"],
  ["WORK", "#work"],
  ["JOURNEY", "#journey"],
  ["SKILLS", "#skills"],
  ["GITHUB", "#github"],
  ["CONTACT", "#contact"],
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        className="mobile-nav-trigger"
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
        aria-expanded={open}
      >
        <Menu size={19} />
      </button>

      {open && (
        <div className="mobile-nav">
          <div className="mobile-nav__top">
            <span className="brand">PG<span>.</span></span>
            <button onClick={() => setOpen(false)} aria-label="Close navigation">
              <X size={20} />
            </button>
          </div>

          <div className="mobile-nav__links">
            {links.map(([label, href], index) => (
              <a
                key={label}
                href={href}
                style={{ "--delay": `${index * 50}ms` } as React.CSSProperties}
                onClick={() => setOpen(false)}
              >
                <span>0{index + 1}</span>
                {label}
                <ArrowUpRight size={18} />
              </a>
            ))}
          </div>

          <div className="mobile-nav__footer">
            <a href="/resume" onClick={() => setOpen(false)}>VIEW RESUME</a>
            <a
              href="https://github.com/goyalparth61-netizen"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB PROFILE
            </a>
          </div>
        </div>
      )}
    </>
  );
}
