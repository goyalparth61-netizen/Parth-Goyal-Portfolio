"use client";

import { useMemo } from "react";

const skillGroups = [
  ["SECURITY", "Cybersecurity", "Network Security", "Ethical Hacking"],
  ["CODE", "Python", "C / C++", "HTML / CSS"],
  ["SYSTEMS", "Kali Linux", "Nmap", "Git & GitHub"],
  ["AI", "AI & ML", "Intelligent Systems", "Experimentation"],
];

export default function SkillOrbit() {
  const nodes = useMemo(
    () =>
      skillGroups.flatMap(([group, ...skills], groupIndex) =>
        skills.map((label, skillIndex) => ({
          group,
          label,
          groupIndex,
          skillIndex,
        }))
      ),
    []
  );

  return (
    <div className="skill-orbit" aria-label="Interactive skill constellation">
      <div className="skill-orbit__core">
        <span>PG</span>
        <small>SKILLS</small>
      </div>

      <div className="skill-orbit__ring skill-orbit__ring--1" />
      <div className="skill-orbit__ring skill-orbit__ring--2" />
      <div className="skill-orbit__ring skill-orbit__ring--3" />

      {nodes.map((node) => {
        const angle = (360 / 12) * (node.groupIndex * 3 + node.skillIndex) - 90;
        const radius = 34 + node.groupIndex * 7;

        return (
          <span
            key={node.label}
            className="skill-orbit__node"
            style={{
              "--angle": `${angle}deg`,
              "--radius": `${radius}%`,
            } as React.CSSProperties}
          >
            <i />
            <b>{node.label}</b>
          </span>
        );
      })}
    </div>
  );
}
