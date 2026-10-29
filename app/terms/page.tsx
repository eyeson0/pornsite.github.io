export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 rounded-[2rem] border border-white/10 bg-[#111a26]/90 p-8">
      <p className="text-xs uppercase tracking-[0.25em] text-orange-300">Legal</p>
      <h1 className="text-3xl font-black text-white">Terms of service</h1>
      <div className="space-y-4 text-slate-300">
        <p>Users must be at least 18 years of age to access content, hold valid rights to any materials they upload, and comply with the site’s moderation and reporting policies.</p>
        <p>All uploaded or distributed content must be consented to, lawfully licensed, and compliant with region-specific laws and platform requirements.</p>
        <p>Users must not post non-consensual intimate imagery, exploitative, hidden-camera, or illegal material. Violations may lead to removal, suspension, reporting to authorities, and legal action where necessary.</p>
      </div>
    </div>
  );
}
