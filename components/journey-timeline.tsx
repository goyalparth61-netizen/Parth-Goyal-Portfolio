"use client";

import { GraduationCap, Shield, Sparkles } from "lucide-react";

const milestones = [
  {
    year: "2025 — PRESENT",
    title: "B.Tech · Cyber Security",
    place: "Quantum University",
    text: "Specialization in Cyber Security with interests in Artificial Intelligence, Network Security, Ethical Hacking, Cloud Security, and emerging technologies.",
    icon: Shield,
  },
  {
    year: "2024 — 2025",
    title: "Senior Secondary · Class XII",
    place: "Udaishwar Public School",
    text: "Completed Senior Secondary education with a reported score of 79%.",
    icon: GraduationCap,
  },
  {
    year: "2022 — 2023",
    title: "Secondary · Class X",
    place: "Udaishwar Public School",
    text: "Completed Secondary education with a reported score of 88%.",
    icon: Sparkles,
  },
];

export default function JourneyTimeline() {
  return (
    <div className="journey">
      <div className="journey__rail" />
      {milestones.map((item, index) => {
        const Icon = item.icon;

        return (
          <article className="journey__item" key={item.year}>
            <div className="journey__marker">
              <span>0{index + 1}</span>
              <Icon size={17} />
            </div>

            <div className="journey__content">
              <span className="journey__year">{item.year}</span>
              <h3>{item.title}</h3>
              <strong>{item.place}</strong>
              <p>{item.text}</p>
            </div>

            <div className="journey__signal">
              <span>TRACE / {String(index + 1).padStart(2, "0")}</span>
            </div>
          </article>
        );
      })}
    </div>
  );
}
