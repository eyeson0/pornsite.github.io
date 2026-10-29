-- Create profiles table
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  username text unique,
  avatar_url text,
  is_adult boolean default true,
  age_verified boolean default false,
  created_at timestamptz default now()
);

-- Create creators table
create table if not exists creators (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  stage_name text not null,
  bio text,
  is_verified boolean default false,
  followers_count integer default 0,
  created_at timestamptz default now()
);

-- Create videos table
create table if not exists videos (
  id uuid primary key default gen_random_uuid(),
  creator_id uuid references creators(id) on delete set null,
  slug text unique not null,
  title text not null,
  description text,
  category text,
  thumbnail_url text,
  video_url text,
  status text default 'draft' check (status in ('draft', 'review', 'approved', 'rejected')),
  is_licensed boolean default false,
  rating numeric(3,2) default 0,
  created_at timestamptz default now()
);

-- Create favorites table
create table if not exists favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  video_id uuid references videos(id) on delete cascade,
  created_at timestamptz default now(),
  unique (user_id, video_id)
);

-- Create watch history
create table if not exists watch_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  video_id uuid references videos(id) on delete cascade,
  watched_at timestamptz default now(),
  progress_seconds integer default 0
);

-- Create moderation reports
create table if not exists reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  video_id uuid references videos(id) on delete set null,
  report_type text not null,
  description text,
  status text default 'open' check (status in ('open', 'in_review', 'resolved')),
  created_at timestamptz default now()
);

-- Create consent and age verification table
create table if not exists age_verification (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  confirmed_adult boolean default false,
  verified_at timestamptz,
  country_code text,
  consent_text text not null,
  created_at timestamptz default now()
);

-- Row Level Security examples
alter table profiles enable row level security;
alter table creators enable row level security;
alter table videos enable row level security;
alter table favorites enable row level security;
alter table watch_history enable row level security;
alter table reports enable row level security;
alter table age_verification enable row level security;

create policy "Users can read own profile" on profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);
create policy "Anyone can read public creators" on creators for select using (true);
create policy "Anyone can read approved videos" on videos for select using (status = 'approved');
create policy "Users can manage favorites" on favorites for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users can manage watch history" on watch_history for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users can submit reports" on reports for insert with check (auth.uid() = user_id);
create policy "Users can verify own age" on age_verification for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
