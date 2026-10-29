import { BarChart3, ShieldCheck, Users } from 'lucide-react';

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/10 bg-[#111a26]/90 p-6">
        <p className="text-xs uppercase tracking-[0.25em] text-orange-300">Admin</p>
        <h1 className="mt-2 text-3xl font-black text-white">Moderator dashboard</h1>
      </section>

      <div className="grid gap-5 md:grid-cols-3">
        {[
          { label: 'Authorized library', value: '1,284', icon: BarChart3 },
          { label: 'Pending reviews', value: '18', icon: ShieldCheck },
          { label: 'Active creators', value: '142', icon: Users }
        ].map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <Icon className="h-5 w-5 text-orange-300" />
            <p className="mt-4 text-sm text-slate-300">{label}</p>
            <p className="mt-2 text-3xl font-black text-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-bold text-white">Recent publishing queue</h2>
        <div className="mt-5 space-y-3 text-sm text-slate-300">
          {['Midnight Hours', 'Velvet Echo', 'Golden Frames', 'Afterglow Stories'].map((item) => (
            <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/80 p-3">
              <span>{item}</span>
              <span className="rounded-full border border-orange-500/50 bg-orange-500/10 px-2 py-1 text-xs uppercase tracking-[0.2em] text-orange-300">Review</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
