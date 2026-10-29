import Link from 'next/link';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-lg rounded-[2rem] border border-white/10 bg-[#111a26]/90 p-8">
      <div className="mb-6 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-orange-300">Join</p>
        <h1 className="mt-2 text-3xl font-black text-white">Create an account</h1>
      </div>
      <form className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm text-slate-300">
            First name
            <input type="text" className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60" placeholder="Jamie" />
          </label>
          <label className="block text-sm text-slate-300">
            Last name
            <input type="text" className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60" placeholder="Stone" />
          </label>
        </div>
        <label className="block text-sm text-slate-300">
          Email
          <input type="email" className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60" placeholder="jamie@example.com" />
        </label>
        <label className="block text-sm text-slate-300">
          Password
          <input type="password" className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60" placeholder="Create a secure password" />
        </label>
        <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 p-4 text-sm text-orange-100">
          <div className="mb-2 flex items-center gap-2 font-semibold"><ShieldCheck className="h-4 w-4" /> Age verification requirement</div>
          <p>Adult-only access requires confirmation that the visitor is 18+ and subject to applicable legal age requirements.</p>
        </div>
        <button className="w-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-3 text-sm font-semibold text-slate-950">
          Create account
        </button>
      </form>
      <div className="mt-6 text-center text-sm text-slate-300">
        Already have an account? <Link href="/login" className="text-orange-300">Log in</Link>
      </div>
    </div>
  );
}
