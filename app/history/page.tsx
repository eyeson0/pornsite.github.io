import { Clock3 } from 'lucide-react';
import { featuredVideos } from '@/lib/data';

export default function HistoryPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/10 bg-[#111a26]/90 p-6">
        <div className="flex items-center gap-3">
          <Clock3 className="h-5 w-5 text-orange-300" />
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-orange-300">Recent</p>
            <h1 className="mt-2 text-3xl font-black text-white">Watch history</h1>
          </div>
        </div>
      </section>

      <div className="space-y-4">
        {featuredVideos.slice(0, 5).map((video, index) => (
          <div key={video.slug} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4">
            <img src={video.image} alt={video.title} className="h-20 w-24 rounded-2xl object-cover" />
            <div className="flex-1">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{index + 1}h ago</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{video.creator} • {video.length}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
