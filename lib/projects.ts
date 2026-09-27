export type Project = {
  slug: string;
  index: string;
  title: string;
  eyebrow: string;
  description: string;
  stack: string[];
  focus: string[];
  github: string;
  accent: "lime" | "violet";
};

export const projects: Project[] = [
  {
    slug: "zerotrace",
    index: "01",
    title: "ZeroTrace",
    eyebrow: "AI RELIABILITY / AGENT EVALUATION",
    description:
      "A platform for inspecting agent traces, evaluating behavior, detecting failures, and turning execution data into reliability signals.",
    stack: ["AI Systems", "Evaluation", "Backend"],
    focus: ["Trace analysis", "Failure detection", "Root-cause analysis", "Adversarial evaluation"],
    github: "https://github.com/archisharma158-cmd/ZeroTrace",
    accent: "lime",
  },
  {
    slug: "aps-minds",
    index: "02",
    title: "APS Minds",
    eyebrow: "MULTI-AGENT INTELLIGENCE",
    description:
      "A multi-agent intelligence platform combining a modern frontend, FastAPI services, AI integrations, and agent-oriented system design.",
    stack: ["React", "TypeScript", "Vite", "FastAPI"],
    focus: ["Multi-agent workflows", "AI integration", "System design", "Web interface"],
    github: "https://github.com/archisharma158-cmd/APS-Minds",
    accent: "violet",
  },
  {
    slug: "ankahi-manzil",
    index: "03",
    title: "Ankahi Manzil",
    eyebrow: "AI / FULL-STACK TRAVEL",
    description:
      "An adaptive travel platform built around a React frontend, FastAPI backend, database support, and AI-powered experiences.",
    stack: ["React", "Vite", "Tailwind", "FastAPI"],
    focus: ["Adaptive experiences", "AI integration", "API architecture", "Full-stack delivery"],
    github: "https://github.com/goyalparth61-netizen/Ankahi-Manzil",
    accent: "lime",
  },
  {
    slug: "prospy",
    index: "04",
    title: "ProSpy",
    eyebrow: "MACHINE LEARNING / FAKE ACCOUNT DETECTION",
    description:
      "A machine-learning pipeline for distinguishing fake and genuine social profiles using profile and behavioral indicators.",
    stack: ["Python", "TensorFlow / Keras", "Pandas", "scikit-learn"],
    focus: ["Profile signals", "Behavioral analysis", "Neural-network classification", "Risk detection"],
    github: "https://github.com/archisharma158-cmd/ProSpy_Fake_Account_Detector",
    accent: "violet",
  },
  {
    slug: "agnite",
    index: "05",
    title: "Agnite",
    eyebrow: "BUILD LAB / EXPERIMENTATION",
    description:
      "A project repository in Parth's portfolio, presented as an experimentation space for ideas, implementation, and iteration.",
    stack: ["GitHub", "Build", "Experiment"],
    focus: ["Prototyping", "Iteration", "Technical exploration"],
    github: "https://github.com/goyalparth61-netizen/Agnite",
    accent: "lime",
  },
];

export const projectMap = Object.fromEntries(
  projects.map((project) => [project.slug, project])
) as Record<string, Project>;
