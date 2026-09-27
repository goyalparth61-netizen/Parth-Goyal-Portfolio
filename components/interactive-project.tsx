"use client";

import { CSSProperties, MouseEvent, ReactNode } from "react";

type Props = {
  href: string;
  index: string;
  type: string;
  title: string;
  description: string;
  tags: string[];
  children?: ReactNode;
};

export default function InteractiveProject({
  href,
  index,
  type,
  title,
  description,
  tags,
}: Props) {
  function move(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    event.currentTarget.style.setProperty("--rx", `${(-y * 3.5).toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--ry", `${(x * 4.5).toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--gx", `${((x + 0.5) * 100).toFixed(1)}%`);
    event.currentTarget.style.setProperty("--gy", `${((y + 0.5) * 100).toFixed(1)}%`);
  }

  function leave(event: MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.style.setProperty("--rx", "0deg");
    event.currentTarget.style.setProperty("--ry", "0deg");
    event.currentTarget.style.setProperty("--gx", "50%");
    event.currentTarget.style.setProperty("--gy", "50%");
  }

  return (
    <a
      className="project project--interactive"
      href={href}
      onMouseMove={move}
      onMouseLeave={leave}
    >
      <div className="project__glare" />
      <div className="project__cursor-preview">
        <span>{index}</span>
        <strong>{title}</strong>
        <small>{type}</small>
      </div>
      <div className="project__index">{index}</div>
      <div className="project__main">
        <span className="project__type">{type}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project__tags">
          {tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
      <div className="project__arrow">↗</div>
    </a>
  );
}
