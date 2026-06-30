-- ============================================================================
-- Health 206 — Initial Database Schema
-- Migration: 0001_init_health206_schema
-- ============================================================================
-- Run this once in Supabase SQL Editor (or via `supabase db push` if you use
-- the Supabase CLI with migrations). This is idempotent-safe via IF NOT EXISTS
-- guards where practical, but is intended to run on a fresh project.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- EXTENSIONS
-- ----------------------------------------------------------------------------
create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";

-- ----------------------------------------------------------------------------
-- ENUM TYPES
-- ----------------------------------------------------------------------------
do $$
begin
  if not exists (select 1 from pg_type where typname = 'appointment_status') then
    create type appointment_status as enum ('scheduled', 'completed', 'cancelled', 'no_show');
  end if;

  if not exists (select 1 from pg_type where typname = 'blood_group') then
    create type blood_group as enum ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'unknown');
  end if;

  if not exists (select 1 from pg_type where typname = 'medicine_frequency') then
    create type medicine_frequency as enum ('once_daily', 'twice_daily', 'thrice_daily', 'four_times_daily', 'as_needed', 'weekly', 'custom');
  end if;

  if not exists (select 1 from pg_type where typname = 'insurance_status') then
    create type insurance_status as enum ('active', 'expired', 'pending', 'cancelled');
  end if;

  if not exists (select 1 from pg_type where typname = 'record_category') then
    create type record_category as enum ('lab_report', 'prescription', 'diagnosis', 'imaging', 'discharge_summary', 'vaccination', 'other');
  end if;
end $$;

-- ============================================================================
-- TABLE: profiles
-- ----------------------------------------------------------------------------
-- One row per auth.users entry. Created automatically via trigger on signup.
-- This is the dedicated profiles table you asked about — even though the
-- frontend will read from auth.user metadata initially, this table exists
-- now so that:
--   1. Other tables (appointments, medical_records, etc.) have a stable
--      foreign key target that isn't the auth schema directly.
--   2. You can switch the frontend to read/write `profiles` later with zero
--      schema migration — only a data-source swap in your data-access layer.
--   3. Healthcare platforms need profile data (DOB, blood group, emergency
--      info) that doesn't belong in auth.users metadata long-term.
-- ============================================================================
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text not null,
  phone text,
  date_of_birth date,
  gender text,
  blood_group blood_group default 'unknown',
  avatar_url text,
  address_line1 text,
  address_line2 text,
  city text,
  state text,
  postal_code text,
  country text default 'IN',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.profiles is 'Extended user profile data, 1:1 with auth.users.';

-- Auto-create a profile row whenever a new auth user is created.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    new.email
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Keep updated_at fresh on every update, for all tables.
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

-- ============================================================================
-- TABLE: medical_records
-- ============================================================================
create table if not exists public.medical_records (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  category record_category not null default 'other',
  description text,
  record_date date not null default current_date,
  provider_name text,
  file_path text,        -- path within the 'medical-records' storage bucket
  file_name text,
  file_size_bytes bigint,
  file_mime_type text,
  is_archived boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.medical_records is 'Patient medical records; file_path points into Supabase Storage bucket medical-records.';

drop trigger if exists set_medical_records_updated_at on public.medical_records;
create trigger set_medical_records_updated_at
  before update on public.medical_records
  for each row execute function public.set_updated_at();

create index if not exists idx_medical_records_user_id on public.medical_records(user_id);
create index if not exists idx_medical_records_record_date on public.medical_records(record_date desc);
create index if not exists idx_medical_records_category on public.medical_records(category);

-- ============================================================================
-- TABLE: appointments
-- ============================================================================
create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  doctor_name text not null,
  specialty text,
  clinic_name text,
  location text,
  appointment_date date not null,
  appointment_time time not null,
  status appointment_status not null default 'scheduled',
  notes text,
  reminder_sent boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.appointments is 'Patient-scheduled appointments with providers.';

drop trigger if exists set_appointments_updated_at on public.appointments;
create trigger set_appointments_updated_at
  before update on public.appointments
  for each row execute function public.set_updated_at();

create index if not exists idx_appointments_user_id on public.appointments(user_id);
create index if not exists idx_appointments_date on public.appointments(appointment_date, appointment_time);
create index if not exists idx_appointments_status on public.appointments(status);

-- ============================================================================
-- TABLE: medicines
-- ============================================================================
create table if not exists public.medicines (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  name text not null,
  dosage text,                 -- e.g. "500mg"
  frequency medicine_frequency not null default 'once_daily',
  custom_schedule text,        -- free text when frequency = 'custom'
  start_date date not null default current_date,
  end_date date,
  prescribed_by text,
  notes text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint medicines_end_after_start check (end_date is null or end_date >= start_date)
);

comment on table public.medicines is 'Patient medication list, current and historical.';

drop trigger if exists set_medicines_updated_at on public.medicines;
create trigger set_medicines_updated_at
  before update on public.medicines
  for each row execute function public.set_updated_at();

create index if not exists idx_medicines_user_id on public.medicines(user_id);
create index if not exists idx_medicines_is_active on public.medicines(is_active);

-- ============================================================================
-- TABLE: insurance
-- ============================================================================
create table if not exists public.insurance (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  provider_name text not null,
  policy_number text not null,
  plan_name text,
  status insurance_status not null default 'active',
  coverage_amount numeric(12, 2),
  start_date date,
  end_date date,
  policy_document_path text,   -- path within 'insurance-documents' storage bucket
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint insurance_end_after_start check (end_date is null or start_date is null or end_date >= start_date)
);

comment on table public.insurance is 'Patient insurance policies.';

drop trigger if exists set_insurance_updated_at on public.insurance;
create trigger set_insurance_updated_at
  before update on public.insurance
  for each row execute function public.set_updated_at();

create index if not exists idx_insurance_user_id on public.insurance(user_id);
create index if not exists idx_insurance_status on public.insurance(status);
create unique index if not exists uq_insurance_user_policy_number on public.insurance(user_id, policy_number);

-- ============================================================================
-- TABLE: emergency_contacts
-- ============================================================================
create table if not exists public.emergency_contacts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  full_name text not null,
  relationship text not null,
  phone text not null,
  alternate_phone text,
  email text,
  is_primary boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.emergency_contacts is 'Contacts to notify in a medical emergency.';

drop trigger if exists set_emergency_contacts_updated_at on public.emergency_contacts;
create trigger set_emergency_contacts_updated_at
  before update on public.emergency_contacts
  for each row execute function public.set_updated_at();

create index if not exists idx_emergency_contacts_user_id on public.emergency_contacts(user_id);

-- Only one primary emergency contact per user.
create unique index if not exists uq_one_primary_contact_per_user
  on public.emergency_contacts(user_id)
  where (is_primary = true);

-- ============================================================================
-- ROW LEVEL SECURITY
-- ----------------------------------------------------------------------------
-- Policy model: every table is strictly owner-scoped. A user can only ever
-- see and modify rows where user_id (or id, for profiles) equals auth.uid().
-- No public/anon access anywhere. This is the correct default for PHI.
-- ============================================================================

alter table public.profiles enable row level security;
alter table public.medical_records enable row level security;
alter table public.appointments enable row level security;
alter table public.medicines enable row level security;
alter table public.insurance enable row level security;
alter table public.emergency_contacts enable row level security;

-- profiles
drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

-- Note: insert is handled by the handle_new_user() trigger (security definer),
-- so no insert policy is granted to end users directly.

-- medical_records
drop policy if exists "medical_records_select_own" on public.medical_records;
create policy "medical_records_select_own" on public.medical_records
  for select using (auth.uid() = user_id);

drop policy if exists "medical_records_insert_own" on public.medical_records;
create policy "medical_records_insert_own" on public.medical_records
  for insert with check (auth.uid() = user_id);

drop policy if exists "medical_records_update_own" on public.medical_records;
create policy "medical_records_update_own" on public.medical_records
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "medical_records_delete_own" on public.medical_records;
create policy "medical_records_delete_own" on public.medical_records
  for delete using (auth.uid() = user_id);

-- appointments
drop policy if exists "appointments_select_own" on public.appointments;
create policy "appointments_select_own" on public.appointments
  for select using (auth.uid() = user_id);

drop policy if exists "appointments_insert_own" on public.appointments;
create policy "appointments_insert_own" on public.appointments
  for insert with check (auth.uid() = user_id);

drop policy if exists "appointments_update_own" on public.appointments;
create policy "appointments_update_own" on public.appointments
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "appointments_delete_own" on public.appointments;
create policy "appointments_delete_own" on public.appointments
  for delete using (auth.uid() = user_id);

-- medicines
drop policy if exists "medicines_select_own" on public.medicines;
create policy "medicines_select_own" on public.medicines
  for select using (auth.uid() = user_id);

drop policy if exists "medicines_insert_own" on public.medicines;
create policy "medicines_insert_own" on public.medicines
  for insert with check (auth.uid() = user_id);

drop policy if exists "medicines_update_own" on public.medicines;
create policy "medicines_update_own" on public.medicines
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "medicines_delete_own" on public.medicines;
create policy "medicines_delete_own" on public.medicines
  for delete using (auth.uid() = user_id);

-- insurance
drop policy if exists "insurance_select_own" on public.insurance;
create policy "insurance_select_own" on public.insurance
  for select using (auth.uid() = user_id);

drop policy if exists "insurance_insert_own" on public.insurance;
create policy "insurance_insert_own" on public.insurance
  for insert with check (auth.uid() = user_id);

drop policy if exists "insurance_update_own" on public.insurance;
create policy "insurance_update_own" on public.insurance
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "insurance_delete_own" on public.insurance;
create policy "insurance_delete_own" on public.insurance
  for delete using (auth.uid() = user_id);

-- emergency_contacts
drop policy if exists "emergency_contacts_select_own" on public.emergency_contacts;
create policy "emergency_contacts_select_own" on public.emergency_contacts
  for select using (auth.uid() = user_id);

drop policy if exists "emergency_contacts_insert_own" on public.emergency_contacts;
create policy "emergency_contacts_insert_own" on public.emergency_contacts
  for insert with check (auth.uid() = user_id);

drop policy if exists "emergency_contacts_update_own" on public.emergency_contacts;
create policy "emergency_contacts_update_own" on public.emergency_contacts
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "emergency_contacts_delete_own" on public.emergency_contacts;
create policy "emergency_contacts_delete_own" on public.emergency_contacts
  for delete using (auth.uid() = user_id);

-- ============================================================================
-- STORAGE BUCKETS
-- ----------------------------------------------------------------------------
-- Two private buckets. Files are organized as: {user_id}/{filename}
-- so RLS policies can check the first path segment against auth.uid().
-- ============================================================================

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'medical-records',
  'medical-records',
  false,
  26214400, -- 25 MB
  array['application/pdf', 'image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'insurance-documents',
  'insurance-documents',
  false,
  26214400,
  array['application/pdf', 'image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do nothing;

-- Storage policies: a user may only read/write objects under a path that
-- starts with their own user id, e.g. "3f2a.../report.pdf".

drop policy if exists "medical_records_storage_select_own" on storage.objects;
create policy "medical_records_storage_select_own" on storage.objects
  for select using (
    bucket_id = 'medical-records'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

drop policy if exists "medical_records_storage_insert_own" on storage.objects;
create policy "medical_records_storage_insert_own" on storage.objects
  for insert with check (
    bucket_id = 'medical-records'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

drop policy if exists "medical_records_storage_update_own" on storage.objects;
create policy "medical_records_storage_update_own" on storage.objects
  for update using (
    bucket_id = 'medical-records'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

drop policy if exists "medical_records_storage_delete_own" on storage.objects;
create policy "medical_records_storage_delete_own" on storage.objects
  for delete using (
    bucket_id = 'medical-records'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

drop policy if exists "insurance_storage_select_own" on storage.objects;
create policy "insurance_storage_select_own" on storage.objects
  for select using (
    bucket_id = 'insurance-documents'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

drop policy if exists "insurance_storage_insert_own" on storage.objects;
create policy "insurance_storage_insert_own" on storage.objects
  for insert with check (
    bucket_id = 'insurance-documents'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

drop policy if exists "insurance_storage_update_own" on storage.objects;
create policy "insurance_storage_update_own" on storage.objects
  for update using (
    bucket_id = 'insurance-documents'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

drop policy if exists "insurance_storage_delete_own" on storage.objects;
create policy "insurance_storage_delete_own" on storage.objects
  for delete using (
    bucket_id = 'insurance-documents'
    and auth.uid()::text = (storage.foldername(name))[1] 
  );

-- ============================================================================
-- END OF MIGRATION 0001
-- ============================================================================