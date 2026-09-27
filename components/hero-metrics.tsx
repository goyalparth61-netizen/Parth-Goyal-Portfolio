"use client";

const metrics = [
  { value: "5+", label: "PROJECTS" },
  { value: "10+", label: "TECHNOLOGIES" },
  { value: "2+", label: "YEARS LEARNING" },
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
