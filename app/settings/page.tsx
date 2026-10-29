import Link from 'next/link';
import { Bell, LockKeyhole, ShieldCheck } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/10 bg-[#111a26]/90 p-6">
        <p className="text-xs uppercase tracking-[0.25em] text-orange-300">Account</p>
        <h1 className="mt-2 text-3xl font-black text-white">Preferences & settings</h1>
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-orange-300"><LockKeyhole className="h-4 w-4" /> Security</div>
          <div className="space-y-4 text-sm text-slate-300">
            <label className="block">
              Email
              <input type="email" defaultValue="you@example.com" className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white" />
            </label>
            <label className="block">
              Password
              <input type="password" defaultValue="password" className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white" />
            </label>
          </div>
        </div>

        <div className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-orange-300"><Bell className="h-4 w-4" /> Notifications</div>
          <div className="space-y-3 text-sm text-slate-300">
            <label className="flex items-center justify-between"><span>Featured releases</span><input type="checkbox" defaultChecked className="h-4 w-4" /></label>
            <label className="flex items-center justify-between"><span>Creator updates</span><input type="checkbox" defaultChecked className="h-4 w-4" /></label>
            <label className="flex items-center justify-between"><span>Account alerts</span><input type="checkbox" className="h-4 w-4" /></label>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-orange-500/25 bg-orange-500/10 p-5 text-sm text-orange-100">
        <div className="flex items-center gap-2 font-semibold"><ShieldCheck className="h-4 w-4" /> Privacy-first account controls</div>
        <p className="mt-2">Manage your data retention, consent preferences, and privacy settings from a single dashboard.</p>
      </div>
    </div>
  );
}
