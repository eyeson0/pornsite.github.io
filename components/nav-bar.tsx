import Link from 'next/link';
import { Search, Bell, Heart, UserCircle2 } from 'lucide-react';

export function NavBar() {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/browse', label: 'Browse' },
    { href: '/search', label: 'Search' },
    { href: '/favorites', label: 'Favorites' },
    { href: '/history', label: 'History' }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09111d]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-lg font-black text-slate-950">V</div>
          <div>
            <p className="text-lg font-black tracking-tight text-white">Velvet Vault</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">18+ only</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-orange-300">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/search" className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200">
            <Search className="h-4 w-4" />
          </Link>
          <button className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200">
            <Bell className="h-4 w-4" />
          </button>
          <button className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200">
            <Heart className="h-4 w-4" />
          </button>
          <Link href="/login" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-2 text-sm font-semibold text-slate-950">
            <UserCircle2 className="h-4 w-4" />
            Account
          </Link>
        </div>
      </div>
    </header>
  );
}
