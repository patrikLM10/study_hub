"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="h-14 border-b border-surface-800 bg-surface-900/80 backdrop-blur-sm flex items-center px-4 lg:px-6 shrink-0">
      <div className="flex items-center gap-4 w-full">
        <Link href="/" className="lg:hidden flex items-center gap-2 text-white font-semibold">
          <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Study Hub
        </Link>
        <div className="flex-1" />
        <Link href="/search" className="btn-ghost text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="hidden sm:inline">Search</span>
          <kbd className="hidden sm:inline-flex ml-1 px-1.5 py-0.5 text-xs bg-surface-800 rounded border border-surface-700 text-slate-500">⌘K</kbd>
        </Link>
      </div>
    </header>
  );
}
