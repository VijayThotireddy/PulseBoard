"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Code2 } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left */}
        <div className="flex items-center gap-4">
          {!isHome && (
            <Link
              href="/"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              <ArrowLeft size={18} />
              Home
            </Link>
          )}

          <Link href="/" className="flex items-center gap-2">
            <Code2 className="h-7 w-7 text-blue-500" />
            <span className="text-2xl font-bold text-white">
              PulseBoard
            </span>
          </Link>
        </div>

        {/* Right */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-slate-400 hover:text-white"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}