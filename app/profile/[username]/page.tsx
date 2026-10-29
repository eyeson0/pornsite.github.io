import Link from 'next/link';
import { Camera, Heart, ShieldCheck, UserRound } from 'lucide-react';
import { creators } from '@/lib/data';

export default function CreatorProfile({ params }: { params: { username: string } }) {
  const creator = creators.find((item) => item.username === params.username) ?? creators[0];

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#111a26]/90">
        <div className="relative h-64 bg-gradient-to-r from-purple-900/80 via-black to-orange-800/60" />
        <div className="p-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-2xl font-bold text-white">
                {creator.name.slice(0, 1)}
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-orange-300">Creator</p>
                <h1 className="mt-2 text-3xl font-black text-white">{creator.name}</h1>
                <p className="text-sm text-slate-300">@{creator.username}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <UserRound className="h-4 w-4 text-orange-300" />
                {creator.followers} followers
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <Heart className="h-4 w-4 text-orange-300" />
                {creator.likes} likes
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-orange-300">
            <Camera className="h-4 w-4" />
            About
          </div>
          <p className="text-slate-300">{creator.bio}</p>
        </div>

        <div className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-orange-300">
            <ShieldCheck className="h-4 w-4" />
            Compliance
          </div>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>• Verified identity and age checks</li>
            <li>• Consent and rights documentation</li>
            <li>• Privacy-first account controls</li>
          </ul>
          <Link href="/register" className="inline-flex rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-2.5 text-sm font-semibold text-slate-950">
            Follow creator
          </Link>
        </div>
      </section>
    </div>
  );
}
