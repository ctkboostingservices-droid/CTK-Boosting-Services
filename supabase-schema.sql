-- CTK Boosting Services - Supabase schema (run later when you are ready)
create table if not exists public.site_settings (
  id bigint primary key generated always as identity,
  site_name text not null default 'CTK Boosting Services',
  tagline text not null default '',
  whatsapp text not null default '+94 75 748 6410',
  whatsapp_number text not null default '94757486410',
  followers text not null default '0',
  following text not null default '0',
  hero_badges jsonb not null default '["🔥 Fast Delivery","💰 Affordable Prices","🛡️ Support"]'::jsonb,
  updated_at timestamptz not null default now()
);
create table if not exists public.services (
  id uuid primary key default gen_random_uuid(), title text not null, icon text default '★', color text default 'blue', description text default '', active boolean not null default true, sort_order int not null default 0, updated_at timestamptz not null default now()
);
create table if not exists public.platforms (
  id uuid primary key default gen_random_uuid(), name text not null, icon text default '●', logo_class text default '', subtitle text default '', services jsonb not null default '[]'::jsonb, active boolean not null default true, sort_order int not null default 0, updated_at timestamptz not null default now()
);
-- For production: enable RLS and create policies for authenticated admins only.
