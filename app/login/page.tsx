import Link from 'next/link';
import { Mail, ShieldCheck, UserRound } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-lg rounded-[2rem] border border-white/10 bg-[#111a26]/90 p-8">
      <div className="mb-6 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-orange-300">Access</p>
        <h1 className="mt-2 text-3xl font-black text-white">Sign in</h1>
      </div>
      <form className="space-y-5">
        <label className="block text-sm text-slate-300">
          Email address
          <input type="email" className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60" placeholder="you@example.com" />
        </label>
        <label className="block text-sm text-slate-300">
          Password
          <input type="password" className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60" placeholder="••••••••" />
        </label>
        <button className="w-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-3 text-sm font-semibold text-slate-950">
          Log in
        </button>
      </form>
      <div className="mt-6 flex items-center justify-between text-sm text-slate-300">
        <span className="inline-flex items-center gap-2"><UserRound className="h-4 w-4 text-orange-300" /> New to Velvet Vault?</span>
        <Link href="/register" className="text-orange-300">Create account</Link>
      </div>
      <div className="mt-8 border-t border-white/10 pt-5 text-xs text-slate-400">
        <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-orange-300" /> Protected by age assurance and secure authentication workflows.</div>
      </div>
    </div>
  );
}
