import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname.startsWith('/brands');

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 mt-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-6">
            <a
              href="mailto:list.cultcurate@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors"
            >
              <Mail size={20} />
              List Your Product
            </a>
            <p className="text-zinc-500">© 2025 New Releases. All products belong to their respective owners.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}