"use client";

import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const done = window.setTimeout(() => setVisible(false), 1100);
    return () => window.clearTimeout(done);
  }, []);

  return (
    <div className={`intro-loader ${visible ? "" : "intro-loader--done"}`} aria-hidden="true">
      <div className="intro-loader__mark">PG<span>.</span></div>
      <div className="intro-loader__line"><i /></div>
      <div className="intro-loader__meta">INITIALIZING / SECURE PORTFOLIO</div>
    </div>
  );
}
