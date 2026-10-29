export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 rounded-[2rem] border border-white/10 bg-[#111a26]/90 p-8">
      <p className="text-xs uppercase tracking-[0.25em] text-orange-300">Legal</p>
      <h1 className="text-3xl font-black text-white">Privacy policy</h1>
      <div className="space-y-4 text-slate-300">
        <p>Velvet Vault is designed for adults aged 18+ and uses age assurance, privacy safeguards, and lawful data practices consistent with applicable regulations.</p>
        <p>We collect account information, usage events, and consent-related documentation required to maintain a secure adult-only service. We do not sell personal data and do not retain sensitive content beyond required record keeping.</p>
        <p>Users may request data access, correction, deletion, or consent changes through account settings or support workflows.</p>
      </div>
    </div>
  );
}
