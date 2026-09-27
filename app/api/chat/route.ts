import { NextResponse } from "next/server";
import OpenAI from "openai";
import { insertRow, env } from "@/lib/server";

const knowledge = `
Parth Goyal is an aspiring cybersecurity professional and a B.Tech Cyber Security student at Quantum University. His areas of interest include AI, network security, ethical hacking, cloud security, programming, and emerging technologies.

Verified project references:
- ZeroTrace: an agent-trace/reliability evaluation project involving trace analysis, adversarial evaluation, failure detection, root-cause analysis, and reliability-oriented workflows.
- APS Minds: a multi-agent AI intelligence platform using a modern web frontend, FastAPI backend, AI integrations, and multi-agent system design.
- Ankahi Manzil: a full-stack travel platform using React/Vite/Tailwind on the frontend, FastAPI on the backend, and AI integrations.
- ProSpy / Fake Account Detector: a machine-learning project for classifying fake vs genuine social profiles with profile/behavioral signals and a neural-network pipeline using Python, TensorFlow/Keras, Pandas, NumPy, and scikit-learn.
- Agnite: a GitHub project repository in Parth's portfolio.

Verified skills from his portfolio/resume include Python, C, C++, HTML/CSS, Git, GitHub, Kali Linux, Nmap, computer networking, network security, analytics, leadership, teamwork, problem solving, and AI/ML exploration.

Contact:
- Email: goyalparth61@gmail.com
- GitHub: https://github.com/goyalparth61-netizen
- LinkedIn: https://in.linkedin.com/in/parth-goyal-215231385
`;

const systemPrompt = `You are "Parth AI", the personal portfolio assistant for Parth Goyal.

Rules:
1. Answer only from the verified knowledge below and the conversation.
2. Never invent certifications, employers, dates, achievements, roles, technologies, statistics, or project details.
3. If information is not available, say that the portfolio does not provide that information.
4. Keep answers concise, useful, and professional.
5. You can explain Parth's projects, skills, education, cybersecurity interests, AI work, GitHub, LinkedIn, and contact options.
6. Do not claim to be Parth. You are an assistant representing his portfolio.

VERIFIED KNOWLEDGE:
${knowledge}`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = String(body?.message ?? "").trim();

    if (!message || message.length > 1200) {
      return NextResponse.json(
        { error: "Please send a message between 1 and 1200 characters." },
        { status: 400 }
      );
    }

    const apiKey = env("OPENAI_API_KEY");
    if (!apiKey) {
      return NextResponse.json(
        { error: "Parth AI is not configured yet. Add OPENAI_API_KEY on the server." },
        { status: 503 }
      );
    }

    const openai = new OpenAI({ apiKey });
    const response = await openai.responses.create({
      model: env("OPENAI_MODEL", "gpt-5.6-luna"),
      input: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
      max_output_tokens: 500,
      store: false,
    });

    const answer =
      response.output_text?.trim() ||
      "I could not generate an answer right now. Please use the contact section instead.";

    try {
      await insertRow("ai_questions", {
        question: message,
        answer,
        model: env("OPENAI_MODEL", "gpt-5.6-luna"),
        user_agent: request.headers.get("user-agent") ?? null,
      });
    } catch (logError) {
      console.error("AI log failed:", logError);
    }

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("AI route failed:", error);
    return NextResponse.json(
      { error: "Something went wrong while processing the AI request." },
      { status: 500 }
    );
  }
}
