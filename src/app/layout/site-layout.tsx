'use client';

import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Resume', href: '#resume' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-950 text-white">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-900 p-6 flex flex-col items-center justify-between fixed h-full z-10">
        <div className="space-y-4 text-center">
          <h1 className="text-2xl font-bold">Manishkumar</h1>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm hover:text-blue-400 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="text-xs text-gray-500">© 2025</p>
      </aside>

      {/* Horizontal Scroll Area */}
      <main className="ml-60 flex-1 overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth snap-x snap-mandatory">
  <div className="flex h-full">{children}</div>
</main>


    </div>
  );
}
