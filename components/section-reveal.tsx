"use client";

import { useEffect } from "react";

export default function SectionReveal() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".section"));

    sections.forEach((section) => section.classList.add("section-scroll-target"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}
