import type { Metadata } from 'next';
import './globals.css';
import { NavBar } from '@/components/nav-bar';
import { AgeGate } from '@/components/age-gate';

export const metadata: Metadata = {
  title: 'Velvet Vault',
  description: 'Premium adult entertainment discovery platform for adults 18+ only.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-mesh text-white antialiased">
        <AgeGate />
        <NavBar />
        <main className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">{children}</main>
      </body>
    </html>
  );
}
