"use client";

const signals = [
  "CYBERSECURITY",
  "ARTIFICIAL INTELLIGENCE",
  "NETWORK SECURITY",
  "FULL-STACK DEVELOPMENT",
  "ETHICAL HACKING",
  "SYSTEM DESIGN",
  "CONTINUOUS LEARNING",
];

export default function CyberMarquee() {
  const row = [...signals, ...signals];

  return (
    <div className="cyber-marquee" aria-hidden="true">
      <div className="cyber-marquee__track">
        {row.map((signal, index) => (
          <span key={`${signal}-${index}`}>
            <i />
            {signal}
          </span>
        ))}
      </div>
    </div>
  );
}
