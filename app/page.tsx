"use client";

import dynamic from "next/dynamic";
import AIAssistant from "@/components/ai-assistant";
import ContactPanel from "@/components/contact-panel";
import SmoothScroll from "@/components/smooth-scroll";
import SectionReveal from "@/components/section-reveal";

const Hero3D = dynamic(() => import("@/components/hero-3d"), {
  ssr: false,
});

import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Shield,
  Terminal,
  Cpu,
  Code2,
  Network,
  Sparkles,
  ChevronDown,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    index: "01",
    title: "ZeroTrace",
    type: "AI Reliability Engine",
    description:
      "An agent-trace evaluation platform focused on failure detection, root-cause analysis, adversarial evaluation, and reliability signals.",
    tags: ["AI", "Backend", "Evaluation"],
    link: "https://github.com/archisharma158-cmd/ZeroTrace",
  },
  {
    index: "02",
    title: "APS Minds",
    type: "Multi-Agent Intelligence",
    description:
      "A multi-agent intelligence platform combining a modern frontend, FastAPI services, AI integrations, and agent-oriented system design.",
    tags: ["React", "TypeScript", "FastAPI"],
    link: "https://github.com/archisharma158-cmd/APS-Minds",
  },
  {
    index: "03",
    title: "Ankahi Manzil",
    type: "AI Travel Platform",
    description:
      "A full-stack travel experience built around adaptive flows, AI integrations, and a scalable React + FastAPI architecture.",
    tags: ["React", "FastAPI", "AI"],
    link: "https://github.com/goyalparth61-netizen/Ankahi-Manzil",
  },
  {
    index: "04",
    title: "ProSpy",
    type: "Fake Account Detector",
    description:
      "A machine-learning project for classifying social profiles with behavioral and profile-level signals using a neural-network pipeline.",
    tags: ["Python", "TensorFlow", "ML"],
    link: "https://github.com/archisharma158-cmd/ProSpy_Fake_Account_Detector",
  },
  {
    index: "05",
    title: "Agnite",
    type: "Build Lab",
    description:
      "One of Parth's project repositories — presented here as a technical build-space for experimentation and iteration.",
    tags: ["GitHub", "Build", "Explore"],
    link: "https://github.com/goyalparth61-netizen/Agnite",
  },
];

const skills = [
  "Cybersecurity",
  "Network Security",
  "Ethical Hacking",
  "Python",
  "C / C++",
  "HTML / CSS",
  "Git & GitHub",
  "Kali Linux",
  "Nmap",
  "AI & ML",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span className="section-label__line" />
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <SectionReveal />
      <div className="noise" />

      <header className="nav">
        <a className="brand" href="#top">
          PG<span>.</span>
        </a>

        <nav className="nav__links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="nav__cta"
          href="https://github.com/goyalparth61-netizen"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <ArrowUpRight size={15} />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero__grid" />
        <Hero3D />
        <div className="hero__orb hero__orb--one" />
        <div className="hero__orb hero__orb--two" />

        <div className="hero__content">
          <div className="eyebrow reveal">
            <span className="status-dot" />
            CYBERSECURITY × FULL-STACK × AI
          </div>

          <h1 className="hero__title reveal reveal--delay-1">
            PARTH
            <br />
            <span>GOYAL</span>
          </h1>

          <p className="hero__copy reveal reveal--delay-2">
            Building secure, intelligent and modern digital systems —
            from cybersecurity experiments to AI-powered products.
          </p>

          <div className="hero__actions reveal reveal--delay-3">
            <a className="button button--primary" href="#work">
              Explore work <ArrowUpRight size={17} />
            </a>
            <a className="button button--ghost" href="#contact">
              Get in touch
            </a>
          </div>

          <div className="hero__meta reveal reveal--delay-4">
            <span>02ND YEAR B.TECH</span>
            <span>QUANTUM UNIVERSITY</span>
            <span>ROORKEE, INDIA</span>
          </div>
        </div>

        <div className="hero__terminal reveal reveal--delay-2">
          <div className="terminal__top">
            <span><i /> <i /> <i /></span>
            <span>parth@secure-lab</span>
          </div>
          <div className="terminal__body">
            <p><b>01</b> <span>$ whoami</span></p>
            <p className="terminal__accent">aspiring-cybersecurity-professional</p>
            <p><b>02</b> <span>$ focus --list</span></p>
            <p className="terminal__dim">network-security · ethical-hacking · ai</p>
            <p><b>03</b> <span>$ status</span></p>
            <p className="terminal__success">● building / learning / shipping</p>
            <p><b>04</b> <span>$ _</span><span className="cursor" /></p>
          </div>
        </div>

        <a className="scroll-hint" href="#about">
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown size={18} />
        </a>
      </section>

      <section className="section section--intro" id="about">
        <div className="section__head">
          <SectionLabel>01 / ABOUT</SectionLabel>
          <div className="section__count">[01]</div>
        </div>

        <div className="about-grid">
          <div>
            <h2 className="display">
              Curious by nature.
              <br />
              <em>Security-minded</em> by design.
            </h2>
          </div>

          <div className="about-copy">
            <p>
              I&apos;m Parth Goyal, a Cyber Security student exploring the
              intersection of software engineering, intelligent systems,
              networking, and offensive security.
            </p>
            <p>
              My work is driven by hands-on building: prototypes, technical
              projects, experiments, and constant learning across the stack.
            </p>

            <div className="about-facts">
              <div>
                <span>EDUCATION</span>
                <strong>B.Tech · Cyber Security</strong>
              </div>
              <div>
                <span>UNIVERSITY</span>
                <strong>Quantum University</strong>
              </div>
              <div>
                <span>LOCATION</span>
                <strong>Haridwar, Uttarakhand</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--work" id="work">
        <div className="section__head">
          <SectionLabel>02 / SELECTED WORK</SectionLabel>
          <div className="section__count">[02]</div>
        </div>

        <div className="work-intro">
          <h2 className="display display--compact">
            Systems I&apos;ve
            <br />
            <em>built & explored.</em>
          </h2>
          <p>
            A selection of cybersecurity, AI, and full-stack projects. Each
            one started as a problem worth understanding.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <a
              className="project"
              href={project.link}
              target="_blank"
              rel="noreferrer"
              key={project.title}
            >
              <div className="project__index">{project.index}</div>
              <div className="project__main">
                <span className="project__type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project__tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <div className="project__arrow">
                <ExternalLink size={19} />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section section--skills" id="skills">
        <div className="section__head">
          <SectionLabel>03 / TOOLKIT</SectionLabel>
          <div className="section__count">[03]</div>
        </div>

        <div className="skills-grid">
          <div className="skills-copy">
            <h2 className="display display--compact">
              Tools are
              <br />
              <em>means, not limits.</em>
            </h2>
            <p>
              I move between low-level concepts, security tooling, web
              interfaces, and AI experiments depending on the problem.
            </p>
          </div>

          <div className="skills-cloud">
            {skills.map((skill, index) => (
              <span key={skill} style={{ "--i": index } as React.CSSProperties}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="capability-row">
          <div><Shield size={20} /><span>SECURITY</span><small>Network · OSINT · Ethical Hacking</small></div>
          <div><Code2 size={20} /><span>DEVELOPMENT</span><small>Python · C/C++ · Web</small></div>
          <div><Cpu size={20} /><span>AI / ML</span><small>Intelligent systems · experimentation</small></div>
          <div><Network size={20} /><span>NETWORKING</span><small>Protocols · tools · troubleshooting</small></div>
        </div>
      </section>

      <section className="section section--lab">
        <div className="section__head">
          <SectionLabel>04 / LAB MODE</SectionLabel>
          <div className="section__count">[04]</div>
        </div>

        <div className="lab-panel">
          <div className="lab-panel__glow" />
          <div className="lab-panel__icon"><Terminal size={28} /></div>
          <div>
            <span className="project__type">INTERACTIVE LAYER</span>
            <h2>Parth&apos;s Cyber Lab</h2>
            <p>
              A dedicated space for security demos, technical experiments,
              write-ups, and interactive challenges.
            </p>
          </div>
          <span className="lab-panel__soon">COMING NEXT</span>
        </div>
      </section>

      <section className="section section--contact" id="contact">
        <div className="contact-card">
          <div className="contact-card__orb" />
          <SectionLabel>05 / CONTACT</SectionLabel>
          <h2 className="display">
            Let&apos;s build something
            <br />
            <em>worth shipping.</em>
          </h2>
          <p>
            Send a message, connect socially, or request a call. Messages
            submitted here are routed to Parth&apos;s inbox.
          </p>

          <ContactPanel />
        </div>
      </section>

      <AIAssistant />

      <footer className="footer">
        <div>PARTH GOYAL © {new Date().getFullYear()}</div>
        <div className="footer__links">
          <a href="https://github.com/goyalparth61-netizen" target="_blank" rel="noreferrer"><Github size={16} /></a>
          <a href="https://in.linkedin.com/in/parth-goyal-215231385" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
          <a href="mailto:goyalparth61@gmail.com"><Mail size={16} /></a>
        </div>
        <div className="footer__note"><Sparkles size={13} /> DESIGNED FOR THE WEB</div>
      </footer>
    </main>
  );
}
