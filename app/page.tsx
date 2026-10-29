import Link from 'next/link';
import { ArrowRight, Filter, Flame, Search, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { featuredVideos, categories, trendingNow } from '@/lib/data';
import { VideoCard } from '@/components/video-card';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1422]/90 shadow-glow">
        <div className="grid gap-8 px-6 py-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-amber-200">
              <Sparkles className="h-3.5 w-3.5" />
              Curated for adults 18+
            </div>
            <div className="space-y-4">
              <h1 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl">
                Discover premium entertainment with style.
              </h1>
              <p className="max-w-lg text-base text-slate-300 sm:text-lg">
                Explore a polished streaming experience built for licensed, high-quality adult entertainment, with fast discovery, curated collections, and a premium cinematic interface.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/browse"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Explore library
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/search"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-orange-400/50 hover:bg-white/10"
              >
                <Search className="h-4 w-4" />
                Search catalog
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">4K quality</div>
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">New releases</div>
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Verified creators</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-orange-500/20 via-rose-500/10 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-4">
              <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-slate-400">
                <span>Featured</span>
                <span>Now streaming</span>
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
                  alt="Featured premium adult entertainment"
                  className="h-72 w-full object-cover"
                />
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-orange-300">Studio Select</p>
                    <h2 className="mt-2 text-2xl font-bold">Midnight Hours</h2>
                  </div>
                  <div className="rounded-full border border-amber-400/40 bg-amber-500/10 px-2 py-1 text-xs font-medium text-amber-200">
                    4.9 ★
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-300">
                  <span>12 episodes</span>
                  <span>•</span>
                  <span>Drama, romance</span>
                  <span>•</span>
                  <span>HD</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-orange-300">Categories</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Browse by vibe</h2>
          </div>
          <Link href="/browse" className="text-sm font-medium text-orange-300">
            View all
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/browse?cat=${encodeURIComponent(category.name)}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-orange-400/50 hover:bg-white/10"
            >
              <div className="mb-3 inline-flex rounded-xl bg-orange-500/10 p-3 text-orange-300">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{category.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{category.count} titles</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-orange-300">Featured picks</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Trending now</h2>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
            <Filter className="h-4 w-4" />
            Filters
          </button>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredVideos.map((video) => (
            <VideoCard key={video.slug} video={video} />
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-orange-300">Top performers</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Fresh and trending</h2>
          </div>
          <div className="flex items-center gap-2 text-amber-300">
            <Flame className="h-4 w-4" />
            <span className="text-sm font-medium">Hot this week</span>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {trendingNow.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  {item.score}
                </div>
                <span className="rounded-full border border-orange-500/40 bg-orange-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-orange-300">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
