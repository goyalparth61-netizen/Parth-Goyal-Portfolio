"use client";

const metrics = [
  { value: "05", label: "FEATURED BUILDS" },
  { value: "10+", label: "TOOLS / SKILLS" },
  { value: "01", label: "CYBER LAB" },
  { value: "∞", label: "CURIOSITY" },
];

export default function HeroMetrics() {
  return (
    <div className="hero-metrics">
      {metrics.map((item) => (
        <div className="hero-metric" key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
