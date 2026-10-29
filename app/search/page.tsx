import Link from 'next/link';
import { Search, Sparkles } from 'lucide-react';
import { featuredVideos } from '@/lib/data';
import { VideoCard } from '@/components/video-card';

export default function SearchPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
        <div className="mb-5 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-orange-300">
          <Sparkles className="h-4 w-4" />
          Search
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-1 items-center gap-3 rounded-full border border-white/10 bg-slate-950/80 px-4 py-3">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              aria-label="Search query"
              placeholder="Search for creators, categories, or scenes"
              className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
            />
          </div>
          <button className="rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-3 text-sm font-semibold text-slate-950">
            Search catalog
          </button>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Matching results</h2>
          <Link href="/browse" className="text-sm text-orange-300">
            Refine filters
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredVideos.slice(0, 8).map((video) => (
            <VideoCard key={video.slug} video={video} />
          ))}
        </div>
      </section>
    </div>
  );
}
