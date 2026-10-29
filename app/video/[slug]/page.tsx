import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, PlayCircle, Star } from 'lucide-react';
import { videosBySlug } from '@/lib/data';

export default function VideoPage({ params }: { params: { slug: string } }) {
  const video = videosBySlug[params.slug] ?? videosBySlug['midnight-hours'];

  return (
    <div className="space-y-8">
      <div className="mb-4">
        <Link href="/browse" className="inline-flex items-center gap-2 text-sm text-orange-300">
          <ArrowLeft className="h-4 w-4" />
          Back to library
        </Link>
      </div>

      <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#111a26]/90">
        <div className="grid gap-8 p-6 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-5">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950">
              <Image
                src={video.image}
                alt={video.title}
                width={1200}
                height={750}
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <button className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-950">
                <PlayCircle className="h-5 w-5 fill-current" />
                Play preview
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-300">
                <span>{video.category}</span>
                <span>•</span>
                <span>{video.length}</span>
                <span>•</span>
                <span>{video.quality}</span>
              </div>
              <h1 className="text-3xl font-black text-white sm:text-4xl">{video.title}</h1>
              <div className="flex items-center gap-6 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  {video.rating}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-orange-300" />
                  {video.release}
                </span>
              </div>
              <p className="max-w-2xl text-base text-slate-300">{video.description}</p>
            </div>
          </div>

          <aside className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-orange-300">Studio</p>
              <h2 className="mt-2 text-xl font-bold text-white">{video.creator}</h2>
            </div>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Format</span>
                <span className="text-white">{video.quality}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Content type</span>
                <span className="text-white">Premium</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Maturity</span>
                <span className="text-white">18+</span>
              </div>
            </div>
            <button className="w-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-3 text-sm font-semibold text-slate-950">
              Add to favorites
            </button>
            <Link
              href="/report"
              className="block w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-medium text-white"
            >
              Report content
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
