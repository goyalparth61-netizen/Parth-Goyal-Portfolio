"use client";

import { useMemo } from "react";

export default function ProjectVisual({
  accent,
  index,
}: {
  accent: "lime" | "violet";
  index: string;
}) {
  const nodes = useMemo(
    () =>
      Array.from({ length: 18 }, (_, item) => ({
        x: (item * 17 + 8) % 100,
        y: (item * 29 + 13) % 100,
        delay: `${(item % 6) * 0.28}s`,
      })),
    []
  );

  return (
    <div className={`project-visual project-visual--${accent}`}>
      <div className="project-visual__grid" />
      <div className="project-visual__core">
        <span>{index}</span>
      </div>
      <div className="project-visual__orbit project-visual__orbit--one" />
      <div className="project-visual__orbit project-visual__orbit--two" />
      {nodes.map((node) => (
        <i
          key={`${node.x}-${node.y}`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            animationDelay: node.delay,
          }}
        />
      ))}
    </div>
  );
}
