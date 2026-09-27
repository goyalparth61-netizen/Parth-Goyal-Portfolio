"use client";

import dynamic from "next/dynamic";
import AIAssistant from "@/components/ai-assistant";
import ContactPanel from "@/components/contact-panel";
import SmoothScroll from "@/components/smooth-scroll";
import SectionReveal from "@/components/section-reveal";
import CursorField from "@/components/cursor-field";
import IntroLoader from "@/components/intro-loader";
import ScrollProgress from "@/components/scroll-progress";
import InteractiveProject from "@/components/interactive-project";
import GitHubLive from "@/components/github-live";
import CyberLab from "@/components/cyber-lab";
import SkillOrbit from "@/components/skill-orbit";
import JourneyTimeline from "@/components/journey-timeline";
import CommandBar from "@/components/command-bar";
import MobileNav from "@/components/mobile-nav";
import HeroHud from "@/components/hero-hud";
import HeroMetrics from "@/components/hero-metrics";
import ActivityHeatmap from "@/components/activity-heatmap";

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
} from "lucide-react";

const projects = [
  {
    index: "01",
    title: "ZeroTrace",
    type: "AI Reliability Engine",
    description:
      "An agent-trace evaluation platform focused on failure detection, root-cause analysis, adversarial evaluation, and reliability signals.",
    tags: ["AI", "Backend", "Evaluation"],
    link: "/work/zerotrace",
  },
  {
    index: "02",
    title: "APS Minds",
    type: "Multi-Agent Intelligence",
    description:
      "A multi-agent intelligence platform combining a modern frontend, FastAPI services, AI integrations, and agent-oriented system design.",
    tags: ["React", "TypeScript", "FastAPI"],
    link: "/work/aps-minds",
  },
  {
    index: "03",
    title: "Ankahi Manzil",
    type: "AI Travel Platform",
    description:
      "A full-stack travel experience built around adaptive flows, AI integrations, and a scalable React + FastAPI architecture.",
    tags: ["React", "FastAPI", "AI"],
    link: "/work/ankahi-manzil",
  },
  {
    index: "04",
    title: "ProSpy",
    type: "Fake Account Detector",
    description:
      "A machine-learning project for classifying social profiles with behavioral and profile-level signals using a neural-network pipeline.",
    tags: ["Python", "TensorFlow", "ML"],
    link: "/work/prospy",
  },
  {
    index: "05",
    title: "Agnite",
    type: "Build Lab",
    description:
      "One of Parth's project repositories — presented here as a technical build-space for experimentation and iteration.",
    tags: ["GitHub", "Build", "Explore"],
    link: "/work/agnite",
  },
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
      <IntroLoader />
      <ScrollProgress />
      <CommandBar />
      <CursorField />
      <div className="noise" />

      <header className="nav">
        <a className="brand" href="#top">
          PG<span>.</span>
        </a>

        <nav className="nav__links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#journey">Journey</a>
          <a href="#github">GitHub</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav__resume" href="/resume">
          RESUME <ArrowUpRight size={14} />
        </a>

        <MobileNav />
      </header>

      <section className="hero" id="top">
        <div className="hero__grid" />
        <div className="hero__city" aria-hidden="true" />
        <img
          className="hero__avatar"
          src="https://avatars.githubusercontent.com/u/229990387?v=4"
          alt=""
          aria-hidden="true"
        />
        <Hero3D />
        <HeroHud />

        <div className="hero__content">
          <div className="eyebrow reveal">
            <span className="status-dot" />
            CYBERSECURITY × FULL-STACK × AI
          </div>

          <h1 className="hero__title reveal reveal--delay-1">
            <span className="hero__title-solid">PARTH</span>
            <span className="hero__title-outline">GOYAL</span>
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

          <HeroMetrics />
          <div className="hero__meta reveal reveal--delay-4">
            <span>02ND YEAR B.TECH</span>
            <span>QUANTUM UNIVERSITY</span>
            <span>CYBERSECURITY / AI / FULL-STACK</span>
          </div>
        </div>

        <div className="hero__terminal reveal reveal--delay-2">
          <div className="terminal__top">
            <span><i /> <i /> <i /></span>
            <span>parth@secure-lab</span>
          </div>
          <div className="terminal__body">
            <p><b>01</b> $ whoami</p>
            <p className="terminal__accent">cybersecurity · ai · full-stack</p>
            <p><b>02</b> $ status <span className="terminal__success">● online</span></p>
            <p><b>03</b> $ _<span className="cursor" /></p>
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

      <section className="section section--journey" id="journey">
        <div className="section__head">
          <SectionLabel>02 / JOURNEY</SectionLabel>
          <div className="section__count">[02]</div>
        </div>

        <div className="journey-intro">
          <div>
            <h2 className="display display--compact">
              The path so far.
              <br />
              <em>Still in motion.</em>
            </h2>
          </div>
          <p>
            Education, technical direction, and the foundation behind Parth&apos;s
            current cybersecurity and AI-focused work.
          </p>
        </div>

        <JourneyTimeline />
      </section>

      <section className="section section--work" id="work">
        <div className="section__head">
          <SectionLabel>03 / SELECTED WORK</SectionLabel>
          <div className="section__count">[03]</div>
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
            <InteractiveProject
              key={project.title}
              href={project.link}
              index={project.index}
              type={project.type}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
      </section>

      <section className="section section--skills" id="skills">
        <div className="section__head">
          <SectionLabel>04 / TOOLKIT</SectionLabel>
          <div className="section__count">[04]</div>
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

          <div className="skills-visual">
            <SkillOrbit />
          </div>
        </div>

        <div className="capability-row">
          <div><Shield size={20} /><span>SECURITY</span><small>Network · OSINT · Ethical Hacking</small></div>
          <div><Code2 size={20} /><span>DEVELOPMENT</span><small>Python · C/C++ · Web</small></div>
          <div><Cpu size={20} /><span>AI / ML</span><small>Intelligent systems · experimentation</small></div>
          <div><Network size={20} /><span>NETWORKING</span><small>Protocols · tools · troubleshooting</small></div>
        </div>
      </section>

      <section className="section section--github" id="github">
        <div className="section__head">
          <SectionLabel>05 / GITHUB SIGNAL</SectionLabel>
          <div className="section__count">[05]</div>
        </div>

        <div className="github-intro">
          <div>
            <h2 className="display display--compact">
              Code leaves
              <br />
              <em>a trace.</em>
            </h2>
          </div>
          <p>
            Live public repository and activity signals from Parth&apos;s
            GitHub profile, rendered directly from the GitHub API.
          </p>
        </div>

        <GitHubLive />
        <ActivityHeatmap />
      </section>

      <section className="section section--lab" id="lab">
        <div className="section__head">
          <SectionLabel>06 / LAB MODE</SectionLabel>
          <div className="section__count">[06]</div>
        </div>

        <CyberLab />
      </section>

      <section className="section section--contact" id="contact">
        <div className="contact-card">
          <div className="contact-card__orb" />
          <SectionLabel>07 / CONTACT</SectionLabel>
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
