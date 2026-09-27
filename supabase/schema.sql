create extension if not exists pgcrypto;

create table if not exists ai_questions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  question text not null,
  answer text not null,
  model text,
  user_agent text
);

create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null
);

create table if not exists call_bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  preferred_date date not null,
  preferred_time time not null,
  topic text,
  status text not null default 'pending'
);

create index if not exists ai_questions_created_at_idx on ai_questions(created_at desc);
create index if not exists contact_messages_created_at_idx on contact_messages(created_at desc);
create index if not exists call_bookings_created_at_idx on call_bookings(created_at desc);

alter table ai_questions enable row level security;
alter table contact_messages enable row level security;
alter table call_bookings enable row level security;

drop policy if exists "no public read ai_questions" on ai_questions;
drop policy if exists "no public read contact_messages" on contact_messages;
drop policy if exists "no public read call_bookings" on call_bookings;
