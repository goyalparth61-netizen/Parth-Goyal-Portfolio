# Parth Goyal — Portfolio

A premium interactive portfolio for **Parth Goyal**, focused on cybersecurity, full-stack development, AI, networking, and hands-on technical projects.

## What is included

- Premium responsive portfolio UI
- Cybersecurity terminal-style hero
- Project showcase with GitHub links
- Skills / toolkit section
- **Parth AI** assistant
- AI question logging for the private admin inbox
- Contact form that emails Parth
- Call-request form with preferred date/time
- GitHub / LinkedIn / email contact links
- Protected admin dashboard at `/admin`

## Stack

- Next.js 14
- React 18
- TypeScript
- OpenAI Responses API
- Nodemailer / SMTP
- Supabase Postgres REST API
- Lucide React
- Custom CSS animations

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Backend setup

1. Create a Supabase project.
2. Open the Supabase SQL editor and run:

```text
supabase/schema.sql
```

3. Copy `.env.example` to `.env.local`.
4. Add the required secrets.

### AI

```env
OPENAI_API_KEY=...
OPENAI_MODEL=gpt-5.6-luna
```

The OpenAI key is server-side only. It is never placed in the browser bundle.

### Supabase

Use the project URL and **service-role key only on the server**:

```env
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
```

### Email

The contact form and call-request form use SMTP. Gmail can be used with an App Password:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=goyalparth61@gmail.com
SMTP_PASS=...
SMTP_FROM=goyalparth61@gmail.com
CONTACT_TO_EMAIL=goyalparth61@gmail.com
```

### Admin

Choose a strong private token:

```env
ADMIN_TOKEN=...
```

Then open `/admin` and enter that token.

### Booking calendar

There are two call-booking paths:

- **Request a call:** the built-in form stores the requested date/time and emails Parth for confirmation.
- **Live calendar:** connect a Cal.com, Calendly, or Google Calendar booking URL through:

```env
NEXT_PUBLIC_BOOKING_URL=https://...
```

## Important

Do not commit `.env.local`, API keys, SMTP passwords, or the Supabase service-role key. The repository already ignores local environment files.

## Deployment

Vercel is a straightforward deployment target for this Next.js project. Add the same environment variables in the deployment platform before using the AI, database, email, admin, and booking features.
