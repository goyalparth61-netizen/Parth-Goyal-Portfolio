"use client";

import { ArrowUpRight, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import AIAssistant from "@/components/ai-assistant";
import ContactPanel from "@/components/contact-panel";
import SmoothScroll from "@/components/smooth-scroll";
import ThemeToggle from "@/components/theme-toggle";

const projects = [
  {
    n: "01",
    type: "AI + THERMAL INTELLIGENCE",
    title: "AGNITE",
    text: "India-focused thermal intelligence using NASA FIRMS data, historical analysis, explainable classification and recurrence prediction.",
    tech: "React · TypeScript · NASA FIRMS · Leaflet",
    github: "https://github.com/goyalparth61-netizen/Agnite",
  },
  {
    n: "02",
    type: "AI SECURITY",
    title: "ZeroTrace",
    text: "AI-agent evaluation and reliability engine for adversarial testing, trace analysis, failure detection and reliability evidence.",
    tech: "AI Agents · Evaluation · Reliability",
    github: "https://github.com/archisharma158-cmd/ZeroTrace",
    live: "https://zero-trace-nine.vercel.app/",
  },
  {
    n: "03",
    type: "ML + CYBER SECURITY",
    title: "ProSpy",
    text: "Neural-network system that classifies social-media profiles as fake or genuine from profile attributes.",
    tech: "Python · TensorFlow · Keras · Scikit-learn",
    github: "https://github.com/archisharma158-cmd/ProSpy_Fake_Account_Detector",
    live: "https://pro-spy-fake-account-detector.vercel.app/detect",
  },
];

export default function Home() {
  return (
    <main className="site">
      <SmoothScroll />

      <header className="site-nav">
        <a className="site-logo" href="#top">PG<span>.</span></a>

        <nav>
          <a className="active" href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#journey">Journey</a>
          <a href="#github">GitHub</a>
          <a href="#lab">Cyber Lab</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <a className="resume-link" href="#contact">RESUME <ArrowUpRight size={14}/></a>
          <ThemeToggle />
        </div>
      </header>

      <section className="ref-hero" id="top">
        <div className="ref-hero__art" aria-hidden="true" />
        <div className="ref-hero__vignette" />

        <div className="ref-hero__copy">
          <div className="ref-kicker"><i /> CYBER SECURITY <b>×</b> AI <b>×</b> FULL-STACK</div>

          <h1>
            <span>PARTH</span>
            <em>GOYAL</em>
          </h1>

          <p>
            Building secure, intelligent and modern digital systems —
            from cybersecurity experiments to AI-powered products.
          </p>

          <div className="ref-actions">
            <a className="lime-button" href="#work">Explore My Work <ArrowUpRight size={17}/></a>
            <a className="dark-button" href="#contact">Get In Touch <ArrowUpRight size={17}/></a>
          </div>

          <div className="ref-stats">
            <div><strong>5+</strong><span>PROJECTS</span></div>
            <div><strong>2+</strong><span>YEARS LEARNING</span></div>
            <div><strong>10+</strong><span>TECHNOLOGIES</span></div>
            <div><strong>∞</strong><span>CURIOSITY</span></div>
          </div>
        </div>

        <div className="ref-terminal">
          <div className="terminal-head">
            <span><i/><i/><i/></span>
            <b>parth@portfolio:~</b>
          </div>
          <div className="terminal-body">
            <p><small>01</small> $ whoami</p>
            <strong>&gt; aspiring-cybersecurity-professional</strong>
            <p><small>02</small> $ focus --list</p>
            <p className="dim">network-security · ethical-hacking · ai</p>
            <p><small>03</small> $ status</p>
            <strong>● building / learning / shipping</strong>
            <p><small>04</small> $ _<span className="blink"/></p>
          </div>
        </div>

        <div className="ref-focus">
          <span>FOCUS</span><span>LEARN</span><span>BUILD</span><b>REPEAT_</b>
        </div>

        <div className="ref-network">
          <div className="network-orbit one"/>
          <div className="network-orbit two"/>
          <div className="network-core">AI</div>
          <label className="node ai">AI</label>
          <label className="node security">SECURITY</label>
          <label className="node dev">DEVELOPMENT</label>
        </div>

        <div className="ref-status"><i/> CURRENTLY&nbsp;&nbsp; <b>Exploring AI for real-world impact</b><ArrowUpRight size={15}/></div>

        <a className="scroll-more" href="#about">SCROLL TO EXPLORE <ChevronDown size={16}/></a>
      </section>

      <section className="ref-section about" id="about">
        <SectionNo no="01"/>
        <div className="about-copy">
          <div>
            <h2>ABOUT ME</h2>
            <p>
              I&apos;m Parth, a Cyber Security student passionate about technology,
              problem solving and building impactful projects. I love exploring AI,
              security, and full-stack development, and I believe in continuous
              learning and turning ideas into real solutions.
            </p>
            <a className="outline-button" href="#journey">More About Me <ArrowUpRight size={15}/></a>
          </div>
          <div className="about-quote">“<strong>CURIOUS<br/>CREATIVE<br/>CONSISTENT</strong>”</div>
          <div className="fact-grid">
            <Fact title="EDUCATION">B.Tech CSE (Cyber Security)<small>Quantum University<br/>2025 — Present</small></Fact>
            <Fact title="LOCATION">India<small>Open to opportunities</small></Fact>
            <Fact title="INTERESTS"><div className="pills"><span>Cyber Security</span><span>AI</span><span>Web Development</span><span>Research</span></div></Fact>
          </div>
        </div>
      </section>

      <section className="ref-section projects" id="work">
        <SectionNo no="02"/>
        <div className="section-intro">
          <h2>FEATURED<br/><em>PROJECTS</em></h2>
          <p>A selection of cybersecurity, AI and full-stack work built while learning, experimenting and shipping.</p>
          <a className="outline-button" href="https://github.com/goyalparth61-netizen" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={15}/></a>
        </div>
        <div className="project-grid">
          {projects.map((p) => (
            <article className={"project-card p"+p.n} key={p.n}>
              <span className="project-type">{p.type}</span>
              <div>
                <small>{p.n}</small>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <span className="project-tech">{p.tech}</span>
              </div>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={13}/></a>
                {p.live && <a href={p.live} target="_blank" rel="noreferrer">LIVE <ArrowUpRight size={13}/></a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ref-section simple-section" id="skills">
        <SectionNo no="03"/>
        <div className="large-heading"><span>SKILLS</span><em>SECURITY × AI × WEB</em></div>
        <div className="skill-lines">
          <div><b>01</b><strong>Cyber Security</strong><span>Kali Linux · Nmap · Network Security · OSINT</span></div>
          <div><b>02</b><strong>Development</strong><span>Python · C · C++ · HTML · CSS · Git · GitHub</span></div>
          <div><b>03</b><strong>AI / ML</strong><span>Machine Learning · Intelligent Systems · AI experimentation</span></div>
        </div>
      </section>

      <section className="ref-section simple-section" id="journey">
        <SectionNo no="04"/>
        <div className="large-heading"><span>JOURNEY</span><em>STILL IN MOTION.</em></div>
        <div className="journey-row"><b>2025 — PRESENT</b><strong>B.Tech — Cyber Security</strong><span>Quantum University · Roorkee</span></div>
        <div className="journey-row"><b>NOW</b><strong>Building + Learning</strong><span>Cybersecurity, AI, networking and full-stack development</span></div>
      </section>

      <section className="ref-section simple-section" id="github">
        <SectionNo no="05"/>
        <div className="large-heading"><span>GITHUB</span><em>CODE LEAVES A TRACE.</em></div>
        <div className="github-card">
          <Github size={28}/>
          <div><strong>goyalparth61-netizen</strong><span>5+ projects · experiments · continuous learning</span></div>
          <a href="https://github.com/goyalparth61-netizen" target="_blank" rel="noreferrer"><ArrowUpRight/></a>
        </div>
      </section>

      <section className="ref-section simple-section" id="lab">
        <SectionNo no="06"/>
        <div className="large-heading"><span>CYBER LAB</span><em>BUILD. BREAK. LEARN.</em></div>
        <div className="lab-grid"><span>NETWORK SECURITY</span><span>OSINT</span><span>ETHICAL HACKING</span><span>AI SECURITY</span></div>
      </section>

      <section className="ref-section contact-section" id="contact">
        <SectionNo no="07"/>
        <div className="contact-layout">
          <div>
            <div className="large-heading"><span>CONTACT</span><em>LET&apos;S BUILD.</em></div>
            <p>Have a project, opportunity or idea? Send a message or connect directly.</p>
            <div className="socials">
              <a href="mailto:goyalparth61@gmail.com"><Mail/> EMAIL</a>
              <a href="https://www.linkedin.com/in/parth-goyal-215231385/" target="_blank" rel="noreferrer"><Linkedin/> LINKEDIN</a>
              <a href="https://github.com/goyalparth61-netizen" target="_blank" rel="noreferrer"><Github/> GITHUB</a>
            </div>
          </div>
          <ContactPanel />
        </div>
      </section>

      <AIAssistant />

      <footer className="ref-footer">
        <span>PARTH GOYAL © {new Date().getFullYear()}</span>
        <span>CYBER SECURITY × AI × FULL-STACK</span>
      </footer>
    </main>
  );
}

function SectionNo({no}:{no:string}) {
  return <div className="section-no"><span/>{no}</div>;
}

function Fact({title,children}:{title:string,children:React.ReactNode}) {
  return <div className="fact"><label>{title}</label><strong>{children}</strong></div>;
}
