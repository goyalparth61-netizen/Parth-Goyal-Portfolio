import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Github } from "lucide-react";
import { notFound } from "next/navigation";
import { projectMap, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const project = projectMap[slug];

  if (!project) notFound();

  return (
    <main className={`case-study case-study--${project.accent}`}>
      <div className="case-study__grid" />
      <header className="case-study__nav">
        <Link href="/" className="case-study__back">
          <ArrowLeft size={15} /> BACK TO PORTFOLIO
        </Link>
        <span>PG / CASE STUDY</span>
      </header>

      <section className="case-study__hero">
        <div className="case-study__index">{project.index}</div>
        <p className="case-study__eyebrow">{project.eyebrow}</p>
        <h1>{project.title}</h1>
        <p className="case-study__description">{project.description}</p>

        <div className="case-study__actions">
          <a
            className="button button--primary"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} /> VIEW REPOSITORY <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      <section className="case-study__body">
        <div>
          <span className="case-study__label">TECH STACK</span>
          <div className="case-study__stack">
            {project.stack.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>

        <div className="case-study__focus">
          <span className="case-study__label">CORE FOCUS</span>
          {project.focus.map((item) => (
            <div className="case-study__focus-row" key={item}>
              <Check size={15} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
