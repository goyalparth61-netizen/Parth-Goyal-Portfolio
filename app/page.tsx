"use client";

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
import CyberMarquee from "@/components/cyber-marquee";
import ThemeToggle from "@/components/theme-toggle";
import HeroNetwork from "@/components/hero-network";
import ActivityHeatmap from "@/components/activity-heatmap";

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
    title: "AGRO-OPTIMA",
    type: "AI + Agriculture",
    description: "Intelligent fertilizer optimization system using ML.",
    tags: ["AI", "ML", "Agriculture"],
    link: "/work/agro-optima",
  },
  {
    index: "02",
    title: "ZeroTrace",
    type: "Cyber Security",
    description: "Privacy-focused digital footprint analyzer.",
    tags: ["Security", "OSINT", "AI"],
    link: "/work/zerotrace",
  },
  {
    index: "03",
    title: "Portfolio Website",
    type: "Full-Stack",
    description: "A modern, animated portfolio with AI assistant.",
    tags: ["Next.js", "React", "AI"],
    link: "/work/portfolio",
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
          <a href="#lab">Cyber Lab</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav__tools">
          <a className="nav__resume" href="/resume">
            RESUME <ArrowUpRight size={14} />
          </a>
          <ThemeToggle />
        </div>

        <MobileNav />
      </header>

      <section className="hero" id="top">
        <div className="hero__grid" />
        <div className="hero__city" aria-hidden="true" />
        <img
          className="hero__avatar"
          src="/cyber-avatar.svg"
          alt=""
          aria-hidden="true"
        />
        <HeroHud />
        <HeroNetwork />

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
            <span>ROORKEE, INDIA</span>
          </div>
        </div>

        <div className="hero__terminal reveal reveal--delay-2">
          <div className="terminal__top">
            <span><i /> <i /> <i /></span>
            <span>SYSTEM_01&nbsp;&nbsp;&nbsp;&nbsp;16:28:14</span>
          </div>
          <div className="terminal__body">
            <p><b>01</b> $ whoami</p>
            <p className="terminal__accent">aspiring-cybersecurity-professional</p>
            <p><b>02</b> $ focus --list</p>
            <p className="terminal__dim">network-security · ethical-hacking · ai</p>
            <p><b>03</b> $ status</p>
            <p className="terminal__success">● building / learning / shipping</p>
            <p><b>04</b> $ _<span className="cursor" /></p>
          </div>
        </div>
        <div className="hero-focus" aria-hidden="true">
          <span>FOCUS</span><span>LEARN</span><span>BUILD</span><strong>REPEAT_</strong>
        </div>

        <a className="scroll-hint" href="#about">
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown size={18} />
        </a>
      </section>

      <CyberMarquee />

      <section className="section section--intro" id="about">
        <div className="section__head">
          <SectionLabel>01 / ABOUT</SectionLabel>
          <div className="section__count">[01]</div>
        </div>

        <div className="about-grid">
          <div className="about-copy-main">
            <h2 className="about-heading">ABOUT ME</h2>
            <p>
              I&apos;m Parth, a Cyber Security student passionate about technology,
              problem solving and building impactful projects. I love exploring AI,
              security, and full-stack development, and I believe in continuous
              learning and turning ideas into real solutions.
            </p>
            <a className="button button--ghost about-more" href="#journey">More About Me <ArrowUpRight size={15} /></a>
          </div>

          <div className="about-quote" aria-hidden="true">
            <span>“</span>
            <strong>CURIOUS<br />CREATIVE<br />CONSISTENT</strong>
            <span>”</span>
          </div>

          <div className="about-facts">
            <div>
              <span>EDUCATION</span>
              <strong>B.Tech CSE (Cyber Security)</strong>
              <small>Quantum University<br />2023 — 2027</small>
            </div>
            <div>
              <span>LOCATION</span>
              <strong>India</strong>
              <small>Open to opportunities</small>
            </div>
            <div>
              <span>INTERESTS</span>
              <div className="interest-tags">
                <b>Cyber Security</b><b>AI</b><b>Web Development</b><b>Research</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--work" id="work">
        <div className="section__head">
          <SectionLabel>02 / FEATURED PROJECTS</SectionLabel>
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

      <section className="section section--journey" id="journey">
        <div className="section__head">
          <SectionLabel>03 / JOURNEY</SectionLabel>
          <div className="section__count">[03]</div>
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
