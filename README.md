# velvet-vault

A premium adult-entertainment starter built with Next.js, TypeScript, and Tailwind CSS.

## Features
- Responsive homepage and premium streaming layout
- Browse, search, favorites, and watch-history pages
- Video detail and creator profile pages
- Age-gate verification flow
- Admin dashboard mockup
- Supabase-ready schema and environment example
- Tests and deployment guidance

## Tech stack
- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons
- Supabase client
- Vitest + Testing Library

## Local setup
1. Install dependencies:
   npm install
2. Copy `.env.example` to `.env.local` and populate your values.
3. Start in development mode:
   npm run dev
4. Open http://localhost:3000

## Production build
npm run build
npm run start

## Supabase setup
- Create a Supabase project.
- Add your URL and anon key to `.env.local`.
- Run the SQL in `supabase/schema.sql` in the Supabase SQL editor.
- Configure row-level security and storage policies for licensed videos.

## Deployment
- Deploy to Vercel or another Next.js-compatible provider.
- Set environment variables in the deployment dashboard.
- Enable HTTPS and configure CI checks.
- Restrict the site to adults using age assurance and legal compliance checks.

## Important requirement
This project includes legal compliance and adult-only access guardrails. Do not claim unauthorized or unlicensed content. Use only authorized creators, legal licensing, and properly configured age gates.
