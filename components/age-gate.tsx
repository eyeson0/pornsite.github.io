'use client';

import { useEffect, useState } from 'react';

export function AgeGate() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const alreadyConfirmed = window.localStorage.getItem('age-confirmed');
    if (alreadyConfirmed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const onConfirm = () => {
    window.localStorage.setItem('age-confirmed', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md">
      <div className="w-full max-w-xl rounded-[2rem] border border-orange-500/25 bg-[#111a26]/95 p-8 text-center shadow-2xl shadow-orange-500/10">
        <div className="mb-4 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-orange-300">Adult content</div>
        <h2 className="text-3xl font-black text-white">Age verification required</h2>
        <p className="mt-4 text-base text-slate-300">
          This service is intended for adults aged 18 and over. By continuing, you confirm that you are of legal age in your jurisdiction and agree to comply with all site policies.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={onConfirm}
            className="rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-3 text-sm font-semibold text-slate-950"
          >
            I am 18+
          </button>
          <a href="https://example.com" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white">
            Exit
          </a>
        </div>
      </div>
    </div>
  );
}
