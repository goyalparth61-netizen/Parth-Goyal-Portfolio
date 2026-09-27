"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SectionReveal() {
  const ready = useRef(false);

  useLayoutEffect(() => {
    if (ready.current) return;
    ready.current = true;

    const ctx = gsap.context(() => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>(".section")
      );

      sections.forEach((section) => {
        const targets = section.querySelectorAll(".section-label, .display, .project, .skills-cloud span, .capability-row > div, .lab-panel, .contact-layout");

        gsap.fromTo(
          targets,
          { y: 34, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.045,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              once: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
