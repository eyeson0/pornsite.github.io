import Link from 'next/link';
import { Search, SlidersHorizontal } from 'lucide-react';
import { featuredVideos } from '@/lib/data';
import { VideoCard } from '@/components/video-card';

export default function BrowsePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/10 bg-[#111a26]/80 p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-orange-300">Browse</p>
            <h1 className="mt-2 text-3xl font-black text-white sm:text-4xl">Discover the collection</h1>
          </div>
          <div className="flex w-full max-w-lg items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              aria-label="Search catalog"
              placeholder="Search by title, creator, or vibe"
              className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
            />
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[250px_1fr]">
        <aside className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-white">
            <SlidersHorizontal className="h-4 w-4 text-orange-300" />
            Filters
          </div>
          <div className="space-y-6 text-sm text-slate-300">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">Category</p>
              <div className="space-y-2">
                {['All', 'Romance', 'Drama', 'Studio', 'Fantasy', 'Documentary'].map((filter) => (
                  <label key={filter} className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4 rounded border-white/10 bg-slate-800" />
                    {filter}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">Sort by</p>
              <select className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-sm text-white">
                <option>Most recent</option>
                <option>Highest rated</option>
                <option>Most viewed</option>
              </select>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">Duration</p>
              <input type="range" min="0" max="100" className="w-full accent-orange-500" />
            </div>
          </div>
        </aside>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Popular titles</h2>
            <Link href="/search" className="text-sm text-orange-300">
              Advanced search
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredVideos.map((video) => (
              <VideoCard key={video.slug} video={video} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
