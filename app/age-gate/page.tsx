import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export default function AgeGatePage() {
  return (
    <div className="mx-auto max-w-lg rounded-[2rem] border border-white/10 bg-[#111a26]/90 p-8 text-center">
      <div className="mb-6 inline-flex items-center justify-center rounded-full bg-orange-500/10 p-3 text-orange-300">
        <ShieldCheck className="h-6 w-6" />
      </div>
      <p className="text-xs uppercase tracking-[0.28em] text-orange-300">Adult content</p>
      <h1 className="mt-3 text-3xl font-black text-white">Age verification required</h1>
      <p className="mt-4 text-slate-300">This website is intended for adults aged 18+ only. Please confirm that you are of legal age in your jurisdiction to continue.</p>
      <div className="mt-8 flex justify-center gap-3">
        <button className="rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-3 text-sm font-semibold text-slate-950">I am 18+</button>
        <Link href="/" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white">Exit</Link>
      </div>
    </div>
  );
}
