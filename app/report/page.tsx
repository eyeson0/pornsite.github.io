import Link from 'next/link';

export default function ReportPage() {
  return (
    <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/10 bg-[#111a26]/90 p-8">
      <p className="text-xs uppercase tracking-[0.25em] text-orange-300">Support</p>
      <h1 className="mt-2 text-3xl font-black text-white">Report content</h1>
      <form className="mt-6 space-y-5">
        <label className="block text-sm text-slate-300">
          Report type
          <select className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white">
            <option>Copyright complaint</option>
            <option>Consent or identity concern</option>
            <option>Illegal or exploitative content</option>
            <option>Technical issue</option>
          </select>
        </label>
        <label className="block text-sm text-slate-300">
          Details
          <textarea rows={5} className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white" placeholder="Describe the issue and include any relevant identifiers." />
        </label>
        <button className="w-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-3 text-sm font-semibold text-slate-950">
          Submit report
        </button>
      </form>
      <div className="mt-6 text-sm text-slate-300">
        Need help? <Link href="/privacy" className="text-orange-300">Review our privacy notice</Link>
      </div>
    </div>
  );
}
