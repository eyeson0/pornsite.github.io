import Link from 'next/link';
import { Bookmark, Clock3, PlayCircle } from 'lucide-react';
import { featuredVideos } from '@/lib/data';

export default function FavoritesPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/10 bg-[#111a26]/90 p-6">
        <div className="flex items-center gap-3">
          <Bookmark className="h-5 w-5 text-orange-300" />
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-orange-300">Library</p>
            <h1 className="mt-2 text-3xl font-black text-white">My favorites</h1>
          </div>
        </div>
      </section>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {featuredVideos.slice(0, 4).map((video) => (
          <div key={video.slug} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img src={video.image} alt={video.title} className="h-52 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{video.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{video.creator}</p>
              <Link href={`/video/${video.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm text-orange-300">
                <PlayCircle className="h-4 w-4" />
                Watch now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
