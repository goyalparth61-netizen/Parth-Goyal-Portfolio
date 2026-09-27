import nodemailer from "nodemailer";

export function env(name: string, fallback = "") {
  return process.env[name] ?? fallback;
}

export async function insertRow(table: string, row: Record<string, unknown>) {
  const url = env("SUPABASE_URL");
  const key = env("SUPABASE_SERVICE_ROLE_KEY");

  if (!url || !key) {
    throw new Error("Supabase is not configured. Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
  }

  const response = await fetch(`${url}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
    cache: "no-store",
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Supabase insert failed: ${detail}`);
  }
}

export async function selectRows(table: string, limit = 100) {
  const url = env("SUPABASE_URL");
  const key = env("SUPABASE_SERVICE_ROLE_KEY");

  if (!url || !key) {
    throw new Error("Supabase is not configured.");
  }

  const endpoint =
    `${url}/rest/v1/${table}?select=*&order=created_at.desc&limit=${Math.min(limit, 200)}`;

  const response = await fetch(endpoint, {
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Supabase read failed: ${detail}`);
  }

  return response.json();
}

export async function sendEmail({
  subject,
  html,
  replyTo,
}: {
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const host = env("SMTP_HOST");
  const port = Number(env("SMTP_PORT", "587"));
  const user = env("SMTP_USER");
  const pass = env("SMTP_PASS");
  const from = env("SMTP_FROM", user);
  const to = env("CONTACT_TO_EMAIL", "goyalparth61@gmail.com");

  if (!host || !user || !pass || !from || !to) {
    throw new Error("SMTP is not configured. Add SMTP_HOST, SMTP_USER, SMTP_PASS and CONTACT_TO_EMAIL.");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from,
    to,
    replyTo,
    subject,
    html,
  });
}
