"use client";

import Link from "next/link";
import { ArrowLeft, Download, Mail, MapPin, Phone } from "lucide-react";

const resume = {
  name: "PARTH GOYAL",
  title: "ASPIRING CYBERSECURITY PROFESSIONAL",
  summary:
    "Cyber Security student passionate about understanding how technology works and how it can solve real-world problems, with interests in Artificial Intelligence, leadership, continuous learning, network security, ethical hacking, cloud security, and emerging technologies.",
  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Quantum University",
      period: "2025 – Present",
      detail: "Specialization in Cyber Security.",
    },
    {
      degree: "Senior Secondary (Class XII)",
      institution: "Udaishwar Public School",
      period: "2024 – 2025",
      detail: "Percentage: 79%",
    },
    {
      degree: "Secondary (Class X)",
      institution: "Udaishwar Public School",
      period: "2022 – 2023",
      detail: "Percentage: 88%",
    },
  ],
  skills: [
    "C", "C++", "Python", "HTML & CSS", "Git", "GitHub",
    "Kali Linux", "Nmap", "Computer Networking", "Network Security",
    "Canva", "Leadership", "Analytics", "Teamwork", "Problem Solving",
  ],
};

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-actions no-print">
        <Link href="/"><ArrowLeft size={15} /> BACK</Link>
        <button onClick={() => window.print()}><Download size={15} /> PRINT / SAVE PDF</button>
      </div>

      <article className="resume-sheet">
        <header className="resume-header">
          <div>
            <p className="resume-kicker">{resume.title}</p>
            <h1>{resume.name}</h1>
            <p className="resume-summary">{resume.summary}</p>
          </div>
          <div className="resume-contact">
            <span><Mail size={14} /> goyalparth61@gmail.com</span>
            <span><Phone size={14} /> +91 7078938505</span>
            <span><MapPin size={14} /> Haridwar, Uttarakhand</span>
          </div>
        </header>

        <section className="resume-section">
          <h2>EDUCATION</h2>
          {resume.education.map((item) => (
            <div className="resume-row" key={item.degree}>
              <div>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                <small>{item.detail}</small>
              </div>
              <span>{item.period}</span>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2>PROJECT</h2>
          <div className="resume-project">
            <h3>Fake Profile Detection System</h3>
            <p>
              A cybersecurity risk-scoring engine for fake social media profile
              detection using OSINT-based indicators and behavioral analysis,
              including profile metadata, account activity patterns, content
              analysis, network connections, automated data collection, and
              risk classification.
            </p>
          </div>
        </section>

        <section className="resume-section">
          <h2>SKILLS</h2>
          <div className="resume-skills">
            {resume.skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </section>

        <section className="resume-section">
          <h2>ACHIEVEMENTS</h2>
          <div className="resume-achievements">
            <p>Built and completed multiple hands-on technical projects in Cybersecurity and Programming.</p>
            <p>Earned certifications in Python, Cybersecurity, and related technology domains.</p>
            <p>Participated in coding competitions, workshops, and technical events.</p>
            <p>Continuously upskilled through self-learning and practical implementation.</p>
          </div>
        </section>
      </article>
    </main>
  );
}
