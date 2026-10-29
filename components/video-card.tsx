import Link from 'next/link';
import { ArrowUpRight, Star } from 'lucide-react';
import type { Video } from '@/lib/data';

export function VideoCard({ video }: { video: Video }) {
  return (
    <article className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#101827] shadow-lg shadow-slate-950/30 transition hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-glow">
      <div className="relative overflow-hidden">
        <img src={video.image} alt={video.title} className="h-56 w-full object-cover transition duration-500 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-slate-950/50 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-orange-200">
          {video.quality}
        </span>
      </div>
      <div className="space-y-4 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-orange-300">{video.category}</p>
            <h3 className="mt-2 text-lg font-bold text-white">{video.title}</h3>
          </div>
          <div className="inline-flex items-center gap-1 rounded-full border border-amber-400/40 bg-amber-500/10 px-2 py-1 text-xs font-medium text-amber-200">
            <Star className="h-3.5 w-3.5 fill-current" />
            {video.rating}
          </div>
        </div>
        <p className="text-sm text-slate-300">{video.description}</p>
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>{video.creator}</span>
          <span>{video.length}</span>
        </div>
        <Link
          href={`/video/${video.slug}`}
          className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-sm font-medium text-orange-200 hover:bg-white/10"
        >
          Watch now
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
